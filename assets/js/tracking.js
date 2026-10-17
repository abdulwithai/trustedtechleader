/* Google Tag Manager loader with Consent Mode v2, a consent banner and click/lead events.
   Set GTM_ID below. Everything else (GA4, Ads, etc.) is configured inside GTM. */
(function () {
  var GTM_ID = 'GTM-XXXXXXX'; // TODO: replace with your GTM container ID
  var KEY = 'ttl_consent';
  var w = window;
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  function push(name, params) {
    var e = { event: name };
    for (var k in params) e[k] = params[k];
    w.dataLayer.push(e);
  }
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function update(granted) {
    var s = granted ? 'granted' : 'denied';
    gtag('consent', 'update', { ad_storage: s, ad_user_data: s, ad_personalization: s, analytics_storage: s });
  }

  gtag('consent', 'default', {
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    analytics_storage: 'denied', wait_for_update: 500
  });
  var saved = stored();
  if (saved) update(saved === 'granted');

  if (GTM_ID && GTM_ID.indexOf('XXXX') === -1) {
    w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
    document.head.appendChild(s);
  }

  function banner() {
    if (stored()) return;
    var b = document.createElement('div');
    b.className = 'consent-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie consent');
    b.innerHTML = '<p>We use cookies for analytics to understand how the site is used. You can accept or decline.</p>' +
      '<div class="consent-actions"><button type="button" class="btn btn-sm btn-light" data-consent="denied">Decline</button>' +
      '<button type="button" class="btn btn-sm btn-primary" data-consent="granted">Accept</button></div>';
    b.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consent]');
      if (!btn) return;
      var granted = btn.getAttribute('data-consent') === 'granted';
      store(granted ? 'granted' : 'denied');
      update(granted);
      push('consent_choice', { consent: granted ? 'granted' : 'denied' });
      b.remove();
    });
    document.body.appendChild(b);
  }

  function watch(id, attr, test, name) {
    var el = document.getElementById(id);
    if (!el) return;
    new MutationObserver(function () { if (test(el)) push(name, { page_path: location.pathname }); })
      .observe(el, { attributes: true, attributeFilter: [attr] });
  }

  document.addEventListener('DOMContentLoaded', function () {
    banner();
    // Lead: free-scan form produces the mailto and reveals #scan-ok
    watch('scan-ok', 'hidden', function (el) { return !el.hidden; }, 'generate_lead');
    // Audit tool: result panel revealed
    watch('audit-result', 'hidden', function (el) { return !el.hidden; }, 'audit_complete');
    var af = document.getElementById('audit-form');
    if (af) af.addEventListener('submit', function () { push('audit_start', { page_path: location.pathname }); });
  });

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (a.closest('#scan-ok')) return;
    if (href.indexOf('mailto:') === 0) {
      push('generate_lead', { method: 'email', link_text: (a.textContent || '').trim().slice(0, 60), page_path: location.pathname });
    } else if (/^https?:\/\//.test(href) && a.hostname !== location.hostname) {
      push('outbound_click', { link_url: href, page_path: location.pathname });
    } else if (a.classList.contains('btn')) {
      push('cta_click', { link_text: (a.textContent || '').trim().slice(0, 60), link_url: href, page_path: location.pathname });
    }
  });
})();
