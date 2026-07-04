import Link from "next/link";
import type { Hotel } from "@/data/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { MapPin, ArrowUpRight } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const statusTone = {
  "Under Management": "accent",
  Stabilized: "success",
  "Launch Phase": "warning",
} as const;

/**
 * Deterministic gradient per hotel so cards stay visually distinct without
 * bundling image assets. Ready to be swapped for real photography later.
 */
const gradients = [
  "from-[#123D2C] via-[#1F6F52] to-[#17130F]",
  "from-[#98572D] via-[#C97C4A] to-[#1F1A15]",
  "from-[#8F7238] via-[#C6A15B] to-[#17130F]",
  "from-[#123D2C] via-[#4FA382] to-[#1F1A15]",
  "from-[#5C3A22] via-[#C97C4A] to-[#17130F]",
  "from-[#2D4A3C] via-[#1F6F52] to-[#1F1A15]",
];

export function HotelCard({ hotel, index = 0 }: { hotel: Hotel; index?: number }) {
  const gradient = gradients[index % gradients.length];

  return (
    <GlassCard interactive as="article" className="group h-full">
      <Link href={`/hotels/${hotel.id}`} className="flex h-full flex-col">
        <div className="relative h-44 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
              gradient,
            )}
          />
          <div className="absolute inset-0 bg-grid-faint [background-size:32px_32px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
          <div className="absolute left-4 top-4">
            <Badge tone={statusTone[hotel.status]}>{hotel.status}</Badge>
          </div>
          <div className="absolute bottom-4 left-4">
            <p className="text-xs uppercase tracking-[0.14em] text-white/70">
              {hotel.category}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="flex items-start justify-between gap-2 text-lg font-semibold text-white">
            {hotel.name}
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent-soft" />
            {hotel.district}, {hotel.location}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {hotel.summary}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <div>
              <p className="text-xs text-muted">Occupancy</p>
              <p className="text-base font-semibold text-white">
                {hotel.kpi.occupancy}%
              </p>
            </div>
            <div>
              <p className="text-xs text-muted">Rooms</p>
              <p className="text-base font-semibold text-white">
                {hotel.kpi.rooms}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </GlassCard>
  );
}
