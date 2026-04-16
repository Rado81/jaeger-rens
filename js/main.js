(function () {
  'use strict';

  // Sticky nav shadow on scroll
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });

  // Mobile menu toggle
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    var expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('active');
  });

  // Close mobile menu when a nav link is clicked
  var navAnchors = links.querySelectorAll('a');
  navAnchors.forEach(function (anchor) {
    anchor.addEventListener('click', function () {
      links.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
