import type { Metadata } from "next";
import { companyPrinciples, companyStory, teamAreas } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "HMS — операционная управляющая компания гостиничного бизнеса в Санкт-Петербурге. История, подход к управлению и команда по направлениям.",
  alternates: { canonical: "/about" },
};

function Overline({ children }: { children: React.ReactNode }) {
  return <p className="sys-label">{children}</p>;
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="О компании"
        title="Берём объекты в управление и отвечаем за результат"
        intro="HMS — операционная управляющая компания. Работаем в Санкт-Петербурге, под управлением пять объектов."
      />

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Overline>История</Overline>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <div className="max-w-3xl space-y-8">
                {companyStory.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p
                      className={
                        i === 0
                          ? "font-serif text-2xl font-normal leading-[1.4] tracking-tight text-graphite sm:text-[1.9rem]"
                          : "text-lg leading-relaxed text-muted"
                      }
                    >
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Overline>Подход</Overline>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <dl>
                {companyPrinciples.map((principle, i) => (
                  <Reveal key={principle.id} delay={(i % 3) * 0.04}>
                    <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                      <dt className="font-serif text-xl font-normal tracking-tight text-graphite sm:col-span-5 sm:text-2xl">
                        {principle.title}
                      </dt>
                      <dd className="text-[15px] leading-relaxed text-muted sm:col-span-7 sm:pt-1.5">
                        {principle.description}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal>
                <Overline>Команда</Overline>
              </Reveal>
            </div>
            <div className="lg:col-span-9">
              <dl>
                {teamAreas.map((area, i) => (
                  <Reveal key={area.id} delay={(i % 3) * 0.04}>
                    <div className="grid gap-2 border-t border-line py-8 sm:grid-cols-12 sm:gap-6">
                      <dt className="font-serif text-xl font-normal tracking-tight text-graphite sm:col-span-5 sm:text-2xl">
                        {area.role}
                      </dt>
                      <dd className="text-[15px] leading-relaxed text-muted sm:col-span-7 sm:pt-1.5">
                        {area.description}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
