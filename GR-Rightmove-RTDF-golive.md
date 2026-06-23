# Rightmove RTDF read feed — switch-on runbook

The read-only Rightmove performance + inventory feed is **built and deployed but dormant**. It does
nothing until the items below are provisioned, so it is safe to have live in the meantime. Follow this
when Rightmove issues the test pack (and again, with the live pack, after sandbox testing passes).

## What we're consuming (read-only)

- **GetBranchPerformance** — daily listing views (summary + detail) and per-branch email/phone leads
- **GetBranchPropertyList** — a reconciliation snapshot of what's live on Rightmove (Rightmove ID ↔ our ref)

Transport: JSON over HTTPS POST to `https://adfapi.rightmove.co.uk` (a test URL is issued for the beta).
Auth: mutual-TLS with a Rightmove-issued X509 client certificate (keystore). No Send/Remove calls are used.

## What Rightmove gives us (with the test pack, then live)

1. A **keystore** (we asked for **PKCS#12 / .p12**) containing the client cert + private key
2. The keystore **password** (sent by SMS to 07879 402407)
3. Our **Network ID** and the three **Branch IDs** (Normanby, Redcar, Stockton-on-Tees)
4. The **test base URL** (for the sandbox phase)

## Switch-on steps

1. **Split the keystore** into a cert + key (PEM) for Cloudflare:
   - `openssl pkcs12 -in rightmove.p12 -clcerts -nokeys -out rm-cert.pem`
   - `openssl pkcs12 -in rightmove.p12 -nocerts -nodes -out rm-key.pem`
   (password is the SMS one; never commit these files)

2. **Upload the cert to Cloudflare** (creates an mTLS certificate, returns an ID):
   - `npx wrangler mtls-certificate upload --cert rm-cert.pem --key rm-key.pem --name rightmove-rtdf`

3. **Bind it** in `wrangler` config (add, do not commit the cert files):
   ```
   [[mtls_certificates]]
   binding = "RIGHTMOVE_RTDF"
   certificate_id = "<id from step 2>"
   ```

4. **Set the IDs** (these are not secrets, but keep them as vars/secrets, not in the repo):
   - `npx wrangler secret put RIGHTMOVE_NETWORK_ID`   → the Network ID
   - `npx wrangler secret put RIGHTMOVE_BRANCH_IDS`   → the three Branch IDs, comma-separated
   - For the sandbox phase only: `npx wrangler secret put RIGHTMOVE_RTDF_BASE` → the test base URL
     (remove this override when going live so it defaults to `https://adfapi.rightmove.co.uk`)

5. **Deploy**, then **pull data**: from the hub (signed in), trigger a one-off
   `POST /api/admin/rightmove-sync` (optionally `?date=DD-MM-YYYY` for a specific day, within the last 28).

6. **Check the screen**: open **Insight → Rightmove performance** in the hub. The figures should fill in.

7. Once sandbox testing passes and Rightmove issues the **live** keystore + network details, repeat steps
   1–4 with the live pack, drop the `RIGHTMOVE_RTDF_BASE` override, and we wire the daily cron
   (recommended 03:00–07:00 UK, per Rightmove's replication guidance).

## Notes

- The data lands in D1 tables `rightmove_branch_perf`, `rightmove_branch_totals`, `rightmove_property_list`.
- Performance is a **single date per call**, within the last 28 days, so we pull yesterday daily and build history.
- Wire dates are `dd-MM-yyyy`; we store them as ISO. The `Channel` integer → sales/lettings mapping comes from
  Rightmove's JSON schema (request it with the test pack).
