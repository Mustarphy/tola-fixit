import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { BookServiceCta } from '@/components/sections/book-service-cta';
import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { serviceGroups } from '@/content/services';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'TOLA FIXIT is an automotive repair and maintenance business based in Ijebu Ode, Ogun State, serving customers across Nigeria and beyond.',
  path: '/about',
});

const aboutLinks = [
  {
    title: 'Our approach',
    description:
      'How we diagnose problems, explain findings and agree on work before it starts.',
    href: '/about/our-approach',
  },
  {
    title: 'Service coverage',
    description:
      'Based in Ijebu Ode, Ogun State, and serving customers across Nigeria and beyond.',
    href: '/about/service-coverage',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About TOLA FIXIT"
        description="An automotive repair and maintenance business focused on keeping vehicles safe, reliable and on the road."
        breadcrumbs={[{ label: 'About', href: '/about' }]}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <section aria-labelledby="who-heading">
            <h2 id="who-heading">Who we are</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                TOLA FIXIT repairs, diagnoses and maintains vehicles. We are
                based in Ijebu Ode, Ogun State, and work with customers across
                Nigeria and, where arrangements allow, outside the country.
              </p>
              <p>
                Our focus is the work itself: finding out what is wrong,
                explaining it clearly and fixing it properly. We provide repair
                and maintenance services only. We don’t run a parts shop.
              </p>
            </div>
          </section>

          <section aria-labelledby="what-heading">
            <h2 id="what-heading">What we do</h2>
            <p className="mt-4 text-muted-foreground">
              Our services cover the main systems of a vehicle:
            </p>
            <ul className="mt-4 space-y-2">
              {serviceGroups.map((group) => (
                <li key={group.id} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-primary"
                  />
                  {group.label}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              View all services
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </section>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {aboutLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col rounded-lg border p-6 transition-colors hover:border-primary"
              >
                <h2 className="text-h3 tracking-normal">{link.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {link.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read more
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <BookServiceCta />
    </>
  );
}
