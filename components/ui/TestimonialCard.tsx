import { Card } from "./Card";

type Props = {
  quote: string;
  name: string;
  location: string;
  /** `feature` gives the quote more air — used where only a few are shown. */
  size?: "default" | "feature";
};

/**
 * A quotation mark set in the margin rather than wrapped around the text:
 * inline curly quotes push the first line out of alignment with everything
 * else in the card.
 */
export default function TestimonialCard({
  quote,
  name,
  location,
  size = "default",
}: Props) {
  return (
    <Card as="figure" className="gap-7 border-l-2 border-l-bronze/45">
      <span
        aria-hidden="true"
        className="block font-serif text-[4.5rem] italic leading-[0.45] text-bronze/25"
      >
        &ldquo;
      </span>
      <blockquote
        className={`flex-1 font-serif text-charcoal ${
          size === "feature" ? "text-quote" : "text-lead"
        }`}
      >
        <p>{quote}</p>
      </blockquote>
      <figcaption className="flex items-center gap-4 border-t border-bronze/20 pt-5">
        <span
          aria-hidden="true"
          className="h-8 w-px flex-none bg-bronze/40"
        >
          <span className="sr-only">{name.charAt(0)}</span>
        </span>
        <span className="flex flex-col">
          <span className="text-small font-medium text-maroon">{name}</span>
          <span className="text-small text-taupe">{location}</span>
        </span>
      </figcaption>
    </Card>
  );
}
