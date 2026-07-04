import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <AmbientBackground />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-xs font-medium text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
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
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted">
                <div>
                  <span className="text-2xl font-semibold text-ink-900">6</span>
                  <span className="ml-2">отелей в управлении</span>
                </div>
                <span className="hidden h-8 w-px bg-hairline sm:block" />
                <div>
                  <span className="text-2xl font-semibold text-ink-900">350+</span>
                  <span className="ml-2">номеров</span>
                </div>
                <span className="hidden h-8 w-px bg-hairline sm:block" />
                <div>
                  <span className="text-2xl font-semibold text-ink-900">+28%</span>
                  <span className="ml-2">рост выручки</span>
                </div>
              </div>
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
