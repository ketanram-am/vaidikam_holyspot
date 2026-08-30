import Hero from "@/components/sections/Hero";
import PriestIdentity from "@/components/sections/PriestIdentity";
import Services from "@/components/sections/Services";
import Practical from "@/components/sections/Practical";
import ContactCTA from "@/components/sections/ContactCTA";
import BandDivider from "@/components/ui/BandDivider";
import { site, priest } from "@/content/site";
import { categories } from "@/content/services";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}#organisation`,
  name: site.name,
  url: site.url,
  description: site.promise,
  ...(site.contact.email ? { email: site.contact.email } : {}),
  ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
  provider: {
    "@type": "Person",
    name: priest.name,
    jobTitle: "Vedic Priest",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vedic ceremonies",
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
 * Four sections, in the order a devotee actually asks:
 * what is this → who performs it → what can he perform → will it work for me
 * → how do I ask.
 *
 * Removed: the trust strip (four numbered slogans), the philosophy band ("A
 * note on practice"), the four-step process diagram, the gallery mosaic ("A
 * material study"), and the products teaser for products that do not exist.
 * None of them answered a question anyone had.
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
        <PriestIdentity />
        <Services />
        {/* The lotus course marks the change of register between the two
            light bands, which otherwise met at a bare hairline. */}
        <BandDivider />
        <Practical />
        <ContactCTA />
      </main>
    </>
  );
}
