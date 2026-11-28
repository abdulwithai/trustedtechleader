/* Sample build data. One fictional example: "Example Heating & Air".
   Not a real client. No results are claimed. */

export const SAMPLE_NOTICE = 'Sample / demonstration. Not a real client. No results claimed.';

export type SampleMessage = { when: string; text: string };

export type SampleBuildItem = {
  title: string;
  summary: string;
  messages: SampleMessage[];
};

export type SampleBuild = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  situation: string[];
  builds: SampleBuildItem[];
  pipeline: string[];
  ownerView: string;
};

export const SAMPLE_BUILD: SampleBuild = {
  slug: 'sample-hvac-follow-up-system',
  name: 'HVAC follow-up system',
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
};

export const SAMPLE_BUILDS: SampleBuild[] = [SAMPLE_BUILD];

export const getSampleBuild = (slug: string) => SAMPLE_BUILDS.find((s) => s.slug === slug);
