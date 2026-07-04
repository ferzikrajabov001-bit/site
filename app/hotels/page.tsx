import type { Metadata } from "next";
import { hotels } from "@/data";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui/Section";
import { HotelsExplorer } from "@/components/HotelsExplorer";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Отели",
  description:
    "Портфель из шести объектов в Санкт-Петербурге под управлением HMS: бизнес-сегмент, бутик, дизайн-лофт и премиальное наследие.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Портфель"
        title="Отели в управлении"
        description="Диверсифицированный портфель из шести объектов в Санкт-Петербурге, каждый под единой системой управления HMS. Отфильтруйте по сегменту, чтобы изучить каждый актив."
      />

      <Section className="pt-0">
        <HotelsExplorer hotels={hotels} />
      </Section>

      <CTA
        title="Передайте свой отель в управление"
        description="Присоединяйтесь к портфелю, построенному на результат. Запишитесь на консультацию, чтобы обсудить онбординг вашего объекта."
        primaryLabel="Передать отель в управление"
      />
    </>
  );
}
