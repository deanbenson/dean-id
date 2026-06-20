# Morning briefing — what I moved forward overnight

*Short version: I answered your central-system question and built the thing it implies. One push from you ships the code.*

## Do this first (one push)
```
cd ~/Documents/GitHub/dean-id
git add -A && git commit -m "G.R. Hub (stats + filters), waitlist count, ownership + PR + briefing docs" && git push
```
That ships two code changes (below). The three new docs don't need deploying — they're just for you to read.

## What I moved forward
1. **Answered your question — "should this be a central system Georgina owns?"** Yes, and I wrote it up: *GR-Ownership-and-Hub.md*. The gist: the demo proves the *how*; the next strategic move is the *whose* — make it **G.R.'s** (her domain, her Cloudflare account, her hub) with you holding the keys. Cheap to do, turns a prototype into a business asset. The doc has the ownership model, the migration path from dean.id, and rough costs.

2. **Built the central hub itself (v1).** The leads page is now **the G.R. Hub** — same admin key, but now with stat tiles across the top (enquiries total / this week / today / % landed in Street / live review score / waitlist sign-ups) and filter chips (valuations / viewings / contact). It's the at-a-glance cockpit the ownership doc describes — the thing Georgina can't see today. *(Files: leads.html rewritten; a tiny safe addition to /api/leads to return the waitlist count.)*

*(Also: there's a launch/PR draft filed away — *GR-Launch-and-PR-pack.md* — but it's **parked, not for now.** No press until you and Georgina decide you want it. It's just there so it's ready if/when that day comes.)*

## Ready to build next — but I want your eyes on these (didn't do them blind)
- **Branch routing** (#66): tags each enquiry to the right office in Street. It touches the *working* lead pipeline, so I didn't want to change it without you able to test a real enquiry afterwards. 20-min job when you're about.
- **Saved Homes** (#67, the v3 teaser made real): a ♡-save on listings + a saved page. It touches the homepage card code (your most-visible page), so same reasoning — better done when you can click around after.

Both are queued and I know exactly how to do them.

## Decisions still sitting with you / Georgina
- **Go-live ownership** — the big one from the doc: does Georgina set up a G.R. Cloudflare account so this becomes hers? (Her action; ~10 min. Everything else I drive.)
- **Norton office** — still off the site pending your Rightmove check.
- **Socials** — still blocked on the Facebook/Meta token.

## Nothing broke
Both code changes parse clean and are additive — the live demo, the forms, and lead capture into Street are untouched. The hub degrades gracefully if you push the page before the worker (just shows "—" until both are live, which one push avoids anyway).

Sleep well — this'll be here when you're up. 🧡
