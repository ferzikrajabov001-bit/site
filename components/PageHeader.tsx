import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}

export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {label ? (
              <Reveal>
                <SectionLabel>{label}</SectionLabel>
              </Reveal>
            ) : null}
            <Reveal delay={0.05}>
              <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-normal leading-[1.08] tracking-tight text-graphite sm:text-5xl md:text-[3.4rem]">
                {title}
              </h1>
            </Reveal>
          </div>
          {intro ? (
            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <p className="text-pretty leading-relaxed text-muted">{intro}</p>
              </Reveal>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
