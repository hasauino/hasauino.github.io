---
name: sync-cv
description: Sync the site's CV page and PDF with the CV git repo. Use when the user says their CV was updated, or asks to update the CV page.
---

The CV's source of truth is the Typst repo `https://github.com/hasauino/cv` (branch `main`, public, so HTTPS needs no keys). The site mirrors its English version, `main.typ`, in two places:

- [src/pages/cv.astro](../../../src/pages/cv.astro): the data arrays at the top (`work`, `skills`, `education`, `languages`) and the Summary, Earlier Experience and Publications markup.
- [public/cv.pdf](../../../public/cv.pdf): a copy of the repo's committed `main.pdf`.

`cv.astro` carries a marker comment, `// Synced from github.com/hasauino/cv main.typ @ <commit>`, naming the CV commit the page last matched.

## Steps

1. **Clone** the repo into a fresh temp directory (the scratchpad if you have one): `git clone https://github.com/hasauino/cv.git <dir>`. Use a full clone, since step 2 needs history.
2. **Diff** from the marker commit to `HEAD`: `git -C <dir> diff <marker>..HEAD -- main.typ`, plus `git log` for context. Done when you know every changed line. If `main.typ` is unchanged, tell the user the page is already in sync and stop. If the marker is missing or unknown, compare the whole of `main.typ` against the page instead.
3. **Check the PDF is current**: `git -C <dir> log -1 --format=%H -- main.typ` and the same for `main.pdf`. If `main.typ` changed after the last `main.pdf` commit, the committed PDF is stale: ask the user whether to compile it (`typst compile main.typ`, which needs Typst and the Charter font) or to push a rebuilt PDF to the CV repo first. Then copy `main.pdf` to `public/cv.pdf`.
4. **Mirror** the changes into `cv.astro`. Done when every section of `main.typ` matches the page: each title, company, location, date, bullet, tech stack, skill row, education entry, publication and language. Translate Typst as you go:
   - Escapes: `\/` → `/`, `\*` → `*`. `#sym.dash.en` and the `dates-helper` range → `–`.
   - `#link(url)[text]` → `text`, with `url` in the entry's `companyUrl` or `url` field.
   - `#tech[*Tech Stack:* …]` → the entry's `tech` field. Leave `tech` out of entries that have none.
   - The `*Earlier:*` line → the Earlier Experience section. Every full `#work(...)` entry goes in the `work` array.
   - Keep the page's section order the same as the CV's.
   - The contact header and photo are not on the page. Ignore `main_de.typ`; the site is English only.
5. **Update the marker** to the short hash of the CV repo's `HEAD`.
6. **Verify**: `npx astro build` succeeds, then strip the tags from `dist/cv/index.html` and read the text to confirm the changed sections render.
7. **Report** what changed, section by section, and any content that was on the page but is gone from the CV. Commit only when the user asks.
