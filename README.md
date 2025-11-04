# PreviewAgent3 (GitHub Pages)

A clean GitHub‑only version of your prototype. **No backend required.**

## Local Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a new GitHub repo (for example **previewagent3**) and upload these files.
2. Go to **Settings → Pages**. Set **Source** to **GitHub Actions**.
3. Push to `main`. The included workflow sets `GITHUB_PAGES=true` so Vite uses the correct base path automatically.
4. Your site will appear at `https://<your-username>.github.io/<your-repo>/`.