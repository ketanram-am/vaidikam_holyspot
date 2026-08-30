"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

/**
 * A scroll reveal driven by framer-motion rather than by the shared
 * IntersectionObserver.
 *
 * The CSS observer version could only do one curve for everything. This can
 * stagger its own children, blur off, and use a spring on the settle — which
 * is the difference between content appearing and content arriving.
 *
 * `domAnimation` is the reduced feature bundle (~15kB rather than the full
 * ~34kB), loaded lazily; nothing here needs layout projection or drag.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

export function Rise({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        // `once` matters: re-animating on every pass up and down the page is
        // the thing that makes scroll animation feel cheap.
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        transition={{ duration: 0.75, delay, ease: EASE }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/**
 * A container whose direct children rise in sequence. Used for lists, where
 * one shared reveal reads as a block dropping in and a stagger reads as the
 * list being laid down.
 */
export function RiseGroup({
  children,
  className = "",
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        variants={{
          hidden: {},
          shown: { transition: { staggerChildren: stagger } },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

/** One item inside a RiseGroup. */
export function RiseItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? m.li : m.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
        shown: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </Tag>
  );
}
