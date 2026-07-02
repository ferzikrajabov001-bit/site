import { performanceLines, performanceIndex } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function PerformanceEngine() {
  return (
    <Layer index="04" label="Performance Engine">
      <dl>
        {performanceLines.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <div className="flex flex-col gap-1 border-t border-line py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <dt className="order-2 text-lg text-muted sm:pt-1">{item.label}</dt>
              <dd className="data order-1 text-3xl font-normal tracking-tight text-graphite sm:text-[2.5rem]">
                {item.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      <Reveal>
        <div className="mt-10 flex flex-col gap-px overflow-hidden border-t border-line sm:flex-row sm:gap-8 sm:border-t-0">
          {performanceIndex.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-t border-line py-4 sm:flex-1"
            >
              <span className="sys-label">{item.label}</span>
              <span className="font-mono text-[15px] font-medium uppercase tracking-wide text-accent">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </Layer>
  );
}
