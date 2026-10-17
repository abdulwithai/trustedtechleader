(function () {
  'use strict';

  var FIELDS = ['practice', 'channels', 'crm', 'reply', 'noshow', 'reviews'];
  var STAGES = ['Capture', 'Read', 'Respond', 'Book', 'Recover', 'Grow'];
  var DOC_PRACTICES = ['Immigration', 'Personal injury', 'Family law', 'Estate planning'];
  var SEV = { high: 3, medium: 2, low: 1 };

  // Copy for each gap, keyed by stage then level. {p} is the practice area, e.g. "immigration".
  var TEXT = {
    Capture: {
      high: { gap: 'With no CRM, {p} inquiries live in separate inboxes and phones, so some will be missed or answered late.', fix: 'Pick one place for every lead and route each channel into it.' },
      medium: { gap: 'Only some {p} inquiries reach the CRM, so the rest depend on someone remembering to copy them over.', fix: 'Connect the remaining channels so each inquiry becomes one record.' }
    },
    Read: {
      low: { gap: 'Clients often send documents with an inquiry, and a lawyer who has not seen them goes into the first call without context.', fix: 'Have attachments summarised onto the lead record before the consult.' }
    },
    Respond: {
      high: { gap: 'A first reply that arrives the next day or later gives the lead time to contact another firm.', fix: 'Send an immediate acknowledgement with consult times, then follow up personally.' },
      unsure: { gap: 'Not knowing how fast new leads hear back means slow replies can go unnoticed.', fix: 'Log the time of first reply on each lead and review it weekly.' },
      medium: { gap: 'A same-day reply is good, but a {p} lead who is still deciding may not wait that long.', fix: 'Add an automatic first reply so the lead hears back straight away.' }
    },
    Book: {
      low: { gap: 'A consult that takes several messages to schedule can lose the lead before it reaches the calendar.', fix: 'Include a booking link in the first reply so leads can pick a time themselves.' }
    },
    Recover: {
      high: { gap: 'With nothing set up for missed consults, a {p} lead who does not show may not come back.', fix: 'Trigger a call and a text with a rebooking link as soon as a consult is missed.' },
      medium: { gap: 'One email after a missed consult is easy to overlook, and there is no second attempt.', fix: 'Add a call and a text message to the follow-up, not just email.' }
    },
    Grow: {
      medium: { gap: 'Rarely asking for reviews leaves happy {p} clients out of the places new clients look.', fix: 'Send a short review request after each good outcome.' },
      low: { gap: 'Review requests that happen only sometimes leave your online reputation uneven.', fix: 'Make the request a standard step when a matter closes.' },
      filler: { gap: 'Strong reviews help, but it is worth checking how AI assistants describe your firm when people ask them.', fix: 'Ask a few common client questions in an AI assistant and note whether your firm is named correctly.' }
    }
  };

  var HEADLINES = [
    'Your intake looks steady, with a few refinements to make.',
    'One part of your intake needs attention first.',
    'A couple of gaps in your intake deserve attention first.',
    'Your intake has clear gaps that are worth closing first.'
  ];

  // Score a gap per stage from the answers. Returns [{ stage, level, sev }].
  function scoreGaps(a) {
    var gaps = [];
    function add(stage, level, sev) { gaps.push({ stage: stage, level: level, sev: sev }); }
    var many = (a.channels || []).length >= 4;

    if (a.crm === 'No CRM') add('Capture', 'high', 'high');
    else if (a.crm === 'Some of them') add('Capture', 'medium', many ? 'high' : 'medium');

    if (a.reply === 'Next day or later') add('Respond', 'high', 'high');
    else if (a.reply === 'Not sure') add('Respond', 'unsure', 'high');
    else if (a.reply === 'Same day') add('Respond', 'medium', 'medium');

    if (a.noshow === 'Nothing set up') add('Recover', 'high', 'high');
    else if (a.noshow === 'One email, then nothing') add('Recover', 'medium', 'medium');

    if (a.reviews === 'Rarely') add('Grow', 'medium', 'medium');
    else if (a.reviews === 'Sometimes') add('Grow', 'low', 'low');
    return gaps;
  }

  function buildAudit(a) {
    var gaps = scoreGaps(a);
    var highs = gaps.filter(function (g) { return g.sev === 'high'; }).length;

    // Low-priority fillers (Read first for document-heavy practices), so there are always three findings.
    var docs = DOC_PRACTICES.indexOf(a.practice) >= 0;
    var fillers = docs ? ['Read', 'Book', 'Grow'] : ['Book', 'Read', 'Grow'];
    fillers.forEach(function (stage) {
      if (gaps.length >= 3) return;
      if (gaps.some(function (g) { return g.stage === stage; })) return;
      gaps.push({ stage: stage, level: stage === 'Grow' ? 'filler' : 'low', sev: 'low' });
    });

    gaps.sort(function (x, y) {
      return SEV[y.sev] - SEV[x.sev] || STAGES.indexOf(x.stage) - STAGES.indexOf(y.stage);
    });

    var p = !a.practice || a.practice === 'Other' ? 'new' : a.practice.toLowerCase();
    return {
      headline: HEADLINES[Math.min(highs, 3)],
      findings: gaps.slice(0, 3).map(function (g) {
        var t = TEXT[g.stage][g.level];
        return { stage: g.stage, gap: t.gap.replace('{p}', p), fix: t.fix };
      })
    };
  }

  if (typeof document === 'undefined') {
    if (typeof module !== 'undefined') module.exports = { buildAudit: buildAudit };
    return;
  }

  var form = document.getElementById('audit-form');
  var runBtn = document.getElementById('audit-run');
  var progress = document.getElementById('audit-progress');
  var result = document.getElementById('audit-result');
  if (!form || !runBtn || !progress || !result) return;
  var kicker = document.getElementById('audit-kicker');
  var headline = document.getElementById('audit-headline');
  var list = document.getElementById('audit-findings');
  var resetBtn = document.getElementById('audit-reset');

  var answers = {};
  var loading = false;

  function isDone(key) {
    var v = answers[key];
    return Array.isArray(v) ? v.length > 0 : !!v;
  }
  function doneCount() {
    return FIELDS.filter(isDone).length;
  }

  function update() {
    var n = doneCount();
    progress.textContent = loading ? 'Reading your answers…' : n + ' of ' + FIELDS.length + ' answered';
    runBtn.textContent = loading ? 'Running audit…' : 'Run my audit';
    runBtn.disabled = loading || n < FIELDS.length;
    if (loading) runBtn.setAttribute('aria-busy', 'true'); else runBtn.removeAttribute('aria-busy');
  }

  Array.prototype.forEach.call(form.querySelectorAll('.audit-q'), function (fs) {
    var key = fs.getAttribute('data-key');
    var multi = fs.getAttribute('data-multi') === 'true';
    var btns = Array.prototype.slice.call(fs.querySelectorAll('.audit-opt'));
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (loading) return;
        var label = btn.textContent;
        if (multi) {
          var cur = answers[key] || [];
          answers[key] = cur.indexOf(label) >= 0 ? cur.filter(function (x) { return x !== label; }) : cur.concat(label);
        } else {
          answers[key] = label;
        }
        btns.forEach(function (b) {
          var on = multi ? answers[key].indexOf(b.textContent) >= 0 : answers[key] === b.textContent;
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        update();
      });
    });
  });

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function render(audit) {
    kicker.textContent = 'Preliminary audit · ' + (answers.practice || '');
    headline.textContent = audit.headline;
    while (list.firstChild) list.removeChild(list.firstChild);
    audit.findings.forEach(function (f) {
      var li = el('li', 'audit-finding');
      var tagWrap = el('div');
      tagWrap.appendChild(el('span', 'audit-tag' + (f.stage === 'Grow' ? ' audit-tag--grow' : ''), f.stage));
      var body = el('div');
      body.appendChild(el('p', 'audit-finding__gap', f.gap));
      var fix = el('p', 'audit-finding__fix');
      fix.appendChild(el('span', null, 'First fix: '));
      fix.appendChild(document.createTextNode(f.fix));
      body.appendChild(fix);
      li.appendChild(tagWrap);
      li.appendChild(body);
      list.appendChild(li);
    });
    form.hidden = true;
    result.hidden = false;
    headline.focus();
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (loading || doneCount() < FIELDS.length) return;
    loading = true;
    update();
    var audit = buildAudit(answers);
    setTimeout(function () {
      loading = false;
      update();
      render(audit);
    }, 600);
  });

  resetBtn.addEventListener('click', function () {
    result.hidden = true;
    form.hidden = false;
    update();
    var first = form.querySelector('.audit-opt[aria-pressed="true"]') || form.querySelector('.audit-opt');
    if (first) first.focus();
    window.scrollTo({ top: 0 });
  });

  update();
})();
