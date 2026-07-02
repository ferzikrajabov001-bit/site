import Link from "next/link";
import type { Asset } from "@/data/types";

/**
 * Строка портфеля: каждая запись несёт отдельный смысл — название и одна
 * содержательная строка о состоянии объекта. Без таблиц, колонок и карточек.
 */
export function ObjectRow({ asset }: { asset: Asset }) {
  return (
    <Link
      href={`/objects/${asset.id}`}
      className="group block border-t border-line py-9 sm:py-11"
    >
      <h3 className="font-serif text-[1.9rem] font-normal leading-none tracking-tight text-graphite transition-colors duration-200 group-hover:text-accent sm:text-[2.4rem]">
        {asset.name}
      </h3>
      <p className="mt-4 text-[15px] text-muted sm:text-base">
        <span className="tabular-nums text-graphite">{asset.kpi.occupancy}%</span>{" "}
        загрузки — {asset.performanceNote}
      </p>
    </Link>
  );
}
