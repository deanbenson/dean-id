# Rightmove Real Time Data Feed — access request

A ready-to-send request for **Georgina** to forward to Rightmove. It asks for read-only
data-feed access so the G.R. Estates Hub can pull listing **performance** and **leads**
from Rightmove, alongside Street.

**Send from:** a G.R. Estates email address (so it's clearly from the member agent).
**To:** your Rightmove account manager — or `adfsupport@rightmove.co.uk` if you don't have a named one.
**Cc:** Dean Benson `<dean@dean.id>` (technical contact — handles the certificate and setup).
**Subject:** Real Time Data Feed — read-only access request (GR ESTATES)

---

Hi [account manager name / Rightmove Data Feed team],

I'm Georgina, owner of G.R. Estates (brand "GR ESTATES"), a member agent with three
branches: Normanby, Redcar and Stockton-on-Tees (Sales and Lettings).

We'd like to set up **read-only** Real Time Data Feed access so we can bring our own
Rightmove data into an internal performance dashboard we run alongside our Street CRM.
Specifically the read calls:

- **GetBranchPerformance / GetPropertyPerformance** — listing views and lead statistics
- **GetBranchEmails / GetPropertyEmails** — email leads
- **GetBranchPropertyList** — our live inventory on Rightmove

To be clear, this is read-only. We will **not** use the Send/Remove property or product
calls; our listings continue to be managed through our existing provider.

Please could you let us know the process to authorise a read-only consumer on our network,
including:

- the Network ID and Branch IDs we would reference,
- the keystore / X509 certificate authentication setup, and
- any RTDF licence agreement we need to sign.

Our technical contact for the setup is **Dean Benson** (dean@dean.id, cc'd), who will
handle the certificate and server configuration and can provide our server details and
preferred certificate format on request.

Many thanks,
Georgina
G.R. Estates
01642 378022

---

### What to expect after sending

1. Rightmove confirm your network and send the **RTDF licence** to sign (you, as the account holder).
2. They issue a **keystore / X509 certificate** (password usually by SMS) plus your **Network ID + Branch IDs** — these come to Dean.
3. Dean tests against Rightmove's test environment, then they switch it to live.
4. From then on it feeds Rightmove **performance and leads** into the hub automatically.

It's a manual onboarding on Rightmove's side, so expect a couple of weeks rather than days.
Nothing changes about how your listings reach Rightmove — this only *reads* your data back.
