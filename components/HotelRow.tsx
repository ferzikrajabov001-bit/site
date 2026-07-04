import Link from "next/link";
import type { Hotel } from "@/data/types";
import { ArrowUpRight } from "@/components/ui/icons";
import { getHotelVisual } from "@/lib/hotelVisuals";
import { statusLabels } from "@/lib/labels";
import { cn } from "@/lib/utils";

interface HotelRowProps {
  hotel: Hotel;
  index?: number;
  featured?: boolean;
}

export function HotelRow({ hotel, index = 0, featured = false }: HotelRowProps) {
  const { gradient } = getHotelVisual(hotel.id, index);

  if (featured) {
    return (
      <Link
        href={`/hotels/${hotel.id}`}
        className="group grid gap-6 border-b border-t border-hairline py-8 transition-colors hover:bg-paper-alt sm:grid-cols-[1fr_1.4fr] sm:gap-10 sm:py-10"
      >
        <div className={cn("relative aspect-[16/10] overflow-hidden bg-gradient-to-br", gradient)}>
          <div className="absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-20" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
            {statusLabels[hotel.status]} · {hotel.category}
          </span>
          <h3 className="font-display mt-3 flex items-start justify-between gap-3 text-2xl font-semibold text-ink-900 sm:text-3xl">
            {hotel.name}
            <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
          </h3>
          <p className="mt-2 text-sm text-muted">
            {hotel.district}, {hotel.location}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            {hotel.summary}
          </p>
          <p className="mt-5 text-sm text-ink-900">
            {hotel.kpi.occupancy}% загрузка — {hotel.kpi.rooms} номеров
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/hotels/${hotel.id}`}
      className={cn(
        "group grid grid-cols-1 gap-1.5 border-b border-hairline py-6 transition-colors hover:bg-paper-alt sm:grid-cols-[1.3fr_1.4fr_auto] sm:items-baseline sm:gap-6",
        index % 2 === 1 ? "sm:py-7" : "sm:py-6",
      )}
    >
      <h3 className="flex items-center gap-3 text-lg font-semibold text-ink-900">
        {hotel.name}
        <span className="text-xs font-normal text-muted">{hotel.district}</span>
      </h3>
      <p className="text-sm text-muted">
        {hotel.category} — {hotel.kpi.rooms} номеров — {hotel.kpi.occupancy}% загрузка
      </p>
      <div className="flex items-center gap-2 text-sm text-muted sm:justify-end">
        {statusLabels[hotel.status]}
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
      </div>
    </Link>
  );
}
