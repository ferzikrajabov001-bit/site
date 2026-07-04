import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "nevsky-deco-turnaround",
    hotel: "Art Deco Nevsky",
    segment: "Upscale Business",
    duration: "12 months",
    summary:
      "Operational reset and corporate demand rebuild lifted RevPAR by over a third.",
    challenge:
      "A strong Art Deco asset on Nevsky Prospekt underperforming on rate and over-reliant on low-margin OTA demand.",
    approach: [
      "Rebuilt corporate and MICE account base",
      "Introduced dynamic segment-based pricing",
      "Shifted mix toward direct and negotiated demand",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 68, after: 82 },
      { label: "ADR", unit: "₽", before: 9200, after: 11800 },
      { label: "RevPAR", unit: "₽", before: 6256, after: 9676 },
    ],
  },
  {
    id: "repino-repositioning",
    hotel: "Art na Repino",
    segment: "Boutique Leisure",
    duration: "9 months",
    summary:
      "Artist-colony repositioning grew ADR while protecting the boutique experience.",
    challenge:
      "Undifferentiated seaside positioning suppressing rate potential for a high-quality boutique product.",
    approach: [
      "Repositioned around the Repino artists'-colony story",
      "Upgraded content across premium OTAs",
      "Launched a direct-booking and CRM program",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 71, after: 78 },
      { label: "ADR", unit: "₽", before: 10800, after: 14200 },
      { label: "RevPAR", unit: "₽", before: 7668, after: 11076 },
    ],
  },
  {
    id: "primorsky-scale",
    hotel: "Art Deco Primorsky",
    segment: "Upper Midscale",
    duration: "14 months",
    summary:
      "Channel and group strategy filled a large inventory across the demand calendar.",
    challenge:
      "Large room count creating occupancy volatility between exhibition peaks.",
    approach: [
      "Advanced channel-mix management",
      "Group and exhibition pricing framework",
      "Base-demand contracts to smooth pace",
    ],
    metrics: [
      { label: "Occupancy", unit: "%", before: 66, after: 80 },
      { label: "ADR", unit: "₽", before: 8100, after: 9600 },
      { label: "RevPAR", unit: "₽", before: 5346, after: 7680 },
    ],
  },
];
