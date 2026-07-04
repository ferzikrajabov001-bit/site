import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative border-b border-hairline pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                <span className="h-px w-6 bg-accent" />
                {eyebrow}
              </span>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
                {description}
              </p>
            </Reveal>
          ) : null}
          {children ? (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
