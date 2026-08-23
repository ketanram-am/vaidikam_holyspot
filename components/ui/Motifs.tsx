import type { SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

/**
 * A single-colour seal built from architectural joinery: four inward-facing
 * arches hold a small negative-space diamond. It stays legible at 16px.
 */
export function SealMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path
        d="M24 3 45 24 24 45 3 24 24 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 9c0 7-3.5 11.5-10.5 15C20.5 27.5 24 32 24 39c0-7 3.5-11.5 10.5-15C27.5 20.5 24 16 24 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="2.25" fill="currentColor" />
    </svg>
  );
}

// Quiet brand motif: an abstracted lamp flame. Single-color line glyph.
export function FlameMark(props: MarkProps) {
  return <SealMark {...props} />;
}

// Eight-petal lotus geometry. Petals radiate outward from the centre rather
// than passing through it — an ellipse drawn through the centre reads as an
// atom once it is scaled up to background size.
export function LotusMark(props: MarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          d="M24 24 C19.5 19 19.5 12 24 6 C28.5 12 28.5 19 24 24 Z"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <circle cx="24" cy="24" r="3" />
    </svg>
  );
}

/**
 * Concentric rings echoing a mandala outline. Used only as an oversized,
 * near-invisible background element behind hero areas — never as an icon.
 */
export function RingMotif(props: MarkProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" {...props}>
      <circle cx="200" cy="200" r="199" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="152" stroke="currentColor" strokeWidth="1" />
      <circle cx="200" cy="200" r="105" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 24 }, (_, i) => i * 15).map((deg) => (
        <line
          key={deg}
          x1="200"
          y1="1"
          x2="200"
          y2="48"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${deg} 200 200)`}
        />
      ))}
    </svg>
  );
}

/** Continuous-line geometry abstracted from threshold kolam construction. */
export function KolamMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M48 7c0 16-9 22-21 22C15 29 8 36 8 48s7 19 19 19c12 0 21 6 21 22 0-16 9-22 21-22 12 0 19-7 19-19s-7-19-19-19C57 29 48 23 48 7Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M19 19c11 11 9 22 1 30-8 8-8 18 0 26s18 8 26 0c8-8 19-10 30 1-11-11-9-22-1-30 8-8 8-18 0-26s-18-8-26 0c-8 8-19 10-30-1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="48" cy="48" r="3" fill="currentColor" />
    </svg>
  );
}

/** A shallow stone lintel profile for page and section edges. */
export function LintelMotif(props: MarkProps) {
  return (
    <svg viewBox="0 0 180 24" fill="none" aria-hidden="true" {...props}>
      <path d="M0 12h62l8-8h40l8 8h62" stroke="currentColor" />
      <path d="M0 16h66l8-8h32l8 8h66" stroke="currentColor" opacity=".45" />
      <path d="M86 4h8l4 4-8 8-8-8 4-4Z" fill="currentColor" />
    </svg>
  );
}

/** Palm-leaf manuscript rule abstracted from its central binding hole. */
export function ManuscriptRuleMark(props: MarkProps) {
  return (
    <svg viewBox="0 0 400 24" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 12h160M240 12h160" strokeWidth=".75" opacity=".55" />
        <path d="M160 12c8 0 12-4 18-4 4 0 6 4 10 4M212 12c4 0 6-4 10-4 6 0 10 4 18 4" />
        <circle cx="200" cy="12" r="5" strokeWidth="1.25" />
      </g>
      <circle cx="200" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
