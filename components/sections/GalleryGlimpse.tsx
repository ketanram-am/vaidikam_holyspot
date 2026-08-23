import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ArrowLink from "@/components/ui/Arrow";
import SacredImage from "@/components/ui/SacredImage";
import { gallery } from "@/content/site";

/**
 * An editorial mosaic rather than a uniform grid: the lead image is given
 * twice the area so the section reads as curated rather than as a dump.
 * The remaining tiles stay square, which keeps the row heights predictable.
 */
export default function GalleryGlimpse() {
  const lead = gallery[3];
  const rest = [gallery[1], gallery[2], gallery[4], gallery[0]];

  return (
    <Section tone="ivory" labelledBy="gallery-title">
      <SectionHeader
        id="gallery-title"
        eyebrow="A material study"
        title="Stone, brass, shadow, and the written line"
        action={<ArrowLink href="/gallery">View the full gallery</ArrowLink>}
      />

      <div className="mt-headline grid grid-cols-2 gap-4 lg:grid-cols-12 lg:grid-rows-2">
        <Reveal className="col-span-2 lg:col-span-7 lg:row-span-2 lg:h-full">
          <SacredImage
            src={lead.src}
            alt={lead.alt}
            className="aspect-[4/3] lg:aspect-auto lg:h-full"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
        </Reveal>

        {rest.map((item, i) => (
          <Reveal key={item.alt} index={(i % 2) + 1} className="lg:col-span-2 [&:nth-child(2)]:lg:col-span-3 [&:nth-child(5)]:lg:col-span-3">
            <SacredImage
              src={item.src}
              alt={item.alt}
              className="aspect-square"
              sizes="(max-width: 1023px) 50vw, 25vw"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
