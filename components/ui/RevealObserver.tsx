"use client";

import { useEffect } from "react";

/**
 * Mounted once per app. Reveals every [data-reveal] element as it scrolls in,
 * including nodes added later by client navigation.
 */
export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      document.documentElement.setAttribute("data-reveal-off", "");
      return;
    }

    const show = (el: Element) => el.setAttribute("data-reveal", "shown");

    // Phones are scrolled by flick, so the reveal has to start well before the
    // element is on screen or the visitor arrives at content mid-fade. A whole
    // viewport of lead-in on touch devices means anything the eye can reach
    // has already finished animating.
    const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const rootMargin = touch ? "100% 0px 100% 0px" : "0px 0px 40px 0px";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin, threshold: 0 }
    );

    const observeAll = () => {
      document
        .querySelectorAll('[data-reveal=""]')
        .forEach((el) => io.observe(el));
    };

    observeAll();

    // Catch nodes rendered after client-side navigation.
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net. A reveal that never fires is a blank screen, which is a far
    // worse failure than a reveal that fires without its animation — so
    // anything still pending after the scroll settles is shown unconditionally.
    let settle: number | undefined;
    const onScrollEnd = () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        const viewportBottom = window.innerHeight * 1.5;
        document.querySelectorAll('[data-reveal=""]').forEach((el) => {
          if (el.getBoundingClientRect().top < viewportBottom) show(el);
        });
      }, 700);
    };

    onScrollEnd();
    window.addEventListener("scroll", onScrollEnd, { passive: true });
    window.addEventListener("resize", onScrollEnd, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(settle);
      window.removeEventListener("scroll", onScrollEnd);
      window.removeEventListener("resize", onScrollEnd);
    };
  }, []);

  return null;
}
