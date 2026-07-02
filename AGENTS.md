# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 14 (App Router) static corporate website** (Hotel Management
Solutions). It is server-first / statically prerendered — there is **no backend, database, or
external service** to run. Content lives in `data/` and `lib/site.ts`.

Standard commands are documented in `README.md` and `package.json` scripts (`dev`, `build`,
`start`, `lint`). Notes that aren't obvious from those:

- Dependencies are installed by the startup update script (`npm install`), so you normally only
  need to start the dev server: `npm run dev` (serves on http://localhost:3000).
- The contact form (`components/ContactForm.tsx`) has **no real backend** — `submit()` just waits
  ~800ms and logs to the console in dev, then shows the "Request received." success state. To wire
  a real API/CRM, replace only the `submit()` function.
- Node 22 works fine even though the project targets Next 14 (no version pin / `.nvmrc`).
