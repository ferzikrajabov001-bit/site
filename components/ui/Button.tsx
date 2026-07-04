import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_10px_30px_-10px_rgba(31,111,82,0.7)] hover:bg-accent-deep hover:shadow-[0_16px_40px_-12px_rgba(31,111,82,0.8)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.08]",
  ghost: "text-white/80 hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
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
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
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
