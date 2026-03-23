/**
 * Main JavaScript for Pet Starter Template
 * Vanilla TypeScript - no dependencies
 */

const init = (): void => {
  initThemeToggle();
  initMobileMenu();
  initHeaderScroll();
  initScrollAnimations();
};

/**
 * Dark mode toggle
 */
const initThemeToggle = (): void => {
  const toggles = document.querySelectorAll('[data-dark-toggle]');
  if (!toggles.length) return;

  const setTheme = (dark: boolean): void => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme(true);
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(!isDark);
    });
  });
};

/**
 * Mobile menu toggle
 */
const initMobileMenu = (): void => {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Close menu when clicking a link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

/**
 * Header scroll effect
 */
const initHeaderScroll = (): void => {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const updateHeader = (): void => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
};

/**
 * Scroll-triggered animations
 */
const initScrollAnimations = (): void => {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay || '0';
          el.style.animationDelay = `${delay}ms`;
          el.classList.add('animate');
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
};

// DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export {};
