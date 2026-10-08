import { Globe2, MapPin, Route } from 'lucide-react';

import { BookServiceCta } from '@/components/sections/book-service-cta';
import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { serviceArea } from '@/lib/constants';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Service Coverage',
  description:
    'TOLA FIXIT is based in Ijebu Ode, Ogun State, and provides vehicle repair and maintenance services to customers across Nigeria and beyond.',
  path: '/about/service-coverage',
});

const coverageAreas = [
  {
    icon: MapPin,
    title: 'Our base',
    description: `TOLA FIXIT is based in ${serviceArea.base}, Nigeria.`,
  },
  {
    icon: Route,
    title: 'Across Nigeria',
    description:
      'We work with customers in other states as well as locally. Tell us where you are and we’ll confirm how your vehicle can be serviced.',
  },
  {
    icon: Globe2,
    title: 'Beyond Nigeria',
    description:
      'Where arrangements allow, we can also support customers outside Nigeria. Get in touch to discuss your requirements.',
  },
];

export default function ServiceCoveragePage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Service coverage"
        description={`Based in ${serviceArea.base}. ${serviceArea.coverage}.`}
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Service Coverage', href: '/about/service-coverage' },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <ul className="grid gap-6 md:grid-cols-3">
          {coverageAreas.map((area) => {
            const Icon = area.icon;
            return (
              <li key={area.title} className="rounded-lg border p-6">
                <Icon aria-hidden="true" className="size-6 text-primary" />
                <h2 className="mt-4 text-h3 tracking-normal">{area.title}</h2>
                <p className="mt-2 text-muted-foreground">{area.description}</p>
              </li>
            );
          })}
        </ul>

        <section aria-labelledby="arrange-heading" className="mt-14 max-w-3xl">
          <h2 id="arrange-heading">Arranging service outside Ijebu Ode</h2>
          <p className="mt-4 text-muted-foreground">
            When you request a service, include your location along with your
            vehicle details and the problem you’ve noticed. We’ll confirm
            whether and how the work can be carried out at your location, and
            agree the arrangements with you before anything is booked.
          </p>
        </section>
      </Container>

      <BookServiceCta />
    </>
  );
}
