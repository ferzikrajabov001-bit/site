import type { Metadata } from "next";
import { objects } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { ObjectRow } from "@/components/ObjectRow";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Объекты",
  description:
    "Портфель управляющей компании HMS — пять гостиниц и апарт-отелей в разных районах Санкт-Петербурга с показателями загрузки, ADR и RevPAR.",
  alternates: { canonical: "/objects" },
};

export default function ObjectsPage() {
  return (
    <>
      <PageHeader
        label="Объекты"
        title="Портфель под управлением"
        intro="Пять объектов в разных районах Санкт-Петербурга — от бутик-отеля до крупной гостиницы и апартаментов для длительного проживания."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="border-b border-line">
            {objects.map((object) => (
              <ObjectRow key={object.id} object={object} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        text="Рассматриваете передачу объекта в управление? Проведём оценку и предложим модель работы."
        buttonLabel="Передать объект в управление"
      />
    </>
  );
}
