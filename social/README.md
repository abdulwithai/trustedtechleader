# Weekly social drafts

A local script asks Claude (via the Claude Code CLI) to write the week's social-media drafts from `social/prompt.md`, your `social/ideas.md`, and past topics in `social/used-topics.md`. You edit and post them yourself; nothing is published automatically.

## Weekly flow

1. Monday (19:00 Pakistan time, about 9am US Central) a new file appears in `social/drafts/<monday-date>.md`.
2. Open it, edit, and post manually.
3. During the week, drop new ideas into `social/ideas.md`.
4. Topics used are appended to `social/used-topics.md` automatically so they are not repeated.

## Commands

- Generate now: `npm run social:drafts` (skips if this week's file already exists)
- Regenerate: `node scripts/social-drafts.mjs --force`
- Schedule weekly run: `npm run social:schedule` (re-run to update it)
- Remove the schedule: `powershell -ExecutionPolicy Bypass -File scripts/social-schedule.ps1 -Remove`

## Requirements

- The PC must be on (a missed run starts when the PC is next available) and you must be logged into Windows.
- The `claude` CLI must be installed and logged in (run `claude` once interactively to check).

## Images

After a draft is written, `social/images/<monday-date>/` is filled with branded PNGs per post (`<day>/`), plus a `manifest.json`:

- `square.png` 1080x1080: LinkedIn and Facebook
- `wide.png` 1600x900: X
- `story.png` 1080x1920: TikTok cover (text kept inside the safe zone)
- `slide-01.png` ... 1080x1350: Instagram carousel, one per carousel line (first = cover, last = CTA)

It uses the installed Edge or Chrome (set `SOCIAL_BROWSER` to override). Rebuild with `npm run social:images -- --week YYYY-MM-DD` (default: newest draft). If image rendering fails the draft is kept and `runs.log` records `ok-no-images`.

## Logs

`social/logs/` (git-ignored): `runs.log` has one line per run; `*-stderr.log` holds CLI stderr; `*-failed.md` holds raw output when a run fails validation.

## Admin UI

1. Run `npm run dev`. It starts the site and the social helper together (if a helper is already running it reuses that one). To run only the helper: `npm run social:server`.
2. Open http://localhost:9100/admin/ and go to the Social tab.
3. Each post in the Social tab shows its generated images (square, wide, story, slides) with a Download link under each. Use "Make images for this week" / "Rebuild images" to (re)render them.

The helper server only listens on this PC (127.0.0.1:9201) and only accepts requests from `localhost:9100`. On the live site the Social tab cannot do anything because the helper is not there.
