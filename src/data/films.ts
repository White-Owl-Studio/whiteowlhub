export interface Film {
  numeral: string;
  slug: string;
  title: string;
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
  };
  trailer: string | null;
  featured?: boolean;
}

export const films: Film[] = [
  {
    numeral: 'I',
    slug: 'the-owls-descent',
    title: "The Owl's Descent",
    year: 'TBA',
    format: 'Feature Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
  {
    numeral: 'II',
    slug: 'the-one-who-drives-the-truck',
    title: 'The One Who Drives the Truck',
    year: '2026',
    format: 'Short Film',
    stage: 'In Production',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
    featured: true,
  },
  {
    numeral: 'III',
    slug: 'dawn',
    title: 'Dawn',
    year: 'TBA',
    format: 'Short Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
  {
    numeral: 'IV',
    slug: 'lets-solve-this-once-and-for-all',
    title: "Let's Solve This Once and For All",
    year: 'TBA',
    format: 'Short Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
  {
    numeral: 'V',
    slug: 'torn-apart',
    title: 'Torn Apart',
    year: 'TBA',
    format: 'Short Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
  {
    numeral: 'VI',
    slug: 'yaaras-place-at-home',
    title: "Yaara's Place At Home",
    year: 'TBA',
    format: 'Short Film',
    stage: 'In Development',
    genre: 'Drama',
    runtime: 'TBA',
    logline: '— logline to be written —',
    summary: '— plot summary to be written —',
    credits: { director: 'Michael B. Jacob' },
    trailer: null,
  },
];

export const featuredFilm = films.find(f => f.featured)!;
