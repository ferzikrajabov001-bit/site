import { approachParagraphs } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <Layer label="Подход">
      <div className="max-w-3xl space-y-6">
        {approachParagraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p
              className={
                i === 0
                  ? "font-serif text-2xl font-normal leading-[1.34] tracking-tight text-muted sm:text-3xl"
                  : "font-serif text-2xl font-normal leading-[1.34] tracking-tight text-graphite sm:text-3xl"
              }
            >
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Layer>
  );
}
