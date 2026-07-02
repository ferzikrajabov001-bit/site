import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assets, getAssetById, getAssetIds } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/Sparkline";
import { PortfolioTable } from "@/components/PortfolioTable";
import { Trend } from "@/components/Trend";
import { CTA } from "@/sections/CTA";
import { formatEur } from "@/lib/utils";

export function generateStaticParams() {
  return getAssetIds().map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const asset = getAssetById(params.id);
  if (!asset) return { title: "Asset not found" };
  return {
    title: asset.name,
    description: `${asset.name} — ${asset.segment}, ${asset.district}, ${asset.location}. Occupancy ${asset.kpi.occupancy}%, ADR ${formatEur(asset.kpi.adr)}, RevPAR ${formatEur(asset.kpi.revpar)}.`,
    alternates: { canonical: `/objects/${asset.id}` },
  };
}

export default function AssetPage({ params }: { params: { id: string } }) {
  const asset = getAssetById(params.id);
  if (!asset) notFound();

  const facts = [
    { label: "District", value: asset.district },
    { label: "Segment", value: asset.segment },
    { label: "Rooms", value: `${asset.rooms}` },
    { label: "Managed since", value: `${asset.managedSince}` },
    { label: "Occupancy", value: `${asset.kpi.occupancy}%` },
    { label: "ADR", value: formatEur(asset.kpi.adr) },
    { label: "RevPAR", value: formatEur(asset.kpi.revpar) },
    { label: "Status", value: asset.status },
  ];

  const series = [
    { label: "Occupancy", unit: "%", data: asset.intelligence.occupancySeries },
    { label: "ADR", unit: "€", data: asset.intelligence.adrSeries },
    { label: "Revenue index", unit: "", data: asset.intelligence.revenueSeries },
  ];

  const risk = [
    { label: "Seasonal risk", value: asset.intelligence.seasonalRisk },
    { label: "Demand volatility", value: asset.intelligence.demandVolatility },
  ];

  const others = assets.filter((item) => item.id !== asset.id);

  return (
    <>
      <header className="border-b border-line pt-36 pb-14 sm:pt-44 sm:pb-16">
        <Container>
          <Reveal>
            <nav className="flex items-center gap-2 font-mono text-[13px] text-muted">
              <Link href="/objects" className="transition-colors hover:text-graphite">
                Portfolio
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
            <div className="mt-4 flex items-baseline gap-4">
              <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-graphite sm:text-5xl md:text-[3.2rem]">
                {asset.name}
              </h1>
              <Trend value={asset.trend} className="text-2xl" />
            </div>
          </Reveal>
        </Container>
      </header>

      <section className="py-16 sm:py-20">
        <Container>
          {/* Key data */}
          <dl className="grid grid-cols-2 gap-x-8 border-t border-line sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-line py-5">
                <dt className="sys-label">{fact.label}</dt>
                <dd className="data mt-2 text-xl text-graphite">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {/* Intelligence — trends */}
          <div className="mt-16 grid gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="sys-label">Asset Intelligence</p>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-10">
                {series.map((s) => (
                  <Reveal key={s.label}>
                    <div className="border-t border-line pt-5">
                      <div className="flex items-baseline justify-between">
                        <span className="sys-label">{s.label} · 12m</span>
                        <span className="data text-sm text-muted">
                          {s.unit === "€"
                            ? `${formatEur(s.data[0])} → ${formatEur(s.data[s.data.length - 1])}`
                            : `${s.data[0]}${s.unit} → ${s.data[s.data.length - 1]}${s.unit}`}
                        </span>
                      </div>
                      <Sparkline
                        data={s.data}
                        className="mt-4 h-20 w-full"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Risk + notes */}
          <div className="mt-16 grid gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="sys-label">Risk & Notes</p>
            </div>
            <div className="lg:col-span-9">
              <div className="border-t border-line">
                {risk.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between gap-4 border-b border-line py-4"
                  >
                    <span className="text-[15px] text-muted">{r.label}</span>
                    <span className="font-mono text-[13px] uppercase tracking-wide text-accent">
                      {r.value}
                    </span>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {asset.intelligence.notes.map((note, i) => (
                  <li
                    key={note}
                    className="flex items-baseline gap-4 text-[15px] leading-relaxed text-graphite"
                  >
                    <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <p className="mb-8 sys-label">Portfolio</p>
          <PortfolioTable assets={others} />
        </Container>
      </section>

      <CTA
        text="Request an operational evaluation of your asset and a proposed management model."
        buttonLabel="Request Asset Evaluation"
      />
    </>
  );
}
