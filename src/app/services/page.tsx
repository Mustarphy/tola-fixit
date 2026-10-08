import { ArrowRight, ScanSearch } from 'lucide-react';
import Link from 'next/link';

import { BookServiceCta } from '@/components/sections/book-service-cta';
import { PageHeader } from '@/components/sections/page-header';
import { ServiceGrid } from '@/components/sections/service-grid';
import { Container } from '@/components/ui/container';
import {
  getServicePath,
  getServicesByGroup,
  serviceGroups,
} from '@/content/services';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Vehicle Repair & Maintenance Services',
  description:
    'Explore TOLA FIXIT’s vehicle repair, diagnostics and maintenance services, from oil changes and brakes to A/C, electrical and engine repair.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Vehicle repair and maintenance services"
        description="From routine servicing to diagnosing a fault you can’t pin down, find the service your vehicle needs."
        breadcrumbs={[{ label: 'Services', href: '/services' }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col gap-4 rounded-lg border border-primary/20 bg-accent p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <ScanSearch
              aria-hidden="true"
              className="mt-1 size-6 shrink-0 text-primary"
            />
            <div>
              <h2 className="text-h3 font-semibold tracking-normal">
                Not sure what’s wrong with your vehicle?
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Start with diagnostics or a vehicle inspection. We find the
                cause before recommending any work.
              </p>
            </div>
          </div>
          <Link
            href={getServicePath('vehicle-diagnostics')}
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline sm:self-center"
          >
            Vehicle diagnostics
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-12 space-y-14">
          {serviceGroups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <h2 id={`group-${group.id}`} className="mb-6">
                {group.label}
              </h2>
              <ServiceGrid services={getServicesByGroup(group.id)} />
            </section>
          ))}
        </div>
      </Container>

      <BookServiceCta />
    </>
  );
}
