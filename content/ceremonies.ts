import type { ServiceCategorySlug } from "./services";

/**
 * The named ceremony inventory.
 *
 * EVERY line of prose in this file is sourced. See content/SOURCES.md for the
 * reference behind each entry. Nothing here was written from general
 * impression, and nothing here states procedure, duration, materials, or
 * remote eligibility — those belong to the consultation, not to a web page.
 *
 * `needsApproval` marks the file as awaiting Mahakaal Prabhu's review. Leave
 * it true until he has read the wording; the page shows a quiet note while it
 * is set.
 */

export const needsApproval = true;

export type Ceremony = {
  /** Roman transliteration as a family is most likely to search for it. */
  name: string;
  /** The deity or power addressed. Named, because that is the real answer. */
  deity: string;
  /** Two or three words. A tag, not a sentence. */
  purpose: string;
};

export type CeremonyGroup = {
  title: string;
  /** Optional qualifier under the title. */
  qualifier?: string;
  /** Devotional artwork for the group. See public/images/ATTRIBUTIONS.md. */
  image?: { src: string; alt: string; credit: string };
  items: Ceremony[];
};

export type CeremonyIndex = {
  title: string;
  /** One line. */
  lead: string;
  groups: CeremonyGroup[];
  pending?: string;
};

const homas: CeremonyIndex = {
  title: "Homas performed",
  lead: "Which one suits your occasion is settled in conversation, not chosen from a list.",
  groups: [
    {
      title: "Beginnings",
      qualifier: "Ganapati",
      image: {
        src: "/images/deity/ganapati-thanjavur.jpg",
        alt: "Sri Ganapati riding his mouse, in a Thanjavur school painting",
        credit: "Thanjavur school · public domain",
      },
      items: [
        {
          name: "Ganapati homa",
          deity: "Sri Ganapati",
          purpose: "Beginnings",
        },
        {
          name: "Lakshmi Ganapathi homa",
          deity: "Sri Lakshmi with Sri Ganapati",
          purpose: "Prosperity",
        },
        {
          name: "Durga Ganapati homa",
          deity: "Sri Durga with Sri Ganapati",
          purpose: "Protection",
        },
      ],
    },
    {
      title: "Protection",
      qualifier: "Narasimha, Sudarshana, Hanuman",
      image: {
        src: "/images/deity/hanuman-ravivarma.jpg",
        alt: "Sri Hanuman carrying the herb-bearing mountain, Ravi Varma Press lithograph",
        credit: "Ravi Varma Press, c.1910 · public domain",
      },
      items: [
        {
          name: "Maha Mrityunjaya homa",
          deity: "Sri Rudra, through the Mrityunjaya mantra",
          purpose: "Health",
        },
        {
          name: "Narasimha yagña",
          deity: "Sri Narasimha",
          purpose: "Shelter",
        },
        {
          name: "Maha Sudarshana homa",
          deity: "Sri Sudarshana, the discus of Sri Vishnu",
          purpose: "Cleansing",
        },
        {
          name: "Durga homa",
          deity: "Sri Durga",
          purpose: "Strength",
        },
        {
          name: "Vayuputra homa",
          deity: "Sri Hanuman, son of Vayu",
          purpose: "Courage",
        },
      ],
    },
    {
      title: "Garuda",
      qualifier: "Vainateya",
      image: {
        src: "/images/deity/garuda-belur.jpg",
        alt: "Garuda standing in anjali mudra, Chennakeshava temple, Belur",
        credit: "Chennakeshava temple, Belur · CC BY-SA 3.0",
      },
      items: [
        {
          name: "Vainateya homa",
          deity: "Sri Garuda, son of Vinata",
          purpose: "Against poison",
        },
      ],
    },
    {
      title: "The Navagraha",
      qualifier: "Nine planetary deities",
      image: {
        src: "/images/deity/navagraha-sculptures.jpg",
        alt: "Black basalt panels of Surya, Soma, and Mangala from a Navagraha set",
        credit: "Navagraha panels, black basalt · CC0",
      },
      items: [
        {
          name: "Navagraha homa",
          deity: "The nine grahas",
          purpose: "Balance",
        },
        {
          name: "Navagraha Shanti homa",
          deity: "The nine grahas",
          purpose: "Pacification",
        },
      ],
    },
    {
      title: "Prosperity",
      qualifier: "Mahalakshmi, Kubera",
      image: {
        src: "/images/art/lakshmi-ravi-varma.jpg",
        alt: "Sri Lakshmi standing on a lotus, after Raja Ravi Varma",
        credit: "After Raja Ravi Varma · public domain",
      },
      items: [
        {
          name: "Mahalakshmi homa",
          deity: "Sri Mahalakshmi",
          purpose: "Sustenance",
        },
        {
          name: "Lakshmi Kubera homa",
          deity: "Sri Lakshmi with Sri Kubera",
          purpose: "Wealth",
        },
      ],
    },
    {
      title: "A dwelling",
      qualifier: "Vastu",
      items: [
        {
          name: "Vastu homa",
          deity: "The vastu deities of the site",
          purpose: "A new home",
        },
        {
          name: "Vastu rakshogña homa",
          deity: "Through the Rakshoghna Sukta",
          purpose: "Clearing a site",
        },
      ],
    },
  ],
};

const samskaras: CeremonyIndex = {
  title: "Samskaras observed",
  lead: "The rites that mark a life, from before birth onward.",
  groups: [
    {
      title: "Before birth",
      qualifier: "Samskaras 1–3",
      items: [
        {
          name: "Garbhadhana",
          deity: "गर्भाधान · “receiving the womb”",
          purpose: "Conception",
        },
        {
          name: "Pumsavana",
          deity: "पुंसवन · third month",
          purpose: "Quickening",
        },
        {
          name: "Simantonnayana",
          deity: "सीमन्तोन्नयन · eighth month",
          purpose: "Safe delivery",
        },
      ],
    },
    {
      title: "Infancy",
      qualifier: "Samskaras 4–9",
      image: {
        src: "/images/art/yashoda-krishna.jpg",
        alt: "Yashoda with the child Krishna, painted by Raja Ravi Varma",
        credit: "Raja Ravi Varma · public domain",
      },
      items: [
        {
          name: "Jatakarma",
          deity: "जातकर्म · at birth",
          purpose: "Welcoming the child",
        },
        {
          name: "Namakarana",
          deity: "नामकरण · eleventh or twelfth day",
          purpose: "Naming",
        },
        {
          name: "Nishkramana",
          deity: "निष्क्रमण · around the fourth month",
          purpose: "First outing",
        },
        {
          name: "Annaprashana",
          deity: "अन्नप्राशन · around the sixth month",
          purpose: "First solid food",
        },
        {
          name: "Chudakarana",
          deity: "चूडाकरण · near the first year",
          purpose: "First tonsure",
        },
        {
          name: "Karnavedha",
          deity: "कर्णवेध",
          purpose: "Ear piercing",
        },
      ],
    },
    {
      title: "Learning",
      qualifier: "Samskaras 10–12",
      items: [
        {
          name: "Vidyarambha",
          deity: "विद्यारम्भ · traditionally the fifth year",
          purpose: "Beginning to learn",
        },
        {
          name: "Upanayana",
          deity: "उपनयन",
          purpose: "The sacred thread",
        },
        {
          name: "Vedarambha",
          deity: "वेदारम्भ",
          purpose: "Beginning Vedic study",
        },
      ],
    },
    {
      title: "Coming of age",
      qualifier: "Samskaras 13–16",
      items: [
        {
          name: "Keshanta",
          deity: "केशान्त · for a young man",
          purpose: "First shaving",
        },
        {
          name: "Ritusuddhi",
          deity: "ऋतुशुद्धि · for a young woman",
          purpose: "Coming of age",
        },
        {
          name: "Samavartana",
          deity: "समावर्तन",
          purpose: "Completing study",
        },
        {
          name: "Vivaha",
          deity: "विवाह",
          purpose: "Marriage",
        },
      ],
    },
  ],
  pending:
    "Antyeshti, the final rites, is observed but is arranged by direct conversation rather than described here.",
};

export const ceremonyIndex: Partial<Record<ServiceCategorySlug, CeremonyIndex>> =
  {
    homas,
    samskaras,
  };

export function getCeremonyIndex(slug: ServiceCategorySlug) {
  return ceremonyIndex[slug];
}

export function ceremonyCount(index: CeremonyIndex) {
  return index.groups.reduce((total, group) => total + group.items.length, 0);
}
