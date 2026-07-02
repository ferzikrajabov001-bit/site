import { performanceLines } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";
import { TextLink } from "@/components/Button";

export function Results() {
  return (
    <Layer label="Результаты">
      <dl>
        {performanceLines.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.04}>
            <div className="flex flex-col gap-1 border-t border-line py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <dt className="order-2 max-w-md text-lg text-muted sm:pt-1">
                {item.label}
              </dt>
              <dd className="order-1 shrink-0 font-serif text-3xl font-normal tabular-nums tracking-tight text-graphite sm:text-[2.4rem]">
                {item.value}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
      <div className="mt-8">
        <Reveal>
          <TextLink href="/cases">Результаты по объектам</TextLink>
        </Reveal>
      </div>
    </Layer>
  );
}
