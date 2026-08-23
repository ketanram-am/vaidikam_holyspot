import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * A drawn arrow rather than the "→" character: the glyph renders at a
 * different weight and baseline in Fraunces vs Inter, which made every
 * "Learn more →" sit slightly differently across the site.
 */
export function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-3.5 w-3.5 flex-none ${className}`}
    >
      <path d="M2 8h11" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

type ArrowLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
};

/** A text link that ends in an arrow which nudges forward on hover. */
export default function ArrowLink({
  children,
  className = "",
  ...rest
}: ArrowLinkProps) {
  return (
    <Link {...rest} className={`arrow-link ${className}`}>
      <span>{children}</span>
      <ArrowGlyph />
    </Link>
  );
}

/**
 * The same affordance rendered as plain text, for use inside a card that is
 * itself the link — nesting an <a> inside an <a> is invalid HTML.
 */
export function ArrowCue({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-small font-medium text-maroon transition-colors duration-200 group-hover:text-bronze ${className}`}
    >
      <span>{children}</span>
      <ArrowGlyph className="transition-transform duration-300 ease-calm group-hover:translate-x-[3px]" />
    </span>
  );
}
