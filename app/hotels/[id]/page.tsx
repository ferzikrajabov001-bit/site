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
import { statusLabels, statusTone } from "@/lib/labels";

export function generateStaticParams() {
  return getHotelIds().map((id) => ({ id }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const hotel = getHotelById(params.id);
  if (!hotel) return { title: "Отель не найден" };
  return {
    title: hotel.name,
    description: `${hotel.name} — ${hotel.category} в районе ${hotel.district}, ${hotel.location}. ${hotel.summary}`,
    alternates: { canonical: `/hotels/${hotel.id}` },
    openGraph: {
      title: `${hotel.name} — ${hotel.category}`,
      description: hotel.summary,
    },
  };
}

export default function HotelDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const hotel = getHotelById(params.id);
  if (!hotel) notFound();

  const kpis = [
    { label: "Загрузка", value: `${hotel.kpi.occupancy}%` },
    { label: "Номеров", value: `${hotel.kpi.rooms}` },
    { label: "ADR", value: `₽${hotel.kpi.adr.toLocaleString("ru-RU")}` },
    { label: "RevPAR", value: `₽${hotel.kpi.revpar.toLocaleString("ru-RU")}` },
    { label: "Рейтинг гостей", value: `${hotel.kpi.rating.toFixed(1)} / 5` },
    { label: "В управлении с", value: `${hotel.yearOnboarded}` },
  ];

  const related = hotels.filter((h) => h.id !== hotel.id).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-16">
        <AmbientBackground />
        <Container>
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/hotels" className="transition-colors hover:text-ink-900">
                Отели
              </Link>
              <span className="text-ink-900/25">/</span>
              <span className="text-ink-900/70">{hotel.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={statusTone[hotel.status]}>{statusLabels[hotel.status]}</Badge>
                  <Badge tone="neutral">{hotel.category}</Badge>
                  <Badge tone="neutral">{hotel.segment}</Badge>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display mt-5 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                  {hotel.name}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 flex items-center gap-2 text-muted">
                  <MapPin className="h-4 w-4 text-accent" />
                  {hotel.district}, {hotel.location}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-sm border border-hairline"
                aria-hidden
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getHotelVisual(hotel.id).gradient}`}
                />
                <div className="absolute inset-0 bg-grid-faint [background-size:36px_36px] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
                <p className="text-2xl font-semibold text-ink-900">{kpi.value}</p>
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
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Обзор объекта
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-900/90">
                {hotel.description}
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Управленческие достижения
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {hotel.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-900/90"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Инфраструктура
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {hotel.amenities.map((amenity) => (
                  <Badge key={amenity} tone="neutral">
                    {amenity}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 rounded-sm border border-accent/20 bg-accent/[0.05] p-6">
                <p className="text-sm font-medium text-ink-900">
                  Хотите таких же результатов?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Запишитесь на консультацию, чтобы обсудить передачу вашего актива
                  в управление HMS.
                </p>
                <Button href="/contact" variant="primary" className="mt-5 w-full">
                  Записаться на консультацию
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            Другие объекты портфеля
          </h2>
          <Button href="/hotels" variant="ghost">
            Все отели
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
