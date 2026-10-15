# ASCENDANT PWA — V0.1

A real-life RPG habit and goal tracker built with React, TypeScript, Vite, and vite-plugin-pwa.

## Run locally

1. Install Node.js 20.19+ or 22.12+.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open the displayed local URL.
4. Run `npm run build` to generate production files in `dist/`.
5. Run `npm run preview` to preview the production build.

## Install on a phone

Deploy the `dist` build to an HTTPS host such as Netlify or Vercel. Open the deployed site in Chrome or Safari and choose **Install app** / **Add to Home Screen** when available. Browser install behavior varies by platform. The PWA service worker is generated in production builds.

## Data

Progress saves automatically to the browser's `localStorage`. Use **Settings → Export Save** to back up your data as JSON, and **Import Save** to restore it. Data does not automatically sync between devices. Daily quests reset at local midnight; weekly quests reset Monday. Completing a quest once per period prevents accidental repeated XP farming.

## Next steps

Cloud sync, editable rewards, character customization, and improved achievement/boss progression can be added later.
