# Simi's Sweet 16

A responsive React, TypeScript, and Vite birthday experience for Simi, whose
nickname is Kateliana.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Vite writes the deployable site
to `dist/`; preview it locally with `npm run preview`.

## GitHub Pages

The repository includes a GitHub Actions workflow that builds and deploys the
site to GitHub Pages. In the repository settings, set **Pages → Build and
deployment → Source** to **GitHub Actions**. Pushes to `main` will publish the
site at `https://lwandilelwara21-beep.github.io/Simi-s-Blog/`.

## Deploy with Vercel

Import this repository into Vercel. Vercel detects Vite automatically; use:

- Build command: `npm run build`
- Output directory: `dist`

The project does not require environment variables.

## Photos and music artwork

- Add Simi's photos to `public/assets/simi/`. Update `simiImages` in
  `src/App.tsx` if you add or rename files.
- Ariana photos currently load from Wikimedia Commons. The fan section includes
  image credits, source pages, and license links. Keep those attributions if
  changing the images.
- Album covers load from Apple's public album artwork URLs and link to the
  respective Apple Music album pages. They are not bundled as local files.
- The music player is a visual playlist, not an audio player. To provide audio,
  use music you are authorized to distribute and wire it to the existing player
  controls; do not commit copyrighted audio without permission.
