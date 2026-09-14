import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import PhotoSet from "@/components/ui/PhotoSet";
import { homePhotos } from "@/content/site";

/** All real ceremony and practice photographs in one homepage gallery. */
export default function Gallery() {
  if (homePhotos.length === 0) return null;

  return (
    <Section id="gallery" tone="cream" labelledBy="gallery-title">
      <SectionHead
        id="gallery-title"
        eyebrow="In practice"
        title="Ceremonies, worship and guidance"
        lead="Photographs from recent observances and moments with respected teachers."
      />
      <PhotoSet photos={homePhotos} shape="landscape" />
    </Section>
  );
}
