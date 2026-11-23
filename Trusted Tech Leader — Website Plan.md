# Trusted Tech Leader — Website Plan

Nov 23, 2026 · @Abdul Rahman

## 1. Positioning & Homepage Copy

### The headline

**Primary pick:** *"Charlotte's human-made content studio."*

Alternatives to A/B test post-launch:

- *"Reels, photos and social for Charlotte businesses — made by people, not algorithms."*
- *"The content team for Charlotte's small businesses."*

The primary wins because it does three jobs in six words: names the city, states what you make, and plants the "human" wedge that no verified Charlotte competitor is claiming.

### The subheadline

*"Weekly Reels, on-location photo, and social management that sounds like your business — not a template. Studios, shops and services across Charlotte trust us to show up for them."*

### The trust row

Label: *"Local businesses we create for ↓"*

Then a horizontal strip of 6–8 Charlotte logos. At launch, 2–3 can be clearly-labeled concept samples (e.g. *"Queen City Interiors — concept piece"*) until real clients land.

### Primary + secondary CTAs

- **Primary button:** *"See our Charlotte work"* → `/work`
- **Secondary link:** *"Book a 20-min call"* → `/contact#book`

### Footer tagline

*"A small team in Karachi. A camera in Charlotte."*

### Voice rules (apply across every page)

- Second person (*your business*) 60% of the time. First-person plural (*our team*) when describing process.
- Short sentences. Active verbs.
- Name Charlotte neighborhoods specifically — Southpark, Plaza Midwood, NoDa, South End, Dilworth, Ballantyne — not *"the Charlotte area."*
- Banned words: *elevate, unlock, synergy, disrupt, transform your business, revolutionary, cutting-edge, best-in-class, world-class, next-level, game-changing.*
- Never promise a specific outcome (*3x your bookings*, *double your followers*). Promise a process and a cadence.
- Verified metrics only. Round down, never up.

## 2. Information Architecture

### Pages at launch

| URL | Page | Primary purpose |
| --- | --- | --- |
| `/` | Home | Positioning + proof + path to call |
| `/services` | Services | Published tiers + add-ons + guarantees |
| `/work` | Work landing | Portfolio grid with Charlotte-neighborhood filters |
| `/work/{client-slug}` | Case study | Long-tail SEO + conversion |
| `/about` | About | Team, model, principles |
| `/contact` | Contact | Booking + email + form |
| `/privacy`, `/terms` | Legal | Standard, required for ads later |
| 404 | Not found | Branded fallback with search + CTAs |

Insights/blog is **Phase 2** (Month 2–3). Ship launch without it.

### Navigation

**Desktop nav (left-anchored logo, right-anchored links):** `Logo`                     Work · Services · About · **Book a call**

- No "Home" link — clicking the logo does it. Universal convention.
- "Book a call" is a filled button, not a text link. Primary conversion target.
- No dropdowns. Every top-level nav is one click away.

**Mobile nav:**

- Hamburger (top right) opens full-screen overlay with Work · Services · About · Contact
- **Floating "Book a call" button** pinned bottom-right from scroll depth 30%
- Phone number as a tappable `tel:` link in the mobile menu footer

### Footer

Four columns on desktop, stacked on mobile:

1. **Brand:** logo · *"A small team in Karachi. A camera in Charlotte."* · Charlotte 704/980 number · `hello@trustedtechleader.com`
2. **Site:** Work · Services · About · Contact
3. **Social:** Instagram · LinkedIn (Facebook is a dead placeholder — skip it)
4. **Legal:** Privacy · Terms · US LLC address (Wyoming virtual)

Bottom bar: *© 2026 Trusted Tech Leader LLC · Wyoming, USA*

### URL conventions

- Case studies: `/work/noda-coffee-roastery` (kebab-case, neighborhood + business type if client prefers anonymity)
- Optional neighborhood filter routes: `/work/southpark`, `/work/plaza-midwood` (generated at build time for SEO)
- No query strings in nav — clean URLs for every stable page
- Booking link is `/contact#book` (same page, anchor scrolls to Cal.com embed)

### SEO priority (sitemap.xml order)

1. `/` (pillar, target: *Charlotte social media agency*, *Charlotte content studio*)
2. `/services` (target: *Charlotte social media pricing*, *Instagram management Charlotte NC*)
3. Each `/work/{client-slug}` (long-tail: *Charlotte {neighborhood} {industry} marketing*)
4. `/about` (target: branded searches)
5. `/contact` (conversion, not for ranking)

### Page count at launch

**11 pages minimum:** Home, Services, Work landing, 3 case studies (concept samples), About, Contact, Privacy, Terms, 404. Ship this. Blog comes after client 3.

## 3. Homepage Anatomy

Twelve sections, scroll-anchored. Load order prioritizes above-the-fold.

### Section 1 — Hero (above fold, 100vh)

- **Background:** warm photo of Charlotte streetscape (Plaza Midwood or South End morning light) OR a tight shot of hands editing on a MacBook at a Charlotte coffee shop. **Never stock.**
- **Overlay:** 60% warm-charcoal gradient from bottom-left for headline legibility
- **Headline** (left-aligned, 56–72px, Fraunces or GT Super): *Charlotte's human-made content studio.*
- **Sub** (left-aligned, 20–24px, Inter, 72ch max): the Section 1 sub
- **Primary CTA button:** *See our Charlotte work →*
- **Secondary text link:** *or book a 20-min call*
- **Micro-line below:** *Based in Charlotte via Karachi · Month-to-month · Prices published*
- Subtle scroll indicator chevron at bottom

### Section 2 — Trust row (slim, 160px)

- Label: *Local businesses we create for ↓*
- 8-logo strip, grayscale default, full color on hover
- Auto-scrolling on mobile, static on desktop

### Section 3 — The offer (soft background shift)

- H2: *What we make, every month.*
- Three tier cards side by side: **Starter** · **Growth** (⭐ *Most popular*) · **Signature**
- Each card shows: price, 3 bullet highlights, *See full breakdown →* link to `/services`
- Below cards: *All tiers month-to-month. Cancel anytime. First post live within 10 days.*

### Section 4 — Work gallery

- H2: *Our work, across Charlotte.*
- Filter chip row: *All* · *Southpark* · *Plaza Midwood* · *NoDa* · *South End* · *Dilworth* · *Ballantyne*
- Masonry grid of 6–8 thumbnails (Reel covers, photo stills)
- Each thumb: neighborhood tag + client name + 1-line observable result
- *See all work →* link to `/work`

### Section 5 — How it works (3-step)

- H2: *The process.*
- Three numbered cards in a row:
  1. **Discovery call (15 min).** You tell us what's working and what isn't.
  2. **Strategy + first shoot.** We lay out 4 weeks of content; the Charlotte stringer goes on-location.
  3. **Weekly delivery.** Reels, posts, and story series land in your approval portal.
- Subtle animated line connecting the three on desktop

### Section 6 — Why we're different (3-pillar)

- H2: *What makes us different.*
- Three columns:
  1. **Humans, not algorithms.** No AI slop. Every Reel edited by a person who watched your footage.
  2. **Charlotte, not everywhere.** We work with Charlotte businesses only. Our stringer knows the neighborhoods, the venues, the seasons.
  3. **Published prices, no games.** Three tiers. No *"contact us"* for pricing. You know what you're buying before the call.

### Section 7 — Testimonials (Phase 2)

- **Launch:** hidden until 3 real testimonials collected
- **Phase 2 structure:** 3 quote cards — client name, business, neighborhood, 2-sentence quote, photo of them (not stock)

### Section 8 — About teaser

- H2: *Who makes this.*
- Split layout: left = photo of founder OR founder + Charlotte stringer; right = 2 short paragraphs + *Read our story →*

### Section 9 — Services deep-link (one-liner)

- H2: *Pricing, included deliverables, add-ons.*
- *See the full breakdown →* → `/services`

### Section 10 — FAQ (6 questions, accordion)

- *"You're based in Pakistan — does that actually work?"*
- *"Who shoots the content?"*
- *"Do you work with businesses outside Charlotte?"*
- *"Month-to-month, really? What's the catch?"*
- *"What if I don't have content ideas?"*
- *"How fast can we start?"*

### Section 11 — Final CTA (large)

- H2: *Let's see if we're a fit.*
- Primary button: *Book a 20-min call*
- Secondary line: *Or email hello@trustedtechleader.com*

### Section 12 — Footer

Per Section 2 of this plan.

### Mobile notes

- Sticky *Book a call* button bottom-right from scroll depth 30%
- Hero headline shrinks to 42px, sub to 16px
- Tier cards stack vertically
- Work masonry becomes single column
- FAQ accordion stays full width, each item \~44px tap target

## 4. Services Page

Single scroll page with anchor nav. All three tiers visible, add-ons and guarantees at the bottom.

### Page hero

- H1: *Published prices. No contracts. Charlotte-native content.*
- Sub: *One of three tiers covers most Charlotte independent businesses. À la carte for anything else.*
- Anchor nav: *Starter · Growth · Signature · Add-ons · Guarantees · FAQ*

### Starter — $1,497/month

**Who it's for:**

- 2–10 person businesses with content ideas but no time or skill to produce
- Owners who film on their phone but can't edit or schedule
- Businesses posting under 2 times/week today

**What you get every month:**

- 8 Reels (hooks, captions, trending-compliant audio, scheduling)
- 12 feed posts (image + copy, grid-aware design)
- 4 story series (multi-part, interactive stickers, polls)
- Monthly 45-min content-strategy call
- Shared approval portal — no password sharing

**What you give us:**

- Weekly 15-min clip drop via WhatsApp or Dropbox (phone video is fine)
- 2 brand details (voice, 3 content pillars) via a 30-min kickoff call

**Timeline:** First post live within 10 days of signing.

CTA: *Start with a 2-week paid pilot at $748 →*

### Growth — $2,497/month ⭐ Most popular

**Who it's for:**

- Businesses that want a done-for-you content engine
- Owners who don't want to film anymore
- Brands ready to be consistent, not just present

**Everything in Starter, plus:**

- 1 on-location shoot/month in Charlotte (4-hour half-day with our stringer + director)
- Google Business Profile weekly posts (SEO signal + local discovery)
- Monthly performance report (saves, shares, DMs, inquiries)
- Priority reply on approval portal (same-business-day response)

**What you give us:**

- Nothing extra. We bring the camera.

**Timeline:** First shoot scheduled within 7 days. First post live within 10.

CTA: *Book a 20-min call →*

### Signature — $3,997/month

**Who it's for:**

- Ambitious local brands ready to own their category in Charlotte
- Multi-location businesses or those with 2+ brand pillars
- Owners who want press, newsletter, and web working together

**Everything in Growth, plus:**

- 2 on-location shoots/month (8 hours total)
- Monthly email newsletter (copy, design, send via your tool)
- Review generation system (post-service SMS, email, GBP link routing)
- Landing page updates (2/month for promotions, new services, events)
- 24-hour turnaround on all approvals

CTA: *Book a 20-min call →*

### À la carte add-ons

| Add-on | Price | Details |
| --- | --- | --- |
| Extra on-location shoot | **$400** | 3-hour half-day |
| Full-day shoot | **$850** | 8 hours, 2 crew |
| Meta/Google ads management | **$599/mo** | Requires existing ad account |
| Landing page | **$599** | Single page, 7-day turnaround |
| Website refresh | **from $1,497** | Full discovery → design → build |
| Email newsletter design | **$199/issue** | Copy + design, you send |
| Press pitch (per publication) | **$149** | Pitch + 1 revision |
| Brand voice playbook | **$499** | One-time deliverable |

### Guarantees

- **Month-to-month.** Cancel anytime. We refund the unused portion of your month if you cancel after day 15.
- **10-day first-post guarantee.** First piece of content live within 10 days of signing or we refund the first month.
- **100% content ownership.** You own all photos, Reels, and files forever. Delivered monthly to a shared Google Drive you control.
- **No password sharing.** You approve content in our portal; we never touch your accounts outside scheduled posting.

### FAQ specific to Services

- *"Can I switch tiers month to month?"* Yes. Upgrade mid-month takes effect on the 1st. Downgrade effective next billing cycle.
- *"What if I need more Reels than Starter includes?"* À la carte at $125/Reel for Starter clients. Growth and Signature include flex.
- *"Do you take clients outside Charlotte?"* No. The entire operation is built around Charlotte-native content. We refer out-of-market businesses to agencies we trust.
- *"How do shoots work if you're in Pakistan?"* Our Charlotte stringer handles on-location. We art-direct remotely via a shot list and WhatsApp group during the shoot.

### Final CTA

Primary button: *Book a 20-min call →* Secondary line: *Or email hello@trustedtechleader.com*

## 5. Portfolio Structure

The portfolio is the proof-by-saturation engine. Organize it by Charlotte neighborhood — unique in the market, and each neighborhood page becomes a long-tail SEO asset over time.

### Neighborhood filter taxonomy

| Tag | Tone | Expected client mix |
| --- | --- | --- |
| **Southpark** | Affluent, polished | Retail, dining, interior designers |
| **Plaza Midwood** | Indie, craft | Restaurants, boutique retail, salons |
| **NoDa** | Arts, breweries | Breweries, food, creative services |
| **South End** | Growing, modern | Fitness, F&B, wellness |
| **Dilworth** | Classic, established | Retail, professional services |
| **Ballantyne** | Family, suburban | Services, retail, fitness |
| **Uptown** | B2B, dining | Dining, consultancies |
| **West End** | Emerging | Early-stage local brands |

### Case study template (`/work/{client-slug}`)

- **URL pattern:** `/work/{neighborhood}-{business-type}-{name}` — e.g. `/work/plaza-midwood-cafe-queen-city-roasters`
- **Hero:** large cover photo + business name + neighborhood tag
- **Meta row:** Industry · Neighborhood · Partnership start date · Current tier
- **Problem (2–3 sentences):** what was happening before we started
- **What we did:** bullet list of deliverables for the first month
- **Media grid:** 6–12 thumbnails (Reels + photos) with click-to-enlarge
- **Observable results:** verified metrics only, rounded down (e.g. *"4,200 accounts reached"* not *"\~5K"*)
- **Client quote:** 2 sentences verbatim with name, role, photo
- **Behind the scenes:** 1-paragraph note on the shoot or something interesting about the partnership
- **CTAs:** *See more Charlotte work →* + *Book a 20-min call →*

### Phase 1 — Launch day (3 concept samples)

Ship 3 concept samples at launch, clearly labeled so no one mistakes them for real clients:

1. **NoDa coffee roaster** — concept name *"Queen City Roasters."* Six Reels, 10 feed posts, warm indie-roaster voice.
2. **South End pilates studio** — concept name *"Southend Pilates."* Six Reels focused on instructor personality + class flow.
3. **Ballantyne home services** — concept name *"Ballantyne Lawn Co."* Six Reels of before/after + craft-of-work.

Each concept sample carries a visible banner: *"Concept piece — fictional Charlotte business, created as a portfolio sample. Not a real client."*

Before publishing, Google each fictional name against Charlotte business registrations to make sure you're not accidentally using an existing business name.

### Phase 2 — Months 2–3 (real clients land)

- Replace one concept sample as each real client case study is signed off
- First real case study should be the pilot that converted from the $748 half-month into full Starter
- Written case-study rights clause in every client contract (required for publishing)
- Each real case study replaces a concept sample until all three are gone

### Phase 3 — Month 6+ (saturation)

- 6–8 real client case studies distributed across 4+ neighborhoods
- Homepage testimonial section activates (3 quotes required to launch it)
- Press mentions linked to original articles (Axios Charlotte, QC Exclusive, etc.)

### Content rules for every case study

- No AI-generated images or copy anywhere on the page
- Client quotes verbatim, not polished (typo fixes only with their written approval)
- Metrics verified against client analytics via screen-share — never self-reported
- Every photo credited to the Charlotte stringer who shot it (small line at page bottom)
- Signed permission form in Google Drive before publishing — no exceptions

### The neighborhood filter as SEO moat

Each neighborhood tag generates a filterable archive page at build time:

- `/work/southpark` — target: *Southpark marketing agency*, *Southpark content studio*
- `/work/plaza-midwood` — target: *Plaza Midwood social media*
- etc.

As case studies accumulate, these archive pages become organic-traffic magnets. By Month 12, 6 neighborhood pages ranking on page 1 for their respective long-tail queries.

## 6. About & Team Page

Trust is the hard problem for a Pakistan-based agency selling to Charlotte. The About page is where you address it directly and turn it into a feature.

### Hero

- **Photo:** founder + Charlotte stringer side by side (or founder alone with Karachi team behind if stringer unavailable at launch)
- **H1:** *A small team in Karachi. A camera in Charlotte.*
- **Sub:** *Here's why that works better than you'd think.*

### Why we started this (3 short paragraphs)

**Paragraph 1 — the observation.** We kept seeing Charlotte independent businesses with gorgeous products, under 2,000 Instagram followers, and prices from local agencies that felt out of reach. Meanwhile, the biggest brands in Charlotte were running content machines on $10K+ monthly budgets.

**Paragraph 2 — the build.** So we built something smaller and sharper. A tight team in Karachi — editors, strategists, designers who'd spent years on client work. A trusted camera crew in Charlotte. One Slack channel per client. No handoffs between agencies.

**Paragraph 3 — the result.** Boutique pricing. Agency craft. Zero AI filler. Charlotte-native shoots. Content that sounds like your business because a human watched your footage, read your reviews, and wrote the caption.

### The team

**Founder bio (\~150 words)** Name. Background (where you came from, why content, why Charlotte). Something specific — how you first heard of Charlotte, a connection, the first Charlotte business you noticed. One sentence on what you're not. Photo: smiling, natural light, not a corporate headshot.

**Charlotte production partner (\~100 words)** Stringer's name, hometown or neighborhood, where they studied (UNC Charlotte Film program if applicable), favorite Charlotte neighborhood to shoot in. What they love filming. Photo: on-location, camera visible.

**Editors + designers (Karachi team, \~100 words each)** 2–3 team members. Their craft (video editing, caption writing, graphic design). What they love editing. Photo: at their desk or in a Karachi studio setting.

*Real photos only. No stock headshots, no AI portraits.*

### How we work with Charlotte clients

Numbered timeline:

1. **Kickoff call (Day 0).** 45 min via Zoom. We learn your brand voice, your 3 content pillars, your approval preferences.
2. **Content calendar (Day 3).** You get a 4-week content plan in a shared Google Doc. You approve or redline.
3. **First shoot (Day 7).** Charlotte stringer comes on-location. We art-direct remotely via WhatsApp during the shoot.
4. **First post (Day 10).** First Reel goes live. From there, it's weekly cadence.
5. **Monthly strategy call (recurring).** 45 min, same time each month. Review observed results. Adjust direction.

### What we believe (5 principles)

1. **Human-made beats algorithm-made.** Every Reel is edited by a person who watched your footage. No AI slop.
2. **One city. Deep roots.** We work with Charlotte businesses only. Our stringer knows the venues, the seasons, the owners' networks.
3. **Transparent prices.** Three published tiers. No *"custom quotes"* for standard work.
4. **Month-to-month trust.** You can fire us on the first of any month. We earn each month by what we delivered in the last one.
5. **Never promise what we can't measure.** We promise cadence, craft, and process. You measure the business outcomes.

### Why we're based in Karachi (address it directly)

Short section, headed *"The Karachi question."*

Our strategy, editing, writing, and design team is in Karachi, Pakistan. Our production partner is in Charlotte. Three reasons this works:

- **Cost structure.** We can charge Charlotte boutique prices (not Charlotte agency prices) while giving you agency-grade craft.
- **Timezone math.** Our editors have 10 hours overnight to turn your approvals into posts. You wake up to content ready for your morning review.
- **Local eyes on location.** Our Charlotte stringer handles every on-location shoot. We never pretend to be there — we are, through them.

If you'd rather work with an entirely local Charlotte agency, we'll happily refer you to one we trust. No hard sell.

### Contact + CTA

- Primary: *Book a 20-min call →*
- Secondary: *Prefer email first? hello@trustedtechleader.com*
- Tertiary line: *Based in Charlotte via Karachi · US LLC · Wyoming registered*

## 7. Design System

Visual voice that reads as *warm, Southern, crafted, human* — and specifically not *techy, AI-native, or corporate*. Every design decision asks the question: does this signal a human made it?

### Color palette

| Role | Color | Hex | Usage |
| --- | --- | --- | --- |
| Primary text | Warm charcoal | `#2A2A2A` | Body text, headlines |
| Background | Warm off-white | `#FAF8F5` | Page background |
| Accent 1 | Terracotta | `#C5603A` | Primary CTAs, links, decorative |
| Accent 2 | Deep forest | `#2D4A3E` | Secondary accents, badges, tier labels |
| Neutral | Stone gray | `#A8A29E` | Secondary text, borders, dividers |
| Deep | Near-black | `#111111` | Rare, for maximum contrast moments |
| Pure white | White | `#FFFFFF` | Only for cards on tinted backgrounds |

**Rationale:** terracotta + forest green read as Southern warmth without feeling rustic or dated. The warm off-white background signals craft, not SaaS. The stone neutral keeps secondary text readable without competing with the two accents.

### Never use

- Neon anything
- Tech blues (#0066FF, Facebook blue, LinkedIn blue)
- Pink/sunset gradients
- AI aesthetic markers: mesh gradients, iridescent sheens, pastel-on-pastel
- Pure black on pure white (too harsh for the warm palette)
- More than 3 colors in a single visual hierarchy

### Typography

**Display (headlines, hero, big numbers)**

- **Primary:** *Fraunces* (Google Fonts, free, variable) — warm serif with character, excellent at large sizes
- **Backup:** *GT Super Display* (paid, more premium feel if budget allows)
- Sizes: Hero 56–72px · H2 42–48px · H3 28–32px

**Body (paragraphs, UI)**

- **Primary:** *Inter* (Google Fonts, free) — clean, legible, modern sans
- Sizes: Body 16–18px · Small 14px · Caption 12px
- Line height: 1.6 for body, 1.3 for headlines

**Mono (specs, prices, labels)**

- **Primary:** *JetBrains Mono* (free, from JetBrains) — excellent character set
- **Premium:** *Berkeley Mono* (paid) if budget allows
- Sizes: 14–16px
- Use: pricing numbers on tier cards, technical specs, "PRICE" labels, timestamps

All fonts self-hosted via Fontsource (Inter, JetBrains Mono) and Google Fonts CSS2 API (Fraunces).

### Imagery rules

**Photography — do:**

- Natural light, golden hour ideal
- Real Charlotte locations (buildings, streets, parks, interiors)
- Real people — your team, the stringer, actual clients (with written permission)
- Candid over staged. Hands-in-frame, slightly out-of-focus backgrounds are fine.
- Film grain overlay acceptable (max 3% opacity)

**Photography — never:**

- Stock photos (Unsplash is a slippery slope — one exception: subtle textures/backgrounds)
- AI-generated images (clients recognize them)
- Overly polished studio shoots (reads as *big agency*)
- Images of people without written permission
- Images of other agencies' clients

**Illustration (occasional accents only):**

- Hand-drawn feel, 1–2 color palette
- Only for decorative accents, never for content explanation
- From a single illustrator for consistency — Fiverr Pro has good ones at $30–80/asset

### Layout

- Grid: 12-column, 1280px max container on desktop, 24px gutters
- Section vertical padding: 96px desktop, 48px mobile
- Left-align text (never center walls of body copy)
- Max paragraph width: 72ch (≈65–70 characters)
- Asymmetric compositions preferred over perfect symmetry — feels more human
- Whitespace is a design element, not empty space

### Motion

- Minimal, intentional
- Fades on scroll (200ms ease-out), no parallax, no scroll-jacking
- Reel previews play on hover (muted, auto-pause off-screen for performance)
- Button hover: slight color shift + 1px upward translate
- **Never:** bouncing elements, animated gradients, auto-rotating carousels

### Component library (build these first)

- **Button primary** — terracotta fill, white text, 48px tall, 24px horizontal padding, 8px radius
- **Button secondary** — outline (1.5px charcoal), charcoal text, 48px tall
- **Tier card** — 3-column equal height, subtle shadow, hover lift (2px translate + stronger shadow)
- **Testimonial card** — quote + photo + name/role/neighborhood
- **Case study thumbnail** — photo + neighborhood tag (terracotta pill) + 1-line result
- **FAQ accordion item** — chevron rotation, 300ms ease-out, body text expands below
- **Nav link** — underline-on-hover animation, 2px terracotta line sliding in from left
- **Sticky mobile CTA button** — floating bottom-right, 56px tall, terracotta, soft shadow

### Accessibility baseline

- Minimum contrast ratio 4.5:1 for body text (WCAG AA)
- Focus rings visible on all interactive elements (2px terracotta outline)
- Alt text on every image, including decorative ones (empty alt for truly decorative)
- Keyboard-navigable nav and modals
- No autoplay audio anywhere — Reels embed muted, user-initiated sound

### Dark mode

Not launching with dark mode. The warm-off-white light theme *is* the brand signal. Revisit in Month 6 if traffic justifies the build cost.

## 8. Lead Capture & CTAs

Three conversion paths, ranked by value. Every path captured in GA4 + Google Sheet CRM.

### Primary: Book a 20-min call

- **Tool:** Cal.com free tier (or SavvyCal if the UX fits better, $12/mo)
- **Placement:** `/contact#book` embed + reachable via *"Book a call"* button on every page

**Calendar availability:**

| Window (EST) | PKT equivalent | Purpose |
| --- | --- | --- |
| Mon–Fri 7:30–10:30 AM | 6:30–9:30 PM | Primary — your Hour 2 window |
| Mon–Thu 4:30–5:30 PM (optional) | 2:30–3:30 AM | Only if urgent — not recommended |
| Weekends | n/a | Not offered at launch |

**Required fields on booking:**

- Name
- Business name
- Business Instagram handle
- Biggest content problem right now (radio: *"We don't post consistently"* / *"We don't know what to post"* / *"Our content doesn't feel like us"*)
- Phone number (optional)

**Auto-confirmation email includes:**

- Zoom link + meeting duration + what to have ready (one post you're proud of, one that flopped)
- 30-second Loom intro from the founder
- Link to a 1-page content audit doc the prospect can fill in before the call

**Buffer rules:**

- 15 min buffer after each call (notes + prep for next)
- Max 3 calls/day during Hour 2
- 2-hour cancellation window

### Secondary: Newsletter signup

- **Tool:** ConvertKit free tier (up to 10K subscribers) — or Beehiiv if you prefer their editor
- **Placement:** footer every page + dedicated card in `/insights` (Phase 2)
- **Promise:** *"One Charlotte business, one content win, every Friday."*
- **Lead magnet:** *"The 5 Reels every Charlotte business should post this month"* — 10-page PDF, refreshed monthly

**Signup form fields:**

- Email (required)
- First name (required, for personalization)
- Business name (optional)

**Welcome sequence (5 emails):**

1. Day 0: Lead magnet + *"What to expect"*
2. Day 2: *"Here's how we think about content"* (philosophy + 2 examples)
3. Day 5: *"Here's what we do"* (services overview + pricing link)
4. Day 8: *"Ready to chat?"* (book-a-call CTA)
5. Day 12: Added to Friday broadcast list

### Tertiary: Email form (fallback)

- **Placement:** `/contact` below the booking embed
- **Fields:** Name, business, Instagram, email, message (textarea)
- **Backend:** Formspree ($0 tier, 50 submissions/mo) or Netlify Forms (free if hosted on Netlify)
- **Forwards to:** `hello@trustedtechleader.com`
- **Auto-reply:** *"Got it. I'll reply within 12 hours — I'm in Karachi so expect it overnight your time."*

### Google Business Profile (Charlotte)

Set up a GBP for *Trusted Tech Leader LLC* with the virtual Charlotte address.

- **Category:** Marketing Agency (primary) + Advertising Agency + Internet Marketing Service
- **Service area:** Charlotte, NC + Mint Hill, Matthews, Huntersville
- **Hours:** Mon–Fri 7:30 AM–11 AM EST (reflects your window)
- **First 10 photos:** concept Reel stills + behind-the-scenes shots
- **Weekly post cadence** (GBP posts rank on the map pack)
- **Reviews:** ask every signed client for a GBP review at Month 2

### Tracking & attribution

- **GA4** — traffic + events + goals (booking-submit, newsletter-signup, contact-submit)
- **Microsoft Clarity** (free) — session recordings + heatmaps for UX iteration
- **UTM template** on every outreach link:
  - Instantly: `?utm_source=email&utm_medium=outbound&utm_campaign={sequence}&utm_content={email#}`
  - Loom: `?utm_source=loom&utm_medium=outbound&utm_campaign={prospect-name}`
  - LinkedIn: `?utm_source=linkedin&utm_medium=social`
  - IG bio: `?utm_source=instagram&utm_medium=bio`
- All conversions double-tracked in the Google Sheet CRM, not just GA4

### Conversion rates to target

| Step | Benchmark |
| --- | --- |
| Cold email → booking | 0.5–1% of sent |
| Loom-sent email → booking | 2–4% |
| IG DM → booking | 1–3% |
| Website visit → booking | 2–5% (warm traffic) |
| Booking → pilot sign | 20–30% |
| Pilot → full Starter conversion | 60–80% |

## 9. Technical Plan

### Current state → archive

trustedtechleader.com is a 30-page Next.js app with AI-consulting + law-firm positioning. Grafting the new Charlotte Content Studio IA onto it will feel awkward.

**Decision:** archive the old site, start the public-facing site fresh.

- Rename old branch to `v1-archive`
- Serve old site at `old.trustedtechleader.com` for 90 days (preserves any existing backlinks)
- New site ships to root domain

### New stack

| Layer | Tool | Why |
| --- | --- | --- |
| Framework | **Next.js 14+** (App Router) | Already familiar, SEO-strong, Vercel-native |
| Hosting | **Vercel** | Free tier covers launch traffic, edge caching, preview deploys |
| Content | **MDX files in repo** for case studies, FAQ, About | No CMS overhead, version-controlled |
| CMS (Phase 2) | **Sanity.io** free tier | Migrate MDX → Sanity if content cadence demands it |
| Styling | **Tailwind CSS** + CSS variables from Design System | Fast iteration, consistent |
| Fonts | Fontsource (Inter, JetBrains Mono); Google Fonts CSS2 (Fraunces) | Performance |
| Forms | **Formspree** $0 tier (50/mo) | No backend needed |
| Newsletter | **ConvertKit** free tier | Up to 10K subs |
| Booking | **Cal.com** (free embed) | Open-source, good iframe |
| Analytics | **GA4** + **Microsoft Clarity** | Free, complementary |
| Video embeds | Native `<video>` for Reels (Vercel-hosted) OR IG embeds | Avoid IG script if possible for perf |
| Email | **Google Workspace** on main domain for `hello@` | Already covered in Launch Plan |
| Uptime | **UptimeRobot** free (50 monitors) | 5-min ping on home |

### Build approach

**Option A — Solo build (4–6 days)**

- Week 3 Hour 3 blocks + Saturday afternoons
- \~20 hours of focused work
- Risk: pulls time from Charlotte stringer onboarding + concept Reel production

**Option B — Fiverr Pro / Upwork developer (2–3 days, $400–800)**

- Next.js specialist with your wireframes + design brief
- Lets you focus on content + prospect list
- Still budget 4–6 hours of review + revisions

**Recommendation:** Option B if the $400–800 is affordable. Save your Week 3 build hours for shoot coordination and concept Reels — both are higher-leverage than CSS fine-tuning.

### SEO at launch

- **Home title tag:** *Charlotte Social Media & Content Studio | Trusted Tech Leader*
- **Home meta description:** *Weekly Reels, on-location photo, and social management for Charlotte independent businesses. Published prices. Month-to-month.*
- **Open Graph images:** custom per page (1200×630), warm palette, not auto-generated
- **Twitter cards:** same OG images
- **JSON-LD schema:**
  - `LocalBusiness` with Charlotte address, hours, service area, image, aggregateRating (once reviews land)
  - `Organization` site-wide
  - `BreadcrumbList` on case studies + neighborhood archives
- **Internal linking:** every case study links to 2 neighborhood archives; every archive links to home + services
- **`robots.txt` + `sitemap.xml`:** auto-generated by Next.js, submitted to Google Search Console + Bing Webmaster
- **Core keywords to own by Month 6:** *Charlotte social media agency*, *Charlotte content studio*, *Charlotte Instagram management*, *\[neighborhood\] marketing agency* (6 neighborhoods)

### Performance targets

- **Lighthouse:** 95+ on Performance, Accessibility, Best Practices, SEO (home + top 3 pages)
- **LCP:** under 2.5s on mobile 4G
- **Total page weight:** under 500KB on home (excluding video embeds)
- **Images:** `next/image` with `priority` on hero, lazy-load everything else
- **Reel embeds:** lazy-loaded on scroll with poster image; sound only on user interaction
- **Fonts:** preload critical weights (Fraunces 600, Inter 400 + 600); variable fonts cover the rest

### Security + hygiene

- HTTPS only (Vercel auto)
- HSTS header enabled
- CSP header allowing only trusted sources (Google Fonts, Cal.com, IG embeds, GA4, Clarity)
- No tracking pixels beyond GA4 + Clarity
- Cookie banner only if targeting EU traffic (not required for US-only launch)
- Rate-limit form submissions (Formspree handles this on its end)

### Deployment flow

- `main` branch → production
- Feature branches → Vercel preview deploys for review
- Instant rollback via Vercel to any prior deployment
- Monitoring: Vercel analytics + UptimeRobot pinging home every 5 min

### Costs (annual, website-only)

| Item | Cost |
| --- | --- |
| Domain renewal | \~$20/yr |
| Vercel | $0 at launch (free tier), \~$20/mo if exceeded (unlikely Year 1) |
| ConvertKit free tier | $0 |
| Formspree free tier | $0 |
| Cal.com free tier | $0 |
| Google Workspace | counted in Launch Plan |
| **Total website-specific** | **\~$20–$260/year** |

### Migration risk

- Old site's 30 pages may have indexed URLs — set up 301 redirects from top 10 old URLs to closest new-site equivalent (likely `/services`, `/about`, or home)
- Keep `old.trustedtechleader.com` live for 90 days as a rollback path
- Google Search Console "Change of Address" tool not needed (same domain), but monitor crawl errors for 30 days post-launch

## 10. Launch Checklist

Aligned with Launch Plan Week 3–4 timeline. Website goes live on Day 20.

### Pre-launch (Weeks 3–4)

**Domain + hosting**

- [ ] `trustedtechleader.com` renewed through 2027
- [ ] DNS pointed to Vercel
- [ ] SSL certificate active
- [ ] `old.trustedtechleader.com` subdomain serving old site for 90 days
- [ ] 301 redirects set for top 10 indexed URLs from old site

**All pages live**

- [ ] `/` Home — hero, trust row, offer, work gallery, process, pillars, about teaser, FAQ, CTAs, footer
- [ ] `/services` — 3 tiers + add-ons + guarantees + FAQ
- [ ] `/work` — neighborhood filter + 3 concept case studies visible
- [ ] `/work/{slug}` × 3 — concept samples published with visible *CONCEPT* banners
- [ ] `/about` — team photos, 5 principles, Karachi question answered
- [ ] `/contact` — Cal.com embed + fallback email form
- [ ] `/privacy` — standard privacy policy (Termly generator, $0)
- [ ] `/terms` — standard ToS
- [ ] 404 — branded fallback with search + nav home

**Functional**

- [ ] Cal.com tested with 2 dummy bookings from different devices
- [ ] Contact form submits to `hello@trustedtechleader.com`
- [ ] Newsletter signup → ConvertKit welcome sequence firing on test email
- [ ] All CTAs go to the right destinations
- [ ] Phone number tappable on mobile (`tel:` link)
- [ ] Email address clickable (`mailto:` link)

**Visual + UX**

- [ ] Favicon set (16×16, 32×32, 180×180 apple-touch)
- [ ] OG images set for home + services + about (1200×630)
- [ ] Responsive check on real iPhone + Android (not just DevTools)
- [ ] Tested on Safari + Chrome + Firefox
- [ ] Reel embeds load on iOS Safari (Safari sometimes blocks autoplay)
- [ ] Sticky mobile CTA button doesn't block FAQ accordion
- [ ] All images have meaningful alt text (empty alt only for purely decorative)
- [ ] Focus states visible on keyboard navigation

**Analytics + tracking**

- [ ] GA4 installed + test event firing
- [ ] Microsoft Clarity installed
- [ ] Google Search Console verified + sitemap submitted
- [ ] Bing Webmaster verified + sitemap submitted
- [ ] UTM template documented in CRM for consistent tagging
- [ ] Cal.com conversion tracking wired to GA4

**Performance**

- [ ] Lighthouse 90+ on home (performance, accessibility, best practices, SEO)
- [ ] Core Web Vitals green in PageSpeed Insights
- [ ] All images via `next/image`
- [ ] No console errors on home, services, case-study pages
- [ ] UptimeRobot monitoring home + /contact

**Legal + trust**

- [ ] Privacy policy drafted + linked in footer
- [ ] Terms of Service drafted + linked in footer
- [ ] US LLC address visible in footer
- [ ] *Concept piece* banners on all 3 concept samples
- [ ] No unauthorized use of real Charlotte business names (Google each fictional name before publishing)
- [ ] Permission form in Google Drive before any real client content goes up

### Launch day (Day 20)

- [ ] 7 AM PKT — switch DNS to new site (if not already pointed)
- [ ] Spot-check 10 pages across 2 devices
- [ ] Post on personal Instagram: 1 Reel + 1 feed post announcing the new positioning
- [ ] Post on personal LinkedIn: short announcement + 2 screenshots of the new site
- [ ] Email 10 personal contacts (fellow founders, mentors) asking for a share if they feel like it
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster
- [ ] Create Charlotte Google Business Profile (if not already)
- [ ] Soft-announce in r/Charlotte if subreddit rules allow
- [ ] Pin the launch post to the top of TTL Instagram

### First 30 days post-launch

**Week 1**

- [ ] Daily: check broken links, slow pages, 404s — fix immediately
- [ ] Day 3: review GA4 for traffic sources + bounce rate
- [ ] Day 7: add first real client case study (replace Concept 1)

**Week 2**

- [ ] Post 10 Reels on own TTL Instagram showcasing Charlotte work (concept samples count at this stage)
- [ ] Set up weekly blog cadence — 1 SEO article per week, target *"Charlotte \[industry\] social media"*
- [ ] Review Microsoft Clarity recordings for UX issues

**Week 3**

- [ ] A/B test pricing visibility — one week with prices shown (default), one with *"starting at"* summary
- [ ] Collect first 3 testimonials from pilot clients (even if 1 month in)
- [ ] Review discovery-call recordings — what questions came up that aren't in FAQ?

**Week 4**

- [ ] Update Services page based on 2 most common discovery-call questions
- [ ] Full conversion funnel review: visitors → bookings → pilots. Identify biggest drop-off.
- [ ] Plan Month 2 fixes based on data

### Ongoing maintenance

- **Weekly:** blog post publish, 1 new work item if available, 1 GBP post
- **Monthly:** Analytics review, Lighthouse re-check, update testimonials, dependency updates (`npm audit` + `npm update`)
- **Quarterly:** A/B test pricing display, refresh FAQ for new questions, seasonal hero photo refresh, review 404 log for broken-link patterns

### Rollback plan

If the launch causes major issues (site down, forms broken, SEO tank):

1. Vercel instant rollback to previous deployment
2. If rollback doesn't help: swap DNS back to `old.trustedtechleader.com`
3. Investigate, fix in preview branch, redeploy when ready
4. Communication: 1 tweet acknowledging the issue, nothing more
