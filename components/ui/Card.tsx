import Link from "next/link";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Dashed border signals "not yet available" without needing a label. */
  variant?: "solid" | "dashed";
  as?: "div" | "figure" | "article" | "aside";
};

export function Card({
  children,
  className = "",
  variant = "solid",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`card card-pad ${
        variant === "dashed" ? "border-dashed shadow-none" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * A whole card that acts as a single link target. The `group` class lets any
 * ArrowCue inside it respond to hover on the card rather than on the text.
 */
export function CardLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`card-interactive card-pad group ${className}`}
    >
      {children}
    </Link>
  );
}
