import type { LucideIcon } from 'lucide-react';
import {
  BatteryCharging,
  CircleDot,
  ClipboardCheck,
  Cog,
  Disc3,
  Droplet,
  Gauge,
  Move3d,
  Scale,
  ScanSearch,
  Snowflake,
  Thermometer,
  Wrench,
} from 'lucide-react';

import type { ServiceSlug } from '@/content/service-slugs';

export type ServiceGroupId =
  | 'routine-maintenance'
  | 'diagnostics-repair'
  | 'brakes-tyres-suspension'
  | 'cooling-climate';

export interface ServiceGroup {
  id: ServiceGroupId;
  label: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  title: string;
  metaDescription: string;
  summary: string;
  group: ServiceGroupId;
  icon: LucideIcon;
  related: ServiceSlug[];
}

export const serviceGroups: ServiceGroup[] = [
  { id: 'routine-maintenance', label: 'Routine Maintenance' },
  { id: 'diagnostics-repair', label: 'Diagnostics & Repair' },
  { id: 'brakes-tyres-suspension', label: 'Brakes, Tyres & Suspension' },
  { id: 'cooling-climate', label: 'Cooling & Climate' },
];

export const services: Service[] = [
  {
    slug: 'oil-change',
    name: 'Oil Change',
    title: 'Oil Change & Filter Service',
    metaDescription:
      'Engine oil and filter replacement from TOLA FIXIT, with a visual check of key fluids and components while your vehicle is in for service.',
    summary:
      'Fresh engine oil and a new filter to keep your engine protected and running smoothly.',
    group: 'routine-maintenance',
    icon: Droplet,
    related: ['general-maintenance', 'vehicle-inspection', 'engine-repair'],
  },
  {
    slug: 'general-maintenance',
    name: 'General Maintenance',
    title: 'General Vehicle Maintenance',
    metaDescription:
      'Scheduled and preventive vehicle maintenance from TOLA FIXIT, covering fluids, filters, belts, wipers, spark plugs and the routine items that keep a vehicle dependable.',
    summary:
      'Scheduled servicing and preventive care for the parts that wear out with everyday driving.',
    group: 'routine-maintenance',
    icon: Wrench,
    related: ['oil-change', 'vehicle-inspection', 'auto-electrical'],
  },
  {
    slug: 'vehicle-inspection',
    name: 'Vehicle Inspection',
    title: 'Vehicle Inspection & Health Check',
    metaDescription:
      'A structured vehicle health check from TOLA FIXIT covering brakes, tyres, fluids, lights, battery, cooling and more, with clear findings you can act on.',
    summary:
      'A structured check of your vehicle’s key systems, with clear findings and priorities.',
    group: 'routine-maintenance',
    icon: ClipboardCheck,
    related: ['vehicle-diagnostics', 'general-maintenance', 'brake-repair'],
  },
  {
    slug: 'vehicle-diagnostics',
    name: 'Vehicle Diagnostics',
    title: 'Vehicle Diagnostics',
    metaDescription:
      'Not sure what is wrong with your car? TOLA FIXIT vehicle diagnostics combine fault-code scanning with hands-on checks to find the real cause before any repair.',
    summary:
      'Not sure what’s wrong? We find the cause before recommending any repair.',
    group: 'diagnostics-repair',
    icon: ScanSearch,
    related: ['vehicle-inspection', 'engine-repair', 'auto-electrical'],
  },
  {
    slug: 'engine-repair',
    name: 'Engine Repair',
    title: 'Engine Diagnostics & Repair',
    metaDescription:
      'Engine diagnostics and repair from TOLA FIXIT for misfires, oil leaks, overheating, loss of power and other engine problems.',
    summary:
      'Diagnosis and repair of engine faults, from misfires and leaks to loss of power.',
    group: 'diagnostics-repair',
    icon: Cog,
    related: ['vehicle-diagnostics', 'cooling-radiator', 'oil-change'],
  },
  {
    slug: 'auto-electrical',
    name: 'Auto Electrical',
    title: 'Auto Electrical Services',
    metaDescription:
      'Auto electrical diagnosis and repair from TOLA FIXIT for batteries, starting and charging problems, lighting faults and wiring issues.',
    summary:
      'Battery, starting, charging, lighting and wiring faults diagnosed and repaired.',
    group: 'diagnostics-repair',
    icon: BatteryCharging,
    related: ['vehicle-diagnostics', 'engine-repair', 'general-maintenance'],
  },
  {
    slug: 'brake-repair',
    name: 'Brake Repair',
    title: 'Brake Inspection & Repair',
    metaDescription:
      'Brake inspection, brake pad and disc replacement and brake fluid service from TOLA FIXIT. Get your brakes checked if you notice noise, vibration or a soft pedal.',
    summary:
      'Brake pads, discs and fluid checked and serviced so your vehicle stops as it should.',
    group: 'brakes-tyres-suspension',
    icon: Disc3,
    related: ['tyre-services', 'suspension-steering', 'vehicle-inspection'],
  },
  {
    slug: 'tyre-services',
    name: 'Tyre Services',
    title: 'Tyre Inspection, Repair & Replacement',
    metaDescription:
      'Tyre inspection, puncture repair, tyre replacement, valve replacement and pressure checks from TOLA FIXIT.',
    summary:
      'Tyre checks, puncture repairs, replacements, valves and pressure adjustment.',
    group: 'brakes-tyres-suspension',
    icon: CircleDot,
    related: ['wheel-balancing', 'wheel-alignment', 'brake-repair'],
  },
  {
    slug: 'wheel-balancing',
    name: 'Wheel Balancing',
    title: 'Wheel Balancing',
    metaDescription:
      'Wheel balancing from TOLA FIXIT to reduce vibration, protect your tyres and keep your vehicle driving smoothly.',
    summary:
      'Even out weight around each wheel to stop vibration and uneven tyre wear.',
    group: 'brakes-tyres-suspension',
    icon: Scale,
    related: ['wheel-alignment', 'tyre-services', 'suspension-steering'],
  },
  {
    slug: 'wheel-alignment',
    name: 'Wheel Alignment',
    title: 'Wheel Alignment',
    metaDescription:
      'Wheel alignment from TOLA FIXIT to correct pulling, an off-centre steering wheel and uneven tyre wear.',
    summary:
      'Correct your wheel angles so the vehicle tracks straight and tyres wear evenly.',
    group: 'brakes-tyres-suspension',
    icon: Gauge,
    related: ['wheel-balancing', 'suspension-steering', 'tyre-services'],
  },
  {
    slug: 'suspension-steering',
    name: 'Suspension & Steering',
    title: 'Suspension & Steering Repair',
    metaDescription:
      'Suspension and steering inspection and repair from TOLA FIXIT for knocking noises, excessive bouncing, loose steering and poor handling.',
    summary:
      'Shock absorbers, joints, links and steering components checked and repaired.',
    group: 'brakes-tyres-suspension',
    icon: Move3d,
    related: ['wheel-alignment', 'brake-repair', 'wheel-balancing'],
  },
  {
    slug: 'air-conditioning',
    name: 'Air Conditioning',
    title: 'Car Air Conditioning Service & Repair',
    metaDescription:
      'Car A/C diagnostics, servicing, refrigerant recovery and recharge, leak testing and cabin filter replacement from TOLA FIXIT.',
    summary:
      'A/C diagnostics, servicing, leak checks and recharge to get your vehicle cooling again.',
    group: 'cooling-climate',
    icon: Snowflake,
    related: ['cooling-radiator', 'auto-electrical', 'general-maintenance'],
  },
  {
    slug: 'cooling-radiator',
    name: 'Cooling & Radiator',
    title: 'Cooling System & Radiator Service',
    metaDescription:
      'Cooling system and radiator inspection, coolant replacement, leak checks and overheating diagnosis from TOLA FIXIT.',
    summary:
      'Radiator, coolant, hoses and fans checked to prevent overheating and engine damage.',
    group: 'cooling-climate',
    icon: Thermometer,
    related: ['engine-repair', 'air-conditioning', 'vehicle-diagnostics'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByGroup(groupId: ServiceGroupId): Service[] {
  return services.filter((service) => service.group === groupId);
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map(getServiceBySlug)
    .filter((related): related is Service => related !== undefined);
}

export function getServicePath(slug: string): string {
  return `/services/${slug}`;
}
