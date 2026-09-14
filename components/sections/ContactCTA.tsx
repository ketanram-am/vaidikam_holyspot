import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/content/site";
import Mark from "@/components/ui/Mark";

/**
 * A concise occasion-first close with direct contact details.
 */
export default function ContactCTA() {
  const { whatsapp, phone, email } = site.contact;
  const hasDirect = Boolean(whatsapp || phone || email);

  return (
    <section aria-labelledby="contact-title" className="cta surface-maroon">
      <Mark name="sudarshana-chakra" className="cta__chakra" />
      <span aria-hidden="true" className="cta__glow" />

      <div className="container-page cta__inner">
        <h2 id="contact-title" className="cta__title">
          Begin with the occasion
        </h2>
        <span aria-hidden="true" className="cta__rule" />
        <p className="cta__text">
          From a new home to a family ceremony or sacred observance, find the
          appropriate tradition for the occasion.
        </p>

        <div className="cta__actions">
          <Link href="/#ceremonies" className="btn btn-gold cta__button">
            Explore ceremonies
            <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        {hasDirect && (
          <ul className="cta__direct" aria-label="Direct contact">
            {whatsapp && (
              <li>
                <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
                  WhatsApp
                </a>
              </li>
            )}
            {phone && (
              <li>
                <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
          </ul>
        )}

        {!hasDirect && (
          <p className="cta__note">
            No contact details are set in <code>content/site.ts</code> yet.
          </p>
        )}
      </div>
    </section>
  );
}
