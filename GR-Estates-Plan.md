# G.R. Estates — The Plan (helicopter view)

*Where we are, how it all fits together, who touches what, and the next few weeks.*

## Where we are
A working **demo** of a new G.R. website is built on dean.id — and it's wired to your **real** Street CRM, so it pulls your actual listings and team and pushes real leads in. It proves the concept. It is **not live** yet; gr-estates.co.uk is still your site. The pending call is whether to launch it — Georgina's.

## How it all connects
Buyers & sellers → **the website** (on Cloudflare) ⇄ **Street CRM** (your hub) → **your team**.
The website is fed by **Google** (reviews), **Claude** (the "Ask Georgina" AI) and **Meta** (socials, once connected). Leads from the forms land straight in Street, where the team already works — no double entry.

## Where everything lives
| Thing | Where it lives |
|---|---|
| The website + its logic | Cloudflare (the dean.id Worker), with a small search database (D1) and a fast cache (KV) |
| The code | GitHub — auto-deploys when pushed |
| Your real business data | **Street** (cloud CRM) — the single source of truth |
| Reviews / Socials / AI | Google / Meta / Anthropic (Claude) |
| Passwords & API keys | Cloudflare secrets + your vault — never in the code or repo |

## Who accesses what
| Who | What they touch |
|---|---|
| The public | The website — browse, ask Georgina, enquire |
| Your team | Street — their daily tool; website leads arrive here |
| Georgina (owner / admin) | Street admin, Google Business, the social accounts, the vault — sees everything |
| Dean (builder) | Cloudflare, GitHub, the API keys, the credentials tracker — builds & maintains |

## What you'll see that they can't today
- **Every website lead captured & tagged** — by source, property and type. Nothing slips through (today the old site's enquiries mostly just email out and can get lost).
- A **leads view** you can scan at a glance (built from the backup copy the site keeps).
- **Live review performance** across all branches in one place.
- **Demand signal** — what people search for, and what they ask the AI.
- **Early-access interest** — who's signed up for "My G.R. Estates".
- *(To add: site traffic & conversion analytics.)*

## The next ~3 weeks
- **Week 1 — Polish + visibility.** Full QA pass (mobile, content, reliability), branch-route the leads to the right office, and stand up a simple **leads inbox** so you can actually *see* enquiries coming in.
- **Week 2 — Socials & the v3 teaser.** Connect Instagram/Facebook (needs your FB untangled), tighten the "My G.R. Estates — coming soon" page, and quietly scope the go-live.
- **When it's ready (no fixed date) — go-live.** Make the go-live call and cut over to a G.R.-owned address. It goes when it's right, not on a clock.
- **Then — v3.** My G.R. Estates accounts (saved homes, saved searches), instant "be first" alerts, and the AI receptionist.
- **Optional, only if you want it — press.** A launch/PR pack is drafted and parked (*GR-Launch-and-PR-pack.md*). We are **not** pressing for now — it's just there for if/when you and Georgina ever fancy a moment of it. No rush, no pressure.

## Open dependencies (the things waiting on someone)
- **Socials** — needs your Facebook account untangled (the Meta token we got stuck on).
- **Go-live** — domain, hosting, and who runs it day-to-day.
- **Norton office** — your Rightmove check before it goes on the site.

## Night-time push list (pick any, any order)
Leads inbox · branch routing · Saved Homes page · socials (after FB) · v3 teaser polish · launch + PR pack · analytics.
