(function () {
  'use strict';

  var QUESTIONS = {
    estate: 'Who can help my blended family create an estate plan in Dallas?',
    pi: "Who's a good car accident lawyer near me with strong reviews?",
    family: 'Who can help me modify a custody order in Houston?'
  };

  /* ---------- Walkthrough ---------- */
  var walk = document.getElementById('walk');
  if (walk) {
    var tabs = Array.prototype.slice.call(walk.querySelectorAll('[role="tab"]'));
    var panel = document.getElementById('walk-panel');
    var qEl = document.getElementById('walk-q');
    var tiles = walk.querySelectorAll('.walk__tile');
    var paths = walk.querySelectorAll('.walk__lines path');
    var node = walk.querySelector('.walk__node');
    var rows = walk.querySelectorAll('.walk__row');
    var replay = document.getElementById('walk-replay');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var timers = [];

    var clear = function () { timers.forEach(clearTimeout); timers = []; };
    var at = function (ms, fn) { timers.push(setTimeout(fn, ms)); };
    var each = function (list, fn) { Array.prototype.forEach.call(list, fn); };

    var showFinal = function () {
      walk.classList.remove('is-anim');
      walk.classList.add('q-on');
    };

    var play = function () {
      clear();
      if (reduce) { showFinal(); return; }
      walk.classList.remove('q-on');
      walk.classList.add('is-anim');
      each(tiles, function (t) { t.classList.remove('is-on'); });
      each(paths, function (p) { p.classList.remove('is-on'); });
      each(rows, function (r) { r.classList.remove('is-on'); });
      node.classList.remove('is-on');
      at(80, function () { walk.classList.add('q-on'); });
      each(tiles, function (t, i) {
        at(900 + i * 450, function () { t.classList.add('is-on'); if (paths[i]) { paths[i].classList.add('is-on'); } });
      });
      at(900 + tiles.length * 450, function () { node.classList.add('is-on'); });
      each(rows, function (r, i) {
        at(900 + tiles.length * 450 + 350 + i * 550, function () { r.classList.add('is-on'); });
      });
    };

    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      qEl.textContent = '“' + QUESTIONS[tab.getAttribute('data-q')] + '”';
      if (focus) { tab.focus(); }
      play();
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') { n = tabs[(i + 1) % tabs.length]; }
        else if (e.key === 'ArrowLeft') { n = tabs[(i - 1 + tabs.length) % tabs.length]; }
        else if (e.key === 'Home') { n = tabs[0]; }
        else if (e.key === 'End') { n = tabs[tabs.length - 1]; }
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
    if (replay) { replay.addEventListener('click', play); }
    play();
  }

  /* ---------- Request form ---------- */
  var TO = 'hello@trustedtechleader.com'; // TODO: contact email. Can be swapped for a form service such as Formspree.
  var FIELDS = [
    ['name', 'Your name'], ['firm', 'Firm name'], ['website', 'Firm website'],
    ['city', 'City and state'], ['practice', 'Main practice area'], ['email', 'Work email']
  ];

  function buildMailto(data) {
    var body = FIELDS.map(function (f) { return f[1] + ': ' + (data[f[0]] || ''); }).join('\n');
    return 'mailto:' + TO + '?subject=' + encodeURIComponent('Free AI visibility scan request') +
      '&body=' + encodeURIComponent(body);
  }
  window.ttlBuildScanMailto = buildMailto;

  var form = document.getElementById('scan-request');
  var ok = document.getElementById('scan-ok');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = {};
      FIELDS.forEach(function (f) { data[f[0]] = (form.elements[f[0]].value || '').trim(); });
      window.location.href = buildMailto(data);
      ok.hidden = false;
    });
  }
})();
