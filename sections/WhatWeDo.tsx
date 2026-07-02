import { services } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { TextLink } from "@/components/Button";

export function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel index="02">Чем мы занимаемся</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-xs font-serif text-3xl font-normal leading-tight tracking-tight text-graphite sm:text-[2.4rem]">
                Полный цикл управления объектом
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
                Одна команда закрывает операции, доходность, продажи, маркетинг и
                финансы объекта.
              </p>
              <div className="mt-6">
                <TextLink href="/services">Подробнее об услугах</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {services.map((service, i) => (
                <Reveal
                  key={service.id}
                  delay={(i % 3) * 0.05}
                  className="group grid gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="flex items-baseline gap-4 sm:col-span-5">
                    <span className="index-num pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-graphite transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">
                    {service.description}
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
