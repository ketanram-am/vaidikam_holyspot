import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SacredImage from "@/components/ui/SacredImage";
import ContactCTA from "@/components/sections/ContactCTA";
import { pageMetadata } from "@/lib/seo";
import { priest, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "The Priest",
  description: priest.bioShort[0],
  path: "/about",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: priest.name,
  jobTitle: "Vedic Priest",
  description: priest.bioShort[0],
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
};

export default function AboutPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section tone="ivory" labelledBy="about-title" className="page-top">
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
              sizes="(max-width: 767px) 100vw, 40vw"
              className={
                priest.portrait
                  ? "aspect-[4/5]"
                  : "aspect-[4/3] md:aspect-[4/5]"
              }
              priority
            />
          </Reveal>

          <Reveal delay={0.06} className="priest__body">
            <p className="priest__eyebrow">{priest.experience} of practice</p>
            <h1 id="about-title" className="priest__name">
              {priest.name}
            </h1>
            <p className="priest__initiated">{priest.initiatedName}</p>
            <p className="priest__role">
              {[priest.honorific, priest.sampradaya, priest.location]
                .filter(Boolean)
                .join(" · ")}
            </p>
            {priest.bioLong.map((paragraph) => (
              <p key={paragraph} className="priest__para">
                {paragraph}
              </p>
            ))}
            {/* An image of the priest replaces the temple study once he
                supplies one. Until then the page does not pretend otherwise. */}
            {/* Says so plainly rather than letting a temple photograph pass
                as a portrait. Drop public/images/priest/portrait.jpg and set
                `priest.portrait` to remove this. */}
            {!priest.portrait && (
              <p className="priest__note">
                The photograph above is Srirangam, not a portrait of{" "}
                {priest.name}.
              </p>
            )}
          </Reveal>
        </div>
      </Section>

      {/* Renders nothing while `priest.photos` is empty — a row of empty
          frames would be worse than no row. */}
      {priest.photos.length > 0 && (
        <Section tone="cream" label="Photographs">
          <ul className="pphotos">
            {priest.photos.map((photo, i) => (
              <Reveal
                as="li"
                key={photo.src}
                index={i % 3}
                className="pphotos__item"
              >
                <figure>
                  <div className="pphotos__frame">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
                      className="pphotos__img"
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Section>
      )}

      <ContactCTA />
    </main>
  );
}
