import { cn } from "@/lib/utils";

/**
 * Restrained decorative background for hero/header sections: a faint grid
 * only, no color blooms. Non-interactive and hidden from assistive tech.
 */
export function AmbientBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
