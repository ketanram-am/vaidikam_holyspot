import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/ui/CTASection";
import OrnamentalRule from "@/components/ui/OrnamentalRule";
import { SealMark } from "@/components/ui/Motifs";
import type { ServiceCategory } from "@/content/services";

export default function CategoryLanding({
  category,
}: {
  category: ServiceCategory;
}) {
  return (
    <main id="main">
      <PageHero
        eyebrow="Ritual practice"
        title={category.title}
        lead={category.description}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Rituals" },
          { href: `/${category.slug}`, label: category.title },
        ]}
      />

      <Section tone="ivory" labelledBy={`${category.slug}-approach`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-2">
            <p className="eyebrow">The approach</p>
            <SealMark className="mt-7 h-10 w-10 text-bronze/65" />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-6">
            <h2 id={`${category.slug}-approach`} className="max-w-[16ch] text-h2">
              Begin with understanding, not a package.
            </h2>
            <p className="lead mt-7 max-w-prose">{category.intro}</p>
            <p className="mt-6 max-w-prose text-charcoal">{category.guidance}</p>
            <OrnamentalRule className="mt-10 max-w-md" />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-3 lg:col-start-10">
            <aside className="card card-pad">
              <p className="eyebrow">A useful starting point</p>
              <ul className="mt-2 flex flex-col">
                {category.examples.map((example, index) => (
                  <li
                    key={example}
                    className="flex gap-4 border-b border-bronze/20 py-4 last:border-0"
                  >
                    <span className="font-serif italic text-bronze/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-small text-charcoal">{example}</span>
                  </li>
                ))}
              </ul>
              <Link href="/booking" className="btn-primary mt-5">
                Begin an enquiry
              </Link>
            </aside>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title={`Ask about ${category.title.toLowerCase()}`}
        text="Describe the occasion in your own words. Mahakaal Prabhu will help you understand the appropriate next step before any arrangements are made."
      />
    </main>
  );
}
