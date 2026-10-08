import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { getServicePath, type Service } from '@/content/services';

interface ServiceGridProps {
  services: Service[];
  headingLevel?: 'h2' | 'h3';
}

export function ServiceGrid({
  services,
  headingLevel: Heading = 'h3',
}: ServiceGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <li key={service.slug}>
            <Link
              href={getServicePath(service.slug)}
              className="group flex h-full flex-col rounded-lg border bg-background p-5 transition-colors hover:border-primary"
            >
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground"
              >
                <Icon className="size-5" />
              </span>
              <Heading className="mt-4 text-h3 font-semibold tracking-normal">
                {service.name}
              </Heading>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                View service
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
