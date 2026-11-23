/* Portfolio data (plan section 5). Phase 1: three clearly-labeled concept growth plans.
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
  /** How the four pillars (lead gen, content, CRM, AI automation) connect in this plan. */
  approach: string;
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
    summary:
      'A concept plan for a NoDa roaster: get found on Google, show the roast on Reels, collect regulars in a text list, and win back the ones who drift away.',
    voice: 'Warm, indie, hands-in-frame',
    tier: 'Growth (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a small NoDa roaster whose coffee is far better than its online presence. The Google listing is thin, Instagram posts go up in bursts, and there is no list of regulars. When a customer stops coming in, nobody notices.',
    deliverables: [
      'Lead generation: an optimized Google Business Profile with weekly posts, so people searching for coffee in NoDa find the roaster first',
      'Content: six Reels (roast-day walkthrough, pour-over close-up, Saturday regulars, new-bean drop, a day in the café, neighbor-shop collab) and ten feed posts in one warm visual style',
      'CRM: an SMS loyalty list that captures regulars at the counter and online, kept in one pipeline the owner can see',
      'AI automation: an automated "we miss you" text to customers who have not visited in a while, plus a monthly report',
      'Captions written in the roaster’s own voice, approved by the owner before posting',
    ],
    mediaPlan: { reels: 6, posts: 10 },
    mediaLabels: ['Roast-day Reel', 'Pour-over Reel', 'Regulars Reel', 'New-bean Reel', 'Café day Reel', 'Neighbor collab Reel', 'Google profile refresh', 'SMS loyalty signup', 'Reactivation text flow'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. The roaster is loud and smells wonderful, so the shoot would go in the morning on a roast day, in natural light, with the owner free to ignore the camera. Our Charlotte production partner would handle the on-location work.',
    approach:
      'Google and Reels bring new people in. The SMS list turns first-time visitors into regulars. The reactivation text brings lapsed customers back without the owner chasing anyone. AI handles the timing and the busywork; humans write the captions and make the creative calls.',
    results: [],
    quote: null,
  },
  {
    slug: 'south-end-pilates-studio-southend-pilates',
    isConcept: true,
    name: 'Southend Pilates',
    neighborhood: 'South End',
    industry: 'Pilates studio',
    summary:
      'A concept plan for a South End studio: Meta ads for an intro offer, a landing page, an AI assistant that books the first class, and a follow-up sequence that turns trials into members.',
    voice: 'Calm, encouraging, personal',
    tier: 'Growth (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a boutique South End studio with excellent instructors and a feed of generic schedule graphics. New clients are nervous about the first class, questions sit unanswered in DMs, and people who try one class often never come back.',
    deliverables: [
      'Lead generation: Meta ads for an intro offer (ad spend paid by the studio, separately) sending people to a dedicated landing page',
      'Content: Reels on the instructors and class flow, a first-timer FAQ, and a photo set of the space, shot with permission',
      'CRM: one pipeline for every lead from ads, forms and DMs, with online booking for the first class',
      'AI automation: an AI assistant that answers questions and books the first class 24/7, then a follow-up sequence (SMS and email) to move trial clients toward a membership',
      'Automated reminders and a monthly report the owner can read in five minutes',
    ],
    mediaPlan: { reels: 6, posts: 6 },
    mediaLabels: ['Instructor intro Reel', 'Instructor intro Reel', 'Class flow Reel', 'First-timer Reel', 'Before-opening Reel', 'Intro offer ad set', 'Landing page', 'AI booking assistant', 'Membership follow-up sequence'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. We would shoot between classes with a small crew from our Charlotte production partner, and film each instructor talking about how they teach, in their own words.',
    approach:
      'The ad and landing page create the lead. The AI assistant answers and books within minutes, so no one waits. The instructor Reels build trust before the first class, and the follow-up sequence invites trial clients back. Humans own the creative and the studio’s voice.',
    results: [],
    quote: null,
  },
  {
    slug: 'ballantyne-home-services-ballantyne-lawn-co',
    isConcept: true,
    name: 'Ballantyne Lawn Co.',
    neighborhood: 'Ballantyne',
    industry: 'Home services (lawn care)',
    summary:
      'A concept plan for a Ballantyne lawn crew: show up in local search, never miss a call, answer quote requests in minutes, and ask for a review after every job.',
    voice: 'Plain-spoken, proud of the craft',
    tier: 'Growth (concept)',
    startDate: 'Not applicable (concept)',
    problem:
      'Imagine a family-run lawn crew that gets all its work by word of mouth. Calls go to voicemail while the crew is mowing, quote requests wait until evening, and their best work on neighbors’ lawns never shows up online.',
    deliverables: [
      'Lead generation: an optimized Google Business Profile and local service ads (ad spend paid by the business, separately)',
      'Content: before-and-after Reels, edging and full-mow clips, crew intros and seasonal tips, plus same-angle photo pairs with homeowner permission',
      'CRM: every call, form and message lands in one pipeline, with missed-call text-back so no caller is left hanging',
      'AI automation: AI replies to quote requests within minutes, and an automated review request after each finished job',
      'Captions that name the service and the neighborhood so locals can find it',
    ],
    mediaPlan: { reels: 6, posts: 6 },
    mediaLabels: ['Before and after Reel', 'Edging Reel', 'Full mow Reel', 'Crew intro Reel', 'Seasonal tip Reel', 'Before and after photos', 'Google profile and service ads', 'Missed-call text-back', 'Quote reply flow', 'Review request flow'],
    behindTheScenes:
      'This is how we would plan the shoot, not a record of one. Before and after only works if both shots are taken from the same spot, so we would mark the angle on the first visit. Our Charlotte production partner would shoot on location.',
    approach:
      'Search and ads put the crew in front of people who need a lawn done now. Text-back and fast quote replies make sure the lead is not lost, and the review request turns each finished job into the next lead. The Reels prove the craft. AI handles speed; the crew keeps the craft.',
    results: [],
    quote: null,
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
