import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Glassmorphism surface primitive. `interactive` adds hover elevation and
 * an accent border used for clickable cards.
 */
export function GlassCard({
  className,
  interactive = false,
  as: Tag = "div",
  children,
  ...props
}: GlassCardProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300",
        interactive &&
          "hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06] hover:shadow-card",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
