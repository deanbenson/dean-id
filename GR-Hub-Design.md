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

## Grounded in your real team (the useful part)
Your 13 people on Street show that access is **level + department**: the company layer everyone gets, plus your department's modules, scoped by your level.

**Levels (scope):** Owner · Partner/Dev · Manager · Team · Trainee (read-mostly).
**Departments (which modules unlock):** Sales · Lettings · Property management · Marketing · Accounts.

| Person | Title (from Street) | Level | Department |
|---|---|---|---|
| Georgina Robinson | Director | Owner | all |
| Dean Benson | Techie | Partner / Dev | all + build |
| Vikki Catterson | Manager / Senior Valuer | Manager | cross-dept, all branches |
| Megan Rich | Sales Progressor | Team | Sales |
| Lea Finegan | Trainee Valuer | Trainee | Sales (read-mostly) |
| Alfie Armour | Property Manager | Team | Property management |
| Donna Cuthbertson | Lettings Negotiator | Team | Lettings |
| Maddie Cowell | Lettings Negotiator | Team | Lettings |
| Olivia Rich | Lettings Negotiator | Team | Lettings |
| Violet Yendall | Lettings Negotiator | Team | Lettings |
| Noah Foster | Team Lettings | Team | Lettings |
| Tia-Rose Catterson | Social Media Manager | Team | Marketing |
| Rosie Turner | Accounts | Team | Accounts |

The payoff: you don't need a dozen bespoke permission sets, just **5 department templates across a few levels**. Tia-Rose and Rosie are why it can't be a simple seniority ladder — their access is about *function*.

## People & access (Georgina's control)
An Owner-only "People & access" area inside the Hub:
- **Add a person:** name + work email, pick a **level** and a **department** — access composes automatically from the templates above.
- **Secure login:** each person signs in as themselves. For a team this size I'd recommend **Google sign-in** (you're already a Google shop, and it brings 2FA with it) or a **magic email link** — both avoid everyone juggling passwords.
- **Revoke / change anytime:** suspend a leaver in one click, change a role, and see who has access and when they last signed in.
- Georgina owns it; you (Partner/Dev) can help administer.

This is the foundational build we parked: real per-user logins + roles, living under G.R.'s own account.

## Navigation & the helicopter home (the IA)
As the Hub grows, a **left sidebar grouped by how an agency thinks** scales far better than top tabs (which run out of room). The groups:

- **Overview** — Home (helicopter view) · Healthcheck (systems status) · Analytics (graphs, comparisons, snapshots)
- **Pipeline** — Enquiries, Valuations, Viewings, Sales progression
- **People** — Contacts (buyers, sellers, landlords, tenants), Calendar (appointments & key dates)
- **Property** — Listings, Portals, Marketing & social
- **Lettings** — Tenancies, Maintenance, Inventory
- **Services** — Removals (G.R. Removals), Mortgages
- **Money** — Client accounts, Statements, Compliance & AML
- **Team** — Staff directory, Company feed, Roadmap
- **Settings** — People & access, Integrations

Each item is a module; most start as "planned" and light up as we build. The sidebar is **role-aware** (per the three layers): a negotiator simply doesn't see Money or Settings, and removals staff land on the Removals module.

### Two modules worth calling out
- **Analytics** — the graphs/comparisons/snapshots layer. Trends over time (enquiries, valuations, viewings, leads by source), a conversion funnel (enquiry → viewing → offer → sale), comparisons (branch vs branch, this month vs last, sales vs lets), demand signals (what people search and ask the AI for), and saved **snapshot** views (a one-glance weekly/monthly summary you can pin or have emailed). This is where "how's the business doing?" gets answered visually.
- **Healthcheck** — a live status board for the whole stack. Every system shown green / amber / red with its last-sync time and last error: Street reachable, listings refreshed, reviews refreshed, leads and alerts flowing, the hourly cron running, the social token valid. The "is everything OK?" page for you and Georgina. Buildable now from the timestamps and error markers we already store.

### Removals sits in here too
G.R. Removals is a service line, so it gets its own **Removals** module (jobs/bookings, enquiries, its 5.0★ reviews) and a KPI tile on the home, kept separate from the estate-agency numbers so the two businesses stay legible on their own terms.

**The home is a helicopter view** — it opens on the KPIs that matter to the owner, with a live activity feed and a "needs you" panel:

- **KPIs:** enquiries (this week) + % into Street · valuations booked · viewings · live listings (sale/let) · review score · be-first alerts. (Sales agreed / completions and phone answered/missed join once we have that data.)
- **Live activity:** recent enquiries, valuations, reviews, alerts, new instructions.
- **Needs you:** unactioned enquiries, valuations to confirm, reviews to reply to.

Everything else is one click away in the sidebar, and a KPI drills straight into its module. The current `hub.html` (systems + plan) is the seed; this turns it into the proper app shell.

## Red / amber / green everywhere
There's a lot in the Hub, so it has to tell you where to look. Every nav item, group and module carries a status dot: **green** (all good), **amber** (needs focus), **red** (problem). A group shows its worst child's colour, so you can scan the sidebar and go straight to what needs you. The home leads with a short "what needs your focus today" from the ambers and reds.

## Ask Georgina, inside the Hub
The site's AI assistant also lives in the Hub as a **plain-language copilot over your own data** — a persistent ask bar at the top of every page. "How many valuations this week?", "Which branch is busiest?", "Anything need my attention?", "Summarise today's enquiries." This is the owner-BI-you-can-just-ask differentiator from the market research, and it means nobody has to learn where every number lives — they can ask. Same friendly Georgina, now pointed at the business.

## Connections (systems, health & data)
One module that answers "is everything wired in, healthy, and up to date?" Each system as a card with a RAG status, the data it holds (179 listings, 13 staff, 281 reviews…), and when it last came in (synced 4 min ago). It folds the Healthcheck idea in: Street reachable, listings/reviews fresh, leads and alerts flowing, social token valid, cron running. Buildable now from timestamps and error markers we already store.

## Each role lands on its own dashboard
The Home is role-specific — same Hub, different front page:

- **Owner (Georgina)** — the full helicopter view: every KPI, all branches, money, healthcheck.
- **Partner / Dev (Dean)** — that plus the engine room: connections, integrations, deploy.
- **Manager (Vikki)** — her office's pipeline and team performance.
- **Negotiator (sales / lettings)** — a focused worklist: my leads, my viewings, today's diary.
- **Marketing (Tia)** — the Marketing dashboard (below).
- **Accounts (Rosie)** — the finance dashboard.

## The company feed as the default
A personalised feed makes a great landing for most staff: company wins (new instructions, sales and lets agreed, 5★ reviews, team shout-outs) mixed with your own items (your leads, your viewings, your properties). **Everyone sees their own feed** — the business pulse plus their day. The KPI dashboard sits alongside for whoever wants the numbers.

## Marketing module (and Tia's home)
Where Rightmove, OnTheMarket and Zoopla live, plus social and the marketing effort:

- **Portal performance** — views, clicks and leads per portal, featured/premium spend, which listings are underperforming and need a boost.
- **Social** — Instagram / Facebook reach, scheduled posts, engagement (once Meta is reconnected).
- **Needs a post** — a worklist: new instructions to launch, price reductions to announce, open houses to promote, 5★ reviews to share.
- **Review drive** — prompt review requests at the right moment.
- **Effort & spend** — where the budget goes, and the return by channel.

Some portal stats depend on each portal's reporting access (via Street or the portal back-ends), so a few tiles fill in as we connect those.

## Decision log
- **Logins rollout (decided):** Owner + Partner only for now, on the shared key. Build the modules richer first; per-user logins + the full role model come later, as the foundational build, under G.R.'s own account.
- **Roadmap (done):** now a live module inside the Hub ("What we're building"), not a doc on a laptop.
- **Role model (grounded):** mapped to the real 13-person team — access = level + department, ~5 department templates. See "Grounded in your real team".

## Open questions for you
- Staff structure: how many people, and do they split cleanly into Manager / Team, or do you want finer tiers? (Needed before we build per-user logins.)
- Anything that should be Owner-only that I've put as Manager-visible (e.g. should managers see branch performance/analytics)?
