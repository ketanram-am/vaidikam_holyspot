import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import {
  ceremonyCount,
  needsApproval,
  type CeremonyIndex,
} from "@/content/ceremonies";
import { site } from "@/content/site";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * The named ceremony inventory.
 *
 * Each group is headed by a piece of real devotional artwork rather than by a
 * drawn icon, and each ceremony is three short facts: name, deity addressed,
 * purpose. A visitor from outside the tradition can therefore learn what a
 * ceremony is *for* without reading a paragraph, which is the whole job of
 * this page.
 *
 * Nothing is collapsed behind a disclosure — on a phone a tap that hides
 * content costs more than the scroll it saves.
 */
export default function CeremonyList({
  index,
  categoryTitle,
  categorySlug,
}: {
  index: CeremonyIndex;
  categoryTitle: string;
  categorySlug: string;
}) {
  const total = ceremonyCount(index);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: index.title,
    numberOfItems: total,
    itemListElement: index.groups
      .flatMap((group) => group.items)
      .map((ceremony, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: ceremony.name,
          description: `${ceremony.deity} — ${ceremony.purpose}`,
          serviceType: categoryTitle,
          provider: { "@type": "Organization", name: site.name },
        },
      })),
  };

  return (
    <Section tone="cream" labelledBy="ceremony-index-title" className="cx">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />

      {/* The category page above already carries the title and a description,
          so this heading is for the accessible name of the section only —
          printing "Homas" and then "Homas performed" was the same heading
          twice. */}
      <h2 id="ceremony-index-title" className="sr-only">
        {index.title}
      </h2>

      <div className="cx__groups cx__groups--top">
        {index.groups.map((group) => {
          const groupId = slugify(group.title);

          return (
            <Reveal
              as="section"
              key={group.title}
              id={groupId}
              aria-labelledby={`${groupId}-h`}
              className="cxg"
            >
              <div className="cxg__head">
                {group.image && (
                  <div className="cxg__figure">
                    <Image
                      src={group.image.src}
                      alt={group.image.alt}
                      fill
                      sizes="(max-width: 1023px) 96px, 132px"
                      className="cxg__img"
                    />
                  </div>
                )}
                <div className="cxg__heading">
                  <h3 id={`${groupId}-h`} className="cxg__title">
                    {group.title}
                  </h3>
                  {group.qualifier && (
                    <p className="cxg__qualifier">{group.qualifier}</p>
                  )}
                </div>
              </div>

              <ul className="cxg__items">
                {group.items.map((ceremony) => {
                  // The group heading already states the purpose it collects,
                  // so repeating it on the first ceremony of "Beginnings" as
                  // "BEGINNINGS" is noise.
                  const tag =
                    ceremony.purpose.toLowerCase() ===
                    group.title.toLowerCase()
                      ? null
                      : ceremony.purpose;

                  return (
                    <li key={ceremony.name} className="cxi">
                      {/* Each row is now a link to the rite's own page. */}
                      <Link
                        href={`/${categorySlug}/${ceremony.slug}`}
                        className="cxi__link"
                      >
                        <h4 className="cxi__name">{ceremony.name}</h4>
                        <p className="cxi__deity">{ceremony.deity}</p>
                        {tag && <p className="cxi__purpose">{tag}</p>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          );
        })}
      </div>

      {(index.pending || needsApproval) && (
        <Reveal className="cx__notes">
          {index.pending && <p>{index.pending}</p>}
          {needsApproval && (
            <p>
              Wording on this page is drawn from published reference works and
              is awaiting Mahakaal Prabhu’s own review.
            </p>
          )}
        </Reveal>
      )}
    </Section>
  );
}
