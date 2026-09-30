# Inventorey — marketing site

Next.js 14 (App Router) + Tailwind. Locale lives in the URL: `/en` (default) and `/sr`; `/` redirects to `/en`.

## One rename before you run it

Rename `app/-locale-/` to `app/[locale]/` — square brackets could not be written by the export.

    mv "app/-locale-" "app/[locale]"
    npm install
    npm run dev

## Where things are

- `i18n/content.ts` — every string in both languages. The only file you edit to change copy.
- `components/` — one file per section, in page order: Hero, Intro, Clients, Features, Why, Testimonial, Faq, CtaFooter.
- `components/Photo.tsx` — the photo placeholder. Put real images in `public/photos/` and pass `src` to it,
  or replace the component with `next/image` once photography is final.
- `public/shots/` — app screenshots (the small card in the hero uses `panel.png`).

## Design

Palette comes from the app itself — `ink` navy, `ground` cream, `accent` rust, `ochre` — see `tailwind.config.ts`.
Type is DM Sans. Cards are rounded 14–26px; the page has an 18px gutter on all sides.

## Before launch

- Replace every `Photo` placeholder with real photography.
- Point the CTAs at the real signup route (currently `#cta` / `#top`).
- Wire the footer subscribe field to a real form — it is presentational right now.
- Confirm the contact address and the white-label price in `i18n/content.ts`.
