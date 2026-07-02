import Link from "next/link";
import type { Asset } from "@/data/types";
import { formatRub } from "@/lib/utils";

/**
 * Строка портфеля в документальном стиле: название и загрузка в одну линию,
 * под ней — нейтральный статус (район · ADR). Без карточек и колонок-таблиц.
 */
export function ObjectRow({ asset }: { asset: Asset }) {
  return (
    <Link
      href={`/objects/${asset.id}`}
      className="group block border-t border-line py-7 sm:py-8"
    >
      <div className="flex items-baseline justify-between gap-6">
        <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite transition-colors duration-200 group-hover:text-accent sm:text-[1.7rem]">
          {asset.name}
        </h3>
        <span className="shrink-0 text-lg tabular-nums text-graphite sm:text-xl">
          {asset.kpi.occupancy}%{" "}
          <span className="text-sm text-faint">загрузка</span>
        </span>
      </div>
      <p className="mt-2 text-[15px] text-muted">
        {asset.district} · ADR {formatRub(asset.kpi.adr)} · {asset.status}
      </p>
    </Link>
  );
}
