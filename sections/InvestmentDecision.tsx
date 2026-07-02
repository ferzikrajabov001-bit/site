import { investmentDecision } from "@/data";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function InvestmentDecision() {
  return (
    <section className="bg-graphite py-24 text-paper sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="sys-label text-paper/60">
                <span className="text-paper/40">06 · </span>Investment Decision
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.05}>
              <p className="max-w-3xl text-balance font-serif text-2xl font-normal leading-[1.34] tracking-tight text-paper sm:text-3xl md:text-[2.5rem] md:leading-[1.3]">
                {investmentDecision}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
