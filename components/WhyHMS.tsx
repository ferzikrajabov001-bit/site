import { valueProps } from "@/data";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/icons";

export function WhyHMS() {
  return (
    <Section className="border-t border-hairline bg-paper-alt">
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

        <div className="border-t border-ink-900/10">
          {valueProps.map((value, i) => (
            <Reveal key={value.id} delay={Math.min(i, 3) * 0.05}>
              <div className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-ink-900/10 py-6">
                <span className="font-display text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
