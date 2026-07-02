import type { ServiceIcon } from "@/data/types";

type IconProps = React.SVGProps<SVGSVGElement>;

const defaults: IconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function TrendUp(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M17 4h4v4" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Building(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 21V9h2a2 2 0 0 1 2 2v10" />
      <path d="M9 7h2M9 11h2M9 15h2" />
    </svg>
  );
}

/* --- Service icons --- */

function Operations(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </svg>
  );
}

function Revenue(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 15l3-4 3 2 4-6" />
      <path d="M17 7h2v2" />
    </svg>
  );
}

function Sales(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 9 9M12 12l5-3" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Marketing(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M3 11v2a1 1 0 0 0 1 1h3l4 4V6L7 10H4a1 1 0 0 0-1 1Z" />
      <path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" />
    </svg>
  );
}

function Finance(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3M14 15h3" />
    </svg>
  );
}

function Launch(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3c3 1.5 5 4.5 5 8 0 2-1 4-2 5H9c-1-1-2-3-2-5 0-3.5 2-6.5 5-8Z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M9 16l-2 4M15 16l2 4M12 16v5" />
    </svg>
  );
}

const serviceIcons: Record<ServiceIcon, (props: IconProps) => JSX.Element> = {
  operations: Operations,
  revenue: Revenue,
  sales: Sales,
  marketing: Marketing,
  finance: Finance,
  launch: Launch,
};

export function ServiceGlyph({
  name,
  ...props
}: { name: ServiceIcon } & IconProps) {
  const Glyph = serviceIcons[name];
  return <Glyph {...props} />;
}
