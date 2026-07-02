import type { Metadata } from "next";
import { services } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Чем занимается HMS: управление загрузкой и спросом, revenue management, операционный контроль, финансовая отчётность, управление персоналом и стандартизация сервиса.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Чем мы занимаемся"
        title="Полный операционный цикл управления"
        intro="Одна команда закрывает загрузку, доходность, операции, финансы, персонал и сервис объекта."
      />

      <section className="py-8 sm:py-12">
        <Container>
          {services.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.04}
              className="grid gap-4 border-t border-line py-12 sm:py-14 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="index-num pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite sm:text-[1.9rem]">
                    {item.term}
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="max-w-2xl text-lg leading-relaxed text-muted">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTA
        text="Расскажите о вашем объекте — предложим подходящий формат управления."
        buttonLabel="Обсудить объект"
      />
    </>
  );
}
