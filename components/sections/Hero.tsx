import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import OrnamentalRule from "@/components/ui/OrnamentalRule";
import { SealMark } from "@/components/ui/Motifs";

const assurances = [
  "Rooted in Sri Vaishnava sampradaya",
  "Priestly guidance before arrangements",
  "Preparation explained with clarity",
];

function AssuranceList({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`animate-rise grid max-w-2xl gap-2 border-y border-bronze/25 py-4 [animation-delay:300ms] sm:gap-3 ${className}`}
    >
      {assurances.map((assurance, index) => (
        <li key={assurance} className="flex items-center gap-3 text-[0.78rem] leading-snug text-taupe sm:text-small">
          <span aria-hidden="true" className="font-serif italic text-bronze/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{assurance}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="landing-hero surface-ivory relative overflow-hidden"
    >
      {site.heroImage && (
        <div className="hero-deity-backdrop" aria-hidden="true">
          <Image
            src={site.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-deity-backdrop__image"
          />
        </div>
      )}
      <span aria-hidden="true" className="hero-deity-veil" />
      <p className="hero-art-caption eyebrow pointer-events-none absolute right-gutter z-10 border-y border-brass-light/35 bg-maroon-deep/[.92] px-3 py-2 text-brass-light sm:hidden">
        Sri Narasimha · painting detail
      </p>
      <span aria-hidden="true" className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />
      <span aria-hidden="true" className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />

      <div className="landing-hero__inner container-page relative z-10 grid items-center lg:grid-cols-12">
        <div className="landing-hero__content relative lg:col-span-7 lg:col-start-1">
          <p className="hero-kicker eyebrow animate-rise mb-5 flex items-center gap-3 [animation-delay:0ms] lg:mb-6">
            <span aria-hidden="true" className="h-px w-7 flex-none bg-bronze/55" />
            Sri Vaishnava practice · South India
          </p>

          <h1
            id="hero-title"
            className="hero-title-traditional animate-rise max-w-[10ch] text-display [animation-delay:80ms]"
          >
            Devotion, held{" "}
            <span className="font-display font-medium text-bronze">across distance.</span>
          </h1>

          <div className="hero-rule animate-rise mt-6 max-w-xl [animation-delay:130ms] lg:mt-7">
            <OrnamentalRule className="mb-5 max-w-sm" />
          </div>

          <p className="hero-copy lead animate-rise max-w-xl lg:ml-[8.333%] [animation-delay:180ms]">
            {site.promise}
          </p>

          <aside className="hero-priest animate-rise mt-5 flex max-w-xl items-start gap-3 border-l border-bronze/60 pl-4 lg:ml-[8.333%] [animation-delay:200ms]">
            <SealMark
              aria-hidden="true"
              className="mt-0.5 h-7 w-7 flex-none text-bronze"
            />
            <div>
              <p className="eyebrow text-maroon">Personal priestly guidance</p>
              <p className="mt-1 max-w-[46ch] text-[0.82rem] leading-relaxed text-charcoal sm:text-small">
                Mahakaal Prabhu considers each enquiry before recommending a ritual.
              </p>
              <Link href="/about" className="arrow-link mt-1">
                Meet the priest
              </Link>
            </div>
          </aside>

          <div className="hero-actions animate-rise mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 lg:ml-[8.333%] [animation-delay:240ms]">
            <Link href="/booking" className="btn-primary w-full sm:w-auto">
              Begin an enquiry
            </Link>
            <Link href="/services" className="arrow-link self-center px-2 sm:self-auto">
              Explore the practice
            </Link>
          </div>

          <AssuranceList className="hero-assurances mt-7 sm:grid-cols-3 lg:ml-[8.333%]" />
        </div>
      </div>
      <p className="eyebrow pointer-events-none absolute bottom-8 right-gutter z-10 hidden border-y border-bronze/25 bg-ivory/55 px-4 py-3 text-bronze backdrop-blur-sm lg:block">
        Sri Narasimha · Sacred art
      </p>
    </section>
  );
}
