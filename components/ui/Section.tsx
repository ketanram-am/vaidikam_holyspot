import type { ReactNode } from "react";

type Tone = "ivory" | "cream" | "paper" | "maroon";
type Size = "section" | "band" | "none";

const tones: Record<Tone, string> = {
  ivory: "surface-ivory",
  cream: "surface-cream",
  paper: "surface-paper",
  maroon: "surface-maroon",
};

const sizes: Record<Size, string> = {
  section: "section-y",
  band: "section-band",
  none: "",
};

type Props = {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  size?: Size;
  /** Adds the hairline that separates two same-toned bands. */
  border?: "none" | "top" | "bottom" | "y";
  /** id of the heading that names this section, for assistive technology. */
  labelledBy?: string;
  label?: string;
  className?: string;
  /** Set false to opt out of the standard content container. */
  contained?: boolean;
};

const borders: Record<NonNullable<Props["border"]>, string> = {
  none: "",
  top: "border-t border-hairline",
  bottom: "border-b border-hairline",
  y: "border-y border-hairline",
};

/**
 * Standardises the three things every band on this site needs to agree on:
 * its surface tone, its vertical rhythm, and its accessible name. Sections
 * were previously repeating these as ad-hoc class strings, which is how the
 * page ended up with two different "cream" bands touching each other.
 */
export default function Section({
  children,
  id,
  tone = "ivory",
  size = "section",
  border = "none",
  labelledBy,
  label,
  className = "",
  contained = true,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={`${tones[tone]} ${sizes[size]} ${borders[border]} ${
        id ? "scroll-mt-24" : ""
      } ${className}`}
    >
      {contained ? <div className="container-page">{children}</div> : children}
    </section>
  );
}
