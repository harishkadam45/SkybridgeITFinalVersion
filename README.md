# SkyBridge IT Consulting — Website

Official marketing website for [SkyBridge IT Consulting](https://skybridgeit.com), a white-label web development partner for agencies since 2005. Built as a fast, SEO-friendly static site with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Features

- **30 static pages** — home, services, service detail pages, WordPress packages, about, team, our-team, ISO certification, sitemap, contact, and a custom 404 page.
- **SEO built in** — per-page canonical URLs, Open Graph default image (`/og/og-default.png`), meta descriptions, structured data (Organization + WebSite JSON-LD), and `robots.txt`.
- **Sitemap** — auto-generated `sitemap-index.xml` via `@astrojs/sitemap`.
- **Responsive design** — mobile-first, with a sticky header, mobile drawer navigation, and testimonials/carousel components.
- **Hosting-ready** — `public/.htaccess` (404 handling + redirects), `_redirects` (Netlify), and static files optimized for shared hosting (Hostinger) or any static host.

## Tech Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Framework    | [Astro](https://astro.build) 7 (static output) |
| Styling      | [Tailwind CSS](https://tailwindcss.com) v4 (Vite plugin) |
| Fonts        | Plus Jakarta Sans (variable), self-hosted via `@fontsource-variable` |
| SEO          | `@astrojs/sitemap`, custom JSON-LD            |
| Language     | TypeScript                                   |
| Hosting      | Any static host (Hostinger, Netlify, Vercel) |

## Getting Started

### Prerequisites

- Node.js ≥ 22.12.0
- npm ≥ 10

### Install & Run

```sh
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:4321
npm run build        # build production site into ./dist/
npm run preview      # preview the production build locally
npx astro check      # type-check the project (recommended pre-commit)
```

> On long-running dev sessions, use the background mode: `astro dev --background`, then manage with `astro dev status`, `astro dev logs`, and `astro dev stop`.

## Project Structure

```text
/
├── public/               # static assets copied as-is into dist/
│   ├── images/           # logo, badges, tech logos, service imagery
│   ├── og/               # Open Graph default image
│   ├── .htaccess         # Apache redirects + 404 handling
│   ├── _redirects        # Netlify redirects
│   └── robots.txt
├── src/
│   ├── components/       # Layout, Header, Footer, card/section components
│   ├── data/             # site config + content (services, nav, stats, testimonials)
│   ├── layouts/          # base page layouts
│   ├── pages/            # one .astro file per route (29 pages + 404)
│   └── styles/           # global.css (Tailwind v4 theme + design system)
├── astro.config.mjs      # site URL, static output, sitemap config
├── tsconfig.json
└── package.json
```

## Design System

The design system is defined in `src/styles/global.css` using Tailwind v4 `@theme`:

- **Brand blue** — `#0095FF` (`brand-600`), hover `#0080E5`
- **Navy** — `#0B132A` (`navy-950`)
- **Ice blue** — `#F4F9FF` background, `#E2E8F5` borders
- **Type** — Plus Jakarta Sans variable font
- **Components** — `.btn-primary`, `.btn-outline`, `.btn-white`, `.card`, `.section`, pill buttons, rounded-32/36px cards, custom shadow utilities

Centralize reusable UI in `src/data/content.ts` and `src/data/site.ts` (navigation, stats, testimonials, portfolio, tech rows). Edit those files to change content without touching page markup.

## Adding a Page

1. Create `src/pages/your-slug.astro`.
2. Use the shared `Layout` component and set `title`, `description`, and `canonicalPath`.
3. Add `jsonLd` if the page needs structured data.
4. Rebuild and verify the new page appears in the sitemap.

## Deployment

The build output is fully static (`./dist/`). Deploy options:

- **Hostinger / shared hosting** — upload the contents of `dist/` (including the hidden `.htaccess`) to `public_html`.
- **Netlify** — build command `npm run build`, publish directory `dist/` (`_redirects` handles routing).
- **Vercel** — build command `npm run build`, output directory `dist/`.

## Contribution

1. Make your changes locally and verify with `npm run build` and `npx astro check`.
2. Commit with a descriptive message (e.g., `fix: hero carousel timing`).
3. Open a pull request with a summary of changes and any screenshots.