import type { StaticImageData } from 'next/image';

export interface ContentImage {
  src: StaticImageData;
  alt: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: URL | undefined;
}

export interface ServiceArea {
  base: string;
  coverage: string;
}

export interface BusinessAddress {
  street: string;
  area: string;
  landmark: string;
  city: string;
  state: string;
  country: string;
}

export interface ContactDetails {
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
}
