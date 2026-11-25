#!/usr/bin/env python3
"""Regenera las tarjetas de blog: la home (3 más recientes) y blog.html (todas).

Lee los metadatos de cada blog/*.html (og:title, description, og:image,
article:section, article:published_time y el "<time> · N min" del hero) y
reemplaza lo que hay entre <!-- BLOG-LATEST:START --> y <!-- BLOG-LATEST:END -->
en index.html y en blog.html. Sin dependencias externas.
Uso: python3 scripts/build-blog.py
"""
import glob, io, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COUNT_HOME = 3
START, END = '<!-- BLOG-LATEST:START -->', '<!-- BLOG-LATEST:END -->'


def meta(html, attr, name):
    m = re.search(r'<meta\s+%s="%s"\s+content="([^"]*)"' % (attr, re.escape(name)), html)
    return m.group(1) if m else None


def read_post(path):
    html = io.open(path, encoding='utf-8').read()
    slug = os.path.splitext(os.path.basename(path))[0]
    date = meta(html, 'property', 'article:published_time')
    title = meta(html, 'property', 'og:title')
    desc = meta(html, 'name', 'description')
    image = meta(html, 'property', 'og:image')
    section = meta(html, 'property', 'article:section')
    when = re.search(r'<time datetime="[^"]*">([^<]*)</time>\s*·\s*(\d+)\s*min', html)
    if not (date and title and desc and image and section and when):
        print('AVISO: %s sin metadatos completos, se omite' % path, file=sys.stderr)
        return None
    return dict(slug=slug, date=date, title=title, desc=desc,
                image=re.sub(r'^https?://[^/]+', '', image), section=section,
                when='%s · %s min' % (when.group(1).strip(), when.group(2)))


CARD = '''      <a href="/blog/{slug}" class="blog-card">
        <img class="blog-thumb" src="{image}" alt="" loading="lazy" decoding="async">
        <div style="display:flex;flex-direction:column;gap:14px;padding:28px">
          <span style="align-self:flex-start;font-family:var(--font-body);font-size:11px;font-weight:600;letter-spacing:0.04em;color:var(--ora-deep-ocean);background:rgba(52,147,117,0.14);padding:5px 12px;border-radius:999px">{section}</span>
          <{h} style="margin:0;font-family:var(--font-display);font-weight:600;font-size:19px;line-height:1.3;letter-spacing:-0.01em;color:var(--ora-deep-ocean)">{title}</{h}>
          <p style="margin:0;font-family:var(--font-body);font-weight:300;font-size:14.5px;line-height:1.5;color:var(--text-muted)">{desc}</p>
          <span style="font-family:var(--font-body);font-size:12.5px;color:var(--text-muted)">{when}</span>
        </div>
      </a>
'''


def inject(path, cards):
    html = io.open(path, encoding='utf-8', newline='').read()
    if START not in html or END not in html:
        sys.exit('ERROR: faltan los marcadores %s / %s en %s' % (START, END, path))
    nl = '\r\n' if '\r\n' in html else '\n'
    body = nl.join(cards.split('\n'))
    pattern = re.compile(re.escape(START) + r'.*?' + re.escape(END), re.S)
    new = pattern.sub(lambda _: START + nl + body + '      ' + END, html, count=1)
    if new != html:
        io.open(path, 'w', encoding='utf-8', newline='').write(new)


def main():
    posts = [p for p in (read_post(f) for f in glob.glob(os.path.join(ROOT, 'blog', '*.html'))) if p]
    posts.sort(key=lambda p: p['date'], reverse=True)
    home = '\n'.join(CARD.format(h='h3', **p) for p in posts[:COUNT_HOME])
    index = '\n'.join(CARD.format(h='h2', **p) for p in posts)
    inject(os.path.join(ROOT, 'index.html'), home)
    inject(os.path.join(ROOT, 'blog.html'), index)
    print('Home: %s | Blog: %d artículos' % (', '.join(p['slug'] for p in posts[:COUNT_HOME]), len(posts)))


if __name__ == '__main__':
    main()
