import type { Metadata } from "next";
import { companyPrinciples, companyStory, teamAreas } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "HMS — управляющая компания гостиничного бизнеса в Санкт-Петербурге. История, подход к управлению и команда по направлениям.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="О компании"
        title="Принимаем гостиницы в управление и отвечаем за результат"
        intro="HMS — управляющая компания гостиничного бизнеса. Работаем в Санкт-Петербурге, под управлением пять объектов."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <SectionLabel>История</SectionLabel>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <div className="max-w-2xl space-y-6">
                {companyStory.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="text-lg leading-relaxed text-graphite first:text-[1.35rem] first:leading-relaxed">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-dim py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel>Подход</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-sm font-serif text-2xl font-normal leading-snug tracking-tight text-graphite sm:text-[1.9rem]">
                  Мы берём объект в управление и работаем с показателями, а не с
                  рекомендациями.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {companyPrinciples.map((principle, i) => (
                  <Reveal key={principle.id} delay={(i % 2) * 0.06}>
                    <div className="border-t border-line pt-5">
                      <h3 className="text-lg font-medium tracking-tight text-graphite">
                        {principle.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">
                        {principle.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionLabel>Команда</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 max-w-sm font-serif text-3xl font-normal leading-tight tracking-tight text-graphite sm:text-[2.2rem]">
                  Команда по направлениям
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                  Работа объекта распределена между профильными службами. За
                  каждым направлением закреплены специалисты с опытом в
                  гостиничном бизнесе.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="border-t border-line">
                {teamAreas.map((area, i) => (
                  <Reveal
                    key={area.id}
                    delay={i * 0.05}
                    className="grid gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-6"
                  >
                    <h3 className="text-xl font-medium tracking-tight text-graphite sm:col-span-5">
                      {area.role}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-muted sm:col-span-7">
                      {area.description}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
