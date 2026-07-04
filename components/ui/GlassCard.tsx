import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Primary card surface: plain white, thin hairline border, soft shadow.
 * `interactive` adds hover elevation and an accent border for clickable cards.
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
        "relative overflow-hidden rounded-2xl border border-hairline bg-white shadow-card transition-all duration-300",
        interactive &&
          "hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
