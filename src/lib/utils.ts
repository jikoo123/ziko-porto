export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (v: ClassValue) => {
    if (!v) return;
    if (Array.isArray(v)) {
      for (const item of v) walk(item);
      return;
    }
    out.push(String(v));
  };

  for (const input of inputs) walk(input);
  return out.join(" ");
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function formatMetric(value: number, suffix: string = ""): string {
  return `${value}${suffix}`;
}
