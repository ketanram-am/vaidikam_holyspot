import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import { pageMetadata } from "@/lib/seo";
import { SealMark } from "@/components/ui/Motifs";

export const metadata = pageMetadata({
  title: "Testimonials",
  description:
    "Consented words from families who have worked with Mahakaal Prabhu will be published here after verification.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Family experiences"
        title="Trust should be evidenced, never invented"
        lead="Only words approved by the families concerned will appear here, with names and locations shown exactly as they consent to share them."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/testimonials", label: "Testimonials" },
        ]}
      />

      <Section tone="ivory" label="Testimonials">
        <Reveal className="mx-auto max-w-2xl border-y border-bronze/25 py-14 text-center">
          <SealMark className="mx-auto h-10 w-10 text-bronze/55" />
          <h2 className="mt-7 text-h2">The testimonial archive is being verified.</h2>
          <p className="lead mt-5">
            This space is intentionally quiet until genuine accounts and
            publication consent have been collected.
          </p>
        </Reveal>
      </Section>

      <CTASection
        title="Begin with your own conversation"
        text="Describe the occasion or guidance you need. Every enquiry begins with understanding the family and its tradition."
      />
    </main>
  );
}
