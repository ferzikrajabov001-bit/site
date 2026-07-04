import type { TeamMember } from "./types";

export const team: TeamMember[] = [
  {
    id: "ceo",
    name: "Mikhail Sorokin",
    role: "Chief Executive Officer",
    bio: "18 years in Saint Petersburg hospitality. Built the HMS operating platform after leading operations for two international hotel groups.",
    initials: "MS",
    tone: "accent",
  },
  {
    id: "coo",
    name: "Elena Volkova",
    role: "Chief Operating Officer",
    bio: "Oversees day-to-day operations across the portfolio, standardizing service quality and SOPs on the unified operating platform.",
    initials: "EV",
    tone: "wine",
  },
  {
    id: "revenue-director",
    name: "Anton Belyaev",
    role: "Director of Revenue Management",
    bio: "Runs demand forecasting and dynamic pricing across every property, balancing occupancy and ADR to grow RevPAR sustainably.",
    initials: "AB",
    tone: "brass",
  },
  {
    id: "sales-director",
    name: "Darya Kuznetsova",
    role: "Director of Sales & Distribution",
    bio: "Manages the OTA, corporate and MICE channel mix, optimizing commission efficiency and conversion portfolio-wide.",
    initials: "DK",
    tone: "secondary",
  },
  {
    id: "marketing-director",
    name: "Ilya Fedorov",
    role: "Director of Marketing",
    bio: "Leads brand positioning and direct-booking growth, tailoring campaigns and content to each property's distinct segment.",
    initials: "IF",
    tone: "teal",
  },
  {
    id: "finance-director",
    name: "Olga Petrova",
    role: "Director of Finance",
    bio: "Delivers investor-grade monthly reporting and budget control, keeping owners fully informed on asset performance.",
    initials: "OP",
    tone: "accent",
  },
];
