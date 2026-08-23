import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import { pageMetadata } from "@/lib/seo";
import { faqs } from "@/content/pages";

export const metadata = pageMetadata({
  title: "FAQs",
  description:
    "Answers on authenticity, remote rituals, process, and dakshina — for devotees enquiring from abroad.",
  path: "/faqs",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    }))
  ),
};

export default function FaqsPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Questions"
        title="Answers, plainly given"
        lead="If something is not covered here, you are always welcome to ask directly."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/faqs", label: "FAQs" },
        ]}
      >
        <nav aria-label="Question topics" className="flex flex-wrap gap-2.5">
          {faqs.map((g) => (
            <a
              key={g.group}
              href={`#${slug(g.group)}`}
              className="manuscript-tag transition-colors hover:border-bronze hover:text-maroon"
            >
              {g.group}
            </a>
          ))}
        </nav>
      </PageHero>

      <Section tone="ivory" label="Frequently asked questions">
        <div className="flex flex-col gap-[clamp(3rem,2rem+5vw,5.5rem)]">
          {faqs.map((group, gi) => (
            <div
              key={group.group}
              id={slug(group.group)}
              className="scroll-mt-28 grid gap-8 lg:grid-cols-12"
            >
              <Reveal className="lg:col-span-4">
                <h2 className="sticky-aside text-h3">{group.group}</h2>
              </Reveal>

              <Reveal delay={0.06} className="lg:col-span-7 lg:col-start-6">
                <div className="border-t border-hairline">
                  {group.items.map((item) => (
                    <details
                      key={item.q}
                      className="group border-b border-hairline"
                    >
                      <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium text-maroon transition-colors duration-200 marker:content-none hover:text-bronze">
                        <span>{item.q}</span>
                        <span
                          aria-hidden="true"
                          className="relative flex h-6 w-6 flex-none items-center justify-center rotate-45 border border-hairline text-bronze transition-[transform,border-color] duration-300 ease-calm group-open:rotate-90 group-hover:border-bronze"
                        >
                          <span className="absolute h-[9px] w-px bg-current" />
                          <span className="absolute h-px w-[9px] bg-current" />
                        </span>
                      </summary>
                      <p className="animate-disclose max-w-prose pb-6 text-charcoal">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Still have a question?"
        text="Ask directly — every message is personally read, and there is no obligation to proceed."
        cta={{ href: "/contact", label: "Ask a question" }}
        secondary={{ href: "/booking", label: "Or request a ritual" }}
      />
    </main>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
