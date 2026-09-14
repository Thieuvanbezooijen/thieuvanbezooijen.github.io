function initCarousel(root, opts = {}) {
  if (!root) return;

  const slides = root.classList.contains("brands-carousel")
    ? [...root.querySelectorAll(".brands-viewport .carousel-slide")]
    : [...root.querySelectorAll(".carousel-slide")];
  if (!slides.length) return;

  const dots = [...root.querySelectorAll(".carousel-dot")];
  const prev = root.querySelector(".carousel-prev");
  const next = root.querySelector(".carousel-next");
  let index = 0;
  let timer;

  function go(n) {
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function nextSlide() { go(index + 1); }

  prev?.addEventListener("click", () => go(index - 1));
  next?.addEventListener("click", nextSlide);
  dots.forEach((d, i) => d.addEventListener("click", () => go(i)));

  if (opts.autoplay) {
    const ms = opts.interval || 5000;
    const start = () => { timer = setInterval(nextSlide, ms); };
    const stop = () => clearInterval(timer);
    start();
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
  }

  go(0);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach((el) => {
    initCarousel(el, {
      autoplay: el.dataset.autoplay !== "false",
      interval: parseInt(el.dataset.interval || "5000", 10)
    });
  });

  if (typeof ICONS !== "undefined") {
    document.querySelectorAll(".carousel-prev").forEach((b) => { b.innerHTML = ICONS.chevronLeft; });
    document.querySelectorAll(".carousel-next").forEach((b) => { b.innerHTML = ICONS.chevronRight; });
  }
});
