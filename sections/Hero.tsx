import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

/**
 * Титульная секция в духе обложки инвестиционного отчёта.
 */
export function Hero() {
  return (
    <section className="pt-40 pb-20 sm:pt-52 sm:pb-28">
      <Container>
        <Reveal>
          <p className="flex items-center gap-3 sys-label">
            <span className="h-px w-8 bg-graphite/30" aria-hidden />
            {siteConfig.contact.city}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 max-w-[16ch] text-balance font-serif text-[2.6rem] font-normal leading-[1.05] tracking-tight text-graphite sm:text-6xl md:text-[4.4rem]">
            Управляющая компания гостиничных активов
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            HMS управляет гостиничными объектами в Санкт-Петербурге и отвечает за
            их операционную эффективность и доходность.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-sm text-faint">5 объектов под управлением</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row">
            <Button href="/contacts" variant="primary" size="lg">
              Обсудить объект
            </Button>
            <Button href="/contacts" variant="secondary" size="lg">
              Получить оценку гостиницы
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
