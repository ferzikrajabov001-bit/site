/**
 * Доменные типы. Описаны так, чтобы их можно было переиспользовать
 * в будущих продуктовых разделах (кабинет владельца, отчётность, CRM).
 */

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface ObjectKpi {
  occupancy: number; // загрузка, %
  adr: number; // средний тариф, ₽
  revpar: number; // доход на номер, ₽
}

export type ObjectStatus = "Под управлением" | "Стабилизация" | "Запуск";

export interface ManagedObject {
  id: string;
  name: string;
  category: string; // напр. «4★ · бизнес»
  district: string;
  rooms: number;
  managedSince: number;
  status: ObjectStatus;
  summary: string;
  description: string;
  highlights: string[];
  kpi: ObjectKpi;
}

export interface CaseMetric {
  label: string;
  unit: string;
  before: number;
  after: number;
}

export interface CaseStudy {
  id: string;
  object: string;
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
