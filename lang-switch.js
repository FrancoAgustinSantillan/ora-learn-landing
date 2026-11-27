// Botón de idioma. Se arma solo con los <link rel="alternate" hreflang="..."> del <head>:
// si la página tiene versión en otro idioma, muestra un link a esa versión; si no, no muestra nada.
// Es un <a href> real (rastreable por buscadores), no un botón con JavaScript.
(function () {
  var LANGS = {
    es: { code: 'ES', name: 'Español', label: 'Ver esta página en español' },
    en: { code: 'EN', name: 'English', label: 'View this page in English' }
  };
  var GLOBE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z"/></svg>';

  function current() {
    return (document.documentElement.lang || 'es').toLowerCase().split('-')[0];
  }

  function find() {
    var cur = current();
    var links = document.querySelectorAll('link[rel="alternate"][hreflang]');
    for (var i = 0; i < links.length; i++) {
      var l = (links[i].getAttribute('hreflang') || '').toLowerCase().split('-')[0];
      if (l !== cur && LANGS[l] && links[i].getAttribute('href')) {
        var href = links[i].getAttribute('href');
        try { // en previews y local el link debe quedarse en el mismo sitio
          var u = new URL(href, location.href);
          if (u.hostname === 'ora-learn.com' || u.hostname === 'www.ora-learn.com') href = u.pathname + u.search + u.hash;
        } catch (e) {}
        return { lang: l, href: href };
      }
    }
    return null;
  }

  function position(a) {
    // Debajo del navbar (que es sticky): usa su alto real.
    var nav = document.querySelector('.ora-nav');
    if (!nav) return;
    var bottom = nav.getBoundingClientRect().bottom;
    var top = nav.offsetHeight ? nav.offsetHeight - 10 : bottom - 10;
    a.style.setProperty('--lang-switch-top', Math.max(top, 56) + 'px');
  }

  function init() {
    if (document.querySelector('.lang-switch')) return;
    var alt = find();
    if (!alt) return;
    var L = LANGS[alt.lang];
    var a = document.createElement('a');
    a.className = 'lang-switch';
    a.href = alt.href;
    a.setAttribute('hreflang', alt.lang);
    a.setAttribute('lang', alt.lang);
    a.setAttribute('aria-label', L.label);
    a.setAttribute('title', L.name);
    a.innerHTML = GLOBE + '<span>' + L.code + '</span>';
    a.addEventListener('click', function () {
      try { localStorage.setItem('ora-lang', alt.lang); } catch (e) {}
    });
    document.body.appendChild(a);
    position(a);
    window.addEventListener('resize', function () { position(a); });
    // El navbar de la home se dibuja después (runtime): reajustar cuando aparece o cambia.
    var tries = 0;
    var t = setInterval(function () { position(a); if (++tries > 20) clearInterval(t); }, 250);
    if (window.ResizeObserver) {
      var nav = document.querySelector('.ora-nav');
      if (nav) new ResizeObserver(function () { position(a); }).observe(nav);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  // Si el navbar/body se vuelve a dibujar, el botón sigue siendo hijo de <body> y no se pierde.
  window.addEventListener('load', init);
})();
