import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "operations",
    slug: "hotel-operations-management",
    title: "Hotel Operations Management",
    summary:
      "A unified operating system covering front office, housekeeping, F&B and maintenance.",
    description:
      "We assume full operational responsibility for the property — standardizing processes, staffing models and service quality on a single operating platform. Owners retain transparency and control while day-to-day execution is handled by an experienced management team.",
    icon: "operations",
    outcomes: [
      "Standardized SOPs and service quality",
      "Optimized staffing and labor cost",
      "Centralized procurement and vendor control",
    ],
  },
  {
    id: "revenue",
    slug: "revenue-management",
    title: "Revenue Management",
    summary:
      "Dynamic pricing and demand forecasting to maximize RevPAR across seasons.",
    description:
      "Our revenue team runs continuous demand forecasting, competitive rate shopping and dynamic pricing across all room categories. We balance occupancy and ADR to grow RevPAR while protecting long-term rate integrity.",
    icon: "revenue",
    outcomes: [
      "Dynamic pricing by segment and channel",
      "Demand forecasting and pace monitoring",
      "RevPAR and profit optimization",
    ],
  },
  {
    id: "sales",
    slug: "sales-ota-optimization",
    title: "Sales & OTA Optimization",
    summary:
      "Channel mix management and OTA performance tuning to grow qualified demand.",
    description:
      "We manage the full distribution landscape — OTAs, corporate contracts, MICE and direct booking — optimizing channel mix, commission efficiency and conversion. Listings are continuously tuned for visibility and ranking.",
    icon: "sales",
    outcomes: [
      "Optimized channel and commission mix",
      "OTA content, ranking and conversion tuning",
      "Corporate and MICE demand development",
    ],
  },
  {
    id: "marketing",
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    summary:
      "Brand positioning, direct-booking growth and performance marketing.",
    description:
      "We build a positioning and marketing engine that grows direct demand and reduces channel dependency — combining brand strategy, content, CRM and performance campaigns tailored to each property's segment.",
    icon: "marketing",
    outcomes: [
      "Positioning and brand strategy",
      "Direct-booking and CRM growth",
      "Performance marketing and analytics",
    ],
  },
  {
    id: "finance",
    slug: "financial-control-reporting",
    title: "Financial Control & Reporting",
    summary:
      "Transparent P&L management, budgeting and investor-grade reporting.",
    description:
      "Owners receive transparent, standardized financial reporting on a monthly cadence — full P&L, budget variance, cash flow and KPI dashboards built to institutional investment standards.",
    icon: "finance",
    outcomes: [
      "USALI-aligned P&L management",
      "Budgeting and variance control",
      "Investor-grade monthly reporting",
    ],
  },
  {
    id: "launch",
    slug: "hotel-launch-opening",
    title: "Hotel Launch & Opening",
    summary:
      "Pre-opening planning, technical setup and market entry execution.",
    description:
      "From concept validation to opening day, we manage pre-opening budgets, technical services, systems setup, recruitment and go-to-market — de-risking launches and accelerating the path to stabilized performance.",
    icon: "launch",
    outcomes: [
      "Pre-opening budget and critical path",
      "Systems, tech and team setup",
      "Go-to-market and ramp-up plan",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
