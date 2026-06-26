# Phone (3CX) → G.R. Hub — what we can get, and how we store it

The goal: every call logged against the right person and property, so opening a contact shows your
whole call history with them, and "missed calls to ring back" land on the Home dashboard. This is the
phone equivalent of the Rightmove leads feed — same shape, same hub.

## What data 3CX actually exposes

3CX gives call data three ways. They are not equal for our setup (a serverless Cloudflare Worker that
can't hold open a TCP socket or read files on the 3CX box):

1. **Webhook / CRM call-journaling (RECOMMENDED).** 3CX posts an HTTP request to a URL we choose on
   call events (ringing, answered, ended). The "ReportCall" scenario fires when a call ends and carries
   the fields we need: external **Number**, **CallDirection** (Inbound/Outbound), **Duration** (hh:mm:ss),
   and the **Agent** extension + first/last name + email. This is exactly like the Rightmove lead webhook:
   3CX pushes, we receive and store. Near-real-time, no polling, no extra infrastructure.
   - Caveat: server-side CRM integration / webhook is a **Pro/Enterprise** feature. We must confirm our
     edition (the credentials tracker already flags "ask if on 3CX Pro").

2. **CDR (Call Detail Records).** Enabled in Admin > Advanced > CDR. Outputs to a file (`cdr.log`), a TCP
   socket (3CX as server or client), or a database via the 3CX Exporter (to SQL Server / MySQL). In V20
   it's a single `cdr_output` table. This is the complete historical log, but every output needs something
   we don't have: a machine holding a socket open, or a database to export into. Not a fit for the Worker.
   - Use of CDR: a **one-off historical backfill** (export `cdr_output` once, via Aztec) to seed past calls.

3. **Call Control API (REST + WebSocket).** For live call control — click-to-dial, screen-pop, presence.
   More than "get the data." Park it for a later phase (e.g. click-to-call from a contact's profile).

**Recommendation:** webhook journaling for the live feed (going forward), plus an optional one-off CDR
export to backfill history. Mirrors Rightmove exactly.

## How we store it locally (D1)

New table `phone_calls`:

| column | meaning |
|---|---|
| `id` | 3CX call id if supplied, else a hash of number+start+extension |
| `started_at` / `ended_at` | ISO timestamps |
| `direction` | inbound / outbound |
| `external_number` | normalised UK number (the join key) |
| `external_number_raw` | exactly as 3CX sent it |
| `extension` | agent extension |
| `agent_name` / `agent_email` | who took it |
| `duration_sec` | parsed from hh:mm:ss |
| `status` | answered / missed / voicemail (if available) |
| `branch` | derived from an extension → branch map |
| `contact_id` | matched Street contact (by phone) |
| `property_id` | best-effort (via the contact's live sale/tenancy or recent enquiry) |
| `recording_url` | if ever supplied (unlikely via webhook) |
| `raw` | full payload, so we never lose a field |
| `synced_at` | when we stored it |

Indexes on `started_at`, `external_number`, `contact_id`.

**Matching (the killer join).** Contacts are ~98% phone-filled. We normalise both sides (strip spaces,
`+44` ↔ `0`, keep the last 9–10 digits) and look up the contact on each call; attach `contact_id`, then
the property via that contact. Unmatched calls still store — they surface as "unknown number" to be
claimed, and feed a "should this be a new lead?" prompt.

**Surfacing.** A new **Calls** screen (searchable, like Rightmove leads); a **Recent calls** section and a
**Last call** tile on each contact profile; and **missed calls to return** on the Home dashboard.

**Security.** The webhook receiver is protected by a secret in the URL/header (`env.PHONE_WEBHOOK_SECRET`),
validated on every POST, public path but not guessable — same pattern as the Rightmove endpoint.

## What I need to switch it on

1. The **3CX console URL** so I can see our edition and whether the CRM/webhook integration is available.
2. Confirmation of **who configures 3CX** — if Aztec manages it and we don't have admin, this page is what
   they need: "add a server-side CRM webhook (ReportCall) POSTing call-end events to a URL we provide."
3. (Optional) a **one-off `cdr_output` export** from Aztec to backfill historical calls.

Once edition + access are confirmed, the build is: receiver endpoint + `phone_calls` table + phone-match +
Calls screen + profile/home surfacing. Estimate: the same size as the Rightmove leads build.
