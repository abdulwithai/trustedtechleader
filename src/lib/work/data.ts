/* Portfolio data (plan section 5). Phase 1: three clearly-labeled concept samples.
   Replace each concept with a real case study as clients sign off (isConcept: false). */

export const NEIGHBORHOODS = [
  'Southpark',
  'Plaza Midwood',
  'NoDa',
  'South End',
  'Dilworth',
  'Ballantyne',
  'Uptown',
  'West End',
] as const;
export type Neighborhood = (typeof NEIGHBORHOODS)[number];

export const CONCEPT_BANNER =
  'Concept piece — fictional Charlotte business, created as a portfolio sample. Not a real client.';

export type CaseStudy = {
  slug: string; // /work/{neighborhood}-{business-type}-{name}
  isConcept: boolean;
  name: string;
  neighborhood: Neighborhood;
  /** Up to 2 neighborhood tags are shown on a case study; first is primary. */
  industry: string;
  summary: string;
  voice: string;
  tier: string;
  startDate: string;
  problem: string;
  deliverables: string[];
  /** Planned content volume for the concept month (no media yet). */
  mediaPlan: { reels: number; posts: number };
  mediaLabels: string[];
  behindTheScenes: string;
  /** Verified metrics only. Empty for concepts. */
  results: { value: string; label: string }[];
  quote: { text: string; name: string; role: string } | null;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'noda-coffee-roaster-queen-city-roasters',
    isConcept: true,
    name: 'Queen City Roasters',
    neighborhood: 'NoDa',
    industry: 'Coffee roaster',
    summary: 'A warm, indie-roaster voice: six Reels and ten feed posts built around the roast, the people and the neighborhood.',
    voice: 'Warm, indie, hands-in-frame',
    tier: 'Growth (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a small NoDa roaster whose coffee is far better than its Instagram. Posts go up in bursts, nothing shows the roasting or the people behind the counter, and regulars cannot tell what is new on the bar.',
    deliverables: [
      'Six Reels: a roast-day walkthrough, a pour-over close-up, the Saturday regulars, a new-bean drop, a day in the café, and a neighbor-shop collab',
      'Ten feed posts in one consistent, warm visual style',
      'A simple weekly rhythm: two Reels, two to three posts, stories on roast days',
      'Captions written in the roaster’s own voice, approved by the owner before posting',
    ],
    mediaPlan: { reels: 6, posts: 10 },
    mediaLabels: ['Roast-day Reel', 'Pour-over Reel', 'Regulars Reel', 'New-bean Reel', 'Café day Reel', 'Neighbor collab Reel', 'Feed post set'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. The roaster is loud and smells wonderful, so the shoot would go in the morning on a roast day, in natural light, with the owner free to ignore the camera.',
    results: [],
    quote: null,
  },
  {
    slug: 'south-end-pilates-studio-southend-pilates',
    isConcept: true,
    name: 'Southend Pilates',
    neighborhood: 'South End',
    industry: 'Pilates studio',
    summary: 'Six Reels focused on instructor personality and class flow, so a first-timer knows who they will meet before they walk in.',
    voice: 'Calm, encouraging, personal',
    tier: 'Starter (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a boutique South End studio with excellent instructors and a feed of generic schedule graphics. New clients are nervous about the first class, and nothing online shows what it actually feels like.',
    deliverables: [
      'Six Reels: meet-the-instructor pieces, a class-flow walkthrough, a first-timer FAQ, and the studio before opening',
      'Photo set of the space and each instructor, shot with their permission',
      'Short captions that answer the questions new clients ask before booking',
      'A monthly schedule highlight the studio can reuse in stories',
    ],
    mediaPlan: { reels: 6, posts: 6 },
    mediaLabels: ['Instructor intro Reel', 'Instructor intro Reel', 'Class flow Reel', 'First-timer Reel', 'Before-opening Reel', 'Community Reel', 'Studio photo set'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. We would shoot between classes with a small crew, and film each instructor talking about how they teach, in their own words.',
    results: [],
    quote: null,
  },
  {
    slug: 'ballantyne-home-services-ballantyne-lawn-co',
    isConcept: true,
    name: 'Ballantyne Lawn Co.',
    neighborhood: 'Ballantyne',
    industry: 'Home services (lawn care)',
    summary: 'Six Reels of before-and-after transformations and the craft of the work, aimed at neighbors who want to see the result.',
    voice: 'Plain-spoken, proud of the craft',
    tier: 'Starter (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a family-run lawn crew that gets all its work by word of mouth. Their best work is on neighbors’ lawns, but their online presence is a phone number and a logo.',
    deliverables: [
      'Six Reels: before and after, edging up close, a full mow in one clip, crew intros, seasonal tips, and a neighborhood tour',
      'Same-angle before and after photo pairs, with homeowner permission',
      'Captions that name the service and the neighborhood so locals can find it',
      'A short recurring series, such as one tip per week',
    ],
    mediaPlan: { reels: 6, posts: 6 },
    mediaLabels: ['Before and after Reel', 'Edging Reel', 'Full mow Reel', 'Crew intro Reel', 'Seasonal tip Reel', 'Neighborhood Reel', 'Before and after photos'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. Before and after only works if both shots are taken from the same spot, so we would mark the angle on the first visit.',
    results: [],
    quote: null,
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
