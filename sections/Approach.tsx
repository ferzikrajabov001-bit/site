import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Approach() {
  return (
    <section className="border-y border-line bg-paper-dim py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionLabel index="03">Подход</SectionLabel>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <p className="max-w-3xl font-serif text-3xl font-normal leading-[1.24] tracking-tight text-graphite sm:text-4xl md:text-[2.9rem]">
                <span className="text-muted">
                  Мы не работаем как консалтинговая компания.
                </span>{" "}
                Мы берём объект в управление и отвечаем за его результат.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
