import { siteUrl } from '@/lib/env';
import type {
  BusinessAddress,
  ContactDetails,
  ServiceArea,
  SiteConfig,
} from '@/types';

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

export const businessAddress: BusinessAddress = {
  street: 'Otunba Bayo Erinle Street',
  area: 'Onirugba',
  landmark: 'Kapital Junction',
  city: 'Ijebu Ode',
  state: 'Ogun State',
  country: 'Nigeria',
};

export const businessMapLocation = {
  query: 'Onirugba, Ijebu Ode, Ogun State, Nigeria',
  isExact: false,
};

export const contactDetails: ContactDetails = {
  phone: '+2347030102257',
  email: null,
  whatsapp: '+2347030102257',
};

export const bookServicePath = '/book-service';
