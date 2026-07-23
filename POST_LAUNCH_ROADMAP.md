# Post-Launch Roadmap — whiteowlhub.com

Everything intentionally **deferred** from the soft launch, plus the fuller vision, so nothing
is lost by hiding features for launch day. Companion to `LAUNCH_QA.md` (the launch checklist)
and `COPY_AUDIT.md` (the copy pass).

> **Note:** the original master plan (`~/.claude/plans/crystalline-humming-blanket.md`, referenced
> in `CLAUDE.md`) no longer exists on disk. This file is now the durable record of what remains.
> The stage history below is reconstructed from `CLAUDE.md` and `SESSION_LOG.md`.

---

## Stage roadmap (from CLAUDE.md)
- Stage 0 ✅ Foundation — Astro setup, Nav, Footer, stubs, deploy
- Stage 1 ✅ Landing page — tarot deck / card spread
- Stage 2 ✅ Films page
- Stage 3 ✅ Portfolio ("Our Work")
- Stage 4 ✅ About page
- Stage 5 ✅ Shop → rebuilt as "Witchy Shop of Stuff"
- Stage 6 ✅ Online Experiences / Playthings
- Stage 7 🔲 **The Coven** — auth, member dashboard, achievements/sigils, secret content. Re-enables SSR. **Deferred past soft launch** (this doc).

---

## 1. The Coven — the big deferred feature (Stage 7)

**Decision (2026-07-22):** hidden for soft launch because it is currently a **front-end mockup with
no backend** — sign-in and achievements go nowhere. Hiding it at launch is a *visibility toggle only*;
the built UI stays in the repo so we keep building it. This section is the build plan to make it real.

### What already exists (in `src/pages/coven/index.astro`)
- **Two client-side views** toggled by `data-view` on `#coven-wrap`: a **Gate** view (rotating sigil ring,
  Join / Sign In buttons) and a **Dashboard** view.
- **9 sigils across 3 tiers**, already designed as inline SVGs and named:
  - **Tier 1 — Initiate:** The First Flame · The Wanderer · The Archivist
  - **Tier 2 — Keeper:** The Dreamer · The Witness · The Curious
  - **Tier 3 — Elder:** The Persistent · The Patient · The Caller
- Auth panel copy ("Return to the circle", "Enter the Coven", "Join the Coven", "Preview the dashboard →")
  and dashboard scaffold (Initiate tier label, "Your Sigils").
- Copy items tracked as **C-01…C-04** in `COPY_AUDIT.md`.

### What's needed to make it functional
1. **Switch Astro to SSR** with the Cloudflare adapter (`@astrojs/cloudflare`, already a dependency).
   `astro.config.mjs` currently `output: 'static'` — Stage 7 flips this. **Blocker noted in CLAUDE.md:**
   the SSR adapter (v12+) needs KV/Images bindings provisioned in Cloudflare first.
2. **Auth + DB via Supabase** (`@supabase/supabase-js`, already installed but unused). Needs:
   - A Supabase project + `SUPABASE_URL` / `SUPABASE_ANON_KEY` env vars (Cloudflare Pages env, not committed).
   - Email/OAuth sign-in wired to the Gate view's Join / Sign In buttons.
   - A `profiles` table (tier, joined date) and an `earned_sigils` table (user_id, sigil_id, earned_at).
3. **Achievement logic** — define how each of the 9 sigils is earned (e.g. finishing a game, finding the
   secret experience, visiting all sections). Persist to Supabase; render earned/locked state on the dashboard.
4. **Game-save integration** — the games (Laila's Descent, Drive That Truck) currently persist to
   `localStorage` (e.g. `lailaFree`). Optionally sync these to the member profile.
5. **Secret content** — gated experiences/pages that only members (or certain tiers) can reach; ties into
   the "secret" experience already in `data/experiences.ts` and home card VI.
6. **Re-expose in UI** — reverse the launch gating (add back: Nav entry, home tarot card VI, `/coven` route).

### Gating applied at launch (to reverse when shipping the Coven)
- Nav: Coven entry removed/hidden in `src/components/Nav.astro`
- Home: tarot card VI (`/coven`) removed/hidden in `src/pages/index.astro`
- Route: `/coven` prevented from being reached/indexed (see Phase 5 in `LAUNCH_QA.md` for the exact method used)

---

## 2. Other deferred / remaining work

### Art & media (see `LAUNCH_QA.md` Phase 4)
- **`og-default.jpg` missing** (referenced in `Base.astro`) — social shares currently break. Create 1200×630.
- **`apple-touch-icon.png` missing** (180×180) — referenced in `Base.astro`.
- Portfolio categories with **0 items:** `michael`, `post-production`. Thin: `animation` (1 clip + R2 TODOs),
  `art-direction` (2). Fill or keep hidden.
- `films.astro` biography photos + some posters are still placeholder `<div>`s.
- **R2 video uploads** (from `data/portfolio.ts` comments): showreel.mp4 (188 MB), game animations ×4,
  Truck_033 (123 MB), Grush → Vimeo. Host on `media.whiteowlhub.com` (R2), reference by URL.

### Content
- **Film VI "Torn Apart"** — dropped from the public list for launch. Write a real logline + summary and
  give it a card/stills before re-adding.
- Full **copy pass** — 71 items in `COPY_AUDIT.md`, resume at G-01.

### Infra / SEO (see `LAUNCH_QA.md` Phases 2 & 7)
- Security headers (`public/_headers`: CSP etc.), fix the plaintext PAT in the git remote URL.
- Search Console + analytics, OG image, sitemap verification.

---

## Reference
- Design tokens + stage notes: `CLAUDE.md`
- Session history: `SESSION_LOG.md`
- Launch checklist: `LAUNCH_QA.md`
- Copy pass: `COPY_AUDIT.md`
