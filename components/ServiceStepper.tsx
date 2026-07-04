import { processSteps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export function ServiceStepper() {
  return (
    <Section className="pt-0">
      <SectionHeading
        eyebrow="Как мы работаем"
        title="Структурированный процесс в пять шагов"
        description="Каждый объект проходит одну и ту же выверенную модель онбординга — снижая риски перехода и ускоряя выход на стабильные показатели."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <Reveal key={step.id} delay={i * 0.07} className="h-full">
            <div className="relative flex h-full flex-col rounded-2xl border border-hairline bg-white p-6">
              <span className="font-display text-3xl font-semibold tracking-tight text-accent/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
              {i < processSteps.length - 1 ? (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-ink-900/15 lg:block" />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
