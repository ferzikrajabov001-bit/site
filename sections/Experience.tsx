import { experience } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export function Experience() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionLabel index="01">Ключевой опыт</SectionLabel>
        </Reveal>

        <div className="mt-12 grid divide-y divide-line border-t border-line md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {experience.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.06}
              className="border-line py-8 md:border-t lg:border-t-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="font-serif text-[1.8rem] font-normal leading-tight tracking-tight text-graphite">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-graphite">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
