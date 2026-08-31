import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { getCeremony, needsApproval } from "@/content/ceremonies";
import { getCategory, type ServiceCategorySlug } from "@/content/services";
import { priest, site } from "@/content/site";

/**
 * One named ceremony.
 *
 * Rendered by a thin route per category (app/homas/[slug], app/samskaras/[slug])
 * rather than by a single root-level [category]/[slug]. A dynamic segment at
 * the root matches everything — including /icon and /robots.txt — and broke the
 * build by shadowing them.
 */
export default function CeremonyDetail({
  category,
  slug,
}: {
  category: ServiceCategorySlug;
  slug: string;
}) {
  const ceremony = getCeremony(category, slug);
  const group = getCategory(category);
  if (!ceremony || !group) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: ceremony.name,
    serviceType: group.title,
    description: ceremony.detail?.join(" ") ?? ceremony.purpose,
    provider: {
      "@type": "Person",
      name: priest.name,
      jobTitle: "Vedic Priest",
    },
    areaServed: priest.location,
    url: `${site.url}/${category}/${slug}`,
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section tone="ivory" labelledBy="rite-title" className="page-top">
        <Reveal className="rite">
          <Link href={`/${category}`} className="rite__back">
            <ArrowLeftIcon size={14} weight="bold" aria-hidden="true" />
            {group.title}
          </Link>

          <h1 id="rite-title" className="rite__title">
            {ceremony.name}
          </h1>

          <dl className="rite__facts">
            <div>
              <dt>Addressed to</dt>
              <dd>{ceremony.deity}</dd>
            </div>
            {ceremony.occasion && (
              <div>
                <dt>Usually asked for</dt>
                <dd>{ceremony.occasion}</dd>
              </div>
            )}
          </dl>

          <div className="rite__body">
            {ceremony.detail ? (
              ceremony.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))
            ) : (
              /* Rather than pad the page with invented prose, say plainly that
                 this one is not written up yet. */
              <p>
                I have not written this rite up in detail yet. Ask me about it
                and I will tell you what it involves and whether it suits your
                occasion.
              </p>
            )}
          </div>

          <p className="rite__note">
            Procedure, duration, materials and whether it can be performed in
            your absence depend on your circumstances, so I discuss those with
            you rather than list them here.
            {needsApproval && " Wording on this page is awaiting my review."}
          </p>
        </Reveal>
      </Section>

      <ContactCTA />
    </main>
  );
}
