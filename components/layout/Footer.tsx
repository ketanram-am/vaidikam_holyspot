import Link from "next/link";
import BrandLockup from "@/components/ui/BrandLockup";
import { site, priest, navGroups, priestNav } from "@/content/site";

/**
 * A footer with the four links that exist and the contact details, and
 * nothing else. It previously carried a serif tagline, three link columns
 * including Gallery / Articles / Testimonials / Future Products, a
 * "Sri Vaishnava tradition" line, and a decorative lintel.
 */
export default function Footer() {
  const { email, phone, whatsapp } = site.contact;
  const year = 2026;

  return (
    <footer className="foot surface-cream">
      <div className="container-page foot__inner">
        <div className="foot__brand">
          <BrandLockup />
          <p className="foot__role">
            {priest.name} · {priest.honorific}
          </p>
        </div>

        <nav aria-label="Footer" className="foot__nav">
          {navGroups[0].items.map((item) => (
            <Link key={item.href} href={item.href} className="foot__link">
              {item.label}
            </Link>
          ))}
          <Link href={priestNav.href} className="foot__link">
            {priestNav.label}
          </Link>
          <Link href="/contact" className="foot__link">
            Contact
          </Link>
        </nav>

        {(email || phone || whatsapp) && (
          <div className="foot__contact">
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
                WhatsApp
              </a>
            )}
            {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </div>
        )}
      </div>

      <div className="container-page foot__legal">
        <p>
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
