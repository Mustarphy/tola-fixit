import { Newspaper } from 'lucide-react';
import Link from 'next/link';

import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { newsArticles } from '@/content/news';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'News',
  description:
    'News, vehicle care advice and updates from TOLA FIXIT, the auto repair and maintenance specialist based in Ijebu Ode, Ogun State.',
  path: '/news',
});

const dateFormatter = new Intl.DateTimeFormat('en-NG', { dateStyle: 'long' });

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="News & vehicle care advice"
        description="Updates from TOLA FIXIT and practical advice to help you look after your vehicle."
        breadcrumbs={[{ label: 'News', href: '/news' }]}
      />

      <Container className="py-12 sm:py-16">
        {newsArticles.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-lg border border-dashed border-border-strong p-8 text-center sm:p-12">
            <Newspaper
              aria-hidden="true"
              className="mx-auto size-8 text-primary"
            />
            <h2 className="mt-4 text-h3 tracking-normal">
              No articles published yet
            </h2>
            <p className="mt-2 text-muted-foreground">
              News and vehicle care articles will appear here. In the meantime,
              explore our services to find the right help for your vehicle.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex rounded-md text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Explore services
            </Link>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article) => (
              <li key={article.slug}>
                <article className="flex h-full flex-col rounded-lg border p-6">
                  <time
                    dateTime={article.publishedAt}
                    className="text-sm text-muted-foreground"
                  >
                    {dateFormatter.format(new Date(article.publishedAt))}
                  </time>
                  <h2 className="mt-2 text-h3 tracking-normal">
                    <Link
                      href={`/news/${article.slug}`}
                      className="rounded-sm hover:text-primary"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}
