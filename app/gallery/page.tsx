import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import SacredImage from "@/components/ui/SacredImage";
import { pageMetadata } from "@/lib/seo";
import { gallery } from "@/content/site";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "A curated study of Sri Vaishnava architecture, South Indian devotional art, ritual materials, and manuscript tradition.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Devotional image archive"
        title="Sacred form, material, and memory"
        lead="Sri Vaishnava architecture, South Indian devotional art, brass, carved stone, and manuscript tradition—presented as context, not as photographs of Mahakaal Prabhu’s ceremonies."
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/gallery", label: "Gallery" },
        ]}
      />

      <Section tone="ivory" label="Photographs">
        <ul className="columns-1 gap-x-7 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal
              as="li"
              key={item.alt}
              index={i % 3}
              className="mb-9 break-inside-avoid"
            >
              <figure className="group">
                <SacredImage
                  src={item.src}
                  alt={item.alt}
                  showPlaceholderLabel={false}
                  className={`${
                    item.layout === "portrait"
                      ? "aspect-[3/4]"
                      : item.layout === "landscape"
                        ? "aspect-[3/2]"
                        : "aspect-square"
                  } transition-colors duration-300 group-hover:border-bronze`}
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <figcaption
                  className="mt-3 text-small text-taupe"
                >
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-headline">
          <p className="border border-bronze/25 bg-paper p-7 text-center text-small text-taupe">
            These contextual studies are CC-licensed, public-domain, or existing
            project imagery; full credits are recorded with the assets. Personal
            ceremony photography will be added only with explicit family consent.
          </p>
        </Reveal>
      </Section>

      <CTASection />
    </main>
  );
}
