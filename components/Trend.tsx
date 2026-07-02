import type { Trend as TrendType } from "@/data/types";
import { cn } from "@/lib/utils";

const glyph: Record<TrendType, string> = {
  up: "↑",
  flat: "→",
  down: "↓",
};

const tone: Record<TrendType, string> = {
  up: "text-accent",
  flat: "text-muted",
  down: "text-graphite",
};

/**
 * Text-based trend indicator (no icon assets): arrow glyph in monospace.
 */
export function Trend({
  value,
  className,
}: {
  value: TrendType;
  className?: string;
}) {
  return (
    <span
      className={cn("font-mono", tone[value], className)}
      aria-label={value === "up" ? "trend up" : value === "down" ? "trend down" : "trend flat"}
    >
      {glyph[value]}
    </span>
  );
}
