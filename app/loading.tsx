/**
 * Route-level loading state. Mirrors the shape of a PageHero plus a content
 * band so a slow navigation reads as "the same page arriving" rather than as
 * a blank screen. Announced politely — a spinner nobody can perceive is not
 * an accessible loading state.
 */
export default function Loading() {
  return (
    <div id="main" role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">Loading page…</span>

      <div className="border-b border-hairline bg-cream pb-[clamp(2.75rem,1.75rem+5vw,5rem)] pt-[calc(var(--nav-height)+clamp(2.25rem,1rem+6vw,5rem))]">
        <div className="container-page flex flex-col gap-5">
          <div className="skeleton h-3 w-40" aria-hidden="true" />
          <div className="skeleton h-[clamp(2rem,1.5rem+2vw,3rem)] w-full max-w-2xl" aria-hidden="true" />
          <div className="skeleton h-4 w-full max-w-xl" aria-hidden="true" />
          <div className="skeleton h-4 w-full max-w-md" aria-hidden="true" />
        </div>
      </div>

      <div className="bg-ivory section-y">
        <div className="container-page grid gap-5 md:grid-cols-3" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border border-hairline bg-paper card-pad"
            >
              <div className="skeleton h-5 w-2/3" />
              <div className="skeleton h-3.5 w-full" />
              <div className="skeleton h-3.5 w-5/6" />
              <div className="skeleton mt-4 h-3 w-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
