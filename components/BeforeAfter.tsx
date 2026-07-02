import type { CaseMetric } from "@/data/types";
import { cn } from "@/lib/utils";

function format(metric: CaseMetric, value: number) {
  if (metric.unit === "€") return `€${value.toLocaleString("en-US")}`;
  if (metric.unit === "%") return `${value}%`;
  return `${value} ${metric.unit}`;
}

function delta(before: number, after: number) {
  if (before === 0) return 0;
  return Math.round(((after - before) / before) * 100);
}

/**
 * «До / после» в документальном виде: строки со значениями и разделителями,
 * без таблиц-дашбордов и графиков.
 */
export function BeforeAfter({
  metrics,
  className,
}: {
  metrics: CaseMetric[];
  className?: string;
}) {
  return (
    <dl className={cn("border-t border-line", className)}>
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-4"
        >
          <dt className="text-[15px] text-muted">{metric.label}</dt>
          <dd className="flex items-baseline gap-4">
            <span className="data text-[15px] text-graphite">
              {format(metric, metric.before)} → {format(metric, metric.after)}
            </span>
            <span className="data w-14 text-right text-[15px] font-medium text-accent">
              +{delta(metric.before, metric.after)}%
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
