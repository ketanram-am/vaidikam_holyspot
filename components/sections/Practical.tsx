import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { enquiry } from "@/content/site";

/**
 * What to include when writing.
 *
 * This replaced a five-item Q&A ("Can a ceremony be performed if I live
 * outside India?", "How is dakshina handled?"). Those are real questions, but
 * they belong to someone still deciding — and they are still answered in full
 * on /contact. Someone on the home page who has decided to write needs the
 * opposite thing: what to actually say. Three lines, and they can send the
 * message.
 */
export default function Practical() {
  return (
    <Section tone="cream" labelledBy="enquiry-title">
      <SectionHead
        id="enquiry-title"
        eyebrow="Writing to him"
        title="Three things to mention"
      />

      <ol className="steps">
        {enquiry.map((item, i) => (
          <Reveal as="li" key={item.label} index={i} className="steps__item">
            <span aria-hidden="true" className="steps__num">
              {i + 1}
            </span>
            <div>
              <h3 className="steps__label">{item.label}</h3>
              <p className="steps__detail">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="steps__note">
        <p>
          You do not need the Sanskrit name of a ceremony. If you are unsure
          which applies, describe the occasion and he will tell you.
        </p>
      </Reveal>
    </Section>
  );
}
