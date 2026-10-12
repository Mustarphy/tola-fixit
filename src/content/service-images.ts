import airConditioning from '@/assets/images/services/air-conditioning.jpg';
import engineRepair from '@/assets/images/services/engine-repair.jpg';
import generalMaintenance from '@/assets/images/services/general-maintenance.jpg';
import oilChange from '@/assets/images/services/oil-change.jpg';
import tyreServices from '@/assets/images/services/tyre-services.jpg';
import type { ServiceSlug } from '@/content/service-slugs';
import type { ContentImage } from '@/types';

export const serviceImages: Partial<Record<ServiceSlug, ContentImage>> = {
  'engine-repair': {
    src: engineRepair,
    alt: 'A technician working on an open engine with a hand tool',
  },
  'oil-change': {
    src: oilChange,
    alt: 'Used engine oil draining from beneath a vehicle into a collection pan',
  },
  'tyre-services': {
    src: tyreServices,
    alt: 'A technician fitting a tyre and wheel to a raised vehicle',
  },
  'air-conditioning': {
    src: airConditioning,
    alt: 'A technician connecting A/C pressure gauges to a car’s air conditioning system',
  },
  'general-maintenance': {
    src: generalMaintenance,
    alt: 'A technician spraying protective coating on the underside of a raised vehicle',
  },
};
