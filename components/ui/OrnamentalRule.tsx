import { ManuscriptRuleMark } from "./Motifs";

export default function OrnamentalRule({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`ornamental-rule ${light ? "text-brass-light" : "text-bronze"} ${className}`}
      aria-hidden="true"
    >
      <ManuscriptRuleMark className="h-6 w-full" />
    </div>
  );
}
