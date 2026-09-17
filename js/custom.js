// naapp.pl — vanilla JS (ES2022+), no dependencies
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ---------- current year ----------
  const yearEl = document.querySelector('#displayYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- navbar: scrolled state ----------
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- mobile menu ----------
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------- active nav link on scroll ----------
  const sections = [...document.querySelectorAll('section[id], footer[id]')];
  const navAnchors = [...document.querySelectorAll('.nav-links a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navAnchors.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
      );
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => sectionObserver.observe(s));

  // ---------- hero slides: container height = tallest slide ----------
  const heroSlides = document.getElementById('hero-slides');
  const updateHeroHeight = () => {
    if (!heroSlides) return;
    const max = Math.max(
      ...[...heroSlides.children].map(slide => slide.offsetHeight), 0
    );
    heroSlides.style.minHeight = `${max}px`;
  };
  window.updateHeroHeight = updateHeroHeight;
  window.addEventListener('resize', updateHeroHeight, { passive: true });
  window.addEventListener('load', updateHeroHeight);
  updateHeroHeight();

  // ---------- scroll reveal ----------
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---------- services filter (replaces Isotope) ----------
  const filterItems = document.querySelectorAll('#filters button');
  const cards = document.querySelectorAll('#services-grid .card');

  const applyFilter = item => {
    filterItems.forEach(f => {
      f.classList.remove('active');
      f.setAttribute('aria-pressed', 'false');
    });
    item.classList.add('active');
    item.setAttribute('aria-pressed', 'true');

    const filter = item.dataset.filter;
    cards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('filtered-out', !show);
      card.classList.remove('filter-show');
      if (show) {
        // retrigger the entrance animation
        void card.offsetWidth;
        card.classList.add('filter-show');
      }
    });
  };

  filterItems.forEach(item => {
    item.addEventListener('click', () => applyFilter(item));
  });

  // ---------- contact form (mailto fallback, no backend) ----------
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Wiadomość ze strony naapp.pl — ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n---\nImię: ${name}\nTelefon: ${phone}\nEmail: ${email}`
    );
    window.location.href = `mailto:newadvanceapp@gmail.com?subject=${subject}&body=${body}`;

    if (formStatus) {
      const lang = document.documentElement.lang || 'pl';
      const dict = window.naappTranslations?.[lang];
      formStatus.textContent = dict?.form_sent
        ?? 'Dziękujemy! Otwieramy Twój program pocztowy…';
    }
  });

});
