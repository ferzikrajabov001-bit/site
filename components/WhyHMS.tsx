import { valueProps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function WhyHMS() {
  return (
    <Section className="relative overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow="Почему HMS"
            title="Операционный партнёр для роста стоимости актива"
            description="Мы сочетаем институциональную дисциплину с практической гостиничной экспертизой — владельцы получают предсказуемые показатели и полную прозрачность."
          />
          <div className="mt-8">
            <Button href="/about" variant="secondary" size="lg">
              О нашем подходе
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueProps.map((value, i) => {
            const warm = i % 2 === 1;
            return (
            <Reveal key={value.id} delay={(i % 2) * 0.08}>
              <GlassCard className="h-full p-6">
                <div
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-xl border",
                    warm
                      ? "border-brass/30 bg-brass/[0.08] text-brass-deep"
                      : "border-accent/25 bg-accent/[0.06] text-accent",
                  )}
                >
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </GlassCard>
            </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
