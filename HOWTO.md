# HOWTO — Updating site content

Practical, step-by-step rules for manually adding/editing/removing data in
`src/data/content.ts`. For a general project overview (setup, scripts,
deployment) see [README.md](./README.md). For AI-agent-specific conventions
(code style, testing requirements, etc.) see [AGENTS.md](./AGENTS.md) — this
file focuses only on the "how do I add a record" rules.

## Table of contents

- [Adding a new job (Experience)](#adding-a-new-job-experience)
- [Adding a new project](#adding-a-new-project)
- [Project images — ordering rules](#project-images--ordering-rules)
- [Project tags — what belongs here vs. Skills](#project-tags--what-belongs-here-vs-skills)
- [The Skills section — how it's built](#the-skills-section--how-its-built)
- [Naming conventions for tags/skills](#naming-conventions-for-tagsskills)
- [Adding an education entry](#adding-an-education-entry)

## Adding a new job (Experience)

Add a new object to the `experience` array in `content.ts` (most recent
first). Fields:

```ts
{
  role: string;
  company: string;        // include "— City, Country" in the string itself
  period: string;         // e.g. "Jan 2024 - Present"
  highlights: string[];   // bullet points, most impactful first
  link?: string;          // company website
  remote?: boolean;       // set true only if the role was actually remote
}
```

`remote` renders a small "Remote" badge next to the period in
`Experience.tsx`. Only set it when you genuinely worked remotely for that
role — don't infer it from the company's location alone (e.g. a Sydney-based
company can still have been a remote role for you).

## Adding a new project

1. Create `public/projects/<slug>/` and drop in screenshots (16:9 works
   best, e.g. 1200×675px). Filenames don't need to follow any particular
   scheme — see [image ordering rules](#project-images--ordering-rules)
   below for how display order actually works.
2. Add a new object to the `projects` array in `content.ts`:

```ts
{
  name: string;
  description: string;
  tags: string[];        // required — see rules below
  frontend?: string[];   // internal repo/stack names, optional
  backend?: string[];    // internal repo/stack names, optional
  link?: string;
  images?: string[];     // paths under /projects/<slug>/
}
```

3. Save — the dev server picks it up instantly.

## Project images — ordering rules

**Display order = array order, not filename.** `ProjectGallery.tsx` renders
images in exactly the order they're listed in the `images` array — the `-1`,
`-2`, `-3` suffixes in filenames are just for your own reference on disk and
carry no meaning to the site.

To insert a forgotten screenshot (e.g. a login page) at the front:

- **Quick way:** drop the new file in with any name, then add its path as
  the **first** entry in that project's `images` array. No need to touch
  existing files.
- **Tidier way (optional):** if you want the folder listing to visually
  match the site's order too, rename files so the numbering matches their
  intended position, then update the array to match. Purely cosmetic —
  not required for the site to work correctly.

## Project tags — what belongs here vs. Skills

Project `tags` should be things that **differentiate that specific project**
from your others. Before adding a tag, ask: *"if every one of my projects
had this tag, would it still be useful information?"*

- If **yes** (it only applies to some projects) → add it as a project tag.
  Example: `CI/CD` is on 7 of 10 projects — it genuinely distinguishes
  modern pipelines from legacy ones.
- If **no** (it would apply to basically everything) → don't add it as a
  project tag. Add it to `additionalSkills` in the Skills section instead.
  Example: `GitHub`/`GitLab` used to be on every single project (100%
  coverage, zero differentiation) and were removed from project tags for
  exactly this reason — they're still shown generally under Skills →
  Version Control.

Generic role/soft-skill terms (`Team Work`, `Software Engineer`, `Web
Development`, etc.) shouldn't be added anywhere as tags/skills — they're
role descriptors, not verifiable skills, and are already conveyed by your
job titles and `profile.about`.

## The Skills section — how it's built

`skills` is **computed**, not hand-written. Don't edit the exported
`skills` object directly — it's generated at the bottom of `content.ts` by
`buildSkills()` from two inputs:

- **`tagSkillCategories`** — maps every tag used across `projects` to the
  Skills category it belongs in (e.g. `"Cypress": "Testing"`). When you add
  a brand-new tag to a project, add a one-line entry here too so it
  surfaces in the Skills section automatically.
- **`additionalSkills`** — a curated, per-category list used for two
  purposes: (1) controlling display order, and (2) adding skills that
  aren't demonstrated by any project tag (e.g. `Next.js`, `MongoDB`,
  `Terraform`, or anything in "Personal Learning & Side Projects").

If a skill is genuinely demonstrated by a shipped project, prefer adding it
via a project tag + `tagSkillCategories` entry (so it's "proven") over just
adding it to `additionalSkills`.

### Adding a brand-new category

To add a category that doesn't exist yet (e.g. "Operating Systems"), you
need to touch three spots in `content.ts`:

1. Add the category name to the `SkillCategory` union type.
2. Add it to `skillCategoryOrder` (controls where it renders on the page).
3. Add its skills to `additionalSkills` (or map project tags to it via
   `tagSkillCategories`, if applicable).

### "Personal Learning & Side Projects" category

Use this category for self-taught/hobby skills you haven't used
professionally (learned from a course, a weekend project, etc.) — don't mix
these into the professional categories, since those should reflect skills
backed by actual project work.

## Naming conventions for tags/skills

Use the official/canonical product name, not a nickname or shorthand, e.g.:

- `Go`, not `Golang`
- `Ruby on Rails`, not `Rails`
- `Spring Boot`, not `SpringBoot`/`Springboot`
- `PostHog`, not `PostHog Analytics`

When a tag could be read as redundant with another (e.g. `Apollo Client` vs
`Apollo GraphQL`), pick one rather than listing both.

## Adding an education entry

Add a new object to the `education` array:

```ts
{
  degree: string;
  institution: string;
  period: string;
  link: string;
}
```
