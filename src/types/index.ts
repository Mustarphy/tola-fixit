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

export interface ContactDetails {
  phone: string | null;
  email: string | null;
  whatsapp: string | null;
}
