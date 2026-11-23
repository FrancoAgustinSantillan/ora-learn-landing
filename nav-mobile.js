// Menú hamburguesa del navbar (mobile). Arma el menú a partir de los links que ya tiene el navbar.
(function () {
  var nav = document.querySelector('.ora-nav');
  var pill = nav && nav.querySelector('.ora-nav-pill');
  if (!pill) return;

  var items = pill.querySelectorAll('.ora-nav-links > a, .ora-nav-links > .nav-dd, .ora-nav-actions a.nav-link');
  if (!items.length) return;

  // ── Dropdown "Industrias" (desktop) ──
  var dd = pill.querySelector('.nav-dd');
  if (dd) {
    var ddBtn = dd.querySelector('.nav-dd-btn');
    var setDd = function (open) {
      dd.classList.toggle('is-open', open);
      ddBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    if (dd.querySelector('[aria-current="page"]')) ddBtn.classList.add('is-current');
    ddBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setDd(!dd.classList.contains('is-open'));
    });
    dd.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dd.classList.contains('is-open')) { setDd(false); ddBtn.focus(); }
    });
    dd.addEventListener('focusout', function (e) {
      if (!dd.contains(e.relatedTarget)) setDd(false);
    });
    document.addEventListener('click', function (e) { if (!dd.contains(e.target)) setDd(false); });
  }

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
  function addLink(a, sub) {
    var c = document.createElement('a');
    c.href = a.getAttribute('href');
    c.textContent = a.textContent;
    if (sub) c.className = 'nav-menu-sub';
    if (a.getAttribute('aria-current')) c.setAttribute('aria-current', a.getAttribute('aria-current'));
    menu.appendChild(c);
  }
  Array.prototype.forEach.call(items, function (el) {
    if (el.classList.contains('nav-dd')) {
      var label = document.createElement('span');
      label.className = 'nav-menu-label';
      label.textContent = el.querySelector('.nav-dd-btn').textContent.trim();
      menu.appendChild(label);
      Array.prototype.forEach.call(el.querySelectorAll('.nav-dd-menu a'), function (a) { addLink(a, true); });
    } else {
      addLink(el, false);
    }
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
