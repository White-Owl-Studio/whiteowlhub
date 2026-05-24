export interface Film {
  numeral: string;
  slug: string;
  title: string;
  subtitle?: string;
  year: string;
  format: string;
  stage: string;
  genre: string;
  runtime: string;
  logline: string;
  summary: string;
  credits: {
    director: string;
    producer?: string;
    cast?: string;
    studio?: string;
  };
  trailer: string | null;
  poster?: string;
  stills?: string[];
  featured?: boolean;
}

export const films: Film[] = [
  {
    numeral: 'I',
    slug: 'the-owls-descent',
    title: "The Owl's Descent",
    subtitle: 'A Meditation in Stop Motion',
    year: 'TBA',
    format: 'Stop-motion animation',
    stage: 'In Development',
    genre: 'Dark Fantasy',
    runtime: 'TBA',
    logline: 'Trapped in an eternal recurring nightmare, Laila is about to break free of the lake that holds her — but to break free, she must learn to breathe.',
    summary: 'Trapped in an eternal recurring nightmare, Laila is about to break free of the lake that holds her — but to break free, she must learn to breathe.',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
  {
    numeral: 'II',
    slug: 'the-one-who-drives-the-truck',
    title: 'The One Who Drives the Truck',
    subtitle: 'A Desert Folk Tale',
    year: '2025',
    format: 'Stop-motion animation',
    stage: 'In Production',
    genre: 'Folk Tale',
    runtime: 'TBA',
    logline: 'On a stormy night in the Arava desert, a vegan teenager, a cattle truck driver, and their cargo of cows must find their way through — together.',
    summary: 'Oshri, a barrel-chested truck driver from Eilat, picks up Noam — seventeen, vegan, and furious — on a stormy night in the Arava. They clash immediately. The cows in the back are listening. When Noam steals the truck and crashes it, and the cows choose to go back and help the man who hauls them, a campfire tale becomes something else: a parable about compassion arriving from the last direction you expected it. Handcrafted stop-motion animation with fabricated puppets, sets, and props.',
    credits: { director: 'Michael B. Jacob & Oshrit Gedalya', producer: 'Liran Koren' },
    trailer: null,
    stills: [
      '/films/the-one-who-drives-the-truck/still-1.png',
      '/films/the-one-who-drives-the-truck/still-2.png',
      '/films/the-one-who-drives-the-truck/still-3.png',
      '/films/the-one-who-drives-the-truck/still-4.png',
      '/films/the-one-who-drives-the-truck/still-5.png',
      '/films/the-one-who-drives-the-truck/still-6.png',
    ],
    featured: true,
  },
  {
    numeral: 'III',
    slug: 'yaaras-place-at-home',
    title: "Yaara's Place At Home",
    subtitle: 'A Cautionary Tale',
    year: 'TBA',
    format: '2D drawn animation',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: "Yaara doesn't quite fit — not with the girls, not with the boys. When her imagination builds her a world of its own, she may never want to leave.",
    summary: "Yaara is ten, from Kiryat Malachi, and she collects insects no one wants to touch. The girls won't have her; the boys don't know what to do with her. So she makes an imaginary friend from tied scarves and old clothes — neither girl nor boy, just hers. At night, her creatures come alive and her closet opens into a forest of fabric and wings. But the deeper she goes in, the harder it gets to find the way back. A 2D drawn animation directed by Oshrit Gedalya.",
    credits: { director: 'Oshrit Gedalya' },
    trailer: null,
  },
  {
    numeral: 'IV',
    slug: 'lets-solve-it-once-and-for-all',
    title: "Let's Solve It Once and For All",
    subtitle: 'A Conversation in Black and White',
    year: '2025',
    format: 'Mixed-media collage animation',
    stage: 'Complete',
    genre: 'Documentary Animation',
    runtime: 'TBA',
    logline: 'Real Israelis, their real solutions to the conflict — placed side by side until they collapse into each other.',
    summary: "Real Israelis, speaking in their own words — about trains from Egypt to Lebanon, forced peace, divine authority, and nuclear fire. Contradictory, naïve, cynical, and sincere, their solutions are placed side by side without a verdict. The film doesn't argue. It listens, until the voices become a single, impossible picture. Mixed-media collage animation built around real recorded voices.",
    credits: { director: 'Michael B. Jacob & Shalev Ben Elya', studio: 'The Hive Studio' },
    trailer: null,
    poster: '/films/lets-solve-it/poster.png',
    stills: [
      '/films/lets-solve-it/still-1.png',
      '/films/lets-solve-it/still-2.png',
      '/films/lets-solve-it/still-3.png',
      '/films/lets-solve-it/still-4.png',
      '/films/lets-solve-it/still-5.png',
      '/films/lets-solve-it/still-6.png',
    ],
  },
  {
    numeral: 'V',
    slug: 'dawn',
    title: 'Dawn',
    subtitle: 'A Poem in Charcoal',
    year: '2022',
    format: 'Animated charcoal',
    stage: 'Complete',
    genre: 'Experimental',
    runtime: 'TBA',
    logline: 'The machines wake at dusk, assemble, and march — back toward the dying city, to rest.',
    summary: 'Chimeric machines, built from the remnants of human civilization, rise at nightfall and move toward the city they served. Not to destroy — to dissolve back into it. Drawn in charcoal and photographed frame by frame under a DSLR camera, Dawn is a poem about the end of things and the strange grace of return.',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
    stills: [
      '/films/dawn/still-1.png',
      '/films/dawn/still-2.jpg',
      '/films/dawn/still-3.jpg',
    ],
  },
  {
    numeral: 'VI',
    slug: 'torn-apart',
    title: 'Torn Apart',
    year: 'TBA',
    format: 'Short Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Oshrit Gedalya' },
    trailer: null,
  },
];

export const featuredFilm = films.find(f => f.featured) ?? films[0];
