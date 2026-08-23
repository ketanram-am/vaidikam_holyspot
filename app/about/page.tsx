import PageHero from "@/components/ui/PageHero";
import SacredImage from "@/components/ui/SacredImage";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import { Fact, FactGrid, BulletList } from "@/components/ui/Fact";
import { pageMetadata } from "@/lib/seo";
import { priest, site } from "@/content/site";

export const metadata = pageMetadata({
  title: "About the Priest",
  description: priest.bioShort,
  path: "/about",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: priest.name,
  jobTitle: "Vedic Priest",
  description: priest.bioShort,
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
};

export default function AboutPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="The Priest"
        title={priest.name}
        lead={priest.bioShort}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      >
        <p className="eyebrow-quiet text-bronze">
          {priest.honorific} · {priest.sampradaya}
        </p>
      </PageHero>

      <Section tone="ivory" labelledBy="bio-title">
        <div className="grid gap-[clamp(2.5rem,1.5rem+5vw,4.5rem)] lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="sticky-aside relative mx-auto max-w-[20rem] sm:max-w-sm lg:max-w-none">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-4 -right-4 hidden h-full w-full border border-hairline sm:block"
              />
              <SacredImage
                src={priest.practiceImage}
                alt="The pillared hall of Sri Ranganathaswamy Temple in Srirangam"
                showPlaceholderLabel={false}
                className="relative aspect-[4/5] shadow-panel"
                priority
              />
              <p className="mt-5 border-l border-bronze/40 pl-4 text-small text-taupe">
                A Srirangam architectural study, not a portrait. An image of{" "}
                {priest.name} will appear only from his approved archive.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
            <Reveal className="flex flex-col gap-5">
              <span className="eyebrow">Biography</span>
              <h2 id="bio-title" className="sr-only">
                Biography
              </h2>
              {priest.bioLong.map((para, i) => (
                <p
                  key={i}
                  className={`max-w-prose text-charcoal ${
                    // The opening paragraph is set larger: it is the one
                    // sentence most visitors will actually read.
                    i === 0 ? "text-lead" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.06}>
              <FactGrid className="border-t border-hairline pt-10">
                <Fact label="Role">{priest.honorific}</Fact>
                <Fact label="Tradition">{priest.sampradaya}</Fact>
                <Fact label="Practice">Personal guidance and ritual service</Fact>
                <Fact label="Audience">Families in India and abroad</Fact>
              </FactGrid>
            </Reveal>

            <Reveal delay={0.1} className="border-t border-hairline pt-10">
              <span className="eyebrow">Principles of practice</span>
              <BulletList items={priest.principles} className="mt-5" />
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection
        title="Have a ceremony in mind?"
        text="Share the ritual and occasion, and the priest will personally respond to discuss what is involved."
      />
    </main>
  );
}
