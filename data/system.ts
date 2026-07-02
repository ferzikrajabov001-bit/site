import type {
  ModelItem,
  PerformanceLine,
  RiskItem,
  SystemAction,
} from "./types";

/** Entry-screen meta for the Global Overview. */
export const overview = {
  portfolio: "5 Assets",
  location: "Saint Petersburg",
  status: "Operational Control Active",
  under: "300+ rooms",
  currency: "EUR",
};

export const investmentContext = [
  "HMS operates hospitality assets in Saint Petersburg under full management.",
  "Our role is operational control and performance responsibility — occupancy, revenue and operating standards.",
  "Owners retain visibility while day-to-day execution runs on a single operating system.",
];

/** Operating model as a structured layer, not marketing copy. */
export const operatingModel: ModelItem[] = [
  {
    id: "demand",
    term: "Demand management",
    note: "Forecasting, channel mix and pace control across the demand calendar.",
  },
  {
    id: "pricing",
    term: "Pricing control",
    note: "Segment-based dynamic pricing to grow RevPAR and protect rate.",
  },
  {
    id: "staffing",
    term: "Staffing optimization",
    note: "Labour models aligned to occupancy and service standards.",
  },
  {
    id: "cost",
    term: "Cost discipline",
    note: "Procurement control and budget variance management.",
  },
  {
    id: "service",
    term: "Service standardization",
    note: "Unified quality standards across all managed assets.",
  },
  {
    id: "reporting",
    term: "Financial reporting",
    note: "Monthly P&L, KPI and variance reporting to owners.",
  },
];

/** Performance engine summary. */
export const performanceLines: PerformanceLine[] = [
  { id: "occupancy", value: "+18% — +32%", label: "occupancy growth" },
  { id: "revenue", value: "+20% — +40%", label: "revenue growth" },
  { id: "adr", value: "+15%", label: "ADR improvement" },
];

export const performanceIndex = [
  { id: "stability", label: "Stability Index", value: "High" },
  { id: "volatility", label: "Volatility", value: "Low–Medium" },
];

/** Risk intelligence layer. */
export const riskFactors: RiskItem[] = [
  {
    id: "seasonality",
    factor: "Seasonality exposure",
    level: "Medium",
    note: "Summer-weighted demand managed via base-demand contracts.",
  },
  {
    id: "demand",
    factor: "Demand volatility",
    level: "Low–Medium",
    note: "Diversified channels and corporate base reduce swings.",
  },
  {
    id: "labor",
    factor: "Labor dependency",
    level: "Medium",
    note: "Standardised staffing models limit single-point reliance.",
  },
  {
    id: "cost",
    factor: "Cost pressure",
    level: "Low–Medium",
    note: "Procurement control and budget discipline in place.",
  },
  {
    id: "sensitivity",
    factor: "Occupancy sensitivity",
    level: "Low–Medium",
    note: "Length-of-stay and corporate mix stabilise occupancy.",
  },
];

export const investmentDecision =
  "HMS provides full operational control and performance responsibility across hospitality assets in Saint Petersburg. If you own a hospitality asset, we can run an operational evaluation and propose a management model.";

/** Action system (contact). */
export const systemActions: SystemAction[] = [
  {
    id: "evaluation",
    label: "Request Asset Evaluation",
    note: "Operational and financial review of your property.",
  },
  {
    id: "management",
    label: "Submit Hotel for Management",
    note: "Transfer an asset under HMS operational control.",
  },
  {
    id: "investment",
    label: "Discuss Investment Model",
    note: "Ownership and management economics for investors.",
  },
];
