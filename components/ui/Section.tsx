import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
  bleed?: boolean;
}

/**
 * Vertical rhythm wrapper for page sections. `bleed` disables the inner
 * container so a section can host full-width backgrounds.
 */
export function Section({
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
