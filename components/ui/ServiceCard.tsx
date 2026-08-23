import { CardLink } from "./Card";
import { ArrowCue } from "./Arrow";
import type { Service } from "@/content/services";
import { SealMark } from "./Motifs";

type Props = {
  service: Service;
  /** `compact` is used inside dense grids; `full` on category pages. */
  variant?: "compact" | "full";
};

export default function ServiceCard({ service, variant = "full" }: Props) {
  return (
    <CardLink href={`/services/${service.category}/${service.slug}`}>
      <div className="flex items-start justify-between gap-5">
        <h3 className="text-h3 transition-colors duration-300 group-hover:text-bronze">
          {service.title}
        </h3>
        <SealMark className="h-5 w-5 flex-none text-bronze/45 transition-transform duration-500 group-hover:rotate-45" />
      </div>
      <p
        className={`mt-3 flex-1 text-charcoal ${
          variant === "compact" ? "text-small" : ""
        }`}
      >
        {service.summary}
      </p>

      {variant === "full" ? (
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-bronze/20 pt-5">
          <span className="eyebrow-quiet">
            {service.canBeRemote ? "In person or remote" : "In person"}
          </span>
          <ArrowCue>
            <span className="sr-only">Learn more about {service.title}</span>
          </ArrowCue>
        </div>
      ) : (
        <ArrowCue className="mt-5">Learn more</ArrowCue>
      )}
    </CardLink>
  );
}
