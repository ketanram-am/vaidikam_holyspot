import Reveal from "./Reveal";
import OrnamentalRule from "./OrnamentalRule";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Renders a trailing element (usually an ArrowLink) opposite the title. */
  action?: React.ReactNode;
};

/**
 * The single heading pattern used at the top of every section. Accepts an
 * `id` so the parent <Section> can point aria-labelledby at the real heading
 * rather than duplicating the title into an aria-label.
 */
export default function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  action,
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={
        centered
          ? "flex flex-col items-center"
          : "flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12"
      }
    >
      <Reveal
        className={`flex flex-col gap-5 ${
          centered ? "mx-auto max-w-prose items-center text-center" : "max-w-2xl"
        }`}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={id} className="max-w-[17ch] text-h2 text-balance">
          {title}
        </h2>
        {lead && <p className="lead max-w-prose">{lead}</p>}
        <OrnamentalRule className={`mt-2 max-w-sm ${centered ? "" : "-ml-4"}`} />
      </Reveal>

      {action && (
        <Reveal delay={0.08} className={centered ? "mt-8" : "flex-none pb-1"}>
          {action}
        </Reveal>
      )}
    </div>
  );
}
