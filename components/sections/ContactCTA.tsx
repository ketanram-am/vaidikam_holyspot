import Link from "next/link";
import {
  WhatsappLogoIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react/dist/ssr";
import { primaryAction, priest, site } from "@/content/site";
import Mark from "@/components/ui/Mark";

/**
 * The one closing action.
 *
 * There used to be three overlapping calls to action here — "Begin an
 * enquiry", "Or ask a question first", and a sticky bar offering "Begin an
 * enquiry" plus "Ask first". Nobody could tell those apart because there was
 * no difference: all four led to the same conversation. One button now.
 */
export default function ContactCTA() {
  const { whatsapp, phone, email } = site.contact;
  const hasDirect = Boolean(whatsapp || phone || email);

  return (
    <section aria-labelledby="contact-title" className="cta surface-maroon">
      <Mark name="sudarshana-chakra" className="cta__chakra" />
      <span aria-hidden="true" className="cta__glow" />

      <div className="container-page cta__inner">
        <p className="cta__eyebrow">Speak to me directly</p>
        <h2 id="contact-title" className="cta__title">
          Tell me what you need
        </h2>
        <span aria-hidden="true" className="cta__rule" />
        <p className="cta__text">
          Describe the occasion in your own words — you do not need the
          Sanskrit name of a ceremony. I will tell you which one applies and
          what it involves.
        </p>

        <div className="cta__actions">
          <Link href={primaryAction.href} className="btn btn-gold cta__button">
            {primaryAction.label}
            <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
          </Link>

          {/* The direct routes sit beside the button rather than behind
              another page, because a devotee abroad reaching for WhatsApp at
              11pm should not have to navigate for it. */}
          <ul className="cta__direct">
            {whatsapp && (
              <li>
                <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
                  <WhatsappLogoIcon size={19} weight="fill" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                  <PhoneIcon size={19} weight="duotone" aria-hidden="true" />
                  {phone}
                </a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`}>
                  <EnvelopeSimpleIcon size={19} weight="duotone" aria-hidden="true" />
                  {email}
                </a>
              </li>
            )}
          </ul>
        </div>

        {!hasDirect && (
          <p className="cta__note">
            No contact details are set in <code>content/site.ts</code> yet.
          </p>
        )}
      </div>
    </section>
  );
}
