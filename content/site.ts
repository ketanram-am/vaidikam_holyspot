/**
 * Site content.
 *
 * VOICE: first person. This is the priest's own site, so the copy is his —
 * "tell me the occasion", not "contact him". Third-person copy made the site
 * read as an agency listing a practitioner.
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
    "Vedic homas, pujas and samskaras, with astrological and vastu consultation — for families and individuals in India and abroad.",
  heroImage: "/images/art/narasimha.webp" as string | null,
  contact: {
    // Indian mobile, stored in E.164 so tel: and wa.me links both work.
    whatsapp: "+91 79752 33449" as string | null,
    phone: "+91 79752 33449" as string | null,
    email: "holyspot123@gmail.com" as string | null,
  },
};

export const priest = {
  /** The name he practises under. */
  name: "Pt. Praveen Sagar",
  /** His initiated Gaudiya name. Shown beside the practising name, not instead. */
  initiatedName: "Mahakaal Chaitanya Das",
  honorific: "Vedic Priest & Spiritual Guide",
  location: "Bengaluru",
  experience: "15+ years",
  /**
   * His portrait. Drop a file at public/images/priest/portrait.jpg and set
   * this to that path — it then replaces the Srirangam stand-in on both the
   * About page and the home page. See the README in that folder.
   */
  portrait: null as string | null,

  /**
   * Further photographs of him — performing ceremonies, with his teachers.
   * Shown as a row beneath the biography on the About page. Empty renders
   * nothing rather than placeholder tiles.
   */
  photos: [] as { src: string; alt: string; caption: string }[],

  /** Stands in for the portrait until one is supplied. */
  practiceImage: "/images/temple/srirangam-hall.jpg" as string | null,
  sampradaya: "Pāñcarātra tradition · Gaudiya Vedānta" as string | null,

  /** Homepage version — short, his own words, first person. */
  bioShort: [
    "With over fifteen years of experience in Vedic rituals and samskaras, I am a Vedic priest and spiritual guide based in Bengaluru.",
    "My training has been shaped by the guidance of several respected teachers, including U. Ve. Bhaskar Bhattacharya and U. Ve. Bharat Iyengar Swami. I specialise in Vedic samskaras, pūjās, homas, deity worship and traditional spiritual practices, with studies spanning Pāñcarātra traditions, Yājūṣa Pūrvaprayoga and Gaudiya Vedānta.",
  ],

  /** The About page. Supplied by the priest; kept close to his own wording. */
  bioLong: [
    "With over 15 years of experience in performing Vedic rituals, samskaras, pujas, homas and traditional spiritual practices, I have dedicated my life to learning, preserving and sharing the rich traditions of Sanātana Dharma.",
    "My journey has been shaped by the guidance of many respected teachers and Ācāryas, through whom I have studied different aspects of Vedic tradition, ritual practice, mantra, worship and spiritual philosophy. Among my teachers and mentors are U. Ve. Bhaskar Bhattacharya and U. Ve. Bharat Iyengar Swami, whose guidance has been an important part of my learning and practice.",
    "Over the years I have gained practical experience in conducting a wide range of Vedic samskaras, pūjās, homas and religious ceremonies, with an emphasis on following traditional procedures with sincerity and attention to detail. My areas of practice include Gṛha Praveśa, Vāstu-related rituals, Navagraha worship, Āyuṣya Homa, Mṛtyuñjaya Homa, Sudarśana Homa, Narasiṃha Homa, Gaṇapati Homa and various other Vedic ceremonies.",
    "I have also studied and practised Pāñcarātra traditions, including teachings associated with the Nārada Pāñcarātra and Padma Saṃhitā, along with Yājūṣa Pūrvaprayoga and traditional approaches to deity worship.",
    "Alongside ritual practice I have been involved in teaching Vedic culture, reading and explaining ślokas, spiritual guidance, and sharing the philosophical teachings of Gaudiya Vedānta. My aim is not merely to perform a ritual, but to help people understand its purpose, tradition and spiritual significance.",
    "Based in Bengaluru, I serve families and individuals seeking authentic guidance for their Vedic samskaras, religious ceremonies, spiritual practices and traditional rituals, while striving to maintain the sanctity and integrity of the traditions passed down through the Guru–Śiṣya paramparā.",
  ],

  teachers: ["U. Ve. Bhaskar Bhattacharya", "U. Ve. Bharat Iyengar Swami"],
};

/**
 * The practical questions, and only the practical questions. A devotee abroad
 * has four: can he do it for me, what do I have to do, how far ahead, and
 * what does it cost. Everything else was reassurance copy.
 */
export const practical = [
  {
    q: "Can a ceremony be performed if I live outside India?",
    a: "Some can; others need you present. I will tell you which applies to yours before anything is arranged.",
  },
  {
    q: "What do I need to provide?",
    a: "It depends on the ceremony. I explain the materials, who needs to be present, and your part in it beforehand.",
  },
  {
    q: "How far in advance should I ask?",
    a: "As early as you can. Lead time depends on the ceremony, the place, and who is involved.",
  },
  {
    q: "How is dakshina handled?",
    a: "We discuss dakshina and material costs privately once the ceremony is settled. There is no listed price and no checkout.",
  },
  {
    q: "I don't know the name of the ceremony I need.",
    a: "Describe the occasion in your own words and I will tell you which ceremony applies.",
  },
];

/**
 * Consultation — astrology and vastu.
 *
 * Kept to what a consultation actually is and what it is not. No predictive
 * claims, no remedies-for-a-fee framing: this is guidance about which rite
 * suits an occasion and how a site or chart bears on it.
 */
export const consultations = [
  {
    slug: "astrology",
    title: "Astrological consultation",
    sanskrit: "Jyotiṣa",
    image: "/images/deity/navagraha-sculptures.jpg",
    imageAlt:
      "Black basalt panels of Surya, Soma and Mangala from a Navagraha set",
    lead: "For choosing a time, and for understanding which observance suits your circumstances.",
    body: [
      "Most of what families ask me for is muhūrta — an auspicious time. A marriage, a gṛha praveśa, a naming, the start of something: the tradition holds that when a rite is performed matters as much as that it is performed, and settling that is the first thing I do for most ceremonies.",
      "I also read a chart to advise which observance is appropriate. Where the Navagraha are indicated I will say so plainly, and where they are not I will say that too.",
    ],
    note: "This is guidance on ritual and timing within Jyotiṣa. I do not make predictions about health, litigation or finance, and I do not sell remedies.",
  },
  {
    slug: "vastu",
    title: "Vastu consultation",
    sanskrit: "Vāstu",
    image: "/images/temple/srirangam-hall.jpg",
    imageAlt: "The pillared hall of Sri Ranganathaswamy Temple, Srirangam",
    lead: "For a new home or a new site, before you move in and before you build.",
    body: [
      "Vāstu concerns the placement and orientation of a dwelling — the direction it faces, where the kitchen and the shrine sit, how the site is entered. I look at a plan, or at the place itself, and advise what the tradition asks for.",
      "It usually leads to a rite rather than replacing one: Vāstu Śānti to propitiate the deities of the site, Gṛha Praveśa on entering, and Vāstu Rakṣoghna where a site needs clearing. Those are ceremonies I perform myself, so the advice and the rite are not handed between two people.",
    ],
    note: "I advise on orientation, placement and the appropriate rite. I do not recommend demolition or structural work, and I do not sell corrective products.",
  },
];

/**
 * Photographs of pujas and ceremonies.
 *
 * EMPTY BY DESIGN until real photographs are supplied. Drop files into
 * public/images/gallery/ (see the README there) and register them here.
 *
 * Consent first: these are private religious occasions and the people in them
 * are identifiable. Nothing goes in without the family agreeing.
 */
export const galleryPhotos: {
  src: string;
  alt: string;
  caption: string;
}[] = [];

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
      { href: "/pujas", label: "Pujas", description: "Worship" },
      { href: "/samskaras", label: "Samskaras", description: "Life-cycle rites" },
      { href: "/consultation", label: "Consultation", description: "Astrology & vastu" },
    ],
  },
];

export const priestNav = {
  href: "/about",
  label: "About",
  description: "Pt. Praveen Sagar",
};

/** The single action on the site. There is no second, competing one. */
export const primaryAction = {
  href: "/contact",
  label: "Tell me your occasion",
};
