# -*- coding: utf-8 -*-
"""
HTML→JSX-Migrationshelfer für die CAIO-Website.
Liest die bestehenden landingpage-HTML-Dateien und erzeugt app/**/page.tsx
mit PageLayout, Metadaten, JSON-LD und konvertiertem Body-JSX.
Interaktive Blöcke werden durch Komponenten-Platzhalter ersetzt.
"""
import io
import os
import re

SRC = "../landingpage"
DST = "app"

PAGES = [
    # (quelle, zielpfad, ort, home, adStyle, minimal)
    ("index.html", "page.tsx", "Start", True, False, False),
    ("buch.html", "buch/page.tsx", "Das Handbuch", False, False, False),
    ("berufsbild.html", "berufsbild/page.tsx", "Berufsbild", False, False, False),
    ("ueber-uns.html", "ueber-uns/page.tsx", "Über uns", False, False, False),
    ("glossar.html", "glossar/page.tsx", "Glossar", False, False, False),
    ("direktbeauftragung.html", "direktbeauftragung/page.tsx", "Direktbeauftragung", False, False, False),
    ("angebot-a.html", "angebot-a/page.tsx", "Angebot", False, True, False),
    ("angebot-b.html", "angebot-b/page.tsx", "Angebot", False, True, False),
    ("widerruf.html", "widerruf/page.tsx", "Widerrufsbelehrung", False, False, True),
    ("agb.html", "agb/page.tsx", "AGB", False, False, True),
    ("verbraucherinformationen.html", "verbraucherinformationen/page.tsx", "Verbraucherinformationen", False, False, True),
    ("impressum.html", "impressum/page.tsx", "Impressum", False, False, True),
    ("datenschutz.html", "datenschutz/page.tsx", "Datenschutz", False, False, True),
    ("danke/index.html", "danke/page.tsx", "Danke", False, False, True),
    ("danke/buch/index.html", "danke/buch/page.tsx", "Danke", False, False, True),
]

SVG_ATTRS = {
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    "srcset": "srcSet",
    "fetchpriority": "fetchPriority",
    "tabindex": "tabIndex",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "autocomplete": "autoComplete",
    "maxlength": "maxLength",
}


def find_block(html, start_idx):
    """HTML-Block ab start_idx (Position eines öffnenden <div) bis zum
    passenden schließenden </div> finden (div-Zähler)."""
    depth = 0
    i = start_idx
    n = len(html)
    while i < n:
        m = re.compile(r"<(/?)div\b[^>]*?(/?)>").search(html, i)
        if not m:
            break
        if m.group(1) == "/":
            depth -= 1
        elif m.group(2) != "/":
            depth += 1
        i = m.end()
        if depth == 0:
            return i
    return -1


def replace_block(html, pattern, replacement):
    """Ersten Block, der mit pattern beginnt, komplett (bis passendem
    schließendem Tag) ersetzen."""
    m = re.search(pattern, html)
    if not m:
        return html, False
    end = find_block(html, m.start())
    if end < 0:
        return html, False
    return html[: m.start()] + replacement + html[end:], True


def style_to_obj(match):
    inner = match.group(1).strip().rstrip(";")
    if not inner:
        return "style={{}}"
    parts = []
    for decl in inner.split(";"):
        if ":" not in decl:
            continue
        prop, val = decl.split(":", 1)
        prop = prop.strip()
        words = prop.split("-")
        prop = words[0] + "".join(w.capitalize() for w in words[1:])
        val = val.strip().replace("'", "\\'")
        parts.append(f"{prop}: '{val}'")
    return "style={{" + ", ".join(parts) + "}}"


def html_to_jsx(html):
    out = html
    # Kommentare
    out = re.sub(r"<!--(.*?)-->", lambda m: "{/*" + m.group(1) + "*/}", out, flags=re.S)
    # Attribute
    out = re.sub(r"\bclass=", "className=", out)
    out = re.sub(r"\bfor=", "htmlFor=", out)
    for a, b in SVG_ATTRS.items():
        out = re.sub(r"\b" + a + "=", b + "=", out)
    # style="..." → style={{...}}
    out = re.sub(r'style="([^"]*)"', style_to_obj, out)
    # void-Tags selbst schließen
    out = re.sub(r"<(img|input|br|hr|source|col|wbr)\b([^>]*?)>", r"<\1\2 />", out)
    # Asset-Pfade
    out = out.replace('src="assets/', 'src="/').replace('href="assets/', 'href="/')
    out = out.replace('src="../assets/', 'src="/').replace('href="../assets/', 'href="/')
    out = out.replace('srcset="assets/', 'srcSet="/').replace('srcset="../assets/', 'srcSet="/')
    return out


def extract_meta(html, key):
    m = re.search(r'<meta name="%s" content="([^"]*)"' % key, html)
    return m.group(1) if m else ""


def extract_title(html):
    m = re.search(r"<title>([^<]*)</title>", html)
    t = m.group(1) if m else ""
    t = t.replace(" | CAIO Institut", "").replace(" – CAIO Institut", "").strip()
    return t


def main():
    os.makedirs(DST, exist_ok=True)
    for src, dst, ort, home, ad, minimal in PAGES:
        raw = io.open(os.path.join(SRC, src), encoding="utf-8").read()

        # JSON-LD-Blöcke
        ld_blocks = re.findall(
            r'<script type="application/ld\+json">\s*(\{.*?\})\s*</script>', raw, re.S
        )

        # Main-Content bestimmen
        if "</nav>" in raw:
            body = raw.split("</nav>", 1)[1]
        elif "</header>" in raw:
            body = raw.split("</header>", 1)[1]
        else:
            body = re.split(r"<body[^>]*>", raw, 1)[1]
        body = body.split("<footer", 1)[0]
        body = body.split("<script", 1)[0]
        body = body.split("</body>", 1)[0]
        # Seiten-eigene main-Wrapper entfernen (PageLayout liefert <main>)
        body = re.sub(r"^\s*<main[^>]*>", "", body)
        body = re.sub(r"</main>\s*$", "", body)

        hat_formular = False

        # Quiz-Karton (index): <div class="mt-6 bg-white rounded-2xl shadow-card p-6"> … </div>
        if 'id="quiz"' in body:
            body, ok = replace_block(
                body,
                r'<div className="mt-6 bg-white rounded-2xl shadow-card p-6">',
                "{COMP:Selbsttest}",
            )
            # (replace_block matcht auf Original: Muster noch mit class=
            # → deshalb vor html_to_jsx mit class= suchen)
        if 'class="mt-6 bg-white rounded-2xl shadow-card p-6"' in body and "{COMP:Selbsttest}" not in body:
            body, ok = replace_block(
                body,
                r'<div class="mt-6 bg-white rounded-2xl shadow-card p-6">',
                "{COMP:Selbsttest}",
            )

        # Formulare ersetzen (vor Konvertierung, Original-Markup)
        for fid, comp in [
            ('id="kontakt"', "{COMP:KontaktForm}"),
            ('id="buch-form"', "{COMP:OrderForm}"),
            ('id="bestell-form"', "{COMP:OrderForm}"),
            ('id="projekt-form"', "{COMP:ProjectForm}"),
            ('id="ergebnis-form"', "{COMP:ErgebnisFormLeer}"),
        ]:
            pat = r"<form [^>]*" + re.escape(fid) + r"[^>]*>.*?</form>"
            if re.search(pat, body, re.S):
                hat_formular = True
                if comp == "{COMP:ErgebnisFormLeer}":
                    continue  # steckt im Selbsttest-Karton
                body = re.sub(pat, comp, body, flags=re.S)

        # Sticky-CTA (index)
        if 'id="sticky"' in body:
            body, _ = replace_block(r'<div id="sticky"', body, "{COMP:StickyCta}") if False else (
                replace_block(body, r'<div id="sticky"', "{COMP:StickyCta}")
            )

        jsx = html_to_jsx(body)

        # data-count-to → CountUp
        def countup(m):
            attrs, label = m.group(1), m.group(2)
            to = re.search(r'data-count-to="(\d+)"', attrs)
            pre = re.search(r'data-prefix="([^"]*)"', attrs)
            suf = re.search(r'data-suffix="([^"]*)"', attrs)
            if not to:
                return m.group(0)
            params = f'to={{{to.group(1)}}}'
            if pre:
                params += f' prefix="{pre.group(1)}"'
            if suf:
                params += f' suffix="{suf.group(1)}"'
            cls = re.search(r'className="([^"]*)"', attrs)
            c = f' className="{cls.group(1)}"' if cls else ""
            return f"<span{c}><CountUp {params} /></span>{label}"

        jsx = re.sub(
            r"<p([^>]*data-count-to[^>]*)>([^<]*)</p>", countup, jsx
        )

        # Platzhalter in echte JSX-Tags
        jsx = jsx.replace("{COMP:Selbsttest}", "<Selbsttest />")
        jsx = jsx.replace("{COMP:KontaktForm}", "<KontaktForm />")
        jsx = jsx.replace("{COMP:OrderForm}", "<OrderForm />")
        jsx = jsx.replace("{COMP:ProjectForm}", "<ProjectForm />")
        jsx = jsx.replace("{COMP:StickyCta}", "<StickyCta />")

        # Imports zusammenstellen
        comps = ["PageLayout"]
        used = {
            "<Selbsttest />": 'import Selbsttest from "@/components/Selbsttest";',
            "<KontaktForm />": 'import { KontaktForm } from "@/components/Forms";',
            "<OrderForm />": 'import { OrderForm } from "@/components/Forms";',
            "<ProjectForm />": 'import { ProjectForm } from "@/components/Forms";',
            "<StickyCta />": 'import StickyCta from "@/components/StickyCta";',
            "<CountUp ": 'import CountUp from "@/components/CountUp";',
            "<AiBubble />": 'import AiBubble from "@/components/AiBubble";',
        }
        imports = []
        for needle, imp in used.items():
            if needle in jsx:
                imports.append(imp)
        # AiBubble auf Content-Seiten wie zuvor
        if not ad and "danke" not in dst and dst != "page.tsx" and any(
            x in dst for x in ["buch", "berufsbild", "ueber-uns", "glossar", "direktbeauftragung"]
        ):
            jsx = jsx.rstrip() + "\n      <AiBubble />\n"
            imports.append('import AiBubble from "@/components/AiBubble";')
        if dst == "page.tsx":
            jsx = jsx.rstrip() + "\n      <AiBubble />\n"
            imports.append('import AiBubble from "@/components/AiBubble";')

        title = extract_title(raw)
        desc = extract_meta(raw, "description")

        meta_lines = []
        if title:
            meta_lines.append(f'    title: "{title}",')
        if desc:
            meta_lines.append(f'    description: "{desc}",')

        ld_render = ""
        if ld_blocks:
            import json as _json
            script_tags = "\n".join(
                '      <script\n        type="application/ld+json"\n'
                "        dangerouslySetInnerHTML={{ __html: "
                + _json.dumps(_json.loads(re.sub(r"\s+", " ", b)))
                + " }}\n      />"
                for b in ld_blocks
            )
            ld_render = "\n" + script_tags + "\n"

        b_home = "true" if home else "false"
        b_ad = "true" if ad else "false"
        b_min = "true" if minimal else "false"
        b_alt = "true" if hat_formular else "false"

        tsx = f"""import type {{ Metadata }} from "next";
import PageLayout from "@/components/PageLayout";
{chr(10).join(sorted(set(imports)))}

export const metadata: Metadata = {{
{chr(10).join(meta_lines)}
}};

export default function Page() {{
  return (
    <PageLayout ort="{ort}" home={{{b_home}}} adStyle={{{b_ad}}} minimal={{{b_min}}} altcha={{{b_alt}}}>
{ld_render}      <>
{jsx}
      </>
    </PageLayout>
  );
}}
"""
        path = os.path.join(DST, dst)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        io.open(path, "w", encoding="utf-8").write(tsx)
        print(f"  ✔ {src} → {dst} ({len(jsx)//1024} KB JSX, Formular={hat_formular}, LD={len(ld_blocks)})")


if __name__ == "__main__":
    main()
