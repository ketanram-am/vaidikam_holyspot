import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CeremonyList from "@/components/pages/CeremonyList";
import ContactCTA from "@/components/sections/ContactCTA";
import { getCeremonyIndex } from "@/content/ceremonies";
import type { ServiceCategory } from "@/content/services";

/**
 * A ceremony category page: the title, one line of context, then the named
 * inventory.
 *
 * Removed the "Begin with understanding, not a package" section — a heading,
 * two paragraphs, an ornamental rule, and an aside card listing "For
 * auspicious beginnings" — which stood between the visitor and the only thing
 * this page exists to show them.
 */
export default function CategoryLanding({
  category,
}: {
  category: ServiceCategory;
}) {
  const ceremonies = getCeremonyIndex(category.slug);

  return (
    <main id="main">
      <Section tone="ivory" labelledBy="cat-title" className="page-top">
        <Reveal className="cathead">
          <h1 id="cat-title" className="cathead__title">
            {category.title}
          </h1>
          <p className="cathead__lead">{category.description}</p>
        </Reveal>
      </Section>

      {ceremonies && (
        <CeremonyList index={ceremonies} categoryTitle={category.title} />
      )}

      <ContactCTA />
    </main>
  );
}
