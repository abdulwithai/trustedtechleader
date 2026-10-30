# Design system: the "AI code audit" language, site-wide

Source of truth for the look: the `/ai-code-security-audit/` landing
(`src/components/ai-code-audit/**`, `src/styles/pages/ai-code-audit/*.css`).
Everything below is global and can be used on any page.

## 1. Files and load order

| File | Loaded by | Holds |
|---|---|---|
| `src/styles/tokens.css` | `src/app/layout.tsx` (1st) | `--acs-*` tokens on `:root` |
| `src/styles/site.css` | layout (2nd) | legacy tokens mapped to `--acs-*`, reset, type, legacy classes (restyled), header, footer, consent banner |
| `src/styles/brand.css` | layout (3rd) | global brand primitives (`.acs-*`), `.hl`, global scroll reveal |
| `src/styles/brand/auditor.css` | `Auditor.tsx` | the narrator character |
| `src/styles/pages/*.css` | each page | page-scoped styles (prefix with the page class) |
| `src/styles/pages/ai-code-audit/base.css` | the audit landing | `.acs` page root + its type reset only |

Fonts are self-hosted via `next/font/google` in `layout.tsx` and exposed on `<html>` as
`--acs-font-display` (Bricolage Grotesque), `--acs-font-sans` (Geist), `--acs-font-mono` (JetBrains Mono).
Do not load fonts anywhere else. Use the stacks: `var(--acs-display)`, `var(--acs-sans)`, `var(--acs-mono)`
(legacy aliases `--font-display`/`--font-serif`, `--font-sans`, `--font-mono`).

## 2. Tokens

Palette (`tokens.css`):

| Token | Value | Use |
|---|---|---|
| `--acs-bg` / `--acs-bg-2` | `#F6F4FB` / `#EEEAF8` | lavender canvas / alternate section, footer |
| `--acs-surface` | `#FFFFFF` | cards |
| `--acs-ink` / `--acs-ink-2` / `--acs-muted` | `#17112B` / `#463F5E` / `#6E6787` | headings / body / secondary |
| `--acs-line` / `--acs-dash` | `#E4DFF1` / `#C9C0E2` | hairlines / dashed slots, ghost borders |
| `--acs-violet` / `-2` / `-deep` / `-tint` | `#6B3BEA` / `#8B5CF6` / `#4A22B8` / `#EDE6FE` | brand accent, hover, tinted fills |
| `--acs-risk(-tint)` | `#E5484D` | problem / vulnerable |
| `--acs-warn(-tint)` | `#E59A22` | warning |
| `--acs-ok(-tint)`, `--acs-ok-bright` | `#3FA34D`, `#8BD46A` (on night) | solved / confirmed |
| `--acs-night` / `-2` | `#130A2A` / `#1D1140` | dark act background |
| `--acs-night-card` / `-line` | white 6% / 12% | cards and lines on night |
| `--acs-on-night` / `-2` | `#F3EFFF` / `#BDB3DA` | text on night |
| `--acs-r-sm/md/lg/xl` | 10 / 16 / 22 / 28px | radii |
| `--acs-shadow`, `--acs-shadow-lg` | violet floating shadows | cards |
| `--acs-ease` | `cubic-bezier(.2,.8,.2,1)` | all motion |
| `--acs-gutter`, `--acs-max` | `clamp(16px,5vw,56px)`, 1200px | page width |
| `--acs-stars` | gradient list | starfield layers |

Legacy token mapping (`site.css`), so old page CSS re-skins automatically:

| Legacy | Now |
|---|---|
| `--navy`, `--text` | `--acs-ink` |
| `--paper` | `--acs-bg` |
| `--sand` | `--acs-bg-2` |
| `--blue` / `--blue-hover` / `--blue-tint` | `--acs-violet` / `--acs-violet-deep` / `--acs-violet-tint` |
| `--line` / `--dash` | `--acs-line` / `--acs-dash` |
| `--text-2` / `--muted` | `--acs-ink-2` / `--acs-muted` |
| `--amber` / `--amber-tint` | `#F0AE45` / `--acs-warn-tint` |
| `--on-dark` / `--on-dark-2` / `--on-dark-muted` | `--acs-on-night` / `--acs-on-night-2` / `#A99FCB` |
| `--dark-line` / `--dark-card` | `#2F2358` / `#20144A` (solid night tones) |
| `--font-serif`, `--font-display` | `--acs-display` (Bricolage, NOT a serif any more) |
| `--font-sans` / `--font-mono` | `--acs-sans` / `--acs-mono` |
| `--r-sm/md/lg/xl` | 10 / 16 / 20 / 28px |
| `--shadow`, `--shadow-lg` | `--acs-shadow`, `--acs-shadow-lg` |
| `--gutter`, `--maxw` | same as `--acs-gutter`, 1200px |
| `--night-bg`, `--night-bg-size` | starfield + glow + night gradient (background layers) |
| `--header-h` | 64px (sticky header height) |

New CSS should prefer the `--acs-*` names. Page-specific palettes (travel `--tv-*`, real estate `--re-*`,
funnel `--f-*`) are owned by those pages.

## 3. Classes

### Brand primitives (global, `brand.css`; same names as on the audit page)
- Layout: `.acs-wrap` (centered width + gutter), `.acs-section` (big vertical rhythm, `position: relative`),
  `.acs-head` (+ `--center`) section heading stack, `.acs-lead` intro paragraph.
- `.acs-hl` / `.hl`: the ONE highlighted gradient phrase in a headline (`--ok` green variant). Adapts on night.
  Also: any `<em>` inside an `h1`/`h2` (or `.h1`, `.h1-md`, `.h2`, `.h2-lg`, `.h2-sm`) renders as the highlight.
- `.acs-eyebrow` (+ `--plain`, `--risk`, `--ok`): tiny mono uppercase label with a dot.
- `.acs-card` (+ `--lg`): white floating card. `.acs-slot`: dashed empty slot. Both adapt inside `.acs-night`.
- `.acs-chip` (+ `--risk`, `--warn`, `--ok`): mono severity/tag pill.
- `.acs-btn` (+ `--primary`, `--ghost`, `--light`, `--sm`, `--lg`, `__arrow`): rendered by `<Cta>`.
- `.acs-glow`: ambient blobs. First child of a relative section, `aria-hidden="true"`; wrap content in `.acs-wrap`
  (`.acs-section > .acs-wrap` gets `z-index: 1`).
- `.acs-night`: the dark act background. Add `<div className="acs-stars" aria-hidden="true" />` for the starfield.
- `.acs-sr`: visually hidden.

### Legacy classes (site.css) – still work, restyled
- Type: `h1`–`h4`, `.h1`, `.h1-md`, `.h2`, `.h2-lg`, `.h2-sm`, `.h3`, `.h3-sm`, `.h3-md`, `.display` all use the display
  face, weight 650, tight tracking. `.lead`, `.body-sm`, `.small`, `.muted`, `.serif-light` (display 500),
  `.big-num`, `.numeral` (now mono label), new `.mono`.
- `.eyebrow` = same look as `.acs-eyebrow` (dot is always on; `.eyebrow--dot` kept as a no-op).
- Layout: `.container` (now the same width as `.acs-wrap`), `.section`, `.section--tight`, `.stack`, `.grid*`, `.gap-*`.
  `.grid-hairline` + `.cell` are now separate floating cards with a 16px gap (no hairline grid).
- Buttons: `.btn` + `.btn-primary` / `.btn-dark` (both violet pill), `.btn-light` (white), `.btn-outline` (ghost),
  `.btn-outline-dark` (ghost on night), `.btn-sm`, `.btn-lg`, `.btn-row(--center)`. No arrow: use `<Cta>` for that.
- Chips: `.chip`, `.pill` = `.acs-chip` look; `button.chip[aria-pressed=true]` = violet fill; `.chip--lg` is a
  sans, sentence-case chip; `.pill--blue/--outline/--dashed/--soft/--amber`, `.chip--amber`.
- Cards: `.card` (white floating), `.card--paper`, `.card--tint`, `.card-dashed` (slot-style CTA strip).
- Sections: `.section-sand` (bg-2), `.section-dark` and `.band-dark` (rounded inset) = night starfield; new `.night`
  alias. Text helpers `.on-dark` (for a dark container you paint yourself). `.glow` = `.acs-glow`.
- Header/footer: `.site-header*`, `.brand*`, `.site-nav`, `.nav-toggle*`, `.site-footer*`, `.footer-links`, `.footer-note`.
- Widgets: `.qa` (native `<details>` FAQ as cards), `.consent-banner` (Tracking.tsx), utilities (`.visually-hidden`,
  `.text-center`, `.mx-auto`, `.mt-0..5`, `.scroll-x`, `.maxw-prose`, `.page-center`, `.skip-link`).
- Inside `.section-dark`/`.band-dark`/`.night`/`.on-dark`: eyebrow, lead, muted, chip, card, cell, `.btn-outline`,
  `.acs-btn--ghost`, highlights and focus rings all switch to their night versions automatically.

## 4. Primitives (React, `src/components/brand/`)

```tsx
import Cta from '@/components/brand/Cta';
<Cta>Book a call</Cta>                                   // violet pill + arrow, BOOKING_URL, new tab
<Cta variant="ghost" href="#process">How it works</Cta>  // in-page, same tab
<Cta variant="light" size="lg">Book a call</Cta>         // on night sections; size: 'sm' | 'md' | 'lg'
```
Booking links fire `generate_lead` in Tracking.tsx. `Cta` does not add `.btn`, so internal links are not
counted as `cta_click` unless you pass `className="btn"` (safe: booking/outbound are checked first).
Always use `BOOKING_URL` from `@/lib/booking` (Cta's default) for booking.

```tsx
import Auditor from '@/components/brand/Auditor';
<Auditor pose="point" facing="right" className="my-auditor" />   // decorative (aria-hidden)
<Auditor pose="thumbs" label="Auditor giving a thumbs up" />      // labelled
```
Poses: `idle | point | think | present | thumbs | alert`. Server-safe SVG, any number per page. Size it with a
class (`width`), default 220px.

`BrandMark` (`@/components/brand/BrandMark`): the logo mark (decorative, `size` prop).

`Reveal` (`@/components/brand/Reveal`): already rendered by `PageShell` and the audit landing. Do not add it again.

## 5. Scroll reveal and the JS-on class

`Reveal` adds `js` to `<html>` (and to `.acs`), then adds `is-in` to every `[data-reveal]` when it scrolls into view
(also for elements rendered later). CSS hides `[data-reveal]` ONLY under `html.js`, so pages work without JS and
under reduced motion everything is shown immediately.

```tsx
<div data-reveal>…</div>                 // rise
<div data-reveal="pop">…</div>           // scale in
<div data-reveal="left">…</div>          // or "right"
<li data-reveal style={{ '--d': 2 } as CSSProperties}>…</li>   // stagger: delay = --d * 90ms
```
For your own JS-dependent hidden states, gate them on `html.js` (e.g. `html.js .x:not(.is-in) { … }`), never hide
content by default.

## 6. Section patterns

```tsx
// Light section with ambient glow
<section className="acs-section" aria-labelledby="x-title">
  <div className="acs-glow" aria-hidden="true" />
  <div className="acs-wrap">
    <div className="acs-head" data-reveal>
      <span className="acs-eyebrow">Process</span>
      <h2 id="x-title">From idea to <span className="acs-hl">launch-ready</span>.</h2>
      <p className="acs-lead">One short paragraph.</p>
    </div>
    <div className="acs-card" data-reveal="pop">…</div>
    <div className="acs-slot" />                       {/* dashed placeholder */}
    <span className="acs-chip acs-chip--risk">Critical</span>
  </div>
</section>

// The dark act (use once per page, for emphasis)
<section className="acs-section acs-night" style={{ overflow: 'hidden' }}>
  <div className="acs-glow" aria-hidden="true" />
  <div className="acs-stars" aria-hidden="true" />
  <div className="acs-wrap">…<Cta variant="light">Book a call</Cta></div>
</section>
```
Legacy equivalents: `.section` + `.container`, `.section-dark` / `.band-dark` (starfield built in), `.card`, `.eyebrow`.
Status colours: red/amber = problem, green = solved/confirmed. Label illustrative UI as an example.

## 7. Breakpoints

- 1000px: header switches to the mobile menu (keep in sync with `NavToggle.tsx`'s `min-width: 1001px`);
  `.grid-3/4/6` drop to 2 columns.
- 760px: `.grid-2/3/4/split/hero` go single column.
- 720px: footer stacks.
- 480px / 420px: smallest grid / compact header.
- Must hold at 360px with no horizontal scroll, and look right to 1440px+.

## 8. Do / don't

- Do reuse the primitives above; put page styles in `src/styles/pages/<page>.css` under the page class.
- Do keep `.btn` on legacy buttons (tracking), `data-funnel`, ids `audit-form` / `audit-result`, and `#site-nav`.
- Do use one highlighted phrase per headline, eyebrows above headlines, white cards on lavender, one night act.
- Do mark decorative SVG `aria-hidden="true"` and respect reduced motion (global rules already cut animations).
- Don't load fonts or redefine `--acs-*` tokens in page CSS; don't use light (300/400) weights for headlines.
  (Some legacy page CSS still sets `font: 400 … var(--font-serif)`; that now renders Bricolage 400. Fix it when
  you redesign the page.)
- Don't use italics for emphasis in headlines (Bricolage has no italic); use `.hl` / `<em>`.
- Don't rename classes in `site.css`; don't hide content without `html.js`.
- Don't render `Reveal` in a page that already uses `PageShell`.
