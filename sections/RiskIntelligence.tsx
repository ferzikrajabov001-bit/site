import { riskFactors } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function RiskIntelligence() {
  return (
    <Layer index="05" label="Risk Intelligence">
      <div className="border-t border-graphite/30">
        {riskFactors.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.03}>
            <div className="grid gap-x-6 gap-y-1 border-b border-line py-5 sm:grid-cols-12 sm:items-baseline">
              <p className="font-medium text-graphite sm:col-span-4">{item.factor}</p>
              <p className="font-mono text-[13px] uppercase tracking-wide text-accent sm:col-span-2">
                {item.level}
              </p>
              <p className="text-[15px] leading-relaxed text-muted sm:col-span-6">
                {item.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Layer>
  );
}
