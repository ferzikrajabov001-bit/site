import { metrics } from "@/data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { cn } from "@/lib/utils";

export function Metrics({ className }: { className?: string }) {
  const [lead, ...rest] = metrics;

  return (
    <Section className={cn("border-t border-hairline py-16 sm:py-20", className)}>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[0.62fr_0.38fr]">
        <Reveal>
          <p className="font-display text-7xl font-semibold leading-none tracking-tight text-accent sm:text-8xl md:text-9xl">
            {lead.display ?? (
              <Counter
                value={lead.value}
                prefix={lead.prefix}
                suffix={lead.suffix}
                decimals={lead.decimals}
              />
            )}
          </p>
          <p className="mt-5 max-w-xs text-base font-medium text-ink-900">
            {lead.label}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {lead.description}
          </p>
        </Reveal>

        <div className="flex flex-col justify-end gap-0 lg:pt-6">
          {rest.map((metric, i) => (
            <Reveal
              key={metric.id}
              delay={0.1 + i * 0.08}
              className={cn(
                "border-t border-hairline py-5",
                i === rest.length - 1 && "border-b",
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm font-medium text-ink-900">
                  {metric.label}
                </p>
                <p className="font-display shrink-0 text-2xl font-semibold text-accent">
                  {metric.display ?? (
                    <Counter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                    />
                  )}
                </p>
              </div>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted">
                {metric.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
