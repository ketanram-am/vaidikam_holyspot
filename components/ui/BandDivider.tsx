/**
 * The rule between two bands: a hairline broken by the sourced Sudarshana
 * chakra.
 *
 * This replaced a lotus course drawn in code. Hand-drawing a moulding in SVG
 * paths produced something that read as a row of comb teeth however it was
 * tuned; a real emblem, masked so it takes the page's gold, is both more
 * authentic and better looking. Purely decorative, so hidden from assistive
 * technology.
 */
export default function BandDivider() {
  return (
    <div aria-hidden="true" className="rule">
      <span className="rule__line" />
      <span
        className="rule__mark"
        style={{
          maskImage: "url(/images/marks/sudarshana-chakra.svg)",
          WebkitMaskImage: "url(/images/marks/sudarshana-chakra.svg)",
        }}
      />
      <span className="rule__line" />
    </div>
  );
}
