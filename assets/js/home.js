/* Home page: six-stage selector (tabs pattern). */
(function () {
  var S = [
    ['Capture', 'Website forms, WhatsApp messages and ad leads land in one CRM record, so nothing sits in a separate inbox.', 'Works with your CRM', 'We connect to the system your intake team already uses.'],
    ['Read', 'Intake attachments are read automatically and added to the record. The lawyer sees context before the call.', 'Before the first call', 'Receipts, reports and court orders summarised onto the lead.'],
    ['Respond', 'Each lead gets a fast first reply and is routed to the right practice area.', 'Routing', 'Immigration, personal injury, family law, or your own practice areas.'],
    ['Book', 'The consultation goes straight onto the right lawyer’s calendar.', 'Calendar', 'No back-and-forth over email to find a time.'],
    ['Recover', 'A missed consultation triggers a call agent and an SMS to rebook.', 'Consent first', 'Only people who contacted you, under your state’s call and text rules.'],
    ['Grow', 'Review requests after good outcomes, and a check of how AI engines describe the firm.', 'Coming next', 'The agency layer on top of the first five stages.']
  ];
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.stage-tab'));
  var panel = document.getElementById('stage-panel');
  if (!tabs.length || !panel) return;
  var body = panel.querySelector('[data-stage-body]');
  var tag = panel.querySelector('[data-stage-tag]');
  var note = panel.querySelector('[data-stage-note]');

  function select(i, focus) {
    tabs.forEach(function (t, j) {
      t.setAttribute('aria-selected', j === i ? 'true' : 'false');
      t.tabIndex = j === i ? 0 : -1;
    });
    body.textContent = S[i][1];
    tag.textContent = S[i][2];
    note.textContent = S[i][3];
    panel.setAttribute('aria-labelledby', tabs[i].id);
    if (focus) tabs[i].focus();
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(i, false); });
    t.addEventListener('keydown', function (e) {
      var n = tabs.length, k = e.key, j = -1;
      if (k === 'ArrowRight' || k === 'ArrowDown') j = (i + 1) % n;
      else if (k === 'ArrowLeft' || k === 'ArrowUp') j = (i - 1 + n) % n;
      else if (k === 'Home') j = 0;
      else if (k === 'End') j = n - 1;
      if (j < 0) return;
      e.preventDefault();
      select(j, true);
    });
  });
})();

/* Home page: hero inbox demo animation. Enhances the static markup; paused off-screen, in background tabs and with reduced motion. */
(function () {
  var inbox = document.querySelector('.inbox');
  var live = inbox && inbox.querySelector('[data-lead-slot]');
  if (!live) return;
  var LEADS = [
    ['K. Patel', 'Immigration', 'website', 'Form received'],
    ['L. Nguyen', 'Personal injury', 'whatsapp', 'After-hours WhatsApp'],
    ['D. Brooks', 'Family law', 'ads', 'Ad lead received']
  ];
  var LOOP = 18000;
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var nameEl = live.querySelector('[data-lead-name]');
  var areaEl = live.querySelector('[data-lead-area]');
  var detEl = live.querySelector('[data-lead-det]');
  var pillEl = live.querySelector('[data-lead-pill]');
  var segs = live.querySelectorAll('.seg');
  var nums = {}, base = {};
  Array.prototype.forEach.call(inbox.querySelectorAll('[data-count]'), function (n) {
    var k = n.getAttribute('data-count');
    nums[k] = n; base[k] = n.textContent;
  });
  var rows = inbox.querySelectorAll('.lead-row:not(.lead-row--live)');
  var chen = rows[2];
  var cDet = chen && chen.querySelector('.lead-row__det');
  var cPill = chen && chen.querySelector('.lead-row__pill');
  var cSeg = chen && chen.querySelectorAll('.seg')[4];
  if (!cDet || !cPill || !cSeg) return;
  var cDet0 = cDet.textContent, cPill0 = cPill.textContent, cCls0 = cPill.className;

  var lead = 0, i = 0, gen = 0, left = 600, due = 0, timer = null;
  var enabled = false, inView = true, running = false;

  // Fade out, change, fade in. Short one-shot timer, ignored if the animation was reset meanwhile.
  function swap(el, fn) {
    var g = gen;
    el.classList.add('is-out');
    setTimeout(function () {
      if (g !== gen) return;
      fn();
      el.classList.remove('is-out');
    }, 200);
  }
  function text(el, t) { swap(el, function () { el.textContent = t; }); }
  function pill(el, cls, t) { swap(el, function () { el.className = 'lead-row__pill ' + cls; el.textContent = t; }); }
  function fill(n) { for (var k = 0; k < segs.length; k++) segs[k].classList.toggle('is-fill', k < n); }
  function count(src, d) {
    var el = nums[src];
    if (el) swap(el, function () { el.textContent = String(parseInt(el.textContent, 10) + d); });
  }
  function setLead() {
    var L = LEADS[lead];
    nameEl.textContent = L[0];
    areaEl.textContent = '\u00b7 ' + L[1];
    detEl.textContent = L[3];
    pillEl.className = 'lead-row__pill pill-new';
    pillEl.textContent = 'New';
  }
  function restoreStatic() {
    var k;
    for (k in nums) { nums[k].textContent = base[k]; nums[k].classList.remove('is-out'); }
    cDet.textContent = cDet0; cPill.textContent = cPill0; cPill.className = cCls0;
    cSeg.className = 'seg is-active';
    cDet.classList.remove('is-out'); cPill.classList.remove('is-out');
  }

  var steps = [
    [0, function () { setLead(); live.classList.add('is-shown'); }],
    [700, function () { count(LEADS[lead][2], 1); fill(1); }],
    [3000, function () { text(detEl, 'Documents read'); pill(pillEl, 'pill-new', 'Read'); fill(2); }],
    [5800, function () { text(detEl, 'First reply sent'); pill(pillEl, 'pill-replied', 'Replied'); fill(3); }],
    [8600, function () { text(detEl, 'Consult booked Fri 10:00 am'); pill(pillEl, 'pill-booked', 'Booked'); fill(4); }],
    [10500, function () {
      text(cDet, 'Missed \u00b7 rebooked Mon 9:30 am');
      pill(cPill, 'pill-booked', 'Booked');
      cSeg.className = 'seg is-on';
    }],
    [15200, function () {
      live.classList.remove('is-shown');
      count(LEADS[lead][2], -1);
      text(cDet, cDet0); pill(cPill, cCls0.replace('lead-row__pill ', ''), cPill0);
      cSeg.className = 'seg is-active';
    }],
    [16600, function () { fill(0); lead = (lead + 1) % LEADS.length; }]
  ];

  function go(d) { due = Date.now() + d; timer = setTimeout(step, d); }
  function step() {
    var next;
    timer = null;
    steps[i][1]();
    next = i + 1 < steps.length ? steps[i + 1][0] : LOOP;
    var d = next - steps[i][0];
    i = (i + 1) % steps.length;
    go(d);
  }
  function update() {
    var want = enabled && inView && !document.hidden;
    if (want && !running) {
      running = true;
      inbox.classList.add('is-playing');
      go(left);
    } else if (!want && running) {
      running = false;
      inbox.classList.remove('is-playing');
      if (timer) { clearTimeout(timer); timer = null; left = Math.max(0, due - Date.now()); }
    }
  }
  function enable() {
    if (enabled) return;
    enabled = true;
    inbox.classList.add('is-live');
    update();
  }
  function disable() {
    enabled = false;
    update();
    gen++; i = 0; lead = 0; left = 600;
    live.classList.remove('is-shown');
    inbox.classList.remove('is-live');
    fill(0);
    restoreStatic();
  }
  function onMotion() { if (mq && mq.matches) disable(); else enable(); }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      inView = e[e.length - 1].isIntersecting;
      update();
    }, { threshold: 0.2 }).observe(inbox);
  }
  document.addEventListener('visibilitychange', update);
  if (mq) {
    if (mq.addEventListener) mq.addEventListener('change', onMotion);
    else if (mq.addListener) mq.addListener(onMotion);
  }
  onMotion();
})();

/* Home page: hero operations dashboard. Static markup is a complete state; this cycles events through it. Paused off-screen, in background tabs and with reduced motion. */
(function () {
  var dash = document.querySelector('.dash');
  var feed = dash && dash.querySelector('[data-feed]');
  if (!feed) return;
  var ICON = {
    New: '<svg viewBox="0 0 16 16"><circle cx="8" cy="5.5" r="2.5"/><path d="M3 13.5c.8-2.6 2.8-3.8 5-3.8s4.2 1.2 5 3.8"/></svg>',
    Signed: '<svg viewBox="0 0 16 16"><path d="M4 2.5h5.5L12 5v8.5H4z"/><path d="M6 8h4M6 10.5h3"/></svg>',
    Paid: '<svg viewBox="0 0 16 16"><rect x="2" y="4" width="12" height="8.5" rx="1.5"/><path d="M2 7h12"/></svg>',
    Done: '<svg viewBox="0 0 16 16"><path d="M4 12L12 4"/><circle cx="5" cy="5" r="1.6"/><circle cx="11" cy="11" r="1.6"/></svg>'
  };
  // [client, invoice number, amount]. Each client moves lead -> contract -> payment -> commission.
  var CLIENTS = [['Acme Travel', 1042, 4800], ['Northwind Dental', 1043, 6500], ['Harbor Logistics', 1044, 2750]];
  var BASE = { rev: 48250, deals: 23, due: 7, week: 9600, bar: 0.66 };
  var TICK = 3000, FIRST = 1600;
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var el = {};
  Array.prototype.forEach.call(dash.querySelectorAll('[data-kpi]'), function (n) { el[n.getAttribute('data-kpi')] = n; });
  var bar = dash.querySelector('[data-bar]');
  var toast = dash.querySelector('[data-toast]');
  var feed0 = feed.innerHTML, toast0 = toast.textContent;
  var v = {}, n = 0, gen = 0, timer = null, left = FIRST, due = 0;
  var enabled = false, inView = true, running = false;

  function money(x) { return '$' + String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function fmt(k) { return k === 'rev' || k === 'week' ? money(v[k]) : String(v[k]); }
  function reset() { for (var k in BASE) v[k] = BASE[k]; }

  // Fade the old value up and out, then the new one in. Ignored if the animation was reset meanwhile.
  function swap(node, fn) {
    var g = gen;
    node.classList.add('is-out');
    setTimeout(function () {
      if (g !== gen) return;
      fn();
      node.classList.remove('is-out');
    }, 200);
  }
  function set(k, d) {
    v[k] += d;
    var t = fmt(k);
    if (el[k]) swap(el[k], function () { el[k].textContent = t; });
  }
  function setBar(h) { bar.style.setProperty('--h', h); }

  // New row slides in at the top with an outline pill, which turns solid shortly after; the bottom row falls off.
  function land(name, text, st) {
    var g = gen;
    var li = document.createElement('li');
    li.className = 'feed__row is-new';
    li.innerHTML = '<span class="feed__ic">' + ICON[st] + '</span><span class="feed__tx"><b></b><span></span></span><span class="feed__st"></span>';
    li.querySelector('b').textContent = name;
    li.querySelector('.feed__tx span').textContent = text;
    li.querySelector('.feed__st').textContent = st;
    feed.insertBefore(li, feed.firstChild);
    feed.classList.remove('is-push');
    void feed.offsetWidth;
    feed.classList.add('is-push');
    var rows = feed.children;
    if (rows.length > 4) rows[rows.length - 1].classList.add('is-gone');
    setTimeout(function () {
      if (g !== gen) return;
      li.querySelector('.feed__st').classList.add('is-ok');
      while (feed.children.length > 4) feed.removeChild(feed.lastChild);
    }, 900);
  }

  function step() {
    var c = CLIENTS[Math.floor(n / 4) % CLIENTS.length], s = n % 4;
    if (n % (CLIENTS.length * 4) === 0 && v.rev !== BASE.rev) {
      // Start of a new cycle: settle the numbers back so nothing grows forever.
      reset();
      for (var k in el) set(k, 0);
      setBar(BASE.bar);
    }
    if (s === 0) { land(c[0], 'Lead captured', 'New'); set('deals', 1); }
    else if (s === 1) { land(c[0], 'Contract signed', 'Signed'); }
    else if (s === 2) {
      land(c[0], 'Invoice #' + c[1] + ' paid · ' + money(c[2]), 'Paid');
      set('rev', c[2]); set('week', c[2]); set('due', -1);
      v.bar = Math.min(0.98, v.bar + 0.1); setBar(v.bar);
      var t = money(c[2]) + ' · ' + c[0];
      swap(toast, function () { toast.textContent = t; });
    } else { land(c[0], 'Commission ' + money(Math.round(c[2] / 10)) + ' calculated', 'Done'); }
    n = (n + 1) % (CLIENTS.length * 4);
  }

  function go(d) { due = Date.now() + d; timer = setTimeout(tick, d); }
  function tick() { timer = null; step(); go(TICK); }
  function update() {
    var want = enabled && inView && !document.hidden;
    dash.classList.toggle('is-paused', !want);
    if (want && !running) {
      running = true;
      go(left);
    } else if (!want && running) {
      running = false;
      if (timer) { clearTimeout(timer); timer = null; left = Math.max(0, due - Date.now()); }
    }
  }
  function enable() {
    if (enabled) return;
    enabled = true;
    dash.classList.add('is-live');
    update();
  }
  function disable() {
    enabled = false;
    update();
    gen++; n = 0; left = FIRST;
    reset();
    feed.innerHTML = feed0;
    feed.classList.remove('is-push');
    toast.textContent = toast0;
    toast.classList.remove('is-out');
    for (var k in el) { el[k].textContent = fmt(k); el[k].classList.remove('is-out'); }
    setBar(BASE.bar);
    dash.classList.remove('is-live');
  }
  function onMotion() { if (mq && mq.matches) disable(); else enable(); }

  reset();
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      inView = e[e.length - 1].isIntersecting;
      update();
    }, { threshold: 0.2 }).observe(dash);
  }
  document.addEventListener('visibilitychange', update);
  if (mq) {
    if (mq.addEventListener) mq.addEventListener('change', onMotion);
    else if (mq.addListener) mq.addListener(onMotion);
  }
  onMotion();
})();
