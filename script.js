document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Lightbox setup
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const backdrop = lightbox ? lightbox.querySelector('[data-close]') : null;
  const images = Array.from(document.querySelectorAll('.project-grid img, .project-side img, .profile img'));

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', alt || 'Vergrote afbeelding');
    lightbox.classList.remove('open');
    lightbox.removeAttribute('hidden');
    // Wait a frame to allow initial styles to apply, then add open for transition
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('open');
    // Match the CSS transition duration (250ms) with a small buffer
    setTimeout(() => lightbox && lightbox.setAttribute('hidden', ''), 260);
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
  };

  images.forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(img.src, img.alt);
      }
    });
    if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
  });

  backdrop && backdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Reveal-on-scroll animations
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const revealEls = Array.from(document.querySelectorAll('.reveal, .reveal-stagger'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    revealEls.forEach((el) => observer.observe(el));
  }
});

// Minimal interactivity: hover/touch zoom and current year
(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const zoomables = Array.from(document.querySelectorAll('.hover-zoom'));

  // Improve touch feedback: tap to toggle zoom
  zoomables.forEach(function (img) {
    img.addEventListener('touchstart', function () {
      img.classList.toggle('is-zoomed');
    }, { passive: true });

    img.addEventListener('keyup', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        img.classList.toggle('is-zoomed');
      }
    });

    // Make images focusable for keyboard users
    if (!img.hasAttribute('tabindex')) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'img');
    }
  });
})();


