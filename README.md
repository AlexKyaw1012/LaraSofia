# Lara Sofia Portfolio

A modern, premium dark-themed portfolio website designed for a tech founder profile.

## Stack

- HTML5
- CSS3 (responsive layout + transitions)
- Vanilla JavaScript (parallax, reveal animations, mobile nav, form UX)

## Local development

Open `index.html` directly in your browser, or run a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── assets
│   ├── css/styles.css
│   └── js/main.js
├── index.html
└── README.md
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push to GitHub.
2. In the repo settings, go to **Pages**.
3. Set **Build and deployment** source to **GitHub Actions**.
4. Push to `main` branch to trigger deployment.

Your site will publish to:

- `https://<username>.github.io/<repo>/` for project pages
- `https://<username>.github.io/` for user/organization pages
