import { objects } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TextLink } from "@/components/Button";
import { ObjectRow } from "@/components/ObjectRow";

export function Objects() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="04">Объекты</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-lg font-serif text-3xl font-normal leading-tight tracking-tight text-graphite sm:text-[2.4rem]">
                Пять объектов под управлением в Санкт-Петербурге
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <TextLink href="/objects">Все объекты</TextLink>
          </Reveal>
        </div>

        <div className="mt-14 border-b border-line">
          {objects.map((object, i) => (
            <ObjectRow key={object.id} object={object} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
