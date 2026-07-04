import { metrics } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/utils";

export function Metrics({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 sm:py-20", className)}>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal
            key={metric.id}
            delay={i * 0.08}
            className="bg-white p-7 sm:p-9"
          >
            <p className="font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals}
              />
            </p>
            <p className="mt-3 text-sm font-medium text-ink-900/90">
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
