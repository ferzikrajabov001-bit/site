import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="pt-36 pb-16 sm:pt-44 sm:pb-24">
      <Container>
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted">
            <span className="h-px w-8 bg-graphite/30" aria-hidden />
            {siteConfig.contact.city} · Управление гостиницами
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-8 max-w-[16ch] text-balance font-serif text-[2.6rem] font-normal leading-[1.06] tracking-tight text-graphite sm:text-6xl md:text-[4.2rem]">
            Управляющая компания гостиничного бизнеса
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                HMS управляет гостиницами в Санкт-Петербурге. Мы отвечаем за
                операционную эффективность, продажи и финансовый результат
                объектов.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contacts" variant="primary" size="lg">
                  Передать объект в управление
                </Button>
                <Button href="/contacts" variant="secondary" size="lg">
                  Обсудить сотрудничество
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
