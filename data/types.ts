/**
 * Domain model for the HMS asset management system. Structured for reuse by
 * every layer (portfolio control, asset intelligence, performance, risk).
 */

export type Trend = "up" | "flat" | "down";
export type AssetStatus = "Stable" | "Improving" | "Strong";
export type RiskLevel = "Low" | "Low–Medium" | "Medium" | "Medium–High" | "High";

export interface AssetKpi {
  occupancy: number; // %
  adr: number; // EUR
  revpar: number; // EUR
}

export interface AssetIntelligence {
  occupancySeries: number[];
  adrSeries: number[];
  revenueSeries: number[];
  seasonalRisk: RiskLevel;
  demandVolatility: RiskLevel;
  notes: string[];
}

export interface Asset {
  id: string;
  name: string;
  location: string;
  district: string;
  segment: string;
  rooms: number;
  managedSince: number;
  status: AssetStatus;
  trend: Trend;
  kpi: AssetKpi;
  intelligence: AssetIntelligence;
}

export interface ModelItem {
  id: string;
  term: string;
  note: string;
}

export interface RiskItem {
  id: string;
  factor: string;
  level: RiskLevel;
  note: string;
}

export interface PerformanceLine {
  id: string;
  value: string;
  label: string;
}

export interface SystemAction {
  id: string;
  label: string;
  note: string;
}

export interface CaseMetric {
  label: string;
  unit: string;
  before: number;
  after: number;
}

export interface CaseStudy {
  id: string;
  asset: string;
  district: string;
  period: string;
  summary: string;
  context: string;
  actions: string[];
  metrics: CaseMetric[];
}

export interface TeamArea {
  id: string;
  role: string;
  description: string;
}
