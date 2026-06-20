export interface Product {
  id: number;
  slug: string;
  /** Short type label shown on the card, e.g. "Mug", "Woven Blanket" */
  category: string;
  name: string;
  /** One physical detail line — material, size, edition */
  detail: string;
  /** Voice-guide one-liner — a door, not a description */
  oneLiner: string;
  price: string;
  /** Where the buyer is sent to complete the purchase */
  platform: 'etsy' | 'gumroad';
  url: string;
  /** Real product photos in /public/shop/ — first is the primary */
  images: string[];
  /** Fallback line-art sigil while the image loads / in the marquee */
  sigil: 'frame' | 'puppet' | 'spiral' | 'book';
}

/**
 * The curated storefront — a hand-picked "best of" from
 * White Owl's Witchy Shop of Stuff on Etsy + Gumroad.
 * Cards link out to the platform; checkout is fulfilled there.
 * Add a product by appending one object here.
 */
export const products: Product[] = [
  {
    id: 1,
    slug: 'saar-mug',
    category: 'Mug',
    name: 'Saar the Moonboy',
    detail: 'Black ceramic mug · 11oz · dishwasher safe',
    oneLiner: 'The smallest wizard we drew. He takes his coffee black.',
    price: '$18',
    platform: 'etsy',
    url: 'https://www.etsy.com/listing/4515040912',
    images: ['/shop/saar-mug-1.webp', '/shop/saar-mug-2.webp', '/shop/saar-mug-3.webp'],
    sigil: 'spiral',
  },
  {
    id: 2,
    slug: 'reaper-mug',
    category: 'Mug',
    name: 'Reaper, First Day',
    detail: 'Black ceramic mug · 11oz · dishwasher safe',
    oneLiner: "First day on the job. He'll need the coffee too.",
    price: '$18',
    platform: 'etsy',
    url: 'https://www.etsy.com/listing/4520161458',
    images: ['/shop/reaper-mug-1.webp', '/shop/reaper-mug-2.webp', '/shop/reaper-mug-3.webp'],
    sigil: 'frame',
  },
  {
    id: 3,
    slug: 'primal-death-blanket',
    category: 'Woven Blanket',
    name: 'Primal Death — Mandala Throw',
    detail: 'Cotton-blend woven throw · tapestry weave · fringed',
    oneLiner: 'Everything that decays, woven into something that keeps you warm.',
    price: 'from $58',
    platform: 'etsy',
    url: 'https://www.etsy.com/listing/4515022629',
    images: ['/shop/primal-death-blanket-1.webp', '/shop/primal-death-blanket-2.webp', '/shop/primal-death-blanket-3.webp'],
    sigil: 'spiral',
  },
  {
    id: 4,
    slug: 'primal-death-pajama',
    category: 'Sleepwear',
    name: 'Primal Death — Pajama Pants',
    detail: "All-over print · women's sleep pant · soft brushed knit",
    oneLiner: 'Wear the whole cycle of decay to bed. Rest easy.',
    price: 'from $65',
    platform: 'etsy',
    url: 'https://www.etsy.com/listing/4515591449',
    images: ['/shop/primal-death-pajama-1.webp', '/shop/primal-death-pajama-2.webp', '/shop/primal-death-pajama-3.webp'],
    sigil: 'spiral',
  },
  {
    id: 5,
    slug: 'reaper-tote',
    category: 'Tote Bag',
    name: 'Reaper Canvas Tote',
    detail: 'Organic canvas · dual handles · ~15×15in · machine washable',
    oneLiner: 'A bag for carrying things into the dark and back.',
    price: '$22',
    platform: 'etsy',
    url: 'https://www.etsy.com/listing/4520161257',
    images: ['/shop/reaper-tote-1.webp', '/shop/reaper-tote-2.webp', '/shop/reaper-tote-3.webp'],
    sigil: 'frame',
  },
  {
    id: 6,
    slug: 'art-collection-vol1',
    category: 'Digital Pack',
    name: 'Art Collection Vol. I',
    detail: 'Digital download · original studio art · instant delivery',
    oneLiner: 'What overflowed from the films, gathered into one download.',
    price: '$22',
    platform: 'gumroad',
    url: 'https://michaeljacob.gumroad.com/l/lcbcxm',
    images: ['/shop/art-collection-vol1-1.webp', '/shop/art-collection-vol1-2.webp', '/shop/art-collection-vol1-3.webp'],
    sigil: 'book',
  },
];
