# Kubik Play — Marketing Site

Landing, privacy, and terms pages for Kubik Play. Static site built with Vite + React + TypeScript + Tailwind, deployed to GitHub Pages.

## Pages

- `/` — Landing page (hero, features, plans, download CTA)
- `/privacy` — Privacy Policy
- `/terms` — Terms & Conditions

The styling reuses the Kubik Play app's visual language: warm off-white canvas, ink-black foreground, Bricolage Grotesque + Inter Tight + JetBrains Mono. See `../kubikpass/.claude/skills/kubik-ui/` for the source of truth.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build locally
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Builds with `BASE_PATH=/<repo-name>/` (or `/` if `public/CNAME` is present for a custom domain).
2. Copies `dist/index.html` to `dist/404.html` so client-side routes (`/privacy`, `/terms`) survive a hard refresh.
3. Adds `.nojekyll` so files starting with `_` aren't ignored.
4. Uploads and deploys via the official `actions/deploy-pages` action.

### One-time setup in GitHub

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. (Optional) Add `public/CNAME` with your custom domain — the workflow will switch to base `/`.

## Stack

- React 19 + React Router v7
- Vite 8
- Tailwind v3 with the same HSL token system as the Capacitor app
- lucide-react for icons
