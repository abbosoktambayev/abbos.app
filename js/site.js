// abbos.app — Hafiz landing interactions
(function () {
  'use strict';

  // Lucide icons
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  // Theme (dark-first; follows the system until the visitor chooses)
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  // App screenshots follow the site theme
  function syncScreens(theme) {
    document.querySelectorAll('img[data-screen]').forEach(function (img) {
      img.src = '/assets/screen-' + img.getAttribute('data-screen') + '-' + theme + '.jpg';
    });
  }

  function setTheme(theme, persist) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    syncScreens(theme);
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
  }

  syncScreens(currentTheme());

  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(currentTheme() === 'light' ? 'dark' : 'light', true);
    });
  });

  // Follow system changes while the visitor hasn't chosen explicitly
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
      var stored = null;
      try { stored = localStorage.getItem('theme'); } catch (err) {}
      if (!stored) setTheme(e.matches ? 'light' : 'dark', false);
    });
  }

  // Nav surface on scroll
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('scrolled');
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
  function show(el) { el.classList.add('in'); }
  function inView(el) {
    var r = el.getBoundingClientRect();
    var h = window.innerHeight || document.documentElement.clientHeight;
    return r.top < h * 0.92 && r.bottom > 0;
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });

    // Reveal the hero + anything already on screen immediately
    requestAnimationFrame(function () {
      reveals.forEach(function (el) {
        if (el.closest('.hero') || inView(el)) { show(el); io.unobserve(el); }
      });
    });
  } else {
    reveals.forEach(show);
  }

  // Failsafe
  window.addEventListener('load', function () {
    setTimeout(function () { reveals.forEach(function (el) { if (inView(el)) show(el); }); }, 400);
  });
})();
