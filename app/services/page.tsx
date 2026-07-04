import type { Metadata } from "next";
import { services } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { CTA } from "@/components/CTA";
import { ServiceStepper } from "@/components/ServiceStepper";
import { ServiceGlyph, Check } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Управление отелем полного цикла: операционное управление, доходный менеджмент, продажи и OTA, маркетинговая стратегия, финансовый контроль и запуск отеля.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Услуги"
        title="Управление отелем полного цикла, от и до"
        description="Шесть интегрированных направлений на единой операционной платформе — всё, что нужно гостиничному активу для роста показателей, от ежедневных операций до вывода на рынок."
      />

      <ServiceStepper />

      <Section className="pt-0">
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 2) * 0.06}>
              <GlassCard
                id={service.slug}
                className="scroll-mt-28 p-8 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr_1fr] lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-accent/20 bg-accent/[0.06] text-accent">
                    <ServiceGlyph name={service.icon} className="h-7 w-7" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-ink-900 sm:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>

                  <div className="rounded-sm border border-hairline bg-paper-alt p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Ключевые результаты
                    </p>
                    <ul className="mt-4 space-y-3">
                      {service.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink-900/90"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        title="Готовы построить более эффективный отель?"
        description="Расскажите о своём объекте — мы подберём нужное сочетание услуг."
      />
    </>
  );
}
