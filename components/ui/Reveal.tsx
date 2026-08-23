import type { ReactNode } from "react";
import { stagger } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Explicit delay in seconds. Overrides `index`. */
  delay?: number;
  /** Position in a list or grid. Produces a capped stagger — prefer this. */
  index?: number;
  as?: "div" | "section" | "li" | "span";
  className?: string;
};

/**
 * Server component. Renders static markup with a CSS-driven fade/rise that a
 * single shared IntersectionObserver switches on. This keeps scroll reveals off
 * the client-JS critical path entirely (no per-instance hydration).
 *
 * Pass `index` rather than computing `delay={i * n}` by hand: the shared
 * stagger is capped, so long grids never turn into a slow cascade.
 */
export default function Reveal({
  children,
  delay,
  index,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const seconds = delay ?? (index !== undefined ? stagger(index) : 0);

  return (
    <Tag
      data-reveal=""
      style={seconds ? { transitionDelay: `${seconds}s` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
