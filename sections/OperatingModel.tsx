import { operatingModel } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function OperatingModel() {
  return (
    <Layer index="03" label="Operating Model">
      <dl>
        {operatingModel.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 0.04}>
            <div className="grid gap-2 border-t border-line py-7 sm:grid-cols-12 sm:gap-6">
              <dt className="font-serif text-xl font-normal tracking-tight text-graphite sm:col-span-5 sm:text-[1.4rem]">
                {item.term}
              </dt>
              <dd className="text-[15px] leading-relaxed text-muted sm:col-span-7 sm:pt-1">
                {item.note}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Layer>
  );
}
