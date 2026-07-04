/**
 * Domain types shared across the marketing site and prepared for reuse by
 * future product surfaces (admin panel, client dashboard, analytics, CRM).
 */

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  description: string;
  /** Overrides the animated counter with static text (e.g. a range like "18–32%" or "24/7"). */
  display?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: ServiceIcon;
  outcomes: string[];
}

export type ServiceIcon =
  | "operations"
  | "revenue"
  | "sales"
  | "marketing"
  | "finance"
  | "launch";

export interface HotelKpi {
  occupancy: number; // percentage
  rooms: number;
  adr: number; // average daily rate, RUB
  revpar: number; // revenue per available room, RUB
  rating: number; // guest satisfaction 0-5
}

export interface Hotel {
  id: string;
  name: string;
  segment: string;
  category: string; // e.g. "4★ Business"
  district: string;
  location: string;
  status: "Under Management" | "Launch Phase" | "Stabilized";
  yearOnboarded: number;
  summary: string;
  description: string;
  highlights: string[];
  kpi: HotelKpi;
  amenities: string[];
}

export interface CaseMetricDelta {
  label: string;
  unit: string;
  before: number;
  after: number;
}

export interface CaseStudy {
  id: string;
  hotel: string;
  segment: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string[];
  metrics: CaseMetricDelta[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  hotelId: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}
