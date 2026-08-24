import Section from "@/components/ui/Section";
import { StatRow } from "@/components/ui/Stat";
import { KuthuvilakkuMark } from "@/components/ui/TempleMotifs";
import { trustPrinciples } from "@/content/site";

export default function TrustStrip() {
  return (
    <Section
      tone="paper"
      size="none"
      border="y"
      label="Practice at a glance"
      className="trust-strip py-[clamp(3rem,2rem+4vw,5rem)]"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="flex items-center gap-4 lg:col-span-2">
          <KuthuvilakkuMark
            aria-hidden="true"
            className="hidden h-10 w-7 flex-none text-bronze sm:block"
          />
          <p className="eyebrow">Principles / in practice</p>
        </div>
        <div className="lg:col-span-10">
          <StatRow items={trustPrinciples} className="trust-strip__stats" />
        </div>
      </div>
    </Section>
  );
}
