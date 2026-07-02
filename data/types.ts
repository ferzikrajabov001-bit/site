/**
 * Доменные типы. Описаны так, чтобы их можно было переиспользовать
 * в будущих разделах (кабинет собственника, отчётность, CRM).
 */

export type AssetStatus = "Под управлением" | "Стабилизация" | "Запуск";

export interface AssetKpi {
  occupancy: number; // загрузка, %
  adr: number; // средний тариф, ₽
  revpar: number; // доход на номер, ₽
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
  summary: string;
  description: string;
  highlights: string[];
  kpi: AssetKpi;
}

export interface ModelItem {
  id: string;
  term: string;
  note: string;
}

export interface PerformanceLine {
  id: string;
  value: string;
  label: string;
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
