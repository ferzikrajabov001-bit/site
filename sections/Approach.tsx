import { approachParagraphs } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function Approach() {
  return (
    <Layer label="Подход" density="airy">
      <div className="max-w-3xl space-y-7">
        {approachParagraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p
              className={
                i === 0
                  ? "font-serif text-[1.75rem] font-normal leading-[1.3] tracking-tight text-muted sm:text-4xl md:text-[2.7rem] md:leading-[1.24]"
                  : "font-serif text-[1.75rem] font-normal leading-[1.3] tracking-tight text-graphite sm:text-4xl md:text-[2.7rem] md:leading-[1.24]"
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
