import { cn } from "@/lib/utils";

type Tone = "accent" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  accent: "border-accent/25 bg-accent/[0.06] text-accent",
  neutral: "border-hairline bg-paper-alt text-muted",
  success: "border-emerald-700/20 bg-emerald-700/[0.06] text-emerald-800",
  warning: "border-brass/30 bg-brass/[0.08] text-brass-deep",
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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
