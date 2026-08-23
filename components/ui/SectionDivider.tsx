import { MandapaLintelMark } from "./TempleMotifs";

/** A temple-threshold divider used at most once per page to mark a change of subject. */
export default function SectionDivider({
  tone = "ivory",
}: {
  tone?: "ivory" | "cream" | "paper";
}) {
  const bg = { ivory: "bg-ivory", cream: "bg-cream", paper: "bg-paper" }[tone];

  return (
    <div className={`${bg} hidden md:block`} aria-hidden="true">
      <div className="container-page py-5">
        <MandapaLintelMark className="h-7 w-full text-bronze/55" />
      </div>
    </div>
  );
}
