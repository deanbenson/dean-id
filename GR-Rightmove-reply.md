# Rightmove ADF — reply to John (to move to testing)

Reply to **John Chapman** (adfsupport@rightmove.co.uk), from **Georgina**, cc **Dean**.
Subject: Re: Real Time Data Feed — read-only access request (GR ESTATES)

---

Hi John,

Thank you, that's really helpful.

To confirm what we're after: we'd like **read-only** access only. We want to *consume*
our own data for an internal dashboard, not load listings. Specifically:

- **GetBranchPerformance** — our listing views and lead figures
- **GetBranchPropertyList** — our live inventory on Rightmove
- the **email-lead webhooks**, now that lead retrieval has moved to webhooks

To be clear, we will **not** use the Send property or Remove property calls. Our listings
continue to reach Rightmove through our existing provider (Street), so this read-only feed
needs to sit alongside that without affecting it. Please could you set the account up on
that basis.

Could you please:

1. create and verify our account so the feed and the webhooks specification return, and
2. set us up on the **test environment** with the schema, so we can build and test before
   going live.

For the authentication details:

- Mobile number for the SMS passwords: **07879 402407**
- Preferred keystore format: **PKCS#12 (.p12)**

Our technical contact is **Dean Benson** (dean@dean.id, cc'd), who will handle the
certificate, the server configuration and the webhook endpoint. He can complete the
Provider Contact Form, and we're happy to sign the RTDF EULA — could you confirm whether
both are required for a read-only consumer, and send across anything else you need from us.

Many thanks,
Georgina
G.R. Estates
01642 378022

---

### Before sending — fill in / decide

- **07879 402407** — Rightmove text the auth passwords to this number.
- **PKCS#12 (.p12)** is the keystore format Dean wants (it converts cleanly to the
  certificate + key that the Cloudflare Worker needs for the secure connection). Leave as is.

### Forms John referenced (on https://www.rightmove.co.uk/adf.html)

- RTDF End User License Agreement (to sign)
- Provider Contact Form (Dean to complete)
- Real Time Datafeed Specification (PDF — Dean will work from this to build)

### What happens next (their process)

1. We confirm we want to test and give them the mobile number + keystore format (this email).
2. They verify the account, then email a test pack + keystore and text the password, 1–2 days before testing.
3. Dean builds against the test environment and tests GetBranchPerformance, GetBranchPropertyList and the lead webhooks.
4. Once tested, we request live details; they issue the live keystore + network details.
5. It goes live and feeds Rightmove performance, inventory and leads into the hub.
