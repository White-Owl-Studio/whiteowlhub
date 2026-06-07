export interface Experience {
  id: string;
  title: string;
  tagline: string;
  eyebrow: string;
  status: 'demo' | 'conjuring' | 'unknown';
  weight: number;
  swirlR: number;
  swirlG: number;
  swirlB: number;
  hasCharacter: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'lailas-descent',
    title: "Laila's Descent",
    tagline: "She came looking for the exit. There isn't one.",
    eyebrow: 'Horror Shooter',
    status: 'demo',
    weight: 0.50,
    swirlR: 238, swirlG: 34,  swirlB: 34,
    hasCharacter: true,
  },
  {
    id: 'drive-that-truck',
    title: 'Drive That Truck, Noam!',
    tagline: 'He meant well. The cows are less sure.',
    eyebrow: 'Endless Runner',
    status: 'demo',
    weight: 0.24,
    swirlR: 200, swirlG: 140, swirlB: 50,
    hasCharacter: true,
  },
  {
    id: 'placeholder-b',
    title: '[No Name Yet]',
    tagline: 'Not ready. Possibly not safe.',
    eyebrow: 'Coming Soon',
    status: 'conjuring',
    weight: 0.24,
    swirlR: 112, swirlG: 64,  swirlB: 184,
    hasCharacter: false,
  },
  {
    id: 'secret',
    title: '⊹  ⊹  ⊹',
    tagline: "You found something that doesn't have a name yet. Check back.",
    eyebrow: '',
    status: 'unknown',
    weight: 0.02,
    swirlR: 245, swirlG: 208, swirlB: 96,
    hasCharacter: false,
  },
];
