import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { pageMetadata } from "@/lib/seo";
import { consultations, priest } from "@/content/site";

export const metadata = pageMetadata({
  title: "Consultation",
  description: `Astrological (Jyotiṣa) and vastu consultation with ${priest.name}, Bengaluru — muhūrta, chart guidance, and advice on a site before you build or move in.`,
  path: "/consultation",
});

export default function ConsultationPage() {
  return (
    <main id="main">
      <Section tone="ivory" labelledBy="consult-page-title" className="page-top">
        <Reveal className="cathead">
          <h1 id="consult-page-title" className="cathead__title">
            Consultation
          </h1>
          <p className="cathead__lead">
            Before a ceremony there is usually a question of timing, or of a
            place. Both are things I advise on directly.
          </p>
        </Reveal>

        <div className="advice">
          {consultations.map((item, i) => (
            <Reveal
              as="section"
              key={item.slug}
              id={item.slug}
              aria-labelledby={`${item.slug}-h`}
              index={i}
              className="advice__item"
            >
              <div className="advice__frame">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 767px) 92vw, 40vw"
                  className="advice__img"
                />
              </div>

              <div className="advice__text">
                <p className="advice__sanskrit">{item.sanskrit}</p>
                <h2 id={`${item.slug}-h`} className="advice__title">
                  {item.title}
                </h2>
                <p className="advice__lead">{item.lead}</p>
                {item.body.map((paragraph) => (
                  <p key={paragraph} className="advice__para">
                    {paragraph}
                  </p>
                ))}
                {/* Stating the limits is the point: it is what separates this
                    from the prediction-and-remedies trade. */}
                <p className="advice__note">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </main>
  );
}
