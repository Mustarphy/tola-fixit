import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/constants';

export default function HomePage() {
  return (
    <main className="flex flex-1 items-center py-16 sm:py-24">
      <Container>
        <h1 className="text-4xl font-bold sm:text-5xl">{siteConfig.name}</h1>
        <p className="mt-4 max-w-prose text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
      </Container>
    </main>
  );
}
