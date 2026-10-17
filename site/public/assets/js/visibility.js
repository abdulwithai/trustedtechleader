/* /ai-visibility/ question grid: practice tabs rebuild the table rows and the summary. */
(function () {
  'use strict';
  var V = {
    est: { label: 'Estate planning', qs: ['Best estate planning lawyer near me for a blended family', 'Who can set up a living trust in Austin?', 'Affordable will and power of attorney attorney', 'Estate lawyer who speaks Spanish in Houston', 'Do I need a lawyer for probate in Texas?'] },
    pi: { label: 'Personal injury', qs: ['Car accident lawyer near me with good reviews', 'Who handles truck accident cases in Dallas?', 'Personal injury lawyer who works on contingency', 'Slip and fall attorney open on weekends', 'Should I talk to a lawyer after a minor crash?'] },
    imm: { label: 'Immigration', qs: ['Immigration lawyer for a spouse green card', 'Who can help with an asylum case in Houston?', 'Affordable immigration attorney that speaks Urdu', 'Lawyer for H-1B to green card transfer', 'Best place to get help with a work permit renewal'] }
  };
  var PAT = { est: ['nnwx', 'xnnx', 'wxxn', 'xxxx', 'nxnw'], pi: ['xnxx', 'nnxw', 'xxxx', 'wnxn', 'xxnx'], imm: ['nxwn', 'xxnx', 'nnnw', 'xwxx', 'xxxn'] };
  var CELL = { n: ['n', 'Named'], w: ['w', 'Wrong details'], x: ['x', 'Not named'] };

  var body = document.getElementById('grid-body');
  var panel = document.getElementById('grid-panel');
  var summary = document.getElementById('grid-summary');
  var caption = document.querySelector('.vgrid-table caption');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.vgrid-tabs [role="tab"]'));
  if (!body || !tabs.length) return;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function render(key) {
    var rows = V[key].qs;
    var named = 0;
    body.textContent = '';
    rows.forEach(function (q, i) {
      var tr = el('tr');
      var th = el('th', '', '“' + q + '”');
      th.setAttribute('scope', 'row');
      tr.appendChild(th);
      PAT[key][i].split('').forEach(function (ch) {
        if (ch !== 'x') named++;
        var c = CELL[ch];
        var td = el('td');
        var span = el('span', 'cell cell--' + c[0]);
        var sw = el('i', 'sw');
        sw.setAttribute('aria-hidden', 'true');
        span.appendChild(sw);
        span.appendChild(document.createTextNode(c[1]));
        td.appendChild(span);
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    summary.textContent = 'Example: named in ' + named + ' of 20 answers';
    if (caption) caption.textContent = 'Question grid: ' + V[key].label + '. Whether each assistant names the firm for each buying question.';
  }

  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    render(tab.getAttribute('data-practice'));
    if (focus) tab.focus();
  }

  var wrap = document.getElementById('grid-wrap');
  function hint() {
    if (!wrap) return;
    var over = panel.scrollWidth > panel.clientWidth + 1;
    wrap.classList.toggle('is-overflowing', over);
    wrap.classList.toggle('at-end', panel.scrollLeft + panel.clientWidth >= panel.scrollWidth - 2);
  }
  panel.addEventListener('scroll', hint, { passive: true });
  window.addEventListener('resize', hint);
  window.addEventListener('load', hint);
  hint();

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { select(tab, false); });
    tab.addEventListener('keydown', function (e) {
      var n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') n = tabs[0];
      else if (e.key === 'End') n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });
})();
