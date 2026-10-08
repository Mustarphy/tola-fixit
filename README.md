# TOLA FIXIT

Web application for TOLA FIXIT, an automotive repair and vehicle maintenance business. This repository contains the production frontend foundation; product pages and business features are built on top of it.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- Lucide React (icons)
- ESLint (`eslint-config-next`) and Prettier (with `prettier-plugin-tailwindcss`)

## Getting Started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```bash
cp .env.example .env.local
```

| Variable   | Required | Description                                                                                                                                                    |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL` | No       | Absolute production URL. Enables `metadataBase` and the sitemap entry in `robots.txt`, and populates `sitemap.xml`. Leave unset until the domain is confirmed. |

`.env.local` and other local env files are git-ignored. Never commit secrets.

## Available Scripts

| Script                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server                      |
| `npm run build`        | Create a production build                         |
| `npm run start`        | Serve the production build                        |
| `npm run lint`         | Run ESLint                                        |
| `npm run typecheck`    | Generate route types and run the TypeScript check |
| `npm run format`       | Format all files with Prettier                    |
| `npm run format:check` | Check formatting without writing changes          |

## Project Structure

```text
src/
├── app/                  Routes, root layout, metadata, error/loading/not-found states
├── components/
│   ├── ui/               Small reusable primitives (Button, Container)
│   ├── layout/           Header, top bar, desktop/mobile navigation, navigation data, status pages
│   ├── sections/         Reusable page sections (page header, service grid, booking CTA)
│   └── forms/            Form components (service request form)
├── content/              Site content: service catalogue, service page copy, news articles
├── lib/                  Constants, env, fonts, metadata helper, utilities
├── proxy.ts              Returns a 404 for unknown /services/[service] slugs before rendering
└── types/                Shared TypeScript types
```

## Content

- **Services:** the catalogue (names, groups, icons, summaries, SEO descriptions) is in [`src/content/services.ts`](src/content/services.ts); the long-form page copy is in [`src/content/service-details.ts`](src/content/service-details.ts); slugs are in [`src/content/service-slugs.ts`](src/content/service-slugs.ts). Navigation, the services page, service routes, the booking form and the sitemap all read from these, so adding a service there is enough.
- **Navigation:** [`src/components/layout/navigation.ts`](src/components/layout/navigation.ts).
- **Contact details:** set `phone`, `email` and `whatsapp` in [`src/lib/constants.ts`](src/lib/constants.ts). The contact page shows them automatically; until then it states that they will be published soon.
- **News:** add articles to [`src/content/news.ts`](src/content/news.ts). When the first article is published, also create `src/app/news/[slug]/page.tsx`. It is not created yet because Cache Components requires `generateStaticParams` to return at least one item.
- **Booking:** `/book-service` shows the service request form in a disabled state. It does not submit anywhere until a backend is added.

## Design Tokens

All brand tokens live in [`src/app/globals.css`](src/app/globals.css):

- **Colors:** wine (`primary`), black (`secondary`) and white (`background`), with neutral shades tinted from the wine hue (`surface`, `muted-foreground`, `border`, `border-strong`, `accent`). Components use only these semantic utilities, so the palette can be adjusted in one place.
- **Typography:** [Poppins](https://fonts.google.com/specimen/Poppins) (weights 400, 500, 600, 700) via `next/font/google` in [`src/lib/fonts.ts`](src/lib/fonts.ts). Poppins is the font used on the AutoFast reference site (identified from its public stylesheet), and is licensed under the SIL Open Font License. Body text uses 400, navigation 500, buttons and minor headings 600, headings 700. The type scale (`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-nav`) is defined in `@theme`. To change the font, edit `fonts.ts` only.
- **Radius and shadows:** a restrained radius scale and subtle shadows, defined in `@theme`.

The favicon at `src/app/icon.svg` and the wrench mark in the header logo are temporary placeholders until the logo is supplied.

## Development Rules

- TypeScript in strict mode; avoid `any`.
- Run `npm run lint`, `npm run typecheck` and `npm run format:check` before committing.
- Style with Tailwind utilities and the semantic tokens. Don't hard-code brand colors in components.
- Server Components by default. Add `'use client'` only to components that need interactivity.
- Build mobile-first: base styles target small screens, and `sm:`/`md:`/`lg:` add larger-screen layouts.
- Use semantic HTML, keep focus states visible, and give icons a text alternative or `aria-hidden`.
- Don't add placeholder business content (contact details, prices, services) until it's provided.
