import Reveal from "@/components/ui/Reveal";

/**
 * The one heading pattern: eyebrow, title, gold rule.
 *
 * A hand-drawn lamp, then a rule-diamond, then the sourced tilak all sat here
 * in turn. Even the real tilak was wrong in this position — it is a mark worn
 * on a forehead, not a bullet before a label, and repeating it above every
 * band made it decoration. The heading is now just type and a rule.
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
      <p className="head__eyebrow">{eyebrow}</p>
      <h2 id={id} className="head__title">
        {title}
      </h2>
      {lead && <p className="head__lead">{lead}</p>}
      <span aria-hidden="true" className="head__rule" />
    </Reveal>
  );
}
