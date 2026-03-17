/* nav.js — Mobile navigation toggle. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!toggle || !navLinks) return;

  function openNav() {
    navLinks.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeNav() : openNav();
  });

  /* Close when a nav link is clicked (handles same-page anchor links) */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* Close when clicking outside the nav area */
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) {
      closeNav();
    }
  });
}());
