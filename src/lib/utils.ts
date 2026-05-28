import { type ClassValue } from "clsx";

/**
 * Merge class names conditionally. Lightweight alternative to clsx + tailwind-merge.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Smooth scroll to an element by ID
 */
export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Format a number with a suffix (e.g., 2+ )
 */
export function formatMetric(value: number, suffix: string = ""): string {
  return `${value}${suffix}`;
}
