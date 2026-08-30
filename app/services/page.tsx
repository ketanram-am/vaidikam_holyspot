import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/sections/ContactCTA";
import { pageMetadata } from "@/lib/seo";
import { categories } from "@/content/services";
import { ceremonyIndex, ceremonyCount } from "@/content/ceremonies";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata = pageMetadata({
  title: "Ceremonies",
  description:
    "Homas, yagas, pujas, and samskaras performed in the Sri Vaishnava tradition.",
  path: "/services",
});

/**
 * The index of categories. Previously five full-height bands, each repeating
 * the category description, an intro paragraph, and a numbered list of
 * example fragments — the same content the category pages carry.
 */
export default function ServicesPage() {
  return (
    <main id="main">
      <Section tone="ivory" labelledBy="all-title" className="page-top">
        <Reveal className="cathead">
          <h1 id="all-title" className="cathead__title">
            Ceremonies
          </h1>
          <p className="cathead__lead">
            Four areas of practice. Where the ceremonies are named individually,
            the count is shown.
          </p>
        </Reveal>

        <ul className="catlist">
          {categories
            .filter((category) => category.slug !== "consultation")
            .map((category, i) => {
              const index = ceremonyIndex[category.slug];
              const count = index ? ceremonyCount(index) : 0;

              return (
                <Reveal as="li" key={category.slug} index={i}>
                  <Link href={`/${category.slug}`} className="catlist__row">
                    <span className="catlist__name">{category.title}</span>
                    <span className="catlist__meta">
                      {count > 0 ? `${count} named` : category.short}
                    </span>
                    <span aria-hidden="true" className="catlist__arrow">
                      <ArrowRightIcon size={20} weight="bold" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
        </ul>
      </Section>

      <ContactCTA />
    </main>
  );
}
