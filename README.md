# Reusable Local Business Landing Page

Modern, high-converting landing page template for outreach demos and quick client customization.

Built with:

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder Structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    landing/
      before-after.tsx
      cta-form.tsx
      features.tsx
      footer.tsx
      hero.tsx
      landing-page.tsx
      navbar.tsx
      portfolio.tsx
      section-title.tsx
      social-proof.tsx
      whatsapp-float.tsx
  data/
    landing-config.ts
  types/
    landing.ts
```

## Quick Customization

Edit `src/data/landing-config.ts` to quickly adapt for any niche:

- All text copy
- Placeholder testimonials and business names
- Portfolio images and labels
- CTA labels
- Contact info
- Theme presets (restaurant / salon / gym)
- WhatsApp number (`whatsappNumber`)

## Included Features

- Fully responsive, mobile-first layout
- Smooth scroll navigation
- Premium cards, soft shadows, rounded UI
- Reusable component-based sections
- Framer Motion reveal animations
- Simple lead form UI (frontend only)
- Floating WhatsApp button linking to configured number

## Notes

- Remote images are configured for Unsplash in `next.config.ts`.
- Replace any placeholder links (`#`) with real URLs when you deploy.

## Deploy on GitHub Pages

This project is now configured for GitHub Pages static hosting:

- `next.config.ts` uses static export (`output: "export"`).
- Base path is auto-detected in GitHub Actions using repository name.
- Workflow file is at `.github/workflows/deploy-pages.yml`.

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. Go to repository **Settings** -> **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Ensure your default deployment branch is `main` (or update workflow trigger branch).

### Deploy

Every push to `main` will:

1. Build the Next.js app
2. Export static files to `out/`
3. Deploy to GitHub Pages

Your live URL will be:

`https://<your-github-username>.github.io/<your-repo-name>/`
