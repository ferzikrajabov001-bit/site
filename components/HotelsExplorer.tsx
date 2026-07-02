"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Hotel } from "@/data/types";
import { HotelCard } from "@/components/HotelCard";
import { cn } from "@/lib/utils";

/**
 * Client-side hotels explorer with a filter-ready architecture. Filters are
 * derived from the data so new segments/statuses scale automatically as the
 * portfolio grows.
 */
export function HotelsExplorer({ hotels }: { hotels: Hotel[] }) {
  const segments = useMemo(() => {
    const unique = Array.from(new Set(hotels.map((h) => h.segment)));
    return ["All", ...unique];
  }, [hotels]);

  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? hotels
        : hotels.filter((hotel) => hotel.segment === active),
    [active, hotels],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter hotels by segment">
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
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "border-accent/50 bg-accent/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-muted hover:border-white/25 hover:text-white",
              )}
            >
              {segment}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((hotel, i) => (
            <motion.div
              key={hotel.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <HotelCard hotel={hotel} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
