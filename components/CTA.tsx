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
  title = "Хотите повысить доходность своего отеля?",
  description = "Запишитесь на консультацию с нашей управляющей командой — конфиденциальный разбор вашего актива и понятный план роста показателей.",
  primaryLabel = "Записаться на консультацию",
  primaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-none border border-ink-700 bg-ink-900 px-8 py-14 sm:px-14 sm:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft/20 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brass/15 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-white/60">
                {description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={primaryHref} variant="primary" size="lg">
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  className="border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5"
                >
                  Смотреть услуги
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
