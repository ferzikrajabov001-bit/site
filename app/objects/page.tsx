import type { Metadata } from "next";
import { assets } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/Container";
import { ObjectRow } from "@/components/ObjectRow";
import { CTA } from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Портфель",
  description:
    "Портфель управляющей компании HMS — пять гостиничных объектов в разных районах Санкт-Петербурга с показателями загрузки и доходности.",
  alternates: { canonical: "/objects" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Портфель объектов"
        title="Объекты под управлением"
        intro="Пять объектов в разных районах Санкт-Петербурга — от бутик-отеля до крупной гостиницы и апартаментов для длительного проживания."
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="border-b border-line">
            {assets.map((asset) => (
              <ObjectRow key={asset.id} asset={asset} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        text="Рассматриваете передачу объекта в управление? Проведём оценку операционной модели и предложим формат работы."
        buttonLabel="Обсудить объект"
      />
    </>
  );
}
