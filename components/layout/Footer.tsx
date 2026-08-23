import Link from "next/link";
import { site, priest } from "@/content/site";
import BrandLockup from "@/components/ui/BrandLockup";
import {
  MandapaLintelMark,
  MandapaPillarMark,
} from "@/components/ui/TempleMotifs";
import YogaNarasimhaMark from "@/components/ui/YogaNarasimhaMark";

const columns = [
  {
    heading: "Rituals",
    links: [
      { href: "/homas", label: "Homas" },
      { href: "/yagas", label: "Yagas" },
      { href: "/pujas", label: "Pujas" },
      { href: "/samskaras", label: "Samskaras" },
      { href: "/consultation", label: "Consultation" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "The Priest" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    heading: "Help",
    links: [
      { href: "/faqs", label: "FAQs" },
      { href: "/products", label: "Future Products" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

function FooterLink({ href, children }: { href: string; children: string }) {
  return (
    <li>
      <Link
        href={href}
        className="tap-link text-small text-charcoal transition-colors duration-200 hover:text-maroon"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="surface-cream relative overflow-hidden border-t border-bronze/40">
      <MandapaPillarMark className="pointer-events-none absolute -bottom-4 left-3 hidden h-[22rem] w-28 text-bronze/[0.04] xl:block" />
      <MandapaPillarMark className="pointer-events-none absolute -bottom-4 right-3 hidden h-[22rem] w-28 -scale-x-100 text-bronze/[0.04] xl:block" />

      <div className="container-page relative pt-10">
        <MandapaLintelMark
          aria-hidden="true"
          className="h-8 w-full text-bronze/55"
        />
      </div>

      <div className="container-page relative grid gap-x-10 gap-y-14 py-[clamp(4rem,2.5rem+6vw,7rem)] md:grid-cols-2 lg:grid-cols-12">
        <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-4">
          <BrandLockup />
          <p className="max-w-sm font-serif text-quote text-maroon">
            {site.tagline}
          </p>

          <div className="mt-2 flex flex-col gap-2">
            {site.contact.email && (
              <a href={`mailto:${site.contact.email}`} className="arrow-link w-fit">
                {site.contact.email}
              </a>
            )}
            {site.contact.whatsapp && (
              <a
                href={site.contact.whatsapp}
                className="tap-link w-fit text-small text-charcoal underline decoration-bronze/40 underline-offset-4 transition-colors duration-200 hover:text-maroon"
              >
                Message on WhatsApp
              </a>
            )}
            {!site.contact.email && !site.contact.whatsapp && (
              <Link href="/contact" className="arrow-link w-fit">
                Contact Mahakaal Prabhu
              </Link>
            )}
          </div>

          <p className="max-w-xs text-small text-taupe">
            Enquiries are handled as a personal conversation, never passed
            through a marketplace or call centre.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:col-span-2 lg:col-span-7 lg:col-start-6"
        >
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h2 className="eyebrow font-sans text-bronze">
                <span className="mr-2 text-hairline">—</span>{col.heading}
              </h2>
              <ul className="flex flex-col gap-0">
                {col.links.map((l) => (
                  <FooterLink key={l.href} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="container-page">
        <div className="h-px bg-bronze/25" />
        <div className="flex flex-col items-center justify-between gap-3 py-7 text-small text-taupe md:flex-row">
          <p className="flex items-center gap-3">
            <YogaNarasimhaMark
              accentColor="#742F27"
              className="h-5 w-5 text-bronze"
            />
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-center md:text-right">{priest.sampradaya}</p>
        </div>
      </div>
    </footer>
  );
}
