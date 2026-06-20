# Making it G.R.'s — ownership & the central hub

*Answering your late-night question: should this be a central system Georgina owns, central to her business? Short version — **yes, and that's exactly the line between a clever demo and a real business asset.***

## Where it sits today (and why that's fine — for now)
Right now everything runs on **dean.id** — your domain, your Cloudflare account. That's perfect for *proving it works* (and it does, against her real Street CRM). But a business-critical system can't live on the builder's personal domain. For this to be central to G.R., it has to be **owned by G.R.**

## The vision: one central hub Georgina owns
A single G.R.-owned home with two faces:

- **The shopfront** — the public website (on gr-estates.co.uk).
- **The cockpit** — a private admin area only the team sees: the leads inbox, dashboards (enquiries, reviews, demand), settings. (We've already started this with the leads inbox.)

Both fed by **Street** (her data hub) plus Google, Meta and the AI. Georgina logs into something that is unmistakably *hers* and sees her whole front-of-house at a glance — the thing she doesn't have today.

## What "G.R. owns it" actually means
| Asset | Owned by | Built / run by |
|---|---|---|
| Domain (gr-estates.co.uk) | Georgina / G.R. | DNS pointed at the new site |
| Hosting account (Cloudflare) | **G.R.** — Georgina as account holder, billed to G.R. | Dean added as admin |
| The code | G.R. (their repo / their IP) | Dean |
| The business data | G.R. (Street) — already hers | — |
| API keys & secrets | Stored under **G.R.'s** account | Dean sets them; values stay in the vault |
| Google profile & socials | Georgina | — |

**The principle:** *Georgina owns the assets; Dean is the builder and keyholder.* If Dean ever steps back, G.R. still owns everything and can hand the keys to anyone. That's what makes it a business asset, not a dependency on one person.

## Migration path: dean.id demo → G.R.-owned production
Not a rebuild — the demo **is** the product. It's a move + a DNS switch, done carefully:

1. **G.R. Cloudflare account** — Georgina/G.R. creates one (her action, ~10 min). Dean is added as a member.
2. **Move the Worker, search DB (D1) and cache (KV)** into G.R.'s account — re-deploy under it.
3. **Re-set the secrets** (Street, Anthropic, Google, the leads key…) under G.R.'s account — Dean does it; values never leave the vault.
4. **Point a G.R. address at it** — launch first on a safe subdomain (e.g. `new.gr-estates.co.uk`) to test in the real world, then cut `gr-estates.co.uk` over when everyone's happy.
5. **Hand Georgina the keys** — she's owner of record; access logged in the credentials tracker.

## What it costs to own it (rough)
- **Cloudflare** (Workers / D1 / KV): comfortably **free** at this traffic — pennies even on a busy month. Domain: already owned.
- Running costs we already sized: **Ask Georgina AI** (~£20–100/mo by usage), **Google reviews** (free tier), **Street** (existing). 
- So *owning* it is cheap. The value is **control** + it being a genuine business asset she can build a brand and a moat on (her own audience, her own data, less reliance on the portals).

## What only Georgina can do
Create/own the G.R. Cloudflare account and control the domain DNS. By definition those are hers — that's the whole point of ownership. Everything else, Dean drives.

## Bottom line
The demo proved the *how*. The next strategic move is the *whose*: make it **G.R.'s** — her domain, her account, her central hub — with Dean holding the keys. Cheap to do, and it turns a brilliant prototype into the spine of her business.
