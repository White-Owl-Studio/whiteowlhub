# whiteowlhub — Project Context for Claude

## What this is
The official White Owl Studio website at **whiteowlhub.com**. An Astro v5 static site with a tarot-inspired dark aesthetic. Built in stages following the plan at `~/.claude/plans/crystalline-humming-blanket.md`.

## Working directory
`C:\Users\Micha\OneDrive\Desktop\Work\Claude\ClaudeCodeTest\whiteowlhub\`

## How to continue
1. Read `SESSION_LOG.md` — what was done and when
2. Read the plan: `~/.claude/plans/crystalline-humming-blanket.md`
3. Read memory: `~/.claude/projects/C--Users-Micha-OneDrive-Desktop-Work-Claude-ClaudeCodeTest/memory/project_wos_website.md`
4. Run `npm run dev` to start local dev server (port 4321)
5. Run pre-stage creative review with user before writing any code

## Current stage
**Stage 7 — The Coven.** Stages 0–6 complete.

**Rule: always run the pre-stage creative review before writing code for a new stage.**

## Tech stack
- Framework: Astro v5, `output: 'static'` (switch to SSR in Stage 7)
- Hosting: Cloudflare Pages — auto-deploys from `main` on `White-Owl-Studio/whiteowlhub`
- Domain: whiteowlhub.com (Cloudflare DNS)
- Auth + DB: Supabase (planned for Stage 7 — Coven)
- Fonts: Cinzel, Crimson Pro, Cormorant Garamond (Google Fonts)

## Design system
Full token system in `src/styles/global.css`. Key values:
- Background: `#050409` — near-black with violet undertone
- Gold: `#f5d060` — primary brand, nav links default state
- Section accents (nav hover + page theme):
  - Our Films: `#e02828` (Laila red)
  - Our Work: `#7040b8` (violet)
  - About Us: `#ede4cc` (bone)
  - Market of Stuff: `#42e0b0` (teal)
  - Online Playthings: `#78e058` (frog green)
  - The Coven: `#2a5a3a` (forest)
- Fonts: Cinzel (headings/UI), Crimson Pro (body)
- Noise overlay: SVG fractalNoise at 0.032 opacity

## Deployment
- GitHub: `https://github.com/White-Owl-Studio/whiteowlhub`
- Push to `main` triggers auto-deploy on Cloudflare Pages
- Use `curl` with `$GITHUB_PERSONAL_ACCESS_TOKEN` from `~/.claude/settings.json`
- **Important:** `output: 'static'` must remain until Stage 7. The Cloudflare SSR adapter (v12+) requires KV/Images bindings not yet provisioned.

## File structure
```
src/
  components/   Nav.astro, Footer.astro (+ future: TarotCard, FilmCard, etc.)
  layouts/      Base.astro (shared head + Nav + Footer)
  pages/        index, films, portfolio, about, shop, experiences, coven/index
  styles/       global.css (design tokens)
public/
  ui/           logo.gif
  portfolio/    (portfolio images go here — Stage 3)
  films/        (film posters go here — Stage 2)
```

## Stage roadmap summary
- Stage 0 ✅ Foundation — Astro setup, Nav, Footer, 7 stubs, deployed
- Stage 1 🔲 Landing page — tarot card hero fan, studio wordmark, section preview
- Stage 2 🔲 Films page
- Stage 3 🔲 Portfolio page
- Stage 4 🔲 About page
- Stage 5 🔲 Shop page
- Stage 6 🔲 Online Experiences page
- Stage 7 🔲 The Coven — auth, game saves, secret content (re-enables SSR)

## Creative decisions locked
- Studio tagline: "Tales of courage in broken worlds. Stories made to last."
- Logo: `logo.gif` + thin "White Owl Studio" text below
- Nav links: gold by default, section accent on hover
- Pre-stage creative review required before each stage — walk through all content/design decisions with Michael before coding
