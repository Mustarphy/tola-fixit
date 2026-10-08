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
│   ├── layout/           App-wide layout pieces (Header, Footer, status pages)
│   ├── sections/         Page-level sections (Hero, Services, …), added as pages are built
│   └── forms/            Form components (booking, contact, …), added as needed
├── lib/
│   ├── constants.ts      Application-level constants (site name, title, description)
│   ├── env.ts            Validated environment variables
│   ├── fonts.ts          next/font definitions
│   └── utils.ts          Shared helpers such as cn()
└── types/                Shared TypeScript types
```

## Design Tokens

All brand tokens live in [`src/app/globals.css`](src/app/globals.css):

- **Colors:** semantic tokens (`primary`, `secondary`, `accent`, `background`, `foreground`, `surface`, `muted-foreground`, `border`, `ring`) are defined as CSS variables on `:root` and exposed as Tailwind utilities (`bg-primary`, `text-muted-foreground`, …). The current values are provisional neutrals. Update the variables when the official palette is confirmed; components don't need to change.
- **Typography:** Inter (body, `font-sans`) and Barlow (headings, `font-display`), loaded through `next/font` in [`src/lib/fonts.ts`](src/lib/fonts.ts).
- **Radius and shadows:** a restrained radius scale and subtle shadows, defined in `@theme`.

The favicon at `src/app/icon.svg` is a temporary placeholder until the logo is supplied.

## Development Rules

- TypeScript in strict mode; avoid `any`.
- Run `npm run lint`, `npm run typecheck` and `npm run format:check` before committing.
- Style with Tailwind utilities and the semantic tokens. Don't hard-code brand colors in components.
- Server Components by default. Add `'use client'` only to components that need interactivity.
- Build mobile-first: base styles target small screens, and `sm:`/`md:`/`lg:` add larger-screen layouts.
- Use semantic HTML, keep focus states visible, and give icons a text alternative or `aria-hidden`.
- Don't add placeholder business content (contact details, prices, services) until it's provided.
