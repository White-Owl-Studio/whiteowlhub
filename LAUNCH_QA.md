# Launch QA — whiteowlhub.com

Working tracker for getting the site from behind the coming-soon gate to a public **soft launch**.
Companion to `COPY_AUDIT.md` (the copy pass) and `SESSION_LOG.md` (session history).
Work top-to-bottom by phase; check items as they land.

## Status legend
- 🔲 **To do**
- 🔄 **In progress**
- ✅ **Done**
- ⏸️ **Deferred** (post-launch or blocked)
- ⚑ **Needs a decision / external input**

## The launch switch
`src/layouts/Base.astro` — the two `!import.meta.env.DEV && …` lines hide every page and
redirect to `/coming-soon` in production. **Removing those two lines is the launch.**
Everything below is what must be true before flipping them.

---

## Phase 0 — Decisions · ✅ LOCKED (2026-07-22)
1. **Feature scope:** ship **Witchy Shop** + **Online Playthings/Games**. **Defer The Coven** — hide from nav, home tarot card VI, and its route (it's a non-functional mockup, no backend).
2. **Canonical contact email:** `hello@whiteowlhub.com` — footer, coming-soon page, and schema must all agree.
3. **Film VI "Torn Apart":** drop from the public films list for launch (placeholder copy, no art).
4. **Copy flags:** fix "Breath" → "Breathe" on the coming-soon gate; **keep** Superplay in the About clients list.

---

## Phase 1 — Performance & build hygiene
- ✅ **Asset diet.** Moved 106 redundant original PNG/JPG files (each already had a referenced `.webp` sibling) out of `public/` into tracked `_source-art/`. `public/` 290 MB → **47 MB**; deploy shrinks the same. Masters preserved + reversible. Only real non-webp refs were `og-default.jpg` / `apple-touch-icon.png`, which don't exist yet (see Phase 4/7).
- ✅ **Fonts.** Moved the Google Fonts load from a render-blocking CSS `@import` (`global.css:1`) to a `<link>` in `Base.astro` `<head>`. Dropped **Cormorant Garamond** (imported but never used). Cinzel + Crimson Pro only.
- ✅ **`astro check` errors.** Fixed all 12 TS strict-null errors (all in `coming-soon.astro`'s canvas setup — cast `getElementById` to `HTMLCanvasElement`, same pattern as `Base.astro`). Now **0 errors / 0 warnings** (10 benign `is:inline` hints remain). Added an `npm run check` script — kept it OUT of the deploy `build` so it doesn't add ~2 min to every Cloudflare build; wire into a pre-commit hook or CI instead.
- 🔲 Consider slimming the repo later: `_source-art/` is tracked (safe/versioned) but adds ~244 MB to clones. Option to `git rm` + rely on external masters if desired — doesn't affect the served site either way.

## Phase 2 — Security & infra
- 🔲 Add `public/_headers` (Cloudflare Pages) with CSP, `X-Content-Type-Options`, frame-ancestors/`X-Frame-Options`, `Referrer-Policy`, HSTS.
- ⚑ Git remote has a PAT embedded in the URL in plaintext (`git remote -v`) — move to a credential helper; refresh the stale GitHub MCP token.
- 🔲 Confirm `robots.txt` + sitemap for launch (sitemap integration present; coming-soon is correctly `noindex`).

## Phase 3 — Copy pass (71 items)
- 🔲 Work `COPY_AUDIT.md` top-to-bottom, resume at **G-01**. Per-item recommendations from Session 16 ready.
- ✅ (decided) Apply during pass: "Breathe" fix (CS-02); canonical email `hello@whiteowlhub.com` (G-03 + coming-soon + schema); keep Superplay (A-10); remove Torn Apart entry (F-14).

## Phase 4 — Art & portfolio pass
- ⚑ `og-default.jpg` (referenced in `Base.astro`) **is missing** — every social share currently has a broken OG image. Create a 1200×630 default. Also add `apple-touch-icon.png` (180×180).
- 🔲 Portfolio categories `michael` and `post-production` have **0** items; `animation` has 1 clip + R2 TODOs; `art-direction` only 2. Fill or hide empty categories (an empty category page reads worse than a hidden one).
- 🔲 `films.astro` has placeholder `<div>`s for biography photos and some posters — supply real images or gate.
- 🔲 Featured-art review across film cards + the portfolio editorial grid.

## Phase 5 — Feature-gating (implements Phase 0.1) · ✅ DONE (2026-07-23)
- ✅ Hid The Coven, reversibly: nav entry commented out (`Nav.astro`); home tarot card VI wrapped in `{false && (…)}` (`index.astro`) → home now shows 5 cards; `/coven` route redirected to `/` in production via `public/_redirects` (dev still serves it); `/coven` excluded from the sitemap (`astro.config.mjs` filter). The page + UI stay in the repo — see `POST_LAUNCH_ROADMAP.md` to restore.
- 🔲 Optional polish: home spread is now 5 cards (3+2 desktop / 2+2+1 mobile) with an orphan last row — centre/rebalance if desired.

## Phase 6 — Cross-device, a11y & QA sweep
- 🔲 Responsive check every page + both games on real viewports.
- 🔲 A11y pass (skip-link + aria labels are a decent baseline already).
- 🔲 404 behavior; broken-link scan; test the actual gate-flip on a preview deploy.

## Phase 7 — SEO & web visibility *(explicitly last)*
- 🔲 Per-page titles/descriptions (mostly lands with the copy pass); OG image (Phase 4); structured data (Organization schema already present); sitemap; Search Console + analytics.

## Phase 8 — Launch
- 🔲 Flip the two gate lines, deploy, smoke-test production, monitor.

---

## Key findings reference (2026-07-22 sweep)
- Build passes: `npm run build` → 19 pages, ~15s. Site is fully static (no SSR/server code despite Stage-7 plans).
- The Coven: front-end mockup only; `@supabase/supabase-js` is an unused dependency.
- No secrets tracked in git.
