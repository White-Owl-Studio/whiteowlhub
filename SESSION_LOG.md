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
