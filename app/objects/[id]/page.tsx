import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assets, getAssetById, getAssetIds } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ObjectRow } from "@/components/ObjectRow";
import { CTA } from "@/sections/CTA";
import { formatRub } from "@/lib/utils";

export function generateStaticParams() {
  return getAssetIds().map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const asset = getAssetById(params.id);
  if (!asset) return { title: "Объект не найден" };
  return {
    title: asset.name,
    description: `${asset.name} — ${asset.segment}, ${asset.district}, ${asset.location}. ${asset.summary}`,
    alternates: { canonical: `/objects/${asset.id}` },
  };
}

export default function AssetPage({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);
  if (!asset) notFound();

  const facts = [
    { label: "Район", value: asset.district },
    { label: "Сегмент", value: asset.segment },
    { label: "Номерной фонд", value: `${asset.rooms}` },
    { label: "Под управлением с", value: `${asset.managedSince}` },
    { label: "Загрузка", value: `${asset.kpi.occupancy}%` },
    { label: "ADR", value: formatRub(asset.kpi.adr) },
    { label: "RevPAR", value: formatRub(asset.kpi.revpar) },
    { label: "Статус", value: asset.status },
  ];

  const others = assets.filter((item) => item.id !== asset.id);

  return (
    <>
      <header className="border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
        <Container>
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/objects" className="transition-colors hover:text-graphite">
                Портфель
              </Link>
              <span className="text-faint">/</span>
              <span className="text-graphite">{asset.name}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-10 sys-label">
              {asset.district} · {asset.segment}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-normal leading-[1.08] tracking-tight text-graphite sm:text-5xl md:text-[3.4rem]">
              {asset.name}
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
                  {asset.summary}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
                  {asset.description}
                </p>
              </Reveal>

              <div className="mt-10 border-t border-line">
                {asset.highlights.map((highlight, i) => (
                  <Reveal
                    key={highlight}
                    delay={i * 0.04}
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

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <p className="mb-8 sys-label">Другие объекты</p>
          <div className="border-b border-line">
            {others.map((item) => (
              <ObjectRow key={item.id} asset={item} />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        text="Хотите оценить свой объект? Проанализируем операционную модель и предложим формат управления."
        buttonLabel="Обсудить объект"
      />
    </>
  );
}
