import { BookServiceCta } from '@/components/sections/book-service-cta';
import { FeaturedServices } from '@/components/sections/featured-services';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { LocationMap } from '@/components/sections/location-map';
import { WhyTolaFixit } from '@/components/sections/why-tola-fixit';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <WhyTolaFixit />
      <LocationMap />
      <BookServiceCta />
    </>
  );
}
