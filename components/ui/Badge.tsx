import { cn } from "@/lib/utils";

type Tone = "accent" | "neutral" | "success" | "warning";

const tones: Record<Tone, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
  neutral: "border-white/15 bg-white/[0.04] text-muted",
  success: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  warning: "border-amber-400/30 bg-amber-400/10 text-amber-300",
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
