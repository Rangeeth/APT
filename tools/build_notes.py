#!/usr/bin/env python3
"""Build the "Lecture notes" section of the site (notes/).

Usage (from the repo root):
  python3 tools/build_notes.py --src "<path to the Notes folder>"        # copy sources + build pages
  python3 tools/build_notes.py --build-only                               # only regenerate the HTML pages

Source layout (the Notes folder):
  <NN - Lecture name>/<Lecture name> - Detailed Notes.md, ... - Study Notes.md, diagrams/, board/
  Podcast/<Topic>/<Topic> Podcast - Part N - <title>.mp3 and "... - Transcript.txt"

Site layout produced:
  notes/index.html                              all topics
  notes/<topic>/index.html                      topic page (lectures + podcast)
  notes/<topic>/<lecture>/detailed-notes.(md|html), study-notes.(md|html), diagrams/, board/
  notes/<topic>/podcast/index.html + part-N.mp3 + part-N.vtt + podcast.json + transcript.txt

To add a topic or lecture, add it to TOPICS below and re-run. Pandoc and ffmpeg must be installed.
"""
import argparse, html, json, os, re, shutil, subprocess, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOTES = os.path.join(ROOT, 'notes')

DISCLAIMER = ('Study notes written from the lecture recording and the course slides. They may contain mistakes: '
              'check the &ldquo;Points to Confirm&rdquo; section and verify against the official course material.')

TOPICS = [
    dict(slug='cardio-regulations', title='Cardio Regulations', podcast_dir='Cardio Regulations',
         blurb='Cardio and endurance, classifying aerobic activities, blood circulation, workload, intensity, target heart rate and the Karvonen method, monitoring and training methods.',
         lectures=[
             dict(slug='lecture-1', src='38 - Cardio Regulations 1', prefix='Cardio Regulations 1', title='Cardio Regulations 1',
                  desc='Endurance and cross training, classifying aerobic activities, blood circulation, key terms, workload, long-term benefits.'),
             dict(slug='lecture-2', src='39 - Cardio Regulations 2', prefix='Cardio Regulations 2', title='Cardio Regulations 2',
                  desc='Intensity, the six factors, target heart rate, heart rate monitors, estimating intensity, training methods.'),
         ]),
    dict(slug='fitness-testing', title='Fitness Testing', podcast_dir='Fitness Testing',
         blurb='Why and how we test: health screening, order of tests, blood pressure, body composition methods, cardio, strength, muscular endurance and flexibility tests.',
         lectures=[
             dict(slug='lecture-1', src='40 - Fitness Testing 1', prefix='Fitness Testing 1', title='Fitness Testing 1',
                  desc='Objectives, health screening, order of tests, blood pressure, anthropometry, skinfold, BIA and the Bod Pod.'),
             dict(slug='lecture-2', src='41 - Fitness Testing 2', prefix='Fitness Testing 2', title='Fitness Testing 2',
                  desc='Underwater weighing, DEXA, cardiorespiratory, strength, muscular endurance and flexibility tests.'),
         ]),
    dict(slug='scheduling', title='Scheduling', podcast_dir='Scheduling',
         blurb='Building a programme: frequency and rest days, macro and micro programming, the four pillars (FIT), workout splits, stimulus per set, retention, hypertrophy and atrophy.',
         lectures=[
             dict(slug='lecture-1', src='42 - Scheduling 1', prefix='Scheduling 1', title='Scheduling 1',
                  desc='What scheduling is, objectives, macro and micro programming, fundamentals, the four pillars (FIT).'),
             dict(slug='lecture-2', src='43 - Scheduling 2', prefix='Scheduling 2', title='Scheduling 2',
                  desc='The master table, workout splits, stimulus per set and retention, hypertrophy and atrophy, ideal set ranges, sample programs.',
                  pending='The recording of this lecture ended early (power cut). The last topics (the PPL and bro split samples and the closing summary) are marked as pending in the notes and will be completed after the next lecture.'),
         ]),
]

# Every lecture in the order of the course. (title, topic slug, lecture slug) once its notes exist.
COURSE = [
    ('Rules and Regulations',), ('Intro to Fitness 1',), ('Intro to Fitness 2',),
    ('Anatomy & Physiology 1',), ('Anatomy & Physiology 2',), ('Anatomy & Physiology 3',),
    ('Anatomy & Physiology 4',), ('Anatomy & Physiology 5',), ('Kinesiology 1',), ('Kinesiology 2',),
    ('Basic Nutrition',), ('Body Composition 1',), ('Body Composition 2',), ('Body Composition 3',),
    ('Supplementation',), ('Intro to Workload',), ('Intro to Intensity',), ('Training Techniques',),
    ('Resistance Profile',), ('Classification of Exercises and Tools',),
    ('Intro to K11 Selection Criteria of Exercises',), ('Stretching 1',), ('Stretching 2',), ('Unit Test 1',),
    ('Back Lecture',), ('Back Demo',), ('Legs Lecture',), ('Legs Demo 1',), ('Legs Demo 2',),
    ('Chest Shoulder Lecture',), ('Chest Shoulder Demo',), ('Abs Lecture',), ('Abs Demo',),
    ('Arms & Arms Demo',), ('Unit Test 2',),
    ('Cardio Regulations 1', 'cardio-regulations', 'lecture-1'), ('Cardio Regulations 2', 'cardio-regulations', 'lecture-2'),
    ('Fitness Testing 1', 'fitness-testing', 'lecture-1'), ('Fitness Testing 2', 'fitness-testing', 'lecture-2'),
    ('Scheduling 1', 'scheduling', 'lecture-1'), ('Scheduling 2', 'scheduling', 'lecture-2'),
    ('Unit Test 3',), ('Understanding Special Population & Professional Boundaries',),
    ('Motivation, Adherence, Health & Safety in Gym Environment',), ('Understanding Assessment Criteria',),
    ("Principal's Address",), ('Others',),
]

# Web audio settings. 32 kbps mono is clear for two voices and about half the size of 64 kbps.
AUDIO_KBPS = 32
AUDIO_RATE = 22050

SEARCH = []   # filled while the pages are built, written to assets/search-index.json

# ---------------------------------------------------------------- helpers

def e(s):
    return html.escape(s, quote=True)

def read(p):
    with open(p, encoding='utf8') as f:
        return f.read()

def write(p, s):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf8', newline='\n') as f:
        f.write(s)

def strip_tags(s):
    return html.unescape(re.sub(r'<[^>]+>', '', s)).strip()

def fmt_min(sec):
    return '%d min' % round(sec / 60)

THEME_INIT = ("<script>(function(){try{var t=localStorage.getItem('theme');"
              "if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()</script>")

def page(title, body, depth, crumbs, extra_head='', extra_body='', body_class=''):
    """depth = number of folders below notes/ (notes/index.html -> 0)."""
    up = '../' * depth
    site = up + '../'
    crumb_html = ''.join(
        ('<span class="sep">/</span><a href="%s">%s</a>' % (e(h), e(t))) if h else
        ('<span class="sep">/</span><span class="cur">%s</span>' % e(t)) for t, h in crumbs)
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title>
{THEME_INIT}
<link rel="stylesheet" href="{up}assets/notes.css">
{extra_head}
</head><body class="{body_class}">
<header class="top"><div class="topin">
<nav class="crumbs" aria-label="Breadcrumb"><a href="{site}index.html">Muscle table</a><span class="sep">/</span><a href="{up}index.html">Lecture notes</a>{crumb_html}</nav>
<div class="search"><input id="q" type="search" placeholder="Search notes and podcasts  ( / )" aria-label="Search all notes and podcasts" autocomplete="off" spellcheck="false"><div id="sr" class="sr" role="listbox" hidden></div></div>
<button class="themebtn" id="th" type="button" aria-label="Switch between dark and light theme"></button>
</div></header>
{body}
<footer class="foot">Study material prepared for revision. Verify against the official course material.</footer>
<script src="{up}assets/notes.js"></script>
{extra_body}
</body></html>
'''

# ---------------------------------------------------------------- markdown -> html

def pandoc(md_path):
    r = subprocess.run(['pandoc', '-f', 'gfm', '-t', 'html5', '--wrap=none', md_path],
                       capture_output=True, text=True, encoding='utf8')
    if r.returncode:
        sys.exit('pandoc failed for %s: %s' % (md_path, r.stderr))
    return r.stdout

def render_notes(md_path):
    """returns (title, body_html, toc_html)"""
    h = pandoc(md_path)
    m = re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S)
    title = strip_tags(m.group(1)) if m else os.path.basename(md_path)
    if m:
        h = h[:m.start()] + h[m.end():]
    # tables scroll on small screens
    h = h.replace('<table>', '<div class="tw"><table>').replace('</table>', '</table></div>')
    # lone images become figures that open a zoom view
    def fig(mm):
        src, alt = mm.group(1), html.unescape(mm.group(2))
        cap = e(alt)
        return ('<figure><a class="zoom" href="%s" data-cap="%s"><img src="%s" alt="%s" loading="lazy"></a>'
                '<figcaption>%s</figcaption></figure>' % (src, cap, src, cap, cap))
    h = re.sub(r'<p><img src="([^"]+)" alt="([^"]*)"\s*/?></p>', fig, h)
    # anchors on headings
    heads = []
    for hm in re.finditer(r'<h([1-3]) id="([^"]+)">(.*?)</h\1>', h, re.S):
        heads.append((int(hm.group(1)), hm.group(2), strip_tags(hm.group(3))))
    # Detailed notes use one h1 per Part (sub-items are the h2s). Study notes have only a couple of
    # h1s, so there the h1s and h2s are the main items and the h3s sit underneath.
    n_h1 = sum(1 for l, _, _ in heads if l == 1)
    if n_h1 >= 4:
        tops, sub = {1}, 2
    else:
        tops, sub = {1, 2}, 3
    items, curr = [], None
    for l, i, t in heads:
        if l in tops:
            curr = dict(id=i, t=t, kids=[])
            items.append(curr)
        elif l == sub and curr is not None:
            curr['kids'].append((i, t))
    toc = ['<ul class="toc">']
    for it in items:
        toc.append('<li><a href="#%s">%s</a>' % (it['id'], e(it['t'])))
        if it['kids']:
            toc.append('<ul>' + ''.join('<li><a href="#%s">%s</a></li>' % (i, e(t)) for i, t in it['kids']) + '</ul>')
        toc.append('</li>')
    toc.append('</ul>')
    return title, h, '\n'.join(toc)

def plain(s):
    s = re.sub(r'</(p|li|tr|h[1-6]|blockquote|figcaption)>', ' ', s)
    s = re.sub(r'</t[dh]>', ' | ', s)
    return re.sub(r'\s+', ' ', strip_tags(s)).strip()

def index_sections(h, url, lec_title, kind):
    """Split rendered notes into one search entry per heading (h1-h3)."""
    parts = re.split(r'(<h[1-3] id="[^"]+">.*?</h[1-3]>)', h, flags=re.S)
    intro = plain(parts[0])
    if len(intro) > 30:
        SEARCH.append(dict(u=url, t='Introduction', p='', l=lec_title, k=kind, x=intro[:4000]))
    parent = ''
    for i in range(1, len(parts), 2):
        hm = re.match(r'<h([1-3]) id="([^"]+)">(.*?)</h\1>', parts[i], re.S)
        lvl, hid, title = int(hm.group(1)), hm.group(2), strip_tags(hm.group(3))
        if lvl == 1:
            parent = title
        body = plain(parts[i + 1]) if i + 1 < len(parts) else ''
        SEARCH.append(dict(u='%s#%s' % (url, hid), t=title, p=parent if lvl > 1 else '', l=lec_title, k=kind, x=body[:4000]))

def tabs(depth_up, active, lec, topic):
    d, s = ('detailed-notes', 'study-notes')
    def tab(key, label, href):
        return '<a class="tab%s" href="%s"%s>%s</a>' % (' on' if active == key else '', href, ' aria-current="page"' if active == key else '', label)
    return ('<nav class="tabs" aria-label="This lecture">' +
            tab('d', 'Detailed notes', d + '.html') + tab('s', 'Study notes', s + '.html') +
            '<a class="tab dl" href="%s.md">Markdown</a>' % (d if active == 'd' else s) +
            '<a class="tab pod" href="../podcast/index.html">Podcast</a></nav>')

def build_lecture_pages(topic, lec):
    base = os.path.join(NOTES, topic['slug'], lec['slug'])
    for key, kind, label in (('d', 'detailed-notes', 'Detailed notes'), ('s', 'study-notes', 'Study notes')):
        md = os.path.join(base, kind + '.md')
        if not os.path.exists(md):
            continue
        title, body, toc = render_notes(md)
        index_sections(body, '%s/%s/%s.html' % (topic['slug'], lec['slug'], kind), lec['title'], key)
        pending = ''
        if lec.get('pending'):
            pending = '<div class="note warn" role="note"><strong>Incomplete:</strong> %s</div>' % e(lec['pending'])
        other = 'study-notes.html' if key == 'd' else 'detailed-notes.html'
        otherlabel = 'Study notes (short revision version)' if key == 'd' else 'Detailed notes (full explanations)'
        content = f'''
<div class="layout">
<aside class="side" id="side" aria-label="Contents"><div class="sidein">
<div class="sidehd">Contents</div>
{toc}
<div class="sidelinks"><a href="{other}">{otherlabel}</a><a href="../podcast/index.html">Listen: {e(topic['title'])} podcast</a></div>
</div></aside>
<main class="doc" id="doc">
<div class="dochead"><div class="eyebrow">{e(topic['title'])} &middot; {e(lec['title'])}</div>
<h1>{e(title)}</h1>
{tabs(0, key, lec, topic)}
<div class="note" role="note">{DISCLAIMER}</div>{pending}</div>
<button class="tocbtn" id="tocbtn" type="button" aria-controls="side" aria-expanded="false">Contents</button>
<article class="md">
{body}
</article>
<nav class="pager"><a href="../index.html">&larr; {e(topic['title'])}</a><a href="{other}">{otherlabel} &rarr;</a></nav>
</main></div>
'''
        write(os.path.join(base, kind + '.html'),
              page('%s | %s' % (title, 'Lecture notes'), content, 2,
                   [(topic['title'], '../index.html'), (lec['title'], None)], body_class='notespage'))

# ---------------------------------------------------------------- podcast page

_ACR = re.compile(r'\b(?:[A-Z] ){1,5}[A-Z0-9]\b')

def tidy(s):
    """Titles are written with spaced letters for the voices ('B I A'); show them as acronyms."""
    return _ACR.sub(lambda m: {'VO2': 'VO\u2082'}.get(m.group(0).replace(' ', ''), m.group(0).replace(' ', '')), s)

def load_podcast(topic):
    p = os.path.join(NOTES, topic['slug'], 'podcast', 'podcast.json')
    if os.path.exists(p):
        pod = json.load(open(p, encoding='utf8'))
        for part in pod['parts']:
            part['title'] = tidy(part['title'])
            for c in part['chapters']:
                c['n'] = tidy(c['n'])
        return pod
    return None

def build_podcast_page(topic):
    pod = load_podcast(topic)
    if not pod:
        return
    # real durations of the web mp3s
    for part in pod['parts']:
        f = os.path.join(NOTES, topic['slug'], 'podcast', part['file'])
        if os.path.exists(f):
            r = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f],
                               capture_output=True, text=True)
            try:
                part['dur'] = round(float(r.stdout.strip()), 1)
            except ValueError:
                pass
    json.dump(pod, open(os.path.join(NOTES, topic['slug'], 'podcast', 'podcast.json'), 'w', encoding='utf8'),
              ensure_ascii=False, separators=(',', ':'))
    data = json.dumps(pod, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    pending = ''
    for lec in topic['lectures']:
        if lec.get('pending'):
            pending = '<div class="note warn" role="note"><strong>Incomplete:</strong> the Scheduling 2 lecture ended early, so this podcast covers it as recorded. It will be extended when the rest is added.</div>'
    for part in pod['parts']:
        ch = part['chapters']
        for ci, c in enumerate(ch):
            t1 = ch[ci + 1]['t'] if ci + 1 < len(ch) else 1e9
            txt = ' '.join(q['x'] for q in part['cues'] if c['t'] - 0.05 <= q['t'] < t1 - 0.05)
            SEARCH.append(dict(u='%s/podcast/index.html#p%d&t=%d' % (topic['slug'], part['n'], int(c['t'])),
                               t=c['n'], p='Part %d: %s' % (part['n'], part['title']), l=topic['title'] + ' podcast', k='p', x=txt[:4000]))
    total = sum(p['dur'] for p in pod['parts'])
    body = f'''
<main class="pod">
<div class="dochead"><div class="eyebrow">{e(topic['title'])} &middot; Revision podcast</div>
<h1>{e(topic['title'])} podcast</h1>
<p class="lead">{len(pod['parts'])} parts, about {fmt_min(total)} in total. Maya explains and Dev asks the questions you would ask. Subtitles follow the audio; tap any line in the transcript to jump to it.</p>
{pending}</div>
<div class="podgrid">
<section class="player" id="player" aria-label="Audio player">
<div class="pl-title"><div class="pl-part" id="plpart"></div><div class="pl-name" id="plname"></div></div>
<div class="cap" id="cap" aria-live="off"><span class="cap-empty">Press play to start. Subtitles appear here.</span></div>
<div class="seekrow"><span id="tcur" class="tm">0:00</span><input id="seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Seek"><span id="tdur" class="tm">0:00</span></div>
<div class="ctrls">
<button class="cb" id="prev" type="button" aria-label="Previous part" title="Previous part"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12l8.5 6V6z"/></svg></button>
<button class="cb" id="back" type="button" aria-label="Back 15 seconds" title="Back 15 s"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg><span>15</span></button>
<button class="cb play" id="play" type="button" aria-label="Play" title="Play / pause (space)"></button>
<button class="cb" id="fwd" type="button" aria-label="Forward 15 seconds" title="Forward 15 s"><span>15</span><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg></button>
<button class="cb" id="next" type="button" aria-label="Next part" title="Next part"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg></button>
</div>
<div class="opts">
<label class="opt">Speed <select id="spd" aria-label="Playback speed"><option>0.75</option><option selected>1</option><option>1.25</option><option>1.5</option><option>1.75</option><option>2</option></select></label>
<button class="chipb" id="subs" type="button" aria-pressed="true">Subtitles</button>
<span class="sz" role="group" aria-label="Subtitle size"><button class="chipb" id="szm" type="button" aria-label="Smaller subtitles">A&minus;</button><button class="chipb" id="szp" type="button" aria-label="Larger subtitles">A+</button></span>
<button class="chipb" id="auto" type="button" aria-pressed="true" title="Play the next part automatically">Auto-next</button>
<a class="chipb" id="dlmp3" href="#" download>MP3</a><a class="chipb" id="dlvtt" href="#" download>Captions (.vtt)</a>
</div>
<audio id="aud" preload="metadata"><track id="trk" kind="subtitles" srclang="en" label="English" default></audio>
</section>
<aside class="partlist" aria-label="Parts"><div class="sidehd">Parts</div><ol id="parts"></ol>
<div class="sidelinks"><a href="transcript.txt">Full transcript (.txt)</a></div></aside>
<section class="tscript" aria-label="Transcript">
<div class="tshd"><h2>Transcript</h2><button class="chipb" id="follow" type="button" aria-pressed="true" title="Scroll the transcript with the audio">Follow audio</button></div>
<div id="chaps" class="chaps" aria-label="Chapters"></div>
<div id="ts" class="ts"></div>
</section>
</div>
<nav class="pager"><a href="../index.html">&larr; {e(topic['title'])}</a><span></span></nav>
</main>
<script>window.PODCAST={data};</script>
'''
    write(os.path.join(NOTES, topic['slug'], 'podcast', 'index.html'),
          page('%s podcast | Lecture notes' % topic['title'], body, 2,
               [(topic['title'], '../index.html'), ('Podcast', None)],
               extra_body='<script src="../../assets/player.js"></script>', body_class='podpage'))

# ---------------------------------------------------------------- topic + index pages

def lecture_links(lec):
    return ('<a class="chipl" href="%s/detailed-notes.html">Detailed notes</a>'
            '<a class="chipl" href="%s/study-notes.html">Study notes</a>'
            ) % ((lec['slug'],) * 2)

def build_topic_page(topic):
    pod = load_podcast(topic)
    cards = []
    for lec in topic['lectures']:
        pend = '<div class="note warn small"><strong>Incomplete:</strong> %s</div>' % e(lec['pending']) if lec.get('pending') else ''
        cards.append(f'''<article class="card"><h3>{e(lec['title'])}</h3><p>{e(lec['desc'])}</p>
<div class="chips">{lecture_links(lec)}</div>{pend}</article>''')
    podcard = ''
    if pod:
        total = sum(p['dur'] for p in pod['parts'])
        rows = ''.join('<li><a href="podcast/index.html#p%d">%s</a><span class="mut">%s</span></li>' % (p['n'], e(p['title']), fmt_min(p['dur'])) for p in pod['parts'])
        podcard = f'''<section class="card podcard"><h2>Podcast</h2>
<p>{len(pod['parts'])} parts, about {fmt_min(total)}. Subtitles and a clickable transcript.</p>
<div class="chips"><a class="chipl primary" href="podcast/index.html">Open the player</a></div>
<ol class="plist">{rows}</ol></section>'''
    body = f'''<main class="home">
<div class="dochead"><div class="eyebrow">Lecture notes</div><h1>{e(topic['title'])}</h1><p class="lead">{e(topic['blurb'])}</p>
<div class="note" role="note">{DISCLAIMER}</div></div>
<h2 class="sec">Lectures</h2><div class="cards">{''.join(cards)}</div>
{podcard}
</main>'''
    write(os.path.join(NOTES, topic['slug'], 'index.html'),
          page('%s | Lecture notes' % topic['title'], body, 1, [(topic['title'], None)]))

def build_index():
    cards = []
    for t in TOPICS:
        pod = load_podcast(t)
        podline = ''
        if pod:
            podline = '<a class="chipl primary" href="%s/podcast/index.html">Podcast &middot; %d parts &middot; %s</a>' % (
                t['slug'], len(pod['parts']), fmt_min(sum(p['dur'] for p in pod['parts'])))
        lecs = ''.join('<li><span class="ln">%s</span><span class="chips">%s</span></li>' % (
            e(l['title']), lecture_links(l).replace('href="', 'href="%s/' % t['slug'])) for l in t['lectures'])
        cards.append(f'''<article class="card"><h2><a href="{t['slug']}/index.html">{e(t['title'])}</a></h2>
<p>{e(t['blurb'])}</p><ul class="lecs">{lecs}</ul><div class="chips">{podline}<a class="chipl" href="{t['slug']}/index.html">Topic page</a></div></article>''')
    rows = []
    for n, item in enumerate(COURSE, 1):
        if len(item) == 3:
            rows.append('<li class="have"><span class="no">%d</span><span class="ln">%s</span><span class="chips">'
                        '<a class="chipl" href="%s/%s/detailed-notes.html">Detailed</a>'
                        '<a class="chipl" href="%s/%s/study-notes.html">Study</a></span></li>' % (n, e(item[0]), item[1], item[2], item[1], item[2]))
        else:
            rows.append('<li class="soon"><span class="no">%d</span><span class="ln">%s</span><span class="mut">Coming soon</span></li>' % (n, e(item[0])))
    have = sum(1 for i in COURSE if len(i) == 3)
    body = f'''<main class="home">
<div class="dochead"><div class="eyebrow">Personal training &middot; Revision</div><h1>Lecture notes</h1>
<p class="lead">Detailed notes, short study notes and a revision podcast with subtitles for each topic. Use the search box above to search every note and podcast. More topics will be added.</p>
<div class="note" role="note">{DISCLAIMER}</div></div>
<h2 class="sec">Available now</h2>
<div class="cards">{''.join(cards)}</div>
<h2 class="sec">Course outline <span class="mut">{have} of {len(COURSE)} lectures added, in course order</span></h2>
<ol class="outline">{''.join(rows)}</ol></main>'''
    write(os.path.join(NOTES, 'index.html'), page('Lecture notes', body, 0, []))

# ---------------------------------------------------------------- copy sources

def copy_sources(src):
    for t in TOPICS:
        for lec in t['lectures']:
            s = os.path.join(src, lec['src'])
            d = os.path.join(NOTES, t['slug'], lec['slug'])
            os.makedirs(d, exist_ok=True)
            for kind, long in (('Detailed Notes', 'detailed-notes'), ('Study Notes', 'study-notes')):
                for ext in ('md',):
                    f = os.path.join(s, '%s - %s.%s' % (lec['prefix'], kind, ext))
                    if os.path.exists(f):
                        shutil.copy2(f, os.path.join(d, '%s.%s' % (long, ext)))
                    else:
                        print('MISSING', f)
            for sub in ('diagrams', 'board'):
                ss = os.path.join(s, sub)
                if os.path.isdir(ss):
                    shutil.copytree(ss, os.path.join(d, sub), dirs_exist_ok=True)

def probe_dur(path):
    r = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path],
                       capture_output=True, text=True)
    try:
        return float(r.stdout.strip())
    except ValueError:
        return 0.0

def audio_ok(path, dur):
    """True when the file is complete (right length) and already at the target bitrate, so reruns resume."""
    if not os.path.exists(path):
        return False
    return abs(probe_dur(path) - dur) < 2 and os.path.getsize(path) < dur * AUDIO_KBPS * 1000 / 8 * 1.15

def encode_audio(src):
    for t in TOPICS:
        pod = load_podcast(t)
        if not pod:
            continue
        sd = os.path.join(src, 'Podcast', t['podcast_dir'])
        dd = os.path.join(NOTES, t['slug'], 'podcast')
        for part in pod['parts']:
            out = os.path.join(dd, part['file'])
            if audio_ok(out, part['dur']):
                continue
            hits = glob.glob(os.path.join(sd, '* - Part %d - *.mp3' % part['n']))
            if len(hits) != 1:
                sys.exit('cannot find part %d in %s' % (part['n'], sd))
            subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', hits[0], '-map_metadata', '-1', '-vn',
                            '-ac', '1', '-ar', str(AUDIO_RATE), '-c:a', 'libmp3lame', '-b:a', '%dk' % AUDIO_KBPS,
                            '-metadata', 'title=%s - Part %d - %s' % (t['title'], part['n'], part['title']),
                            '-metadata', 'artist=Maya and Dev', '-metadata', 'album=%s Revision Podcast' % t['title'],
                            '-metadata', 'track=%d' % part['n'], out], check=True)
            print('encoded', out, os.path.getsize(out) // 1000, 'KB')
        tr = glob.glob(os.path.join(sd, '* - Transcript.txt'))
        if tr:
            shutil.copy2(tr[0], os.path.join(dd, 'transcript.txt'))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', help='path to the Notes folder (copies sources and encodes audio)')
    ap.add_argument('--build-only', action='store_true')
    a = ap.parse_args()
    if a.src:
        copy_sources(a.src)
        encode_audio(a.src)
    for t in TOPICS:
        for lec in t['lectures']:
            build_lecture_pages(t, lec)
        build_podcast_page(t)
        build_topic_page(t)
    build_index()
    write(os.path.join(NOTES, 'assets', 'search-index.json'),
          json.dumps(SEARCH, ensure_ascii=False, separators=(',', ':')))
    print('search entries:', len(SEARCH))
    print('done')

if __name__ == '__main__':
    main()
