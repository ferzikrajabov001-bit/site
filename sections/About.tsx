import { aboutParagraphs } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Layer label="О компании" tone="dim" density="normal">
      <div className="max-w-2xl space-y-5">
        {aboutParagraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p className="text-xl leading-relaxed text-graphite sm:text-[1.35rem]">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Layer>
  );
}
