import type { ReactNode } from "react";

/** A labelled piece of metadata. Rendered as a definition pair. */
export function Fact({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <dt className="eyebrow">{label}</dt>
      <dd className="mt-2 text-charcoal">{children}</dd>
    </div>
  );
}

export function FactGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <dl className={`grid gap-7 sm:grid-cols-2 ${className}`}>{children}</dl>
  );
}

/**
 * A list marked with a small bronze dot. The dot is decorative — the list
 * semantics carry the meaning for assistive technology.
 */
export function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-charcoal">
          <span
            aria-hidden="true"
            className="mt-[0.63em] h-2 w-2 flex-none rotate-45 border border-bronze/70"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
