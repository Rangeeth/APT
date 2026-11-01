# Body Parts: Muscle Table

A searchable, filterable table of muscles (origin, insertion, articulation, function, exercises and remarks) for the Back, Legs, Chest and Shoulders, Abdominals and Arms.

> **Disclaimer:** this table may contain mistakes. Verify against the official course material.

Single static page: open `index.html`. No build step or dependencies.

Study notes only. Muscle and exercise data is based on the Body Part slide decks; items marked `*` and `[General]` come from standard training and anatomy knowledge, not the slides.

## Lecture notes and podcasts

`notes/` holds the lecture notes for each topic (detailed notes and short study notes, each as a web page, PDF and Markdown) and a revision podcast per topic with a built-in player (subtitles, clickable transcript, speed control, resume).

```
notes/<topic>/<lecture>/   detailed-notes.* and study-notes.* (.html .pdf .md), diagrams/, board/
notes/<topic>/podcast/     index.html, part-N.mp3, part-N.vtt (captions), podcast.json, transcript.txt
```

The pages are generated: edit the lecture `.md` file or the `TOPICS` list in `tools/build_notes.py`, then run `python3 tools/build_notes.py --build-only` (needs pandoc and ffmpeg). Add new topics or lectures to `TOPICS` and run it with `--src "<Notes folder>"` to copy the sources and encode the audio.
