import { Suspense } from 'react';

import { ServiceRequestForm } from '@/components/forms/service-request-form';
import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { getServiceBySlug } from '@/content/services';
import { bookServicePath } from '@/lib/constants';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Book a Service',
  description:
    'Request vehicle repair, diagnostics or maintenance from TOLA FIXIT. Tell us about your vehicle, its location and the problem you’ve noticed.',
  path: bookServicePath,
});

const requestSteps = [
  'Tell us about yourself, your vehicle and where it is.',
  'Choose a service, or select “Not sure” if you need a diagnosis.',
  'We review your request and get back to you to arrange the next steps.',
];

export default function BookServicePage({
  searchParams,
}: PageProps<'/book-service'>) {
  return (
    <>
      <PageHeader
        eyebrow="Book a Service"
        title="Request a service"
        description="Tell us about your vehicle and what it needs. If you’re not sure what’s wrong, that’s fine. Describe what you’ve noticed and we’ll start from there."
        breadcrumbs={[{ label: 'Book a Service', href: bookServicePath }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <Suspense fallback={<ServiceRequestForm />}>
              <PreselectedServiceRequestForm searchParams={searchParams} />
            </Suspense>
          </div>

          <aside aria-labelledby="request-steps-heading">
            <div className="rounded-lg border p-6">
              <h2
                id="request-steps-heading"
                className="text-h3 tracking-normal"
              >
                How it works
              </h2>
              <ol className="mt-5 space-y-4">
                {requestSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm">
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-md bg-primary font-semibold text-primary-foreground"
                    >
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}

async function PreselectedServiceRequestForm({
  searchParams,
}: Pick<PageProps<'/book-service'>, 'searchParams'>) {
  const { service } = await searchParams;
  const preselectedService =
    typeof service === 'string' ? getServiceBySlug(service) : undefined;

  return <ServiceRequestForm defaultService={preselectedService?.slug} />;
}
