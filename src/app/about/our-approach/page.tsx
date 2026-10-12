import { BookServiceCta } from '@/components/sections/book-service-cta';
import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { approachPrinciples } from '@/content/approach';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Our Approach',
  description:
    'How TOLA FIXIT works: diagnose before repairing, explain findings in plain language and agree on the work before it begins.',
  path: '/about/our-approach',
});

export default function OurApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Our approach"
        description="Good vehicle repair starts with understanding the problem. Here is how we work with every customer."
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: 'Our Approach', href: '/about/our-approach' },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <ul className="grid gap-6 sm:grid-cols-2">
          {approachPrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <li key={principle.title} className="rounded-lg border p-6">
                <span
                  aria-hidden="true"
                  className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground"
                >
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-4 text-h3 tracking-normal">
                  {principle.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {principle.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>

      <BookServiceCta />
    </>
  );
}
