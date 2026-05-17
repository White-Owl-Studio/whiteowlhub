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

## Asset Summary

| Category | Total Assets |
|----------|-------------|
| Hero banner | 1 |
| Tarot card art (PNG) | 6 |
| Film posters (JPG) | 6 |
| Film stills (JPG) | 18 |
| Biography images (JPG) | 4 |
| **Total** | **35** |
