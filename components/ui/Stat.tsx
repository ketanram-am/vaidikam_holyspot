import { Fragment } from "react";

export type Stat = { value: string; label: string };

/**
 * A row of figures, rendered as a description list so each number is
 * programmatically bound to what it measures.
 *
 * The reveal attribute sits on the <dd> rather than on a wrapper: axe requires
 * dt/dd to be direct children of the dl, so there is nowhere else to put it.
 * The <dt> is visually hidden (and absolutely positioned, so it never becomes
 * a grid item) because the label is repeated inside the <dd> for sighted
 * readers, styled as a caption.
 */
export function StatRow({
  items,
  className = "",
}: {
  items: Stat[];
  className?: string;
}) {
  return (
    <dl
      className={`grid grid-cols-2 gap-x-0 gap-y-10 sm:grid-cols-4 ${className}`}
    >
      {items.map((item, i) => (
        <Fragment key={item.label}>
          <dt className="sr-only">{item.label}</dt>
          <dd
            data-reveal=""
            style={i ? { transitionDelay: `${i * 0.07}s` } : undefined}
            className="m-0 border-l border-bronze/25 px-[clamp(1rem,3vw,2.5rem)] text-left first:border-l-0"
          >
            <span className="block font-serif text-[clamp(2.25rem,1.6rem+3vw,4.25rem)] leading-none text-maroon">
              {item.value}
            </span>
            <span className="eyebrow-quiet mt-3 block" aria-hidden="true">
              {item.label}
            </span>
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
