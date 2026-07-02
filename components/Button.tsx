import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-graphite text-paper hover:bg-graphite-soft",
  secondary:
    "border border-graphite/20 text-graphite hover:border-graphite/40 hover:bg-graphite/[0.03]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof rest.href === "string") {
    const { href, ...anchorRest } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

/**
 * Текстовая ссылка-действие в editorial-стиле: подчёркивание акцентом и стрелка.
 */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/");
  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-1.5 text-[15px] font-medium text-graphite transition-colors hover:text-accent",
        className,
      )}
    >
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5"
      >
        <path d="M5 12h13" />
        <path d="m12 6 6 6-6 6" />
      </svg>
    </span>
  );
  return isInternal ? (
    <Link href={href}>{content}</Link>
  ) : (
    <a href={href}>{content}</a>
  );
}
