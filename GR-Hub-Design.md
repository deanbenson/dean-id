# The G.R. Hub — design (who sees what, and why)

*The principle: one login, one place. Nobody should live in six different tools. The Hub is the single pane of glass over everything we've connected — and yes, over time it should contain everything.*

## Three layers (this answers "what can everyone see?")
Every person gets the same Hub, but it shows three layers depending on who they are:

1. **My view** — role-based, your daily work. A negotiator sees their leads, viewings and the phone queue. A manager sees their office. Georgina sees the lot.
2. **The Company view** — the shared layer **everyone** in the company sees, by design. Live wins (new instructions, sales/lets agreed), the review wall, the team directory, and **the roadmap** ("what we're building next"). This is the culture-and-alignment layer: it's how the team feels the momentum.
3. **The Owner / Build view** — Georgina and you only. Access control, the connected systems/integrations, finance, and the roadmap *controls*. The engine room.

## Roles
| Role | Who | In short |
|---|---|---|
| **Owner** | Georgina | Sees and controls everything, all branches. |
| **Partner / Dev** | You (Dean) | Everything operational **plus** the build layer: integrations, roadmap, deploy, keys surface. |
| **Manager** | Branch / senior | Full operational view of their office; cross-branch read. No access-control or integrations. |
| **Team** | Negotiator / lettings / property manager | Their day-to-day: assigned leads, viewings, listings (read), phone queue, maintenance jobs. No finance, no settings. |
| **Read-only** | Accountant, new starter, advisor | Dashboards only, no changes. |

## Who can access what (the matrix)
✓ full · ◐ their branch / read-only · – none

| Module | Owner | Partner/Dev | Manager | Team | Read-only |
|---|---|---|---|---|---|
| Enquiries / leads | ✓ | ✓ | ◐ branch | ◐ assigned | ◐ read |
| Portfolio / listings | ✓ | ✓ | ✓ | ◐ read | ◐ read |
| Phone / front desk | ✓ | ✓ | ◐ | ◐ | – |
| Viewings & diary | ✓ | ✓ | ◐ | ◐ own | ◐ read |
| Reviews | ✓ | ✓ | ✓ | ◐ read | ◐ read |
| Maintenance & inventory | ✓ | ✓ | ◐ | ◐ lettings | – |
| Payments & compliance (finance) | ✓ | ✓ | – | – | ◐ accountant |
| Marketing / socials / portals | ✓ | ✓ | ◐ | – | ◐ read |
| Demand & analytics | ✓ | ✓ | ◐ branch | – | ◐ read |
| **Company feed** (wins, noticeboard) | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Roadmap / what's next** | ✓ manage | ✓ manage | ✓ read | ✓ read | ✓ read |
| Settings / access / integrations | ✓ | ✓ | – | – | – |

The three "everyone" rows (Company feed, Reviews read, Roadmap read) are deliberately the shared layer. Everything else is gated.

## Every connected system has a home here
The Hub is the front-end to all of it. Each system surfaces as a module — some as live data, some as a deep-link ("open in Street"), some eventually as full control without leaving the Hub.

| Module | Fed by |
|---|---|
| Enquiries / leads | Website forms → Street |
| Portfolio / listings | Street → our property database |
| Reviews | Google |
| Phone / front desk | The phone system (+ the future AI front desk) |
| Marketing / socials | Meta (Instagram / Facebook) |
| Portals | Rightmove / Zoopla / OnTheMarket |
| Payments & compliance | The finance/compliance systems |
| Maintenance & inventory | The lettings ops systems |
| Demand & analytics | Site search + Ask Georgina + traffic |

## The roadmap belongs *in* the Hub
"What are we building next" shouldn't live in a doc on your laptop — it should be a **module everyone can see** (read), that Georgina and you manage. It doubles as a changelog ("what's new"). The team sees what's coming (the front desk, My G.R. Estates), which builds buy-in. Right now the roadmap lives in *GR-Estates-Plan.md*; the near-term job is to make it a live Hub tab.

## The honest build reality
Today the Hub is one **shared admin key** — perfect for you and Georgina, but it can't tell people apart, so it can't do real roles yet. Proper multi-person access needs **per-user login + permissions**. That's the foundational next build for the Hub, and it should happen under **G.R.'s own account** (see *Ownership & the central hub*), because these are G.R.'s people and G.R.'s data.

## Suggested sequence
1. **Now:** single key, Owner + Partner. Keep adding read-only modules (portfolio, reviews — done).
2. **Foundational:** per-user logins + the role model above (Owner / Manager / Team / Read-only).
3. **Roadmap module + Company feed:** make "what's next" and "live wins" real, shared views.
4. **Deepen the modules:** front desk, finance, maintenance, portals — each becomes a real panel, measured in the Hub.

## Decision log
- **Logins rollout (decided):** Owner + Partner only for now, on the shared key. Build the modules richer first; per-user logins + the full role model come later, as the foundational build, under G.R.'s own account.
- **Roadmap (done):** now a live module inside the Hub ("What we're building"), not a doc on a laptop.

## Open questions for you
- Staff structure: how many people, and do they split cleanly into Manager / Team, or do you want finer tiers? (Needed before we build per-user logins.)
- Anything that should be Owner-only that I've put as Manager-visible (e.g. should managers see branch performance/analytics)?
