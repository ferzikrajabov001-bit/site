"use client";

import { useMemo, useState } from "react";
import type { Hotel } from "@/data/types";
import { HotelRow } from "@/components/HotelRow";
import { cn } from "@/lib/utils";

/**
 * Filterable hotels explorer. Filters are derived from the data so new
 * segments/statuses scale automatically as the portfolio grows.
 */
export function HotelsExplorer({ hotels }: { hotels: Hotel[] }) {
  const segments = useMemo(() => {
    const unique = Array.from(new Set(hotels.map((h) => h.segment)));
    return ["Все", ...unique];
  }, [hotels]);

  const [active, setActive] = useState<string>("Все");

  const filtered = useMemo(
    () =>
      active === "Все"
        ? hotels
        : hotels.filter((hotel) => hotel.segment === active),
    [active, hotels],
  );

  const [first, ...others] = filtered;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Фильтр отелей по сегменту">
        {segments.map((segment) => {
          const isActive = segment === active;
          return (
            <button
              key={segment}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(segment)}
              className={cn(
                "rounded-sm border px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "border-accent/40 bg-accent/[0.08] text-accent"
                  : "border-hairline bg-white text-muted hover:border-ink-900/25 hover:text-ink-900",
              )}
            >
              {segment}
            </button>
          );
        })}
      </div>

      <div className="mt-10">
        {first ? <HotelRow key={first.id} hotel={first} index={0} featured /> : null}
        {others.map((hotel, i) => (
          <HotelRow key={hotel.id} hotel={hotel} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
