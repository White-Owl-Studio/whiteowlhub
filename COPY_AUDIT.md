# Copy Audit — whiteowlhub.com

The single source of truth for the full text pass. Every piece of written copy on
the site is listed here once. We work through it item by item: you either **OK** it
as-is or we **rewrite** it. When a rewrite is approved, it gets applied to the real
source file and the item is closed.

**Scope:** visible page copy + SEO metadata (titles/descriptions) + meaningful alt text.
Auto-generated alt text (film stills, product views) inherits its parent item's
approval — e.g. approving a film's title approves `"{title} — still 1"`. In-game
narrative text (Laila's Descent, the truck game) is **out of scope**.

## Status legend
- 🔲 **Pending** — not yet reviewed
- ✅ **Approved** — kept as-is
- ⭑ **Rewritten** — new copy drafted, awaiting your OK
- ✏️ **Applied** — approved rewrite written into the source file

## Progress
**5 / 71 reviewed** · last updated 2026-07-23 · GLOBAL section (G-01…G-05) complete

---

## ⚑ Flags (things to resolve as we pass through)
- **CS-02** — coming-soon reads *"Breath, something new is growing here."* — likely meant *"Breathe,"* (the breathing motif is the core of Laila's story). Confirm.
- **F-14** — Film VI *Torn Apart* still has placeholder copy (`— logline to be written —`). Needs real writing or removal from the public list.
- **Footer email mismatch** — footer shows `hello@whiteowlhub.com`; elsewhere the studio uses `michaelbjacob@gmail.com`. Pick one canonical contact. (G-03)
- **Clients list** — `about` lists *Superplay* as a client; memory notes Oshrit moved Superplay → Gliding Deer (both are listed). Confirm Superplay belongs as a client. (A-10)
- **About "Press" section** — CSS exists but the markup was removed; no press copy is live. Nothing to review unless we re-add it.

---

## GLOBAL — site-wide (Nav, Footer)

### G-01 · Nav labels ✅
`components/Nav.astro`
> Our Films · Our Work · About Us · Witchy Shop · Online Playthings
(The Coven dropped — hidden for launch, Phase 5.) Approved as-is; "Online Playthings" kept.

**Revised:** — (approved as-is)

### G-02 · Footer tagline ✏️
`components/Footer.astro`
> ~~Tales of courage in broken worlds. / Stories made to last.~~

**Revised:** "Tales of courage in broken worlds / Narrative Driven Art" — APPLIED to footer.
✅ Decided (Option A, 2026-07-23): "Narrative Driven Art" replaces "Stories made to last." **site-wide** — also applied to Base.astro default meta, index.astro home meta, about.astro manifesto (pre-resolves A-05 tagline line), films.astro biography quote (pre-resolves F-07 quote), and the CLAUDE.md locked tagline. It is now the studio tagline.

### G-03 · Footer contact block ✏️
`components/Footer.astro`
> **Contact** / hello@whiteowlhub.com / ~~Tel Aviv~~ · Negev Desert · Israel

**Revised:** location "Tel Aviv" → "Mitzpe Ramon" — APPLIED. Email `hello@whiteowlhub.com` confirmed (Phase 0). Still to sync: coming-soon page still shows the gmail (CS section).

### G-04 · Footer socials heading ✏️
`components/Footer.astro`
> **Find Us** — Instagram · YouTube · TikTok · LinkedIn · Ko-Fi

**Revised:** added **Facebook** → Instagram · YouTube · Facebook · TikTok · LinkedIn · Ko-Fi — APPLIED.

### G-05 · Footer bottom bar ✅
`components/Footer.astro`
> © {year} White Owl Studio. All rights reserved. ✦ whiteowlhub.com

**Revised:** — (approved as-is)

---

## HOME — `pages/index.astro`

### H-01 · Meta (title + description) 🔲
> **Title:** White Owl Studio
> **Desc:** Tales of courage in broken worlds. Stories made to last. White Owl Studio — an animation production house from Israel.

**Revised:** —

### H-02 · Deck prompt 🔲
> Spread your cards?

**Revised:** —

### H-03 · Card I sub — Our Films 🔲
> The moving dark

**Revised:** —

### H-04 · Card II sub — Our Work 🔲
> Ink and light

**Revised:** —

### H-05 · Card III sub — About Us 🔲
> The makers

**Revised:** —

### H-06 · Card IV sub — Witchy Shop 🔲
> The offering

**Revised:** —

### H-07 · Card V sub — Online Playthings 🔲
> Enter the game

**Revised:** —

### H-08 · Card VI sub — The Coven 🔲
> For initiates only

**Revised:** —

---

## FILMS — `pages/films.astro` + `data/films.ts`

### F-01 · Meta (title + description) 🔲
> **Title:** Our Films
> **Desc:** Six films from White Owl Studio — hand-crafted animation about people navigating broken worlds. From short films in production to a feature in development.

**Revised:** —

### F-02 · Card-index header 🔲
> **Eyebrow:** The Works · **Title:** Our Films · **Sub:** Hover to reveal · Click to enter

**Revised:** —

### F-03 · Biography header 🔲
> **Eyebrow:** Our Story · **Title:** Cinema as Calling

**Revised:** —

### F-04 · Biography — opening 🔲
> At White Owl Studio, every film begins not with a script but with a feeling — the particular texture of a world not yet made, pressing against the inside of the mind.

**Revised:** —

### F-05 · Biography — Stories of Courage 🔲
> **Stories of Courage** — We are drawn to characters in motion — people pushed to the edge of what they know about themselves, and what they discover when they arrive there. Our films do not flinch.

**Revised:** —

### F-06 · Biography — Broken Worlds 🔲
> **Broken Worlds** — Our settings are fractured — cities, families, systems that no longer hold. We believe these are the only honest backdrops for the stories worth telling right now.

**Revised:** —

### F-07 · Biography — closing quote 🔲
> "Tales of courage in broken worlds. Stories made to last."

**Revised:** —

### F-08 · Modal UI strings 🔲
> Trailer · Coming Soon · Full Details · credit labels: Director / Producer / Cast / Co-Production

**Revised:** —

### F-09 · Film I — The Owl's Descent 🔲
> **Subtitle:** A Meditation in Stop Motion
> **Logline/Summary:** Trapped in an eternal recurring nightmare, Laila is about to break free of the lake that holds her — but to break free, she must learn to breathe.

**Revised:** —

### F-10 · Film II — The One Who Drives the Truck 🔲
> **Subtitle:** A Desert Folk Tale
> **Logline:** On a stormy night in the Arava desert, a vegan teenager, a cattle truck driver, and their cargo of cows must find their way through — together.
> **Summary:** Oshri, a barrel-chested truck driver from Eilat, picks up Noam — seventeen, vegan, and furious — on a stormy night in the Arava. They clash immediately. The cows in the back are listening. When Noam steals the truck and crashes it, and the cows choose to go back and help the man who hauls them, a campfire tale becomes something else: a parable about compassion arriving from the last direction you expected it. Handcrafted stop-motion animation with fabricated puppets, sets, and props.

**Revised:** —

### F-11 · Film III — Yaara's Place At Home 🔲
> **Subtitle:** A Cautionary Tale
> **Logline:** Yaara doesn't quite fit — not with the girls, not with the boys. When her imagination builds her a world of its own, she may never want to leave.
> **Summary:** Yaara is ten, from Kiryat Malachi, and she collects insects no one wants to touch. The girls won't have her; the boys don't know what to do with her. So she makes an imaginary friend from tied scarves and old clothes — neither girl nor boy, just hers. At night, her creatures come alive and her closet opens into a forest of fabric and wings. But the deeper she goes in, the harder it gets to find the way back. A 2D drawn animation directed by Oshrit Gedalya.

**Revised:** —

### F-12 · Film IV — Let's Solve It Once and For All 🔲
> **Subtitle:** A Conversation in Black and White
> **Logline:** Real Israelis, their real solutions to the conflict — placed side by side until they collapse into each other.
> **Summary:** Real Israelis, speaking in their own words — about trains from Egypt to Lebanon, forced peace, divine authority, and nuclear fire. Contradictory, naïve, cynical, and sincere, their solutions are placed side by side without a verdict. The film doesn't argue. It listens, until the voices become a single, impossible picture. Mixed-media collage animation built around real recorded voices.

**Revised:** —

### F-13 · Film V — Dawn 🔲
> **Subtitle:** A Poem in Charcoal
> **Logline:** The machines wake at dusk, assemble, and march — back toward the dying city, to rest.
> **Summary:** Chimeric machines, built from the remnants of human civilization, rise at nightfall and move toward the city they served. Not to destroy — to dissolve back into it. Drawn in charcoal and photographed frame by frame under a DSLR camera, Dawn is a poem about the end of things and the strange grace of return.

**Revised:** —

### F-14 · Film VI — Torn Apart ⚑ 🔲
> **Logline:** — logline to be written —
> **Summary:** — plot summary to be written —

**Revised:** —

---

## OUR WORK — `pages/portfolio/index.astro` + `data/portfolio.ts`

### W-01 · Meta (title + description) 🔲
> **Title:** Our Work
> **Desc:** Animation, illustration, character design, puppets and more — the portfolio of White Owl Studio founders Michael B. Jacob and Oshrit Gedalya.

**Revised:** —

### W-02 · Hero 🔲
> **Eyebrow:** II · Our Work · **Title:** Our Work · **Sub:** Animation · Illustration · Character Design · Direction

**Revised:** —

### W-03 · Category-nav header 🔲
> **Eyebrow:** Browse by Category · **Title:** All Work

**Revised:** —

### W-04 · Category — Animation 🔲
> Motion work — short films, loops, character animation.

**Revised:** —

### W-05 · Category — Illustration 🔲
> Editorial and narrative illustration.

**Revised:** —

### W-06 · Category — Art Direction 🔲
> Visual development, style guides, production design.

**Revised:** —

### W-07 · Category — Character Design 🔲
> Character sheets, expressions, and animation-ready designs.

**Revised:** —

### W-08 · Category — Projects for Clients 🔲
> Selected commercial and collaborative projects.

**Revised:** —

### W-09 · Category — Michael's Portfolio 🔲
> Direction, animation, and personal work by Michael B. Jacob.

**Revised:** —

### W-10 · Category — Oshrit's Portfolio 🔲
> Art direction, illustration, and personal work by Oshrit Gedalya — co-founder and art director of White Owl Studio.

**Revised:** —

### W-11 · Category — Puppets & Sets 🔲
> Physical production — puppets, miniatures, and practical sets.

**Revised:** —

### W-12 · Category — Post-Production 🔲
> Compositing, colour, and finishing work.

**Revised:** —

---

## ABOUT — `pages/about.astro`

### A-01 · Meta (title + description) 🔲
> **Title:** About Us
> **Desc:** White Owl Studio is an animation production house founded by Michael B. Jacob and Oshrit Gedalya. We make hand-crafted films about people navigating broken worlds with something approaching courage.

**Revised:** —

### A-02 · Intro header 🔲
> **Eyebrow:** Who We Are · **Title:** White Owl Studio

**Revised:** —

### A-03 · Intro bio — paragraph 1 🔲
> Michael B. Jacob and Oshrit Gedalya are the founders of White Owl Studio — an independent animation production house making hand-crafted films about people navigating broken worlds with something approaching courage.

**Revised:** —

### A-04 · Intro bio — paragraph 2 🔲
> Michael directs and animates. Oshrit directs, designs, and builds the visual worlds their stories inhabit. Together they are the studio: its creative voice, its aesthetic conscience, its engine.

**Revised:** —

### A-05 · Manifesto blockquote 🔲
> We are not a pipeline. We are not a content studio. We make films the way other people make furniture — slowly, by hand, with care for the person who will eventually sit in it.
> _(tagline:)_ Stories made to last.

**Revised:** —

### A-06 · Process header 🔲
> **Eyebrow:** How We Work · **Title:** From First Spark to Final Frame · **Sub:** A complete in-house production — development through delivery

**Revised:** —

### A-07 · Process — 01 Pre-Production 🔲
> Every film begins in conversation — a feeling, an image, a question that won't leave us alone. We develop scripts through voice and iteration, building the world from the ground up: concept art, character design, colour keys, storyboards. We don't move forward until the animatic earns every beat. The story has to be solid before a single frame is drawn.
> _(tags:)_ Development · Scripting · Visual Development · Storyboard · Animatic

**Revised:** —

### A-08 · Process — 02 Production 🔲
> Animation at White Owl is deliberate. Every pose is considered, every transition authored. We work with voice talent, composers, and sound designers as collaborators — not vendors — because the film's world needs to be consistent in every layer at once. Production is where the work becomes undeniable.
> _(tags:)_ Animation · Voice Recording · Sound Design · Music Composition

**Revised:** —

### A-09 · Process — 03 Post-Production 🔲
> Editing, colour, and sound mix are the last acts of authorship. We finish our work to festival and broadcast standards, and we accompany each film through submission, programming, and release. The work doesn't end when the export does. We follow our films into the world.
> _(tags:)_ Editing · Colour Grading · Sound Mix · Delivery · Festival Distribution

**Revised:** —

### A-10 · Clients header + list ⚑ 🔲
> **Eyebrow:** Trusted By · **Title:** Some of Our Clients & Partners
> _(names:)_ Liran Kapel · Superplay · KAKAL · PARTNER · The Hive Studio · Pil Animation · Gliding Deer

**Revised:** —

---

## WITCHY SHOP — `pages/shop.astro` + `data/shop.ts`

### S-01 · Meta (title + description) 🔲
> **Title:** Witchy Shop of Stuff
> **Desc:** White Owl's Witchy Shop of Stuff — prints, mugs, blankets, and digital art from the studio floor. Everything here came from a story.

**Revised:** —

### S-02 · Shop header 🔲
> **Eyebrow:** White Owl Studio · **Title:** The Witchy Shop of Stuff
> **Subtitle:** Where the work overflows. Textures filmed at dusk, characters drawn at 3am, frames that asked to stay. Everything here came from a story. Take what you need.

**Revised:** —

### S-03 · Ledger footer 🔲
> Every piece comes with one line of story.
> Made or chosen by hand, out of the Negev desert. More arrives as the films do. Take what you need.

**Revised:** —

### S-04 · Catalog UI strings 🔲
> Available on {Etsy/Gumroad} · View on {Etsy/Gumroad}

**Revised:** —

### S-05 · Product — Saar the Moonboy (Mug) 🔲
> **Detail:** Black ceramic mug · 11oz · dishwasher safe
> **One-liner:** The smallest wizard we drew. He takes his coffee black.

**Revised:** —

### S-06 · Product — Reaper, First Day (Mug) 🔲
> **Detail:** Black ceramic mug · 11oz · dishwasher safe
> **One-liner:** First day on the job. He'll need the coffee too.

**Revised:** —

### S-07 · Product — Primal Death Mandala Throw (Blanket) 🔲
> **Detail:** Cotton-blend woven throw · tapestry weave · fringed
> **One-liner:** Everything that decays, woven into something that keeps you warm.

**Revised:** —

### S-08 · Product — Primal Death Pajama Pants 🔲
> **Detail:** All-over print · women's sleep pant · soft brushed knit
> **One-liner:** Wear the whole cycle of decay to bed. Rest easy.

**Revised:** —

### S-09 · Product — Reaper Canvas Tote 🔲
> **Detail:** Organic canvas · dual handles · ~15×15in · machine washable
> **One-liner:** A bag for carrying things into the dark and back.

**Revised:** —

### S-10 · Product — Art Collection Vol. I (Digital) 🔲
> **Detail:** Digital download · original studio art · instant delivery
> **One-liner:** What overflowed from the films, gathered into one download.

**Revised:** —

---

## ONLINE PLAYTHINGS — `pages/experiences.astro` + `data/experiences.ts`

### P-01 · Meta (title + description) 🔲
> **Title:** Online Playthings
> **Desc:** Interactive browser experiences from White Owl Studio — games, worlds, and hidden things. Press the orb to see what you find.

**Revised:** —

### P-02 · Orb UI strings 🔲
> **Eyebrow:** Online Playthings · **Orb aria:** Press to reveal an experience from White Owl Studio · **Button:** ↺ draw again

**Revised:** —

### P-03 · Experience — Laila's Descent 🔲
> **Eyebrow:** Horror Shooter · **Tagline:** She came looking for the exit. There isn't one.

**Revised:** —

### P-04 · Experience — Drive That Truck, Noam! 🔲
> **Eyebrow:** Endless Runner · **Tagline:** He meant well. The cows are less sure.

**Revised:** —

### P-05 · Experience — [No Name Yet] (placeholder) 🔲
> **Eyebrow:** Coming Soon · **Tagline:** Not ready. Possibly not safe.

**Revised:** —

### P-06 · Experience — secret 🔲
> **Title:** ⊹ ⊹ ⊹ · **Tagline:** You found something that doesn't have a name yet. Check back.

**Revised:** —

---

## THE COVEN — `pages/coven/index.astro` *(pre-launch — Stage 7, lower priority)*

### C-01 · Meta (title + description) 🔲
> **Title:** The Coven
> **Desc:** The Coven — a members circle for those who found their way here. Earn sigils, unlock experiences, and become part of the White Owl Studio inner world.

**Revised:** —

### C-02 · Gate 🔲
> **Title:** The Coven · **Buttons:** Join the Coven / Sign In

**Revised:** —

### C-03 · Auth panels 🔲
> Return to the circle · Enter the Coven · Enter the circle · Join the Coven · Preview the dashboard →

**Revised:** —

### C-04 · Dashboard + sigil names 🔲
> Initiate · Your Sigils · tiers: Initiate / Keeper / Elder · (9 sigil names — pull from `data` when reviewing)

**Revised:** —

---

## COMING SOON — `pages/coming-soon.astro` *(current live gate)*

### CS-01 · Title 🔲
> White Owl Studio

**Revised:** —

### CS-02 · Atmospheric message ⚑ 🔲
> Breath, something new is growing here.

**Revised:** —
