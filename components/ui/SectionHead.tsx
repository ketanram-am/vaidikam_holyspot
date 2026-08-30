import Reveal from "@/components/ui/Reveal";
import Mark from "@/components/ui/Mark";

/**
 * The one heading pattern: the sourced tilak, the eyebrow, the title, and a
 * gold rule.
 *
 * The lamp and rule-diamond that used to sit here were drawn by hand and read
 * as clip-art. The tilak is a real emblem; the rule is now just a rule, which
 * is honest about being one.
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
        <Mark name="gaudiya-tilak" className="head__tilak" />
        {eyebrow}
      </p>
      <h2 id={id} className="head__title">
        {title}
      </h2>
      {lead && <p className="head__lead">{lead}</p>}
      <span aria-hidden="true" className="head__rule" />
    </Reveal>
  );
}
