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

## Next session → Stage 4 Creative Review + About page
