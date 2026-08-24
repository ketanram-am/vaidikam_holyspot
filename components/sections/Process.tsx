import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { process } from "@/content/site";

export default function Process() {
  return (
    <Section tone="ivory" labelledBy="process-title" className="process-section">
      <SectionHeader
        id="process-title"
        eyebrow="How it works"
        title="A calm, personal process — not a checkout"
        lead="From first enquiry to the completed ceremony, every step is handled with care and clarity."
      />

      <ol className="process-list mt-headline grid gap-x-0 gap-y-0 border-y border-bronze/25 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4">
        {process.map((p, i) => (
          <Reveal
            as="li"
            key={p.step}
            index={i}
            className={`process-step relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 border-b border-bronze/20 px-0 py-8 last:border-b-0 sm:block sm:border-b-0 sm:px-6 sm:py-10 lg:border-l lg:border-bronze/20 ${
              i % 2 ? "lg:translate-y-6" : ""
            }`}
          >
            <span className="row-span-2 font-serif text-[2.25rem] italic leading-none text-bronze/35 sm:block sm:text-[clamp(2.5rem,4vw,4rem)]">
              {p.step}
            </span>
            <h3 className="col-start-2 mt-0 text-h3 sm:mt-7">{p.title}</h3>
            <p className="col-start-2 mt-3 max-w-[28ch] text-charcoal">{p.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
