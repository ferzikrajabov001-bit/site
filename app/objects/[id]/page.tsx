import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getObjectById, getObjectIds, objects } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
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
  ];

  const kpis = [
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

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {object.district}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-normal leading-[1.08] tracking-tight text-graphite sm:text-5xl md:text-[3.4rem]">
                  {object.name}
                </h1>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.12}>
                <p className="text-pretty leading-relaxed text-muted">
                  {object.summary}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <p className="font-serif text-4xl font-normal tabular-nums tracking-tight text-graphite">
                  {kpi.value}
                </p>
                <p className="mt-2 text-sm text-muted">{kpi.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionLabel>Об объекте</SectionLabel>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                  {object.description}
                </p>
              </Reveal>

              <div className="mt-10 border-t border-line">
                {object.highlights.map((highlight, i) => (
                  <Reveal
                    key={highlight}
                    delay={i * 0.05}
                    className="flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="index-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-graphite">{highlight}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <Reveal delay={0.08}>
                <dl className="border-t border-line">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 border-b border-line py-4"
                    >
                      <dt className="text-sm text-muted">{fact.label}</dt>
                      <dd className="text-[15px] font-medium text-graphite">
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

      <section className="pb-8">
        <Container>
          <Reveal>
            <SectionLabel>Другие объекты</SectionLabel>
          </Reveal>
          <div className="mt-8 border-b border-line">
            {others.map((item, i) => (
              <ObjectRow key={item.id} object={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        text="Хотите такой же результат по своему объекту? Проведём оценку и предложим модель управления."
        buttonLabel="Обсудить проект"
      />
    </>
  );
}
