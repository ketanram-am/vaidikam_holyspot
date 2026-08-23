import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import ArrowLink from "@/components/ui/Arrow";
import { pageMetadata } from "@/lib/seo";
import { articles } from "@/content/pages";

export const metadata = pageMetadata({
  title: "Articles",
  description:
    "Writings on Vedic ritual, tradition, and observance — written plainly for families living abroad.",
  path: "/articles",
});

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function ArticlesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Writings"
        title="On tradition, plainly explained"
        lead="Short pieces answering the questions devotees most often ask — written without jargon."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/articles", label: "Articles" },
        ]}
      />

      <Section tone="ivory" label="Articles">
        {/* An honest empty state. Listing titles that lead nowhere is worse
            than saying plainly that they are still being written — and it
            points the reader somewhere useful in the meantime. */}
        <Reveal className="mb-headline flex flex-col items-start gap-4 border border-dashed border-hairline bg-paper p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="max-w-xl text-small text-charcoal">
            These pieces are being written and will be published here shortly.
            In the meantime, the most common questions are already answered in
            full.
          </p>
          <ArrowLink href="/faqs" className="flex-none">
            Read the FAQs
          </ArrowLink>
        </Reveal>

        <ol className="flex flex-col border-t border-hairline">
          {articles.map((a, i) => (
            <Reveal as="li" key={a.slug} index={i}>
              <article className="grid gap-3 border-b border-hairline py-9 lg:grid-cols-12 lg:gap-10">
                <div className="flex flex-wrap items-center gap-x-4 text-small text-taupe lg:col-span-3 lg:flex-col lg:items-start lg:gap-1">
                  <time dateTime={a.date}>
                    {dateFormat.format(new Date(a.date))}
                  </time>
                  <span aria-hidden="true" className="lg:hidden">
                    ·
                  </span>
                  <span>{a.readingTime}</span>
                </div>

                <div className="lg:col-span-8">
                  <h2 className="text-h3">{a.title}</h2>
                  <p className="mt-3 max-w-prose text-charcoal">{a.excerpt}</p>
                  <p className="mt-4">
                    <span className="inline-flex items-center gap-2 border-y border-hairline px-3.5 py-1 text-small text-taupe">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-saffron/70"
                      />
                      In preparation
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTASection
        title="A question that isn’t written up yet?"
        text="Ask it directly. Answers often become the next article."
        cta={{ href: "/contact", label: "Ask a question" }}
        secondary={{ href: "/booking", label: "Or request a ritual" }}
      />
    </main>
  );
}
