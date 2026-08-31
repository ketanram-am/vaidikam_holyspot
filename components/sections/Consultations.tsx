import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { consultations } from "@/content/site";

/** Astrology and vastu — consultation rather than ceremony. */
export default function Consultations() {
  return (
    <Section tone="cream" labelledBy="consult-title">
      <SectionHead
        id="consult-title"
        eyebrow="Guidance"
        title="Consultation"
        lead="Before a ceremony there is usually a question of timing, or of a place."
      />

      <ul className="consult">
        {consultations.map((item, i) => (
          <Reveal as="li" key={item.slug} index={i} className="consult__item">
            <Link href={`/consultation#${item.slug}`} className="consult__link">
              <div className="consult__frame">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) 92vw, 46vw"
                  className="consult__img"
                />
              </div>
              <div className="consult__text">
                <p className="consult__sanskrit">{item.sanskrit}</p>
                <h3 className="consult__title">{item.title}</h3>
                <p className="consult__lead">{item.lead}</p>
                <span className="consult__more">
                  Read more
                  <ArrowRightIcon size={14} weight="bold" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
