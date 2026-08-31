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
  /** URL segment for the detail page. */
  slug: string;
  /** The deity or power addressed. Named, because that is the real answer. */
  deity: string;
  /** Two or three words. A tag, not a sentence. */
  purpose: string;
  /**
   * The detail page. Two or three short paragraphs on what the rite is and
   * why it is performed — sourced, never procedure. See content/SOURCES.md.
   */
  detail?: string[];
  /** When a family typically asks for it. */
  occasion?: string;
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
  lead: "Which one suits your occasion is something we settle in conversation, not something you pick from a list.",
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
          slug: "ganapati-homa",
          deity: "Sri Ganapati",
          purpose: "Beginnings",
          occasion: "Before any undertaking",
          detail: [
            "Sri Ganapati is Vighneśvara — the lord of obstacles, of both the material and the spiritual order — and is invoked first in almost every Vedic undertaking for that reason. The homa is the fire form of that invocation.",
            "Families ask for it at the start of something: a business, a construction, a course of study, a marriage season. It is also performed as the opening rite of a larger ceremony rather than on its own.",
          ],
        },
        {
          name: "Lakshmi Ganapathi homa",
          slug: "lakshmi-ganapathi-homa",
          deity: "Sri Lakshmi with Sri Ganapati",
          purpose: "Prosperity",
          occasion: "A new venture",
          detail: [
            "Sri Lakshmi and Sri Ganapati invoked together: prosperity sought at the same time as the clearing of what stands in its way. In practice it is the rite families ask for when a venture is both new and financial.",
            "Where an occasion is purely a beginning, Ganapati homa alone is usually the appropriate rite. I will say which fits.",
          ],
        },
        {
          name: "Durga Ganapati homa",
          slug: "durga-ganapati-homa",
          deity: "Sri Durga with Sri Ganapati",
          purpose: "Protection",
          occasion: "Difficulty at the outset",
          detail: [
            "Sri Durga with Sri Ganapati — protection joined to the removal of obstruction. It suits a beginning already meeting resistance rather than one simply being started.",
            "It is a fuller rite than Ganapati homa alone, and takes longer.",
          ],
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
          slug: "maha-mrityunjaya-homa",
          deity: "Sri Rudra, through the Mrityunjaya mantra",
          purpose: "Health",
          occasion: "Illness, surgery, a difficult year",
          detail: [
            "Performed through the Mahāmṛtyuñjaya mantra of Ṛgveda 7.59.12, addressed to Rudra as Tryambaka. The tradition holds it for health and long life, and families most often ask for it around illness, surgery, or a year a chart indicates as difficult.",
            "It is among the rites most often requested for someone who cannot be present themselves.",
          ],
        },
        {
          name: "Narasimha yagña",
          slug: "narasimha-yag-a",
          deity: "Sri Narasimha",
          purpose: "Shelter",
          occasion: "Fear, hostility, protection of a household",
          detail: [
            "Sri Narasimha is the man-lion avatāra who appeared for Prahlāda, invoked for fearlessness and for shelter from harm. This is the extended observance rather than a short homa.",
            "Because Narasimha is central to Gaudiya practice, this is the rite devotees in that line ask for most often, and the one I am asked about most from abroad.",
          ],
        },
        {
          name: "Maha Sudarshana homa",
          slug: "maha-sudarshana-homa",
          deity: "Sri Sudarshana, the discus of Sri Vishnu",
          purpose: "Cleansing",
          occasion: "Severe or unexplained obstruction",
          detail: [
            "Sudarśana is the discus of Sri Vishnu, revered in Vaishnava tradition as a protective power of Vishnu himself. The homa is held to cut through severe obstruction and to cleanse — and Sudarśana is Narasimha's weapon, so the two rites are related.",
            "Families ask for it where difficulty has persisted through other observances, or where its cause is not clear.",
          ],
        },
        {
          name: "Durga homa",
          slug: "durga-homa",
          deity: "Sri Durga",
          purpose: "Strength",
          occasion: "Persistent difficulty",
          detail: [
            "Offerings to Sri Durga, invoked for strength and for the resolution of difficulty that has not moved. It is a rite of endurance rather than of beginning.",
            "Ask me about the occasion first; where the matter is obstruction rather than strength, another homa suits it better.",
          ],
        },
        {
          name: "Vayuputra homa",
          slug: "vayuputra-homa",
          deity: "Sri Hanuman, son of Vayu",
          purpose: "Courage",
          occasion: "Courage, steadiness, service",
          detail: [
            "Vāyuputra — son of Vāyu — is an epithet of Sri Hanuman, invoked for courage, strength and constancy. Families ask for it before something demanding, and for someone carrying a long difficulty without relief.",
            "It is also kept on Tuesdays and Saturdays by families who observe it as a regular practice rather than a one-time rite.",
          ],
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
          slug: "vainateya-homa",
          deity: "Sri Garuda, son of Vinata",
          purpose: "Against poison",
          occasion: "Against poison, venom and fear",
          detail: [
            "Vainateya — son of Vinatā — is an epithet of Sri Garuda. The name garuḍa is itself glossed as one who consumes or removes poison, and the Garuḍa Upaniṣad and Garuḍa mantra are specifically for alleviating poison and venom: snakebite, and poison from other sources.",
            "Garuda is Vishnu's vāhana and the vigilant enemy of serpents, so the rite carries a general protective sense too. But its documented and specific association is poison, which is why I describe it that way rather than as protection in general.",
          ],
        },
      ],
    },
    {
      title: "The Navagraha",
      qualifier: "Nine planetary deities",
      image: {
        src: "/images/deity/navagraha-sculptures.jpg",
        alt: "Black basalt panels of Surya, Soma and Mangala from a Navagraha set",
        credit: "Navagraha panels, black basalt · CC0",
      },
      items: [
        {
          name: "Navagraha homa",
          slug: "navagraha-homa",
          deity: "The nine grahas",
          purpose: "Balance",
          occasion: "Planetary balance",
          detail: [
            "Offerings to the nine grahas — Sūrya, Soma, Maṅgala, Budha, Bṛhaspati, Śukra, Śani, Rāhu and Ketu — for balance in the matters the tradition assigns to them.",
            "This is a rite I usually advise after looking at a chart, because it is often asked for when one specific graha, not all nine, is indicated.",
          ],
        },
        {
          name: "Navagraha Shanti homa",
          slug: "navagraha-shanti-homa",
          deity: "The nine grahas",
          purpose: "Pacification",
          occasion: "A specific planetary affliction",
          detail: [
            "Śānti denotes the pacificatory form: performed to settle one identified affliction rather than to balance all nine.",
            "Which of the two Navagraha rites applies is a question for a consultation, not a choice from a page.",
          ],
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
          slug: "mahalakshmi-homa",
          deity: "Sri Mahalakshmi",
          purpose: "Sustenance",
          occasion: "The household, sustenance",
          detail: [
            "Addressed to Sri Mahālakṣmī for sustenance and the wellbeing of the household. It is a rite of the home rather than of an individual venture.",
            "Families keep it annually, often on a fixed day, as much as they ask for it once.",
          ],
        },
        {
          name: "Lakshmi Kubera homa",
          slug: "lakshmi-kubera-homa",
          deity: "Sri Lakshmi with Sri Kubera",
          purpose: "Wealth",
          occasion: "Wealth, and its keeping",
          detail: [
            "Sri Lakshmi with Sri Kubera, the keeper of treasure. The tradition pairs them for wealth and for its careful keeping — the second part is the point, and I say so, because the rite is not a petition for a windfall.",
            "Commonly asked for at Dīpāvalī and at the opening of a business.",
          ],
        },
      ],
    },
    {
      title: "A dwelling",
      qualifier: "Vastu",
      items: [
        {
          name: "Vastu homa",
          slug: "vastu-homa",
          deity: "The vastu deities of the site",
          purpose: "A new home",
          occasion: "Entering a new home",
          detail: [
            "Vāstu Śānti is performed to propitiate the benevolent deities of the dwelling and to ward off malignant influence. It goes with Gṛha Praveśa — entrance into a house — which is the rite on actually moving in.",
            "This is among the ceremonies I am asked for most in Bengaluru, and one where a vastu consultation beforehand usually changes what is needed.",
          ],
        },
        {
          name: "Vastu rakshogña homa",
          slug: "vastu-rakshog-a-homa",
          deity: "Through the Rakshoghna Sukta",
          purpose: "Clearing a site",
          occasion: "Clearing a site",
          detail: [
            "Rakṣoghna means, literally, that which causes rakṣasas to be driven off and destroyed. The Rakṣoghna Sūkta is prescribed for the founding of a new temple and in building — which is why this rite attaches to a site rather than to a person.",
            "Families ask for it where a place has felt disturbed, or before building on ground whose history is unknown.",
          ],
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
          slug: "garbhadhana",
          deity: "गर्भाधान · “receiving the womb”",
          purpose: "Conception",
          occasion: "Before conception",
          detail: [
            "The first of the samskaras. Sanskrit garbha (womb) and ādhāna (receiving): a private rite marking a couple's intent to have a child, performed before conception. Its roots are in Ṛgveda 8.35.10–12 and 10.184.",
            "It is a quiet ceremony, usually for the couple alone.",
          ],
        },
        {
          name: "Pumsavana",
          slug: "pumsavana",
          deity: "पुंसवन · third month",
          purpose: "Quickening",
          occasion: "Third or fourth month",
          detail: [
            "The second samskara, performed once the pregnancy is visible and around the time movement begins. Its roots are in the Atharva Veda.",
            "The rite marks and blesses that stage of the child's development.",
          ],
        },
        {
          name: "Simantonnayana",
          slug: "simantonnayana",
          deity: "सीमन्तोन्नयन · eighth month",
          purpose: "Safe delivery",
          occasion: "Seventh or eighth month",
          detail: [
            "Sīmantonnayana means parting the hair upward. In the last trimester the husband parts his wife's hair with udumbara fruit, porcupine quill and Viratara wood, reciting Bhūr, Bhuvaḥ, Svaḥ. Its stated purpose is the healthy development of the child and a safe delivery.",
            "You may know it as Seemantham, Valaikappu or Godh-Bharai; it is the same rite.",
          ],
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
          slug: "jatakarma",
          deity: "जातकर्म · at birth",
          purpose: "Welcoming the child",
        },
        {
          name: "Namakarana",
          slug: "namakarana",
          deity: "नामकरण · eleventh or twelfth day",
          purpose: "Naming",
        },
        {
          name: "Nishkramana",
          slug: "nishkramana",
          deity: "निष्क्रमण · around the fourth month",
          purpose: "First outing",
        },
        {
          name: "Annaprashana",
          slug: "annaprashana",
          deity: "अन्नप्राशन · around the sixth month",
          purpose: "First solid food",
        },
        {
          name: "Chudakarana",
          slug: "chudakarana",
          deity: "चूडाकरण · near the first year",
          purpose: "First tonsure",
        },
        {
          name: "Karnavedha",
          slug: "karnavedha",
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
          slug: "vidyarambha",
          deity: "विद्यारम्भ · traditionally the fifth year",
          purpose: "Beginning to learn",
        },
        {
          name: "Upanayana",
          slug: "upanayana",
          deity: "उपनयन",
          purpose: "The sacred thread",
        },
        {
          name: "Vedarambha",
          slug: "vedarambha",
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
          slug: "keshanta",
          deity: "केशान्त · for a young man",
          purpose: "First shaving",
        },
        {
          name: "Ritusuddhi",
          slug: "ritusuddhi",
          deity: "ऋतुशुद्धि · for a young woman",
          purpose: "Coming of age",
        },
        {
          name: "Samavartana",
          slug: "samavartana",
          deity: "समावर्तन",
          purpose: "Completing study",
        },
        {
          name: "Vivaha",
          slug: "vivaha",
          deity: "विवाह",
          purpose: "Marriage",
        },
      ],
    },
  ],
  pending:
    "Antyeshti, the final rites, is observed but is arranged by conversation rather than described here.",
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

/** Every ceremony across every category, for the detail routes. */
export function allCeremonies() {
  return (
    Object.entries(ceremonyIndex) as [ServiceCategorySlug, CeremonyIndex][]
  ).flatMap(([category, index]) =>
    index.groups.flatMap((group) =>
      group.items.map((item) => ({ ...item, category, group }))
    )
  );
}

export function getCeremony(category: string, slug: string) {
  return allCeremonies().find(
    (c) => c.category === category && c.slug === slug
  );
}
