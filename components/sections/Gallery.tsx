import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import PhotoSet from "@/components/ui/PhotoSet";
import { galleryPhotos } from "@/content/site";

/**
 * Photographs of pujas and ceremonies.
 *
 * Renders nothing while `galleryPhotos` is empty — an empty grid would
 * undercut the one thing this section exists to show.
 */
export default function Gallery() {
  if (galleryPhotos.length === 0) return null;

  return (
    <Section tone="cream" labelledBy="gallery-title">
      <SectionHead
        id="gallery-title"
        eyebrow="Ceremonies performed"
        title="From recent observances"
        lead="A glimpse of the care and tradition brought to each occasion."
      />
      <PhotoSet photos={galleryPhotos} shape="landscape" />
    </Section>
  );
}
