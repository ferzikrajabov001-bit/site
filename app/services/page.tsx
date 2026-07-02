import type { Metadata } from "next";
import { services } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Операционное управление, управление доходностью, продажи, маркетинг, финансовая отчётность и запуск гостиниц. Полный цикл управления объектом.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Услуги"
        title="Что мы берём на себя"
        intro="Полный цикл управления объектом: одна команда отвечает за операции, доходность, продажи, маркетинг и финансы."
      />

      <section className="py-12 sm:py-16">
        <Container>
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={(i % 3) * 0.05}
              className="grid gap-6 border-t border-line py-12 sm:py-14 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="index-num pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite sm:text-[1.9rem]">
                    {service.title}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-lg leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTA
        text="Расскажите о вашем объекте — предложим подходящую модель управления."
        buttonLabel="Обсудить сотрудничество"
      />
    </>
  );
}
