# Hotel Management Solutions (HMS)

**Hospitality Asset Management System** — a corporate platform for a hotel
asset management company operating five assets in Saint Petersburg.

The interface is designed as a decision system (Bloomberg Terminal data density +
JLL/CBRE report structure + McKinsey clarity), not a marketing website: dense data
tables, monospaced figures, layered structure, thin separators and large negative
space.

## Design system

- Paper `#F6F5F2`, graphite `#1C1F26`, accent `#2F6BFF`, hairlines `#DADCE0`.
- Type: **Inter** (structure/text), **Source Serif 4** (headlines), **IBM Plex Mono**
  (data, labels, tables — the "terminal" layer).
- No cards, no grid-as-structure, no dashboards, no glassmorphism, no icon-driven UI.
- Framer Motion is used only for a subtle opacity fade-in (respects `prefers-reduced-motion`).

## Tech

- **Next.js 14** (App Router, server-first — nearly everything is statically prerendered)
- **TypeScript**
- **Tailwind CSS** (minimal, token-driven)
- **Framer Motion** (fade-in only)
- Lightweight inline SVG sparklines (no chart library)
- SEO-first (metadata, OpenGraph, sitemap, robots, JSON-LD)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Structure (system layers)

```
app/
  page.tsx              # Global Overview → Portfolio Control → Operating Model →
                        # Performance Engine → Risk Intelligence →
                        # Investment Decision → Action System
  objects/              # Portfolio Control (full data table)
  objects/[id]/         # Asset Intelligence (KPIs, sparklines, risk, notes)
  services/             # Operating Model
  cases/                # Performance (before/after evidence)
  about/                # Company
  contacts/             # Action System (actions + request form)
  layout.tsx sitemap.ts robots.ts manifest.ts icon.svg not-found.tsx

sections/               # Home layers (GlobalOverview, InvestmentContext,
                        # PortfolioControl, OperatingModel, PerformanceEngine,
                        # RiskIntelligence, InvestmentDecision, ActionSystem, CTA)
components/             # PortfolioTable, Sparkline, Trend, Layer, PageHeader,
                        # ContactForm, BeforeAfter, Navbar, Footer, …
data/                   # assets, system (operating model / performance / risk /
                        # actions), cases, company, types
lib/                    # site config + utils
```

## Prepared for scale

- Single source of truth (`lib/site.ts`) and typed domain model (`data/types.ts`)
  reusable by an owner dashboard, analytics or CRM.
- Lead capture isolated behind one `submit()` for a future API/CRM.

> All asset names and figures are illustrative demonstration data. Replace them and
> the contacts in `lib/site.ts` before launch.
