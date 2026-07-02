import { aboutParagraphs } from "@/data";
import { Layer } from "@/components/Layer";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Layer label="О компании">
      <div className="max-w-3xl space-y-7">
        {aboutParagraphs.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <p className="font-serif text-2xl font-normal leading-[1.4] tracking-tight text-graphite sm:text-[2rem] md:leading-[1.4]">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Layer>
  );
}
