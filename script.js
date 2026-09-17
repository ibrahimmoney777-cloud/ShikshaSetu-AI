(function () {
  'use strict';

  var demos = [
    { from: 'Hindi', to: 'Ho', input: 'Teacher explains today\'s lesson...', output: 'Translated lesson in Ho...' },
    { from: 'Hindi', to: 'Mundari', input: 'Please open your textbook...', output: 'Translated instruction in Mundari...' },
    { from: 'Ho', to: 'Hindi', input: 'Student asks a question...', output: 'Translated response for teacher...' }
  ];

  var demoIndex = 0;
  var phase = 0;
  var phases = ['input', 'processing', 'output'];

  var navbar = document.getElementById('navbar');
  var menuToggle = document.getElementById('menuToggle');
  var mobileNav = document.getElementById('mobileNav');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var backTop = document.getElementById('backTop');
  var mockDirection = document.getElementById('mockDirection');
  var mockLabel = document.getElementById('mockLabel');
  var mockText = document.getElementById('mockText');
  var stepDots = document.querySelectorAll('.step-dot');

  var sectionIds = ['home', 'solution', 'case-study', 'technology', 'impact', 'team'];

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    closeMobileMenu();
  }

  function closeMobileMenu() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-scroll');
      if (target) scrollToSection(target.replace('#', ''));
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      if (mobileNav && mobileNav.classList.contains('open')) closeMobileMenu();
      else openMobileMenu();
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  window.addEventListener('scroll', function () {
    var y = window.scrollY;

    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    if (backTop) backTop.classList.toggle('visible', y > 500);

    var current = 'home';
    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= 180) current = id;
    });

    document.querySelectorAll('.nav-links button[data-scroll]').forEach(function (btn) {
      var id = (btn.getAttribute('data-scroll') || '').replace('#', '');
      btn.classList.toggle('active', id === current);
    });
  }, { passive: true });

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  function updateMockup() {
    if (!mockText || !mockDirection) return;

    var demo = demos[demoIndex];
    var currentPhase = phases[phase];

    mockDirection.textContent = demo.from + ' \u2192 ' + demo.to;

    if (mockLabel) {
      mockLabel.textContent = currentPhase === 'output' ? 'Translated Output' : 'Voice Input';
    }

    mockText.textContent = currentPhase === 'output' ? demo.output : demo.input;

    stepDots.forEach(function (dot, i) {
      dot.classList.remove('active', 'done');
      if (i === phase) dot.classList.add('active');
      else if (i < phase) dot.classList.add('done');
    });
  }

  function tickMockup() {
    phase += 1;
    if (phase >= phases.length) {
      phase = 0;
      demoIndex = (demoIndex + 1) % demos.length;
    }
    updateMockup();
  }

  updateMockup();
  setInterval(tickMockup, 1600);

  window.dispatchEvent(new Event('scroll'));
})();
