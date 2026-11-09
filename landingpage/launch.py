# -*- coding: utf-8 -*-
"""Freischaltung der Website: noindex/nofollow deaktivieren.
Aufruf: python3 launch.py   (im Ordner landingpage/, danach commit+push)"""
import io, glob, re

# Danke-Seiten bleiben noindex (kein Suchcontent)
pages = [f for f in glob.glob('*.html') if not f.startswith('danke')]
for f in pages:
    t = io.open(f, encoding='utf-8').read()
    t = t.replace('<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">',
                  '<meta name="robots" content="index, follow">')
    io.open(f, 'w', encoding='utf-8').write(t)

# robots.txt auf Launch-Version umschalten
r = io.open('robots.txt', encoding='utf-8').read()
launch = re.search(r'# LAUNCH-VERSION.*?\n(# (?:User|Disallow|Allow|Sitemap).*?\n)+', r, re.S)
if launch:
    lines = [l[2:].strip() for l in launch.group(0).split('\n') if l.startswith('# ') and not l.startswith('# ═')]
    io.open('robots.txt', 'w', encoding='utf-8').write('# CAIO Institut — LIVE\n' + '\n'.join(lines) + '\n')
print('Freigeschaltet: ' + str(len(pages)) + ' Seiten + robots.txt. Jetzt committen und pushen.')
