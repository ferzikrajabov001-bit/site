/**
 * Небольшой помощник для объединения классов без лишних зависимостей.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Currency formatting in EUR without fractional part.
 */
export function formatEur(value: number): string {
  return `€${value.toLocaleString("en-US")}`;
}
