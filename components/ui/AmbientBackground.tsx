import { cn } from "@/lib/utils";

/**
 * Shared decorative background: faint grid + animated accent gradient blooms.
 * Non-interactive and hidden from assistive tech.
 */
export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent-soft/10 blur-[130px]" />
    </div>
  );
}
