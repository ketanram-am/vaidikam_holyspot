export type ServiceCategorySlug =
  | "homas"
  | "yagas"
  | "pujas"
  | "samskaras"
  | "consultation";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  title: string;
  singular: string;
  description: string;
  intro: string;
  guidance: string;
  examples: string[];
};

/**
 * Category-level language is intentional. A final ceremony inventory, exact
 * procedure, duration, and remote eligibility must be approved by Mahakaal
 * Prabhu before individual service pages are published.
 */
export const categories: ServiceCategory[] = [
  {
    slug: "homas",
    title: "Homas",
    singular: "Homa",
    description:
      "Sacred fire rituals approached through the discipline and sequence of Sri Vaishnava tradition.",
    intro:
      "A Homa begins with understanding the devotee’s purpose, family tradition, and circumstances. Mahakaal Prabhu then advises whether a fire ritual is appropriate and explains the preparation before anything is scheduled.",
    guidance:
      "The appropriate Homa, materials, participation, and arrangements are confirmed in a personal consultation.",
    examples: [
      "For auspicious beginnings",
      "For family wellbeing",
      "For thanksgiving and observance",
    ],
  },
  {
    slug: "yagas",
    title: "Yagas",
    singular: "Yaga",
    description:
      "More extensive Vedic observances requiring careful preparation, coordination, and prescribed procedure.",
    intro:
      "A Yaga is not selected from a catalogue. Its purpose, scale, priestly requirements, materials, and suitability need to be understood carefully before arrangements are made.",
    guidance:
      "Begin with a consultation so the occasion and traditional requirements can be considered properly.",
    examples: [
      "Purpose-led guidance",
      "Preparation and coordination",
      "Tradition-specific planning",
    ],
  },
  {
    slug: "pujas",
    title: "Pujas",
    singular: "Puja",
    description:
      "Personal and family worship conducted with clarity, care, and attention to inherited practice.",
    intro:
      "Pujas may mark a family observance, an offering of gratitude, or a meaningful occasion. The form of worship is discussed with the family rather than reduced to a generic package.",
    guidance:
      "Share the occasion and any family customs you follow; Mahakaal Prabhu will advise the appropriate next step.",
    examples: [
      "Family observances",
      "Occasion-led worship",
      "Personal devotional practice",
    ],
  },
  {
    slug: "samskaras",
    title: "Samskaras",
    singular: "Samskara",
    description:
      "Life-cycle ceremonies held with sensitivity to family lineage, custom, and the significance of the occasion.",
    intro:
      "Samskaras are intimate family milestones. The first conversation establishes the occasion, family practice, location, and the people involved before the ceremony is planned.",
    guidance:
      "Because requirements vary by ceremony and family, all Samskara enquiries are discussed personally.",
    examples: [
      "Milestone ceremonies",
      "Family and lineage customs",
      "In-person planning",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    singular: "Consultation",
    description:
      "A private conversation for families who need guidance before deciding what form of ritual is appropriate.",
    intro:
      "You do not need to know the Sanskrit name of a ceremony before getting in touch. Describe the occasion, concern, or family responsibility in your own words.",
    guidance:
      "Consultation is guidance about ritual practice and arrangements; it is not astrology, prediction, or a marketplace recommendation.",
    examples: [
      "Choosing an appropriate ritual",
      "Planning from outside India",
      "Understanding preparation",
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategorySlug;
  summary: string;
  significance: string;
  whenPerformed: string;
  whatIsInvolved: string[];
  duration: string;
  canBeRemote: boolean;
};
export const services: Service[] = [];

export function servicesByCategory(_category: ServiceCategorySlug): Service[] {
  return [];
}

export function getService(_slug: string): Service | undefined {
  return undefined;
}
