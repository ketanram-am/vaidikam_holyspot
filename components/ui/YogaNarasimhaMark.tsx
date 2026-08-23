import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  animated?: boolean;
  accentColor?: string;
};

/**
 * A symbolic Yoga Narasimha monogram rather than a miniature deity drawing.
 * The temple arch, lion mane, namam, and lotus seat remain legible at 32–40px.
 */
export default function YogaNarasimhaMark({
  animated = false,
  accentColor = "currentColor",
  className = "",
  ...props
}: Props) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      className={`narasimha-mark ${animated ? "narasimha-mark--animated" : ""} ${className}`}
      {...props}
    >
      <g
        className="narasimha-mark__halo"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14 84V42C14 22 28.7 8 48 8s34 14 34 34v42"
          strokeWidth="2.2"
        />
        <path d="M9 88h78M18 84h60" strokeWidth="1.6" />
        <path d="M39 11 43 5h10l4 6M45 5V2h6v3" strokeWidth="1.5" />
      </g>

      <g
        className="narasimha-mark__line"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m48 18 6 9 10-3 1 11 10 4-7 9 7 9-10 4-1 11-10-3-6 9-6-9-10 3-1-11-10-4 7-9-7-9 10-4 1-11 10 3 6-9Z" />
        <path d="m34 45 9 3M62 45l-9 3M43 57l5 3 5-3M40 65c5.3 2.3 10.7 2.3 16 0" />
        <path d="M31 76c7-3.5 12.7-2.8 17 2 4.3-4.8 10-5.5 17-2M24 83c9.5-5.3 17.5-4.8 24 1.5C54.5 78.2 62.5 77.7 72 83" />
      </g>

      <g
        className="narasimha-mark__accent"
        style={{ color: accentColor }}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 29c0 12 1.2 20 8 27M56 29c0 12-1.2 20-8 27" strokeWidth="3" />
        <path d="M48 31v20" strokeWidth="2" />
        <circle cx="48" cy="14" r="2" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
