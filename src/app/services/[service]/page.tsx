import { CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BookServiceCta } from '@/components/sections/book-service-cta';
import { PageHeader } from '@/components/sections/page-header';
import { ServiceGrid } from '@/components/sections/service-grid';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { serviceProcessSteps } from '@/content/approach';
import { serviceDetails } from '@/content/service-details';
import { serviceImages } from '@/content/service-images';
import {
  getRelatedServices,
  getServiceBySlug,
  getServicePath,
  services,
} from '@/content/services';
import { bookServicePath, contactDetails } from '@/lib/constants';
import { getWhatsAppHref } from '@/lib/contact';
import { createPageMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/services/[service]'>): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: getServicePath(service.slug),
  });
}

export default async function ServicePage({
  params,
}: PageProps<'/services/[service]'>) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const details = serviceDetails[service.slug];
  const relatedServices = getRelatedServices(service);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={serviceImages[service.slug]}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.name, href: getServicePath(service.slug) },
        ]}
        actions={
          <>
            <Link
              href={`${bookServicePath}?service=${service.slug}`}
              className={buttonClassName({ size: 'lg' })}
            >
              Book this service
            </Link>
            {contactDetails.whatsapp ? (
              <a
                href={getWhatsAppHref(
                  contactDetails.whatsapp,
                  `Hello TOLA FIXIT, I have a question about ${service.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
              >
                <WhatsAppIcon className="text-whatsapp" />
                Ask on WhatsApp
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <Link
                href="/contact"
                className={buttonClassName({ variant: 'outline', size: 'lg' })}
              >
                Ask a question
              </Link>
            )}
          </>
        }
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="space-y-12 lg:col-span-2">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading">Why it matters</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {details.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <ServiceList
              id="signs-heading"
              title="Common signs you may need this service"
              items={details.signs}
            />
            <ServiceList
              id="checks-heading"
              title="What we check"
              items={details.checks}
            />
            <ServiceList
              id="work-heading"
              title="What the service may involve"
              items={details.work}
              note="The exact work depends on your vehicle and what the inspection finds."
            />
          </div>

          <aside aria-labelledby="process-heading" className="lg:col-span-1">
            <div className="rounded-lg border p-6 lg:sticky lg:top-28">
              <h2 id="process-heading" className="text-h3 tracking-normal">
                What to expect
              </h2>
              <ol className="mt-5 space-y-5">
                {serviceProcessSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-7 shrink-0 place-items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                href={`${bookServicePath}?service=${service.slug}`}
                className={buttonClassName({ className: 'mt-6 w-full' })}
              >
                Book this service
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      {relatedServices.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="border-t bg-surface"
        >
          <Container className="py-12 sm:py-16">
            <h2 id="related-heading" className="mb-6">
              Related services
            </h2>
            <ServiceGrid services={relatedServices} />
          </Container>
        </section>
      )}

      <BookServiceCta serviceSlug={service.slug} />
    </>
  );
}

interface ServiceListProps {
  id: string;
  title: string;
  items: string[];
  note?: string;
}

function ServiceList({ id, title, items, note }: ServiceListProps) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-md border p-4 text-sm">
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-4 text-sm text-muted-foreground">{note}</p>}
    </section>
  );
}
