import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SealMark } from "@/components/ui/Motifs";
import { pageMetadata } from "@/lib/seo";
import { products } from "@/content/pages";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "Thoughtfully curated Vedic essentials — puja kits, books, malas, prasadam. Coming soon.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Coming soon"
        title="Thoughtfully curated Vedic essentials"
        lead="A small, carefully chosen collection for the home puja room — assembled correctly, and sent wherever you are."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/products", label: "Products" },
        ]}
      >
        <p className="manuscript-tag gap-2.5">
          <SealMark className="h-3.5 w-3.5 text-bronze" />
          <span className="eyebrow-quiet text-bronze">
            Not yet available to order
          </span>
        </p>
      </PageHero>

      <Section tone="ivory" label="Planned collection">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.title} index={i % 3}>
              <Card variant="dashed" className="gap-0">
                <SealMark className="h-6 w-6 text-bronze/50" />
                <h2 className="mt-5 text-h3">{p.title}</h2>
                <p className="mt-3 flex-1 text-charcoal">{p.description}</p>
                <span className="eyebrow-quiet mt-7 border-t border-hairline pt-5">
                  Coming soon
                </span>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section
        tone="cream"
        size="band"
        border="top"
        labelledBy="notify-title"
      >
        <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 id="notify-title" className="text-h2 text-balance">
            Designed to grow without becoming a marketplace
          </h2>
          <p className="lead mt-5">
            Future products will remain a small extension of Mahakaal Prabhu’s
            practice. Nothing is available to order, and no unconnected mailing
            form is presented here.
          </p>
        </Reveal>
      </Section>
    </main>
  );
}
