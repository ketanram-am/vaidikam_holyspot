/**
 * Site content.
 *
 * OPEN QUESTION — sampradaya. The site previously stated "Sri Vaishnava"
 * throughout. The priest's name (Chaitanya Das) and the stated audience
 * (ISKCON devotees) both point to the Gaudiya Vaishnava line rather than the
 * Sri Vaishnava one; those are different sampradayas. Rather than assert the
 * wrong tradition on a real priest's own site, `priest.sampradaya` is null and
 * nothing on the page claims a lineage. Set it once confirmed and it will
 * appear in the hero and on the About page.
 *
 * Rule for this file: a string earns its place only if a devotee deciding
 * whether to contact this priest actually needs it. Slogans, principles,
 * "notes on practice", and material studies were removed — they were
 * generated filler and they buried the four things a visitor is here for:
 * who he is, what he performs, whether he can do it for them, and how to ask.
 *
 * Nothing in this file is aspirational. If a thing does not exist yet, it is
 * not described here.
 */

export const site = {
  name: "Vaidikam Holyspot",
  // Canonical origin. Set to the live domain before launch — metadata,
  // sitemap, and JSON-LD all derive absolute URLs from it.
  url: "https://vaidhikamholyspot.com",
  /** One factual sentence. Used for meta description and the hero. */
  promise:
    "Homas, yagas, pujas, and samskaras performed by Mahakaal Chaitanya Das, for families in India and for devotees living abroad.",
  heroImage: "/images/art/narasimha.webp" as string | null,
  contact: {
    // Indian mobile, stored in E.164 so tel: and wa.me links both work.
    whatsapp: "+91 79752 33449" as string | null,
    phone: "+91 79752 33449" as string | null,
    email: "holyspot123@gmail.com" as string | null,
  },
};

export const priest = {
  name: "Mahakaal Chaitanya Das",
  honorific: "Vedic Priest",
  location: "South India",
  portrait: null as string | null,
  practiceImage: "/images/temple/srirangam-hall.jpg" as string | null,
  // See the note at the top of this file: the sampradaya line is deliberately
  // unset until confirmed, rather than asserting the wrong one.
  sampradaya: null as string | null,
  bio: [
    "Mahakaal Chaitanya Das performs Vedic ceremonies — homas, yagas, pujas, and the life-cycle samskaras — for families in India and for devotees living abroad.",
    "Devotees outside India usually need to know three things: which ceremony applies to their occasion, what the family must provide, and whether it can be performed in their absence. Those are answered directly, before anything is arranged.",
  ],
};

/**
 * The practical questions, and only the practical questions. A devotee abroad
 * has four: can he do it for me, what do I have to do, how far ahead, and
 * what does it cost. Everything else was reassurance copy.
 */
export const practical = [
  {
    q: "Can a ceremony be performed if I live outside India?",
    a: "Some ceremonies can; others require the family to be present. Which applies to yours is confirmed before anything is arranged.",
  },
  {
    q: "What does my family need to provide?",
    a: "This depends on the ceremony. Materials, participation, and who needs to be present are explained in full beforehand.",
  },
  {
    q: "How far in advance should I ask?",
    a: "As early as you can. Lead time depends on the ceremony, the place, and the people involved.",
  },
  {
    q: "How is dakshina handled?",
    a: "Dakshina and material costs are discussed privately once the ceremony is settled. There is no listed price and no checkout.",
  },
  {
    q: "I don't know the name of the ceremony I need.",
    a: "Describe the occasion in your own words. The appropriate ceremony will be identified for you.",
  },
];

/**
 * What to put in the message.
 *
 * This replaced a five-question Q&A on the home page. A visitor who has
 * decided to write does not need "how is dakshina handled?" at that moment —
 * they need to know what to say. The Q&A still exists in full on /contact,
 * where someone who has not decided yet will look for it.
 */
export const enquiry = [
  {
    label: "The occasion",
    detail: "A new home, a birth, an annual observance, a specific difficulty.",
  },
  {
    label: "Where and when",
    detail: "The city, and the date or month you have in mind.",
  },
  {
    label: "Any family custom",
    detail: "Your sampradaya or gotra, if you know it. It is not required.",
  },
];

/**
 * Contextual imagery: Sri Vaishnava architecture and public-domain devotional
 * art. Deliberately not photographs of real ceremonies — those would need the
 * family's consent. Credits in public/images/ATTRIBUTIONS.md.
 */
export const gallery: {
  alt: string;
  caption: string;
  src: string;
  layout: "landscape" | "portrait" | "square";
}[] = [
  {
    alt: "The pillared hall of Sri Ranganathaswamy Temple in Srirangam",
    caption: "Sri Ranganathaswamy Temple, Srirangam",
    src: "/images/temple/srirangam-hall.jpg",
    layout: "landscape",
  },
  {
    alt: "The layered gopurams of Sri Ranganathaswamy Temple in Srirangam",
    caption: "Sri Ranganathaswamy Temple, Srirangam",
    src: "/images/temple/srirangam-temple.jpg",
    layout: "landscape",
  },
  {
    alt: "Yashoda with the child Krishna beside a white cow, painted by Raja Ravi Varma",
    caption: "Yashoda with Krishna · Raja Ravi Varma",
    src: "/images/art/yashoda-krishna.jpg",
    layout: "portrait",
  },
  {
    alt: "Garuda standing in anjali mudra, Chennakeshava temple, Belur",
    caption: "Garuda · Chennakeshava temple, Belur",
    src: "/images/deity/garuda-belur.jpg",
    layout: "portrait",
  },
];

export const navGroups = [
  {
    label: "Ceremonies",
    items: [
      { href: "/homas", label: "Homas", description: "Fire rituals" },
      { href: "/yagas", label: "Yagas", description: "Extended observances" },
      { href: "/pujas", label: "Pujas", description: "Worship" },
      { href: "/samskaras", label: "Samskaras", description: "Life-cycle rites" },
    ],
  },
];

export const priestNav = {
  href: "/about",
  label: "The Priest",
  description: "Mahakaal Prabhu",
};

/** The single action on the site. There is no second, competing one. */
export const primaryAction = {
  href: "/contact",
  label: "Contact the priest",
};
