import Section from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/Arrow";
import CTASection from "@/components/ui/CTASection";
import { pageMetadata } from "@/lib/seo";
import { categories } from "@/content/services";
import { SealMark } from "@/components/ui/Motifs";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore Mahakaal Prabhu’s personal Sri Vaishnava practice across Homas, Yagas, Pujas, Samskaras, and consultation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="The practice"
        title="Begin with the occasion, not a catalogue"
        lead="These are areas of practice rather than fixed packages. If you are unsure where your need belongs, begin with consultation."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
        ]}
      >
        {/* An in-page index. On a page this long, a visitor who arrived
            looking for one specific ritual should not have to scroll to find
            out whether it is offered at all. */}
        <nav aria-label="Service categories" className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="manuscript-tag transition-colors hover:border-bronze hover:text-maroon"
            >
              {cat.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {categories.map((cat, ci) => (
        <Section
          key={cat.slug}
          id={cat.slug}
          tone={ci % 2 === 0 ? "ivory" : "cream"}
          size="band"
          labelledBy={`${cat.slug}-title`}
        >
          <div className="grid gap-[clamp(2rem,1.25rem+3.75vw,3.5rem)] lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal className="sticky-aside flex flex-col gap-4">
                <span className="eyebrow flex items-center gap-3">
                  <SealMark className="h-4 w-4" /> Area {String(ci + 1).padStart(2, "0")}
                </span>
                <h2 id={`${cat.slug}-title`} className="text-h2">
                  {cat.title}
                </h2>
                <p className="max-w-sm text-charcoal">{cat.description}</p>
                <ArrowLink href={`/${cat.slug}`} className="mt-1">
                  Understand {cat.title}
                </ArrowLink>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="lg:col-span-6 lg:col-start-7">
              <p className="lead">{cat.intro}</p>
              <ul className="mt-8 border-y border-bronze/25">
                {cat.examples.map((example, index) => (
                  <li key={example} className="flex gap-5 border-b border-bronze/15 py-4 last:border-0">
                    <span className="font-serif italic text-bronze/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-charcoal">{example}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      ))}

      <CTASection
        title="Not sure which ritual applies?"
        text="Describe your occasion and Mahakaal Prabhu will help you understand the appropriate form of ritual before anything is arranged."
      />
    </main>
  );
}
