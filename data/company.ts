import type { TeamArea } from "./types";

export const companyPrinciples = [
  {
    id: "responsibility",
    title: "Performance responsibility",
    description:
      "We take assets under full management and operate against metrics — occupancy, revenue and cost — not recommendations.",
  },
  {
    id: "system",
    title: "System over individuals",
    description:
      "Results come from processes and standards, which makes asset performance predictable.",
  },
  {
    id: "transparency",
    title: "Transparent reporting",
    description:
      "Owners receive monthly P&L, budget variance and KPI reporting with full visibility.",
  },
  {
    id: "local",
    title: "Local market depth",
    description:
      "We operate only in Saint Petersburg and understand its seasonality, demand and competitive set.",
  },
];

export const teamAreas: TeamArea[] = [
  {
    id: "operations",
    role: "Operations",
    description:
      "General managers and heads of department accountable for daily operations and service standards.",
  },
  {
    id: "revenue",
    role: "Revenue management",
    description:
      "Revenue managers running pricing, channel mix and occupancy across the portfolio.",
  },
  {
    id: "finance",
    role: "Finance & control",
    description:
      "Finance function managing budgets, cost control and owner reporting.",
  },
];

export const companyStory = [
  "HMS is a hospitality asset management company operating hotels and aparthotels in Saint Petersburg under full operational control.",
  "The company grew out of practice: the team operated individual assets, then consolidated a shared operating model, reporting and revenue discipline into a single management platform.",
  "Today five assets across the city are under management — from a boutique hotel to a large business hotel and extended-stay apartments.",
];
