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

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "shown");
            io.unobserve(entry.target);
          }
        }
      },
      // Fire as soon as a sliver enters, and start 40px early. The reveal then
      // completes roughly as the element reaches comfortable reading position,
      // instead of visibly animating after the eye has already arrived.
      { rootMargin: "0px 0px 40px 0px", threshold: 0 }
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

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
