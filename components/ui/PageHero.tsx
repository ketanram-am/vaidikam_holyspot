import Link from "next/link";
import Reveal from "./Reveal";
import {
  MandapaLintelMark,
  MandapaPillarMark,
} from "./TempleMotifs";
import { site } from "@/content/site";

type Crumb = { href: string; label: string };

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: Crumb[];
  /** Optional trailing content — usually a CTA or a short metadata row. */
  children?: React.ReactNode;
};

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-x-2.5 text-small text-taupe">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-hairline">
                  /
                </span>
              )}
              {last ? (
                // The current page is not a link — a link to where you already
                // are is noise for keyboard and screen-reader users alike.
                <span aria-current="page" className="text-charcoal">
                  {c.label}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="inline-flex min-h-tap items-center transition-colors duration-200 hover:text-maroon"
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  children,
}: Props) {
  const crumbLd =
    breadcrumbs && breadcrumbs.length > 1
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href === "/" ? "" : c.href}`,
          })),
        }
      : null;

  return (
    <section
      aria-labelledby="page-title"
      className="page-hero surface-cream relative overflow-hidden border-b border-bronze/30 pb-14 pt-[calc(var(--nav-height)+2rem)] md:pb-[clamp(4rem,2.5rem+7vw,8rem)] md:pt-[calc(var(--nav-height)+clamp(3rem,1.5rem+7vw,6rem))]"
    >
      {crumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }}
        />
      )}

      <MandapaPillarMark className="pointer-events-none absolute -bottom-8 left-[2%] hidden h-[72%] w-16 text-bronze/[0.065] xl:block" />
      <span aria-hidden="true" className="absolute bottom-0 left-[7%] top-0 hidden w-px bg-bronze/12 lg:block" />

      <div className="container-page relative">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}

        <div className="page-hero__grid grid gap-7 md:gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="flex flex-col gap-6 lg:col-span-8 lg:col-start-2">
            {eyebrow && (
              <span className="eyebrow flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-7 bg-bronze/55" />
                {eyebrow}
              </span>
            )}
            <h1 id="page-title" className="page-hero__title max-w-[15ch] text-h1 text-balance">
              {title}
            </h1>
          </Reveal>
          {lead && (
            <Reveal delay={0.08} className="lg:col-span-3 lg:pb-2">
              <p className="page-hero__lead lead max-w-prose border-l border-bronze/35 pl-6">{lead}</p>
            </Reveal>
          )}
        </div>

        {children && (
          <Reveal delay={0.12} className="mt-12 lg:ml-[8.333%]">
            {children}
          </Reveal>
        )}
        <MandapaLintelMark className="mt-10 hidden h-7 text-bronze/55 md:block lg:ml-[8.333%] lg:w-8/12" />
      </div>
    </section>
  );
}
