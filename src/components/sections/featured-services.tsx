import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { Container } from '@/components/ui/container';
import { serviceImages } from '@/content/service-images';
import type { ServiceSlug } from '@/content/service-slugs';
import {
  getServiceBySlug,
  getServicePath,
  services,
  type Service,
} from '@/content/services';
import { cn } from '@/lib/utils';
import type { ContentImage } from '@/types';

const featuredServiceSlugs: ServiceSlug[] = [
  'engine-repair',
  'oil-change',
  'tyre-services',
  'air-conditioning',
  'general-maintenance',
];

interface FeaturedService {
  service: Service;
  image: ContentImage;
}

const featuredServices = featuredServiceSlugs.flatMap(
  (slug): FeaturedService[] => {
    const service = getServiceBySlug(slug);
    const image = serviceImages[slug];
    return service && image ? [{ service, image }] : [];
  },
);

const otherServices = services.filter(
  (service) => !featuredServiceSlugs.includes(service.slug),
);

export function FeaturedServices() {
  return (
    <section
      aria-labelledby="featured-services-heading"
      className="py-16 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="featured-services-heading"
            eyebrow="Our services"
            title="Repairs and maintenance that keep you moving"
            description="From routine servicing to engine faults, choose the service your vehicle needs or start with a diagnosis."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline lg:self-auto"
          >
            View all services
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {featuredServices.map(({ service, image }, index) => (
            <li
              key={service.slug}
              className={cn(
                index === 0 && 'md:col-span-2 lg:col-span-1 lg:row-span-2',
              )}
            >
              <FeaturedServiceCard
                service={service}
                image={image}
                isLarge={index === 0}
              />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h3>More services</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((service) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <Link
                    href={getServicePath(service.slug)}
                    className="group flex h-full items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-9 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold">
                      {service.name}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

interface FeaturedServiceCardProps extends FeaturedService {
  isLarge: boolean;
}

function FeaturedServiceCard({
  service,
  image,
  isLarge,
}: FeaturedServiceCardProps) {
  return (
    <Link
      href={getServicePath(service.slug)}
      className={cn(
        'group relative flex h-full min-h-64 flex-col justify-end overflow-hidden rounded-lg bg-secondary text-secondary-foreground',
        isLarge && 'min-h-80 lg:min-h-full',
      )}
    >
      <Image
        src={image.src}
        alt=""
        fill
        placeholder="blur"
        sizes={
          isLarge
            ? '(min-width: 1024px) 33vw, 100vw'
            : '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
        }
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-secondary/95 via-secondary/50 to-secondary/0"
      />
      <span className="relative p-5 sm:p-6">
        <span className="block font-display text-xl font-bold">
          {service.name}
        </span>
        <span className="mt-1.5 block max-w-sm text-sm text-secondary-foreground/80">
          {service.summary}
        </span>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
          View service
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}
