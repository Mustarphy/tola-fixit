import type { LucideIcon } from 'lucide-react';

import {
  getServicePath,
  getServicesByGroup,
  serviceGroups,
} from '@/content/services';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export interface NavFeature {
  title: string;
  description: string;
  link: NavLink;
}

interface NavMenuBase {
  id: string;
  label: string;
  href: string;
}

export interface NavMegaMenu extends NavMenuBase {
  type: 'mega';
  overview: NavLink;
  groups: NavGroup[];
  feature: NavFeature;
}

export interface NavListMenu extends NavMenuBase {
  type: 'list';
  links: NavLink[];
}

export type NavMenu = NavMegaMenu | NavListMenu;

export type NavItem = NavLink | NavMenu;

export function isNavMenu(item: NavItem): item is NavMenu {
  return 'type' in item;
}

const servicesMenu: NavMegaMenu = {
  id: 'services',
  type: 'mega',
  label: 'Services',
  href: '/services',
  overview: { label: 'View all services', href: '/services' },
  groups: serviceGroups.map((group) => ({
    label: group.label,
    links: getServicesByGroup(group.id).map((service) => ({
      label: service.name,
      href: getServicePath(service.slug),
      icon: service.icon,
    })),
  })),
  feature: {
    title: 'Not sure what’s wrong?',
    description:
      'Start with diagnostics. We find the cause before recommending any repair.',
    link: {
      label: 'Vehicle diagnostics',
      href: getServicePath('vehicle-diagnostics'),
    },
  },
};

const aboutMenu: NavListMenu = {
  id: 'about',
  type: 'list',
  label: 'About',
  href: '/about',
  links: [
    {
      label: 'About TOLA FIXIT',
      href: '/about',
      description: 'Who we are and what we do',
    },
    {
      label: 'Our Approach',
      href: '/about/our-approach',
      description: 'How we diagnose, explain and repair',
    },
    {
      label: 'Service Coverage',
      href: '/about/service-coverage',
      description: 'Ijebu Ode, across Nigeria and beyond',
    },
  ],
};

export const primaryNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  servicesMenu,
  aboutMenu,
  { label: 'News', href: '/news' },
  { label: 'Contact Us', href: '/contact' },
];

export function isActivePath(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}
