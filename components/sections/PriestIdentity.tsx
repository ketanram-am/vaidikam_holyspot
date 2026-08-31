import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SacredImage from "@/components/ui/SacredImage";
import { priest } from "@/content/site";

/**
 * Who performs the ceremonies.
 *
 * Stripped of the "principles of practice" list ("Guidance before
 * recommendation", "Respect for family tradition"), the Fact grid restating
 * the tradition a third time, and the caption explaining that a photograph of
 * a temple is not a photograph of the priest.
 */
export default function PriestIdentity() {
  return (
    <Section id="priest" tone="ivory" labelledBy="priest-title">
      <div className="priest">
        <Reveal className="priest__media">
          <SacredImage
            src={priest.portrait ?? priest.practiceImage}
            alt={
              priest.portrait
                ? priest.name
                : "The pillared hall of Sri Ranganathaswamy Temple, Srirangam"
            }
            showPlaceholderLabel={false}
            // A real portrait gets the clean frame; the temple stand-in keeps
            // the ornamental one it was designed for.
            plain={Boolean(priest.portrait)}
            sizes="(max-width: 767px) 92vw, (max-width: 1279px) 34vw, 22rem"
            // A portrait is cropped 4:5 at every size; the temple stand-in is
            // landscape and would be mangled by that on a phone.
            className={
              priest.portrait ? "aspect-[4/5]" : "aspect-[4/3] md:aspect-[4/5]"
            }
          />
        </Reveal>

        <Reveal delay={0.06} className="priest__body">
          <p className="priest__eyebrow">{priest.experience} of practice</p>

          {/* The name is the one piece of type on the page given a display
              treatment of its own — it is what a visitor is deciding about. */}
          <h2 id="priest-title" className="priest__name">
            {priest.name}
          </h2>
          <p className="priest__initiated">{priest.initiatedName}</p>

          <p className="priest__role">
            {[priest.honorific, priest.sampradaya, priest.location]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {priest.bioShort.map((paragraph) => (
            <p key={paragraph} className="priest__para">
              {paragraph}
            </p>
          ))}
          <p className="priest__teachers">
            Trained under {priest.teachers.join(" and ")}.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
