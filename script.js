document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Lightbox setup
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxContent = document.getElementById('lightbox-content');
  const backdrop = lightbox ? lightbox.querySelector('[data-close]') : null;
  const images = Array.from(document.querySelectorAll('.project-grid img, .project-side img, .profile img'));

  const openLightbox = (src, alt, zoomPercent, darkBackdrop) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', alt || 'Vergrote afbeelding');
    lightbox.classList.remove('open');
    // Apply optional darker backdrop
    if (darkBackdrop) lightbox.classList.add('dark'); else lightbox.classList.remove('dark');
    lightbox.removeAttribute('hidden');
    // Wait a frame to allow initial styles to apply, then add open for transition
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
    // Default to zoomed so user can pan/scroll to view details
    if (lightboxContent) lightboxContent.classList.add('zoomed');
    lightboxImg.classList.add('zoomed');
    // Apply per-image zoom if provided (percentage number, e.g. 110)
    const parsedZoom = typeof zoomPercent === 'number' && isFinite(zoomPercent) ? zoomPercent : 110;
    lightboxImg.style.width = parsedZoom + '%';
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('open');
    // Match the CSS transition duration (250ms) with a small buffer
    setTimeout(() => lightbox && lightbox.setAttribute('hidden', ''), 260);
    lightboxImg.removeAttribute('src');
    // Reset zoom state
    lightboxImg.classList.remove('zoomed');
    lightboxContent && lightboxContent.classList.remove('zoomed');
    lightboxImg.style.width = '';
    document.body.style.overflow = '';
  };

  images.forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const full = img.getAttribute('data-fullsrc') || img.src;
      const zoomAttr = img.getAttribute('data-zoom');
      const zoom = zoomAttr ? parseFloat(zoomAttr) : undefined;
      const dark = img.hasAttribute('data-backdrop-dark');
      openLightbox(full, img.alt, zoom, dark);
    });
    img.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const full = img.getAttribute('data-fullsrc') || img.src;
        const zoomAttr = img.getAttribute('data-zoom');
        const zoom = zoomAttr ? parseFloat(zoomAttr) : undefined;
        const dark = img.hasAttribute('data-backdrop-dark');
        openLightbox(full, img.alt, zoom, dark);
      }
    });
    if (!img.hasAttribute('tabindex')) img.setAttribute('tabindex', '0');
  });

  backdrop && backdrop.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Toggle zoom on the lightbox image
  if (lightboxImg) {
    // Prevent image click from closing
    lightboxImg.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    // Keep zoom enabled on load
    lightboxImg.addEventListener('load', () => {
      lightboxImg.classList.add('zoomed');
      lightboxContent && lightboxContent.classList.add('zoomed');
    });
  }

  // Drag to pan when zoomed
  if (lightboxContent) {
    let isPanning = false;
    let startX = 0, startY = 0, scrollLeft = 0, scrollTop = 0;
    lightboxContent.addEventListener('mousedown', (e) => {
      if (!lightboxContent.classList.contains('zoomed')) return;
      isPanning = true;
      lightboxContent.classList.add('panning');
      startX = e.pageX - lightboxContent.offsetLeft;
      startY = e.pageY - lightboxContent.offsetTop;
      scrollLeft = lightboxContent.scrollLeft;
      scrollTop = lightboxContent.scrollTop;
    });
    lightboxContent.addEventListener('mouseleave', () => {
      isPanning = false; lightboxContent.classList.remove('panning');
    });
    lightboxContent.addEventListener('mouseup', () => {
      isPanning = false; lightboxContent.classList.remove('panning');
    });
    lightboxContent.addEventListener('mousemove', (e) => {
      if (!isPanning) return;
      e.preventDefault();
      const x = e.pageX - lightboxContent.offsetLeft;
      const y = e.pageY - lightboxContent.offsetTop;
      const walkX = (x - startX);
      const walkY = (y - startY);
      lightboxContent.scrollLeft = scrollLeft - walkX;
      lightboxContent.scrollTop = scrollTop - walkY;
    });
  }

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

// Minimal interactivity: hover/touch zoom (year already set in DOMContentLoaded)
(function () {

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


