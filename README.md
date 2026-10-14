# Abdul Hamid AL Bayya — Portfolio

Personal portfolio site, built with Next.js (App Router), React 19, and
Tailwind CSS v4.

## Table of contents

- [Prerequisites](#prerequisites)
- [First-time setup](#first-time-setup)
- [Running the site](#running-the-site)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Updating content](#updating-content)
- [Scripts reference](#scripts-reference)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)

## Prerequisites

- Node.js 20 or newer (built/tested with Node 24).
- npm (ships with Node). This project is not set up for yarn/pnpm/bun.

## First-time setup

```bash
# 1. Install dependencies
npm install

# 2. Create your local environment file
cp .env.example .env.local
# .env.local already defaults to http://localhost:3000, so for local
# development you usually don't need to change anything in it.

# 3. (Optional) add a profile photo — see "Updating content" below
```

## Running the site

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as
you edit files.

To check what a production build looks like locally:

```bash
npm run build
npm run start
```

## Environment variables

There's exactly one variable, `NEXT_PUBLIC_SITE_URL` — the canonical site URL
used for SEO (Open Graph tags, the `<link rel="canonical">` tag, and the
generated sitemap). It is **not** a secret and is safe to be public (it's
baked into client-visible HTML).

| File              | When it's used                                      | Loaded automatically?                                    |
| ----------------- | --------------------------------------------------- | -------------------------------------------------------- |
| `.env.example`    | Template only, committed to git                     | No — copy it manually                                    |
| `.env.local`      | `npm run dev` / `npm run build` locally             | Yes                                                      |
| `.env.production` | `npm run build` / `npm run start` (production mode) | Yes                                                      |
| `.env.sandbox`    | A staging/sandbox deployment                        | Only via `npm run dev:sandbox` / `npm run build:sandbox` |

To point the site at a real domain once you have one: edit
`NEXT_PUBLIC_SITE_URL` in `.env.production` (for local production builds) and
in your hosting provider's environment variable settings (for the actual
deployed site — see [Deployment](#deployment)).

## Project structure

```
src/
  app/            Next.js routes, layout, metadata, SEO files (sitemap, robots, icons)
  components/     UI components — one file per section/widget
  data/content.ts Single source of truth for all page text/data (see below)
public/
  projects/<slug>/  Screenshots for each project, referenced from content.ts
  resume.pdf        Linked from the nav "Resume" button
  profile-photo.*   Optional personal photo (see below)
```

## Updating content

Almost everything you'll ever need to change lives in one file:
`src/data/content.ts` — profile info, skills, experience, education, and
projects. Components under `src/components/` just render this data; you
shouldn't need to touch component code to update text.

For the detailed, step-by-step rules (adding a job/project, image ordering,
tag vs. skill conventions, naming conventions), see [HOWTO.md](./HOWTO.md).

### Skills

The Skills section is mostly derived automatically from `projects[].tags`,
not hand-maintained:

- `tagSkillCategories` maps every tag used across `projects` to the category
  it should appear under. When you add a brand-new tag to a project, add a
  one-line entry here too so it's categorized correctly.
- `additionalSkills` controls display order and adds skills not demonstrated
  by any project (e.g. `Next.js`, personal/side-project tech).
- `buildSkills()` merges the two into the exported `skills` object — don't
  edit `skills` directly, it's computed.

### Adding/editing a project

Each entry in the `projects` array (in `content.ts`) supports:

- `name`, `description`, `tags` (required)
- `frontend` / `backend` — arrays of repo or stack names shown on the card
- `link` — opens via the small arrow icon next to the project name
- `images` — array of paths under `public/projects/<slug>/`, rendered as a
  swipeable carousel with a click-to-zoom lightbox (see `ProjectGallery.tsx`)

To add a brand-new project:

1. Create a folder `public/projects/<your-project-slug>/` and drop in
   screenshots (16:9 works best, e.g. 1200×675px).
2. Add a new object to the `projects` array in `content.ts`, pointing
   `images` at those files.
3. Save — the dev server picks it up instantly.

### Profile photo (optional)

Drop a file named `profile-photo.<jpg|jpeg|png|webp|avif>` into `public/`.
`ProfilePhoto.tsx` tries each extension in order and simply hides itself (no
border, no layout gap) if none exist — no code changes needed either way.

## Testing

A small Playwright suite under `e2e/` covers the interactive bits that a
build/typecheck alone wouldn't catch: nav scrolling, the mobile menu, the
theme toggle (and its persistence), and the project gallery lightbox.

```bash
npm run test:e2e
```

This builds the app and runs it locally before testing against it (see
`playwright.config.ts`). It also runs automatically in CI
(`.github/workflows/playwright.yml`) on every push/PR targeting `develop`,
and is a required status check on that branch.

## Scripts reference

| Script                  | Purpose                                       |
| ----------------------- | --------------------------------------------- |
| `npm run dev`           | Local dev server (uses `.env.local`)          |
| `npm run build`         | Production build (uses `.env.production`)     |
| `npm run start`         | Serve a production build locally              |
| `npm run dev:sandbox`   | Dev server using `.env.sandbox` values        |
| `npm run build:sandbox` | Production build using `.env.sandbox` values  |
| `npm run lint`          | ESLint                                        |
| `npm run lint:fix`      | ESLint with autofix                           |
| `npm run typecheck`     | TypeScript check with no output               |
| `npm run clean`         | Remove `.next` (fixes stale dev-cache issues) |
| `npm run test:e2e`      | Run the Playwright end-to-end smoke tests     |

Before pushing/deploying, it's worth running all three checks:

```bash
npm run typecheck && npm run lint && npm run build
```

## Troubleshooting

**I replaced an image file but the site still shows the old one** — in dev,
`next.config.ts` disables image optimization specifically to avoid this; just
hard-refresh. If something still looks stale, run `npm run clean` and restart
the dev server.

**The dev server feels stuck / won't pick up a change** — stop it, run
`npm run clean`, then `npm run dev` again.

**TypeScript or lint errors after an edit** — run `npm run typecheck` and
`npm run lint` directly; both give more detail than what shows up in-editor.

## Deployment

Built for [Vercel](https://vercel.com) — connect the repo and it deploys on
push. Set `NEXT_PUBLIC_SITE_URL` to your real domain in the Vercel project's
environment variables once you have one. Vercel Analytics (page views, etc.)
is already wired up and activates automatically once deployed there.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
