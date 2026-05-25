export type MediaType = 'image' | 'gif' | 'video';
export type GridType = 'uniform' | 'project';
export type EditorialSpan = 'normal' | 'wide' | 'tall' | 'featured';

export interface PortfolioItem {
  src: string;
  alt: string;
  type: MediaType;
}

export interface ClientProject {
  slug: string;
  name: string;
  cover: string | null;
  items: PortfolioItem[];
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  grid: GridType;
  layout?: 'scroll'; // undefined = default grid; 'scroll' = single column, images connect seamlessly
  items: PortfolioItem[];
  projects?: ClientProject[];
}

export interface EditorialItem {
  kind: 'media';
  src: string;
  type: MediaType;
  alt: string;
  span: EditorialSpan;
  categorySlug: string;
}

// ── Character Design — 16 real assets ────────────────────
const characterDesignItems: PortfolioItem[] = [
  { src: '/portfolio/character-design/page-0.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-1.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-2.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-3.gif',  alt: 'Character design animation — White Owl Studio', type: 'gif' },
  { src: '/portfolio/character-design/page-4.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-5.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-6.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-7.gif',  alt: 'Character design animation — White Owl Studio', type: 'gif' },
  { src: '/portfolio/character-design/page-8.mp4',  alt: 'Character design animation — White Owl Studio', type: 'video' },
  { src: '/portfolio/character-design/page-9.png',  alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-10.png', alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-11.png', alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-12.png', alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-13.png', alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-14.png', alt: 'Character design — White Owl Studio', type: 'image' },
  { src: '/portfolio/character-design/page-15.png', alt: 'Character design — White Owl Studio', type: 'image' },
];

// ── Animation ────────────────────────────────────────────
const animationItems: PortfolioItem[] = [
  { src: '/portfolio/animation/reaping.mp4', alt: 'Reaping — 2D animation', type: 'video' },
  // Showreel (188 MB) — upload to R2: media.whiteowlhub.com/portfolio/animation/showreel.mp4
  // Game animations × 4 — upload to R2: media.whiteowlhub.com/portfolio/animation/
  // Stop motion: Grush → Vimeo; Truck_033 (123 MB) → R2
];

// ── Illustration ──────────────────────────────────────────
const illustrationItems: PortfolioItem[] = [
  { src: '/portfolio/illustration/circus-night.png',    alt: 'Night circus — illustration by Michael B. Jacob', type: 'image' },
  { src: '/portfolio/illustration/tightrope.png',       alt: 'Tightrope — illustration by Michael B. Jacob',    type: 'image' },
  { src: '/portfolio/illustration/explosion.png',       alt: 'Explosion — illustration by Michael B. Jacob',    type: 'image' },
  { src: '/portfolio/illustration/tent-crowd.png',      alt: 'Tent crowd — illustration by Michael B. Jacob',   type: 'image' },
  { src: '/portfolio/illustration/marionette-ink.png',  alt: 'Marionette — ink drawing by Michael B. Jacob',    type: 'image' },
  { src: '/portfolio/illustration/creature-ink.png',    alt: 'Creature — ink drawing by Michael B. Jacob',      type: 'image' },
  { src: '/portfolio/illustration/gorilla-sketch.jpg',  alt: 'Gorilla — ink sketch by Michael B. Jacob',        type: 'image' },
  { src: '/portfolio/illustration/stool-figure.png',    alt: 'Figure with stool — ink drawing by Michael B. Jacob', type: 'image' },
  { src: '/portfolio/illustration/charcoal-figure.jpg', alt: 'Figure study — charcoal by Michael B. Jacob',     type: 'image' },
];

// ── Art Direction ─────────────────────────────────────────
const artDirectionItems: PortfolioItem[] = [
  { src: '/portfolio/art-direction/owls-descent-concept.jpg', alt: "The Owl's Descent — concept art, Laila in the lake", type: 'image' },
  { src: '/portfolio/art-direction/dawn-sphere.png',          alt: 'Dawn — visual development frame',                    type: 'image' },
];

// ── Categories ────────────────────────────────────────────
export const categories: Category[] = [
  {
    slug: 'animation',
    title: 'Animation',
    description: 'Motion work — short films, loops, character animation.',
    grid: 'uniform',
    items: animationItems,
  },
  {
    slug: 'illustration',
    title: 'Illustration',
    description: 'Editorial and narrative illustration.',
    grid: 'uniform',
    items: illustrationItems,
  },
  {
    slug: 'art-direction',
    title: 'Art Direction',
    description: 'Visual development, style guides, production design.',
    grid: 'uniform',
    items: artDirectionItems,
  },
  {
    slug: 'character-design',
    title: 'Character Design',
    description: 'Character sheets, expressions, and animation-ready designs.',
    grid: 'uniform',
    layout: 'scroll',
    items: characterDesignItems,
  },
  {
    slug: 'clients',
    title: 'Projects for Clients',
    description: 'Selected commercial and collaborative projects.',
    grid: 'project',
    items: [],
    projects: [
      {
        slug: 'animated-series',
        name: 'Animated Series — Character & Environment Design',
        cover: '/portfolio/clients/3d-backyard.png',
        items: [
          { src: '/portfolio/clients/3d-characters.png', alt: 'Character lineup — animated series',        type: 'image' },
          { src: '/portfolio/clients/3d-cafeteria.png',  alt: 'Cafeteria environment — animated series',   type: 'image' },
          { src: '/portfolio/clients/3d-backyard.png',   alt: 'Backyard environment — animated series',    type: 'image' },
        ],
      },
      {
        slug: 'mobile-game-features',
        name: 'Mobile Game — Feature Art Direction',
        cover: '/portfolio/clients/pet-evolution.png',
        items: [
          { src: '/portfolio/clients/pet-evolution.png',  alt: 'Pet evolution chart — mobile game',           type: 'image' },
          { src: '/portfolio/clients/heist-01.png',       alt: 'Heist feature concept — mobile game',         type: 'image' },
          { src: '/portfolio/clients/heist-02.png',       alt: 'Heist feature concept — mobile game',         type: 'image' },
          { src: '/portfolio/clients/heist-03.png',       alt: 'Heist feature screenshot — mobile game',      type: 'image' },
          { src: '/portfolio/clients/heist-04.png',       alt: 'Heist feature screenshot — mobile game',      type: 'image' },
          { src: '/portfolio/clients/pet-reskin-01.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/pet-reskin-02.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/pet-reskin-03.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/pet-reskin-04.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/pet-reskin-05.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/pet-reskin-06.png',  alt: 'Pet reskin feature — mobile game',            type: 'image' },
          { src: '/portfolio/clients/treasure-01.png',    alt: 'Treasure hunt feature — mobile game',         type: 'image' },
          { src: '/portfolio/clients/treasure-02.png',    alt: 'Treasure hunt feature — mobile game',         type: 'image' },
        ],
      },
      {
        slug: 'mobile-game-environments',
        name: 'Mobile Game — Environment Design',
        cover: '/portfolio/clients/env-mardi-gras.jpg',
        items: [
          { src: '/portfolio/clients/env-arizona.png',      alt: 'Arizona desert environment — mobile game',  type: 'image' },
          { src: '/portfolio/clients/env-mardi-gras.jpg',   alt: 'Mardi Gras scene — mobile game',            type: 'image' },
          { src: '/portfolio/clients/env-snow-mice.jpg',    alt: 'Snow Mice village — mobile game',           type: 'image' },
          { src: '/portfolio/clients/env-thanksgiving.jpg', alt: 'Thanksgiving scene — mobile game',          type: 'image' },
        ],
      },
    ],
  },
  {
    slug: 'michael',
    title: "Michael's Portfolio",
    description: 'Direction, animation, and personal work by Michael B. Jacob.',
    grid: 'uniform',
    items: [],
  },
  {
    slug: 'oshrit',
    title: "Oshrit's Portfolio",
    description: 'Art direction, illustration, and personal work by Oshrit Gedalya — co-founder and art director of White Owl Studio.',
    grid: 'uniform',
    layout: 'scroll',
    items: [
      { src: '/portfolio/oshrit/concept-grandmanutty.png', alt: 'Character concept — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/concept-01.png',           alt: 'Concept art — Oshrit Gedalya',       type: 'image' },
      { src: '/portfolio/oshrit/concept-02.png',           alt: 'Concept art — Oshrit Gedalya',       type: 'image' },
      { src: '/portfolio/oshrit/sketch-01.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-02.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-03.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-04.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-05.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-06.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-07.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-08.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-09.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-10.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-11.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-12.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-13.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-14.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-15.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-16.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
      { src: '/portfolio/oshrit/sketch-17.png',  alt: 'Sketch — Oshrit Gedalya', type: 'image' },
    ],
  },
  {
    slug: 'puppets-sets',
    title: 'Puppets & Sets',
    description: 'Physical production — puppets, miniatures, and practical sets.',
    grid: 'uniform',
    items: [
      { src: 'https://media.whiteowlhub.com/portfolio/puppets-sets/tabletop-wide.mp4',    alt: 'Tabletop stop motion — wide',    type: 'video' },
      { src: 'https://media.whiteowlhub.com/portfolio/puppets-sets/tabletop-vertical.mp4',alt: 'Tabletop stop motion — vertical',type: 'video' },
    ],
  },
  {
    slug: 'post-production',
    title: 'Post-Production',
    description: 'Compositing, colour, and finishing work.',
    grid: 'uniform',
    items: [],
  },
];

// ── Editorial grid for the main /portfolio page ───────────
// Real character design assets drive the grid; other slots are
// labelled placeholders. Swap in items from other categories as
// content grows — mark span to control the layout rhythm.
export const editorialItems: EditorialItem[] = [
  { kind: 'media', src: '/portfolio/character-design/page-0.png', type: 'image', alt: 'Character design', span: 'featured',  categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-3.gif',  type: 'gif',   alt: 'Character animation', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-1.png',  type: 'image', alt: 'Character design', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-4.png',  type: 'image', alt: 'Character design', span: 'wide',     categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-7.gif',  type: 'gif',   alt: 'Character animation', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-2.png',  type: 'image', alt: 'Character design', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-5.png',  type: 'image', alt: 'Character design', span: 'tall',     categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-6.png',  type: 'image', alt: 'Character design', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-9.png',  type: 'image', alt: 'Character design', span: 'wide',     categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-10.png', type: 'image', alt: 'Character design', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/character-design/page-11.png', type: 'image', alt: 'Character design', span: 'normal',   categorySlug: 'character-design' },
  { kind: 'media', src: '/portfolio/art-direction/owls-descent-concept.jpg', type: 'image', alt: "The Owl's Descent — concept art", span: 'featured',  categorySlug: 'art-direction' },
  { kind: 'media', src: '/portfolio/illustration/circus-night.png',          type: 'image', alt: 'Night circus — illustration',    span: 'wide',     categorySlug: 'illustration' },
  { kind: 'media', src: '/portfolio/illustration/marionette-ink.png',        type: 'image', alt: 'Marionette — ink',               span: 'normal',   categorySlug: 'illustration' },
  { kind: 'media', src: '/portfolio/clients/3d-backyard.png',                type: 'image', alt: 'Animated series — environment',  span: 'wide',     categorySlug: 'clients' },
  { kind: 'media', src: '/portfolio/illustration/tightrope.png',             type: 'image', alt: 'Tightrope — illustration',       span: 'normal',   categorySlug: 'illustration' },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
