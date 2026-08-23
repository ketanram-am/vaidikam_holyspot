import Link from "next/link";
import { FlameMark, RingMotif } from "@/components/ui/Motifs";

const routes = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About the priest" },
  { href: "/faqs", label: "FAQs" },
  { href: "/booking", label: "Request a ritual" },
];

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[70svh] items-center overflow-hidden bg-ivory py-[clamp(4rem,3rem+5vw,7rem)] pt-[calc(var(--nav-height)+3rem)]"
    >
      <RingMotif className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-bronze/[0.05]" />

      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <FlameMark className="h-10 w-10 text-bronze/70" />
        <p className="eyebrow-quiet">Error 404</p>
        <h1 className="max-w-xl text-h1 text-balance">
          This page could not be found
        </h1>
        <p className="lead max-w-md">
          The page you are looking for may have moved. These are the places
          most visitors are heading.
        </p>

        <nav aria-label="Suggested pages" className="mt-2">
          <ul className="flex flex-wrap justify-center gap-2.5">
            {routes.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="manuscript-tag transition-colors hover:border-bronze hover:text-maroon"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/" className="btn-primary mt-4">
          Return home
        </Link>
      </div>
    </main>
  );
}
