document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const gameBtn = document.querySelector('.game-btn');
  if (gameBtn && window.innerWidth <= 768) {
    gameBtn.addEventListener('click', (e) => {
      e.preventDefault();
      return false;
    });
    gameBtn.setAttribute('href', '#');
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxPdf = document.getElementById('lightbox-pdf');
  const lightboxContent = document.getElementById('lightbox-content');
  const cvLink = document.getElementById('cv-link');
  const backdrop = lightbox ? lightbox.querySelector('[data-close]') : null;
  const images = Array.from(document.querySelectorAll('.project-grid img, .project-side img, .project-grid-rcs img, .project-side-rcs img, .project-grid-branding img, .project-side-branding img, .project-grid-bold-bottom img, .project-side-bold img, .project-grid-speculative img, .profile img, .hero-img'));

  const openLightbox = (src, alt, zoomPercent, darkBackdrop) => {
    if (!lightbox || !lightboxImg) return;
    if (lightboxPdf) {
      lightboxPdf.setAttribute('hidden', '');
      lightboxPdf.removeAttribute('src');
    }
    lightboxImg.removeAttribute('hidden');
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', alt || 'Vergrote afbeelding');
    lightbox.classList.remove('open');
    if (darkBackdrop) lightbox.classList.add('dark'); else lightbox.classList.remove('dark');
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
    if (lightboxContent) lightboxContent.classList.add('zoomed');
    lightboxImg.classList.add('zoomed');
    const parsedZoom = typeof zoomPercent === 'number' && isFinite(zoomPercent) ? zoomPercent : 110;
    lightboxImg.style.width = parsedZoom + '%';
    document.body.style.overflow = 'hidden';
  };

  const openPdfLightbox = (src) => {
    if (!lightbox || !lightboxPdf || !lightboxImg) return;
    lightboxImg.setAttribute('hidden', '');
    lightboxImg.removeAttribute('src');
    lightboxImg.classList.remove('zoomed');
    lightboxContent && lightboxContent.classList.remove('zoomed');
    lightboxPdf.removeAttribute('hidden');
    lightboxPdf.setAttribute('src', src);
    lightbox.classList.remove('dark');
    lightbox.classList.remove('open');
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('open');
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('open');
    setTimeout(() => lightbox && lightbox.setAttribute('hidden', ''), 260);
    lightboxImg.removeAttribute('src');
    lightboxImg.removeAttribute('hidden');
    lightboxImg.classList.remove('zoomed');
    lightboxContent && lightboxContent.classList.remove('zoomed');
    if (lightboxPdf) {
      lightboxPdf.setAttribute('hidden', '');
      lightboxPdf.removeAttribute('src');
    }
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
  if (cvLink) {
    cvLink.addEventListener('click', (e) => {
      e.preventDefault();
      openPdfLightbox('./img/Cv.pdf');
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  if (lightboxImg) {
    lightboxImg.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    lightboxImg.addEventListener('load', () => {
      lightboxImg.classList.add('zoomed');
      lightboxContent && lightboxContent.classList.add('zoomed');
    });
  }

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

  const discursiveToggle = document.getElementById('discursive-text-toggle');
  const discursiveCollapsible = document.getElementById('discursive-text-collapsible');
  if (discursiveToggle && discursiveCollapsible) {
    discursiveToggle.addEventListener('click', () => {
      const isExpanded = discursiveToggle.getAttribute('aria-expanded') === 'true';
      discursiveToggle.setAttribute('aria-expanded', !isExpanded);
      discursiveCollapsible.classList.toggle('expanded');
    });
  }

  const scrollToTopBtn = document.getElementById('scroll-to-top');
  if (scrollToTopBtn) {
    const SCROLL_THRESHOLD = 300;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          if (scrollY > SCROLL_THRESHOLD) {
            scrollToTopBtn.removeAttribute('hidden');
          } else {
            scrollToTopBtn.setAttribute('hidden', '');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

(function () {
  const zoomables = Array.from(document.querySelectorAll('.hover-zoom'));
  zoomables.forEach(function (img) {
    img.addEventListener('touchstart', function () {
      img.classList.toggle('is-zoomed');
    }, { passive: true });

    img.addEventListener('keyup', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        img.classList.toggle('is-zoomed');
      }
    });

    if (!img.hasAttribute('tabindex')) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'img');
    }
  });
})();


