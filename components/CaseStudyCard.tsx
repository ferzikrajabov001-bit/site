import type { CaseStudy } from "@/data/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { TrendUp } from "@/components/ui/icons";

function formatValue(value: number, unit: string) {
  if (unit === "₽") return `₽${value.toLocaleString("ru-RU")}`;
  if (unit === "%") return `${value}%`;
  return `${value}${unit}`;
}

function delta(before: number, after: number) {
  if (before === 0) return 0;
  return Math.round(((after - before) / before) * 100);
}

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <GlassCard className="h-full p-7 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="accent">{study.hotel}</Badge>
        <Badge tone="neutral">{study.segment}</Badge>
        <Badge tone="neutral">{study.duration}</Badge>
      </div>

      <p className="mt-5 text-lg font-medium leading-relaxed text-ink-900">
        {study.summary}
      </p>

      <div className="mt-7 space-y-3">
        {study.metrics.map((metric, i) => {
          const pct = delta(metric.before, metric.after);
          const max = Math.max(metric.before, metric.after);
          const beforePct = (metric.before / max) * 100;
          const afterPct = (metric.after / max) * 100;
          return (
            <Reveal
              key={metric.label}
              delay={i * 0.06}
              className="rounded-sm border border-hairline bg-paper p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ink-900">
                  {metric.label}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-700/20 bg-emerald-700/[0.06] px-2 py-0.5 text-xs font-semibold text-emerald-800">
                  <TrendUp className="h-3.5 w-3.5" />+{pct}%
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-12 text-xs text-muted">Было</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-hairline">
                    <div
                      className="h-full rounded-full bg-ink-900/25"
                      style={{ width: `${beforePct}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-xs font-medium text-muted">
                    {formatValue(metric.before, metric.unit)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-12 text-xs text-accent">Стало</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-hairline">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                      style={{ width: `${afterPct}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-xs font-semibold text-ink-900">
                    {formatValue(metric.after, metric.unit)}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </GlassCard>
  );
}
