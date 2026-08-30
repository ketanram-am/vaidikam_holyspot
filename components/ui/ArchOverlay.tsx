/**
 * The arched niche: a clip path plus a gold edge drawn from the same geometry.
 *
 * Four earlier attempts failed, each for a traceable reason:
 *   1. a separate torana SVG over a `border-radius` frame — two different
 *      curves, so the gold floated outside the painting;
 *   2. percentage `border-radius` — that is an ellipse, not an arch, so the
 *      shape read as vague;
 *   3. `mask-image` + `mask-composite` on the frame — masked the whole subtree
 *      and lost the gold;
 *   4. an opaque "outside" fill — the cut corners were flat `#2b110e` while
 *      the ground behind them is a radial gradient, so the corners showed as
 *      darker rectangles.
 *
 * The fix is to clip rather than to paint over: `clipPath` in
 * `objectBoundingBox` units makes the area outside the arch genuinely
 * transparent, so whatever gradient is behind shows through. The gold stroke
 * is a separate, unclipped overlay using the same arch in viewBox units — one
 * shape expressed twice, so the line and the cut edge coincide.
 */

/** Head height 0.4 of the box; jamb springs at x = 0.224. */
const CLIP = "M0 1V0.4C0 0.179 0.224 0 0.5 0S1 0.179 1 0.4V1Z";

/** The same arch in the overlay's 400×500 viewBox. */
const STROKE = "M1 500V200C1 90 90 1 200 1s199 89 199 199v300";

export function ArchClip() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="sr-only">
      <defs>
        <clipPath id="archClip" clipPathUnits="objectBoundingBox">
          <path d={CLIP} />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ArchOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="arch"
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
    >
      <path
        d={STROKE}
        fill="none"
        stroke="url(#archGold)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <defs>
        <linearGradient id="archGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0dcae" />
          <stop offset="0.45" stopColor="#c9a25f" />
          <stop offset="1" stopColor="#8a6531" />
        </linearGradient>
      </defs>
    </svg>
  );
}
