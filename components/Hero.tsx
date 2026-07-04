import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { HeroVisual } from "@/components/HeroVisual";
import { ArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <AmbientBackground />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Hotel management company · Saint Petersburg
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                Hotel Management{" "}
                <span className="accent-gradient-text">Solutions</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
                Full-cycle hotel management company increasing profitability and
                operational efficiency across hospitality assets.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  Transfer hotel under management
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get performance audit
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted">
                <div>
                  <span className="text-2xl font-semibold text-white">6</span>
                  <span className="ml-2">hotels managed</span>
                </div>
                <span className="hidden h-8 w-px bg-white/10 sm:block" />
                <div>
                  <span className="text-2xl font-semibold text-white">350+</span>
                  <span className="ml-2">rooms</span>
                </div>
                <span className="hidden h-8 w-px bg-white/10 sm:block" />
                <div>
                  <span className="text-2xl font-semibold text-white">+28%</span>
                  <span className="ml-2">revenue growth</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
