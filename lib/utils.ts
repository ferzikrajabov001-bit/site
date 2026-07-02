/**
 * Lightweight className combiner. Keeps the bundle free of extra deps while
 * still supporting conditional class composition across components.
 */
export function cn(...inputs: Array<string | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
