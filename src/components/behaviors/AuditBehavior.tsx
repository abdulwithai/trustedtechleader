'use client';

import { useEffect } from 'react';

type Stage = 'Capture' | 'Read' | 'Respond' | 'Book' | 'Recover' | 'Grow';
type Severity = 'high' | 'medium' | 'low';
type Answers = Record<string, string | string[] | undefined>;
type Gap = { stage: Stage; level: string; sev: Severity };
type Finding = { stage: Stage; gap: string; fix: string; sev: Severity };
type Audit = { headline: string; findings: Finding[] };

const FIELDS = ['practice', 'channels', 'crm', 'reply', 'noshow', 'reviews'];
const STAGES: Stage[] = ['Capture', 'Read', 'Respond', 'Book', 'Recover', 'Grow'];
const DOC_PRACTICES = ['Immigration', 'Personal injury', 'Family law', 'Estate planning'];
const SEV: Record<Severity, number> = { high: 3, medium: 2, low: 1 };

// Copy for each gap, keyed by stage then level. {p} is the practice area, e.g. "immigration".
const TEXT: Record<Stage, Record<string, { gap: string; fix: string }>> = {
  Capture: {
    high: { gap: 'With no CRM, {p} inquiries live in separate inboxes and phones, so some will be missed or answered late.', fix: 'Pick one place for every lead and route each channel into it.' },
    medium: { gap: 'Only some {p} inquiries reach the CRM, so the rest depend on someone remembering to copy them over.', fix: 'Connect the remaining channels so each inquiry becomes one record.' },
  },
  Read: {
    low: { gap: 'Clients often send documents with an inquiry, and a lawyer who has not seen them goes into the first call without context.', fix: 'Have attachments summarised onto the lead record before the consult.' },
  },
  Respond: {
    high: { gap: 'A first reply that arrives the next day or later gives the lead time to contact another firm.', fix: 'Send an immediate acknowledgement with consult times, then follow up personally.' },
    unsure: { gap: 'Not knowing how fast new leads hear back means slow replies can go unnoticed.', fix: 'Log the time of first reply on each lead and review it weekly.' },
    medium: { gap: 'A same-day reply is good, but a {p} lead who is still deciding may not wait that long.', fix: 'Add an automatic first reply so the lead hears back straight away.' },
  },
  Book: {
    low: { gap: 'A consult that takes several messages to schedule can lose the lead before it reaches the calendar.', fix: 'Include a booking link in the first reply so leads can pick a time themselves.' },
  },
  Recover: {
    high: { gap: 'With nothing set up for missed consults, a {p} lead who does not show may not come back.', fix: 'Trigger a call and a text with a rebooking link as soon as a consult is missed.' },
    medium: { gap: 'One email after a missed consult is easy to overlook, and there is no second attempt.', fix: 'Add a call and a text message to the follow-up, not just email.' },
  },
  Grow: {
    medium: { gap: 'Rarely asking for reviews leaves happy {p} clients out of the places new clients look.', fix: 'Send a short review request after each good outcome.' },
    low: { gap: 'Review requests that happen only sometimes leave your online reputation uneven.', fix: 'Make the request a standard step when a matter closes.' },
    filler: { gap: 'Strong reviews help, but it is worth checking how AI assistants describe your firm when people ask them.', fix: 'Ask a few common client questions in an AI assistant and note whether your firm is named correctly.' },
  },
};

const HEADLINES = [
  'Your intake looks steady, with a few refinements to make.',
  'One part of your intake needs attention first.',
  'A couple of gaps in your intake deserve attention first.',
  'Your intake has clear gaps that are worth closing first.',
];

// Score a gap per stage from the answers.
function scoreGaps(a: Answers): Gap[] {
  const gaps: Gap[] = [];
  const add = (stage: Stage, level: string, sev: Severity) => gaps.push({ stage, level, sev });
  const many = ((a.channels as string[] | undefined) || []).length >= 4;

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

function buildAudit(a: Answers): Audit {
  const gaps = scoreGaps(a);
  const highs = gaps.filter((g) => g.sev === 'high').length;

  // Low-priority fillers (Read first for document-heavy practices), so there are always three findings.
  const practice = typeof a.practice === 'string' ? a.practice : '';
  const fillers: Stage[] = DOC_PRACTICES.includes(practice) ? ['Read', 'Book', 'Grow'] : ['Book', 'Read', 'Grow'];
  fillers.forEach((stage) => {
    if (gaps.length >= 3) return;
    if (gaps.some((g) => g.stage === stage)) return;
    gaps.push({ stage, level: stage === 'Grow' ? 'filler' : 'low', sev: 'low' });
  });

  gaps.sort((x, y) => SEV[y.sev] - SEV[x.sev] || STAGES.indexOf(x.stage) - STAGES.indexOf(y.stage));

  const p = !practice || practice === 'Other' ? 'new' : practice.toLowerCase();
  return {
    headline: HEADLINES[Math.min(highs, 3)],
    findings: gaps.slice(0, 3).map((g) => {
      const t = TEXT[g.stage][g.level];
      return { stage: g.stage, gap: t.gap.replace('{p}', p), fix: t.fix, sev: g.sev };
    }),
  };
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string | null, text?: string): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

export default function AuditBehavior() {
  useEffect(() => {
    const form = document.getElementById('audit-form') as HTMLFormElement | null;
    const runBtn = document.getElementById('audit-run') as HTMLButtonElement | null;
    const progress = document.getElementById('audit-progress');
    const result = document.getElementById('audit-result');
    if (!form || !runBtn || !progress || !result) return;
    const kicker = document.getElementById('audit-kicker');
    const headline = document.getElementById('audit-headline');
    const list = document.getElementById('audit-findings');
    const resetBtn = document.getElementById('audit-reset');
    if (!kicker || !headline || !list || !resetBtn) return;

    const answers: Answers = {};
    let loading = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const cleanups: Array<() => void> = [];
    const listen = (t: EventTarget, type: string, fn: (e: never) => void) => {
      t.addEventListener(type, fn as EventListener);
      cleanups.push(() => t.removeEventListener(type, fn as EventListener));
    };

    const isDone = (key: string) => {
      const v = answers[key];
      return Array.isArray(v) ? v.length > 0 : !!v;
    };
    const doneCount = () => FIELDS.filter(isDone).length;
    const segs = Array.from(form.querySelectorAll<HTMLElement>('.audit-meter i'));

    const update = () => {
      const n = doneCount();
      progress.textContent = loading ? 'Reading your answers…' : n + ' of ' + FIELDS.length + ' answered';
      runBtn.textContent = loading ? 'Running audit…' : 'Run my audit';
      runBtn.disabled = loading || n < FIELDS.length;
      segs.forEach((sg, i) => sg.classList.toggle('is-done', isDone(FIELDS[i])));
      if (loading) runBtn.setAttribute('aria-busy', 'true');
      else runBtn.removeAttribute('aria-busy');
    };

    form.querySelectorAll<HTMLElement>('.audit-q').forEach((fs) => {
      const key = fs.getAttribute('data-key') || '';
      const multi = fs.getAttribute('data-multi') === 'true';
      const btns = Array.from(fs.querySelectorAll<HTMLElement>('.audit-opt'));
      btns.forEach((btn) => {
        listen(btn, 'click', () => {
          if (loading) return;
          const label = btn.textContent || '';
          if (multi) {
            const cur = (answers[key] as string[] | undefined) || [];
            answers[key] = cur.includes(label) ? cur.filter((x) => x !== label) : cur.concat(label);
          } else {
            answers[key] = label;
          }
          btns.forEach((b) => {
            const v = answers[key];
            const on = multi ? (v as string[]).includes(b.textContent || '') : v === b.textContent;
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
          });
          update();
        });
      });
    });

    const render = (audit: Audit) => {
      kicker.textContent = 'Preliminary audit · ' + ((answers.practice as string) || '');
      headline.textContent = audit.headline;
      while (list.firstChild) list.removeChild(list.firstChild);
      audit.findings.forEach((f) => {
        const li = el('li', 'audit-finding audit-finding--' + f.sev);
        const tagWrap = el('div');
        tagWrap.appendChild(el('span', 'audit-tag audit-tag--' + f.sev, f.stage));
        const body = el('div');
        body.appendChild(el('p', 'audit-finding__gap', f.gap));
        const fix = el('p', 'audit-finding__fix');
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
    };

    listen(form, 'submit', (ev: Event) => {
      ev.preventDefault();
      if (loading || doneCount() < FIELDS.length) return;
      loading = true;
      update();
      const audit = buildAudit(answers);
      timer = setTimeout(() => {
        timer = undefined;
        loading = false;
        update();
        render(audit);
      }, 600);
    });

    listen(resetBtn, 'click', () => {
      result.hidden = true;
      form.hidden = false;
      update();
      const first = form.querySelector<HTMLElement>('.audit-opt[aria-pressed="true"]') || form.querySelector<HTMLElement>('.audit-opt');
      if (first) first.focus();
      window.scrollTo({ top: 0 });
    });

    update();

    return () => {
      if (timer !== undefined) clearTimeout(timer);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
