import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getObjectById, getObjectIds, objects } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ObjectRow } from "@/components/ObjectRow";
import { CTA } from "@/sections/CTA";
import { formatRub } from "@/lib/utils";

export function generateStaticParams() {
  return getObjectIds().map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const object = getObjectById(params.id);
  if (!object) return { title: "Объект не найден" };
  return {
    title: object.name,
    description: `${object.name} — ${object.category}, ${object.district}. ${object.summary}`,
    alternates: { canonical: `/objects/${object.id}` },
  };
}

export default function ObjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const object = getObjectById(params.id);
  if (!object) notFound();

  const facts = [
    { label: "Район", value: object.district },
    { label: "Категория", value: object.category },
    { label: "Номерной фонд", value: `${object.rooms}` },
    { label: "Статус", value: object.status },
    { label: "Под управлением с", value: `${object.managedSince}` },
    { label: "Загрузка", value: `${object.kpi.occupancy}%` },
    { label: "ADR", value: formatRub(object.kpi.adr) },
    { label: "RevPAR", value: formatRub(object.kpi.revpar) },
  ];

  const others = objects.filter((item) => item.id !== object.id);

  return (
    <>
      <header className="border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/objects" className="transition-colors hover:text-graphite">
                Объекты
              </Link>
              <span className="text-faint">/</span>
              <span className="text-graphite">{object.name}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-muted">
              {object.district}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-normal leading-[1.08] tracking-tight text-graphite sm:text-5xl md:text-[3.4rem]">
              {object.name}
            </h1>
          </Reveal>
        </Container>
      </header>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="max-w-2xl font-serif text-2xl font-normal leading-[1.4] tracking-tight text-graphite">
                  {object.summary}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                  {object.description}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.08}>
                <dl className="border-t border-line">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-4"
                    >
                      <dt className="text-sm text-muted">{fact.label}</dt>
                      <dd className="text-[15px] font-medium tabular-nums text-graphite">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Другие объекты
          </p>
          <div className="mt-8 border-b border-line">
            {others.map((item) => (
              <ObjectRow key={item.id} object={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        text="Хотите оценить свой объект? Мы проанализируем операционную модель и предложим формат управления."
        buttonLabel="Обсудить управление объектом"
      />
    </>
  );
}
