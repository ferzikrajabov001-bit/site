import { valueProps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/icons";

export function WhyHMS() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-accent opacity-60" />
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Why HMS"
            title="An operating partner built for asset performance"
            description="We combine institutional discipline with hands-on hospitality expertise — so owners get predictable performance and full transparency."
          />
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="lg">
              About our approach
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProps.map((value, i) => (
            <Reveal key={value.id} delay={(i % 2) * 0.08}>
              <GlassCard className="h-full p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-soft">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
