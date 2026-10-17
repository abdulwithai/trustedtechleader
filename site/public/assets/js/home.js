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
