# Art Needed — Films Page
**Generated:** 2026-05-17  
**Stage:** 2 — Films page  
**Priority order:** Film II assets first (featured hero), then remaining films, then biography.

---

## How to swap in real art

1. Drop the file at the path shown below.
2. In `src/pages/films.astro`, find the `<!-- PLACEHOLDER: replace ... -->` comment near that asset.
3. Follow the instruction in the comment — typically replacing a `<div class="...ph">` with an `<img>` tag.
4. Delete the comment once swapped.

---

## I — Hero Banner

| Asset | Path | Dimensions | Format |
|-------|------|-----------|--------|
| Hero banner — *The One Who Drives the Truck* | `public/films/the-one-who-drives-the-truck/hero.jpg` | 1920 × 1080 (16:9) | JPG |

> **Priority: highest.** This is the first image visitors see on the Films page.

---

## II — Per-Film Assets (× 6 films)

Each film needs **5 assets**. Drop into the slug folder shown.

### I · The Owl's Descent
`public/films/the-owls-descent/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

### II · The One Who Drives the Truck ★ Featured
`public/films/the-one-who-drives-the-truck/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| **Hero banner** | `hero.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

### III · Dawn
`public/films/dawn/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

### IV · Let's Solve This Once and For All
`public/films/lets-solve-this-once-and-for-all/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

### V · Torn Apart
`public/films/torn-apart/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

### VI · Yaara's Place At Home
`public/films/yaaras-place-at-home/`

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Tarot card art (front face) | `card.png` | 400 × 720 (5:9) | PNG | ⬜ |
| Film poster (card flip / modal) | `poster.jpg` | 800 × 1440 (5:9) | JPG | ⬜ |
| Film still 1 | `still-1.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 2 | `still-2.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |
| Film still 3 | `still-3.jpg` | 1920 × 1080 (16:9) | JPG | ⬜ |

---

## III — Biography Section Images

`public/films/biography/`

| Asset | Filename | Dimensions | Format | Status | Notes |
|-------|----------|-----------|--------|--------|-------|
| Chapter 1 (full-width, atmospheric) | `biography-1.jpg` | 1920 × 1080 | JPG | ⬜ | Overlaid with quote text — dark/moody subject preferred |
| Chapter 2 (split panel, right side) | `biography-2.jpg` | 1200 × 900 | JPG | ⬜ | Alongside "Stories of Courage" text |
| Chapter 3 (split panel, left side) | `biography-3.jpg` | 1200 × 900 | JPG | ⬜ | Alongside "Broken Worlds" text |
| Chapter 4 (full-width, behind quote) | `biography-4.jpg` | 1920 × 1080 | JPG | ⬜ | Tagline quote — very dark or minimal image |

---

## IV — Trailer Links

When trailers are ready, add the embed URL to `src/data/films.ts` in the `trailer` field for the relevant film. Use the YouTube or Vimeo embed format:
- YouTube: `https://www.youtube.com/embed/VIDEO_ID`
- Vimeo: `https://player.vimeo.com/video/VIDEO_ID`

| Film | Status |
|------|--------|
| I · The Owl's Descent | ⬜ No trailer yet |
| II · The One Who Drives the Truck | ⬜ No trailer yet |
| III · Dawn | ⬜ No trailer yet |
| IV · Let's Solve This Once and For All | ⬜ No trailer yet |
| V · Torn Apart | ⬜ No trailer yet |
| VI · Yaara's Place At Home | ⬜ No trailer yet |

---

## V — Film Metadata to Fill In

Update `src/data/films.ts` when known:

| Film | Year | Format | Stage | Genre | Runtime | Logline | Summary | Credits |
|------|------|--------|-------|-------|---------|---------|---------|---------|
| I · The Owl's Descent | TBA | Feature Film | In Development | Drama | TBA | ⬜ | ⬜ | ⬜ |
| II · The One Who Drives the Truck | 2026 | Short Film | In Production | Drama | TBA | ⬜ | ⬜ | ⬜ |
| III · Dawn | TBA | Short Film | In Development | Drama | TBA | ⬜ | ⬜ | ⬜ |
| IV · Let's Solve This Once and For All | TBA | Short Film | In Development | Drama | TBA | ⬜ | ⬜ | ⬜ |
| V · Torn Apart | TBA | Short Film | In Development | Drama | TBA | ⬜ | ⬜ | ⬜ |
| VI · Yaara's Place At Home | TBA | Short Film | In Development | Drama | TBA | ⬜ | ⬜ | ⬜ |

---

---

# Art Needed — About Page
**Generated:** 2026-05-18  
**Stage:** 4 — About page

---

## How to swap in real art

1. Drop the file at the path shown below.
2. In `src/pages/about.astro`, find the `<!-- PLACEHOLDER: replace ... -->` comment near that asset.
3. Follow the instruction in the comment — replace the placeholder `<div>` with an `<img>` tag (or `<svg>` for logos).
4. Delete the comment once swapped.

---

## I — Founders Sketch (small portrait, left of main title)

`public/about/`

| Asset | Filename | Dimensions | Format | Status | Notes |
|-------|----------|-----------|--------|--------|-------|
| Founders sketch — Michael + Oshrit + cats | `founders-sketch.jpg` | ~240 × 320 (3:4 portrait) | JPG or PNG | ⬜ | Small profile-photo size (80×107 display px). Pen sketch, cute and loose. Sits to the left of the "White Owl Studio" title. |

> **Priority: high.** In `about.astro`, find `.sketch-ph` and replace its inner content with:  
> `<img src="/about/founders-sketch.jpg" alt="Michael and Oshrit with their cats — a pen sketch" class="sketch-img" />`

---

## II — Studio Photos (right column, sticky beside bio)

`public/about/`

Three photos shown in a sticky right column alongside the bio. Varying aspect ratios.

| Asset | Filename | Dimensions | Format | Status | Notes |
|-------|----------|-----------|--------|--------|-------|
| Studio photo 1 | `studio-1.jpg` | 1200 × 900 (4:3) | JPG | ⬜ | Workspace, tools, atmosphere — any studio shot |
| Studio photo 2 | `studio-2.jpg` | 900 × 900 (1:1) | JPG | ⬜ | Square crop — works well as a detail or portrait |
| Studio photo 3 | `studio-3.jpg` | 1200 × 900 (4:3) | JPG | ⬜ | Can be team at work, film stills pinned up, etc. |

> In `about.astro`, find each `.studio-ph` and replace with `<img src="/about/studio-N.jpg" alt="White Owl Studio — photo N" class="studio-img" />`

---

## III — Process Post-it Images (3 × 3 overlapping visuals)

`public/about/process/`

Each phase has 3 square image slots displayed as overlapping "post-its" beside the phase card.  
Drop square crops (or close to it). Visuals should represent the work done in each phase.

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|-----------|--------|--------|
| Pre-production visual 1 | `pre-prod-1.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Pre-production visual 2 | `pre-prod-2.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Pre-production visual 3 | `pre-prod-3.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Production visual 1 | `prod-1.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Production visual 2 | `prod-2.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Production visual 3 | `prod-3.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Post-production visual 1 | `post-prod-1.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Post-production visual 2 | `post-prod-2.jpg` | 600 × 600 | JPG or GIF | ⬜ |
| Post-production visual 3 | `post-prod-3.jpg` | 600 × 600 | JPG or GIF | ⬜ |

> In `about.astro`, each `.postit` contains a `<!-- PLACEHOLDER -->` comment.  
> Replace the placeholder content with: `<img src="/about/process/SLUG-N.jpg" alt="Phase visual N" class="postit-img" />`

---

## IV — Client Work Images (hover reveal in the clients field)

`public/about/clients/`

One work image (or short video/GIF) per client. Shown faded on hover over the client name, full in a lightbox on click.

| Asset | Filename | Dimensions | Format | Status | Notes |
|-------|----------|-----------|--------|--------|-------|
| Client 1 work sample | `work-1.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | A still or clip from work done for this client |
| Client 2 work sample | `work-2.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | |
| Client 3 work sample | `work-3.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | |
| Client 4 work sample | `work-4.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | |
| Client 5 work sample | `work-5.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | |
| Client 6 work sample | `work-6.jpg` | 1920 × 1080 (16:9) | JPG or MP4/GIF | ⬜ | |

> In `about.astro`, find each `.client-preview` div and replace its inner `.preview-ph` with:  
> `<img src="/about/clients/work-N.jpg" alt="Work for [Client name]" class="preview-img" />`  
> (Use `<video>` instead if the asset is a video clip — autoplay, loop, muted, playsinline)  
> Also update the `clients` array in the frontmatter with real client names and optionally adjust `top`/`left` scatter positions.

---

## III — Press Logos (optional)

`public/about/press/`

One logo per press outlet featured. Optional — the quote cards look fine as text-only.

| Asset | Filename | Format | Status |
|-------|----------|--------|--------|
| Press outlet 1 | `logo-1.svg` | SVG | ⬜ |
| Press outlet 2 | `logo-2.svg` | SVG | ⬜ |
| Press outlet 3 | `logo-3.svg` | SVG | ⬜ |

> Replace press quotes in `about.astro` when real quotes are available.  
> Each `.press-card` has a `<!-- PLACEHOLDER -->` comment marking the quote text and source.

---

## Asset Summary

| Category | Total Assets |
|----------|-------------|
| Hero banner (Films) | 1 |
| Tarot card art (PNG) | 6 |
| Film posters (JPG) | 6 |
| Film stills (JPG) | 18 |
| Biography images (JPG) — Films | 4 |
| Founders sketch (About, small portrait) | 1 |
| Studio photos (About, right column) | 3 |
| Process post-it images (About, 3 × 3) | 9 |
| Client work images/videos (About, hover reveal) | 6 |
| Press outlet logos (About, optional) | 3 |
| **Total** | **57** |
