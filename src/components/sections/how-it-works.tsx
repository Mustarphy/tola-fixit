import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { serviceProcessSteps } from '@/content/approach';
import { bookServicePath } from '@/lib/constants';

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="border-y bg-surface py-16 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How it works"
          title="A clear process, from first call to handover"
          description="You don’t need to know what’s wrong before you get in touch. Here’s what happens once you do."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceProcessSteps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-lg border bg-background p-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl font-bold text-primary"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        <Link
          href={bookServicePath}
          className={buttonClassName({ size: 'lg', className: 'mt-10' })}
        >
          Book a Service
        </Link>
      </Container>
    </section>
  );
}
