# The River House

Guest guide for The River House — a modern luxury cabin on the Cowlitz River in Packwood, WA.

**Live site:** [larsolm.github.io/river-house](https://larsolm.github.io/river-house/)

## Stack

- Vite + React 18 + TypeScript
- Mantine v7 (components + theming)
- Tabler Icons
- CSS Modules

## Development

```bash
npm install
npm run dev        # dev server at localhost:5173
npm run build      # production build → dist/
npm run preview    # preview build locally
```

## Updating content

All guest-facing text lives in [`src/content/`](src/content/):

| File             | What it controls                                              |
| ---------------- | ------------------------------------------------------------- |
| `property.ts`    | Property name, tagline, wifi credentials, address, Airbnb URL |
| `welcome.ts`     | Welcome section prose                                         |
| `amenities.ts`   | Amenity cards (title, icon, instructions)                     |
| `checklist.ts`   | Checkout checklist items                                      |
| `activities.ts`  | Local activities list                                         |
| `restaurants.ts` | Restaurant listings (name, phone, description)                |
| `navigation.ts`  | Nav item labels and tooltips                                  |

## Adding photos

Drop new images into `src/assets/images/` and import them in the relevant component. Current images:

- `cover.jpg` — hero image (replace with your best exterior/river shot)
- `air.jpg` — used in the Activities section

## Deploy

Deployment is automatic: push to `main` and GitHub Actions builds and deploys.

**One-time setup required** — in your GitHub repo settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
3. Save. The next push to `main` will deploy automatically.

The site is served at `https://larsolm.github.io/river-house/`.
