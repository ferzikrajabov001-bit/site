import { hotels } from "@/data";

const totalRooms = hotels.reduce((sum, h) => sum + h.kpi.rooms, 0);

/**
 * Editorial "portfolio index" plate — real portfolio data presented as a
 * ledger rather than an abstract dashboard mockup.
 */
export function HeroVisual() {
  return (
    <figure className="border border-hairline bg-white">
      <figcaption className="flex items-center justify-between border-b border-hairline px-6 py-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-900">
          Портфель HMS
        </span>
        <span className="text-xs text-muted">2019–2025</span>
      </figcaption>

      <ol>
        {hotels.map((hotel, i) => (
          <li
            key={hotel.id}
            className="flex items-center justify-between gap-4 border-b border-hairline px-6 py-3.5 last:border-b-0"
          >
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="font-display text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="truncate text-sm font-medium text-ink-900">
                {hotel.name}
              </span>
            </div>
            <span className="shrink-0 text-xs text-muted">
              {hotel.category}
            </span>
          </li>
        ))}
      </ol>

      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-xs uppercase tracking-[0.14em] text-muted">
          Всего номеров
        </span>
        <span className="font-display text-lg font-semibold text-ink-900">
          {totalRooms}
        </span>
      </div>
    </figure>
  );
}
