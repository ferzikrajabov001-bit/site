import { operationalStatement } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

/**
 * Сильное операционное утверждение на тёмном фоне — визуальная пауза и
 * контраст формы после плотного блока портфеля.
 */
export function OperationalStatement() {
  return (
    <section className="bg-graphite py-32 text-paper sm:py-48">
      <Container>
        <div className="max-w-4xl">
          {operationalStatement.map((line, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p
                className={
                  i === 0
                    ? "font-serif text-3xl font-normal leading-[1.22] tracking-tight text-paper sm:text-5xl md:text-[3.4rem] md:leading-[1.15]"
                    : "mt-8 font-serif text-2xl font-normal leading-[1.35] tracking-tight text-paper/60 sm:text-3xl md:text-[2.2rem]"
                }
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
