// abbos.dev — interaction layer
(function () {
  'use strict';

  // Nav background appears softly on scroll
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Soft fade-up reveals
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function reveal(el) { el.classList.add('in'); }
  function inView(el) {
    var r = el.getBoundingClientRect();
    return r.top < (window.innerHeight || document.documentElement.clientHeight) * 0.92 && r.bottom > 0;
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });

    // Reveal the whole hero immediately (so short viewports never hide CTAs)
    document.querySelectorAll('.hero .reveal').forEach(function (el) { reveal(el); io.unobserve(el); });

    // Reveal anything else already on-screen at load (don't wait for a scroll tick)
    requestAnimationFrame(function () {
      reveals.forEach(function (el) { if (inView(el)) { reveal(el); io.unobserve(el); } });
    });
  } else {
    reveals.forEach(reveal);
  }

  // Failsafe: nothing stays invisible
  window.addEventListener('load', function () {
    setTimeout(function () { reveals.forEach(function (el) { if (inView(el)) reveal(el); }); }, 400);
  });
})();
