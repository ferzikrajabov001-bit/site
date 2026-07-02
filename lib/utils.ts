/**
 * Небольшой помощник для объединения классов без лишних зависимостей.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Форматирование денежных значений в рублях без дробной части.
 */
export function formatRub(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
