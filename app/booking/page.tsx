import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import BookingForm from "@/components/sections/BookingForm";
import { pageMetadata } from "@/lib/seo";
import { process } from "@/content/site";

export const metadata = pageMetadata({
  title: "Request a Ritual",
  description:
    "A personal enquiry — not a booking form. Share the ritual and occasion you have in mind and the priest will personally respond.",
  path: "/booking",
});

export default function BookingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Request a Ritual"
        title="Begin a quiet conversation"
        lead="This is a personal enquiry, not a checkout. Share a few details and the priest will respond personally to understand what you need."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/booking", label: "Request a Ritual" },
        ]}
      />

      <Section tone="ivory" label="Enquiry form">
        <div className="grid gap-[clamp(2.5rem,1.5rem+5vw,4rem)] lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <BookingForm />
          </Reveal>

          <div className="lg:col-span-4 lg:col-start-9">
            <aside className="sticky-aside flex flex-col gap-10">
              <Reveal delay={0.08}>
                <h2 className="eyebrow">What happens next</h2>
                <ol className="mt-6 flex flex-col gap-6">
                  {process.map((p) => (
                    <li key={p.step} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="w-7 flex-none font-serif text-small leading-relaxed text-bronze"
                      >
                        {p.step}
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="text-small font-medium text-maroon">
                          {p.title}
                        </span>
                        <span className="text-small text-charcoal">{p.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={0.14} className="border-t border-hairline pt-8">
                <h2 className="eyebrow">A private conversation</h2>
                <p className="mt-4 text-small text-charcoal">
                  You do not need to know the name of the ritual. Describe the
                  occasion and any family custom in the words most natural to you.
                </p>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>
    </main>
  );
}
