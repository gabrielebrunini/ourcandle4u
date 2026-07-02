# OurCandle4U

A trilingual landing page (EN/DE/IT) for GoMore car renters who scan a QR code on a handmade candle.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — locale is auto-detected from your browser language.

## Deploy to Vercel (free)

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Deploy — you'll get a free `*.vercel.app` subdomain
4. Point your QR code to the deployed URL (e.g. `https://ourcandle4u.vercel.app`)
5. Later: add custom domain `ourcandle4u.com` in Vercel project settings

## Replace placeholder images

Swap these files in `public/images/` with your real photos:

- `couple-placeholder.svg` → your photo (keep same filename or update components)
- `candle-placeholder.svg` → candle photo

## Tech stack

- Next.js 16 (App Router)
- TypeScript + Tailwind CSS
- next-intl (auto-detect locale from phone/browser)
