import Reveal from "@/components/ui/Reveal";
import { LampMark, RuleDiamond } from "@/components/ui/Ornament";

/**
 * The one heading pattern. A brass lamp mark, the eyebrow, the title, and a
 * closing rule — so every band opens the same way and the page has a rhythm
 * instead of a stack of bare h2s.
 */
export default function SectionHead({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Reveal className="head">
      <p className="head__eyebrow">
        <LampMark className="head__lamp" />
        {eyebrow}
      </p>
      <h2 id={id} className="head__title">
        {title}
      </h2>
      {lead && <p className="head__lead">{lead}</p>}
      <RuleDiamond className="head__rule" />
    </Reveal>
  );
}
