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


