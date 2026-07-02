import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Сдержанный текстовый логотип управляющей компании: монограмма + название.
 * Никаких «стартап»-иконок — только типографика.
 */
export function Logo({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-graphite/20 text-[13px] font-semibold tracking-tight text-graphite">
        H
      </span>
      {showName ? (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight text-graphite">
            {siteConfig.shortName}
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
            Asset Management System
          </span>
        </span>
      ) : null}
    </span>
  );
}
