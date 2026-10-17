(function () {
  'use strict';

  /* Demo-record card */
  var L = {
    imm: { name: 'M. Alvarez', matter: 'Family-based green card', source: 'website form', team: 'Immigration',
      steps: [['9:01 am','Captured','Website form added to the CRM'],['9:01 am','Read','I-130 receipt notice: receipt date and priority date added'],['9:03 am','Replied','First reply sent with consult times'],['9:20 am','Booked','Thu 2:00 pm with the immigration attorney'],['Thu 2:15','Recovered','Consult missed: call placed, SMS rebooking link sent']] },
    pi: { name: 'J. Okafor', matter: 'Rear-end collision', source: 'Facebook ad', team: 'Personal injury',
      steps: [['7:42 pm','Captured','Ad lead added to the CRM'],['7:42 pm','Read','Police report: date, location and insurer added'],['7:44 pm','Replied','After-hours reply with next-morning slots'],['8:05 am','Booked','Fri 10:30 am intake call'],['Fri 10:45','Recovered','No answer: call agent retried, SMS sent']] },
    fam: { name: 'R. Chen', matter: 'Custody modification', source: 'WhatsApp', team: 'Family law',
      steps: [['12:10 pm','Captured','WhatsApp message added to the CRM'],['12:10 pm','Read','Current custody order: county and case type added'],['12:12 pm','Replied','Reply on WhatsApp with booking link'],['12:31 pm','Booked','Mon 4:00 pm consultation'],['Mon 4:15','Recovered','Consult missed: SMS sent, call scheduled']] }
  };

  var demo = document.getElementById('demo');
  if (demo) {
    var tabs = Array.prototype.slice.call(demo.querySelectorAll('[role="tab"]'));
    var panel = document.getElementById('demo-panel');
    var field = function (k) { return demo.querySelector('[data-f="' + k + '"]'); };

    var el = function (tag, cls, text) {
      var n = document.createElement(tag);
      if (cls) n.className = cls;
      if (text != null) n.textContent = text;
      return n;
    };

    var show = function (key, focus) {
      var d = L[key];
      if (!d) return;
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-practice') === key;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (on) { panel.setAttribute('aria-labelledby', t.id); if (focus) t.focus(); }
      });
      ['name', 'matter', 'source', 'team'].forEach(function (k) { field(k).textContent = d[k]; });
      var ol = field('steps');
      ol.textContent = '';
      d.steps.forEach(function (s, i) {
        var li = el('li');
        li.appendChild(el('span', i === 4 ? 'dot dot--last' : 'dot'));
        li.appendChild(el('span', 't', s[0]));
        var box = el('div');
        box.appendChild(el('div', 'l', s[1]));
        box.appendChild(el('div', 'd', s[2]));
        li.appendChild(box);
        ol.appendChild(li);
      });
    };

    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(t.getAttribute('data-practice')); });
      t.addEventListener('keydown', function (e) {
        var j = -1;
        if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') j = 0;
        else if (e.key === 'End') j = tabs.length - 1;
        if (j < 0) return;
        e.preventDefault();
        show(tabs[j].getAttribute('data-practice'), true);
      });
    });
  }

  /* FAQ accordion: one open at a time */
  var items = Array.prototype.slice.call(document.querySelectorAll('.faq__item'));
  var setOpen = function (item, open) {
    var b = item.querySelector('button');
    var a = item.querySelector('.faq__a');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    a.hidden = !open;
    item.classList.toggle('is-open', open);
  };
  items.forEach(function (item) {
    item.querySelector('button').addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      items.forEach(function (o) { setOpen(o, false); });
      if (!wasOpen) setOpen(item, true);
    });
  });
})();
