# Marvin Hsin Personal Page

This repository is now centered on a personal GitHub Pages portfolio. The new site lives at `/portfolio/` and replaces the old Nicepage export.

## Structure

- `index.html` redirects to `/portfolio/`.
- `portfolio/index.html` is the portfolio entry point.
- `portfolio/assets/app.js` contains the React app.
- `portfolio/assets/styles.css` contains the site styling.
- `portfolio/assets/images` and `portfolio/assets/files` contain the reused site assets.
- `src/main/java/dev/marvin/portfolio/PortfolioServer.java` is a small Java static-file server for local preview.

## Run Locally With Java

```bash
javac src/main/java/dev/marvin/portfolio/PortfolioServer.java
java -cp src/main/java dev.marvin.portfolio.PortfolioServer 8080
```

Open `http://localhost:8080/`.

## GitHub Pages

GitHub Pages can serve this directly from the repository root. The portfolio URL is `/portfolio/`. The page uses browser React bundles and does not require a Node build step.
