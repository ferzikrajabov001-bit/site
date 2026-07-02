import type { CaseMetric } from "@/data/types";
import { cn } from "@/lib/utils";

function format(metric: CaseMetric, value: number) {
  if (metric.unit === "₽") return `${value.toLocaleString("ru-RU")} ₽`;
  if (metric.unit === "%") return `${value}%`;
  return `${value} ${metric.unit}`;
}

function delta(before: number, after: number) {
  if (before === 0) return 0;
  return Math.round(((after - before) / before) * 100);
}

/**
 * Числовое представление «до / после» в духе отчёта: без прогресс-баров и
 * ярких «зелёных» индикаторов, только аккуратные табличные значения.
 */
export function BeforeAfter({
  metrics,
  className,
}: {
  metrics: CaseMetric[];
  className?: string;
}) {
  return (
    <div className={cn("border-t border-line", className)}>
      <div className="hidden grid-cols-12 gap-4 py-3 text-xs uppercase tracking-[0.12em] text-faint sm:grid">
        <span className="col-span-4">Показатель</span>
        <span className="col-span-3 text-right">Было</span>
        <span className="col-span-3 text-right">Стало</span>
        <span className="col-span-2 text-right">Изменение</span>
      </div>
      {metrics.map((metric) => {
        const d = delta(metric.before, metric.after);
        return (
          <div
            key={metric.label}
            className="grid grid-cols-2 gap-2 border-t border-line py-4 sm:grid-cols-12 sm:gap-4 sm:py-5"
          >
            <span className="text-[15px] font-medium text-graphite sm:col-span-4">
              {metric.label}
            </span>
            <span className="text-sm tabular-nums text-muted sm:col-span-3 sm:text-right sm:text-[15px]">
              <span className="text-faint sm:hidden">было </span>
              {format(metric, metric.before)}
            </span>
            <span className="text-sm tabular-nums text-graphite sm:col-span-3 sm:text-right sm:text-[15px]">
              <span className="text-faint sm:hidden">стало </span>
              {format(metric, metric.after)}
            </span>
            <span className="col-span-2 text-sm font-medium tabular-nums text-accent sm:text-right sm:text-[15px]">
              +{d}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
