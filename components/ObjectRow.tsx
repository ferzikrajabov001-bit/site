import Link from "next/link";
import type { ManagedObject } from "@/data/types";
import { siteConfig } from "@/lib/site";
import { formatRub } from "@/lib/utils";

/**
 * Строка портфеля в документальном стиле: название и город, под ним —
 * нейтральный статус (загрузка / ADR). Без колонок, стрелок и «карточной»
 * подсветки — только тонкий разделитель и смена цвета названия.
 */
export function ObjectRow({ object }: { object: ManagedObject }) {
  return (
    <Link
      href={`/objects/${object.id}`}
      className="group block border-t border-line py-7 sm:py-8"
    >
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite transition-colors duration-200 group-hover:text-accent sm:text-[1.7rem]">
          {object.name}
          <span className="text-muted"> — {siteConfig.contact.city}</span>
        </h3>
        <p className="shrink-0 text-sm text-faint">{object.category}</p>
      </div>
      <p className="mt-2 text-[15px] text-muted">
        {object.district} · Загрузка {object.kpi.occupancy}% · ADR{" "}
        {formatRub(object.kpi.adr)} · {object.status}
      </p>
    </Link>
  );
}
