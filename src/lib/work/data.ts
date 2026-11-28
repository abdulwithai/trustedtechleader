/* Sample project data. Two fictional examples:
   1. "Lead follow-up automation" (Example Heating & Air, fictional HVAC company).
   2. "30-day social content plan" (Example Fitness Studio, fictional).
   Not real clients. No results are claimed. */

export const SAMPLE_NOTICE = 'Sample / demonstration. Not a real client. No results claimed.';

type SampleBase = {
  slug: string;
  title: string;
  business: string;
  industry: string;
  summary: string;
};

export type SampleMessage = { when: string; text: string };

export type SampleBuildItem = {
  title: string;
  summary: string;
  messages: SampleMessage[];
};

export type AutomationSample = SampleBase & {
  kind: 'automation';
  situation: string[];
  builds: SampleBuildItem[];
  pipeline: string[];
  ownerView: string;
};

export type VideoScript = {
  hook: string;
  shots: string;
  onScreen?: string;
  caption: string;
};

export type ContentPillar = { title: string; text: string };

export type ContentSample = SampleBase & {
  kind: 'content';
  situation: string[];
  pillars: ContentPillar[];
  weeklyRhythm: string[];
  videoScripts: VideoScript[];
  postIdeas: string[];
  approval: string;
};

export type Sample = AutomationSample | ContentSample;

export const SAMPLES: Sample[] = [
  {
    kind: 'automation',
    slug: 'sample-hvac-follow-up-system',
    title: 'Lead follow-up automation',
    business: 'Example Heating & Air (fictional)',
    industry: 'HVAC',
    summary:
      'A fictional HVAC company gets a missed-call text-back, a reply for web form inquiries, an estimate follow-up sequence and a review request after each job.',
    situation: [
      'A 6-person HVAC company.',
      'Calls get missed while the techs are on jobs.',
      'Estimates go out by email and are rarely followed up.',
      'The company has 40 Google reviews.',
    ],
    builds: [
      {
        title: 'Missed-call text-back',
        summary: 'An instant, friendly text with a booking link when the team can’t pick up.',
        messages: [
          {
            when: 'Sent right after a missed call',
            text: 'Hi, this is Example Heating & Air. Sorry we missed your call, we’re on a job. What can we help with? You can also book a time here: [link]. Reply STOP to opt out.',
          },
        ],
      },
      {
        title: 'After-hours web form reply',
        summary: 'Every inquiry gets an answer in seconds, day or night.',
        messages: [
          {
            when: 'Sent after a web form submission',
            text: 'Thanks for reaching out to Example Heating & Air. We got your request and will call you by 9am. If it’s urgent (no heat, no AC, water leak), call [number] and press 1.',
          },
        ],
      },
      {
        title: 'Estimate follow-up',
        summary: 'A short sequence over two weeks for estimates that have not been answered.',
        messages: [
          {
            when: 'Day 2',
            text: 'Hi [name], any questions about the estimate for [job]? Happy to walk through it.',
          },
          {
            when: 'Day 5',
            text: 'Quick note: we can usually schedule [job] within the week. Want me to hold a slot?',
          },
          {
            when: 'Day 10',
            text: 'Last check-in on your [job] estimate. If timing’s not right, no problem, just reply “later” and we’ll reach out in the spring.',
          },
        ],
      },
      {
        title: 'Review request',
        summary: 'Sent two hours after a job is marked complete.',
        messages: [
          {
            when: 'Two hours after a job is marked complete',
            text: 'Thanks for choosing Example Heating & Air today, [name]. If we did a good job, would you leave a quick Google review? [link]',
          },
        ],
      },
    ],
    pipeline: ['New lead', 'Contacted', 'Estimate sent', 'Follow-up', 'Won / Lost', 'Review requested'],
    ownerView: 'One board with every lead, who replied, and which estimates are still open.',
  },
  {
    kind: 'content',
    slug: 'sample-30-day-content-plan',
    title: '30-day social content plan',
    business: 'Example Fitness Studio (fictional)',
    industry: 'Fitness studio',
    summary:
      'A fictional fitness studio gets a 30-day content plan: four pillars, a weekly posting rhythm, short video scripts and a monthly approval step.',
    situation: [
      'A small local fitness studio posts on Instagram once in a while and has no TikTok.',
      'Most new members come by word of mouth.',
      'There is no content calendar, so posting depends on who has time that week.',
    ],
    pillars: [
      { title: 'Quick tips', text: 'Form, mobility and habits, explained in under 30 seconds.' },
      { title: 'Behind the scenes', text: 'Setting up a class, the coach’s day, how the studio runs.' },
      { title: 'Offers and events', text: 'Intro week, monthly challenges, new class times.' },
      { title: 'Community', text: 'Class moments and milestones, shared with members’ permission.' },
    ],
    weeklyRhythm: [
      '3 posts or carousels with captions each week.',
      '2 short videos each week (Reels, TikToks, Shorts).',
      'Everything posted to Instagram, Facebook and TikTok on a fixed schedule.',
    ],
    videoScripts: [
      {
        hook: '“3 mistakes everyone makes on their first squat.”',
        shots: 'The coach shows each mistake, then the fix. Phone clips, 15 to 20 seconds total.',
        onScreen: 'Mistake 1… Fix… (repeated for each)',
        caption: 'Save this for your next leg day. New here? Intro week link in bio.',
      },
      {
        hook: '“What 6am looks like at Example Fitness Studio.”',
        shots: 'Lights coming on, music starting, the first class arriving. Client phone clips.',
        caption: 'Early risers, where you at? 6am classes Mon–Fri.',
      },
      {
        hook: '“You don’t need an hour. Try this 10-minute routine.”',
        shots: 'Made from stock footage and motion graphics with a voiceover. No filming needed.',
        onScreen: 'Step names and timer overlays',
        caption: 'Try it today and tell us how it went.',
      },
      {
        hook: '“Intro week: what actually happens in your first class.”',
        shots: 'Walkthrough of the studio and a short welcome from the coach. Phone clips.',
        caption: 'No experience needed. Book your intro week: [link].',
      },
    ],
    postIdeas: [
      'Carousel: 5 stretches for desk workers.',
      'Carousel: How to pick a class if you’re new.',
      'Post: This month’s challenge, 12 classes in 30 days.',
    ],
    approval:
      'You approve one content calendar per month before anything is made. Videos are delivered for approval 3 days before they post.',
  },
];

export const getSample = (slug: string) => SAMPLES.find((s) => s.slug === slug);
