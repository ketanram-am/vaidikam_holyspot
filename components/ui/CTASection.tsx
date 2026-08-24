import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import {
  KuthuvilakkuMark,
  MandapaLintelMark,
} from "./TempleMotifs";

type Props = {
  title?: string;
  text?: string;
  cta?: { href: string; label: string };
  /** A quiet secondary route for visitors not ready to enquire. */
  secondary?: { href: string; label: string } | null;
};

/**
 * The closing invitation. Deliberately sits on ivory — the footer is cream,
 * and two cream bands stacked made the page appear to end twice.
 */
export default function CTASection({
  title = "Begin a quiet conversation",
  text = "Share the ritual and occasion you have in mind. This is a personal enquiry — not a booking form.",
  cta = { href: "/booking", label: "Begin an enquiry" },
  secondary = { href: "/contact", label: "Or ask a question first" },
}: Props) {
  return (
    <section
      aria-labelledby="cta-title"
      className="closing-cta surface-maroon relative overflow-hidden border-y border-brass/35 section-y"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block"
      >
        <Image
          src="/images/temple/srirangam-temple.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 58vw"
          className="object-cover object-[52%_48%] opacity-[0.22] mix-blend-luminosity"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-maroon via-maroon/75 to-maroon-deep/45" />
      </div>
      <span className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-brass-light/15 lg:block" />

      <div className="container-page relative">
        <Reveal className="closing-cta__grid grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-2">
            <span className="eyebrow flex items-center gap-3 text-brass-light">
              <KuthuvilakkuMark className="h-8 w-5" /> A personal invitation
            </span>
            <h2 id="cta-title" className="closing-cta__title mt-6 max-w-[15ch] text-h2 text-ivory text-balance">
              {title}
            </h2>
            <MandapaLintelMark className="mt-7 h-7 max-w-md text-brass-light/55" />
          </div>
          <div className="min-w-0 lg:col-span-3">
            <p className="closing-cta__copy max-w-[32ch] text-lead text-ivory/76">{text}</p>

          <div className="mt-8 flex flex-col items-start gap-5">
            <Link href={cta.href} className="closing-cta__button btn border-brass bg-brass text-soot hover:bg-brass-light">
              {cta.label}
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="tap-link text-small text-ivory/70 underline decoration-brass-light/40 underline-offset-4 transition-colors duration-200 hover:text-brass-light"
              >
                {secondary.label}
              </Link>
            )}
          </div>

          <p className="mt-8 max-w-[30ch] text-small text-ivory/50">
            Arrangements are discussed privately, after the ritual is understood.
          </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
