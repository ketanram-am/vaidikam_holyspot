import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import OrnamentalRule from "@/components/ui/OrnamentalRule";
import SacredScript from "@/components/ui/SacredScript";
import { SealMark } from "@/components/ui/Motifs";

const assurances = [
  "Rooted in Sri Vaishnava sampradaya",
  "Priestly guidance before arrangements",
  "Preparation explained with clarity",
];

function AssuranceList({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`animate-rise grid max-w-2xl gap-3 border-y border-bronze/25 py-5 [animation-delay:300ms] ${className}`}
    >
      {assurances.map((assurance, index) => (
        <li key={assurance} className="flex items-center gap-3 text-small text-taupe">
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
      className="surface-ivory relative flex min-h-svh items-center overflow-hidden pb-[clamp(4rem,2rem+7vw,7rem)] pt-[calc(var(--nav-height)+clamp(3.5rem,2rem+8vw,7rem))]"
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
      <span aria-hidden="true" className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />
      <span aria-hidden="true" className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />

      <div className="container-page relative z-10 grid items-center lg:grid-cols-12">
        <div className="relative lg:col-span-7 lg:col-start-1">
          <SacredScript className="animate-rise mb-5 [animation-delay:0ms] lg:mb-6" />
          <p className="eyebrow animate-rise mb-6 flex items-center gap-3 [animation-delay:40ms] lg:mb-8">
            <span aria-hidden="true" className="h-px w-7 flex-none bg-bronze/55" />
            Sri Vaishnava practice · South India
          </p>

          <h1
            id="hero-title"
            className="hero-title-traditional animate-rise max-w-[10ch] text-display [animation-delay:80ms]"
          >
            Devotion, held{" "}
            <span className="font-serif font-normal italic text-bronze">across distance.</span>
          </h1>

          <div className="animate-rise mt-9 max-w-xl [animation-delay:150ms]">
            <OrnamentalRule className="mb-7 max-w-sm" />
          </div>

          <p className="lead animate-rise max-w-xl lg:ml-[8.333%] [animation-delay:180ms]">
            {site.promise}
          </p>

          <aside className="animate-rise mt-6 flex max-w-xl items-start gap-4 border-l border-bronze/60 pl-4 lg:ml-[8.333%] [animation-delay:210ms]">
            <SealMark
              aria-hidden="true"
              className="mt-0.5 h-8 w-8 flex-none text-bronze"
            />
            <div>
              <p className="eyebrow text-maroon">Personal priestly guidance</p>
              <p className="mt-1.5 max-w-[42ch] text-small text-charcoal">
                Every enquiry is considered by Mahakaal Prabhu before a ritual
                is recommended or arranged.
              </p>
              <Link href="/about" className="arrow-link mt-1.5">
                Meet the priest
              </Link>
            </div>
          </aside>

          <div className="animate-rise mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 lg:ml-[8.333%] [animation-delay:250ms]">
            <Link href="/booking" className="btn-primary w-full sm:w-auto">
              Begin an enquiry
            </Link>
            <Link href="/services" className="arrow-link self-center px-2 sm:self-auto">
              Explore the practice
            </Link>
          </div>

          <AssuranceList className="mt-9 sm:grid-cols-3 lg:ml-[8.333%]" />
        </div>
      </div>
      <p className="eyebrow pointer-events-none absolute bottom-8 right-gutter z-10 hidden border-y border-bronze/25 bg-ivory/55 px-4 py-3 text-bronze backdrop-blur-sm lg:block">
        Sri Narasimha · Sacred art
      </p>
    </section>
  );
}
