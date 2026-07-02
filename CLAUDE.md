# lukasziegler.com

Personal site of Lukas Ziegler — Product Designer & Handpan Facilitator, Salzburg.
Static Astro 5 site, bilingual (EN default, DE under `/de/`). Look & feel ported from the Avenco Hugo theme.

## Roles

- **Lukas** owns content (.md files), design decisions, and Git workflows. He has a frontend background (2012–2018) and fine-tunes CSS himself.
- **Claude** does the engineering heavy lifting: features, refactors, translation sync, SEO.

## Stack

- Astro 5, `output: 'static'`, deployed via git push (Netlify/Cloudflare Pages)
- No UI framework, no Tailwind — plain modern CSS (nesting, `light-dark()`, `color-mix()`, container queries welcome)
- Nunito self-hosted via @fontsource (GDPR-safe, no Google Fonts requests)
- `npm run dev` → localhost:4321 · `npm run build` → `dist/`

## Structure

- `src/content/pages/{en,de}/` — translatable pages (schema in `src/content.config.ts`)
- `src/content/projects/{en,de}/` — design case studies (homepage grid + `/projects/`)
- `src/content/events/{en,de}/` — events (workshop | sound-journey | retreat | lesson)
- `src/pages/[...slug].astro` — renders pages with mirrored URLs (`en/sound.md` → `/sound/`, `de/sound.md` → `/de/sound/`). `home`, `events`, `projects` have own templates.
- `src/components/` — `HomePage` (hero + projects grid), `ProjectsPage`, `ProjectDetail`, `EventsPage` are full page templates parameterized by `lang`
- `src/i18n/ui.ts` — UI strings + social links · `src/i18n/utils.ts` — helpers
- `src/styles/tokens.css` — ALL design tokens (Avenco palette: primary #4235d0, secondary #f969cd, dark #120f3e). Change look & feel here first.
- `src/layouts/BaseLayout.astro` — head/SEO (canonical, hreflang, OG, JSON-LD)
- `public/img/` — images (referenced as `/img/...`)

## Conventions

- **English is the source of truth for content.** German files in `de/` are synced translations — run `/sync-translations` (see `.claude/commands/`).
- **Exception:** `more/imprint.md` and `more/privacy.md` are maintained manually in both languages (legal content — never auto-translate).
- URLs are mirrored between languages; every EN page must have a DE counterpart (hreflang links assume this).
- Nav item "Design" links to `/projects/` (like the old Hugo menu).
- New events/projects: duplicate the `sample-*.md` drafts; `draft: true` hides content everywhere.
- Frontmatter is validated by Zod schemas in `src/content.config.ts` — extend schemas there when adding fields.
- CSS: use tokens from `tokens.css`, scoped styles in components, logical properties (`margin-block`, `inset-inline`).
- Git: `master` = legacy static site (docs/), `hugo` = old Hugo setup, active development on `astro` (or feature branches off it).

## Verification

Before committing: `npm run build` must pass — it validates all frontmatter and both language trees.
