/* Case studies listing: category filter (progressive enhancement).
   Markup: [data-cs-filter][hidden] containing button.chip[data-filter="all" | <category-slug>][aria-pressed],
   [data-cs-count] (live text), ul[data-cs-grid] > li.cs-card[data-category], [data-cs-empty][hidden].
   Without JS the filter stays hidden and every card is shown. */
(function () {
  'use strict';
  var bar = document.querySelector('[data-cs-filter]');
  var grid = document.querySelector('[data-cs-grid]');
  if (!bar || !grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.cs-card[data-category]'));
  var chips = Array.prototype.slice.call(bar.querySelectorAll('button[data-filter]'));
  var count = bar.querySelector('[data-cs-count]');
  var empty = document.querySelector('[data-cs-empty]');
  if (!cards.length || !chips.length) return;

  var label = function (n) { return n === 1 ? '1 case study' : n + ' case studies'; };

  // Hide chips for categories with no cards, so there are no dead filters.
  chips.forEach(function (c) {
    var f = c.getAttribute('data-filter');
    if (f === 'all') return;
    var has = cards.some(function (card) { return card.getAttribute('data-category') === f; });
    if (!has) c.hidden = true;
  });

  var apply = function (filter) {
    var shown = 0;
    cards.forEach(function (card) {
      var on = filter === 'all' || card.getAttribute('data-category') === filter;
      card.hidden = !on;
      if (on) shown++;
    });
    chips.forEach(function (c) {
      c.setAttribute('aria-pressed', c.getAttribute('data-filter') === filter ? 'true' : 'false');
    });
    if (count) count.textContent = 'Showing ' + label(shown);
    if (empty) empty.hidden = shown > 0;
  };

  chips.forEach(function (c) {
    c.addEventListener('click', function () { apply(c.getAttribute('data-filter')); });
  });

  // Optional deep link: case-studies/index.html#ai-automation
  var initial = 'all';
  var hash = (window.location.hash || '').replace('#', '');
  if (hash && chips.some(function (c) { return !c.hidden && c.getAttribute('data-filter') === hash; })) initial = hash;

  bar.hidden = false;
  apply(initial);
})();
