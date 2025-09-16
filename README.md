# Portfolio – Thieu van Bezooijen

A simple, static portfolio site with alternating project sections and a background video for the Game section.

## Quick start

- Open `index.html` directly in a browser, or serve locally:

```bash
# from repo root
python3 -m http.server 3000
# then open http://localhost:3000
```

## Structure

```
index.html        # page markup
style.css         # layout + responsive image rules
script.js         # small enhancements (footer year)
img/              # images and video assets
```

## Media

- Images are responsive via `img { max-width: 100%; height: auto; }`.
- The Game section supports a blurred background video (`.project--with-video`).
  - Place your video at `img/Showcase.mov` (or update the `src` in `index.html`).
  - Poster image: `img/game3.png`.

## Customize

- Edit content and project sections in `index.html`.
- Swap image/video sources in the `img/` folder and update paths.
- Adjust spacing/colors/typography in `style.css`.

## Deployment

- Commit and push to GitHub. If this repository is configured for GitHub Pages, the site will serve from the default branch.
