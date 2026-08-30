import Mark from "@/components/ui/Mark";

/**
 * The rule between two bands, broken by the sourced Sudarshana chakra.
 * Replaced a lotus course drawn in code, which read as comb teeth however it
 * was tuned.
 */
export default function BandDivider() {
  return (
    <div aria-hidden="true" className="rule">
      <span className="rule__line" />
      <Mark name="sudarshana-chakra" className="rule__mark" />
      <span className="rule__line" />
    </div>
  );
}
