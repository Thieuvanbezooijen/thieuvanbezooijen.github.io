## Portfolio Website

Basic, responsive portfolio with custom JS and CSS. Includes smooth scrolling, theme toggle, mobile menu, active section highlighting, and client-side form validation.

### Getting started

- Open `index.html` in your browser, or serve locally:

```bash
python3 -m http.server 5173
# then open http://localhost:5173
```

### Customize

- Update content in `index.html` sections: `About`, `Projects`, `Experience`, `Contact`.
- Add your links for project "Live" and "Code" buttons.
- Tweak colors and spacing via CSS variables in `assets/css/styles.css`.
- Adjust JS behavior in `assets/js/script.js` (e.g., IntersectionObserver thresholds).

### Features

- Smooth scroll for in-page links
- Theme toggle with `localStorage` persistence
- Mobile navigation with accessible toggle
- Active nav link highlighting using IntersectionObserver
- Basic contact form validation and UX feedback (no backend)

### Structure

```
index.html
assets/
  css/
    styles.css
  js/
    script.js
```


