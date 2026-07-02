import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type Density = "airy" | "normal" | "dense";
type Tone = "paper" | "dim" | "graphite";

interface LayerProps {
  index?: string;
  label?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  aside?: boolean;
  density?: Density;
  tone?: Tone;
  className?: string;
  id?: string;
}

const densityMap: Record<Density, string> = {
  airy: "py-28 sm:py-44",
  normal: "py-20 sm:py-28",
  dense: "py-14 sm:py-20",
};

const toneMap: Record<Tone, string> = {
  paper: "border-t border-line",
  dim: "border-t border-line bg-paper-dim",
  graphite: "bg-graphite text-paper",
};

/**
 * Structural unit of the page. Rhythm is expressed through `density`
 * (vertical space) and `tone` (background contrast), so sections deliberately
 * differ in weight instead of forming a flat, even document.
 */
export function Layer({
  index,
  label,
  title,
  children,
  aside = true,
  density = "normal",
  tone = "paper",
  className,
  id,
}: LayerProps) {
  const onDark = tone === "graphite";

  const header =
    label || title ? (
      <Reveal>
        {label ? (
          <p className={cn("sys-label", onDark && "text-paper/60")}>
            {index ? (
              <span className={onDark ? "text-paper/40" : "text-faint"}>
                {index} ·{" "}
              </span>
            ) : null}
            {label}
          </p>
        ) : null}
        {title ? (
          <h2
            className={cn(
              "max-w-md font-serif text-2xl font-normal leading-tight tracking-tight sm:text-[2rem]",
              label && "mt-6",
              onDark ? "text-paper" : "text-graphite",
            )}
          >
            {title}
          </h2>
        ) : null}
      </Reveal>
    ) : null;

  return (
    <section id={id} className={cn(densityMap[density], toneMap[tone], className)}>
      <Container>
        {aside ? (
          <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
            {header ? <header className="lg:col-span-3">{header}</header> : null}
            <div className={header ? "lg:col-span-9" : "lg:col-span-12"}>
              {children}
            </div>
          </div>
        ) : (
          <>
            {header ? <header className="mb-10">{header}</header> : null}
            {children}
          </>
        )}
      </Container>
    </section>
  );
}
