# whiteowlhub — Session Log

---

## Session 1 — 2026-05-17

**Goal:** Stage 0 — Project foundation, GitHub repo, Cloudflare Pages deploy

### What was done
- Planned the full site architecture (7 sections, tarot aesthetic, Astro + Supabase stack)
- Locked all creative decisions for Stage 0 (nav labels, tagline, colors, logo treatment)
- Initialized Astro v5 project in `ClaudeCodeTest/whiteowlhub/`
- Installed `@astrojs/cloudflare` and `@supabase/supabase-js`
- Built full design token system (`src/styles/global.css`) — extended from Owl's Eye palette
- Built `Base.astro` layout (head, meta, font imports, Nav, Footer slot)
- Built `Nav.astro` — logo.gif + "White Owl Studio", 6 links gold→accent on hover, mobile hamburger
- Built `Footer.astro` — brand, contact, social links, copyright
- Created all 7 page stubs: `/`, `/films`, `/portfolio`, `/about`, `/shop`, `/experiences`, `/coven`
- Created GitHub repo: `White-Owl-Studio/whiteowlhub` (public)
- Connected Cloudflare Pages — auto-deploy from `main` branch

### Deployment troubleshooting
- **Problem:** `@astrojs/cloudflare` v12+ outputs to `dist/server/` + `dist/client/` instead of `dist/_worker.js`. Cloudflare Pages couldn't find the entry point, and the generated `wrangler.json` required unprovisioned KV + Images bindings.
- **Fix:** Switched to `output: 'static'` — all current pages are stubs with no server-side logic. SSR will be re-enabled in Stage 7 (Coven auth).
- **Result:** Site live at `whiteowlhub.pages.dev` and `whiteowlhub.com`

### Stage 0 status: COMPLETE

---

## Session 2 — 2026-05-17 (continued)

**Goal:** Stage 1 — Landing page complete

### What was done

**Landing page structure:**
- Full-screen hero, no wordmark/tagline (clean, minimal)
- Deck-first state: stacked card visual with card back design
- Card back: crescent moon (geometric, concave-right) + W owl-wing mark whose tips reach toward the moon — composed in SVG on 100×180 viewBox
- Natural deck stack: 4 depth layers with alternating rotations/offsets, all fully opaque with visible gold borders
- "Spread your cards?" prompt: appears only on hover via JS mouseenter/mouseleave class toggle

**Prompt animation (final):**
- `opacity` + `translateY` ONLY — the only compositor-safe properties for text
- Static `text-shadow` glow on element (never animated) for the misty quality
- Elastic easing `cubic-bezier(0.22, 1.35, 0.36, 1)` for watery settling feel
- In: 1.45s | Out: 0.28s
- Lessons learned: `filter:blur`, `scaleX`, `skewX`, and animated `text-shadow` all cause glyph re-rasterization → jank. Pure compositor = opacity + translateY only.

**Spread animation:**
- Click deck → deck fades + scales down → spread grid appears → 6 cards fly in with 90ms stagger
- Cards: 5:9 aspect ratio (classic tarot), individual rotations per card for natural spread feel
- 6 section cards with custom SVG sigils: eye (Films), feather (Our Work), owl (About), crescent+star (Shop), 8-point star (Experiences), triple moon + flames (Coven)

**Film grain system:**
- Two canvas layers in Base.astro (applied to all pages):
  - Background grain (z-index:1): sparse warm golden speckles, 6FPS, ellipse shapes with random rotation for organic quality, below all UI
  - Top grain (z-index:9999): near-invisible dark micro-dots via mix-blend-mode:overlay, static (redraws on resize only)
- Hero section z-index:2 ensures cards/deck always above background grain
- Removed static SVG fractalNoise (replaced by canvas system)

**Logo:**
- GIF frame delay changed from 4cs (25fps) to 6cs (~17fps) via Node.js binary edit
- Original backed up at `public/ui/logo-original.gif`

**Design decisions locked this session:**
- "Spread your cards?" prompt: gold-dim color, Crimson Pro italic, clamp(1.45rem, 2.8vw, 2rem)
- Card back: crescent + W mark (not separate — composed as unified owl-ascending-to-moon sigil)
- Grain: 6FPS, sub-pixel dots, ellipse not circle, opacity ~14–36% bg / ~0.5–4% top

### Stage 1 status: COMPLETE ✅

---

## Next session → Stage 2 Creative Review + Films page

---

## Session 3 — 2026-05-18

**Goal:** Stage 2 — Films page

### What was done

**Film data (`src/data/films.ts`):**
- 6 films: I The Owl's Descent, II The One Who Drives the Truck (featured), III Dawn, IV Let's Solve This Once and For All, V Torn Apart, VI Yaara's Place At Home
- TypeScript Film interface: numeral, slug, title, year, format, stage, genre, runtime, logline, summary, credits, trailer, featured

**Films page structure:**
- Hero: Film II (The One Who Drives the Truck) — in active production, featured
- Card index: all 6 films as CSS 3D flip cards (5:9 portrait ratio)
- Film biography: 4 scroll-reveal chapters with IntersectionObserver
- 6 film modals: trailer slot, poster, plot summary, credits, 3 stills strip

**Card flip — final working approach:**
- No `.card-inner` wrapper, no `transform-style: preserve-3d`
- Both faces (`card-front`, `card-back`) sit directly in `.card-flip-wrap`
- `.card-flip-wrap` has explicit `width: var(--card-w)`, `height: var(--card-h)`, `perspective: 1200px`
- Each face has `transition: transform` and `backface-visibility: hidden`
- Front: `rotateY(0deg)` → `rotateY(-180deg)` on hover
- Back: `rotateY(180deg)` → `rotateY(0deg)` on hover
- Troubleshooting: `transform-style: preserve-3d` on an intermediate element was causing inconsistent heights. Simpler dual-face approach is reliable.

**Art placeholders:**
- All image slots are CSS-styled divs with path labels
- `ART_NEEDED.md` generated: 35 total assets across 6 films + biography section

**Color:**
- WOS default palette (dark/gold) throughout
- Laila red (#e02828) on text hover states only (title hover, card label hover, button hover)
- Stage badge: "In Production" = pulsing red dot + red border; "In Development" = dim gold

### Stage 2 status: COMPLETE ✅

---

## Session 4 — 2026-05-18 (continued)

**Goal:** Stage 3 — Portfolio / Our Work page

### What was done

**Data (`src/data/portfolio.ts`):**
- 9 categories: Animation, Illustration, Art Direction, Character Design, Projects for Clients, Michael's Portfolio, Oshrit's Portfolio, Puppets & Sets, Post-production
- `layout: 'scroll'` property on Category — used by Character Design; renders images as a seamless vertical column instead of a grid
- `editorialItems` array drives the main portfolio editorial grid — 11 character design images with span hints (featured/wide/tall/normal)
- Client projects use a project-based grid structure (named projects containing items)

**Main portfolio page (`/portfolio`):**
- Header with page title and subtitle
- 4-column editorial CSS grid with mixed span sizes (featured = 2×2, wide = 2×1, tall = 1×2, normal = 1×1)
- Hover on grid item: subtle scale + overlay with category link
- 9 category cards below in a 3-column grid with number, title, description, arrow
- Lightbox on editorial grid items (opacity fade, left/right nav, keyboard support)

**Category pages (`/portfolio/[category]`):**
- Dynamic route via `getStaticPaths()` — one page per category
- Scroll layout (Character Design): centered column at `min(88%, 1100px)`, `height: auto`, no gap between images — designed as one continuous visual sheet
- Uniform grid (all other categories): 3-column, `aspect-ratio: 4/3`, `object-fit: cover`
- Project grid (Clients): named project cards each containing a 4-column thumbnail strip
- Empty state for categories with no content yet
- Lightbox on all items

**Character Design assets:**
- 16 real assets copied from `character-portfolio/images/` to `public/portfolio/character-design/`
- Mix of PNG, GIF (animated), and MP4 video — all render correctly in scroll and lightbox

**Nav dropdown:**
- Hover "Our Work" → dropdown lists all 9 categories with links
- CSS-only hover trigger on the `<li>` — no JS needed
- Invisible `::after` bridge prevents hover gap flicker
- Hidden on mobile (existing mobile menu handles navigation)
- `opacity + translateY` animation — compositor safe

**Oshrit:**
- Co-founder, art director, director of VI (Yaara's Place At Home), Art Director of II (The One Who Drives the Truck), Michael's fiancée
- Has her own portfolio category on the site

### Stage 3 status: COMPLETE ✅

---

## Session 5 — 2026-05-18 (continued)

**Goal:** Edge blur effect + full codebase quality pass

### What was done

**Edge blur effect (Base.astro):**
- Added two fixed `.edge-blur` divs (top + bottom) to every page
- Final working technique: `background: linear-gradient(to bottom, rgba(5,4,9,0.30) 0%, transparent 65%)` + `backdrop-filter: blur(2px)` + `mask-image: linear-gradient(to bottom, black 0%, black 35%, transparent 100%)`
- Height: 72px. Dark gradient (0.30 opacity) provides the "out of focus" reveal — blur applies everywhere, content only visible where background fades to transparent
- Key learning: backdrop-filter with NO dark background → glow. With dark background gradient → out-of-focus / stained-glass. Blur must be the SAME technique as the nav (dark gradient + blur) not mask-only
- Nav's own `backdrop-filter: blur(2px)` removed to avoid double-layering

**Quality pass:**
- `global.css`: added shared alpha tokens (`--gold-faint`, `--gold-ghost`, `--violet-faint`, `--violet-ghost`, `--red-faint`) and layout tokens (`--section-px`, `--section-py`)
- Extracted `Lightbox.astro` component — removed ~130 lines of duplicated lightbox HTML/JS/CSS from both portfolio pages
- Extracted `StubPage.astro` — 4 stub pages (about, shop, experiences, coven) each collapsed from 34 lines to 6 lines
- `Nav.astro`: fixed `<nav role="list">` → `<ul>`; added `:focus-within` for keyboard dropdown access; synced mobile `aria-hidden`
- `Base.astro`: removed unnecessary `is:global`; grain setInterval pauses on `visibilitychange`
- `films.astro`: removed duplicate `:root` vars; `<article role="button">` → `<div role="button">`; added `allowfullscreen` to iframe
- `portfolio/index.astro` + `[category].astro`: removed duplicate `:root` blocks; replaced all local `--violet`/`--gold-dim` refs with global tokens; fixed inline `onclick`; added `role`/`tabindex`/`aria-label` to grid items
- `films.ts`: `featuredFilm ?? films[0]` (was unsafe non-null assertion)
- `Footer.astro`: `loading="lazy"` on footer logo

### Session 5 status: COMPLETE ✅

---

## Session 6 — 2026-05-18 (continued)

**Goal:** Stage 4 — About page

### Creative review decisions
- 4 sections: Who We Are (co-bio + manifesto), How We Work (pre→post-production narrative), Clients & Partners, Press
- Tone: personal with moments of declarative confidence
- Layout: long scroll, single column; intro has 2-col layout with sketch portrait side-header
- No special interactions — typography and text carry the page
- All imagery: placeholders for now; sketch of Michael + Oshrit + cats as intro side image

### What was done

**About page (`src/pages/about.astro`):**
- Replaced stub with full 4-section page
- **Intro:** 2-column layout (text left, sketch placeholder right). Sticky sketch position on desktop. Co-bio paragraph + bone-accented blockquote manifesto with left border.
- **Process:** 3 numbered phases (01/02/03) with Cinzel numerals in bone accent, vertical connector line between phases, tag pills for each discipline. IntersectionObserver scroll-reveal on phases.
- **Clients:** auto-fill grid using `repeat(auto-fill, minmax(160px, 1fr))` — 6 placeholder logo slots. Grid collapses neatly to mobile.
- **Press:** 3 placeholder quote cards with opening curly-quote decoration, outlet/date source footer. `::before` pseudo-element for the decorative opening quote.
- Section dividers: `<hr class="section-rule">` with `border-top: 1px solid var(--border)`
- All placeholder divs marked with `<!-- PLACEHOLDER: ... -->` comments for easy swap-in

**ART_NEEDED.md updated:**
- Added About page section with 3 categories
- Founders sketch: `public/about/founders-sketch.jpg` (~600×800 portrait)
- Client logos: `public/about/clients/client-1.svg` through `client-6.svg`
- Press outlet logos: `public/about/press/logo-1.svg` through `logo-3.svg` (optional)
- Total asset count: 35 (films) + 10 (about) = 45

### Stage 4 status: COMPLETE ✅

---

## Session 7 — 2026-05-18 (continued)

**Goal:** Stage 5 — Market of Stuff / Shop page

### Creative review decisions
- Visual concept: apothecary codex / magical supply shop — "whimsical but cursed/ghosty"
- Real categories: prints, merch puppets, digital packs, art books
- Item names: silly WOS-toned placeholder names (cursed descriptions)
- No email notification form for now
- 8 catalog entries, 4 categories × 2 items each

### What was done

**Shop page (`src/pages/shop.astro`):**
- Replaced stub with full apothecary-codex layout
- **Header:** Centered title page: eyebrow + decorative teal rule-with-sigil + "The Emporium of Strange Goods" + italic subtitle about the catalog
- **Catalog grid:** 8 entries in an `auto-fill minmax(260px, 1fr)` grid; gaps ARE the borders (grid background = border color, cells are bg)
- **Each entry:** 3:4 illustration area (corner bracket pseudo-elements in teal) + body with category label, item name, italic blurb, status badge
- **Status badge:** Teal pulsing dot (staggered `animation-delay` per entry so they don't all pulse together) + "Not yet conjured" in Cinzel
- **Hover state:** Subtle teal inset glow (`box-shadow: inset`) + teal border appears via `::before` overlay
- **SVG sigils:** 4 custom SVG drawings (frame, puppet, spiral, book) rendered in the illustration placeholder — each matches the item's category
- **Ledger footer:** Diamond ornament SVG + "This market opens when the work is done." + legalese in Crimson Pro italic
- PLACEHOLDER comments in each entry for when real product images arrive

**Item catalog (all placeholder):**
- Prints: "The Owl's Wall Haunting", "Six Films, One Poster"
- Merch Puppets: "The Cloth Companion", "Small Familiar (Assorted)"
- Digital Packs: "The Ghost Archive Vol. I", "Wallpapers from the Beyond"
- Art Books: "The Studio Grimoire", "The Bound Descent"

### Stage 5 status: COMPLETE ✅

---

### Intelligence run — Stage 5
Ran 7 parallel WebSearch queries before finalising the shop page:
- Indie studio shop design best practices
- LAIKA + Cartoon Saloon shop examples
- Product page psychology (scarcity, curiosity, conversion)
- Coming-soon pages that build desire
- Dark/niche aesthetic brand drops
- Limited edition art print storytelling copy

Key findings applied: film-anchored product copy (LAIKA model), concrete spec line alongside charming blurb, price ranging, preview band (Jimmy Fairly "whole collection visible" pattern), film filter tabs, staggered entrance animations. Michael rated this as the most useful reference run to date.

---

## Session 8 — 2026-05-18 (continued)

**Goal:** Stage 6 — Online Experiences / Online Playthings

### Creative review decisions
- Hero element: circular lake / glass orb, full-viewport
- Press orb → glitter-fog swirl → reveals random experience (weighted)
- 4 slots: Laila's Descent (50%), two placeholders (24% each), secret (2%)
- Each slot has its own swirl colour signature
- Game opens on dedicated page (`/experiences/lailas-descent`) in fullscreen iframe
- Reveal panel: genre label + title + Enter button only (no tagline, no "press again")
- Laila sprite: small, lower-middle of orb; lake fills upper portion
- Orb background: dark purple glittersmoke (fog wisps as fillRect radial gradients, not arcs)
- Orb rim: soft diffuse purple aurora glow, no hard outline; shifts to experience accent on reveal
- Background crossfades: neutral purple → experience-specific on press

### What was done

**`src/pages/experiences.astro`** — full page:
- Canvas orb: dark purple void + 5 rotating fog-wisp smoke plumes + 48 orbiting glitter particles
- Press triggers inward glitter swirl → background crossfades → experience reveals
- Outward swirl on re-press → crossfade to neutral → next random pick → inward swirl
- 4 experiences with weights; secret auto-resets after 7s
- Reveal panel: genre eyebrow + title + centred Enter button

**`src/pages/experiences/lailas-descent.astro`** — game host:
- Fullscreen fixed layout, hides site nav/footer
- Laila-red minimal nav bar with Exit button → back to orb
- Iframe loads `public/games/lailas-descent.html`

**`public/games/lailas-descent.html`** — game file copied from `Lailas-Descent-game/game.html`

**Sprite — key lessons learned (hard way):**
- Initial implementation used named hair waypoints as bezier CONTROL POINTS → duck shape
- Fix: implemented catmull-rom (`crPath`) so curve passes THROUGH each point
- Fix: L1 hair was drawn AFTER head → fixed draw order
- Fix: L2 bangs were only drawn on right side → game draws normal + X-mirrored (both sides)
- Final fix: read the actual game source (`game.html`) and copied `_crPath`, `_L1PTS`, `_L2PTS`, draw order exactly
- Key pattern: use `ctx.translate(CX, CY + offset) + ctx.scale(s,s)`, then draw in raw game units

**Sprite constants (from game source):**
- `_L1PTS` includes closing point `[4,-4.3]` (= first point) for smooth catmull-rom closure
- `_L2PTS = [[11.8,-10.6],[5,-22],[0,-17.8],[5,-13],[11.8,-10.6]]` — drawn twice (+ X-mirror)
- `_crPath` uses `a=1/6` (standard catmull-rom to bezier conversion)
- Draw order: L1 hair → feet → hands → dress (trapezoid) → sleeves → face → eyes → L2×2 → strands
- Dress is a simple `moveTo/lineTo` trapezoid, NOT bezier curves

**Zone 1 background (from game source `drawBg_stillWater`):**
- Linear gradient: `#060c16 → #050a14 → #020408` (top → bottom)
- Cold light radial: `rgba(184,212,240,0.24)` centred above orb, fading to transparent
- 55 `#8ab0cc` sediment particles drifting UPWARD (disorienting, Zone 1 design choice)

### Stage 6 status: COMPLETE ✅

---

## Session 9 — 2026-05-20

**Goal:** Coming-soon page, site gate, and The Coven pre-planning

### Coming-soon page (`src/pages/coming-soon.astro`)
Standalone page (no Base.astro — immune to the gate redirect).
- WOS logo gif, "WHITE OWL STUDIO" in Cinzel, atmospheric message: *"Breath, something new is growing here."*
- 7 social tiles in a 4+3 grid (4 row 1, 3 centred row 2): Instagram · YouTube · Facebook · LinkedIn · TikTok · Ko-Fi · Email
- SVGs inlined directly in template (set:html was not rendering icons — lesson learned)
- Tile design: 72×72px squares, palette violet (#7040b8) icons, muted labels, violet border hover → gold
- Full two-layer site grain (grain-bg warm gold 6fps + grain-top dark overlay) — exact copy from Base.astro
- Top edge blur (72px backdrop-filter:blur(2px) gradient) matching rest of site
- Purple ambient radial glow (rgba(112,64,184,0.28)) in background — makes logo dark areas readable
- noindex/nofollow meta

**Social link URLs confirmed:**
- Instagram: https://www.instagram.com/whiteowlstudio (placeholder — not updated)
- YouTube: https://www.youtube.com/shorts/pTbSSnQsZ2E (specific Shorts video)
- Facebook: https://www.facebook.com/whiteowlstudio (placeholder)
- LinkedIn: https://www.linkedin.com/company/whiteowl-studio
- TikTok: https://www.tiktok.com/@whiteowl376
- Ko-Fi: https://ko-fi.com/whiteowlanimation
- Email: mailto:michaelbjacob@gmail.com

### Site gate (production redirect)
Two lines in `src/layouts/Base.astro` `<head>` block — only active in production builds (`!import.meta.env.DEV`):
```astro
{!import.meta.env.DEV && <style is:inline>html{'{'}visibility:hidden{'}'}</style>}
{!import.meta.env.DEV && <script is:inline>window.location.replace('/coming-soon');</script>}
```
**TO LAUNCH:** remove both lines, commit, push. Cloudflare auto-deploys.

**Redirect loop lesson:** `public/_redirects` with `/* /coming-soon 302` causes infinite loops because the rule also matches `/coming-soon` itself. Cloudflare Pages does NOT auto-detect this loop. Fix: client-side JS redirect in Base.astro (the coming-soon page is standalone and unaffected).

### The Coven — pre-planning (Stage 7)
Decisions made:
- Auth: Google OAuth + GitHub OAuth + email/password via Supabase
- Architecture: client-side Supabase JS SDK, keep `output: 'static'` (no SSR yet)
- Achievements called: **Sigils**
- Sigil triggers: content engagement, return visits, hidden discoveries, community actions (+ future: game completion, tarot collecting)
- Sigil unlocks: new orb experiences, exclusive downloads, profile cosmetics, lore, shop discounts
- Profiles: **public** — shareable `/coven/profile/[username]` page
- 9 launch sigils designed (The First Flame, The Wanderer, The Archivist, The Dreamer, The Witness, The Curious, The Persistent, The Patient, The Caller)
- 3 Coven tiers: Initiate (1–3), Keeper (4–6), Elder (7–9)
- Build deferred — coming-soon work took priority

---

### Final social URL updates (end of session)
- Facebook updated to: https://www.facebook.com/profile.php?id=61590287245120
- Instagram confirmed working as-is
- All 7 social links live and correct

---

## Next session → Stage 7 — The Coven (Supabase auth + Sigils + public profiles)

---

## Session 10 — 2026-05-24

**Goal:** Replace all placeholder film copy with real writing; update all project memories.

### Research phase (pre-code)

Read all documents in `ClaudeCodeTest/wos-content/`:
- `studio-overview.md`, `coven-cosmology.md`, all 6 per-film files (PDFs and subtitles where available)
- Film II full script (PDF) — read and fully summarised
- Film IV subtitle file (SRT) — reveals real content: collage of real Israeli voices
- Film VII (The Poison Machine) identified and logged as early-development future project

**Memory files updated/created:**
- `project_wos_films.md` (NEW) — full details on all 6+1 films: stories, characters, subtitles, techniques, themes
- `project_wos_people.md` — corrected Oshrit's employer (Superplay → Gliding Deer), updated Michael's CV
- `project_wos.md` — corrected fund name (Fata Morgana), fixed film slate to canonical 6+1 order
- `project_bio_reference.md` — removed unconfirmed ZEBRA festival, corrected "Inverted Tendencies" title
- `project_wos_style.md` — added real Film II detail (was vague placeholder)
- `write-for-presentation.md` skill updated with Step 1.5 to read memory files before writing

**Canonical film numbering confirmed (wos-content order):**
I=Owl's Descent · II=Truck · III=Yaara's Place · IV=Let's Solve It · V=Dawn · VI=Torn Apart

Film VI has no content yet — omitted from copy.

### Copy written and approved (Films I–V)

User reviewed and approved with edits to subtitles and Film I plot summary.

| Film | Subtitle | Format |
|------|----------|--------|
| I — The Owl's Descent | A Meditation in Stop Motion | Stop-motion animation |
| II — The One Who Drives the Truck | A Desert Folk Tale | Stop-motion animation |
| III — Yaara's Place At Home | A Cautionary Tale | 2D drawn animation |
| IV — Let's Solve It Once and For All | A Conversation in Black and White | Mixed-media collage animation |
| V — Dawn | A Poem in Charcoal | Animated charcoal |

**Film I correction:** User provided exact logline/summary: *"Trapped in an eternal recurring nightmare, Laila is about to break free of the lake that holds her — but to break free, she must learn to breathe."* Used verbatim as both logline and summary.

**Film III technique correction:** Was assumed stop-motion (fabric/puppet). Confirmed 2D drawn animation.

### Code changes

**`src/data/films.ts`:**
- Added `subtitle?: string` to Film interface
- Filled in `subtitle`, `logline`, `summary`, `format`, `genre` for Films I–V
- Updated `year`: Film IV → 2025, Film V → 2022
- Film II `stage` stays "In Production"; IV/V set to "Complete"
- Film II credits: added `producer: 'Liran Koren'`

**`src/pages/films.astro`:**
- Hero: subtitle renders below title (`<p class="hero-subtitle">`) — Crimson Pro italic, dim gold
- Modal header: subtitle renders below film title in a `modal-title-stack` div
- Added `.stage-tag--complete` CSS — teal tone (distinct from red/gold existing tags)
- Added `.hero-subtitle` and `.modal-film-subtitle` CSS rules

**Deployed:** commit `23e1e55` pushed to `main`, auto-deployed to Cloudflare Pages.

---

## Next session
- Review copy live at localhost:4321/films (dev server bypasses coming-soon gate)
- Continue Launch Runway plan: `~/.claude/plans/refactored-kindling-stonebraker.md`
- Stage 7: Supabase auth + Coven gate (blocked until bindings provisioned)

---

## Session 11 — 2026-05-24 (continued)

**Goal:** Media hosting infrastructure, portfolio/film art additions, card UI polish.

---

### Cloudflare R2 media hosting

**Setup:**
- Bucket `wos-media` created by Michael in Cloudflare dashboard
- Custom domain `media.whiteowlhub.com` attached (Cloudflare DNS auto-configured)
- Account API token created (account-level, permanent) — used for wrangler auth
- R2 S3-compatible access key + secret created — used for object uploads
- Account ID confirmed via API: `f2ea3e1a1872506424e71db26341be6d`

**Upload script (`scripts/upload-r2.mjs`):**
- Node.js ESM script using `@aws-sdk/client-s3`
- S3-compatible endpoint: `https://f2ea3e1a1872506424e71db26341be6d.r2.cloudflarestorage.com`
- Takes `R2_ACCESS_KEY_ID` + `R2_SECRET_ACCESS_KEY` as env vars (never stored in repo)
- `CacheControl: 'public, max-age=31536000, immutable'` on all uploads
- Run via: `R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... npm run upload-r2`
- `npm run upload-r2` script alias added to `package.json`

**Videos migrated to R2:**
- `tabletop-wide.mp4` (14MB) → `https://media.whiteowlhub.com/portfolio/puppets-sets/tabletop-wide.mp4`
- `tabletop-vertical.mp4` (14MB) → `https://media.whiteowlhub.com/portfolio/puppets-sets/tabletop-vertical.mp4`
- Local copies removed from `public/` and git — CDN is now canonical source
- `portfolio.ts` updated to use CDN URLs

**Three-tier media strategy locked:**
- Tier 1: GitHub → Cloudflare Pages — static files <20MB (images, small assets)
- Tier 2: Cloudflare R2 → `media.whiteowlhub.com` — videos and larger assets (zero egress cost)
- Tier 3: Vimeo Pro — full films, trailers, shorts (embedded player, Grush deferred)

---

### ART_NEEDED.md full rewrite

Rebuilt from scratch with accurate statuses reflecting everything actually in `public/`:
- All 15 existing film stills, 2 existing posters, 1 hero banner marked ✅
- Character Design (16), Oshrit's Portfolio (20), Puppets & Sets (R2) marked ✅
- Founders illustration (couple-logo.png) marked ✅
- Pre-prod process images (3) marked ✅
- Empty portfolio categories (Animation, Illustration, Art Direction, Michael's Portfolio, Clients) listed as TBD
- **New section: Side Effects** — documents visual micro-interactions waiting on art assets

---

### Film card UI — poster and tarot wiring

**Card back → poster:**
- `film.poster` field already existed in `Film` interface
- `card-back` face was always showing placeholder — fixed to conditionally render `<img>` when `film.poster` is set
- `.card-poster-img` CSS added (`object-fit: cover`, full bleed)
- Let's Solve It (poster already set) now shows real art on flip

**Card front → tarot art:**
- Added `card?: string` field to `Film` interface
- `card-front` face updated to conditionally render `<img>` when `film.card` is set
- `.card-tarot-img` CSS added (same as poster img treatment)
- Both faces fall back to text placeholder when no art is set

**Art added this session:**

| Film | Asset | Path |
|------|-------|------|
| The Owl's Descent | Tarot card | `public/films/the-owls-descent/card.jpeg` |
| The One Who Drives the Truck | Tarot card | `public/films/the-one-who-drives-the-truck/card.jpeg` |
| Dawn | Poster | `public/films/dawn/poster.png` |

Source folders:
- Tarots: `C:\Users\Micha\OneDrive\Desktop\Work\White Owl Studio\Branding\Tarots\`
- Posters: `C:\Users\Micha\OneDrive\Desktop\Work\White Owl Studio\Branding\Posters\`

---

### Tarot card dust effect (designed, scaffolded, disabled)

**What was built:**
- 14 tiny particles (0.8–2px) spawn within the tarot card image bounding box on first hover
- Particles fall slowly downward (2–3.6s), max ~6% opacity — barely visible
- Slight random horizontal drift (±2.5px)
- Falls no further than the height of the card image
- Triggers once per card per page load (tracked via `card.dataset.dusted`)
- CSS: `@keyframes dust-fall` using CSS custom properties `--fall` and `--drift` for per-particle randomness
- JS: `getBoundingClientRect()` diff between `.card-tarot-img` and `.card-smoke` to get spawn origin

**Why disabled:**
- Effect was temporarily spawning from the numeral text, not the tarot image (wrong source element)
- Needs all 6 tarot cards in place before enabling so the effect feels consistent
- Code scaffolded and commented in `films.astro`; documented in ART_NEEDED.md › Side Effects

**To enable:** un-comment the JS block in `films.astro` (marked `// Tarot card dust (disabled)`). Spawn source is already `.card-tarot-img`.

---

### Localhost reminder

Production site (`whiteowlhub.com`) is behind a coming-soon/welcome page. Always use `http://localhost:4321` to preview changes. Run `npm run dev` in the whiteowlhub directory.

---

### Commits this session

| Hash | Summary |
|------|---------|
| `66e55b9` | Move puppets-sets videos to Cloudflare R2 CDN |
| `58ab7f7` | Add tarot card art for two films; wire card front and back |
| `84518f7` | Add Dawn poster; wire to card back and modal |
| `6fada5f` | Add smoke poof on first card flip (superseded) |
| `d12592e` | Replace smoke poof with numeral dust-fall effect (superseded) |
| `fdfdce6` | Disable tarot dust effect; document in ART_NEEDED Side Effects |

---

## Next session
- Add remaining 4 tarot cards → enable dust effect
- About page studio photos (3 still needed)
- Biography section images (4 still needed)
- OG/social share image (needed before launch)
- Upload large videos to R2 (see below)

---

## Session 12 — 2026-05-25

**Goal:** Survey `D:\תיק עבודות` (portfolio folder) and populate empty site categories.

### What was done

**Portfolio folder surveyed (`D:\תיק עבודות`):**
- Folder structure mapped and all subfolders inspected visually
- Confirmed 2 client clusters: 3D animated series (same 5 characters across scenes) vs. mobile game client (cartoon style, features + environments)
- `פריימים מסרטים` stills already matched to existing `public/films/` content — no action needed
- `קונספט ארט מסרטים/Artboard 1–3.png` confirmed as already in `public/about/process-concept-1/2/3.png`

**Files copied and wired:**

| Category | Files added | Source |
|----------|------------|--------|
| Illustration | 9 (circus-night, tightrope, explosion, tent-crowd, marionette-ink, creature-ink, gorilla-sketch, stool-figure, charcoal-figure) | `איורים מיכאל` |
| Art Direction | 2 (owls-descent-concept, dawn-sphere) | `קונספט ארט מסרטים`, `איורים מיכאל` |
| Animation | 1 (reaping.mp4, 2.2MB) | `אנימציה 2D` |
| Clients | 20 (3 projects) | `עיצוב דמויות`, `רקעים`, `בימוי ארט` |

**Client projects created in portfolio.ts:**
1. `animated-series` — "Animated Series — Character & Environment Design" (3 files: character lineup + cafeteria + backyard environment)
2. `mobile-game-features` — "Mobile Game — Feature Art Direction" (13 files: pet evolution + heist + pet reskin + treasure hunt)
3. `mobile-game-environments` — "Mobile Game — Environment Design" (4 files: Arizona, Mardi Gras, Snow Mice, Thanksgiving)

**Editorial grid updated:** Added 5 new items spanning illustration, art-direction, and clients categories. Owl's Descent concept art gets `featured` span.

### Pending R2 uploads (videos too large for GitHub)

| File | Source | Size | Target path on R2 |
|------|--------|------|-------------------|
| Animation_Showreel_Michael.mp4 | `שואורילז/` | 188 MB | `portfolio/animation/showreel.mp4` |
| Reaping (2nd 2D clip) | `אנימציה 2D/WhatsApp Video...` | 37 MB | `portfolio/animation/reaping-2.mp4` |
| Truck_033_01.mp4 | `אנימציה - סטופ מושן/` | 123 MB | `portfolio/animation/truck-clip.mp4` |
| Game animations × 4 | `אנימציה - משחקים/` | 10–17 MB each | `portfolio/animation/` |
| Donnie Darko Sitcom (edit) | `עריכה/` | 177 MB | `portfolio/post-production/donnie-darko-edit.mp4` |
| Grush_new_export.mov | `אנימציה - סטופ מושן/` | 2.2 GB | Vimeo only |

Run: `R2_ACCESS_KEY_ID=... R2_SECRET_ACCESS_KEY=... npm run upload-r2`

### Still not placed (needs curation decision)

- `עיצוב דמויות/` remaining files (DnD characters, sprite sheets, nightshade) — personal/commission character designs. Decide: add to character-design scroll or michael category?
- `Oshrit/` folder (104 files, well-organized) — substantially more than current oshrit portfolio. Worth a dedicated pass to expand Oshrit's category.
- `גרפיקה ועיצוב/` (Shablulim Film festival posters, Let's Solve poster) — graphic design/event work. Could add to clients or skip.
- `שואורילז/Animation_Showreel_Michael.mp4` — should be the HERO of the animation category once on R2.

---

## Session 13 — 2026-05-26

**Goal:** Add "Drive That Truck, Noam!" to the Online Playthings page; overhaul the experiences system; polish the orb UX.

---

### Experiences system refactor

The old system had a hardcoded `src/pages/experiences/lailas-descent.astro` file. Adding any new game required copy-pasting the whole host page.

**New data-driven architecture:**

| File | Role |
|------|------|
| `src/data/experiences.ts` | Single source of truth — all experience entries |
| `src/pages/experiences/[game].astro` | One dynamic host page for all games |
| `src/pages/experiences.astro` | Imports data, derives `url` from `status === 'demo'` |
| `public/games/[id].html` | Standalone game files, fully sandboxed |

**`Experience` interface fields:** `id`, `title`, `tagline`, `eyebrow`, `status` (`'demo'|'conjuring'|'unknown'`), `weight`, `swirlR/G/B`, `hasCharacter`

**Game host page theming:** Nav bar accent color comes from `--ar`, `--ag`, `--ab` CSS vars (injected from swirl RGB). Modern `rgb(var(--ar) var(--ag) var(--ab) / 0.12)` syntax used throughout.

**Adding any future game = 2 steps:**
1. Drop `game.html` in `public/games/`
2. Add one entry in `src/data/experiences.ts` with `status: 'demo'`

---

### Drive That Truck, Noam! — added

- Source: `ClaudeCodeTest/truck-game/game.html`
- Copied to: `public/games/drive-that-truck.html`
- Replaced `placeholder-a` slot (weight 0.24) — one less "Coming Soon" in the pool
- Swirl/nav color: warm amber `rgb(200, 140, 50)` — desert night atmosphere, distinct from Laila red and orb neutral purple

---

### Truck orb visuals (background + sprite)

When the truck game is revealed in the orb, it now shows a full scene — same pattern as Laila's Still Water + Laila sprite.

**Background (`drawTruckBg`, called from `drawExpBg`):**
- Three-band indigo sky gradient (`#1f1640 → #241a48 → #2a2052`) matching the game's palette
- Deterministic child's-drawing star grid — alternating dots and `+` plus-signs on a regular cell grid, same pattern formula as the game (`k = ((col + row*3) % 6 + 6) % 6`)
- Crescent moon upper-right — pixel-by-pixel circle with inner-circle cutout (same technique as game)
- Dark ground strip + road centre-line dashes at bottom of orb

**Sprite (`drawTruckScene`):**
- Scale: `s = R / 58` (truck 60 game units wide → ~50% of orb diameter)
- Position: centered slightly left, bottom of truck rests on orb ground line, gentle ±3px vertical bob (`Math.sin(ts * 0.0008)`)
- Draws in scaled context (`ctx.translate` + `ctx.scale`) with `x=0, y=0` as truck top-left — all game coordinates work as-is
- Includes: chimney, static 3-puff smoke, lavender truck body, cage bars, all 5 cow eyes at full health (golden), cab window, Noam's orange hair + peach face + googly eyes + open mouth, 3 wheels with hub marks
- Character dispatcher: `drawExpCharacter(exp, alpha, ts)` routes by `exp.id` → `drawLaila` or `drawTruckScene`. New games add one `else if` branch.

**Key coordinate mapping (for future sprites):**
- Truck top-left = `(0, 0)` in scaled context
- `TRUCK_H = 28` (height in game units)
- Wheel y relative to truck top = 26 (= GROUND_Y - 2 - (GROUND_Y - TRUCK_H))
- Noam drawn at `(40, 4)` relative to truck top-left

---

### Title one-line fitting

Reveal title (`#reveal-title`) now always stays on exactly one line regardless of game name length.

**CSS:** `white-space: nowrap; overflow: hidden;` — prevents wrapping, enables `scrollWidth` measurement.

**JS (in `showReveal`):**
```js
revTitle.style.fontSize = '2.4rem';
while (revTitle.scrollWidth > revTitle.offsetWidth && parseFloat(revTitle.style.fontSize) > 0.5) {
  revTitle.style.fontSize = (parseFloat(revTitle.style.fontSize) - 0.05) + 'rem';
}
```
Shrinks in 0.05rem steps until text fits. Runs synchronously after `textContent` is set — layout is available immediately because the panel stays in DOM (just `opacity: 0`) when hidden.

---

### Orb UX overhaul — press to play

**Old:** Press orb to reveal → press again to reshuffle → "Enter" button to navigate.
**New:** Press orb to reveal → **press orb to launch** → ↺ button to reshuffle.

**Interaction logic by state:**
- `idle` → press orb → inward swirl → `revealed`
- `revealed` + `exp.url` exists → press orb → `shining` (450ms flash) → navigate
- `revealed` + no url → press orb → reshuffle (same as before)
- `revealed` → press `↺ draw again` button → `doReshuffle()` → outward swirl → next pick

**`↺ draw again` button:**
- Cinzel serif, 0.72rem, letter-spaced, uppercase
- Color and border use `var(--reveal-color)` — tints to the current game's accent automatically
- 45% opacity at rest, 100% on hover
- Hidden (`aria-hidden="true"`) for non-playable experiences (Coming Soon, secret)

---

### Shine effect (launch animation)

When orb is pressed on a playable game:

1. `state = 'shining'`, `shineStart = performance.now()`
2. **Background:** draws the experience background at full alpha
3. **Character silhouette:** `ctx.filter = 'brightness(0.02) saturate(0) contrast(1.4)'` — dims character to ~2% brightness, desaturates to grey, contrast crushes residual color → near-pure black silhouette. Filter applied only during character draw (save/restore isolated).
4. **Flash overlay:** warm white-gold radial gradient from center (`rgba(255,248,220,α)` → amber edge), covers the full orb
5. **Rim:** blazes from experience color to warm white-gold (`rgba(255,240,180,...)`)
6. **Duration:** 450ms, `shineAlpha = Math.pow(elapsed/shineDur, 0.65)` (fast initial rise)
7. **Navigate:** `window.location.href = currentExp.url` when `elapsed >= shineDur`

**Silhouette math:**
- `brightness = 1 - shineAlpha * 0.98` → 0.02 at peak
- `saturate = max(0, 1 - shineAlpha * 1.6)` → hits 0 at shineAlpha ≈ 0.63 (desaturates before peak)
- `contrast(1.4)` pushes remaining dim pixels toward black

**Canvas filter note:** `ctx.filter` supported Chrome 52+, Firefox 49+, Safari 18+. Wrapped in try/catch — on failure, character renders normally against the flash (still looks good).

---

### Next session

- UI/design review pass (Stage 3.5 in launch runway plan)
- Remaining 4 tarot cards → enable dust effect
- R2 video uploads (showreel 188MB, truck clip 123MB, etc.)
- Pending curation decisions: DnD characters, Oshrit's full folder, graphic design work

---

## Session 14 — 2026-06-07

**Goal:** Close out Session 13's pending commit; export site font files.

### What was done

- Committed and pushed Session 13's uncommitted experiences-system refactor + "Drive That Truck, Noam!" (commit `ac55dc2`) — was sitting unpushed since 2026-05-26
- Audited site fonts: **Cinzel** (UI/headings, all weights 400–700) and **Crimson Pro** (body/atmospheric text, incl. italics) are the two active typefaces. **Cormorant Garamond** is `@import`-ed in `global.css` but has zero `font-family` references anywhere — dead import
- Exported the exact `.ttf` weights/styles each font requests to `C:\Users\Micha\Desktop\Work\White Owl Studio\Branding\Fonts\` (Cinzel ×4, Crimson Pro ×5, Cormorant Garamond ×2) for Michael's reference/design use

### Open follow-up
- Cormorant Garamond import in `global.css` line 1 could be removed to trim load time — offered, not yet actioned

### Next session
- Same as above (UI/design review, tarot cards, R2 uploads, curation decisions)
- Optional: strip unused Cormorant Garamond `@import`

---

## Session 15 — 2026-06-20

**Goal:** Rebrand the shop page to *White Owl's Witchy Shop of Stuff* and replace the placeholder catalog with real, live listings linking out to Etsy/Gumroad.

### What was done

- **Rebrand:** nav label `Our Shop` → `Witchy Shop`; homepage tarot card IV → `Witchy Shop`; page header → "The Witchy Shop of Stuff" with approved studio-overflow copy; new page `<title>`, ledger footer, meta description. Section accent stays teal `--accent-shop`.
- **New data file `src/data/shop.ts`** — typed `Product[]`, one object per listing (name, category, detail, voice-guide `oneLiner`, price, platform, url, `images[]`, sigil). Adding a listing = append one object. Mirrors the experiences-page data pattern.
- **`shop.astro` rewritten** to map over `shop.ts`. Whole card is an `<a target="_blank">` to the platform (no native checkout — "commerce on the site later"). Dropped the film-filter tabs (overkill for 6 curated items).
- **6 curated listings** (Michael's picks): Saar Mug (Etsy 4515040912), Reaper Mug (4520161458), Primal Death Mandala Woven Blanket (4515022629), Primal Death Pajama Pants (4515591449), Reaper Tote (4520161257), Gumroad Art Collection Vol.1 (`/l/lcbcxm`). All verified live via Printify API (POD products sync to Etsy).
- **Imagery:** 3 photos per product. Pulled real Printify mockup angles from the Printify API (token in `witchy-shop/pipeline/.env`); blanket leads with the on-couch `context` mockup. Reaper mug/tote lacked enough mockups → composited the raw Reaper artwork (`witchy-shop/art-library/raw/illustrations/reaper.png`) on a dark ground via PIL. Gumroad pack = cover + 2 gallery art pieces scraped from the product page. All WebP-converted (`npm run convert-webp`; note: `update-webp-paths` does NOT scan `shop.ts`, so `.webp` paths were set manually).
- **Interactions:** (1) marquee scroll speed eases 1→0.1 by cursor's vertical distance from a picture's middle (Web Animations `playbackRate`, hover on `.preview-illustration` only); (2) card cross-fade gallery cycles the 3 photos ONLY while hovering the image, resets to primary on leave; (3) marquee caption legibility fixed by removing the band-wide bottom gradient (it sat above the transform-stacking-context track) and replacing it with a per-image bottom fade. Respects `prefers-reduced-motion`.
- Build passes, verified in browser (no console errors). **Committed `afd109a` and pushed to `main`** → Cloudflare auto-deploy to whiteowlhub.com.

### Open follow-up
- **`public/games/lailas-descent.html` has large uncommitted changes** (+1172/−305: responsive canvas height + gameplay tuning) from a prior session — NOT committed this session (unrelated to shop). Offered to commit/push separately; Michael ended session before deciding. **Decide next session so it isn't lost.**
- `.astro/settings.json` has a trivial auto-bumped timestamp — ignore.
- GitHub MCP token in `~/.claude/settings.json` is stale (401 on `get_me`); the git remote's embedded token still works for push. Refresh the MCP token when convenient.
- Gumroad card art (`art-collection-vol1-2`) is fine; could swap for a cleaner square cover if one becomes available.

### Next session
- Decide on the uncommitted Laila's Descent game changes (commit or discard)
- When more listings go live, append to `src/data/shop.ts` (+ drop images in `public/shop/`, run `convert-webp`, set `.webp` paths)
- Same standing items (UI/design review, tarot cards, R2 uploads, curation decisions)
