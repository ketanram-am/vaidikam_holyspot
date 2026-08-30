import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SacredImage from "@/components/ui/SacredImage";
import ContactCTA from "@/components/sections/ContactCTA";
import { pageMetadata } from "@/lib/seo";
import { priest, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "The Priest",
  description: priest.bio[0],
  path: "/about",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: priest.name,
  jobTitle: "Vedic Priest",
  description: priest.bio[0],
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
              src={priest.practiceImage}
              alt="The pillared hall of Sri Ranganathaswamy Temple, Srirangam"
              showPlaceholderLabel={false}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="aspect-[4/3] md:aspect-[4/5]"
              priority
            />
          </Reveal>

          <Reveal delay={0.06} className="priest__body">
            <p className="priest__eyebrow">The priest</p>
            <h1 id="about-title" className="priest__name">
              {priest.name}
            </h1>
            <p className="priest__role">
              {[priest.honorific, priest.sampradaya, priest.location]
                .filter(Boolean)
                .join(" · ")}
            </p>
            {priest.bio.map((paragraph) => (
              <p key={paragraph} className="priest__para">
                {paragraph}
              </p>
            ))}
            {/* An image of the priest replaces the temple study once he
                supplies one. Until then the page does not pretend otherwise. */}
            {!priest.portrait && (
              <p className="priest__note">
                The photograph above is Srirangam, not {priest.name}.
              </p>
            )}
          </Reveal>
        </div>
      </Section>

      <ContactCTA />
    </main>
  );
}
