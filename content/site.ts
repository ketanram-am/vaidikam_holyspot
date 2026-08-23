export const site = {
  name: "Vaidikam Holyspot",
  // Canonical origin. Set this to the live domain before launch — metadata,
  // sitemap, and JSON-LD all derive absolute URLs from it.
  url: "https://vaidhikamholyspot.com",
  tagline: "Sri Vaishnava ritual practice, approached personally.",
  promise:
    "Personal guidance for families in India and abroad, with every ceremony approached through preparation, clarity, and Sri Vaishnava tradition.",
  heroImage: "/images/art/lakshmi-ravi-varma.jpg" as string | null,
  contact: {
    whatsapp: null as string | null,
    phone: null as string | null,
    email: null as string | null,
  },
};

export const priest = {
  name: "Mahakaal Prabhu",
  honorific: "Sri Vaishnava Vedic Priest",
  portrait: null as string | null,
  practiceImage: "/images/temple/srirangam-hall.jpg" as string | null,
  sampradaya: "Sri Vaishnava tradition",
  bioShort:
    "A personal Vedic practice for devotees seeking thoughtful guidance and ceremonies approached according to Sri Vaishnava tradition.",
  bioLong: [
    "Mahakaal Prabhu’s work begins with listening. Every enquiry is understood in the context of the family, the occasion, and the tradition they wish to uphold before a ritual is recommended or arranged.",
    "This personal approach is especially important for families living outside India, who may need clarity about preparation, participation, or the right ceremony for a meaningful family occasion.",
  ],
  principles: [
    "Guidance before recommendation",
    "Respect for family tradition",
    "Clear preparation and communication",
  ],
};

export const trustPrinciples = [
  { value: "01", label: "Personal guidance" },
  { value: "02", label: "Sri Vaishnava tradition" },
  { value: "03", label: "For families worldwide" },
  { value: "04", label: "No marketplace hand-off" },
];

export const process = [
  {
    step: "01",
    title: "Enquire",
    text: "Share the ritual and occasion you have in mind. No obligation, no checkout.",
  },
  {
    step: "02",
    title: "Understand",
    text: "Mahakaal Prabhu considers the occasion, family practice, location, and timing.",
  },
  {
    step: "03",
    title: "Prepare",
    text: "The appropriate ritual, participation, materials, and practical arrangements are explained.",
  },
  {
    step: "04",
    title: "Confirm",
    text: "Only after there is clarity on both sides are the ceremony and timing confirmed.",
  },
];

export const testimonials: {
  quote: string;
  name: string;
  location: string;
}[] = [];

export const gallery: {
  alt: string;
  caption: string;
  src: string;
  layout: "landscape" | "portrait" | "square";
}[] = [
  {
    alt: "The pillared hall of Sri Ranganathaswamy Temple in Srirangam",
    caption: "Pillared hall · Sri Ranganathaswamy Temple, Srirangam",
    src: "/images/temple/srirangam-hall.jpg",
    layout: "landscape",
  },
  {
    alt: "Yashoda with the child Krishna beside a white cow in a painting by Raja Ravi Varma",
    caption: "Yashoda with Krishna · Raja Ravi Varma, public domain",
    src: "/images/art/yashoda-krishna.jpg",
    layout: "portrait",
  },
  {
    alt: "A traditional South Indian brass lamp",
    caption: "Brass lamp · ritual light and preparation",
    src: "/images/brass-lamp.jpg",
    layout: "square",
  },
  {
    alt: "The layered gopurams of Sri Ranganathaswamy Temple in Srirangam",
    caption: "Temple towers · Sri Ranganathaswamy Temple, Srirangam",
    src: "/images/temple/srirangam-temple.jpg",
    layout: "landscape",
  },
  {
    alt: "Carved soapstone pillar detail from Karnataka",
    caption: "Carved stone · the discipline of the maker’s hand",
    src: "/images/stone-pillar.jpg",
    layout: "square",
  },
  {
    alt: "A granite-pillared corridor receding into shade",
    caption: "Temple corridor · rhythm, shade, and procession",
    src: "/images/stone-corridor.jpg",
    layout: "landscape",
  },
  {
    alt: "The lived streets surrounding Sri Ranganathaswamy Temple",
    caption: "Temple streets · the lived world around Srirangam",
    src: "/images/temple/srirangam-market.jpg",
    layout: "landscape",
  },
  {
    alt: "A historic palm-leaf manuscript folio",
    caption: "Palm-leaf manuscript · text carried through generations",
    src: "/images/palm-manuscript.jpg",
    layout: "landscape",
  },
];

export const priestNav = {
  href: "/about",
  label: "The Priest",
  description: "Meet Mahakaal Prabhu",
};

export const navGroups = [
  {
    label: "Rituals",
    items: [
      { href: "/homas", label: "Homas", description: "Sacred fire offerings" },
      { href: "/yagas", label: "Yagas", description: "Extended Vedic observances" },
      { href: "/pujas", label: "Pujas", description: "Personal forms of worship" },
      {
        href: "/samskaras",
        label: "Samskaras",
        description: "Life-cycle ceremonies",
      },
    ],
  },
  {
    label: "Guidance",
    items: [
      {
        href: "/consultation",
        label: "Consultation",
        description: "Ask before making arrangements",
      },
      { href: "/faqs", label: "FAQs", description: "Preparation and process" },
      { href: "/contact", label: "Contact", description: "Begin a private question" },
    ],
  },
  {
    label: "Explore",
    items: [
      {
        href: "/gallery",
        label: "Gallery",
        description: "Architecture and devotional art",
      },
      { href: "/articles", label: "Articles", description: "Notes on tradition" },
      {
        href: "/services",
        label: "All services",
        description: "View the complete practice",
      },
    ],
  },
];
