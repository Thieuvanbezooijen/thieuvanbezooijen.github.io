document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  initializeYear();
  initializeSmoothScroll();
  initializeMobileNav();
  initializeActiveLinks();
  initializeContactForm();
});

function initializeYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function initializeTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');

  const apply = (theme) => {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      toggle.textContent = '🌙';
    } else {
      root.removeAttribute('data-theme');
      toggle.textContent = '☀️';
    }
  };

  apply(stored);

  toggle?.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    if (next === 'light') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
    }
    apply(next);
  });
}

function initializeSmoothScroll() {
  const links = document.querySelectorAll('.nav-link, .btn[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = e.currentTarget;
      if (!(target instanceof HTMLAnchorElement)) return;
      const id = target.getAttribute('href');
      if (!id || !id.startsWith('#')) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      }
    });
  });
}

function initializeMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu?.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    const target = e.target;
    const clickedInside = target && (toggle?.contains(target) || menu?.contains(target));
    if (!clickedInside) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
}

function initializeActiveLinks() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        navLinks.forEach((lnk) => {
          if (!(lnk instanceof HTMLAnchorElement)) return;
          const href = lnk.getAttribute('href');
          lnk.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: [0.0, 0.25, 0.5, 0.75, 1] });

  sections.forEach((section) => observer.observe(section));
}

function initializeContactForm() {
  const form = document.getElementById('contact-form');
  if (!(form instanceof HTMLFormElement)) return;

  const status = document.getElementById('form-status');
  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorMessage = document.getElementById('error-message');

  const validators = {
    name: (value) => value.trim().length >= 2 || 'Please enter your name',
    email: (value) => /.+@.+\..+/.test(value) || 'Enter a valid email address',
    message: (value) => value.trim().length >= 10 || 'Message should be at least 10 characters',
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const nameValid = validators.name(String(data.name));
    const emailValid = validators.email(String(data.email));
    const messageValid = validators.message(String(data.message));

    errorName && (errorName.textContent = typeof nameValid === 'string' ? nameValid : '');
    errorEmail && (errorEmail.textContent = typeof emailValid === 'string' ? emailValid : '');
    errorMessage && (errorMessage.textContent = typeof messageValid === 'string' ? messageValid : '');

    const isValid = [nameValid, emailValid, messageValid].every((v) => v === true);
    if (!isValid) {
      status && (status.textContent = 'Please fix the errors above.');
      return;
    }

    status && (status.textContent = 'Sending…');

    // Simulate submit success since no backend is connected.
    await new Promise((r) => setTimeout(r, 800));
    form.reset();
    status && (status.textContent = 'Thanks! Your message has been sent.');

    setTimeout(() => {
      status && (status.textContent = '');
    }, 3000);
  });
}


