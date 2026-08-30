import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/**
 * Decorative SVG ornaments drawn from South Indian temple vocabulary.
 *
 * These are art, not icons: they are always `aria-hidden`, they never carry
 * meaning, and they are judged on whether they look beautiful at large sizes
 * rather than on whether they read at 20px. That is the opposite brief from
 * the UI icons (Lucide), which is why they live in a separate file.
 *
 * They are built from stroked paths with no fills so they inherit
 * `currentColor` and can be layered at low opacity as background texture.
 */

/**
 * A torana — the arched gateway over a shrine. Used to frame the Narasimha
 * painting in the hero, so the image reads as enshrined rather than as a
 * cropped photograph.
 */
export function ToranaArch(props: Props) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {/* Outer arch */}
      <path d="M8 218V132C8 62 94 12 200 12s192 50 192 120v86" strokeWidth="2" />
      {/* Inner arch, offset inward */}
      <path
        d="M26 218V136c0-60 78-104 174-104s174 44 174 104v82"
        strokeWidth="1"
        opacity=".55"
      />
      {/* Kirtimukha finial at the crown */}
      <path
        d="M200 12V0M186 8c4-8 24-8 28 0M193 22c3 5 11 5 14 0"
        strokeWidth="1.5"
      />
      {/* Foliate scrolls springing from each haunch */}
      <path
        d="M56 218c0-34 10-56 30-66-22 22-14 44 6 44 14 0 20-12 14-24"
        strokeWidth="1"
        opacity=".5"
      />
      <path
        d="M344 218c0-34-10-56-30-66 22 22 14 44-6 44-14 0-20-12-14-24"
        strokeWidth="1"
        opacity=".5"
      />
      {/* Bead course along the arch */}
      {Array.from({ length: 19 }, (_, i) => {
        const t = (i + 0.5) / 19;
        const angle = Math.PI * (1 - t);
        return (
          <circle
            key={i}
            cx={200 + Math.cos(angle) * 183}
            cy={132 - Math.sin(angle) * 118}
            r="2.4"
            fill="currentColor"
            stroke="none"
            opacity=".65"
          />
        );
      })}
    </svg>
  );
}

/**
 * A kolam — the threshold lattice drawn in rice flour each morning. Rendered
 * large and very faint as page background texture.
 */
export function KolamField(props: Props) {
  const dots = [];
  for (let row = 0; row < 7; row++) {
    const count = row <= 3 ? 4 + row : 10 - row;
    for (let i = 0; i < count; i++) {
      dots.push({
        x: 100 + (i - (count - 1) / 2) * 26,
        y: 22 + row * 26,
      });
    }
  }

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      {/* The looping line that threads between the dots */}
      <path
        d="M100 14c34 0 62 28 62 62s-28 62-62 62-62-28-62-62 28-62 62-62Z"
        strokeWidth="1"
      />
      <path
        d="M100 30c26 20 40 40 40 60s-14 34-40 34-40-14-40-34 14-40 40-60Z"
        strokeWidth=".8"
        opacity=".7"
      />
      <path
        d="M44 100c20-26 40-40 60-40s34 14 34 40-14 40-34 40"
        strokeWidth=".8"
        opacity=".55"
      />
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r="1.6"
          fill="currentColor"
          stroke="none"
          opacity=".8"
        />
      ))}
    </svg>
  );
}

/**
 * The Sudarshana chakra as a rosette — sixteen spokes inside a beaded rim.
 * Used as a large, slow-turning background mark.
 */
export function ChakraRosette(props: Props) {
  const spokes = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <circle cx="100" cy="100" r="94" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" strokeWidth="1.5" opacity=".7" />
      <circle cx="100" cy="100" r="26" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="8" fill="currentColor" stroke="none" />
      {spokes.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <path d="M100 74V30" strokeWidth="1.2" />
          <path d="M94 36c6-10 6-10 12 0" strokeWidth="1" opacity=".6" />
          <circle
            cx="100"
            cy="86"
            r="1.8"
            fill="currentColor"
            stroke="none"
            opacity=".5"
          />
        </g>
      ))}
    </svg>
  );
}

/**
 * A kuthuvilakku — the standing brass oil lamp. Small accent beside a
 * heading.
 */
export function LampMark(props: Props) {
  return (
    <svg
      viewBox="0 0 32 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
      aria-hidden="true"
      {...props}
    >
      {/* Flame */}
      <path d="M16 12c-3-3-2-6 0-9 2 3 3 6 0 9Z" fill="currentColor" stroke="none" />
      {/* Bowl */}
      <path d="M8 16h16l-3 5H11l-3-5Z" />
      {/* Stem and swelling */}
      <path d="M16 21v9M12 30h8l-1 4h-6l-1-4Z" opacity=".8" />
      {/* Tiered base */}
      <path d="M16 34v5M9 39h14M7 43h18" />
    </svg>
  );
}

/**
 * A short centred rule with a diamond at its middle. The full-stop at the end
 * of a heading block.
 */
export function RuleDiamond(props: Props) {
  return (
    <svg
      viewBox="0 0 240 12"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M0 6h96M144 6h96" strokeWidth="1" opacity=".5" />
      <path d="M120 1l5 5-5 5-5-5 5-5Z" strokeWidth="1.2" />
      <path d="M104 6h6M130 6h6" strokeWidth="1" opacity=".7" />
    </svg>
  );
}
