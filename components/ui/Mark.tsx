/**
 * Renders one of the sourced emblems in `public/images/marks/` as a masked
 * block, so a real SVG file takes the page's colour through `background`.
 *
 * This exists because every hand-coded ornament in this project was rejected
 * as looking fake, and it was a fair judgement: a chakra drawn as sixteen
 * `rotate()`d line segments is a diagram of a chakra, not a chakra. The files
 * behind this component are actual Wikimedia artwork — see
 * public/images/ATTRIBUTIONS.md for each licence.
 *
 * Always decorative, so always `aria-hidden`.
 */

export type MarkName = "gaudiya-tilak" | "sudarshana-chakra";

export default function Mark({
  name,
  className = "",
}: {
  name: MarkName;
  className?: string;
}) {
  const url = `url(/images/marks/${name}.svg)`;

  return (
    <span
      aria-hidden="true"
      className={`mark ${className}`}
      style={{ maskImage: url, WebkitMaskImage: url }}
    />
  );
}
