import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SealMark } from "@/components/ui/Motifs";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = pageMetadata({
  title: "Contact Mahakaal Prabhu",
  description:
    "Begin a private enquiry with Mahakaal Prabhu about Homas, Yagas, Pujas, Samskaras, or ritual guidance.",
  path: "/contact",
});

export default function ContactPage() {
  const hasDirectContact = Boolean(
    site.contact.email || site.contact.phone || site.contact.whatsapp
  );

  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Begin a private conversation"
        lead="You may arrive with the name of a ritual, or simply with an occasion you need help understanding. Both are valid starting points."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      <Section tone="ivory" labelledBy="contact-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6 lg:col-start-2">
            <span className="eyebrow">Before you write</span>
            <h2 id="contact-title" className="mt-5 max-w-[14ch] text-h2">
              No Sanskrit terminology is required.
            </h2>
            <p className="lead mt-7 max-w-prose">
              Share the occasion, who the ceremony is for, where the family is
              based, and any inherited custom you already know. The appropriate
              next step can then be discussed with care.
            </p>
            <ul className="mt-10 border-y border-bronze/25">
              {[
                "Your occasion or concern",
                "Family location and preferred timing",
                "Any known gotra or family custom",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 border-b border-bronze/15 py-4 last:border-0"
                >
                  <span className="font-serif italic text-bronze/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <Card className="sticky-aside gap-0">
              <SealMark className="h-8 w-8 text-bronze" />
              <h2 className="mt-6 text-h3">
                {hasDirectContact ? "Direct contact" : "Contact channel"}
              </h2>

              {site.contact.email && (
                <a href={`mailto:${site.contact.email}`} className="arrow-link mt-7">
                  {site.contact.email}
                </a>
              )}
              {site.contact.whatsapp && (
                <a href={site.contact.whatsapp} className="arrow-link mt-4">
                  WhatsApp
                </a>
              )}
              {site.contact.phone && (
                <a href={site.contact.phone} className="arrow-link mt-4">
                  Telephone
                </a>
              )}

              {!hasDirectContact && (
                <p className="mt-5 text-small text-charcoal">
                  Verified direct contact details must be supplied before this
                  site is published. No placeholder number or inbox is being
                  presented as genuine.
                </p>
              )}

              <Link href="/booking" className="btn-primary mt-8 w-full">
                Prepare an enquiry
              </Link>
            </Card>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
