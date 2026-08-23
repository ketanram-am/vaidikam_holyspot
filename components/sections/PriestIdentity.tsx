import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ArrowLink from "@/components/ui/Arrow";
import SacredImage from "@/components/ui/SacredImage";
import { Fact, FactGrid, BulletList } from "@/components/ui/Fact";
import { priest } from "@/content/site";
import { KolamMark, SealMark } from "@/components/ui/Motifs";
import OrnamentalRule from "@/components/ui/OrnamentalRule";

export default function PriestIdentity() {
  return (
    <Section id="priest" tone="ivory" labelledBy="priest-title">
      <div className="grid items-center gap-[clamp(3rem,1.5rem+6vw,6rem)] lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5 lg:col-start-2">
          <KolamMark className="pointer-events-none absolute -left-20 -top-20 hidden h-56 w-56 text-bronze/[0.06] lg:block" />
          <div className="relative mx-auto max-w-[20rem] sm:max-w-sm lg:max-w-none">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -right-5 hidden h-full w-full border border-bronze/30 sm:block"
            />
            <SacredImage
              src={priest.practiceImage}
              alt="The pillared hall of Sri Ranganathaswamy Temple in Srirangam"
              showPlaceholderLabel={false}
              sizes="(max-width: 1023px) 80vw, 40vw"
              className="relative aspect-[4/3] shadow-panel md:aspect-[4/5]"
            />
            <div className="absolute -bottom-7 -left-6 hidden max-w-[15rem] border border-bronze/25 bg-paper px-5 py-4 shadow-card md:block">
              <p className="eyebrow-quiet text-bronze">Tradition / place</p>
              <p className="mt-2 text-small leading-snug text-maroon">
                Srirangam’s sacred rhythm reflects continuity, order, and preparation.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-9 lg:col-span-5 lg:col-start-8">
          <Reveal className="flex flex-col gap-4">
            <span className="eyebrow flex items-center gap-3">
              <SealMark className="h-4 w-4" /> The practitioner
            </span>
            <h2 id="priest-title" className="max-w-[12ch] text-h2">
              {priest.name}
            </h2>
            <p className="eyebrow-quiet text-bronze">
              {priest.honorific} · {priest.sampradaya}
            </p>
            <p className="lead mt-1 max-w-prose">{priest.bioShort}</p>
            <OrnamentalRule className="mt-3 max-w-sm" />
          </Reveal>

          <Reveal delay={0.06}>
            <FactGrid className="border-t border-hairline pt-8">
              <Fact label="Tradition">{priest.sampradaya}</Fact>
              <Fact label="Approach">Personal guidance before arrangements</Fact>
            </FactGrid>
          </Reveal>

          <Reveal delay={0.12} className="border-t border-hairline pt-8">
            <span className="eyebrow">Principles of practice</span>
            <BulletList items={priest.principles} className="mt-4" />
          </Reveal>

          <Reveal delay={0.16}>
            <ArrowLink href="/about">Read the full biography</ArrowLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
