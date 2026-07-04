import { processSteps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export function ServiceStepper() {
  return (
    <Section className="pt-0">
      <SectionHeading
        eyebrow="How we work"
        title="A structured, five-step engagement"
        description="Every property moves through the same disciplined onboarding model — de-risking the transition and accelerating the path to stabilized performance."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.07} className="h-full">
            <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-3xl font-semibold tracking-tight text-accent-soft/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              {i < processSteps.length - 1 ? (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/20 lg:block" />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
