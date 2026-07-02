import { cn } from "@/lib/utils";

/**
 * Редакционный маркер раздела: порядковый номер и подпись, разделённые
 * тонкой линией. Создаёт ритм «как в печатном отчёте».
 */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {index ? <span className="index-num">{index}</span> : null}
      <span className="h-px w-8 bg-graphite/25" aria-hidden />
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
        {children}
      </span>
    </div>
  );
}
