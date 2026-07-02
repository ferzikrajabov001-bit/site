import { metrics } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/utils";

export function Metrics({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 sm:py-20", className)}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.id}
            delay={i * 0.08}
            className="bg-ink-900/60 p-7 backdrop-blur-xl sm:p-9"
          >
            <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
              />
            </p>
            <p className="mt-3 text-sm font-medium text-white/90">
              {metric.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {metric.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
