import { contextParagraphs } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Контекст компании — не «блок», а страница текста: крупное редакционное
 * утверждение с боковой подписью раздела.
 */
export function Context() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Инвестиционный контекст
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <div className="max-w-3xl space-y-8">
              {contextParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="font-serif text-2xl font-normal leading-[1.4] tracking-tight text-graphite sm:text-3xl md:text-[2.2rem] md:leading-[1.4]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
