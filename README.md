# Hotel Management Solutions (HMS)

A production-ready, premium corporate website for **Hotel Management Solutions** — a
full-cycle hotel management company operating five properties in Saint Petersburg, Russia.

Built as an investment-grade B2B product foundation: clean architecture, reusable
components, typed dummy data, and a design system prepared for future product surfaces
(admin panel, client dashboard, analytics, CRM).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens)
- **Framer Motion** (scroll reveals, animated counters, micro-interactions)
- Component-based, fully responsive, SEO optimized

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (next/core-web-vitals + typescript)
```

## Project Structure

```
app/
  layout.tsx            # Root layout: fonts, SEO metadata, nav/footer, JSON-LD
  page.tsx              # Home
  about/page.tsx        # About
  services/page.tsx     # Services
  hotels/page.tsx       # Hotels (filterable explorer)
  hotels/[id]/page.tsx  # Hotel detail (static params + dynamic metadata)
  cases/page.tsx        # Case studies
  contact/page.tsx      # Contact (form + location)
  sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx

components/
  Hero, Metrics, Services, WhyHMS, HotelsGrid, CaseStudies, CTA   # Home sections
  Navbar, Footer, Logo, PageHeader, JsonLd                        # Layout / shared
  HotelCard, HotelsExplorer, CaseStudyCard, ContactForm, HeroVisual
  ui/                   # Reusable primitives (Container, Section, GlassCard,
                        # Button, Badge, Reveal, Counter, SectionHeading, icons, ...)

data/                   # Typed dummy data (hotels, services, cases, metrics, values)
lib/                    # site config + utilities
```

## Design System

- **Palette** — backgrounds `#0B1220` / `#111C2E`, text `#FFFFFF` / `#AAB4C0`,
  accent `#2F6BFF`, subtle hairline borders. Defined as Tailwind tokens in
  `tailwind.config.ts`.
- **Type** — `Sora` for display, `Inter` for body (via `next/font`).
- **Surfaces** — glassmorphism cards (`GlassCard`), ambient gradient backgrounds,
  faint grid overlays.
- **Motion** — scroll-triggered reveals and animated counters that respect
  `prefers-reduced-motion`.

## Prepared for Scale

The codebase is structured as a real product foundation:

- **Single source of truth** for branding/contact/navigation in `lib/site.ts`.
- **Typed domain model** in `data/types.ts` reusable by future dashboards, analytics
  and CRM features.
- **Filter-ready** hotels explorer that derives filters from data.
- **Decoupled lead capture** — `ContactForm` isolates submission behind a single
  `submit()` function ready to be wired to an API/CRM.

> All figures and property names are illustrative placeholder data.
