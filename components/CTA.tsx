import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

interface CTAProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

export function CTA({
  title = "Want to increase your hotel profitability?",
  description = "Book a consultation with our management team for a confidential review of your asset and a clear plan to grow performance.",
  primaryLabel = "Book consultation",
  primaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-14 sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/18 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={primaryHref} variant="primary" size="lg">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
