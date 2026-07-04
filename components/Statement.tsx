import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface StatementProps {
  eyebrow?: string;
  children: React.ReactNode;
  align?: "left" | "indent";
  className?: string;
}

/**
 * Full-bleed editorial statement — the one deliberately oversized, asymmetric
 * moment per page that breaks the container grid rhythm.
 */
export function Statement({
  eyebrow,
  children,
  align = "indent",
  className,
}: StatementProps) {
  return (
    <section className={cn("border-t border-hairline bg-ink-900 py-20 sm:py-28", className)}>
      <div
        className={cn(
          "px-6 sm:px-8",
          align === "indent" ? "max-w-[1200px] mx-auto lg:pl-[18%]" : "max-w-[1200px] mx-auto",
        )}
      >
        {eyebrow ? (
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {eyebrow}
            </span>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <p className="font-display mt-5 max-w-3xl text-balance text-3xl font-medium leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
