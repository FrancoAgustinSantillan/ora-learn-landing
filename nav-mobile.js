// Menú hamburguesa del navbar (mobile). Arma el menú a partir de los links que ya tiene el navbar.
(function () {
  var nav = document.querySelector('.ora-nav');
  var pill = nav && nav.querySelector('.ora-nav-pill');
  if (!pill) return;

  var links = pill.querySelectorAll('.ora-nav-links a, .ora-nav-actions a.nav-link');
  if (!links.length) return;

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Abrir menú');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'nav-menu');
  btn.innerHTML = '<span></span><span></span><span></span>';

  var menu = document.createElement('nav');
  menu.id = 'nav-menu';
  menu.className = 'nav-menu';
  menu.setAttribute('aria-label', 'Menú');
  links.forEach(function (a) {
    var c = document.createElement('a');
    c.href = a.getAttribute('href');
    c.textContent = a.textContent;
    if (a.getAttribute('aria-current')) c.setAttribute('aria-current', a.getAttribute('aria-current'));
    menu.appendChild(c);
  });

  var logo = pill.firstElementChild;
  pill.insertBefore(btn, logo.nextSibling);
  nav.appendChild(menu);

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!menu.classList.contains('is-open'));
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setOpen(false); btn.focus(); }
  });
  window.matchMedia('(min-width:769px)').addEventListener('change', function (e) { if (e.matches) setOpen(false); });
})();
