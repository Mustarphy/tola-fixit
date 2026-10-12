import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SectionHeading } from '@/components/sections/section-heading';
import { Container } from '@/components/ui/container';
import { approachPrinciples } from '@/content/approach';
import { coupleDrivingImage } from '@/content/site-images';
import { serviceArea } from '@/lib/constants';

export function WhyTolaFixit() {
  return (
    <section aria-labelledby="why-heading" className="py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={coupleDrivingImage.src}
              alt={coupleDrivingImage.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <Link
            href="/about/service-coverage"
            className="absolute -bottom-6 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-lg border bg-background p-4 shadow-lg transition-colors hover:border-primary sm:left-6"
          >
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"
            >
              <MapPin className="size-5" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold">
                Based in {serviceArea.base}
              </span>
              <span className="block text-muted-foreground">
                {serviceArea.coverage}
              </span>
            </span>
          </Link>
        </div>

        <div className="pt-6 lg:pt-0">
          <SectionHeading
            id="why-heading"
            eyebrow="Why TOLA FIXIT"
            title="Repairs you understand before any work begins"
          />
          <ul className="mt-8 space-y-6">
            {approachPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <li key={principle.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
          <Link
            href="/about/our-approach"
            className="mt-8 inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            More about our approach
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
