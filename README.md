# Inventorey — marketing site

Next.js 14 (App Router) + Tailwind. Locale lives in the URL: `/en` (default) and `/sr`; `/` redirects to `/en`.

## One rename before you run it

Rename `app/-locale-/` to `app/[locale]/` — square brackets could not be written by the export.

    mv "app/-locale-" "app/[locale]"
    npm install
    npm run dev

## Where things are

- `i18n/content.ts` — every string in both languages. The only file you edit to change copy.
- `components/` — one file per section, in page order: Hero, Intro, Features, Why, Roles, Faq, CtaFooter.
- `components/Photo.tsx` — cover-fit image; photos live in `public/photos/`.
- `public/shots/` — app screenshots (the small card in the hero uses `panel.png`).

## Design

Palette comes from the app itself — `ink` navy, `ground` cream, `accent` rust, `ochre` — see `tailwind.config.ts`.
Type is DM Sans. Cards are rounded 14–26px; the page has an 18px gutter on all sides.

## Before launch

The app is still in development, so every CTA is "Get early access" and scrolls to the signup
form in the footer (`components/Signup.tsx`). The form posts to `app/api/subscribe`, which emails
the signup to `MAIL_TO` and sends the subscriber a confirmation over SMTP. Copy `.env.example`
to `.env.local` and fill in the SMTP settings. The site makes no claims about customers, usage
numbers, offline mode or a free trial — keep it that way until they are true.

- Move SMTP, `MAIL_FROM`, `MAIL_TO` and `contactEmail` to the inventorey domain once it is bought
  (currently a temporary wanderway.rs mailbox).
- Signups only live in the `MAIL_TO` inbox. Move them to a real list (database or a newsletter
  service with double opt-in and unsubscribe) before sending any newsletter.
- Add a Privacy page — the form collects email addresses.
- Upgrade Next.js: 14.2.5 has known security advisories.
