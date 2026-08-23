import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ArrowLink, { ArrowGlyph } from "@/components/ui/Arrow";
import SectionHeader from "@/components/ui/SectionHeader";
import { categories } from "@/content/services";
import { RitualIcon } from "@/components/ui/RitualIcons";

export default function Services() {
  return (
    <Section id="services" tone="cream" labelledBy="services-title">
      <SectionHeader
        id="services-title"
        eyebrow="What is offered"
        title="Rituals performed with tradition and precision"
        lead="Begin with the occasion, not a package. Mahakaal Prabhu will help you understand the appropriate form of ritual and what its preparation involves."
        action={<ArrowLink href="/services">View all services</ArrowLink>}
      />

      <div className="mt-headline border-t border-bronze/30">
        {categories.map((cat, i) => {
          return (
            <Reveal key={cat.slug} index={i}>
              <Link
                href={`/${cat.slug}`}
                className="group relative grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-4 gap-y-3 overflow-hidden border-b border-bronze/30 py-8 transition-[background-color,padding] duration-500 hover:bg-paper/70 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-6 lg:py-10 lg:hover:px-8"
              >
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-bronze transition-transform duration-700 ease-arrive group-hover:scale-y-100" />
                <span className="col-start-1 row-span-2 flex flex-col items-center gap-2 self-start lg:col-span-2 lg:col-start-auto lg:row-span-1 lg:flex-row lg:gap-4 lg:self-auto">
                  <span className="font-serif text-[1.5rem] italic leading-none text-bronze/35 lg:text-[clamp(2rem,4vw,4rem)]">
                    0{i + 1}
                  </span>
                  <RitualIcon
                    category={cat.slug}
                    className="h-9 w-9 flex-none text-bronze transition-[transform,color] duration-700 ease-arrive group-hover:-translate-y-1 group-hover:text-maroon lg:h-11 lg:w-11"
                  />
                </span>
                <div className="col-start-2 row-start-1 min-w-0 self-center lg:col-span-4 lg:col-start-auto lg:row-start-auto">
                  <h3 className="text-[2rem] leading-none transition-colors duration-300 group-hover:text-bronze lg:text-[clamp(2rem,1.65rem+1.7vw,3.25rem)]">
                    {cat.title}
                  </h3>
                </div>
                <p className="col-span-2 col-start-2 row-start-2 max-w-sm text-small text-charcoal lg:col-span-3 lg:col-start-auto lg:row-start-auto lg:text-body">
                  {cat.description}
                </p>
                <div className="hidden lg:col-span-2 lg:block">
                  <ul className="flex flex-col gap-1">
                    {cat.examples.map((example) => (
                      <li key={example} className="text-small text-taupe">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="col-start-3 row-start-1 flex items-center justify-end self-center text-bronze lg:col-span-1 lg:col-start-auto lg:row-start-auto">
                  <ArrowGlyph className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
