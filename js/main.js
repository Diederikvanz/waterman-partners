// Waterman & Partners — main.js
// Mobiel menu, dynamisch jaartal, scroll-animaties. Geen externe libraries.
(function () {
  'use strict';

  // --- Mobiel menu ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });

    // Sluit menu na klik op een ankerlink
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Menu openen');
      }
    });

    // Sluit menu met Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // --- Dynamisch jaartal in footer ---
  var jaar = document.getElementById('jaar');
  if (jaar) jaar.textContent = String(new Date().getFullYear());

  // --- Contactformulier via mailto ---
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var naam = document.getElementById('naam').value;
      var email = document.getElementById('email').value;
      var onderwerp = document.getElementById('onderwerp').value || 'Bericht via website';
      var bericht = document.getElementById('bericht').value;
      var body = 'Naam: ' + naam + '\nE-mail: ' + email + '\n\n' + bericht;
      window.location.href = 'mailto:info@watermanpartners.nl'
        + '?subject=' + encodeURIComponent(onderwerp)
        + '&body=' + encodeURIComponent(body);
    });
  }

  // --- Scroll-animaties (respecteert prefers-reduced-motion via CSS) ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
