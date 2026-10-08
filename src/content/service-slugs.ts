export const serviceSlugs = [
  'oil-change',
  'general-maintenance',
  'vehicle-inspection',
  'vehicle-diagnostics',
  'engine-repair',
  'auto-electrical',
  'brake-repair',
  'tyre-services',
  'wheel-balancing',
  'wheel-alignment',
  'suspension-steering',
  'air-conditioning',
  'cooling-radiator',
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}
