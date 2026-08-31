import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { galleryPhotos } from "@/content/site";

/**
 * Photographs of pujas and ceremonies.
 *
 * This replaced a "three things to mention" list. The section renders nothing
 * until real photographs exist — an empty grid of placeholder tiles would be
 * worse than no section, and the whole point of this one is that the images
 * are real.
 *
 * To add: drop files in public/images/gallery/ (see the README there) and
 * register them in `galleryPhotos` in content/site.ts.
 */
export default function Gallery() {
  if (galleryPhotos.length === 0) return null;

  return (
    <Section tone="cream" labelledBy="gallery-title">
      <SectionHead
        id="gallery-title"
        eyebrow="From the ceremonies"
        title="Pujas and homas performed"
      />

      <ul className="shots">
        {galleryPhotos.map((photo, i) => (
          <Reveal as="li" key={photo.src} index={i % 3} className="shots__item">
            <figure>
              <div className="shots__frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
                  className="shots__img"
                />
              </div>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
