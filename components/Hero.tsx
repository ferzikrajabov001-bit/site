import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                <span className="h-px w-6 bg-accent" />
                Управляющая компания отелей · Санкт-Петербург
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="font-display mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                Hotel Management{" "}
                <span className="accent-gradient-text">Solutions</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                Управляющая компания полного цикла — повышаем прибыльность и
                операционную эффективность гостиничных активов.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Передать отель в управление
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Получить аудит эффективности
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-3 divide-x divide-hairline border-y border-hairline">
                <div className="py-4 pr-4">
                  <dt className="text-xs uppercase tracking-[0.1em] text-muted">
                    Отелей
                  </dt>
                  <dd className="font-display mt-1 text-2xl font-semibold text-ink-900">
                    6
                  </dd>
                </div>
                <div className="py-4 px-4">
                  <dt className="text-xs uppercase tracking-[0.1em] text-muted">
                    Номеров
                  </dt>
                  <dd className="font-display mt-1 text-2xl font-semibold text-ink-900">
                    350+
                  </dd>
                </div>
                <div className="py-4 pl-4">
                  <dt className="text-xs uppercase tracking-[0.1em] text-muted">
                    Рост выручки
                  </dt>
                  <dd className="font-display mt-1 text-2xl font-semibold text-ink-900">
                    +28%
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="relative lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
