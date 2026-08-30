import Link from "next/link";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Mark from "@/components/ui/Mark";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { categories } from "@/content/services";
import { ceremonyIndex, ceremonyCount } from "@/content/ceremonies";

/**
 * What he performs. A plain list of four links.
 *
 * The old version was a decorated row per category: a large italic number, a
 * drawn ritual icon, a title, a sentence, a second line of example fragments,
 * and an arrow — six elements to convey one link. Where a category has a
 * researched, named inventory, the count is shown, because "15 named
 * ceremonies" is real information and "For auspicious beginnings" was not.
 */
export default function Services() {
  return (
    <Section
      id="ceremonies"
      tone="maroon"
      labelledBy="ceremonies-title"
      className="marked marked--dark"
    >
      <Mark name="sudarshana-chakra" className="marked__chakra" />

      <SectionHead
        id="ceremonies-title"
        eyebrow="What is performed"
        title="Ceremonies"
        lead="Where the ceremonies are named individually, the count is shown."
      />

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
  );
}
