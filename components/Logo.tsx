import { cn } from "@/lib/utils";

/**
 * Abstract HMS mark — stacked hospitality "towers" inside a rounded tile.
 * Uses currentColor-independent gradient so it reads on dark surfaces.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(className)}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hms-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D7A5B" />
          <stop offset="100%" stopColor="#0F4D3A" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#hms-logo)" />
      <g fill="#fff">
        <rect x="11" y="18" width="5" height="12" rx="1.2" opacity="0.95" />
        <rect x="17.5" y="12" width="5" height="18" rx="1.2" />
        <rect x="24" y="15" width="5" height="15" rx="1.2" opacity="0.85" />
      </g>
      <rect x="11" y="30" width="18" height="2.4" rx="1.2" fill="#fff" opacity="0.7" />
    </svg>
  );
}
