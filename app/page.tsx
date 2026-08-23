import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import PriestIdentity from "@/components/sections/PriestIdentity";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import GalleryGlimpse from "@/components/sections/GalleryGlimpse";
import ProductsTeaser from "@/components/sections/ProductsTeaser";
import CTASection from "@/components/ui/CTASection";
import SectionDivider from "@/components/ui/SectionDivider";
import { site, priest } from "@/content/site";
import { categories } from "@/content/services";

const areaServed = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "Australia",
  "Singapore",
  "United Arab Emirates",
  "Europe",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}#organisation`,
  name: site.name,
  url: site.url,
  description: site.promise,
  slogan: site.tagline,
  ...(site.contact.email ? { email: site.contact.email } : {}),
  provider: {
    "@type": "Person",
    name: priest.name,
    jobTitle: "Vedic Priest",
  },
  areaServed: areaServed.map((name) => ({ "@type": "Country", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vedic rituals",
    itemListElement: categories.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: category.title,
        url: `${site.url}/${category.slug}`,
      },
    })),
  },
};

/**
 * Section order follows the questions a hesitant visitor asks in sequence:
 * what is this → can I trust it → who is he → what is offered → what does he
 * believe → how does it work → do others trust him → what does it look like →
 * what else → shall I begin.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero />
        <TrustStrip />
        <PriestIdentity />
        <Services />
        <SectionDivider tone="cream" />
        <Philosophy />
        <Process />
        <GalleryGlimpse />
        <ProductsTeaser />
        <CTASection text="Share the ritual and occasion you have in mind. This is a personal enquiry — the priest will respond to you himself." />
      </main>
    </>
  );
}
