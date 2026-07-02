import { investmentContext } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function InvestmentContext() {
  return (
    <Layer index="01" label="Investment Context">
      <div className="max-w-3xl space-y-7">
        {investmentContext.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p className="font-serif text-2xl font-normal leading-[1.4] tracking-tight text-graphite sm:text-[1.9rem]">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Layer>
  );
}
