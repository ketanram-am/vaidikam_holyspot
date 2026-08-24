import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SacredScript from "@/components/ui/SacredScript";

/**
 * The single dark band on the page. It exists to break the ivory rhythm once,
 * so it carries only one idea — no cards, no links, no secondary text.
 */
export default function Philosophy() {
  return (
    <section
      aria-label="The guiding philosophy"
      className="surface-maroon relative overflow-hidden text-ivory"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-52 w-full md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[52%]"
      >
        <Image
          src="/images/stone-pillar.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, 52vw"
          className="cinematic-backdrop object-cover object-center opacity-75 [filter:saturate(.55)_contrast(1.08)] md:opacity-55"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/10 to-maroon-deep/10 md:bg-gradient-to-r md:from-maroon md:via-maroon/55 md:to-maroon-deep/15" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-maroon-deep via-maroon/90 via-60% to-maroon/25 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass-light/25 to-transparent"
      />

      <div className="container-page relative section-y">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-2">
            <SacredScript
              inverse
              className="hidden flex-col items-start gap-1 md:flex [&_.sacred-script__rule]:hidden"
            />
            <p className="eyebrow text-brass-light md:mt-6">A note on practice</p>
          </div>
          <div className="relative border-l border-brass-light/30 pl-7 font-serif text-quote text-ivory lg:col-span-8 lg:col-start-4 lg:pl-12">
            <p className="text-balance">
              The ceremony is never treated as a product selected from a list.
              Its purpose, family context, preparation, and traditional form
              are understood together before any arrangement is made.
            </p>
            <footer className="mt-9 flex items-center gap-4">
              <span className="h-px w-12 bg-brass-light/40" />
              <p className="eyebrow-quiet text-brass-light">
                The principle behind the practice
              </p>
            </footer>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
