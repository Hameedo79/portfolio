<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Package manager: npm only (no yarn/pnpm/bun). Don't add other lockfiles.
- Before considering any change done, run:
  `npm run typecheck && npm run lint && npm run build`
- All page content (profile, skills, experience, education, projects) lives in
  `src/data/content.ts`. Prefer editing that file over hardcoding text in
  components.
- Project screenshots go in `public/projects/<slug>/`, referenced via the
  `images: string[]` field on a project in `content.ts`. Rendered by
  `ProjectGallery.tsx` (carousel + click-to-zoom lightbox).
- `profile.photo` is a base path with no extension (e.g. `/profile-photo`);
  `ProfilePhoto.tsx` tries `.jpg/.jpeg/.png/.webp/.avif` in order and renders
  nothing if none exist. Don't hardcode an extension in `content.ts`.
- `frontend`/`backend` on a `Project` are `string[]` (joined with `, ` at
  render time), consistent with `tags` — keep that shape when adding entries.
- Light/dark theme uses CSS variables in `globals.css` + a `data-theme`
  attribute on `<html>`, set by a `beforeInteractive` inline script in
  `layout.tsx` to avoid a flash of the wrong theme. Don't reintroduce
  `prefers-color-scheme`-only theming — dark is the explicit default.
- For any state that must be read synchronously from a client-only API on
  first render (e.g. `localStorage`, `document.documentElement`), use
  `useSyncExternalStore`, not `useEffect` + `useState`. The latter trips the
  `react-hooks/set-state-in-effect` ESLint rule and causes a visible flash on
  mount. See `ThemeToggle.tsx` for the pattern.
- Respect `prefers-reduced-motion` on any new animation (existing pattern:
  `motion-reduce:transition-none` / a JS `matchMedia` check — see
  `Reveal.tsx`, `PageLoader.tsx`, `ProjectGallery.tsx`).
- Every `target="_blank"` link must include `rel="noreferrer"`.
- All `next/image` usages with `fill` must include a `sizes` prop.
- In dev, `next.config.ts` sets `images.unoptimized: true` specifically so
  that overwriting a `public/` image with the same filename shows up on a
  normal refresh, without restarting the dev server. Don't remove this.
- `NEXT_PUBLIC_SITE_URL` is the only env var; it's public (used for SEO/OG
  tags), never a secret. `.env.local`/`.env.production` are auto-loaded by
  Next; `.env.sandbox` is not — only the `dev:sandbox`/`build:sandbox` scripts
  load it explicitly.
