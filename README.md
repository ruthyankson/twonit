# Twonit — marketing website

The public marketing/landing site for **Twonit** (twonit.com) — a
digital collaboration platform for custom work, launching first with
dressmakers/tailors and their customers in Ghana. This is a static
site, separate from the Twonit product application itself.

## Tech stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`
  — no `tailwind.config.js`; theme tokens live in `src/index.css`
  under `@theme`)
- [React Router](https://reactrouter.com/) (`BrowserRouter`) for the
  three secondary pages (`/privacy`, `/terms`, `/contact`); the home
  page itself is a single scrolling landing page, not a set of routes
- No backend, no server-side rendering — fully static output, deployed
  to GitHub Pages

## Project structure

```
src/
  content/copy.ts       # All page copy in one typed module (see CONTENT.md)
  components/           # One component per section, plus shared pieces
                         # (Nav, Footer, SectionHeading, ImagePlaceholder, icons)
  pages/                 # Home (assembles all sections) + Privacy/Terms/Contact
  App.tsx, main.tsx      # Router + app shell
public/
  images/                # Hero photo + generated favicon/OG assets
  CNAME                  # twonit.com — custom domain for GitHub Pages
  404.html               # GitHub Pages SPA-routing fallback (see below)
  robots.txt, sitemap.xml
.github/workflows/deploy.yml   # Builds and deploys to GitHub Pages on push to main
```

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Build

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serves the dist/ build locally, for a final check
```

## Deploying to GitHub Pages

This repo is already set up to deploy automatically:

1. **Create the GitHub repository** (if you haven't yet) and push this
   folder's contents to its `main` branch.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub
   Actions** (not "Deploy from a branch").
3. Push to `main` — `.github/workflows/deploy.yml` builds the site and
   publishes `dist/` automatically. You can also trigger it manually
   from the Actions tab (`workflow_dispatch`).
4. First deploy can take a minute or two to go live.

### Connecting the twonit.com custom domain

`public/CNAME` already contains `twonit.com`, so GitHub Pages will
serve the site there once DNS is pointed at GitHub. You'll need to, at
your domain registrar:

- Add an **A record** for the root domain (`twonit.com`) pointing at
  GitHub Pages' IPs (currently `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153` — double-check the current list
  at GitHub's own
  [Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
  since these can change), **or** if you want `www.twonit.com` to be
  the canonical host instead, use a **CNAME record** pointing `www` at
  `<your-github-username>.github.io`.
- In the repo's **Settings → Pages**, enter `twonit.com` as the custom
  domain and enable **Enforce HTTPS** once GitHub finishes issuing a
  certificate (can take up to 24 hours after DNS propagates).

### If you ever deploy WITHOUT the custom domain

If you ever need this at `https://<username>.github.io/<repo>/`
instead of a custom domain, two things need to change together:
`vite.config.ts`'s `base` from `'/'` to `'/<repo>/'`, and
`public/404.html`'s `pathSegmentsToKeep` from `0` to `1`. Leave both as
they are while `CNAME` is in place.

### Why there's a `404.html`

GitHub Pages has no real server, so a direct visit or a refresh on
`/privacy` (a client-side route) would 404 without help. `public/404.html`
redirects that request back to `/` with the original path encoded in
the query string, and a small script in `index.html` decodes it and
restores the real URL before React Router mounts. This is the standard
[rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages)
technique — don't remove either half without replacing the other.

## Where to replace placeholder content

- **Images**: everywhere you see `<ImagePlaceholder label="..." />` in
  a component (currently in `ForArtisans.tsx` and `ForCustomers.tsx`),
  swap it for a real `<img>` once real photography or illustration
  exists. The hero photo (`public/images/hero-collaboration.{jpg,webp}`)
  is already real — see `TODO.md` for its provenance and how to replace
  it with commissioned photography later.
- **Favicon / logo**: `public/favicon.svg` and `public/apple-touch-icon.png`
  are placeholder marks (two overlapping circles), not a designed logo.
  Replace both, and update the "Logo / wordmark treatment" section of
  `BRAND.md`, once real logo design exists.
- **Copy**: edit `src/content/copy.ts` (and mirror the change in
  `CONTENT.md`).
- **Legal pages**: `src/pages/Privacy.tsx` and `src/pages/Terms.tsx`
  are explicitly labeled drafts on the page itself. Replace with
  lawyer-reviewed copy before public launch.
- **Contact email**: `hello@twonit.com` appears in `src/content/copy.ts`
  (`pilot.fallbackEmail`) and `src/pages/Contact.tsx` — it is not a
  live inbox yet. Set it up, or replace it, before launch.

## Connecting the pilot form to a real backend later

The pilot form (`src/components/Pilot.tsx`) is fully built and
validated on the client, but intentionally does **not** claim to save
anything — see the `fallbackNote` shown on the form and after
submission. To wire it up for real, two straightforward options:

**Option A — Supabase** (the same backend the Twonit product itself
uses, so this may be the more natural fit): create a `pilot_signups`
table with columns matching the form fields (`name`, `email`, `phone`,
`country`, `city`, `role`, `why`, `created_at`), add the Supabase JS
client to this project, and replace `handleSubmit` in `Pilot.tsx` with
an `insert` call against that table using a public anon key scoped to
insert-only access on that table.

**Option B — Formspree** (zero backend code): create a form endpoint at
[formspree.io](https://formspree.io), and change the `<form>` in
`Pilot.tsx` to post to that endpoint (`action="https://formspree.io/f/..."`,
`method="POST"`), keeping the existing fields and `onSubmit` handler
for the success-state UI.

Either way, update `pilot.fallbackNote` in `src/content/copy.ts` once
submissions are actually being saved, since that copy explicitly warns
that they currently aren't.

## Quality checks already run

- `npm run build` completes clean (TypeScript strict, no errors).
- No console errors across `/`, `/privacy`, `/terms`, `/contact` in a
  headless Chromium pass (the only console entries seen in the build
  sandbox were Google Fonts requests blocked by that sandbox's network
  policy — not present in a normal deployed environment).
- Verified responsive layout at mobile (390px) and desktop (1440px)
  widths, plus the mobile nav menu open/close state.
- Verified the pilot form's fill → submit → honest "not saved yet"
  confirmation flow end-to-end.

See `TODO.md` for everything that still needs a human decision or an
external service before this is fully launch-ready.
