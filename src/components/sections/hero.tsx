import { ArrowRight, Check, TriangleAlert, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import familyRoadTrip from '@/assets/images/hero/family-road-trip.jpg';
import roadsideBreakdown from '@/assets/images/hero/roadside-breakdown.jpg';
import { buttonClassName } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { getServicePath } from '@/content/services';
import { bookServicePath, serviceArea } from '@/lib/constants';

const imageSizes = '(min-width: 1024px) 440px, 80vw';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="overflow-hidden border-b bg-surface"
    >
      <Container className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            Auto repair & maintenance · {serviceArea.base}
          </p>
          <h1 id="hero-heading" className="mt-4 text-display">
            From breakdown to{' '}
            <span className="text-primary">back on the road.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            When your car lets you down, TOLA FIXIT finds the cause, explains it
            in plain language and fixes it properly, so you and your family can
            get moving again.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={bookServicePath}
              className={buttonClassName({ size: 'lg' })}
            >
              Book a Service
            </Link>
            <Link
              href="/services"
              className={buttonClassName({ variant: 'outline', size: 'lg' })}
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Not sure what’s wrong?{' '}
            <Link
              href={getServicePath('vehicle-diagnostics')}
              className="inline-flex items-center gap-1 rounded-sm font-semibold text-foreground underline underline-offset-4 hover:text-primary"
            >
              Start with vehicle diagnostics
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          </p>
        </div>

        <div className="relative mx-auto aspect-[6/5] w-full max-w-xl">
          <figure className="absolute top-0 left-0 w-4/5">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={roadsideBreakdown}
                alt="A worried woman on the phone while a man and a child look under the bonnet of their broken-down car"
                sizes={imageSizes}
                placeholder="blur"
                preload
                className="aspect-video w-full object-cover grayscale-50"
              />
            </div>
            <figcaption className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-secondary/85 px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              <TriangleAlert aria-hidden="true" className="size-3.5" />
              The breakdown
            </figcaption>
          </figure>

          <figure className="absolute right-0 bottom-0 w-4/5">
            <div className="relative overflow-hidden rounded-lg shadow-lg ring-4 ring-background">
              <Image
                src={familyRoadTrip}
                alt="A smiling family leaning out of their car windows on a road trip"
                sizes={imageSizes}
                placeholder="blur"
                className="aspect-video w-full object-cover"
              />
            </div>
            <figcaption className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              <Check aria-hidden="true" className="size-3.5" />
              Back on the road
            </figcaption>
          </figure>

          <span
            aria-hidden="true"
            className="absolute top-1/2 left-[8%] grid size-12 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background sm:size-14"
          >
            <Wrench className="size-5 sm:size-6" />
          </span>
        </div>
      </Container>
    </section>
  );
}
