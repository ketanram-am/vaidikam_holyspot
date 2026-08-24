import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/Arrow";
import { SealMark } from "@/components/ui/Motifs";
import { products } from "@/content/pages";

export default function ProductsTeaser() {
  return (
    <Section
      id="products"
      tone="paper"
      size="band"
      border="y"
      labelledBy="products-title"
      className="hidden sm:block"
    >
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="manuscript-tag gap-2">
          <SealMark className="h-3.5 w-3.5 text-bronze" />
          <span className="eyebrow-quiet text-bronze">Coming soon</span>
        </span>
        <h2 id="products-title" className="mt-7 text-h2 text-balance">
          Thoughtfully curated Vedic essentials
        </h2>
        <p className="lead mt-5">
          A small, carefully chosen collection for the home puja room —
          assembled correctly, and sent wherever you are.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-11">
        <ul className="mx-auto grid max-w-4xl border-y border-bronze/25 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <li
              key={p.title}
              className="flex items-center gap-3 border-b border-bronze/15 px-5 py-4 text-left text-small text-taupe sm:border-l"
            >
              <span className="font-serif italic text-bronze/60">{String(index + 1).padStart(2, "0")}</span>
              {p.title}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.14} className="mt-10 flex justify-center">
        <ArrowLink href="/products">Preview the collection</ArrowLink>
      </Reveal>
    </Section>
  );
}
