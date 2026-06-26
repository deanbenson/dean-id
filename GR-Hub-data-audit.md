# G.R. Hub — linked-data audit (evidence-based, June 2026)

Method: for every Street record type I pulled a real record and asked Street for all its relationships
(the links only appear when explicitly requested). Below is what each record *actually* links to, whether
the hub shows it, and the gap. No guessing — each row was probed live.

## Already surfaced (done)

- **Contacts / profile** — a person's properties, valuations, role (vendor/landlord/tenant). (v0.79–0.87)
- **Property view** — its viewings, offers, sale and notes, pulled live. (v0.88)
- **Viewings** — full detail: who viewed + lead strength, vendor, negotiator, notes, feedback. (v0.89)
- **Valuations** — property, valuer, branch, instruction, listed price (on the profile). (v0.87)

## Gaps found — linked data we hold but don't show

| Screen | Linked data in Street (confirmed populated) | Shown? | Gap |
|---|---|---|---|
| **Sales** | property, **buyer (applicant)**, **vendor**, **seller's solicitor**, **buyer's solicitor**, notes | flat row only | The whole transaction — both sides + both solicitors + notes |
| **Tenancies** | property, **owner**, **tenants**, **inspections**, **EPC**, **safety certificates**, agreement + guarantor docs, notes | flat row only | The whole tenancy file |
| **Maintenance** | property, **assignee**, **attachments (photos)** | flat row only | Who's on it, the property, the photos |
| **Move-outs** | property, tenancy, **meter readings** | flat row only | Meter readings + the tenancy/property |
| **Inspections** | **inspector**, bookedBy, property | flat row only | Who inspected + the property |
| **Solicitors** | firm, the **sales they act on** | flat row only | Their firm + linked cases |
| **Vendors / Landlords / Tenants** | (properties/tenancies already shown) + **notes** | partial | Notes not shown |
| **Offers** | property, **buyer**, salesListing, notes | via property only | Buyer + notes on each offer |
| **Keys** | property | flat row | Link to the property |
| **Interested applicants** | applicant, property | flat row | The person + the property |
| **Sales instructions** | property, owner, valuation, fees | not surfaced | The instruction + fee |

## The pattern

Two things recur across almost every record:

1. **Detail views are missing.** Sales and Tenancies especially are whole files (buyer, vendor, solicitors,
   inspections, certificates) shown as a single row. They deserve a click-through detail like we built for
   viewings and properties.
2. **Notes are everywhere and shown nowhere.** Vendors, landlords, tenants, sales, tenancies, properties,
   viewings and valuations all carry notes — the human context of each relationship. We surface them only on
   viewings so far.

## Recommended order (by value)

1. **Sales detail** — buyer, vendor, both solicitors, the property, notes. These are the money events.
2. **Tenancies detail** — owner, tenants, inspections, EPC + safety certificates, notes. The compliance + lettings file.
3. **Notes, surfaced broadly** — on contact profiles and the property view (one helper, reused).
4. **Maintenance / Move-outs / Inspections detail** — property, assignee, photos, meter readings, inspector.
5. **Minor links** — keys → property, interested-applicants → person + property, solicitor → cases.

Each detail view follows the proven pattern: one live `/api/*-hub` endpoint + a click-through screen, so the
data is always current and we don't depend on the synced copy's (sometimes missing) links.
