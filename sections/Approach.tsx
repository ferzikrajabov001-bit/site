import { managementApproach } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Подход к управлению — документальный перечень: только текст и тонкие
 * разделители, без интерфейсных элементов.
 */
export function Approach() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Операционная модель
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <dl>
              {managementApproach.map((item, i) => (
                <Reveal key={item.id} delay={(i % 3) * 0.04}>
                  <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                    <dt className="font-serif text-xl font-normal tracking-tight text-graphite sm:col-span-5 sm:text-2xl">
                      {item.term}
                    </dt>
                    <dd className="text-[15px] leading-relaxed text-muted sm:col-span-7 sm:pt-1.5">
                      {item.note}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
