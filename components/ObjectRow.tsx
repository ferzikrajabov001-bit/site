import Link from "next/link";
import type { ManagedObject } from "@/data/types";
import { siteConfig } from "@/lib/site";
import { formatRub } from "@/lib/utils";

/**
 * Строка реестра портфеля: название и город слева, загрузка справа,
 * под ней — нейтральный статус (район / ADR). Без карточек, колонок-таблиц
 * и «стрелочных» hover-эффектов — только тонкая линия и смена цвета названия.
 */
export function ObjectRow({ object }: { object: ManagedObject }) {
  return (
    <Link
      href={`/objects/${object.id}`}
      className="group block border-t border-line py-7 sm:py-8"
    >
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite transition-colors duration-200 group-hover:text-accent sm:text-[1.7rem]">
          {object.name}
          <span className="text-muted"> — {siteConfig.contact.city}</span>
        </h3>
        <span className="shrink-0 text-lg tabular-nums text-graphite sm:text-xl">
          {object.kpi.occupancy}%
        </span>
      </div>
      <p className="mt-2 text-[15px] text-muted">
        {object.district} · ADR {formatRub(object.kpi.adr)} · {object.status}
      </p>
    </Link>
  );
}
