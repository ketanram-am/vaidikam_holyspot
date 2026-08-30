import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { site, priest, practical } from "@/content/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Ask ${priest.name} about a Vedic ceremony — homas, yagas, pujas, or samskaras.`,
  path: "/contact",
});

/**
 * Contact.
 *
 * Removed: "No Sanskrit terminology is required." as a headline, the numbered
 * list of things to mention (which the field labels say anyway), the
 * "Prepare an enquiry" button leading to a second form, and the paragraph
 * explaining that no placeholder inbox is being presented as genuine.
 */
export default function ContactPage() {
  const { email, phone, whatsapp } = site.contact;
  const hasDirect = Boolean(email || phone || whatsapp);

  return (
    <main id="main">
      <Section tone="ivory" labelledBy="contact-title" className="page-top">
        <Reveal className="contact">
          <h1 id="contact-title" className="sec__title">
            Contact {priest.name}
          </h1>
          <p className="contact__lead">
            Tell him the occasion, where your family is based, and when you need
            the ceremony. You do not need to know its Sanskrit name.
          </p>

          {hasDirect ? (
            <ul className="contact__channels">
              {whatsapp && (
                <li>
                  <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
                    WhatsApp <span>{whatsapp}</span>
                  </a>
                </li>
              )}
              {phone && (
                <li>
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>
                    Phone <span>{phone}</span>
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a href={`mailto:${email}`}>
                    Email <span>{email}</span>
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <p className="contact__missing">
              No contact details have been set yet. Add a WhatsApp number,
              phone, or email to <code>site.contact</code> in{" "}
              <code>content/site.ts</code> and they will appear here.
            </p>
          )}
        </Reveal>

        <dl className="qa qa--contact">
          {practical.map((item, i) => (
            <Reveal key={item.q} index={i} className="qa__item">
              <dt className="qa__q">{item.q}</dt>
              <dd className="qa__a">{item.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>
    </main>
  );
}
