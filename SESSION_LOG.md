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
