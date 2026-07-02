import { resultsSummary } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/Button";

/**
 * Результаты в формате инвестиционного отчёта: диапазоны и формулировки,
 * без графиков и интерфейсных элементов.
 */
export function Results() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Результаты
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <dl>
              {resultsSummary.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.05}>
                  <div className="flex flex-col gap-1 border-t border-line py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <dt className="order-2 text-lg text-muted sm:order-2 sm:pt-1">
                      {item.label}
                    </dt>
                    <dd className="order-1 font-serif text-3xl font-normal tabular-nums tracking-tight text-graphite sm:order-1 sm:text-[2.6rem]">
                      {item.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <div className="mt-8">
              <Reveal>
                <TextLink href="/cases">Кейсы по объектам</TextLink>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
