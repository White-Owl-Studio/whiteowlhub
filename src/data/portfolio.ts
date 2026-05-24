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

// ── Categories ────────────────────────────────────────────
export const categories: Category[] = [
  {
    slug: 'animation',
    title: 'Animation',
    description: 'Motion work — short films, loops, character animation.',
    grid: 'uniform',
    items: [],
  },
  {
    slug: 'illustration',
    title: 'Illustration',
    description: 'Editorial and narrative illustration.',
    grid: 'uniform',
    items: [],
  },
  {
    slug: 'art-direction',
    title: 'Art Direction',
    description: 'Visual development, style guides, production design.',
    grid: 'uniform',
    items: [],
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
        slug: 'client-placeholder-a',
        name: '— Client project to be added —',
        cover: null,
        items: [],
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
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}
