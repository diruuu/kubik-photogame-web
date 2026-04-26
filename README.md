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

### Custom domain

Production runs on **https://kubikplay.com**. The domain is wired through `public/CNAME` (which GitHub Pages writes to the repo's Pages settings on each deploy).

DNS at the registrar:

| Type | Host | Value |
|------|------|-------|
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |
| `CNAME` | `www` | `<github-user>.github.io.` |

### One-time setup in GitHub

1. Push the repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. **Settings → Pages → Custom domain**: enter `kubikplay.com`, save, then enable **Enforce HTTPS** once the cert is issued (a few minutes after DNS propagates).

## Stack

- React 19 + React Router v7
- Vite 8
- Tailwind v3 with the same HSL token system as the Capacitor app
- lucide-react for icons
