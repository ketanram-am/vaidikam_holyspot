"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Physics-based smooth scrolling (Lenis, MIT, ~3kB).
 *
 * Native scroll on a long editorial page arrives in discrete jumps, which is
 * what made the reveals feel like things popping rather than settling. Lenis
 * interpolates the scroll position each frame, so both the page and everything
 * keyed to scroll move on the same easing curve.
 *
 * It is disabled outright under prefers-reduced-motion — hijacking scroll is
 * exactly the kind of motion that causes trouble for people who ask for less
 * of it, and native scroll is the correct fallback.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Slightly overdamped expo-out: quick to respond, no float at the end.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Touch devices already have good native inertia, and smoothing it a
      // second time feels laggy on a phone.
      smoothWheel: true,
      syncTouch: false,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // In-page anchors have to go through Lenis or they fight it.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
