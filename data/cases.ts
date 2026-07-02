import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "obukhovsky-turnaround",
    asset: "Hotel Obukhovsky",
    district: "Central District",
    period: "12 months",
    summary:
      "Corporate demand rebuilt and RevPAR grown without rate erosion.",
    context:
      "A well-located asset trading mainly through low-rate OTA demand, with direct and corporate channels lost.",
    actions: [
      "Rebuilt corporate and negotiated demand",
      "Restructured the channel and commission mix",
      "Introduced segment-based dynamic pricing",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 66, after: 81 },
      { label: "ADR", unit: "€", before: 66, after: 78 },
      { label: "RevPAR", unit: "€", before: 44, after: 63 },
    ],
  },
  {
    id: "nevsky-residence-positioning",
    asset: "Hotel Nevsky Residence",
    district: "Admiralteysky District",
    period: "9 months",
    summary: "Premium repositioning grew ADR while protecting occupancy.",
    context:
      "A high-quality boutique product trading without clear positioning, capping rate potential.",
    actions: [
      "Repositioned toward premium leisure demand",
      "Upgraded content across premium channels",
      "Launched a direct-booking programme",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 66, after: 78 },
      { label: "ADR", unit: "€", before: 70, after: 82 },
      { label: "RevPAR", unit: "€", before: 46, after: 64 },
    ],
  },
  {
    id: "petrograd-house-stabilization",
    asset: "Hotel Petrograd House",
    district: "Petrogradsky District",
    period: "14 months",
    summary: "Large inventory stabilised across the demand calendar.",
    context:
      "The portfolio's largest room count produced occupancy swings between demand peaks.",
    actions: [
      "Advanced channel-mix management",
      "Group and exhibition pricing framework",
      "Base-demand contracts to smooth pace",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 64, after: 84 },
      { label: "ADR", unit: "€", before: 78, after: 91 },
      { label: "RevPAR", unit: "€", before: 50, after: 76 },
    ],
  },
];
