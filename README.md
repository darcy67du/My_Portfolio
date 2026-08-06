# Darcy Dushime — Portfolio

A premium, dark-glassmorphism portfolio built with **Next.js 14 (App Router)**, **TypeScript**,
**Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## What's already wired up

- Live GitHub stats (contributions, top languages, streak, activity graph) for `darcy67du`
  via github-readme-stats / streak-stats / github-readme-activity-graph.
- Animated particle background + mouse glow in the hero (`components/ParticlesBackground.tsx`, `components/Hero.tsx`).
- Loading screen, custom cursor, scroll progress bar, scroll-reveal animations, dark/light toggle,
  back-to-top button, typing animation, floating tech icons, glassmorphism cards throughout.
- Full SEO metadata + Open Graph tags in `app/layout.tsx`.
- `prefers-reduced-motion` respected across all animated components.

## Before you deploy — things to personalize

1. **Resume** — add your actual PDF at `public/resume.pdf` (the "Download Resume" button already
   links to `/resume.pdf`).
2. **Project links** — in `lib/data.ts`, update each project's `github` and `demo` URLs to the
   real repo / live deployment once available. They currently point to your GitHub profile as a
   placeholder.
3. **Certifications** — replace the placeholder cards in `lib/data.ts` (`certifications` array)
   with your real certificates.
4. **Testimonials** — replace the sample quotes in `lib/data.ts` (`testimonials` array) with real
   ones as you collect them.
5. **Contact form** — already wired up via `app/api/contact/route.ts` using
   [Resend](https://resend.com). All submissions are sent to `darcydushime6@gmail.com`. To activate it:
   - Create a free account at resend.com and grab an API key.
   - Copy `.env.local.example` to `.env.local` and paste your key in as `RESEND_API_KEY`.
   - On Vercel, add the same `RESEND_API_KEY` under **Project Settings → Environment Variables**.
   - Note: without a verified sending domain, Resend's free tier only delivers to the email address
     you signed up with. Verify a domain (or use the account tied to `darcydushime6@gmail.com`) once
     you're ready to accept messages from anyone.
6. **X/Twitter + email** — update the placeholder links in `components/Contact.tsx`.
7. **Domain** — update `metadataBase` in `app/layout.tsx` once you have a real domain, for correct
   Open Graph image resolution.

## Deploying

This project deploys cleanly to **Vercel** (recommended, zero-config for Next.js):

```bash
npx vercel
```

Or connect the repo directly at vercel.com for automatic deploys on every push.
