import { processSteps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceStepper() {
  return (
    <Section className="pt-0">
      <SectionHeading
        eyebrow="Как мы работаем"
        title="Структурированный процесс в пять шагов"
        description="Каждый объект проходит одну и ту же выверенную модель онбординга — снижая риски перехода и ускоряя выход на стабильные показатели."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, i) => (
          <Reveal key={step.id} delay={Math.min(i, 3) * 0.05} className="h-full">
            <div className="relative flex h-full flex-col border border-hairline bg-white p-6">
              <span className="font-display text-3xl font-semibold tracking-tight text-accent/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
