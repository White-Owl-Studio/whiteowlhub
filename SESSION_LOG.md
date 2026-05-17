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

## Next session → Stage 1 Creative Review + Landing Page build
