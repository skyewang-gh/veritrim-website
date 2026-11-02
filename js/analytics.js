/* Veritrim site analytics.
 *
 * No-op unless a GA4 measurement ID is configured. Set it once per page:
 *   <script>window.VERITRIM_GA4_ID = "G-XXXXXXXXXX";</script>
 * With the ID empty this file loads nothing, requests nothing and sets no cookies.
 *
 * Note for Canada: GA4 sets analytics cookies. Before switching the ID on,
 * add a consent banner so the tag only fires after the visitor agrees.
 */
(function () {
  var id = String(window.VERITRIM_GA4_ID || '').trim();
  if (!id) return;
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
})();
