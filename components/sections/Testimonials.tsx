import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ArrowLink from "@/components/ui/Arrow";
import { testimonials } from "@/content/site";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" tone="cream" labelledBy="testimonials-title">
      <SectionHeader
        id="testimonials-title"
        eyebrow="Devotees abroad"
        title="Trusted by families across the world"
        action={<ArrowLink href="/testimonials">Read all testimonials</ArrowLink>}
      />

      <div className="mt-headline grid gap-6 md:grid-cols-12 md:items-start">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            index={i}
            className={i === 0 ? "md:col-span-6" : `md:col-span-5 ${i === 2 ? "md:col-start-7" : ""}`}
          >
            <TestimonialCard {...t} size={i === 0 ? "feature" : "default"} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
