import Link from "next/link";
import type { ManagedObject } from "@/data/types";
import { ArrowUpRight } from "@/components/icons";
import { formatRub } from "@/lib/utils";

/**
 * Строка объекта в стиле «реестра управляющей компании»: не карточка, а
 * полноширинная запись с показателями по колонкам и тонкой линией сверху.
 */
export function ObjectRow({
  object,
  index,
}: {
  object: ManagedObject;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/objects/${object.id}`}
      className="group block border-t border-line py-8 transition-colors duration-300 ease-editorial hover:bg-graphite/[0.015] sm:py-10"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-baseline gap-3">
            <span className="index-num pt-1">{num}</span>
            <div>
              <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-graphite transition-colors group-hover:text-accent sm:text-[1.7rem]">
                {object.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                {object.district} · {object.category}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            {object.summary}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-faint">
            {object.status} · с {object.managedSince}
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="flex items-start justify-between gap-6">
            <dl className="grid grid-cols-3 gap-x-6 gap-y-1">
              <div>
                <dt className="text-xs text-faint">Загрузка</dt>
                <dd className="mt-1 text-base tabular-nums text-graphite">
                  {object.kpi.occupancy}%
                </dd>
              </div>
              <div>
                <dt className="text-xs text-faint">ADR</dt>
                <dd className="mt-1 text-base tabular-nums text-graphite">
                  {formatRub(object.kpi.adr)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-faint">RevPAR</dt>
                <dd className="mt-1 text-base tabular-nums text-graphite">
                  {formatRub(object.kpi.revpar)}
                </dd>
              </div>
            </dl>
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-faint transition-all duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </div>
        </div>
      </div>
    </Link>
  );
}
