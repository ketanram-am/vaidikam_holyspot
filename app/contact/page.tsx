import {
  CalendarBlankIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { site, priest } from "@/content/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Ask ${priest.name} about a Vedic ceremony — homas, yagas, pujas, or samskaras.`,
  path: "/contact",
});

/**
 * A direct, mobile-first contact page without a form or unnecessary copy.
 */
export default function ContactPage() {
  const { email, phone, whatsapp } = site.contact;
  const hasDirect = Boolean(email || phone || whatsapp);

  return (
    <main id="main">
      <Section tone="ivory" labelledBy="contact-title" className="page-top">
        <Reveal className="contact__intro">
          <p className="contact__eyebrow">Direct enquiry</p>
          <h1 id="contact-title" className="contact__title">
            Begin with your occasion
          </h1>
          <p className="contact__lead">
            Share what you are planning, where you are based, and your preferred
            date. {priest.name} will guide you from there.
          </p>
        </Reveal>

        {hasDirect ? (
          <Reveal delay={0.06}>
            <ul className="contact__channels">
              {whatsapp && (
                <li className="contact__channel contact__channel--primary">
                  <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
                    <WhatsappLogoIcon size={25} weight="fill" aria-hidden="true" />
                    <span className="contact__channel-copy">
                      <strong>WhatsApp</strong>
                      <span>{whatsapp}</span>
                    </span>
                    <span className="contact__channel-action">Message</span>
                  </a>
                </li>
              )}
              {phone && (
                <li className="contact__channel">
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>
                    <PhoneIcon size={24} weight="duotone" aria-hidden="true" />
                    <span className="contact__channel-copy">
                      <strong>Phone</strong>
                      <span>{phone}</span>
                    </span>
                  </a>
                </li>
              )}
              {email && (
                <li className="contact__channel">
                  <a href={`mailto:${email}`}>
                    <EnvelopeSimpleIcon
                      size={24}
                      weight="duotone"
                      aria-hidden="true"
                    />
                    <span className="contact__channel-copy">
                      <strong>Email</strong>
                      <span>{email}</span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>
        ) : (
          <Reveal>
            <p className="contact__missing">
              No contact details have been set yet. Add a WhatsApp number,
              phone, or email to <code>site.contact</code> in{" "}
              <code>content/site.ts</code> and they will appear here.
            </p>
          </Reveal>
        )}

        <Reveal className="contact__guide">
          <p className="contact__guide-title">Helpful details to share</p>
          <ul>
            <li><CalendarBlankIcon size={20} aria-hidden="true" />The occasion and preferred date</li>
            <li><MapPinIcon size={20} aria-hidden="true" />Your city or ceremony location</li>
            <li><WhatsappLogoIcon size={20} aria-hidden="true" />Any questions you would like answered</li>
          </ul>
          <p>You do not need to know the Sanskrit name of the ceremony.</p>
        </Reveal>
      </Section>
    </main>
  );
}
