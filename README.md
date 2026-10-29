# reetnandy.com

Personal site of Reet Nandy, software engineer in New York.

It is a static site with no build step: plain HTML, CSS and JavaScript in `site/`.
Pushing to `main` deploys `site/` to GitHub Pages (`.github/workflows/pages.yml`).

Run it locally:

```sh
python3 -m http.server 4000 --directory site
```

The previous Next.js version is tagged `nextjs-site-2025`.
