import { cn } from "@/lib/utils";

type Tone = "accent" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  accent: "border-accent/25 bg-accent/[0.06] text-accent",
  neutral: "border-hairline bg-paper-alt text-muted",
  success: "border-success/25 bg-success/[0.07] text-success-deep",
  warning: "border-accent-soft/40 bg-accent-soft/[0.1] text-accent-deep",
};

interface BadgeProps {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-3 py-1 text-xs font-medium tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
