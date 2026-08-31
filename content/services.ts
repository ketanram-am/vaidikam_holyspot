export type ServiceCategorySlug =
  | "homas"
  | "pujas"
  | "samskaras"
  | "consultation";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  title: string;
  singular: string;
  /** Long form. Page metadata derives from this, so it stays a full sentence. */
  description: string;
  /** Display form — a fragment, for lists that have to be scanned on a phone. */
  short: string;
};

/**
 * Category-level language only. Exact procedure, duration, and remote
 * eligibility are consultation matters and are deliberately not stated here.
 *
 * The `intro`, `guidance`, and `examples` fields were removed along with the
 * sections that displayed them — `examples` held fragments like "For
 * auspicious beginnings", which said nothing.
 */
export const categories: ServiceCategory[] = [
  {
    slug: "homas",
    title: "Homas",
    singular: "Homa",
    description:
      "Fire rituals, in which offerings are made into a consecrated fire on behalf of the family.",
    short: "Fire rituals",
  },
  {
    slug: "pujas",
    title: "Pujas",
    singular: "Puja",
    description:
      "Worship at home or in temple, for a family observance or a particular occasion.",
    short: "Worship",
  },
  {
    slug: "samskaras",
    title: "Samskaras",
    singular: "Samskara",
    description:
      "The rites that mark a life — from before birth, through childhood and education, to marriage and beyond.",
    short: "Life-cycle rites",
  },
  {
    slug: "consultation",
    title: "Consultation",
    singular: "Consultation",
    description:
      "Astrological and vastu guidance — for choosing a time, and for advice on a place.",
    short: "Astrology & vastu",
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
