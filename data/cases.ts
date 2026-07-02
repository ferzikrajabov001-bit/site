import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "obukhovsky-turnaround",
    object: "Hotel Obukhovsky",
    district: "Центральный район",
    period: "12 месяцев",
    summary:
      "Вернули корпоративный спрос и подняли доход на номер без демпинга по цене.",
    context:
      "Объект с хорошим расположением работал в основном через площадки бронирования по низкой цене. Прямые продажи и корпоративные клиенты были потеряны.",
    actions: [
      "Восстановили корпоративные договоры",
      "Пересобрали структуру каналов продаж",
      "Ввели управление тарифами по сегментам",
    ],
    metrics: [
      { label: "Загрузка", unit: "%", before: 66, after: 81 },
      { label: "ADR", unit: "₽", before: 7900, after: 9800 },
      { label: "RevPAR", unit: "₽", before: 5214, after: 7938 },
    ],
  },
  {
    id: "nevsky-loft-positioning",
    object: "Hotel Nevsky Loft",
    district: "Адмиралтейский район",
    period: "9 месяцев",
    summary:
      "Уточнили позиционирование и подняли среднюю цену размещения.",
    context:
      "Качественный небольшой объект продавался без выраженного позиционирования, что сдерживало цену.",
    actions: [
      "Определили позиционирование под свой сегмент",
      "Обновили представление на площадках",
      "Развили прямые бронирования",
    ],
    metrics: [
      { label: "Загрузка", unit: "%", before: 69, after: 78 },
      { label: "ADR", unit: "₽", before: 9700, after: 12600 },
      { label: "RevPAR", unit: "₽", before: 6693, after: 9828 },
    ],
  },
  {
    id: "petrograd-stabilization",
    object: "Hotel Petrograd",
    district: "Петроградский район",
    period: "14 месяцев",
    summary:
      "Стабилизировали загрузку крупного объекта между пиками спроса.",
    context:
      "Большой номерной фонд давал сильные перепады загрузки вне событийных периодов.",
    actions: [
      "Настроили управление каналами продаж",
      "Ввели работу с группами и договорами",
      "Сформировали базовый спрос на межсезонье",
    ],
    metrics: [
      { label: "Загрузка", unit: "%", before: 64, after: 84 },
      { label: "ADR", unit: "₽", before: 7500, after: 8600 },
      { label: "RevPAR", unit: "₽", before: 4800, after: 7224 },
    ],
  },
];
