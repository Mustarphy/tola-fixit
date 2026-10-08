import { siteUrl } from '@/lib/env';
import type { ContactDetails, ServiceArea, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'TOLA FIXIT',
  title: 'TOLA FIXIT | Auto Repair & Vehicle Maintenance',
  description:
    'Professional vehicle repair, diagnostics and maintenance from TOLA FIXIT. Based in Ijebu Ode, Ogun State, serving customers across Nigeria and beyond.',
  url: siteUrl,
};

export const serviceArea: ServiceArea = {
  base: 'Ijebu Ode, Ogun State',
  coverage: 'Serving across Nigeria & beyond',
};

export const contactDetails: ContactDetails = {
  phone: null,
  email: null,
  whatsapp: null,
};

export const bookServicePath = '/book-service';
