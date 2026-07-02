import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface LayerProps {
  index?: string;
  label: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  aside?: boolean;
  className?: string;
  id?: string;
}

/**
 * A "layer" of the system — the structural unit that replaces sections.
 * Header carries a monospace index + label (terminal/report style). With
 * `aside` the label sits in a narrow left column; otherwise it stacks above
 * full-width content (used for dense data tables).
 */
export function Layer({
  index,
  label,
  title,
  children,
  aside = true,
  className,
  id,
}: LayerProps) {
  const header = (
    <Reveal>
      <p className="sys-label">
        {index ? <span className="text-faint">{index} · </span> : null}
        {label}
      </p>
      {title ? (
        <h2 className="mt-6 max-w-md font-serif text-2xl font-normal leading-tight tracking-tight text-graphite sm:text-[2rem]">
          {title}
        </h2>
      ) : null}
    </Reveal>
  );

  return (
    <section id={id} className={cn("border-t border-line py-20 sm:py-24", className)}>
      <Container>
        {aside ? (
          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
            <header className="lg:col-span-3">{header}</header>
            <div className="lg:col-span-9">{children}</div>
          </div>
        ) : (
          <>
            <header className="mb-10">{header}</header>
            {children}
          </>
        )}
      </Container>
    </section>
  );
}
