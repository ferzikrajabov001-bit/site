import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHotelById, getHotelIds, hotels } from "@/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { HotelCard } from "@/components/HotelCard";
import { ArrowRight, Check, MapPin } from "@/components/ui/icons";
import { getHotelVisual } from "@/lib/hotelVisuals";

export function generateStaticParams() {
  return getHotelIds().map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const hotel = getHotelById(params.id);
  if (!hotel) return { title: "Hotel not found" };
  return {
    title: hotel.name,
    description: `${hotel.name} — ${hotel.category} in ${hotel.district}, ${hotel.location}. ${hotel.summary}`,
    alternates: { canonical: `/hotels/${hotel.id}` },
    openGraph: {
      title: `${hotel.name} — ${hotel.category}`,
      description: hotel.summary,
    },
  };
}

const statusTone = {
  "Under Management": "accent",
  Stabilized: "success",
  "Launch Phase": "warning",
} as const;

export default function HotelDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hotel = getHotelById(params.id);
  if (!hotel) notFound();

  const kpis = [
    { label: "Occupancy", value: `${hotel.kpi.occupancy}%` },
    { label: "Rooms", value: `${hotel.kpi.rooms}` },
    { label: "ADR", value: `₽${hotel.kpi.adr.toLocaleString("en-US")}` },
    { label: "RevPAR", value: `₽${hotel.kpi.revpar.toLocaleString("en-US")}` },
    { label: "Guest rating", value: `${hotel.kpi.rating.toFixed(1)} / 5` },
    { label: "Onboarded", value: `${hotel.yearOnboarded}` },
  ];

  const related = hotels.filter((h) => h.id !== hotel.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-16">
        <AmbientBackground />
        <Container>
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/hotels" className="transition-colors hover:text-white">
                Hotels
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-white/80">{hotel.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={statusTone[hotel.status]}>{hotel.status}</Badge>
                  <Badge tone="neutral">{hotel.category}</Badge>
                  <Badge tone="neutral">{hotel.segment}</Badge>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                  {hotel.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 text-accent-soft" />
                  {hotel.district}, {hotel.location}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10"
                aria-hidden
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getHotelVisual(hotel.id).gradient}`}
                />
                <div className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section className="pt-4">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {kpis.map((kpi, i) => (
            <Reveal key={kpi.label} delay={(i % 6) * 0.05}>
              <GlassCard className="h-full p-6 text-center">
                <p className="text-2xl font-semibold text-white">{kpi.value}</p>
                <p className="mt-1.5 text-xs uppercase tracking-[0.12em] text-muted">
                  {kpi.label}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <Reveal>
            <GlassCard className="p-8 sm:p-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-soft">
                Property overview
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/90">
                {hotel.description}
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Management highlights
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {hotel.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                Amenities
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {hotel.amenities.map((amenity) => (
                  <Badge key={amenity} tone="neutral">
                    {amenity}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.06] p-6">
                <p className="text-sm font-medium text-white">
                  Interested in results like these?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Book a consultation to discuss transferring your asset under HMS
                  management.
                </p>
                <Button href="/contact" variant="primary" className="mt-5 w-full">
                  Book consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            More from the portfolio
          </h2>
          <Button href="/hotels" variant="ghost">
            All hotels
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08} className="h-full">
              <HotelCard hotel={item} index={i} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
