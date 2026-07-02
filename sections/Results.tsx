import { caseStudies } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TextLink } from "@/components/Button";
import { BeforeAfter } from "@/components/BeforeAfter";

export function Results() {
  const example = caseStudies[0];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel index="05">Результаты</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-sm font-serif text-3xl font-normal leading-tight tracking-tight text-graphite sm:text-[2.4rem]">
                Что меняется под управлением
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                Рост загрузки, рост доходности и стабильная операционная модель.
                Ниже — пример по одному из объектов за первый год работы.
              </p>
              <div className="mt-6">
                <TextLink href="/cases">Смотреть кейсы</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <p className="mb-6 text-sm text-muted">
                {example.object} · {example.district} · {example.period}
              </p>
              <BeforeAfter metrics={example.metrics} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
