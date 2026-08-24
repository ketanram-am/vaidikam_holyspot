import Link from "next/link";
import { site } from "@/content/site";
import SacredImage from "@/components/ui/SacredImage";
import OrnamentalRule from "@/components/ui/OrnamentalRule";

const assurances = [
  "Rooted in tradition",
  "Personally guided",
  "Prepared across distance",
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
      className="surface-ivory relative overflow-hidden pb-14 pt-[calc(var(--nav-height)+1rem)] lg:flex lg:min-h-svh lg:items-center lg:pb-[clamp(4rem,2rem+7vw,7rem)] lg:pt-[calc(var(--nav-height)+clamp(3rem,1.5rem+7vw,6rem))]"
    >
      <span aria-hidden="true" className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />
      <span aria-hidden="true" className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-bronze/12 lg:block" />

      <div className="container-page relative grid items-center gap-x-8 gap-y-0 lg:grid-cols-12 lg:gap-y-14">
        <div className="relative z-20 order-2 -mt-12 border border-bronze/25 bg-paper/95 px-5 pb-7 pt-8 shadow-panel backdrop-blur-md lg:order-1 lg:col-span-6 lg:col-start-1 lg:mt-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
          <p className="eyebrow animate-rise mb-5 flex items-center gap-3 [animation-delay:0ms] lg:mb-9">
            <span aria-hidden="true" className="h-px w-7 flex-none bg-bronze/55" />
            Sri Vaishnava practice · South India
          </p>

          <h1
            id="hero-title"
            className="animate-rise max-w-[10ch] text-display [animation-delay:80ms]"
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

          <div className="animate-rise mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 lg:ml-[8.333%] lg:mt-10 [animation-delay:240ms]">
            <Link href="/booking" className="btn-primary w-full sm:w-auto">
              Begin an enquiry
            </Link>
            <Link href="/services" className="arrow-link self-center px-2 sm:self-auto">
              Explore the practice
            </Link>
          </div>

          <AssuranceList className="mt-12 hidden sm:grid-cols-3 lg:ml-[8.333%] lg:grid" />
        </div>

        <div className="narasimha-stage animate-fade relative order-1 -mx-gutter lg:order-2 lg:col-span-6 lg:-mr-20 lg:ml-4 lg:mt-10 [animation-delay:120ms]">
          <span aria-hidden="true" className="narasimha-stage__glow" />
          <span aria-hidden="true" className="absolute -inset-5 z-[1] border border-bronze/20" />
          <span className="eyebrow absolute -right-8 top-0 hidden origin-top-right rotate-90 text-taupe xl:block">
            Narasimha / Sacred art
          </span>
          <SacredImage
            src={site.heroImage}
            alt="Traditional South Indian painting of Sri Narasimha defeating Hiranyakashipu, surrounded by attendants and divine attributes"
            priority
            showPlaceholderLabel={false}
            sizes="(max-width: 1023px) 92vw, 42vw"
            className="cinematic-image narasimha-art relative z-[2] mx-auto aspect-[20/19] w-full max-w-2xl shadow-panel lg:max-w-none"
          />

          <div className="relative z-10 mx-auto mt-0 hidden w-[calc(100%-2rem)] max-w-md -translate-y-5 items-center gap-4 border border-bronze/30 bg-paper/95 px-5 py-4 shadow-card backdrop-blur-sm lg:flex lg:w-[calc(100%-2.5rem)]">
            <span aria-hidden="true" className="h-8 w-px flex-none bg-bronze/45" />
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-[1.0625rem] leading-snug text-maroon">
                Sri Narasimha
              </span>
              <span className="eyebrow-quiet mt-1 truncate">
                Divine protection at the heart of devotion
              </span>
            </div>

          </div>
          <div className="absolute -bottom-8 -left-12 hidden w-40 border border-bronze/30 bg-paper p-2 shadow-panel lg:block">
            <SacredImage
              src="/images/temple/srirangam-temple.jpg"
              alt="The layered temple towers of Sri Ranganathaswamy Temple in Srirangam"
              showPlaceholderLabel={false}
              sizes="160px"
              className="aspect-square"
            />
          </div>
        </div>
        <AssuranceList className="order-3 mt-8 sm:grid-cols-3 lg:hidden" />
      </div>
    </section>
  );
}
