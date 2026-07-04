# Phone (Plustel / Zeus) REST API - integration plan

Jeff at Aztec confirmed the Zeus portal upgrade (next few weeks) brings a REST API, and that our four
items are all available. I've read the spec (REST API Documentation v1.0, 29 Jun 2026). Good news: it covers
everything read-only, and it lines up almost exactly with the phone pipeline already built in the hub. When the
API and our credentials are live, switching on is a small, fast build, not a fresh start.

## The API in brief

- Base URL: `https://api.plustel.co.uk:8443/` (TLS 1.1+ required).
- Auth: token based. `POST /auth/token` with HTTP Basic auth using our API username + password (issued by Plustel
  support, NOT the Zeus login). Returns a token valid 24 hours, then `Authorization: Bearer <token>` on every call.
- Our credentials are "customer" scoped and read-only - exactly what we want. They only see our own account.
- Connectivity test endpoints need no build: `GET /tools/ping`, `/tools/time`, `/tools/version`, `/tools/myip`.

## What we'll use, and where it lands in the hub

| Plustel endpoint | Gives us | Hub destination (already built) |
|---|---|---|
| `GET /cdr/today`, `/cdr/yesterday`, `/cdr/month`, `/cdr/lastmonth` | Call records, paginated (`rows` / `has_more` / `next_cursor`, `?limit` up to 1000) | `phone_calls` table + Calls screen |
| `GET /cdr/search` | Same, with filters (from, to, cliname, calldir, date/time range, min length/charge), up to 92 days | Back-fill + ad-hoc pulls |
| `GET /cdr/recordings` | The recorded calls (same shape, each with an `id`) | Drives the recordings fetch |
| `GET /cdr/recordings/{id}` | A short-lived (120s) signed URL to the `audio/wav` | Fetch -> R2 -> Whisper -> AI intelligence |
| `GET /cloudx/{instance_id}/seats` | Extension list (ext number -> name) | The "handled by" mapping |

The CDR record fields are: `id, type, date (dd/mm/yyyy), time, src, dst, description, duration, status, charge,
extra ("<ext> - <name>"), clipres (presented CLI)`. That is the **same data, same shape** as the CSV export we
already ingest, so the existing parser (direction from the extension pattern, handler from `extra`, customer
number, contact match) maps straight across with almost no change.

## The big win: full automation, with the cross-link solved

Today recordings are a manual upload and they don't auto-tie to a specific call. With the API:

1. Pull CDRs (`/cdr/yesterday` daily, paginated) -> upsert `phone_calls`.
2. Pull `/cdr/recordings` -> for each new one, `GET /cdr/recordings/{id}` -> fetch the wav -> store in R2 ->
   transcribe + extract (the pipeline that already exists).
3. Because the recording carries the CDR `id` and the call's number, every recording now **links automatically to
   the exact call, the contact and the property** - the gap we noted on the manual route closes itself.

So the whole thing becomes hands-off: calls, recordings, transcripts, AI summaries and cross-links, refreshed on a
daily cron, no exporting by hand.

## What to ask Plustel support for (via Jeff)

1. API credentials (username + password) for our account.
2. With these permissions on the key: `cdr`, `cdrsearch`, `recordings`.
3. Our Cloud X `instance_id` (so we can read the extension -> name list).

## Switch-on steps (when the API + credentials are live)

1. Store the credentials as Worker secrets: `PLUSTEL_API_USER`, `PLUSTEL_API_PASS` (and `PLUSTEL_INSTANCE_ID`).
2. Build the sync: `POST /auth/token` (cache the 24h token in KV) -> page `/cdr/yesterday` into `phone_calls` ->
   `/cdr/recordings` -> fetch each wav via `/cdr/recordings/{id}` -> R2 -> the existing transcribe/extract step.
3. Wire a daily cron (early morning) and flip the Connections card for the phone from "Onboarding" to live.
4. The manual CSV upload stays as a fallback and for back-fill.

## Notes

- Recording retention is 90 days, so we should archive to R2 promptly to keep history beyond that.
- A single `/cdr/search` spans at most 92 days; back-fill in 92-day windows if we want older history.
- The signed recording URL lasts 120 seconds, so fetch-to-R2 happens immediately when we read it.
- The same API has partner/provisioning endpoints (create customer, Cloud X, seats) - we don't use those; we're
  read-only on our own account.
