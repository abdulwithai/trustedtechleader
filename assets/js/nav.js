/* Mobile menu toggle. Markup: button.nav-toggle[aria-controls=site-nav][aria-expanded] + #site-nav */
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  var header = btn.closest('.site-header');
  function set(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (header) header.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () {
    set(btn.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      set(false);
      btn.focus();
    }
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) set(false);
  });
  window.matchMedia('(min-width: 1001px)').addEventListener('change', function (m) {
    if (m.matches) set(false);
  });
})();
