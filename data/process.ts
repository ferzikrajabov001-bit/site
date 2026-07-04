import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "audit",
    title: "Diagnostic audit",
    description:
      "We review operations, revenue and financial performance to establish a clear baseline and identify the fastest paths to improvement.",
  },
  {
    id: "transition",
    title: "Platform transition",
    description:
      "The property moves onto the HMS unified operating platform — standardized SOPs, staffing model and reporting from day one.",
  },
  {
    id: "revenue-rebuild",
    title: "Revenue & distribution rebuild",
    description:
      "We rebuild the channel mix and pricing strategy, balancing occupancy and ADR to grow RevPAR without sacrificing rate integrity.",
  },
  {
    id: "cost-structure",
    title: "Cost & staffing optimization",
    description:
      "Labor models and vendor contracts are restructured to protect service quality while improving the property's cost structure.",
  },
  {
    id: "reporting",
    title: "Ongoing reporting & reviews",
    description:
      "Owners receive investor-grade monthly reporting and sit in on regular performance reviews for full, continuing transparency.",
  },
];
