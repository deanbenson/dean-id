const ME = {
  name: "Dean Benson",
  status: "online",
  location: "North East, UK",
  stack: ["ai", "tech", "automation", "web", "strategy"],
  currently: "helping businesses do more with less",
  contact: "hello@dean.id",
  built_by: "dean.id",
  _comment: "yes, I tag my own work"
};

function badgeSVG(theme, cursor, blink) {
  const dark = theme === "dark" || theme === "transparent-dark";
  const chip =
    theme === "dark" ? `<rect width="92" height="26" rx="6" fill="#0d1117"/>` :
    theme === "light" ? `<rect width="92" height="26" rx="6" fill="#f4f1ea" stroke="#d8d4c8" stroke-width="1"/>` :
    "";
  const textFill = dark ? "#e6edf3" : "#1a1a1a";
  const cursorFill = dark ? "#28c840" : "#1d9e75";
  const anim = blink
    ? `<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.45;0.5;0.95;1" dur="1.2s" repeatCount="indefinite"/>`
    : "";
  const block = cursor === "underscore"
    ? `<rect x="70" y="17" width="8" height="2.5" fill="${cursorFill}">${anim}</rect>`
    : `<rect x="70" y="7" width="7" height="13" fill="${cursorFill}">${anim}</rect>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="26" viewBox="0 0 92 26" role="img" aria-label="dean.id">
${chip}<text x="12" y="17.5" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="13" fill="${textFill}">dean.id</text>
${block}
</svg>`;
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const STYLE = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #111113;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    padding: 24px;
  }
  .win {
    width: 100%;
    max-width: 600px;
    background: #0d1117;
    border: 1px solid #26262a;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,.5);
  }
  .bar {
    background: #1a1a1e;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }
  .method { color: #5DCAA5; }
  .url { color: #b8b8c0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .badge200 {
    margin-left: auto;
    background: #12351f;
    color: #28c840;
    padding: 2px 9px;
    border-radius: 20px;
    font-size: 11px;
    opacity: 0;
    transition: opacity .4s;
  }
  .badge200.show { opacity: 1; }
  #out {
    padding: 18px 20px;
    font-size: 14px;
    line-height: 1.9;
    color: #e6edf3;
    min-height: 285px;
  }
  #out div {
    white-space: pre-wrap;
    word-break: break-word;
    padding-left: 4ch;
    text-indent: -4ch;
  }
  #out.human div {
    padding-left: 0;
    text-indent: 0;
    margin-bottom: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 15px;
    line-height: 1.65;
    color: #d6d6dc;
  }
  #out.human a { color: #9FE1CB; }
  @media (max-width: 480px) {
    #out { font-size: 13px; padding: 16px 14px; }
    #out.human div { font-size: 14px; }
    .url { font-size: 11px; }
  }
  .k { color: #AFA9EC; }
  .s { color: #9FE1CB; }
  .g { color: #28c840; }
  .p { color: #7d8590; }
  #out a { color: #9FE1CB; }
  .cursor {
    display: inline-block;
    width: 8px;
    height: 15px;
    background: #e6edf3;
    vertical-align: -2px;
    animation: blink 1.1s steps(1) infinite;
  }
  @keyframes blink { 50% { opacity: 0; } }
  .foot { display: flex; flex-direction: column; align-items: center; gap: 9px; }
  .stamp {
    font-size: 14px;
    color: #b8b8c0;
    text-decoration: none;
  }
  .stamp .block {
    display: inline-block;
    width: 7px;
    height: 13px;
    background: #28c840;
    margin-left: 4px;
    vertical-align: -1px;
    animation: blink 1.2s steps(1) infinite;
  }
  .get {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 12.5px;
    color: #8a8a93;
  }
  .get a { color: #b8b8c0; }
  .toggle {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 13.5px;
    color: #e6edf3;
    background: #1a1a1e;
    border: 1px solid #3a3a40;
    border-radius: 24px;
    padding: 9px 18px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: border-color .2s, background .2s;
  }
  .toggle:hover, .toggle:focus-visible { border-color: #28c840; background: #15241a; }
  .toggle .dot { width: 7px; height: 7px; border-radius: 50%; background: #28c840; display: inline-block; }
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  @media (prefers-reduced-motion: reduce) { .cursor, .stamp .block { animation: none; } }
`;

const HOME = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>dean.id · Dean Benson</title>
<meta name="description" content="ai, tech, automation, web, strategy. North East, UK.">
<meta name="theme-color" content="#111113">
<link rel="canonical" href="https://dean.id/">
<meta property="og:title" content="dean.id · Dean Benson">
<meta property="og:description" content="ai, tech, automation, web, strategy. North East, UK. It's a real API: curl dean.id/v1/me">
<meta property="og:url" content="https://dean.id/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="dean.id">
<meta property="og:image" content="https://dean.id/og.png">
<meta property="og:image:secure_url" content="https://dean.id/og.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="dean.id, with a green terminal cursor. ai, tech, automation, web, strategy.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://dean.id/og.png">
<meta name="twitter:title" content="dean.id · Dean Benson">
<meta name="twitter:description" content="ai, tech, automation, web, strategy. It's a real API: curl dean.id/v1/me">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dean Benson",
  "url": "https://dean.id",
  "jobTitle": "AI, tech, automation, web & strategy",
  "address": { "@type": "PostalAddress", "addressRegion": "North East", "addressCountry": "GB" },
  "knowsAbout": ["AI", "automation", "web development", "technology", "business strategy"],
  "mainEntityOfPage": "https://dean.id/v1/me"
}
</script>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><rect x='30' y='30' width='18' height='40' fill='%2328c840'/></svg>">
<style>${STYLE}</style>
</head>
<body>
  <h1 class="sr">dean.id, Dean Benson: ai, tech, automation, web, strategy</h1>
  <main style="display: contents;">
  <div class="win" role="img" aria-label="Dean Benson, North East UK. Helps businesses grow with websites, systems, automation and AI. Contact hello@dean.id. Styled as an API response; a human-readable toggle follows.">
    <div class="bar">
      <span class="method" id="m">GET</span>
      <span class="url" id="u">https://dean.id/v1/me</span>
      <span class="badge200" id="badge">200 OK</span>
    </div>
    <div id="out" aria-hidden="true"></div>
  </div>
  <a href="#human" id="mode" class="toggle"><span class="dot"></span>not a robot? read this in plain english</a>
  <p class="foot">
    <a class="stamp" href="https://dean.id"><img src="/badge.svg?theme=transparent-dark" alt="dean.id" width="92" height="26" style="display:block"></a>
    <span class="get"><span style="font-family:ui-monospace,Menlo,monospace">curl dean.id/v1/me</span> &nbsp;&middot;&nbsp; <a href="/badge">the stamp</a></span>
  </p>
  </main>
<script>
  var jsonLines = [
    '<span class="p">{</span>',
    '  <span class="k">"name"</span>: <span class="s">"Dean Benson"</span>,',
    '  <span class="k">"status"</span>: <span class="g">"online"</span>,',
    '  <span class="k">"location"</span>: <span class="s">"North East, UK"</span>,',
    '  <span class="k">"stack"</span>: [<span class="s">"ai"</span>, <span class="s">"tech"</span>, <span class="s">"automation"</span>, <span class="s">"web"</span>, <span class="s">"strategy"</span>],',
    '  <span class="k">"currently"</span>: <span class="s">"helping businesses do more with less"</span>,',
    '  <span class="k">"contact"</span>: <span class="s">"<a href="mailto:hello@dean.id" tabindex="-1">hello@dean.id</a>"</span>',
    '<span class="p">}</span>'
  ];
  var humanLines = [
    'Hi, I\\'m Dean.',
    'I help businesses grow. Sharper websites, systems that run themselves, automation that kills the boring work.',
    'I deploy AI that blows minds and quietly makes you money.',
    'North East, UK. Say hello: <a href="mailto:hello@dean.id" tabindex="-1">hello@dean.id</a>',
    '<span style="font-size:12.5px; color:#7d8590;">P.S. the other version of this page is dressed up as computer code. Same me, just showing off a bit.</span>'
  ];
  var out = document.getElementById('out');
  var modeLink = document.getElementById('mode');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer = null;
  var mode = 'machine';
  function render(arr, n, cur) {
    var h = '';
    for (var k = 0; k < n; k++) {
      h += '<div>' + arr[k] + (cur && k === n - 1 ? '<span class="cursor"></span>' : '') + '</div>';
    }
    return h;
  }
  function typeSet(arr, instant) {
    if (timer) { clearTimeout(timer); timer = null; }
    var i = instant ? arr.length : 0;
    function step() {
      if (i < arr.length) {
        out.innerHTML = render(arr, i + 1, true);
        i++;
        timer = setTimeout(step, 160);
      } else {
        out.innerHTML = render(arr, arr.length, false);
        document.getElementById('badge').classList.add('show');
      }
    }
    step();
  }
  function setMode(m, instant) {
    mode = m;
    var human = m === 'human';
    out.className = human ? 'human' : '';
    document.getElementById('m').textContent = human ? 'HI' : 'GET';
    document.getElementById('u').textContent = human ? 'dean benson, in plain english' : 'https://dean.id/v1/me';
    modeLink.innerHTML = human ? 'see the techie version' : '<span class="dot"></span>not a robot? read this in plain english';
    modeLink.setAttribute('href', human ? '#' : '#human');
    typeSet(human ? humanLines : jsonLines, instant || reduced);
  }
  modeLink.addEventListener('click', function (e) {
    e.preventDefault();
    var next = mode === 'machine' ? 'human' : 'machine';
    if (history.replaceState) { history.replaceState(null, '', next === 'human' ? '#human' : location.pathname); }
    setMode(next, false);
  });
  if (location.hash === '#human') {
    setMode('human', true);
  } else {
    timer = setTimeout(function () { typeSet(jsonLines, reduced); }, 350);
  }
</script>
</body>
</html>`;

const BADGE_PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>the stamp · dean.id</title>
<meta name="description" content="Configure the dean.id stamp for your site.">
<meta name="theme-color" content="#111113">
<link rel="canonical" href="https://dean.id/badge">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #111113;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    padding: 24px 16px;
  }
  .sub {
    font-size: 12.5px;
    color: #8a8a93;
    text-align: center;
    max-width: 360px;
    line-height: 1.6;
  }
  .stage {
    padding: 34px 56px;
    border-radius: 14px;
    border: 1px solid #26262a;
    background: #1a1a1e;
    cursor: pointer;
    transition: background .25s;
  }
  .stage.l { background: #e9e6df; }
  .stage:hover { border-color: #4a4a52; }
  .row { display: flex; gap: 6px; }
  .row span { font-size: 11.5px; color: #8a8a93; width: 72px; text-align: right; margin-right: 6px; align-self: center; }
  .row button {
    font-family: ui-monospace, Menlo, Consolas, monospace;
    font-size: 12px;
    color: #8a8a93;
    background: none;
    border: 1px solid #26262a;
    border-radius: 20px;
    padding: 5px 13px;
    cursor: pointer;
  }
  .row button.on { color: #fafafa; border-color: #28c840; }
  .hint { font-size: 12.5px; color: #8a8a93; min-height: 18px; text-align: center; }
  .hint a { color: #b8b8c0; }
  .api { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12.5px; color: #b8b8c0; background: #1a1a1e; border: 1px solid #26262a; border-radius: 8px; padding: 8px 13px; max-width: 340px; word-break: break-all; }
  .api .m { color: #5DCAA5; }
  @media (max-width: 480px) {
    .row { flex-wrap: wrap; justify-content: center; }
    .row span { width: 100%; text-align: center; margin: 0 0 2px; }
    .stage { padding: 28px 38px; }
  }
</style>
</head>
<body>
  <main style="display: contents;">
  <p class="sub">the stamp goes in the footer of sites I&rsquo;ve built, fixed, or grown. it links back here.</p>
  <div class="stage" id="stage" onclick="cp()" title="click to copy embed code">
    <img id="pv" src="/badge.svg" alt="dean.id stamp preview" width="92" height="26">
  </div>
  <div class="api"><span class="m">GET</span> <span id="apiurl">https://dean.id/badge.svg</span></div>
  <div class="row"><span>background</span><button data-k="theme" data-v="dark" class="on">dark</button><button data-k="theme" data-v="light">light</button><button data-k="theme" data-v="transparent-dark">clear &middot; light text</button><button data-k="theme" data-v="transparent">clear &middot; dark text</button></div>
  <div class="row"><span>cursor</span><button data-k="cursor" data-v="block" class="on">block</button><button data-k="cursor" data-v="underscore">_</button></div>
  <div class="row"><span>blink</span><button data-k="blink" data-v="1" class="on">on</button><button data-k="blink" data-v="0">off</button></div>
  <p class="hint" id="hint">click the stamp to copy its embed code &middot; <a href="/">dean.id</a></p>
  </main>
<script>
  var s = { theme: 'dark', cursor: 'block', blink: '1' };
  function qs() {
    var p = [];
    if (s.theme !== 'dark') p.push('theme=' + s.theme);
    if (s.cursor !== 'block') p.push('cursor=' + s.cursor);
    if (s.blink !== '1') p.push('blink=0');
    return p.length ? '?' + p.join('&') : '';
  }
  function update() {
    document.getElementById('pv').src = '/badge.svg' + qs();
    document.getElementById('apiurl').textContent = 'https://dean.id/badge.svg' + qs();
    var st = document.getElementById('stage');
    st.className = 'stage' + ((s.theme === 'light' || s.theme === 'transparent') ? ' l' : '');
  }
  document.querySelectorAll('.row button').forEach(function(b) {
    b.onclick = function() {
      s[b.dataset.k] = b.dataset.v;
      document.querySelectorAll('[data-k="' + b.dataset.k + '"]').forEach(function(x){ x.className = ''; });
      b.className = 'on';
      update();
    };
  });
  function cp() {
    var snippet = '<a href="https://dean.id" title="site by dean.id"><img src="https://dean.id/badge.svg' + qs() + '" alt="site by dean.id" width="92" height="26" loading="lazy"></a>';
    navigator.clipboard.writeText(snippet).then(function(){
      document.getElementById('hint').innerHTML = 'copied. paste it in your footer &middot; <a href="/">dean.id</a>';
    });
  }
  update();
</script>
</body>
</html>`;

const SEC = {
  "strict-transport-security": "max-age=63072000; includeSubDomains",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "referrer-policy": "no-referrer",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "cross-origin-opener-policy": "same-origin",
  "cross-origin-resource-policy": "cross-origin",
  "content-security-policy": "default-src 'none'; script-src 'unsafe-inline' https://static.cloudflareinsights.com; connect-src 'self' https://cloudflareinsights.com; style-src 'unsafe-inline'; img-src 'self' data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'"
};

function respond(body, status, headers) {
  return new Response(body, { status, headers: { ...SEC, ...headers } });
}

const STREET_API_BASE = "https://street.co.uk/open-api/v1";

// Read-only helper: calls the Street Open API with the server-side bearer token.
// The token lives only in env (.dev.vars locally / wrangler secret in prod) — never in the repo.
async function streetGet(env, path) {
  const token = env && env.STREET_API_TOKEN;
  if (!token) return { ok: false, status: 0, error: "STREET_API_TOKEN not set" };
  const res = await fetch(STREET_API_BASE + path, {
    headers: { "Authorization": "Bearer " + token, "Accept": "application/vnd.api+json", "User-Agent": "dean.id-worker/1.0 (+https://dean.id)" }
  });
  let body = null;
  try { body = await res.json(); } catch (_) { body = null; }
  return { ok: res.ok, status: res.status, body };
}

// Write helper: POST to the Street Open API (used for website lead capture → enquiries).
async function streetPost(env, path, payload) {
  const token = env && env.STREET_API_TOKEN;
  if (!token) return { ok: false, status: 0, error: "STREET_API_TOKEN not set" };
  const res = await fetch(STREET_API_BASE + path, {
    method: "POST",
    headers: { "Authorization": "Bearer " + token, "Content-Type": "application/vnd.api+json", "Accept": "application/vnd.api+json", "User-Agent": "dean.id-worker/1.0 (+https://dean.id)" },
    body: JSON.stringify(payload)
  });
  let body = null;
  try { body = await res.json(); } catch (_) { body = null; }
  return { ok: res.ok, status: res.status, body };
}

// --- Live listings feed (Street Open API) --------------------------------
const ON_SALE = new Set(["For Sale", "Under Offer", "Sold STC"]);
const ON_LET = new Set(["To Let", "Let Agreed"]);

async function collectInstructions(env, ep, priceKey, kind, onset, pages) {
  const found = new Map();
  for (let pn = 1; pn <= pages; pn++) {
    let r;
    try { r = await streetGet(env, ep + "?include=property&sort=-instructed_at&page%5Bnumber%5D=" + pn + "&page%5Bsize%5D=100"); }
    catch (_) { continue; }
    if (!r || !r.ok || !r.body) continue;
    const props = {};
    for (const inc of (r.body.included || [])) {
      if (inc.type === "property") props[inc.id] = inc.attributes || {};
    }
    for (const d of (r.body.data || [])) {
      const a = d.attributes || {};
      if (a.revoked_at || a.deleted_at) continue;
      const rel = d.relationships && d.relationships.property && d.relationships.property.data;
      const pid = rel && rel.id;
      const p = (pid && props[pid]) || {};
      if (pid && onset.has(p.status) && !found.has(pid)) {
        found.set(pid, {
          id: pid, kind: kind, status: p.status, price: a[priceKey],
          address: (p.address && p.address.single_line) || p.inline_address || null,
          town: (p.address && p.address.town) || null,
          postcode: (p.address && p.address.postcode) || null,
          beds: p.bedrooms, baths: p.bathrooms, type: p.property_type,
          style: p.property_style || null
        });
      }
    }
  }
  return [...found.values()];
}

async function attachImages(env, listings) {
  for (const L of listings) {
    try {
      const r = await streetGet(env, "/properties/" + L.id + "?include=media");
      let imgs = ((r && r.body && r.body.included) || [])
        .filter((i) => i.type === "media").map((i) => i.attributes || {})
        .filter((m) => String(m.media_type || "").toLowerCase() === "image" && m.include_in_listing && !m.deleted_at);
      imgs.sort((x, y) =>
        ((x.is_featured ? 0 : 1) - (y.is_featured ? 0 : 1)) ||
        ((x.feature_index == null ? 999 : x.feature_index) - (y.feature_index == null ? 999 : y.feature_index)));
      L.image = imgs.length ? imgs[0].url : null;
    } catch (_) { L.image = null; }
  }
}

async function fetchStreetListings(env) {
  const sale = await collectInstructions(env, "/sales-instructions", "marketing_price", "sale", ON_SALE, 2);
  const lett = await collectInstructions(env, "/lettings-instructions", "marketing_price_pcm", "let", ON_LET, 2);
  let all = [...sale, ...lett].slice(0, 9);
  await attachImages(env, all);
  return all;
}

// Refresh job: pull current listings from Street and store the JSON in KV.
async function refreshListings(env) {
  if (!env || !env.STREET_API_TOKEN || !env.LISTINGS) return 0;
  const listings = await fetchStreetListings(env);
  await env.LISTINGS.put("current", JSON.stringify({
    generated_at: new Date().toISOString(), count: listings.length, listings
  }), { expirationTtl: 172800 });
  return listings.length;
}

// Refresh job: keep the D1 search database in sync with Street.
// Pulls the current on-market set, upserts prices/status, drops anything no
// longer listed, and backfills photos for new listings. The seed is only the
// initial fill; this keeps it current automatically.
async function refreshD1(env) {
  if (!env || !env.STREET_API_TOKEN || !env.gr_estates) return 0;
  const sale = await collectInstructions(env, "/sales-instructions", "marketing_price", "sale", ON_SALE, 8);
  const lett = await collectInstructions(env, "/lettings-instructions", "marketing_price_pcm", "let", ON_LET, 5);
  const all = [...sale, ...lett];
  if (!all.length) return 0;
  const db = env.gr_estates;
  const ups = all.map((L) => {
    const pr = (L.price == null || isNaN(Number(L.price))) ? null : Math.round(Number(L.price));
    return db.prepare(
      "INSERT INTO listings (id,kind,status,price,address,town,postcode,beds,baths,type,style,updated_at) " +
      "VALUES (?,?,?,?,?,?,?,?,?,?,?,datetime('now')) " +
      "ON CONFLICT(id) DO UPDATE SET kind=excluded.kind,status=excluded.status,price=excluded.price,address=excluded.address,town=excluded.town,postcode=excluded.postcode,beds=excluded.beds,baths=excluded.baths,type=excluded.type,style=excluded.style,updated_at=datetime('now')"
    ).bind(L.id, L.kind, L.status || null, pr, L.address || null, L.town || null, L.postcode || null, L.beds || null, L.baths || null, L.type || null, L.style || null);
  });
  for (let i = 0; i < ups.length; i += 40) { try { await db.batch(ups.slice(i, i + 40)); } catch (e) {} }
  // Drop anything no longer on-market — only when the scan looks complete,
  // so a partial/failed scan can never wrongly wipe live listings.
  try {
    const cur = await db.prepare("SELECT COUNT(*) AS n FROM listings").first();
    const curN = (cur && cur.n) || 0;
    if (all.length >= 100 && all.length >= curN * 0.7) {
      const ph = all.map(() => "?").join(",");
      await db.prepare("DELETE FROM listings WHERE id NOT IN (" + ph + ")").bind(...all.map((L) => L.id)).run();
    }
  } catch (e) {}
  // Backfill photos for new listings (cheap once seeded)
  try {
    const miss = await db.prepare("SELECT id FROM listings WHERE image IS NULL OR image = '' LIMIT 25").all();
    const rows = (miss && miss.results) || [];
    if (rows.length) {
      await attachImages(env, rows);
      for (const row of rows) {
        if (row.image) { try { await db.prepare("UPDATE listings SET image = ? WHERE id = ?").bind(row.image, row.id).run(); } catch (e) {} }
      }
    }
  } catch (e) {}
  try { if (env.LISTINGS) { await env.LISTINGS.put("sync:listings:at", new Date().toISOString()); await env.LISTINGS.put("sync:listings:delta", String(all.length)); } } catch (_) {}
  return all.length;
}

// --- Error rendering -------------------------------------------------------
// One renderer for every status code. Browsers get the dean.id "API window"
// (same look + typed JSON + human toggle as the homepage); curl / API clients
// get a real JSON error body. The medium is the message, even when it's a 404.
const REASON = {
  400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found",
  410: "Gone", 418: "I'm a teapot", 429: "Too Many Requests",
  500: "Internal Server Error", 502: "Bad Gateway", 503: "Service Unavailable"
};

const ERRORS = {
  400: { slug: "bad_request",        hint: "check the syntax and try again",          comment: "garbage in, 400 out",            human: "I couldn't make sense of that request.",                                   msg: (r) => `couldn't parse the request to ${r}` },
  401: { slug: "unauthorized",       hint: "though there's nothing here to log into", comment: null,                             human: "That needs a login — but there's nothing here to log into.",            msg: (r) => `authentication required for ${r}` },
  403: { slug: "forbidden",          hint: "that path isn't yours to open",           comment: null,                             human: "That path exists, but it's not one you're allowed to open.",                msg: (r) => `you can see the door, not the room` },
  404: { slug: "not_found",          hint: "the api lives at GET /v1/me",             comment: "you've reached the void. nicely done.", human: "There's nothing at that address. It's a dead end.",                  msg: (r) => `no route matches ${r}` },
  410: { slug: "gone",               hint: "try GET /v1/me instead",                  comment: null,                             human: "That used to be here, but it's been removed for good.",                     msg: (r) => `${r} used to exist. it doesn't anymore` },
  418: { slug: "im_a_teapot",        hint: "i'm not brewing coffee for you",          comment: "RFC 2324 — yes, it's real", human: "I'm a teapot. I can't brew coffee. (It's a real status code — RFC 2324.)", msg: (r) => `i'm a teapot, short and stout` },
  429: { slug: "too_many_requests",  hint: "retry after a coffee",                    comment: null,                             human: "You're sending requests faster than I can answer. Give it a second.",       msg: (r) => `slow down — more requests than i can think about` },
  500: { slug: "internal_error",     hint: "i've probably already been pinged about it", comment: "this is embarrassing",         human: "Something broke on my side, not yours. Sorry about that.",                  msg: (r) => `something broke on my end, not yours` },
  502: { slug: "bad_gateway",        hint: "try again in a moment",                   comment: null,                             human: "I asked another service and got nonsense back. Try again shortly.",         msg: (r) => `the upstream gave me nonsense` },
  503: { slug: "service_unavailable",hint: "i'm tinkering. check back soon",          comment: null,                             human: "I'm doing a bit of maintenance. Back soon.",                               msg: (r) => `down for maintenance, back shortly` }
};

function errorPage(code, method, path) {
  const e = ERRORS[code] || ERRORS[404];
  const reason = REASON[code] || "Error";
  const route = method + " " + path;
  const routeHtml = esc(route);
  const numClass = code === 418 ? "np" : (code >= 500 ? "n5" : "n4");
  const pillClass = code === 418 ? "teapot" : (code >= 500 ? "e5" : "e4");

  const lines = [];
  lines.push('<span class="p">{</span>');
  lines.push('  <span class="k">"error"</span>: <span class="s">"' + e.slug + '"</span>,');
  lines.push('  <span class="k">"status"</span>: <span class="' + numClass + '">' + code + '</span>,');
  lines.push('  <span class="k">"message"</span>: <span class="s">"' + esc(e.msg(route)) + '"</span>,');
  lines.push('  <span class="k">"hint"</span>: <span class="s">"' + esc(e.hint) + '"</span>,');
  lines.push('  <span class="k">"docs"</span>: <span class="s">"https://dean.id/v1/me"</span>' + (e.comment ? ',' : ''));
  if (e.comment) lines.push('  <span class="k">"_comment"</span>: <span class="s">"' + esc(e.comment) + '"</span>');
  lines.push('<span class="p">}</span>');

  const human = [
    'You asked for <span class="s">' + routeHtml + '</span>.',
    esc(e.human),
    'The API is at <a href="/v1/me" tabindex="-1">dean.id/v1/me</a> &middot; or head <a href="/" tabindex="-1">home</a>.'
  ];

  const jl = JSON.stringify(lines).replace(/</g, "\\u003c");
  const hl = JSON.stringify(human).replace(/</g, "\\u003c");
  const urlTxt = JSON.stringify("https://dean.id" + path).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${code} · dean.id</title>
<meta name="description" content="${code} ${reason} — dean.id is a real API. Try GET /v1/me.">
<meta name="theme-color" content="#111113">
<meta name="robots" content="noindex">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><rect x='30' y='30' width='18' height='40' fill='%2328c840'/></svg>">
<style>${STYLE}
  .badge200.e4 { background: #3a1518; color: #ff6b5e; }
  .badge200.e5 { background: #3a2a12; color: #f0a13b; }
  .badge200.teapot { background: #241d3a; color: #b9a7ff; }
  .n4 { color: #ff6b5e; }
  .n5 { color: #f0a13b; }
  .np { color: #b9a7ff; }
</style>
</head>
<body>
  <h1 class="sr">dean.id — ${code} ${reason}</h1>
  <main style="display: contents;">
  <div class="win" role="img" aria-label="HTTP ${code} ${reason}. Shown as an API error response; a human-readable toggle follows.">
    <div class="bar">
      <span class="method" id="m">${esc(method)}</span>
      <span class="url" id="u">https://dean.id${esc(path)}</span>
      <span class="badge200 ${pillClass}" id="badge">${code} ${reason}</span>
    </div>
    <div id="out" aria-hidden="true"></div>
  </div>
  <a href="#human" id="mode" class="toggle"><span class="dot"></span>not a robot? read this in plain english</a>
  <p class="foot">
    <a class="stamp" href="https://dean.id"><img src="/badge.svg?theme=transparent-dark" alt="dean.id" width="92" height="26" style="display:block"></a>
    <span class="get"><span style="font-family:ui-monospace,Menlo,monospace">curl dean.id/v1/me</span> &nbsp;&middot;&nbsp; <a href="/">home</a></span>
  </p>
  </main>
<script>
  var jsonLines = ${jl};
  var humanLines = ${hl};
  var METHOD = ${JSON.stringify(method)};
  var URLTXT = ${urlTxt};
  var out = document.getElementById('out');
  var modeLink = document.getElementById('mode');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer = null;
  var mode = 'machine';
  function render(arr, n, cur) {
    var h = '';
    for (var k = 0; k < n; k++) {
      h += '<div>' + arr[k] + (cur && k === n - 1 ? '<span class="cursor"></span>' : '') + '</div>';
    }
    return h;
  }
  function typeSet(arr, instant) {
    if (timer) { clearTimeout(timer); timer = null; }
    var i = instant ? arr.length : 0;
    function step() {
      if (i < arr.length) {
        out.innerHTML = render(arr, i + 1, true);
        i++;
        timer = setTimeout(step, 140);
      } else {
        out.innerHTML = render(arr, arr.length, false);
        document.getElementById('badge').classList.add('show');
      }
    }
    step();
  }
  function setMode(m, instant) {
    mode = m;
    var human = m === 'human';
    out.className = human ? 'human' : '';
    document.getElementById('m').textContent = human ? '${code}' : METHOD;
    document.getElementById('u').textContent = human ? 'what happened, in plain english' : URLTXT;
    modeLink.innerHTML = human ? 'see the techie version' : '<span class="dot"></span>not a robot? read this in plain english';
    modeLink.setAttribute('href', human ? '#' : '#human');
    typeSet(human ? humanLines : jsonLines, instant || reduced);
  }
  modeLink.addEventListener('click', function (e) {
    e.preventDefault();
    var next = mode === 'machine' ? 'human' : 'machine';
    if (history.replaceState) { history.replaceState(null, '', next === 'human' ? '#human' : location.pathname); }
    setMode(next, false);
  });
  if (location.hash === '#human') {
    setMode('human', true);
  } else {
    timer = setTimeout(function () { typeSet(jsonLines, reduced); }, 350);
  }
</script>
</body>
</html>`;
}

function wantsJSON(request, path) {
  if (path.startsWith("/v1/") || path.startsWith("/api/")) return true;
  const accept = request.headers.get("accept") || "";
  if (accept.includes("application/json")) return true;
  if (!accept.includes("text/html")) return true; // curl, fetch, most non-browsers
  return false;
}

function errorJSON(code, method, path) {
  const e = ERRORS[code] || ERRORS[404];
  const body = { error: e.slug, status: code, message: e.msg(method + " " + path) };
  if (e.hint) body.hint = e.hint;
  body.docs = "https://dean.id/v1/me";
  return JSON.stringify(body, null, 2) + "\n";
}

function errorResponse(request, url, code) {
  const method = request.method === "HEAD" ? "GET" : (request.method || "GET");
  const path = url.pathname.replace(/\/+$/, "") || "/";
  if (wantsJSON(request, path)) {
    return respond(errorJSON(code, method, path), code, {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "no-store"
    });
  }
  return respond(errorPage(code, method, path), code, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store"
  });
}


// ---- "Ask Georgina" AI assistant (Cloudflare Workers AI) -------------------
const ASK_MODEL = "claude-opus-4-8"; // swappable anytime: "claude-sonnet-4-6" or "claude-haiku-4-5-20251001"

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise(function (_, rej) { setTimeout(function () { rej(new Error("timeout")); }, ms || 22000); })
  ]);
}

// Call Anthropic's Messages API (Claude).
async function claudeCall(env, system, messages, tools, maxTokens, model) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: model || ASK_MODEL,
      max_tokens: maxTokens || 500,
      system: system,
      messages: messages,
      tools: (tools && tools.length) ? tools : undefined
    })
  });
  if (!r.ok) { const t = await r.text().catch(function () { return ""; }); throw new Error("anthropic_" + r.status + "_" + t.slice(0, 180)); }
  return await r.json();
}

function claudeText(resp) {
  return ((resp && resp.content) || []).filter(function (b) { return b.type === "text"; }).map(function (b) { return b.text; }).join("\n").trim();
}

// Replace long dashes (Georgina must never use them).
function deDash(s) { return String(s == null ? "" : s).replace(/\s*[—–]\s*/g, ", "); }

// Stream a Claude response (SSE). Calls onText for each text delta; collects any tool call.
async function streamClaude(env, system, messages, tools, model, onText) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: model || ASK_MODEL, max_tokens: 500, system: system, messages: messages, tools: (tools && tools.length) ? tools : undefined, stream: true })
  });
  if (!resp.ok || !resp.body) { let t = ""; try { t = await resp.text(); } catch (_) {} throw new Error("anthropic_" + resp.status + "_" + String(t).slice(0, 160)); }
  const reader = resp.body.getReader();
  const dec = new TextDecoder();
  let buf = "", toolName = null, toolUseId = null, toolJson = "", stoppedForTool = false;
  for (;;) {
    const r = await reader.read();
    if (r.done) break;
    buf += dec.decode(r.value, { stream: true });
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl); buf = buf.slice(nl + 1);
      if (line.indexOf("data:") !== 0) continue;
      const data = line.slice(5).trim();
      if (!data || data === "[DONE]") continue;
      let ev; try { ev = JSON.parse(data); } catch (_) { continue; }
      if (ev.type === "content_block_start" && ev.content_block && ev.content_block.type === "tool_use") {
        stoppedForTool = true; toolName = ev.content_block.name; toolUseId = ev.content_block.id;
      } else if (ev.type === "content_block_delta" && ev.delta) {
        if (ev.delta.type === "text_delta" && ev.delta.text) onText(ev.delta.text);
        else if (ev.delta.type === "input_json_delta" && ev.delta.partial_json) toolJson += ev.delta.partial_json;
      }
    }
  }
  let toolInput = {};
  if (toolJson) { try { toolInput = JSON.parse(toolJson); } catch (_) {} }
  return { stoppedForTool: stoppedForTool, toolName: toolName, toolUseId: toolUseId, toolInput: toolInput };
}

// Detect when the Anthropic account is out of credits (vs a transient error).
function isCreditError(e) {
  const m = String((e && e.message) || e || "").toLowerCase();
  return m.indexOf("credit balance") >= 0 || m.indexOf("too low") >= 0 || m.indexOf("_402_") >= 0 || m.indexOf("insufficient") >= 0 || (m.indexOf("billing") >= 0 && m.indexOf("anthropic") >= 0);
}

// Record a health incident in KV and (if a webhook is configured) push an alert, deduped to once/hour.
async function aiAlert(env, ctx, detail) {
  try {
    if (!env || !env.LISTINGS) return;
    const now = Date.now();
    let notify = true;
    try { const prev = await env.LISTINGS.get("ai:health"); if (prev) { const p = JSON.parse(prev); if (p && p.status === "credit" && (now - (p.at || 0)) < 3600000) notify = false; } } catch (_) {}
    await env.LISTINGS.put("ai:health", JSON.stringify({ status: "credit", at: now, detail: String(detail || "").slice(0, 200) }));
    if (notify && env.ALERT_WEBHOOK) {
      const p = fetch(env.ALERT_WEBHOOK, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ text: "Ask Georgina: Anthropic credits look exhausted, so the assistant has switched to the free fallback model and the site keeps working. Top up at console.anthropic.com to restore Opus. (" + new Date(now).toISOString() + ")" }) }).catch(function () {});
      if (ctx && ctx.waitUntil) ctx.waitUntil(p);
    }
  } catch (_) {}
}

// Free Cloudflare Workers AI fallback so the assistant keeps working if Claude is unavailable.
// Property search is deterministic (D1 + keyword parse), so only the wording comes from the cheaper model.
async function workersFallback(env, q, history) {
  let properties = [];
  const hf = heuristicFilters(q);
  let note = "";
  if (looksLikeSearch(q, hf)) {
    properties = await searchForAI(env, { kind: hf.kind, location: hf.location, min: hf.min, max: hf.max, beds: hf.beds, type: hf.type, limit: 6 });
    note = properties.length
      ? ("\n\nContext: a live search found " + properties.length + " matching listings, shown to the user as cards below your message. Say you have found some good options below and invite a viewing or a call to 01642 378022. Do not name specific properties or prices in your text.")
      : "\n\nContext: a live search found no exact matches. Say there is no exact match right now, suggest widening the search or a free valuation, and do not name any property.";
  }
  let reply = "";
  if (env && env.AI) {
    try {
      const msgs = [{ role: "system", content: GEORGINA_SYSTEM + note }];
      history.slice(-4).forEach(function (m) { if (m && m.role && m.content) msgs.push({ role: m.role === "assistant" ? "assistant" : "user", content: (m.content + "").slice(0, 500) }); });
      msgs.push({ role: "user", content: q });
      const r = await Promise.race([
        env.AI.run("@cf/meta/llama-3.1-8b-instruct-fp8-fast", { messages: msgs, max_tokens: 350, temperature: 0.5 }),
        new Promise(function (_, rej) { setTimeout(function () { rej(new Error("t")); }, 15000); })
      ]);
      reply = (r && (r.response || r.result || "")) || "";
    } catch (_) {}
  }
  if (!reply || !reply.trim()) {
    reply = properties.length
      ? "I've found a few that could be a good fit, have a look just below. To arrange a viewing, give us a call on 01642 378022."
      : "I can help with buying, renting, selling or letting across Teesside. For anything specific right now, the team will be glad to help on 01642 378022.";
  }
  return { reply: deDash(reply.trim()), properties: properties };
}

const GEORGINA_SYSTEM = `You are "Georgina", the friendly AI assistant for G.R. Estates, an award-winning independent estate and letting agency in Teesside, North East England. You are an AI assistant trained on the agency's knowledge. If anyone asks, say you are G.R. Estates' AI helper, here to help any time, not a real person.

Voice: warm, modern, plain English, no jargon, no nonsense. Keep replies short and helpful (2 to 4 sentences). Sound like a genuine, honest local agent who knows the area. Use UK English. Never use the word "CRM" or long dashes.

What G.R. Estates does: residential sales, lettings, property management, serviced accommodation (managing Airbnb-style short lets for owners), free valuations, mortgage advice, commercial property, property auctions, and removals (G.R. Removals). Independent and local.

Areas covered: Teesside and the wider North East, including Stockton-on-Tees, Middlesbrough, Yarm, Norton, Ingleby Barwick, Thornaby, Billingham, Hartlepool and Redcar.

Contact: phone 01642 378022. Offices in Stockton-on-Tees, Normanby and Redcar. People can book a free, no-obligation valuation on the website.

Rules:
- To find a property for someone, you MUST use the search_properties tool. Only describe properties returned by the tool. Never invent listings, prices, addresses or property details.
- If you do not know something (exact fees, or a property that is not in the results), say so honestly and offer to get the team to help, book a free valuation, or call 01642 378022.
- Never mention a specific property, address or asking price unless it appears in a live search result given to you in this conversation. If you have no live results, do not name any property.
- When you need to look up property, call the search_properties tool immediately. Do NOT write any words before calling the tool (no "let me take a look").
- Keep replies short and to the point, usually 1 to 3 sentences. Do not repeat information you have already given earlier in this conversation.
- Search one area at a time. If an area has nothing, suggest the single nearest alternative rather than listing several.
- Gently guide people to a next step: book a free valuation, arrange a viewing, or give the team a call.
- Be warm and encouraging about helping them buy, sell, rent or let.`;

function toNum(v) {
  if (typeof v === "number" && isFinite(v)) return v;
  if (typeof v === "string") { const n = parseInt(v.replace(/[^0-9]/g, ""), 10); if (!isNaN(n)) return n; }
  return undefined;
}

async function searchForAI(env, f) {
  if (!env || !env.gr_estates) return [];
  const where = [], args = [];
  if (f.kind === "sale" || f.kind === "let") { where.push("kind = ?"); args.push(f.kind); }
  if (Number.isFinite(f.min)) { where.push("price >= ?"); args.push(f.min); }
  if (Number.isFinite(f.max)) { where.push("price <= ?"); args.push(f.max); }
  if (Number.isFinite(f.beds)) { where.push("beds >= ?"); args.push(f.beds); }
  if (f.type) {
    const t = String(f.type).toLowerCase();
    let syn = [t];
    if (t.indexOf("flat") >= 0 || t.indexOf("apartment") >= 0) syn = ["flat", "apartment", "maisonette"];
    else if (t.indexOf("bungalow") >= 0) syn = ["bungalow"];
    else if (t.indexOf("detached") >= 0) syn = ["detached"];
    else if (t.indexOf("semi") >= 0) syn = ["semi"];
    else if (t.indexOf("terrace") >= 0) syn = ["terrace"];
    else if (t.indexOf("house") >= 0) syn = ["house", "terrace", "semi", "detached", "cottage"];
    const parts = syn.map(function () { return "(LOWER(type) LIKE ? OR LOWER(style) LIKE ?)"; });
    where.push("(" + parts.join(" OR ") + ")");
    syn.forEach(function (s) { args.push("%" + s + "%", "%" + s + "%"); });
  }
  if (f.location) { const like = "%" + String(f.location).toLowerCase() + "%"; where.push("(LOWER(address) LIKE ? OR LOWER(town) LIKE ? OR LOWER(postcode) LIKE ?)"); args.push(like, like, like); }
  // Only surface available stock to buyers/renters — hide Sold STC and Let Agreed.
  where.push("(status IS NULL OR (LOWER(status) NOT LIKE '%sold%' AND LOWER(status) NOT LIKE '%let agreed%'))");
  const clause = where.length ? ("WHERE " + where.join(" AND ")) : "";
  const order = f.sort === "price_desc" ? "ORDER BY (price IS NULL OR price = 0), price DESC" : "ORDER BY (price IS NULL OR price = 0), price ASC";
  const limit = Math.min(8, Math.max(1, f.limit || 6));
  try {
    const rs = await env.gr_estates.prepare("SELECT id,kind,status,price,address,town,postcode,beds,baths,type,style,image FROM listings " + clause + " " + order + " LIMIT ?").bind(...args, limit).all();
    return (rs && rs.results) || [];
  } catch (e) { return []; }
}

function moneyFrom(str) {
  const m = String(str || "").match(/£?\s*([\d][\d,.]*)\s*(k|m)?/i);
  if (!m) return undefined;
  let v = parseFloat(m[1].replace(/,/g, ""));
  if (isNaN(v)) return undefined;
  if (m[2] && m[2].toLowerCase() === "k") v *= 1000;
  if (m[2] && m[2].toLowerCase() === "m") v *= 1000000;
  return Math.round(v);
}

// Keyword fallback: extract search filters from raw text if the model's tool call fails.
function heuristicFilters(q) {
  const s = " " + String(q || "").toLowerCase() + " ";
  const f = {};
  if (/\b(rent|renting|to let|letting|tenant|landlord|pcm|per month|monthly|lettings)\b/.test(s)) f.kind = "let";
  if (/\b(buy|buying|for sale|purchase|first[ -]time buyer|mortgage)\b/.test(s)) f.kind = f.kind || "sale";
  const bm = s.match(/(\d+)\s*\+?\s*(?:bed|bedroom)/);
  if (bm) f.beds = parseInt(bm[1], 10);
  const mx = s.match(/(?:under|below|up to|max(?:imum)?|less than|no more than)\s*(£?\s*[\d][\d,.]*\s*[km]?)/);
  if (mx) f.max = moneyFrom(mx[1]);
  const mn = s.match(/(?:over|above|from|at least|min(?:imum)?|more than)\s*(£?\s*[\d][\d,.]*\s*[km]?)/);
  if (mn) f.min = moneyFrom(mn[1]);
  if (f.max === undefined && f.min === undefined) {
    const any = s.match(/(?:around|about|budget(?: of)?|roughly|circa)?\s*(£\s*[\d][\d,.]*\s*[km]?)/);
    if (any) f.max = moneyFrom(any[1]);
  }
  const types = ["detached", "semi-detached", "semi", "terraced", "terrace", "bungalow", "flat", "apartment", "maisonette", "cottage", "house"];
  for (let i = 0; i < types.length; i++) { if (s.indexOf(types[i]) >= 0) { f.type = types[i].replace("semi-detached", "semi").replace("terrace", "terraced").replace("apartment", "flat"); break; } }
  const areas = ["stockton", "middlesbrough", "yarm", "norton", "ingleby barwick", "thornaby", "billingham", "hartlepool", "redcar", "marske", "saltburn", "guisborough", "eaglescliffe", "wynyard", "darlington", "normanby", "acklam", "linthorpe", "nunthorpe", "ingleby"];
  for (let i = 0; i < areas.length; i++) { if (s.indexOf(areas[i]) >= 0) { f.location = areas[i]; break; } }
  if (!f.kind) { const pv = f.max || f.min; if (pv) f.kind = pv >= 10000 ? "sale" : "let"; }
  return f;
}

function looksLikeSearch(q, f) {
  if (f && (f.beds || f.min || f.max || f.location || f.type)) return true;
  return /\b(buy|rent|house|flat|bungalow|apartment|propert|home|for sale|to let|bedroom|under £|budget)\b/i.test(String(q || ""));
}

// Lock the assistant to the G.R. Estates site: requests must come from a dean.id page.
function originOk(request) {
  function hostOk(u) { try { const h = new URL(u).host.toLowerCase(); return h === "dean.id" || h === "www.dean.id" || h.endsWith(".dean.id"); } catch (_) { return false; } }
  const o = request.headers.get("Origin");
  if (o) return hostOk(o);
  const r = request.headers.get("Referer");
  if (r) return hostOk(r);
  return false;
}

// Abuse / cost guard: throttle a single source, and cap total paid spend per day.
async function rateGuard(env, request) {
  if (!env || !env.LISTINGS) return { allow: true, fallback: false };
  const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "anon";
  const now = Date.now();
  // Per-IP throttle: ~10 messages a minute and ~50 every 10 minutes.
  try {
    const mk = "rl:" + ip + ":m" + Math.floor(now / 60000);
    const mc = parseInt((await env.LISTINGS.get(mk)) || "0", 10);
    if (mc >= 10) return { allow: false, fallback: false };
    const tk = "rl:" + ip + ":t" + Math.floor(now / 600000);
    const tc = parseInt((await env.LISTINGS.get(tk)) || "0", 10);
    if (tc >= 50) return { allow: false, fallback: false };
    await env.LISTINGS.put(mk, String(mc + 1), { expirationTtl: 120 });
    await env.LISTINGS.put(tk, String(tc + 1), { expirationTtl: 1200 });
  } catch (_) {}
  // Global daily budget for the paid model. Beyond it, serve the free fallback so spend is capped.
  try {
    const day = new Date(now).toISOString().slice(0, 10);
    const bk = "budget:" + day;
    const used = parseInt((await env.LISTINGS.get(bk)) || "0", 10);
    const cap = parseInt(String(env.DAILY_AI_CAP || "600"), 10) || 600;
    if (used >= cap) return { allow: true, fallback: true };
    await env.LISTINGS.put(bk, String(used + 1), { expirationTtl: 172800 });
  } catch (_) {}
  return { allow: true, fallback: false };
}

async function askGeorgina(request, env, url, ctx) {
  const CORS = { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "https://dean.id", "cache-control": "no-store" };
  if (request.method === "OPTIONS") {
    return respond(null, 204, { "access-control-allow-origin": "https://dean.id", "access-control-allow-methods": "GET, POST, OPTIONS", "access-control-allow-headers": "content-type" });
  }
  let q = "", history = [];
  try {
    if (request.method === "POST") { const b = await request.json(); q = (b.q || b.message || "") + ""; history = Array.isArray(b.history) ? b.history : []; }
    else { q = (url.searchParams.get("q") || "") + ""; }
  } catch (e) {}
  q = q.slice(0, 500).trim();
  if (!q) return respond(JSON.stringify({ ok: false, reply: "Ask me anything about buying, renting, selling or letting in Teesside." }), 200, CORS);
  if (!env || !env.AI) return respond(JSON.stringify({ ok: false, reply: "The assistant is just warming up. Please try again in a moment, or call us on 01642 378022." }), 200, CORS);

  const tools = [{
    name: "search_properties",
    description: "Search G.R. Estates' live property listings in Teesside. Use this ONLY when the user is actually looking for a property to buy or rent, or mentions a budget, bedrooms, an area, or a property type. Do NOT use it for general questions like contacting the team, opening hours, or how things work.",
    input_schema: {
      type: "object",
      properties: {
        kind: { type: "string", enum: ["sale", "let"], description: "'sale' to buy, 'let' to rent" },
        location: { type: "string", description: "Town or area, e.g. Stockton, Middlesbrough, Yarm, Norton" },
        min_price: { type: "number", description: "Minimum price in GBP (monthly if renting)" },
        max_price: { type: "number", description: "Maximum price in GBP (monthly if renting)" },
        min_beds: { type: "number", description: "Minimum number of bedrooms" },
        property_type: { type: "string", description: "e.g. house, flat, bungalow, detached, semi, terraced" }
      },
      required: []
    }
  }];

  const messages = [];
  history.slice(-6).forEach(function (m) {
    if (m && m.role && m.content) messages.push({ role: m.role === "assistant" ? "assistant" : "user", content: (m.content + "").slice(0, 800) });
  });
  messages.push({ role: "user", content: q });

  const pickNum = function (v, fb) { const n = toNum(v); return Number.isFinite(n) ? n : fb; };
  let properties = [], reply = "", dbg = {};

  // Optional model override for A/B testing (e.g. ?model=sonnet). Falls back to default.
  const MODELS = { opus: "claude-opus-4-8", sonnet: "claude-sonnet-4-6", haiku: "claude-haiku-4-5-20251001" };
  const model = MODELS[(url.searchParams.get("model") || "").toLowerCase()] || ASK_MODEL;
  dbg.model = model;

  const streaming = url.searchParams.get("stream") === "1";

  // Locked to the G.R. Estates site — block off-site or scripted calls.
  if (!originOk(request)) {
    const msg = "Sorry, the assistant can only be used on the G.R. Estates website. Please head to the site, or call the team on 01642 378022.";
    if (streaming) return new Response(new TextEncoder().encode(JSON.stringify({ d: msg }) + "\n" + JSON.stringify({ done: true }) + "\n"), { status: 200, headers: Object.assign({}, CORS, { "content-type": "application/x-ndjson; charset=utf-8" }) });
    return respond(JSON.stringify({ ok: false, reply: msg }), 403, CORS);
  }

  // Abuse / cost guard.
  const guard = await rateGuard(env, request);
  if (!guard.allow) {
    const msg = "You're sending messages a little too quickly. Give me a few seconds and try again, or call the team on 01642 378022.";
    if (streaming) {
      const e2 = new TextEncoder();
      return new Response(e2.encode(JSON.stringify({ d: msg }) + "\n" + JSON.stringify({ done: true }) + "\n"), { status: 200, headers: Object.assign({}, CORS, { "content-type": "application/x-ndjson; charset=utf-8" }) });
    }
    return respond(JSON.stringify({ ok: false, reply: msg }), 200, CORS);
  }
  const overBudget = !!guard.fallback;

  // Streaming path — tokens are sent to the browser as they're generated (NDJSON lines).
  if (streaming) {
    const ndHeaders = Object.assign({}, CORS, { "content-type": "application/x-ndjson; charset=utf-8" });
    const enc = new TextEncoder();
    if (!env || !env.ANTHROPIC_API_KEY) {
      return new Response(enc.encode(JSON.stringify({ d: "I'm just being set up and can't chat quite yet. Please call the team on 01642 378022." }) + "\n" + JSON.stringify({ done: true }) + "\n"), { status: 200, headers: ndHeaders });
    }
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const emit = function (o) { try { writer.write(enc.encode(JSON.stringify(o) + "\n")); } catch (_) {} };
    const pump = (async function () {
      let any = false;
      const onText = function (t) { const c = deDash(t); if (c) { any = true; emit({ d: c }); } };
      try {
        if (overBudget) {
          const fb = await workersFallback(env, q, history);
          if (fb.properties && fb.properties.length) emit({ p: fb.properties });
          const parts = fb.reply.split(/(\s+)/);
          for (let i = 0; i < parts.length; i++) { if (parts[i]) emit({ d: parts[i] }); }
          emit({ done: true });
          return;
        }
        const first = await withTimeout(streamClaude(env, GEORGINA_SYSTEM, messages, tools, model, onText), 30000);
        if (first.stoppedForTool && first.toolName === "search_properties") {
          const a = first.toolInput || {};
          const hf = heuristicFilters(q);
          const props = await searchForAI(env, { kind: a.kind || hf.kind, location: a.location || hf.location, min: pickNum(a.min_price, hf.min), max: pickNum(a.max_price, hf.max), beds: pickNum(a.min_beds, hf.beds), type: a.property_type || hf.type, limit: 6 });
          const brief = props.map(function (p) { return { address: p.address, town: p.town, price: p.price, kind: p.kind, beds: p.beds, baths: p.baths, type: p.type, status: p.status }; });
          messages.push({ role: "assistant", content: [{ type: "tool_use", id: first.toolUseId, name: first.toolName, input: a }] });
          messages.push({ role: "user", content: [{ type: "tool_result", tool_use_id: first.toolUseId, content: JSON.stringify({ count: props.length, listings: brief, note: "These are the ONLY real G.R. Estates listings that match. Reply warmly in 2 to 3 sentences. If count is above 0, you may mention one or two by area and price, and tell the user they can see them as cards just below and book a viewing or call 01642 378022. If count is 0, say there is no exact match right now, suggest widening the search or a free valuation, and do not name any property. Never invent a listing." }) }] });
          if (any) emit({ d: "\n\n" });
          emit({ p: props });
          await withTimeout(streamClaude(env, GEORGINA_SYSTEM, messages, tools, model, onText), 30000);
        }
        if (!any) emit({ d: "Sorry, I had a little hiccup there. Please call the team on 01642 378022 or book a free valuation and we'll help you straight away." });
        emit({ done: true });
      } catch (e) {
        if (isCreditError(e)) {
          await aiAlert(env, ctx, String((e && e.message) || e));
          try {
            const fb = await workersFallback(env, q, history);
            if (fb.properties && fb.properties.length) emit({ p: fb.properties });
            const parts = fb.reply.split(/(\s+)/);
            for (let i = 0; i < parts.length; i++) { if (parts[i]) emit({ d: parts[i] }); }
          } catch (_) { emit({ d: "Sorry, I had a little hiccup there. Please call the team on 01642 378022." }); }
        } else {
          emit({ d: "Sorry, I had a little hiccup there. Please call the team on 01642 378022 or book a free valuation and we'll help you straight away." });
        }
        emit({ done: true });
      } finally { try { await writer.close(); } catch (_) {} }
    })();
    if (ctx && ctx.waitUntil) ctx.waitUntil(pump);
    return new Response(stream.readable, { status: 200, headers: ndHeaders });
  }

  // Test hook: force the free fallback path so we can verify graceful downgrade without draining credits.
  if (url.searchParams.get("forcefb") === "1") {
    await aiAlert(env, ctx, "forced test");
    const fb = await workersFallback(env, q, history);
    const out = { ok: true, reply: fb.reply, properties: fb.properties };
    if (url.searchParams.get("debug") === "1") out.debug = { model: "fallback-forced", fallback: "workers-ai" };
    return respond(JSON.stringify(out), 200, CORS);
  }

  // Daily paid-spend cap reached — serve the free fallback for the rest of the day.
  if (overBudget) {
    const fb = await workersFallback(env, q, history);
    const out = { ok: true, reply: fb.reply, properties: fb.properties };
    if (url.searchParams.get("debug") === "1") out.debug = { model: "budget-fallback", fallback: "workers-ai" };
    return respond(JSON.stringify(out), 200, CORS);
  }

  if (!env || !env.ANTHROPIC_API_KEY) {
    return respond(JSON.stringify({ ok: false, reply: "I'm just being set up and can't chat quite yet. Please call the team on 01642 378022 and they'll be glad to help." }), 200, CORS);
  }

  try {
    const r1 = await withTimeout(claudeCall(env, GEORGINA_SYSTEM, messages, tools, 500, model), 22000);
    dbg.stop = r1 && r1.stop_reason;
    const toolUse = ((r1 && r1.content) || []).find(function (b) { return b.type === "tool_use"; });
    if (toolUse && toolUse.name === "search_properties") {
      const a = toolUse.input || {};
      const hf = heuristicFilters(q);
      properties = await searchForAI(env, {
        kind: a.kind || hf.kind, location: a.location || hf.location,
        min: pickNum(a.min_price, hf.min), max: pickNum(a.max_price, hf.max),
        beds: pickNum(a.min_beds, hf.beds), type: a.property_type || hf.type, limit: 6
      });
      dbg.found = properties.length;
      const brief = properties.map(function (p) { return { address: p.address, town: p.town, price: p.price, kind: p.kind, beds: p.beds, baths: p.baths, type: p.type, status: p.status }; });
      messages.push({ role: "assistant", content: r1.content });
      messages.push({ role: "user", content: [{ type: "tool_result", tool_use_id: toolUse.id, content: JSON.stringify({ count: properties.length, listings: brief, note: "These are the ONLY real G.R. Estates listings that match. Reply warmly in 2 to 3 sentences. If count is above 0, you may mention one or two by area and price, and tell the user they can see them as cards just below and book a viewing or call 01642 378022. If count is 0, say there is no exact match right now, suggest widening the search or a free valuation, and do not name any property. Never invent a listing." }) }] });
      const r2 = await withTimeout(claudeCall(env, GEORGINA_SYSTEM, messages, tools, 450, model), 22000);
      reply = claudeText(r2);
    } else {
      reply = claudeText(r1);
    }
  } catch (e) {
    dbg.err = String((e && e.message) || e);
    if (isCreditError(e)) {
      await aiAlert(env, ctx, dbg.err);
      try { const fb = await workersFallback(env, q, history); reply = fb.reply; properties = fb.properties; dbg.fallback = "workers-ai"; } catch (_) {}
    }
  }

  if (!reply || !reply.trim()) {
    reply = "Sorry, I had a little hiccup there. Please call the team on 01642 378022 or book a free valuation and we'll help you straight away.";
  }
  const out = { ok: true, reply: deDash(reply.trim()), properties: properties };
  if (url.searchParams.get("debug") === "1") out.debug = dbg;
  return respond(JSON.stringify(out), 200, CORS);
}

// Property detail page: served as a static asset, but the Worker runs first
// (run_worker_first in wrangler) so we can inject per-property share/preview
// tags (Open Graph / Twitter) for WhatsApp, Facebook, iMessage, Slack, etc.
async function propertyShare(request, env, url) {
  let assetResp;
  try {
    const assetReq = new Request(new URL("/demos/gr-estates/property.html", url.origin), { headers: request.headers });
    assetResp = await env.ASSETS.fetch(assetReq);
  } catch (_) {
    return errorResponse(request, url, 404);
  }
  const id = url.searchParams.get("id") || "";
  if (!id || !env || !env.gr_estates) return assetResp;
  let row = null;
  try {
    row = await env.gr_estates.prepare("SELECT id,kind,price,address,town,beds,baths,type,image FROM listings WHERE id = ?").bind(id).first();
  } catch (_) {}
  if (!row) return assetResp;

  const town = row.town || (String(row.address || "").split(",").slice(-2, -1)[0] || "").trim() || "Teesside";
  const isLet = row.kind === "let";
  const priceStr = row.price ? ("£" + Number(row.price).toLocaleString("en-GB") + (isLet ? " pcm" : "")) : "";
  let core = "";
  if (row.beds) core += row.beds + " bed";
  if (row.type) core += (core ? " " : "") + String(row.type).toLowerCase();
  core = core ? (core.charAt(0).toUpperCase() + core.slice(1)) : "Property";
  const title = core + " in " + town + (priceStr ? (" · " + priceStr) : "") + " · G.R. Estates";
  const descBits = [(isLet ? "To let" : "For sale") + " in " + town];
  if (row.beds) descBits.push(row.beds + " bedroom" + (row.beds > 1 ? "s" : ""));
  if (row.baths) descBits.push(row.baths + " bathroom" + (row.baths > 1 ? "s" : ""));
  if (priceStr) descBits.push(priceStr);
  const desc = descBits.join(" · ") + ". View photos, full details and book a viewing with G.R. Estates.";
  const img = row.image || "https://www.gr-estates.co.uk/static/images/logo-orange.aaf58e97174a.png";
  const canonical = "https://dean.id/demos/gr-estates/property.html?id=" + encodeURIComponent(id);
  const setAttr = (attr, val) => ({ element(el) { el.setAttribute(attr, val); } });

  // Structured data so Google (rich results) and AI assistants understand the listing.
  const st = String(row.status || "").toLowerCase();
  const sold = st.indexOf("sold") >= 0 || st.indexOf("let agreed") >= 0 || st.indexOf("under offer") >= 0;
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": core + " in " + town,
    "description": desc,
    "image": [img],
    "url": canonical,
    "category": isLet ? "Residential property to let" : "Residential property for sale",
    "brand": { "@type": "RealEstateAgent", "name": "G.R. Estates" }
  };
  if (row.price) {
    ld.offers = {
      "@type": "Offer", "url": canonical, "priceCurrency": "GBP", "price": row.price,
      "availability": sold ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      "seller": { "@type": "RealEstateAgent", "name": "G.R. Estates", "telephone": "+441642378022", "areaServed": "Teesside" }
    };
  }
  const ldStr = JSON.stringify(ld).replace(/</g, "\\u003c");

  return new HTMLRewriter()
    .on("title", { element(el) { el.setInnerContent(title); } })
    .on('meta[name="description"]', setAttr("content", desc))
    .on('meta[property="og:title"]', setAttr("content", title))
    .on('meta[property="og:description"]', setAttr("content", desc))
    .on('meta[property="og:image"]', setAttr("content", img))
    .on('meta[property="og:url"]', setAttr("content", canonical))
    .on('meta[name="twitter:title"]', setAttr("content", title))
    .on('meta[name="twitter:description"]', setAttr("content", desc))
    .on('meta[name="twitter:image"]', setAttr("content", img))
    .on('link[rel="canonical"]', setAttr("href", canonical))
    .on('head', { element(el) { el.append('<script type="application/ld+json">' + ldStr + '</script>', { html: true }); } })
    .transform(assetResp);
}

// Pull Instagram + Facebook posts via Meta's Graph API into KV (for the "Follow along" section).
// Needs a META_TOKEN secret (a non-expiring System User token with pages_read_engagement + instagram_basic).
async function refreshSocial(env) {
  if (!env || !env.META_TOKEN || !env.LISTINGS) return;
  const V = "v21.0";
  const g = async function (path, token) {
    const url = "https://graph.facebook.com/" + V + "/" + path + (path.indexOf("?") >= 0 ? "&" : "?") + "access_token=" + encodeURIComponent(token);
    const r = await fetch(url);
    const b = await r.json().catch(function () { return null; });
    if (!r.ok) throw new Error("meta_" + r.status + "_" + JSON.stringify((b && b.error) || b).slice(0, 160));
    return b;
  };
  try {
    const acc = await g("me/accounts?fields=name,id,access_token,instagram_business_account", env.META_TOKEN);
    const pages = (acc && acc.data) || [];
    const page = pages.find(function (p) { return p.instagram_business_account; }) || pages[0];
    if (!page) return;
    const pageToken = page.access_token || env.META_TOKEN;
    const pageId = env.META_PAGE_ID || page.id;
    const igId = env.META_IG_ID || (page.instagram_business_account && page.instagram_business_account.id);
    const posts = [];
    if (igId) {
      try {
        const m = await g(igId + "/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=12", pageToken);
        ((m && m.data) || []).forEach(function (p) {
          const img = (p.media_type === "VIDEO" && p.thumbnail_url) ? p.thumbnail_url : p.media_url;
          if (img) posts.push({ source: "instagram", image: img, permalink: p.permalink || "", caption: p.caption || "", timestamp: p.timestamp || "" });
        });
      } catch (e) {}
    }
    if (pageId) {
      try {
        const f = await g(pageId + "/posts?fields=id,message,full_picture,permalink_url,created_time&limit=12", pageToken);
        ((f && f.data) || []).forEach(function (p) {
          if (p.full_picture) posts.push({ source: "facebook", image: p.full_picture, permalink: p.permalink_url || "", caption: p.message || "", timestamp: p.created_time || "" });
        });
      } catch (e) {}
    }
    posts.sort(function (a, b) { return String(b.timestamp).localeCompare(String(a.timestamp)); });
    const top = posts.slice(0, 12);
    if (top.length) { await env.LISTINGS.put("social:posts", JSON.stringify({ posts: top, generated_at: new Date().toISOString() })); try { await env.LISTINGS.delete("social:err"); } catch (_) {} }
    else { try { await env.LISTINGS.put("social:err", JSON.stringify({ err: "connected but no posts returned (instagram=" + (!!igId) + ", facebook=" + (!!pageId) + ")", at: Date.now() })); } catch (_) {} }
  } catch (e) {
    try { if (env.LISTINGS) await env.LISTINGS.put("social:err", JSON.stringify({ err: String((e && e.message) || e), at: Date.now() })); } catch (_) {}
  }
}

// Live Google reviews aggregated across G.R. Estates branches, via the Places API (New). Cached in KV, refreshed by cron.
const REVIEW_BRANCHES = [
  { name: "Stockton-on-Tees", query: "G.R. Estates Award Winning Estate Agency, 19 Bishop Street, Stockton-on-Tees TS18 1SY", postcode: "TS18 1SY" },
  { name: "Normanby", query: "G.R. Estates Award Winning Estate Agency, 8c High Street, Normanby TS6 0JZ", postcode: "TS6 0JZ" }
];
async function refreshGoogleReviews(env, force) {
  if (!env || !env.GOOGLE_API_KEY || !env.LISTINGS) return;
  try {
    if (!force) {
      const cur = await env.LISTINGS.get("google:reviewsv5");
      if (cur) { try { const c = JSON.parse(cur); if (c && c.generated_at && (Date.now() - new Date(c.generated_at).getTime()) < 12 * 3600000) return; } catch (_) {} }
    }
    const KEY = env.GOOGLE_API_KEY;
    const branches = [];
    let allReviews = [];
    for (const b of REVIEW_BRANCHES) {
      try {
        const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-Goog-Api-Key": KEY,
            "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount,places.formattedAddress,places.googleMapsUri,places.reviews"
          },
          body: JSON.stringify({ textQuery: b.query, maxResultCount: 3, regionCode: "GB", languageCode: "en" })
        });
        const j = await r.json().catch(function () { return null; });
        if (!r.ok) { try { await env.LISTINGS.put("google:err", JSON.stringify({ branch: b.name, status: r.status, err: JSON.stringify((j && j.error) || j).slice(0, 240), at: Date.now() })); } catch (_) {} continue; }
        const places = (j && j.places) || [];
        const place = places.find(function (p) { return (p.formattedAddress || "").toUpperCase().indexOf(b.postcode.toUpperCase()) >= 0; }) || places[0];
        if (!place) continue;
        branches.push({ name: b.name, rating: place.rating || 0, count: place.userRatingCount || 0, url: place.googleMapsUri || "" });
        let reviews = place.reviews;
        if ((!reviews || !reviews.length) && place.id) {
          try {
            const dr = await fetch("https://places.googleapis.com/v1/places/" + encodeURIComponent(place.id), { headers: { "X-Goog-Api-Key": KEY, "X-Goog-FieldMask": "reviews" } });
            const dj = await dr.json().catch(function () { return null; });
            if (dr.ok && dj && dj.reviews) reviews = dj.reviews;
          } catch (e) {}
        }
        (reviews || []).forEach(function (rv) {
          const aa = rv.authorAttribution || {};
          const txt = (rv.text && rv.text.text) || (rv.originalText && rv.originalText.text) || "";
          if (txt) allReviews.push({ branch: b.name, author: aa.displayName || "Google user", photo: aa.photoUri || "", rating: rv.rating || 5, when: rv.relativePublishTimeDescription || "", publishTime: rv.publishTime || "", text: txt });
        });
      } catch (e) { try { await env.LISTINGS.put("google:err", JSON.stringify({ branch: b.name, err: String((e && e.message) || e), at: Date.now() })); } catch (_) {} }
    }
    if (!branches.length) return;
    const total = branches.reduce(function (s, x) { return s + (x.count || 0); }, 0);
    const wsum = branches.reduce(function (s, x) { return s + (x.rating || 0) * (x.count || 0); }, 0);
    const average = total ? Math.round((wsum / total) * 10) / 10 : 0;
    allReviews.sort(function (a, c) { return (c.rating - a.rating) || String(c.publishTime).localeCompare(String(a.publishTime)); });
    let reviews = allReviews.filter(function (rv) { return rv.rating >= 4 && rv.text.length > 40; });
    if (reviews.length < 6) reviews = allReviews;
    // G.R. Removal Services (sister company). It's a service-area business with no indexed
    // address, so Google's Places API won't return it via search (confirmed: 0 results).
    // Figures set manually from its Google listing; bump if the count moves materially.
    const removals = { name: "G.R. Removals", rating: 5.0, count: 23, url: "https://www.google.com/maps?cid=1120685705039092282", reviews: [] };
    let latestReviewAt = null;
    allReviews.forEach(function (rv) { if (rv.publishTime && (!latestReviewAt || rv.publishTime > latestReviewAt)) latestReviewAt = rv.publishTime; });
    await env.LISTINGS.put("google:reviewsv5", JSON.stringify({ ok: true, total: total, average: average, branches: branches, reviews: reviews.slice(0, 12), removals: removals, latest_review_at: latestReviewAt, generated_at: new Date().toISOString() }));
    try { await env.LISTINGS.delete("google:err"); } catch (_) {}
  } catch (e) {
    try { if (env.LISTINGS) await env.LISTINGS.put("google:err", JSON.stringify({ err: String((e && e.message) || e), at: Date.now() })); } catch (_) {}
  }
}

const ENQ_DDL = "CREATE TABLE IF NOT EXISTS enquiries (id TEXT PRIMARY KEY, created_at TEXT, updated_at TEXT, name TEXT, email TEXT, phone TEXT, message TEXT, source TEXT, kind TEXT, property_id TEXT, property TEXT, branch TEXT, raw TEXT)";
function enqKindOf(a) { if (a.request_valuation || a.property_to_sell || a.property_to_let) return "valuation"; if (a.request_viewing) return "viewing"; return "contact"; }
function mEnq(db, d, inc) {
  const a = d.attributes || {}; const rel = d.relationships || {};
  const propId = (rel.property && rel.property.data && rel.property.data.id) || a.property_uuid || null;
  const brId = (rel.branch && rel.branch.data && rel.branch.data.id) || a.branch_uuid || null;
  const prop = (propId && inc[propId]) ? (inc[propId].attributes || {}) : null;
  const br = (brId && inc[brId]) ? (inc[brId].attributes || {}) : null;
  return db.prepare("INSERT INTO enquiries (id,created_at,updated_at,name,email,phone,message,source,kind,property_id,property,branch,raw) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET updated_at=excluded.updated_at,name=excluded.name,email=excluded.email,phone=excluded.phone,message=excluded.message,source=excluded.source,kind=excluded.kind,property_id=excluded.property_id,property=excluded.property,branch=excluded.branch,raw=excluded.raw")
    .bind(d.id, _t(a.created_at), _t(a.updated_at),
      (((a.first_name || "") + " " + (a.last_name || "")).trim()) || null,
      _t(a.email_address), _t(a.telephone_number), (a.message || "").slice(0, 500) || null,
      _t(a.custom_source), enqKindOf(a), propId,
      prop ? _t(prop.public_address || prop.display_address || prop.inline_address || prop.full_address || prop.address) : null,
      br ? _t(br.name || br.branch_name || br.display_name) : null, JSON.stringify(d));
}
// Enquiries run on the same progressive engine: backfill the full history, then top up incrementally.
async function syncEnquiries(env) {
  if (!env || !env.gr_estates) return 0;
  try { await env.gr_estates.prepare("CREATE INDEX IF NOT EXISTS idx_enq_created ON enquiries(created_at)").run(); } catch (e) {}
  return await syncStreetResource(env, "enquiries", "/enquiries", ENQ_DDL, mEnq, { chunk: 16, incr: true });
}

// Pull the column names out of a CREATE TABLE statement, whether they're quoted ("id") or bare (id TEXT).
// Used to detect when a live table is missing columns the current INSERT needs (schema drift).
function ddlColumns(ddl) {
  const m = String(ddl).match(/\(([\s\S]*)\)/);
  if (!m) return [];
  return m[1].split(",").map(function (s) { return s.trim().replace(/^"/, "").split(/["\s(]/)[0]; })
    .filter(function (c) { const u = c.toUpperCase(); return c && u !== "PRIMARY" && u !== "FOREIGN" && u !== "UNIQUE" && u !== "CHECK"; });
}
// The real table name a CREATE statement targets (some sync resources, e.g. sales_applicants, write to a
// shared table like "applicants").
function ddlTable(ddl) { const m = String(ddl).match(/CREATE TABLE IF NOT EXISTS\s+([A-Za-z0-9_]+)/i); return m ? m[1] : null; }
// Self-heal schema drift. CREATE TABLE IF NOT EXISTS will NOT widen a table that already exists with an
// older, narrower column set — e.g. a resource first mirrored generically as (id, created_at, updated_at, raw)
// and later promoted to one column per field. The INSERT then names columns the table doesn't have, every
// batch throws, and the resource stores 0 forever. THAT is exactly why tenancies/landlords/vendors/tenants/
// inspections/offers fetched rows but held none while sales (whose table happened to match) filled to 534/534.
// We read the table's REAL definition from sqlite_master (always available in D1, unlike some PRAGMAs); if it's
// missing any column the current shape needs, we rebuild it and reset its backfill so the whole history
// re-walks in. No data is lost (Street is the source of truth) and a table already in the right shape is never
// touched. enquiries is left alone (huge, known-good, its own column set). Returns true if it rebuilt.
async function _resetBackfill(env, name) {
  try { if (env.LISTINGS) { await env.LISTINGS.put("sync:" + name + ":backfill", JSON.stringify({ done: false, page: 1 })); await env.LISTINGS.delete("sync:" + name + ":cursor"); } } catch (_) {}
}
// Append to a global ring-buffer of the most recent sync errors, so "what's going wrong" lives in one place
// instead of being swallowed. Newest first, capped. Never throws.
async function logSyncError(env, name, stage, detail) {
  if (!env || !env.LISTINGS || !detail) return;
  try {
    const entry = { at: new Date().toISOString(), name: name, stage: stage, detail: String(detail).slice(0, 240) };
    let log = []; try { const v = await env.LISTINGS.get("sync:errlog"); if (v) log = JSON.parse(v) || []; } catch (_) {}
    log.unshift(entry); if (log.length > 60) log = log.slice(0, 60);
    await env.LISTINGS.put("sync:errlog", JSON.stringify(log));
  } catch (_) {}
}
// Non-destructively reconcile a table to the shape this resource needs, and REPORT exactly what it did.
//  - Adds any missing columns with ALTER TABLE ADD COLUMN. Existing rows are kept (the new column is null until
//    that row is next upserted). It NEVER drops a table, so a populated table can no longer be wiped to 0.
//  - If Street holds rows we don't have and the backfill is wrongly flagged complete, re-arms a full walk.
// Returns { action, added:[...], rearmed, error } so the caller can record it in the diagnostics.
async function healTable(env, db, name, ddl, knownLocal) {
  const res = { action: "none", added: [], rearmed: false, error: null };
  if (!db || name === "enquiries") return res;
  const tbl = ddlTable(ddl) || name; // schema ops target the real table (e.g. sales_offers -> offers)
  try {
    const row = await db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name=?").bind(tbl).first();
    if (!row || !row.sql) return res; // doesn't exist yet — it'll be created in the right shape
    const have = {}; ddlColumns(row.sql).forEach(function (c) { have[c] = 1; });
    const missing = ddlColumns(ddl).filter(function (c) { return c && c !== "id" && !have[c]; });
    for (let i = 0; i < missing.length; i++) {
      try { await db.prepare("ALTER TABLE " + tbl + " ADD COLUMN \"" + missing[i] + "\"").run(); res.added.push(missing[i]); }
      catch (e) { res.error = "add " + missing[i] + ": " + String((e && e.message) || e).slice(0, 150); await logSyncError(env, name, "heal", res.error); }
    }
    if (res.added.length) res.action = "add-columns";
    // Re-arm a stalled backfill: Street has rows, we hold fewer, yet the walk is flagged complete (or we just
    // widened the table and want the existing rows re-written with the new columns populated).
    let total = null; try { if (env.LISTINGS) { const t = await env.LISTINGS.get("sync:" + name + ":total"); if (t != null) total = parseInt(t, 10) || 0; } } catch (_) {}
    if (total && total > 0) {
      let local = (knownLocal != null) ? knownLocal : 0;
      if (knownLocal == null) { try { const cnt = await db.prepare("SELECT COUNT(*) AS n FROM " + tbl).first(); local = (cnt && cnt.n) || 0; } catch (_) {} }
      if (local < total) {
        let done = false; try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:" + name + ":backfill"); if (v) { const p = JSON.parse(v); done = !!(p && p.done); } } } catch (_) {}
        if (done || res.added.length) { await _resetBackfill(env, name); res.rearmed = true; res.action = res.added.length ? "add-columns+rearm" : "rearm"; }
      }
    }
    return res;
  } catch (e) { res.error = String((e && e.message) || e).slice(0, 200); res.action = "error"; await logSyncError(env, name, "heal", res.error); return res; }
}
// Sync a Street list resource into a D1 table so the Hub reads a fast, COMPLETE local copy.
// Two phases, tracked per resource in KV:
//   1. backfill — page through the ENTIRE collection a chunk at a time across ticks (no date window),
//      so we end up holding everything, not just a recent slice. Resumes exactly where it left off.
//   2. once backfilled — incremental top-up via filter[updated_from] (opts.incr, the default), which only
//      pulls what changed; or, for endpoints that ignore that filter (viewings/valuations), "recycle":
//      keep re-walking the collection in chunks so new/changed rows are picked up by idempotent upsert.
// Each run is bounded (opts.chunk pages) so we never exhaust the Worker subrequest budget, and writes a
// :diag record (status / rows / mode / backfill progress / error) so nothing can fail silently.
async function syncStreetResource(env, name, path, ddl, mapFn, opts) {
  opts = opts || {};
  const chunk = opts.chunk || 8;
  const incr = opts.incr !== false;
  if (!env || !env.STREET_API_TOKEN || !env.gr_estates) return 0;
  const db = env.gr_estates;
  try { // catch-all so any Cloudflare runtime error (subrequest limit, D1/KV failure) is recorded, not lost
  await migrateSchema(env);
  try { await db.prepare(ddl).run(); } catch (e) { await logSyncError(env, name, "ddl", String((e && e.message) || e).slice(0, 180)); }
  let bf = { done: false, page: 1 };
  try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:" + name + ":backfill"); if (v) { const p = JSON.parse(v); if (p) bf = p; } } } catch (_) {}
  // Non-destructively reconcile the table to the current shape before reading/writing (see healTable). If it
  // re-armed the backfill, treat this run as a fresh full walk.
  const healRes = await healTable(env, db, name, ddl);
  if (healRes.rearmed) bf = { done: false, page: 1 };
  const errs = []; // every error captured this run, with stage + detail (+ row id where relevant)
  if (healRes.error) errs.push({ stage: "heal", detail: healRes.error });
  const mode = !bf.done ? "backfill" : (incr ? "topup" : "recycle");
  const inc = {}, all = [], seen = {};
  let status = 0, err = null, pages = 0, totalPages = null, totalRecords = null, reachedEnd = false;
  function absorb(b) { if (!b) return; const pg = (b.meta && b.meta.pagination) || {}; if (pg.total_pages) totalPages = pg.total_pages; const tr = (pg.total != null) ? pg.total : ((pg.total_count != null) ? pg.total_count : ((pg.count != null) ? pg.count : null)); if (tr != null) totalRecords = tr; (b.included || []).forEach(function (x) { if (x && x.id) inc[x.id] = x; }); (b.data || []).forEach(function (d) { if (d && d.id && !seen[d.id]) { seen[d.id] = 1; all.push(d); } }); }
  let qbase, startPage;
  if (mode === "topup") {
    let since = null; try { if (env.LISTINGS) since = await env.LISTINGS.get("sync:" + name + ":cursor"); } catch (_) {}
    if (!since) since = new Date(Date.now() - 2 * 864e5).toISOString();
    qbase = path + (path.indexOf("?") >= 0 ? "&" : "?") + "filter%5Bupdated_from%5D=" + encodeURIComponent(since) + "&page%5Bsize%5D=100&page%5Bnumber%5D=";
    startPage = 1;
  } else {
    qbase = path + (path.indexOf("?") >= 0 ? "&" : "?") + "page%5Bsize%5D=100&page%5Bnumber%5D=";
    startPage = bf.page || 1;
  }
  const endPage = (mode === "topup") ? (chunk + 6) : (startPage + chunk - 1);
  try {
    // Fetch the first page to learn the pagination, then fetch the rest of this chunk in PARALLEL. Street is
    // ~2s/page; doing them one-at-a-time made each dataset ~9s and starved the rotation's time budget. Fetching
    // the chunk concurrently cuts a dataset to ~2-3s so many can sync per run.
    const firstR = await streetGet(env, qbase + startPage);
    status = firstR.status || status;
    if (!firstR.ok) { err = (firstR.body && firstR.body.errors) ? JSON.stringify(firstR.body.errors).slice(0, 180) : ("HTTP " + (firstR.status || "?")); errs.push({ stage: "fetch", detail: "HTTP " + (firstR.status || "?") + " on page " + startPage + (firstR.body && firstR.body.errors ? " " + JSON.stringify(firstR.body.errors).slice(0, 140) : "") }); }
    else if (!firstR.body) { err = "no body"; errs.push({ stage: "fetch", detail: "empty body on page " + startPage }); }
    else {
      pages++; absorb(firstR.body);
      const tp = totalPages || 1;
      const lastWanted = Math.min(endPage, tp);
      if (startPage >= tp || (firstR.body.data || []).length < 100) { reachedEnd = true; }
      else if (lastWanted > startPage) {
        const qs = [];
        for (let pn = startPage + 1; pn <= lastWanted; pn++) qs.push(streetGet(env, qbase + pn));
        const rs = await Promise.all(qs);
        for (let j = 0; j < rs.length; j++) {
          const r = rs[j]; status = r.status || status;
          if (r.ok && r.body) { pages++; absorb(r.body); if ((r.body.data || []).length < 100) reachedEnd = true; }
          else if (!err) { err = "HTTP " + (r.status || "?"); errs.push({ stage: "fetch", detail: "HTTP " + (r.status || "?") + " on page " + (startPage + 1 + j) }); }
        }
        if (lastWanted >= tp) reachedEnd = true;
      }
    }
  } catch (e) { err = String((e && e.message) || e).slice(0, 180); errs.push({ stage: "fetch", detail: err }); }
  let mapped = 0, stored = 0, writeErr = null;
  if (all.length) {
    // Map each record to a bound statement, keeping the record alongside so we can name the offending row.
    const pairs = [];
    for (let i = 0; i < all.length; i++) {
      const d = all[i];
      try { pairs.push({ id: d && d.id, stmt: mapFn(db, d, inc) }); }
      catch (e) { const m = "map: " + String((e && e.message) || e).slice(0, 150); if (!writeErr) writeErr = m; if (errs.length < 12) errs.push({ stage: "map", id: d && d.id, detail: m }); }
    }
    mapped = pairs.length;
    // Fast path: batch in chunks. If a chunk throws, fall back to running each row alone so we capture the
    // EXACT database error (e.g. "table x has no column named y") AND keep the rows that do succeed.
    for (let i = 0; i < pairs.length; i += 40) {
      const slice = pairs.slice(i, i + 40);
      try { await db.batch(slice.map(function (p) { return p.stmt; })); stored += slice.length; }
      catch (e) {
        for (let j = 0; j < slice.length; j++) {
          try { await slice[j].stmt.run(); stored++; }
          catch (e2) { const m = String((e2 && e2.message) || e2).slice(0, 160); if (!writeErr) writeErr = "write: " + m; if (errs.length < 12) errs.push({ stage: "write", id: slice[j].id, detail: m }); }
        }
      }
    }
  }
  // Snapshot what the table actually looks like now, so the diagnostics can show schema drift directly.
  let actualCols = [];
  try { const sm = await db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name=?").bind(ddlTable(ddl) || name).first(); if (sm && sm.sql) actualCols = ddlColumns(sm.sql); } catch (_) {}
  const expectedCols = ddlColumns(ddl);
  const missingCols = expectedCols.filter(function (c) { return actualCols.indexOf(c) < 0; });
  if (errs.length) { for (let i = 0; i < Math.min(errs.length, 4); i++) await logSyncError(env, name, errs[i].stage, (errs[i].id ? (errs[i].id + ": ") : "") + errs[i].detail); }
  try { if (env.LISTINGS) {
    if (mode === "topup") {
      if (!err) await env.LISTINGS.put("sync:" + name + ":cursor", new Date(Date.now() - 120000).toISOString());
    } else if (mode === "backfill") {
      if (reachedEnd) { bf.done = true; bf.page = 1; if (incr) await env.LISTINGS.put("sync:" + name + ":cursor", new Date(Date.now() - 2 * 864e5).toISOString()); }
      else if (stored > 0) { bf.page = startPage + pages; }
      await env.LISTINGS.put("sync:" + name + ":backfill", JSON.stringify(bf));
    } else { // recycle: keep walking the whole collection, looping back to the start
      bf.page = reachedEnd ? 1 : (startPage + pages);
      await env.LISTINGS.put("sync:" + name + ":backfill", JSON.stringify(bf));
    }
    await env.LISTINGS.put("sync:" + name + ":at", new Date().toISOString());
    await env.LISTINGS.put("sync:" + name + ":delta", String(stored));
    if (totalRecords != null) await env.LISTINGS.put("sync:" + name + ":total", String(totalRecords));
    await env.LISTINGS.put("sync:" + name + ":diag", JSON.stringify({
      at: new Date().toISOString(), mode: mode, status: status,
      fetched: all.length, mapped: mapped, stored: stored, pages: pages, total_pages: totalPages, street_total: totalRecords,
      heal: { action: healRes.action, added: healRes.added, rearmed: healRes.rearmed },
      cols_expected: expectedCols.length, cols_actual: actualCols.length, missing_cols: missingCols,
      errors: errs.slice(0, 12), errcount: errs.length,
      backfill: (bf.done ? "complete" : ("page " + bf.page)), err: err || writeErr
    }));
  } } catch (eKv) { await logSyncError(env, name, "kv", String((eKv && eKv.message) || eKv).slice(0, 180)); }
  return stored;
  } catch (eFatal) { await logSyncError(env, name, "fatal", String((eFatal && eFatal.message) || eFatal).slice(0, 200)); return 0; }
}
function _relId(d, key) { const rel = (d.relationships || {})[key]; return (rel && rel.data && rel.data.id) || null; }
function _branch(d, inc) { const id = _relId(d, "branch") || (d.attributes || {}).branch_uuid; const b = (id && inc[id]) ? (inc[id].attributes || {}) : null; return b ? (b.name || b.branch_name || b.display_name || null) : null; }
// Coerce a Street attribute into something D1 can bind. Street's address fields are structured objects;
// binding a raw object throws and silently kills the whole insert (that's why viewings/valuations/offers
// fetched rows but stored none). Strings/numbers pass through; objects become a readable string or null.
function _t(v) {
  if (v == null) return null;
  const t = typeof v;
  if (t === "string" || t === "number" || t === "boolean") return v;
  if (t === "object") {
    const s = v.display_address || v.full_address || v.public_address || v.inline_address || v.formatted_address || v.formatted || v.summary || v.name || v.label || v.value
      || [v.line_1 || v.line1, v.line_2 || v.line2, v.line_3 || v.line3, v.town || v.city, v.county, v.postcode || v.post_code].filter(Boolean).join(", ");
    return s || null;
  }
  return String(v);
}
// One-time schema migration. Adds the `raw` full-record column everywhere; drops the empty
// viewings/valuations/offers tables so they recreate cleanly from the current schema (killing any column
// drift that was failing inserts); and resets every backfill so the full history re-walks into the new shape.
// Non-destructive from here on. Earlier versions dropped tables and reset backfill cursors on every schema
// bump, which wiped progress and kept the backfill restarting from page 1 — that's why coverage never grew.
// We now only ensure the bespoke tables carry a raw column. Generic tables already hold their full schema from
// their own CREATE statement; nothing is ever dropped or reset, so the backfill just keeps climbing to 100%.
async function migrateSchema(env) {
  if (!env || !env.gr_estates) return;
  try { if (env.LISTINGS && (await env.LISTINGS.get("migrate:schema_v6"))) return; } catch (_) { return; }
  const db = env.gr_estates;
  for (const t of ["enquiries", "applicants", "contacts", "listings", "viewings", "valuations", "offers"]) { try { await db.prepare("ALTER TABLE " + t + " ADD COLUMN raw TEXT").run(); } catch (_) {} }
  try { if (env.LISTINGS) await env.LISTINGS.put("migrate:schema_v6", "1"); } catch (_) {}
}
const VIEW_DDL = "CREATE TABLE IF NOT EXISTS viewings (id TEXT PRIMARY KEY, created_at TEXT, start TEXT, end_at TEXT, viewing_type TEXT, status TEXT, address TEXT, branch TEXT, property_id TEXT, raw TEXT)";
const VAL_DDL = "CREATE TABLE IF NOT EXISTS valuations (id TEXT PRIMARY KEY, created_at TEXT, start TEXT, status TEXT, address TEXT, lead_source TEXT, valuation_type TEXT, branch TEXT, raw TEXT)";
const APP_DDL = "CREATE TABLE IF NOT EXISTS applicants (id TEXT PRIMARY KEY, kind TEXT, created_at TEXT, name TEXT, max_price INTEGER, min_beds INTEGER, lead_rating TEXT, branch TEXT, raw TEXT)";
const OFF_DDL = "CREATE TABLE IF NOT EXISTS offers (id TEXT PRIMARY KEY, kind TEXT, created_at TEXT, address TEXT, amount INTEGER, status TEXT, branch TEXT, raw TEXT)";
const CON_DDL = "CREATE TABLE IF NOT EXISTS contacts (id TEXT PRIMARY KEY, created_at TEXT, name TEXT, email TEXT, phone TEXT, status TEXT, raw TEXT)";
function mView(db, d, inc) { const a = d.attributes || {}; return db.prepare("INSERT INTO viewings (id,created_at,start,end_at,viewing_type,status,address,branch,property_id,raw) VALUES (?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET start=excluded.start,end_at=excluded.end_at,viewing_type=excluded.viewing_type,status=excluded.status,address=excluded.address,branch=excluded.branch,property_id=excluded.property_id,raw=excluded.raw").bind(d.id, _t(a.created_at), _t(a.start), _t(a.end), _t(a.viewing_type), _t(a.status), _t(a.address || a.public_address), _t(_branch(d, inc)), _relId(d, "property") || a.property_uuid || null, JSON.stringify(d)); }
function mVal(db, d, inc) { const a = d.attributes || {}; return db.prepare("INSERT INTO valuations (id,created_at,start,status,address,lead_source,valuation_type,branch,raw) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET start=excluded.start,status=excluded.status,address=excluded.address,lead_source=excluded.lead_source,valuation_type=excluded.valuation_type,branch=excluded.branch,raw=excluded.raw").bind(d.id, _t(a.created_at), _t(a.start), _t(a.status || a.custom_status), _t(a.address), _t(a.lead_source), _t(a.valuation_type), _t(_branch(d, inc)), JSON.stringify(d)); }
function mApp(kind) { return function (db, d, inc) { const a = d.attributes || {}; const req = a.requirements || {}; const beds = (req.bedrooms != null) ? req.bedrooms : ((req.min_bedrooms != null) ? req.min_bedrooms : null); return db.prepare("INSERT INTO applicants (id,kind,created_at,name,max_price,min_beds,lead_rating,branch,raw) VALUES (?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET name=excluded.name,max_price=excluded.max_price,min_beds=excluded.min_beds,lead_rating=excluded.lead_rating,branch=excluded.branch,raw=excluded.raw").bind(d.id, kind, _t(a.created_at), _t(a.name), (req.max_price != null ? Math.round(req.max_price) : null), beds, _t(a.lead_rating), _t(_branch(d, inc)), JSON.stringify(d)); }; }
function mOff(kind) { return function (db, d, inc) { const a = d.attributes || {}; return db.prepare("INSERT INTO offers (id,kind,created_at,address,amount,status,branch,raw) VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET address=excluded.address,amount=excluded.amount,status=excluded.status,branch=excluded.branch,raw=excluded.raw").bind(d.id, kind, _t(a.created_at || a.offer_made_at), _t(a.address), (a.offer_amount != null ? Math.round(a.offer_amount) : (a.rent_amount != null ? Math.round(a.rent_amount) : null)), _t(a.status), _t(_branch(d, inc)), JSON.stringify(d)); }; }
function mCon(db, d) { const a = d.attributes || {}; let em = (a.email_addresses && a.email_addresses[0]) || a.email_address || a.email || null; if (em && typeof em === "object") em = em.email || em.address || null; let ph = (a.telephone_numbers && a.telephone_numbers[0]) || a.telephone_number || null; if (ph && typeof ph === "object") ph = ph.number || ph.telephone_number || null; const nm = a.full_name || (((a.first_name || "") + " " + (a.last_name || "")).trim()) || null; const st = (a.statuses && a.statuses.join) ? a.statuses.join(", ") : (a.status || null); return db.prepare("INSERT INTO contacts (id,created_at,name,email,phone,status,raw) VALUES (?,?,?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET name=excluded.name,email=excluded.email,phone=excluded.phone,status=excluded.status,raw=excluded.raw").bind(d.id, _t(a.created_at), _t(nm), _t(em), _t(ph), _t(st), JSON.stringify(d)); }
// Generic capture: any Street resource we don't have a bespoke table for is mirrored as id + dates + the
// COMPLETE raw record, so every field is held even without dedicated columns. Lets us add any endpoint in one line.
function genDDL(name) { return "CREATE TABLE IF NOT EXISTS " + name + " (id TEXT PRIMARY KEY, created_at TEXT, updated_at TEXT, raw TEXT)"; }
function genMapFor(name) { return function (db, d) { const a = d.attributes || {}; return db.prepare("INSERT INTO " + name + " (id,created_at,updated_at,raw) VALUES (?,?,?,?) ON CONFLICT(id) DO UPDATE SET created_at=excluded.created_at,updated_at=excluded.updated_at,raw=excluded.raw").bind(d.id, _t(a.created_at), _t(a.updated_at), JSON.stringify(d)); }; }
function genRes(name, path) { return { name: name, path: path, ddl: genDDL(name), map: genMapFor(name), opts: { incr: false }, generic: true }; }
// Data-driven capture: give a resource its exact field list (from the Street OpenAPI spec / live API) and we
// build a table with one column per field, plus the COMPLETE raw record. Objects/arrays (address, dates,
// telephone_numbers) are stored as JSON so nothing is lost; column names are quoted so any field name is safe.
function schemaRes(name, path, fields, opts) {
  const cols = ["id"].concat(fields).concat(["raw"]);
  const ddl = "CREATE TABLE IF NOT EXISTS " + name + " (" + cols.map(function (c) { return '"' + c + '"' + (c === "id" ? " TEXT PRIMARY KEY" : ""); }).join(", ") + ")";
  const colList = cols.map(function (c) { return '"' + c + '"'; }).join(",");
  const ph = cols.map(function () { return "?"; }).join(",");
  const upd = cols.filter(function (c) { return c !== "id"; }).map(function (c) { return '"' + c + '"=excluded."' + c + '"'; }).join(",");
  const sql = "INSERT INTO " + name + " (" + colList + ") VALUES (" + ph + ") ON CONFLICT(id) DO UPDATE SET " + upd;
  const map = function (db, d) {
    const a = d.attributes || {};
    const vals = [d.id];
    for (let i = 0; i < fields.length; i++) {
      const v = a[fields[i]];
      if (v == null) vals.push(null);
      else if (typeof v === "boolean") vals.push(v ? 1 : 0);       // D1 only binds null/number/string
      else if (typeof v === "object") vals.push(JSON.stringify(v)); // address, dates, phone lists → JSON
      else vals.push(v);
    }
    vals.push(JSON.stringify(d));
    const stmt = db.prepare(sql);
    return stmt.bind.apply(stmt, vals);
  };
  return { name: name, path: path, ddl: ddl, map: map, opts: opts || { incr: false }, generic: true };
}
// The full set of Street list resources we mirror locally. Order is the rotation order. Field lists are taken
// exactly from the Street Open API (every column matches the API's own attribute names). POST-only endpoints
// (activity, documents, notes, maintenance-requests) and non-list resources are excluded — zero wrong paths.
function extrasReg() {
  return [
    { name: "viewings", path: "/viewings?include=branch,property", ddl: VIEW_DDL, map: mView, opts: { incr: false } },
    { name: "valuations", path: "/valuations?include=branch", ddl: VAL_DDL, map: mVal, opts: { incr: false } },
    { name: "sales_applicants", path: "/sales-applicants", ddl: APP_DDL, map: mApp("sale"), opts: { incr: true } },
    { name: "lettings_applicants", path: "/lettings-applicants", ddl: APP_DDL, map: mApp("let"), opts: { incr: true } },
    { name: "sales_offers", path: "/sales-offers?include=branch", ddl: OFF_DDL, map: mOff("sale"), opts: { incr: false } },
    { name: "lettings_offers", path: "/lettings-offers?include=branch", ddl: OFF_DDL, map: mOff("let"), opts: { incr: false } },
    { name: "contacts", path: "/people", ddl: CON_DDL, map: mCon, opts: { incr: true } },
    schemaRes("tenancies", "/tenancies", ["active", "start_date", "end_date", "original_term_start_date", "status", "tenancy_type", "tenancy_term_type", "rent_amount", "rent_frequency", "deposit_amount", "service_level", "service_level_type", "management_fee", "deleted_at", "created_at", "updated_at"]),
    schemaRes("landlords", "/landlords", ["full_name", "title", "first_name", "last_name", "address", "telephone_numbers", "email_addresses", "marketing_consent", "contact_preferences", "landlord_status", "deleted_at", "created_at", "updated_at"]),
    schemaRes("vendors", "/vendors", ["full_name", "title", "first_name", "last_name", "address", "telephone_numbers", "email_addresses", "marketing_consent", "contact_preferences", "vendor_status", "deleted_at", "created_at", "updated_at"]),
    schemaRes("tenants", "/tenants", ["tenant_type", "full_name", "title", "first_name", "last_name", "address", "telephone_numbers", "email_addresses", "marketing_consent", "contact_preferences", "tenant_status", "deleted_at", "created_at", "updated_at"]),
    schemaRes("inspections", "/inspections", ["due_date", "inspection_date", "status", "deleted_at", "created_at", "updated_at"]),
    schemaRes("sales", "/sales", ["address", "status", "sale_price", "dates", "deleted_at", "created_at", "updated_at"]),
    schemaRes("properties_all", "/properties", ["is_sales", "is_lettings", "is_company_owned", "is_commercial", "is_residential", "is_listed_building", "is_conservation_area", "address", "inline_address", "public_address", "status", "bedrooms", "bathrooms", "receptions", "floor_area", "plot_area", "land_area", "property_type", "property_style", "property_age_bracket", "construction_year", "tenure", "tenure_notes", "lease_expiry_year", "lease_expiry_date", "display_property_style", "work_required", "full_description", "short_description", "location_summary", "full_description_lettings", "short_description_lettings", "location_summary_lettings", "virtual_tour", "property_urls", "heating_system", "council_tax_band", "council_tax_cost", "local_authority", "service_charge"]),
    schemaRes("interested_applicants", "/interested-applicants", ["applicant_type", "deleted_at", "created_at", "updated_at"]),
    schemaRes("property_keys", "/property-keys", ["ident", "description", "status", "deleted_at", "created_at", "updated_at"]),
    schemaRes("maintenance_jobs", "/maintenance-jobs", ["address", "summary", "description", "priority", "status", "reported_by", "reported_at", "completed_at", "closed_at", "cancelled_at", "deleted_at", "created_at", "updated_at"]),
    schemaRes("move_outs", "/move-outs", ["move_out_date", "contract_end_date", "completed_at", "cancelled_at", "cancellation_reason", "created_at", "updated_at"]),
    schemaRes("solicitors", "/solicitors", ["title", "position", "first_name", "last_name", "full_name", "email_addresses", "phone_numbers", "address", "created_at", "updated_at"]),
    schemaRes("todos", "/todos", ["subject_id", "subject_type", "title", "body", "due_date", "deleted_at", "created_at", "updated_at"]),
    schemaRes("todo_types", "/todo-types", ["name", "colour", "deleted_at", "created_at", "updated_at"]),
    schemaRes("follow_ups", "/follow-ups", ["subject_id", "subject_type", "due_date", "note", "deleted_at", "created_at", "updated_at"]),
    schemaRes("invoices", "/invoices", ["status", "amount", "due_date", "paid_at", "deleted_at", "created_at", "updated_at"]),
    schemaRes("photo_and_measures", "/photo-and-measures", ["address", "start", "end", "status", "cancelled_at", "deleted_at", "created_at", "updated_at"]),
    schemaRes("sales_instructions", "/sales-instructions", ["method", "marketing_price_qualifier", "marketing_price", "instructed_at", "revoked_at", "deleted_at", "created_at", "updated_at"]),
    schemaRes("lettings_instructions", "/lettings-instructions", ["method", "marketing_price_pcm", "marketing_price_period", "instructed_at", "revoked_at", "deleted_at", "created_at", "updated_at"]),
    schemaRes("areas", "/areas", ["name", "deleted_at", "created_at", "updated_at"]),
    schemaRes("brands", "/brands", ["name", "primary_colour", "secondary_colour", "tertiary_colour", "about_us", "why_instruct_us", "valuation_url", "deleted_at", "created_at", "updated_at"]),
    schemaRes("companies", "/companies", ["name", "address", "telephone_number", "email_address", "owner", "deleted_at", "created_at", "updated_at"]),
    schemaRes("branches_all", "/branches", ["address", "name", "public_name", "email_address", "telephone", "website", "about_branch_copy", "disclaimer", "matching_links_to_website", "matching_url_pattern", "deleted_at", "created_at", "updated_at"]),
    schemaRes("users_all", "/users", ["first_name", "last_name", "job_title", "telephone_number", "mobile_number", "email_address", "deactivated_at", "deleted_at", "created_at", "updated_at"])
  ];
}
async function syncOneExtra(env, name) { const e = extrasReg().find(function (x) { return x.name === name; }); if (!e) return 0; try { return await syncStreetResource(env, e.name, e.path, e.ddl, e.map, e.opts); } catch (_) { return 0; } }
// Sync up to `count` Street resources per tick. Two improvements over a plain round-robin:
//   1. Heal sweep first — non-destructively reconcile every table's shape (cheap, no Street calls), so a
//      single tick or one "Sync now" corrects all datasets at once instead of waiting for the rotation.
//   2. Coverage-aware order — sync the datasets that are furthest behind first (empty ones before
//      partially-filled), so a dataset stuck at 0 races to 100% instead of waiting hours for its slot.
//      Once everything is complete it falls back to a light round-robin top-up so changes still flow in.
async function syncExtrasRotating(env, count, chunkSize) {
  const reg = extrasReg(); const db = env && env.gr_estates; const n = Math.max(1, count || 1);
  if (!db) return;
  try {
    // Make sure every table exists up front (cheap, idempotent CREATE IF NOT EXISTS, no Street calls) so nothing
    // ever shows "no such table" and an unsynced dataset simply reads as 0 rows, ready to fill.
    for (let i = 0; i < reg.length; i++) { try { await db.prepare(reg[i].ddl).run(); } catch (_) {} }
    // Classify cheaply: local COUNT (D1) + Street total (KV) per table, then sync the datasets that are FURTHEST
    // behind first, so the big laggards (contacts, viewings) finish fastest instead of waiting their turn. No
    // schema reads or ALTERs here — that's what kept the old pre-pass from timing the run out.
    const meta = [];
    for (let i = 0; i < reg.length; i++) {
      const e = reg[i]; const tbl = ddlTable(e.ddl) || e.name; let local = 0, total = null;
      try { const c = await db.prepare("SELECT COUNT(*) AS n FROM " + tbl).first(); local = (c && c.n) || 0; } catch (_) { local = 0; }
      try { if (env.LISTINGS) { const t = await env.LISTINGS.get("sync:" + e.name + ":total"); if (t != null) total = parseInt(t, 10); } } catch (_) {}
      const complete = (total != null && total > 0 && local >= total);
      const gap = (total != null) ? Math.max(0, total - local) : 1000; // unknown total: moderate priority
      meta.push({ e: e, i: i, local: local, complete: complete, gap: gap });
    }
    const todo = meta.filter(function (m) { return !m.complete; }).sort(function (a, b) { return b.gap - a.gap || a.i - b.i; });
    let picked = todo.slice(0, n).map(function (m) { return m.e; });
    if (!picked.length) { // everything complete — light round-robin top-up so changes still flow in
      let idx = 0; try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:extras:rot"); idx = v ? (parseInt(v, 10) || 0) : 0; } } catch (_) {}
      for (let k = 0; k < n; k++) picked.push(reg[(idx + k) % reg.length]);
      try { if (env.LISTINGS) await env.LISTINGS.put("sync:extras:rot", String((idx + n) % reg.length)); } catch (_) {}
    }
    const stillEmpty = meta.filter(function (m) { return m.local === 0; }).length;
    try { if (env.LISTINGS) await env.LISTINGS.put("sync:extras:lastrun", JSON.stringify({ at: new Date().toISOString(), empties: stillEmpty, picked: picked.map(function (p) { return p.name; }) })); } catch (_) {}
    const ov = chunkSize ? { chunk: chunkSize } : null;
    for (let k = 0; k < picked.length; k++) { const e = picked[k]; try { await syncStreetResource(env, e.name, e.path, e.ddl, e.map, ov ? Object.assign({}, e.opts, ov) : e.opts); } catch (ex) { await logSyncError(env, e.name, "run", String((ex && ex.message) || ex).slice(0, 200)); } }
  } catch (eFatal) { await logSyncError(env, "extras-rotate", "fatal", String((eFatal && eFatal.message) || eFatal).slice(0, 200)); }
}
// Map the dataset name the Hub asks for to the resource that fills it (applicants/offers come in two parts).
function extrasForDataset(name) { if (name === "applicants") return ["sales_applicants", "lettings_applicants"]; if (name === "offers") return ["sales_offers", "lettings_offers"]; return [name]; }

export default {
  async scheduled(event, env, ctx) {
    const hourly = !(event && event.cron && event.cron !== "0 * * * *");
    if (hourly) {
      // The hourly tick is a separate invocation with its own subrequest budget: do the heavy
      // property/reviews refreshes here so they never compete with the enquiry + extras sync.
      ctx.waitUntil((async () => {
        await refreshListings(env).catch(() => {});
        await refreshD1(env).catch(() => {});
        await refreshSocial(env).catch(() => {});
        await refreshGoogleReviews(env).catch(() => {});
      })());
      return;
    }
    // Every 15 minutes, but ALTERNATE so enquiries and the extras never share one invocation's budget (that
    // sharing is what was timing the extras sync out). enquiries runs at :00/:30, extras at :15/:45 — each
    // gets a full, clean budget. Both still get a turn twice an hour.
    const min = new Date((event && event.scheduledTime) || Date.now()).getUTCMinutes();
    ctx.waitUntil((async () => {
      if (min % 30 < 15) await syncEnquiries(env).catch(() => {});
      else await syncExtrasRotating(env, 6, 20).catch(() => {});
    })());
  },
  async fetch(request, env, ctx) {
   try {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    // "Ask Georgina" AI assistant — accepts GET (?q=) and POST (JSON) + CORS preflight.
    if (path === "/api/ask") {
      return await askGeorgina(request, env, url, ctx);
    }

    // Health of the AI assistant (records when Anthropic credits run out and we fall back).
    if (path === "/api/ai-status") {
      let h = { status: "ok" };
      if (env && env.LISTINGS) { try { const v = await env.LISTINGS.get("ai:health"); if (v) h = JSON.parse(v); } catch (_) {} }
      const stale = h && h.at ? (Date.now() - h.at > 1800000) : true;
      return respond(JSON.stringify({ ok: true, model: ASK_MODEL, health: h, likely_recovered: (h.status === "credit" && stale) }), 200, { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "no-store" });
    }

    if (!["GET", "HEAD"].includes(request.method) && !path.startsWith("/api/")) {
      return respond("method not allowed\n", 405, {
        "content-type": "text/plain; charset=utf-8",
        "allow": "GET, HEAD"
      });
    }

    if (url.hostname === "www.dean.id") {
      url.hostname = "dean.id";
      url.protocol = "https:";
      return respond(null, 301, { location: url.toString() });
    }

    if (url.protocol === "http:" && path !== "/v1/me" && url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
      url.protocol = "https:";
      return respond(null, 301, { location: url.toString() });
    }

    // Property detail page (Worker runs first here) — inject per-property preview tags.
    if (path === "/demos/gr-estates/property.html") {
      return await propertyShare(request, env, url);
    }

    if (path === "/v1/me") {
      return respond(JSON.stringify(ME, null, 2) + "\n", 200, {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=3600"
      });
    }

    // Gated, read-only Street API connection test.
    // Hidden (404) unless STREET_TEST_KEY is set in env AND matches ?key=...
    // Returns data only when STREET_API_TOKEN is configured, so it stays inert in prod until you opt in.
    if (path === "/api/street/ping") {
      const key = url.searchParams.get("key");
      if (!env || !env.STREET_TEST_KEY || key !== env.STREET_TEST_KEY) {
        return respond("not found\n", 404, { "content-type": "text/plain; charset=utf-8" });
      }
      const r = await streetGet(env, "/branches");
      if (!r.ok) {
        return respond(JSON.stringify({ ok: false, status: r.status, error: r.error || "Street API request failed" }, null, 2) + "\n", 502, {
          "content-type": "application/json; charset=utf-8"
        });
      }
      const data = (r.body && r.body.data) || [];
      const branches = data.slice(0, 10).map((b) => ({
        id: b.id,
        name: (b.attributes && (b.attributes.name || b.attributes.branch_name || b.attributes.title)) || null
      }));
      const total = (r.body && r.body.meta && r.body.meta.pagination && r.body.meta.pagination.total) || data.length;
      return respond(JSON.stringify({ ok: true, connected: true, branch_count: total, branches }, null, 2) + "\n", 200, {
        "content-type": "application/json; charset=utf-8"
      });
    }

    // On-market listings, served fast from KV (refreshed hourly by the scheduled job).
    // Live Google reviews aggregated across branches (cached in KV, refreshed daily by cron).
    if (path === "/api/reviews") {
      let data = null;
      if (env && env.LISTINGS) { try { const v = await env.LISTINGS.get("google:reviewsv5"); if (v) data = JSON.parse(v); } catch (_) {} }
      if ((!data || !data.reviews || !data.reviews.length || typeof data.removals === "undefined") && env && env.GOOGLE_API_KEY) {
        try { await refreshGoogleReviews(env, true); const v = await env.LISTINGS.get("google:reviewsv5"); if (v) data = JSON.parse(v); } catch (_) {}
      }
      const out = data || { ok: true, total: 0, average: 0, branches: [], reviews: [] };
      if (url.searchParams.get("debug") === "1") {
        let gerr = null; if (env && env.LISTINGS) { try { const e2 = await env.LISTINGS.get("google:err"); if (e2) gerr = JSON.parse(e2); } catch (_) {} }
        out.debug = { keySet: !!(env && env.GOOGLE_API_KEY), lastError: gerr };
      }
      if (url.searchParams.get("rdebug") === "1" && env && env.GOOGLE_API_KEY) {
        try {
          const rr2 = await fetch("https://places.googleapis.com/v1/places:searchText", { method: "POST", headers: { "content-type": "application/json", "X-Goog-Api-Key": env.GOOGLE_API_KEY, "X-Goog-FieldMask": "places.id,places.displayName,places.location,places.userRatingCount,places.rating,places.formattedAddress" }, body: JSON.stringify({ textQuery: "G.R. Removal Services", maxResultCount: 10, regionCode: "GB", locationRestriction: { rectangle: { low: { latitude: 54.48, longitude: -1.45 }, high: { latitude: 54.68, longitude: -1.02 } } } }) });
          const rj2 = await rr2.json();
          out.rdebug = ((rj2 && rj2.places) || []).map(function (p) { return { name: (p.displayName && p.displayName.text) || "", id: p.id || "", addr: p.formattedAddress || "", lat: p.location && p.location.latitude, lng: p.location && p.location.longitude, count: p.userRatingCount || 0, rating: p.rating || 0 }; });
        } catch (e) { out.rdebug = String(e); }
      }
      return respond(JSON.stringify(out), 200, { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "public, max-age=1800" });
    }

    // Website lead capture -> Street CRM (POST /enquiries). Always stores a KV copy so a lead is never lost.
    if (path === "/api/lead" && request.method === "POST") {
      if (!originOk(request)) return respond(JSON.stringify({ ok: false }), 403, { "content-type": "application/json; charset=utf-8" });
      try {
        const ip = request.headers.get("cf-connecting-ip") || "";
        if (env && env.LISTINGS && ip) {
          const lk = "leadrate:" + ip;
          const lc = parseInt((await env.LISTINGS.get(lk)) || "0", 10);
          if (lc > 12) return respond(JSON.stringify({ ok: true }), 200, { "content-type": "application/json; charset=utf-8" });
          await env.LISTINGS.put(lk, String(lc + 1), { expirationTtl: 600 });
        }
      } catch (_) {}
      let f = {};
      try { f = await request.json(); } catch (_) { f = {}; }
      const email = String(f.email || "").trim().slice(0, 160);
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return respond(JSON.stringify({ ok: false, error: "A valid email is required." }), 400, { "content-type": "application/json; charset=utf-8" });
      }
      const kind = String(f.kind || "contact").toLowerCase();
      const name = String(f.name || "").trim().slice(0, 120);
      const sp = name.split(/\s+/).filter(Boolean);
      const firstName = sp.shift() || null;
      const lastName = sp.length ? sp.join(" ") : null;
      const phone = String(f.phone || "").trim().slice(0, 40) || null;
      const postcode = String(f.postcode || "").trim().slice(0, 8) || null;
      const intent = String(f.intent || "").toLowerCase();
      let message = String(f.message || "").trim();
      const attrs = { email_address: email, custom_source: "website" };
      if (firstName) attrs.first_name = firstName;
      if (lastName) attrs.last_name = lastName;
      if (phone) attrs.telephone_number = phone;
      if (postcode) attrs.postcode = postcode;
      if (kind === "valuation") {
        attrs.request_valuation = true;
        if (intent === "let") attrs.property_to_let = true; else attrs.property_to_sell = true;
        if (!message) message = "Free valuation request via the website.";
      } else if (kind === "viewing") {
        attrs.request_viewing = true;
        if (f.propertyId) attrs.property_uuid = String(f.propertyId).slice(0, 64);
        if (!message) message = "Viewing request via the website.";
      } else {
        if (f.propertyId) attrs.property_uuid = String(f.propertyId).slice(0, 64);
        if (!message) message = "Enquiry via the website.";
      }
      if (f.address) message += "\n\nProperty / address: " + String(f.address).slice(0, 300);
      attrs.message = message.slice(0, 2000);
      const payload = { data: { type: "enquiry", attributes: attrs, relationships: {} } };
      let streetStatus = 0, streetOk = false, streetErr = null;
      try {
        const sr = await streetPost(env, "/enquiries", payload);
        streetStatus = sr.status; streetOk = sr.ok;
        if (!sr.ok) { streetErr = (sr.body && (sr.body.errors || sr.body.error)) || sr.error || null; if (env && env.LISTINGS) { try { await env.LISTINGS.put("lead:err", JSON.stringify({ status: sr.status, body: sr.body, at: Date.now() })); } catch (_) {} } }
      } catch (e) { streetErr = String((e && e.message) || e); if (env && env.LISTINGS) { try { await env.LISTINGS.put("lead:err", JSON.stringify({ err: streetErr, at: Date.now() })); } catch (_) {} } }
      try {
        if (env && env.LISTINGS) {
          const id = "lead:" + Date.now() + ":" + Math.random().toString(36).slice(2, 8);
          await env.LISTINGS.put(id, JSON.stringify({ at: Date.now(), kind: kind, name: name, email: email, phone: phone, postcode: postcode, propertyId: f.propertyId || null, message: attrs.message, streetStatus: streetStatus, streetOk: streetOk }));
        }
      } catch (_) {}
      const lout = { ok: true };
      if (f._debug) { lout.streetStatus = streetStatus; lout.streetOk = streetOk; lout.streetErr = streetErr; }
      return respond(JSON.stringify(lout), 200, { "content-type": "application/json; charset=utf-8" });
    }

    // Admin: list captured website leads (the KV safety-net copies). Locked behind the LEADS_KEY secret.
    if (path === "/api/leads" && request.method === "GET") {
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, { "content-type": "application/json; charset=utf-8" });
      const key = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (key !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, { "content-type": "application/json; charset=utf-8" });
      const leads = [];
      try {
        if (env.LISTINGS) {
          const listed = await env.LISTINGS.list({ prefix: "lead:", limit: 1000 });
          for (const k of (listed.keys || [])) {
            if (k.name === "lead:err") continue;
            try { const v = await env.LISTINGS.get(k.name); if (v) leads.push(JSON.parse(v)); } catch (_) {}
          }
        }
      } catch (_) {}
      leads.sort(function (a, b) { return (b.at || 0) - (a.at || 0); });
      let waitlist = 0, alerts = 0, lastAlertAt = 0;
      try { if (env.LISTINGS) { const wl = await env.LISTINGS.list({ prefix: "waitlist:", limit: 1000 }); waitlist = (wl.keys || []).length; } } catch (_) {}
      try { if (env.LISTINGS) { const al = await env.LISTINGS.list({ prefix: "alert:", limit: 1000 }); alerts = (al.keys || []).length; (al.keys || []).forEach(function (k) { const t = parseInt(String(k.name).split(":")[1], 10); if (t && t > lastAlertAt) lastAlertAt = t; }); } } catch (_) {}
      const lastLeadAt = leads.length ? (leads[0].at || 0) : 0;
      return respond(JSON.stringify({ ok: true, count: leads.length, leads: leads.slice(0, 200), stats: { waitlist: waitlist, alerts: alerts, lastAlertAt: lastAlertAt, lastLeadAt: lastLeadAt } }), 200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
    }

    // Admin: portfolio intelligence for the Hub — live counts + averages from D1. Same key as /api/leads.
    if (path === "/api/hub" && request.method === "GET") {
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, { "content-type": "application/json; charset=utf-8" });
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, { "content-type": "application/json; charset=utf-8" });
      const portfolio = { total: 0, sale: 0, let: 0, avgSale: null, avgLetPcm: null, byTown: [], byType: [] };
      try {
        if (env.gr_estates) {
          const db = env.gr_estates;
          const t = await db.prepare("SELECT COUNT(*) AS total, SUM(CASE WHEN kind='sale' THEN 1 ELSE 0 END) AS sales, SUM(CASE WHEN kind='let' THEN 1 ELSE 0 END) AS lets, AVG(CASE WHEN kind='sale' THEN price END) AS avgSale, AVG(CASE WHEN kind='let' THEN price END) AS avgLet FROM listings").first();
          if (t) { portfolio.total = t.total || 0; portfolio.sale = t.sales || 0; portfolio.let = t.lets || 0; portfolio.avgSale = t.avgSale != null ? Math.round(t.avgSale) : null; portfolio.avgLetPcm = t.avgLet != null ? Math.round(t.avgLet) : null; }
          const tw = await db.prepare("SELECT town, COUNT(*) AS n FROM listings WHERE town IS NOT NULL AND town <> '' GROUP BY town ORDER BY n DESC LIMIT 8").all();
          portfolio.byTown = ((tw && tw.results) || []).map(function (r) { return { town: r.town, n: r.n }; });
          const ty = await db.prepare("SELECT type, COUNT(*) AS n FROM listings WHERE type IS NOT NULL AND type <> '' GROUP BY type ORDER BY n DESC LIMIT 8").all();
          portfolio.byType = ((ty && ty.results) || []).map(function (r) { return { type: r.type, n: r.n }; });
        }
      } catch (_) {}
      let listings_at = null;
      try { if (env.LISTINGS) { const cur = await env.LISTINGS.get("current"); if (cur) { const c = JSON.parse(cur); listings_at = c.generated_at || null; } } } catch (_) {}
      let pipeline = {};
      try {
        const wk = new Date(Date.now() - 7 * 864e5).toISOString();
        const cntq = async function (sql, arg) { try { const r = arg ? await env.gr_estates.prepare(sql).bind(arg).first() : await env.gr_estates.prepare(sql).first(); return (r && r.n) || 0; } catch (_) { return 0; } };
        pipeline.viewings = await cntq("SELECT COUNT(*) AS n FROM viewings");
        pipeline.viewings_week = await cntq("SELECT COUNT(*) AS n FROM viewings WHERE created_at >= ?", wk);
        pipeline.valuations = await cntq("SELECT COUNT(*) AS n FROM valuations");
        pipeline.valuations_week = await cntq("SELECT COUNT(*) AS n FROM valuations WHERE created_at >= ?", wk);
        pipeline.applicants = await cntq("SELECT COUNT(*) AS n FROM applicants");
        pipeline.contacts = await cntq("SELECT COUNT(*) AS n FROM contacts");
      } catch (_) {}
      return respond(JSON.stringify({ ok: true, portfolio: portfolio, listings_at: listings_at, pipeline: pipeline, generated_at: new Date().toISOString() }), 200, { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" });
    }

    // Ask Georgina, inside the Hub — a plain-language copilot over the live business data. Admin-gated.
    if (path === "/api/hub-ask" && request.method === "POST") {
      const J = { "content-type": "application/json; charset=utf-8" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      let b = {}; try { b = await request.json(); } catch (_) {}
      const q = String((b && b.q) || "").trim().slice(0, 400);
      if (!q) return respond(JSON.stringify({ ok: true, answer: "Ask me anything about the business, like how many enquiries this week, which branch is busiest, or what needs your attention." }), 200, J);
      if (!env.ANTHROPIC_API_KEY) return respond(JSON.stringify({ ok: true, answer: "The assistant isn't switched on yet." }), 200, J);
      const data = {};
      try {
        if (env.LISTINGS) {
          const listed = await env.LISTINGS.list({ prefix: "lead:", limit: 1000 });
          let total = 0, today = 0, week = 0, street = 0; const byKind = {};
          const t0 = new Date(); t0.setHours(0, 0, 0, 0); const today0 = t0.getTime(); const week0 = Date.now() - 6048e5;
          for (const k of (listed.keys || [])) {
            if (k.name === "lead:err") continue;
            try { const v = JSON.parse(await env.LISTINGS.get(k.name)); total++; if ((v.at || 0) >= today0) today++; if ((v.at || 0) >= week0) week++; if (v.streetOk) street++; byKind[v.kind || "other"] = (byKind[v.kind || "other"] || 0) + 1; } catch (_) {}
          }
          data.leads = { total: total, today: today, this_week: week, percent_into_street: total ? Math.round(street / total * 100) : 0, by_type: byKind };
          try { const wl = await env.LISTINGS.list({ prefix: "waitlist:", limit: 1000 }); data.waitlist_signups = (wl.keys || []).length; } catch (_) {}
          try { const al = await env.LISTINGS.list({ prefix: "alert:", limit: 1000 }); data.be_first_alerts = (al.keys || []).length; } catch (_) {}
          try { const rv = await env.LISTINGS.get("google:reviewsv5"); if (rv) { const r = JSON.parse(rv); data.reviews = { average: r.average, total: r.total, by_branch: (r.branches || []).map(function (x) { return { name: x.name, rating: x.rating, count: x.count }; }) }; } } catch (_) {}
        }
        if (env.gr_estates) {
          const t = await env.gr_estates.prepare("SELECT COUNT(*) total, SUM(CASE WHEN kind='sale' THEN 1 ELSE 0 END) sales, SUM(CASE WHEN kind='let' THEN 1 ELSE 0 END) lets, AVG(CASE WHEN kind='sale' THEN price END) avgSale, AVG(CASE WHEN kind='let' THEN price END) avgLet FROM listings").first();
          if (t) data.portfolio = { total: t.total, for_sale: t.sales, to_let: t.lets, avg_asking_price: t.avgSale ? Math.round(t.avgSale) : null, avg_rent_pcm: t.avgLet ? Math.round(t.avgLet) : null };
          const tw = await env.gr_estates.prepare("SELECT town, COUNT(*) n FROM listings WHERE town IS NOT NULL AND town<>'' GROUP BY town ORDER BY n DESC LIMIT 8").all();
          data.listings_by_town = ((tw && tw.results) || []).map(function (r) { return { town: r.town, count: r.n }; });
        }
      } catch (_) {}
      const sys = "You are the assistant inside G.R. Estates' private staff Hub. G.R. Estates is an award-winning independent estate and letting agency in Teesside (offices in Stockton, Normanby and Redcar). Answer the staff member's question using ONLY the live business data provided as JSON below. Be brief, warm and specific, and use the real numbers. If the data does not cover the question, say so plainly and suggest where in the Hub they'd find it. Plain text only, no markdown headings, at most a short paragraph or a few short lines. Never use long dashes.";
      const userMsg = "LIVE HUB DATA (JSON):\n" + JSON.stringify(data) + "\n\nStaff question: " + q;
      let answer = "";
      try { const r1 = await claudeCall(env, sys, [{ role: "user", content: userMsg }], null, 350, ASK_MODEL); answer = deDash(claudeText(r1)); } catch (_) { answer = ""; }
      if (!answer) answer = "I couldn't get an answer just now, give me a moment and try again.";
      return respond(JSON.stringify({ ok: true, answer: answer }), 200, J);
    }

    // All enquiries in Street (website, portals, phone) — the real stream, not just our captures. Admin-gated.
    if (path === "/api/enquiries" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      // Fast path: read the synced local copy (D1). The cron keeps it fresh, so this is instant.
      try {
        if (env.gr_estates) {
          const lr = await env.gr_estates.prepare("SELECT id,created_at,name,email,phone,message,source,kind,property_id,property,branch FROM enquiries ORDER BY created_at DESC LIMIT 2000").all();
          const rows = (lr && lr.results) || [];
          if (rows.length) {
            let ltotal = rows.length, syncedAt = null;
            try { const c = await env.gr_estates.prepare("SELECT COUNT(*) AS n FROM enquiries").first(); if (c && c.n != null) ltotal = c.n; } catch (_) {}
            try { if (env.LISTINGS) syncedAt = await env.LISTINGS.get("sync:enquiries:at"); } catch (_) {}
            const out = rows.map(function (x) { return { id: x.id, at: x.created_at, name: x.name, email: x.email, phone: x.phone, message: x.message || "", source: x.source, kind: x.kind, propertyId: x.property_id, property: x.property, branch: x.branch }; });
            return respond(JSON.stringify({ ok: true, source: "local", count: out.length, total: ltotal, synced_at: syncedAt, enquiries: out }), 200, J);
          }
        }
      } catch (_) {}
      // Bootstrap: D1 is empty (not synced yet). Kick off a background sync and serve a live read this once.
      if (ctx && ctx.waitUntil) ctx.waitUntil(syncEnquiries(env).catch(function () {}));
      const since = new Date(Date.now() - 30 * 864e5).toISOString();
      const sinceQ = "filter%5Bcreated_from%5D=" + encodeURIComponent(since) + "&page%5Bsize%5D=100&page%5Bnumber%5D=";
      let all = [], total = null; const inc = {}; const seen = {};
      function absorb(b) { if (!b) return; (b.included || []).forEach(function (x) { if (x && x.id) inc[x.id] = x; }); (b.data || []).forEach(function (d) { if (d && d.id && !seen[d.id]) { seen[d.id] = 1; all.push(d); } }); }
      try {
        const first = await streetGet(env, "/enquiries?" + sinceQ + "1");
        let tp = 1;
        if (first && first.ok && first.body) { absorb(first.body); const pg = (first.body.meta && first.body.meta.pagination) || {}; total = (pg.total != null) ? pg.total : null; tp = pg.total_pages || 1; }
        // Street returns enquiries oldest-first, so the newest are on the LAST pages — grab the last few.
        for (let p = tp; p > tp - 3 && p > 1; p--) { const r = await streetGet(env, "/enquiries?" + sinceQ + p); if (r && r.ok && r.body) absorb(r.body); }
      } catch (_) {}
      function kindOf(a) { if (a.request_valuation || a.property_to_sell || a.property_to_let) return "valuation"; if (a.request_viewing) return "viewing"; return "contact"; }
      const enquiries = all.map(function (d) {
        const a = d.attributes || {};
        const rel = d.relationships || {};
        const propId = (rel.property && rel.property.data && rel.property.data.id) || a.property_uuid || null;
        const brId = (rel.branch && rel.branch.data && rel.branch.data.id) || a.branch_uuid || null;
        const prop = (propId && inc[propId]) ? (inc[propId].attributes || {}) : null;
        const br = (brId && inc[brId]) ? (inc[brId].attributes || {}) : null;
        return {
          id: d.id, at: a.created_at || null,
          name: ((a.first_name || "") + " " + (a.last_name || "")).trim(),
          email: a.email_address || null, phone: a.telephone_number || null,
          message: a.message || "", source: a.custom_source || null, kind: kindOf(a),
          propertyId: propId,
          property: prop ? (prop.public_address || prop.display_address || prop.inline_address || prop.full_address || prop.address || null) : null,
          branch: br ? (br.name || br.branch_name || br.display_name || null) : null
        };
      });
      enquiries.sort(function (x, y) { return (new Date(y.at).getTime() || 0) - (new Date(x.at).getTime() || 0); });
      return respond(JSON.stringify({ ok: true, count: enquiries.length, total: total, window_days: 30, enquiries: enquiries.slice(0, 200) }), 200, J);
    }

    // Read a synced local dataset (D1). Whitelisted tables only. Admin-gated, instant.
    if (path === "/api/local" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const name = String(url.searchParams.get("name") || "");
      const allow = { viewings: 1, valuations: 1, contacts: 1, applicants: 1, offers: 1, enquiries: 1, tenancies: 1, landlords: 1, vendors: 1, tenants: 1, inspections: 1, sales: 1, properties_all: 1, interested_applicants: 1, property_keys: 1, maintenance_jobs: 1, move_outs: 1, solicitors: 1, todos: 1, todo_types: 1, follow_ups: 1, invoices: 1, photo_and_measures: 1, sales_instructions: 1, lettings_instructions: 1, areas: 1, brands: 1, companies: 1, branches_all: 1, users_all: 1 };
      if (!allow[name] || !env.gr_estates) return respond(JSON.stringify({ ok: false, error: "unknown dataset" }), 400, J);
      let rows = [], total = 0, at = null;
      try { const r = await env.gr_estates.prepare("SELECT * FROM " + name + " ORDER BY created_at DESC LIMIT 2000").all(); rows = (r && r.results) || []; rows.forEach(function (x) { delete x.raw; }); } catch (_) {}
      try { const c = await env.gr_estates.prepare("SELECT COUNT(*) AS n FROM " + name).first(); total = (c && c.n) || 0; } catch (_) {}
      const km = { viewings: "sync:viewings:at", valuations: "sync:valuations:at", contacts: "sync:contacts:at", applicants: "sync:sales_applicants:at", offers: "sync:sales_offers:at", enquiries: "sync:enquiries:at" };
      try { if (km[name] && env.LISTINGS) at = await env.LISTINGS.get(km[name]); } catch (_) {}
      let syncing = false;
      if (total === 0 && env.STREET_API_TOKEN) {
        try {
          const last = env.LISTINGS ? await env.LISTINGS.get("sync:kick:at") : null;
          if (!last || (Date.now() - new Date(last).getTime() > 60000)) {
            if (env.LISTINGS) await env.LISTINGS.put("sync:kick:at", new Date().toISOString());
            if (ctx && ctx.waitUntil) {
              if (name === "enquiries") ctx.waitUntil(syncEnquiries(env).catch(function () {}));
              else { const parts = extrasForDataset(name); ctx.waitUntil((async () => { for (let i = 0; i < parts.length; i++) { try { await syncOneExtra(env, parts[i]); } catch (e) {} } })()); }
            }
          }
          syncing = true;
        } catch (_) {}
      }
      return respond(JSON.stringify({ ok: true, name: name, total: total, synced_at: at, rows: rows, syncing: syncing }), 200, J);
    }

    // One full record incl. the complete raw Street payload (every field). Admin-gated (PII).
    if (path === "/api/record" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const name = String(url.searchParams.get("name") || ""), id = String(url.searchParams.get("id") || "");
      const allow = { viewings: 1, valuations: 1, contacts: 1, applicants: 1, offers: 1, enquiries: 1, tenancies: 1, landlords: 1, vendors: 1, tenants: 1, inspections: 1, sales: 1, properties_all: 1, interested_applicants: 1, property_keys: 1, maintenance_jobs: 1, move_outs: 1, solicitors: 1, todos: 1, todo_types: 1, follow_ups: 1, invoices: 1, photo_and_measures: 1, sales_instructions: 1, lettings_instructions: 1, areas: 1, brands: 1, companies: 1, branches_all: 1, users_all: 1 };
      if (!allow[name] || !id || !env.gr_estates) return respond(JSON.stringify({ ok: false, error: "bad request" }), 400, J);
      let row = null, raw = null;
      try { row = await env.gr_estates.prepare("SELECT * FROM " + name + " WHERE id = ?").bind(id).first(); } catch (_) {}
      if (row && row.raw) { try { raw = JSON.parse(row.raw); } catch (_) {} delete row.raw; }
      return respond(JSON.stringify({ ok: true, name: name, row: row, raw: raw }), 200, J);
    }

    // Everything we hold about one property — local copy: core info + who enquired + viewings + counts. Admin-gated (enquiry PII).
    if (path === "/api/property-hub" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const id = String(url.searchParams.get("id") || "");
      if (!id || !env.gr_estates) return respond(JSON.stringify({ ok: false, error: "bad id" }), 400, J);
      const db = env.gr_estates;
      let property = null, enquiries = [], viewings = [];
      try { property = await db.prepare("SELECT id,kind,status,price,address,town,postcode,beds,baths,type,style,updated_at FROM listings WHERE id = ?").bind(id).first(); } catch (_) {}
      try { const r = await db.prepare("SELECT id,created_at,name,email,phone,message,source,kind,property,branch FROM enquiries WHERE property_id = ? ORDER BY created_at DESC LIMIT 300").bind(id).all(); enquiries = (r && r.results) || []; } catch (_) {}
      try { const r = await db.prepare("SELECT id,created_at,start,status,address,branch FROM viewings WHERE property_id = ? ORDER BY COALESCE(start,created_at) DESC LIMIT 300").bind(id).all(); viewings = (r && r.results) || []; } catch (_) {}
      const label = property ? property.address : ((enquiries[0] && enquiries[0].property) || (viewings[0] && viewings[0].address) || null);
      const branch = property ? null : ((enquiries[0] && enquiries[0].branch) || (viewings[0] && viewings[0].branch) || null);
      const byKind = {}; enquiries.forEach(function (e) { const k = e.kind || "contact"; byKind[k] = (byKind[k] || 0) + 1; });
      const uniq = {}; enquiries.forEach(function (e) { const kk = (e.email || e.phone || e.name || e.id); if (kk) uniq[kk] = 1; });
      const counts = { enquiries: enquiries.length, viewings: viewings.length, people: Object.keys(uniq).length };
      return respond(JSON.stringify({ ok: true, id: id, property: property, label: label, branch: branch, enquiries: enquiries, viewings: viewings, byKind: byKind, counts: counts }), 200, J);
    }

    // What's in the local synced copy — row counts + last sync per dataset. Admin-gated.
    if (path === "/api/sync-status" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const tables = [["enquiries", "Enquiries", "15min", "enquiries"], ["listings", "Listings (on-market)", "hourly", "listings"], ["properties_all", "Properties (all)", "15min", "properties_all"], ["viewings", "Viewings", "15min", "viewings"], ["valuations", "Valuations", "15min", "valuations"], ["applicants", "Applicants", "15min", "sales_applicants"], ["offers", "Offers", "15min", "sales_offers"], ["sales", "Sales", "15min", "sales"], ["tenancies", "Tenancies", "15min", "tenancies"], ["contacts", "Contacts", "hourly", "contacts"], ["landlords", "Landlords", "15min", "landlords"], ["vendors", "Vendors", "15min", "vendors"], ["tenants", "Tenants", "15min", "tenants"], ["inspections", "Inspections", "15min", "inspections"], ["interested_applicants", "Interested applicants", "15min", "interested_applicants"], ["property_keys", "Property keys", "15min", "property_keys"], ["maintenance_jobs", "Maintenance jobs", "15min", "maintenance_jobs"], ["move_outs", "Move outs", "15min", "move_outs"], ["solicitors", "Solicitors", "15min", "solicitors"], ["todos", "Tasks / to-dos", "15min", "todos"]];
      const dateCol = { enquiries: "created_at", viewings: "created_at", valuations: "created_at", applicants: "created_at", offers: "created_at", contacts: "created_at", tenancies: "created_at", landlords: "created_at", vendors: "created_at", tenants: "created_at", inspections: "created_at", sales: "created_at", properties_all: "created_at", interested_applicants: "created_at", property_keys: "created_at", maintenance_jobs: "created_at", move_outs: "created_at", solicitors: "created_at", todos: "created_at" };
      const out = [];
      for (const t of tables) {
        let count = 0, at = null, today = null, delta = null;
        try { if (env.gr_estates) { const c = await env.gr_estates.prepare("SELECT COUNT(*) AS n FROM " + t[0]).first(); count = (c && c.n) || 0; } } catch (_) {}
        try { if (env.LISTINGS) at = await env.LISTINGS.get("sync:" + t[3] + ":at"); } catch (_) {}
        try { if (env.LISTINGS) { const d = await env.LISTINGS.get("sync:" + t[3] + ":delta"); if (d != null) delta = parseInt(d, 10) || 0; } } catch (_) {}
        let diag = null; try { if (env.LISTINGS) { const dg = await env.LISTINGS.get("sync:" + t[3] + ":diag"); if (dg) diag = JSON.parse(dg); } } catch (_) {}
        let streetTotal = null; try { if (env.LISTINGS) { const st = await env.LISTINGS.get("sync:" + t[3] + ":total"); if (st != null) streetTotal = parseInt(st, 10); } } catch (_) {}
        if (dateCol[t[0]] && env.gr_estates) { try { const c2 = await env.gr_estates.prepare("SELECT COUNT(*) AS n FROM " + t[0] + " WHERE datetime(" + dateCol[t[0]] + ") >= datetime('now','start of day')").first(); today = (c2 && c2.n) || 0; } catch (_) {} }
        out.push({ table: t[0], label: t[1], count: count, at: at, cadence: t[2], today: today, lastDelta: delta, streetTotal: streetTotal, diag: diag });
      }
      return respond(JSON.stringify({ ok: true, datasets: out, now: new Date().toISOString() }), 200, J);
    }

    // Deep diagnostics: for EVERY sync resource, the live count, Street total, expected vs actual columns (so
    // schema drift is visible), and the full last-run diag (fetched/mapped/stored, heal action, exact errors).
    // Plus a global feed of the most recent errors. Admin-gated. This is the "what's actually going wrong" view.
    if (path === "/api/sync-diag" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const db = env.gr_estates;
      const reg = [{ name: "enquiries", ddl: ENQ_DDL }, { name: "listings", ddl: "CREATE TABLE listings (id)" }].concat(extrasReg());
      const out = [];
      for (const e of reg) {
        const tbl = ddlTable(e.ddl) || e.name;
        let count = 0, at = null, total = null, diag = null, actual = [];
        try { if (db) { const c = await db.prepare("SELECT COUNT(*) AS n FROM " + tbl).first(); count = (c && c.n) || 0; } } catch (eC) { const m = String((eC && eC.message) || eC); if (m.indexOf("no such table") < 0) diag = { err: "count: " + m.slice(0, 140) }; }
        try { if (env.LISTINGS) at = await env.LISTINGS.get("sync:" + e.name + ":at"); } catch (_) {}
        try { if (env.LISTINGS) { const t = await env.LISTINGS.get("sync:" + e.name + ":total"); if (t != null) total = parseInt(t, 10); } } catch (_) {}
        try { if (env.LISTINGS) { const dg = await env.LISTINGS.get("sync:" + e.name + ":diag"); if (dg) diag = JSON.parse(dg); } } catch (_) {}
        try { if (db) { const sm = await db.prepare("SELECT sql FROM sqlite_master WHERE type='table' AND name=?").bind(tbl).first(); if (sm && sm.sql) actual = ddlColumns(sm.sql); } } catch (_) {}
        const expected = ddlColumns(e.ddl);
        const missing = expected.filter(function (c) { return c !== "id" && actual.indexOf(c) < 0; });
        out.push({ name: e.name, table: tbl, count: count, total: total, at: at, expected: expected.length, actual: actual.length, missing: missing, diag: diag });
      }
      let errlog = []; try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:errlog"); if (v) errlog = JSON.parse(v) || []; } } catch (_) {}
      let lastrun = null; try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:extras:lastrun"); if (v) lastrun = JSON.parse(v); } } catch (_) {}
      return respond(JSON.stringify({ ok: true, datasets: out, errlog: errlog, lastrun: lastrun, now: new Date().toISOString() }), 200, J);
    }

    // Trigger an immediate sync of every Street dataset. Admin-gated. Runs in the background; the hub re-reads shortly after.
    if (path === "/api/sync-now" && request.method === "POST") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      // Run the extras INLINE (awaited) so the response proves what actually happened — the background path
      // can be cut short. enquiries keeps backfilling on its own cron; kick it in the background too.
      let threw = null;
      try { await syncExtrasRotating(env, 4, 20); } catch (e) { threw = String((e && e.message) || e).slice(0, 200); }
      let lastrun = null; try { if (env.LISTINGS) { const v = await env.LISTINGS.get("sync:extras:lastrun"); if (v) lastrun = JSON.parse(v); } } catch (_) {}
      if (ctx && ctx.waitUntil) ctx.waitUntil(syncEnquiries(env).catch(function () {}));
      return respond(JSON.stringify({ ok: true, started: true, ran: true, threw: threw, lastrun: lastrun }), 200, J);
    }

    // Run ONE dataset's sync inline (awaited, not in the background) and report the truth: rows before/after,
    // what it stored, the heal action, and any error — caught right here so nothing can hide. This is the
    // definitive "does syncing this dataset actually work right now" test. Bounded (chunk 4) so it's quick.
    if (path === "/api/sync-test" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const db = env.gr_estates;
      const want = url.searchParams.get("name") || "tenancies";
      const e = extrasReg().find(function (x) { return x.name === want; });
      if (!e) return respond(JSON.stringify({ ok: false, error: "unknown dataset: " + want }), 400, J);
      const tbl = ddlTable(e.ddl) || e.name;
      let before = null, after = null, stored = null, threw = null, diag = null;
      try { const c = await db.prepare("SELECT COUNT(*) AS n FROM " + tbl).first(); before = (c && c.n) || 0; } catch (eB) { before = "no table"; }
      const t0 = Date.now();
      try { stored = await syncStreetResource(env, e.name, e.path, e.ddl, e.map, Object.assign({}, e.opts, { chunk: 4 })); }
      catch (eR) { threw = String((eR && eR.message) || eR).slice(0, 240); }
      const ms = Date.now() - t0;
      try { const c = await db.prepare("SELECT COUNT(*) AS n FROM " + tbl).first(); after = (c && c.n) || 0; } catch (eA) { after = "no table"; }
      try { if (env.LISTINGS) { const dg = await env.LISTINGS.get("sync:" + e.name + ":diag"); if (dg) diag = JSON.parse(dg); } } catch (_) {}
      return respond(JSON.stringify({ ok: true, name: e.name, table: tbl, before: before, after: after, stored: stored, threw: threw, took_ms: ms, diag: diag }), 200, J);
    }

    // Diagnostic probe: hit the real Street API with several endpoint/parameter variations and report what
    // comes back (status, rows, total, JSON:API type, first record's attribute keys). Tells us, from fact,
    // whether viewings/valuations/offers exist for this account and exactly how to pull them. Admin-gated.
    if (path === "/api/sync-probe" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      // Exact paths from the official Street Open API spec. GET-listable ones return 200; POST-only
      // ones (activity, documents, notes, maintenance-requests) return 405 — included so the result is honest.
      const cands = [
        "/todos", "/todo-types", "/photo-and-measures", "/interested-applicants", "/property-keys",
        "/maintenance-jobs", "/move-outs", "/solicitors", "/follow-ups", "/invoices",
        "/sales-instructions", "/lettings-instructions", "/areas", "/brands", "/companies",
        "/branches", "/users", "/network-settings", "/properties", "/sales", "/tenancies",
        "/vendors", "/tenants", "/inspections",
        "/activity", "/documents", "/notes", "/maintenance-requests"
      ].map(function (p) { return p + (p.indexOf("?") >= 0 ? "&" : "?") + "page%5Bsize%5D=2"; });
      const out = [];
      for (const c of cands) {
        try {
          const r = await streetGet(env, c);
          const b = r.body || {};
          const meta = (b.meta && b.meta.pagination) || {};
          const first = (b.data && b.data[0]) || null;
          out.push({
            q: c, status: r.status,
            count: (b.data || []).length,
            total: (meta.total != null ? meta.total : (meta.total_count != null ? meta.total_count : (meta.count != null ? meta.count : null))),
            type: first ? first.type : null,
            keys: first ? Object.keys(first.attributes || {}).slice(0, 40) : null,
            error: (!r.ok && b.errors) ? JSON.stringify(b.errors).slice(0, 200) : undefined
          });
        } catch (e) { out.push({ q: c, error: String((e && e.message) || e).slice(0, 160) }); }
      }
      return respond(JSON.stringify({ ok: true, probe: out }, null, 2), 200, J);
    }

    // Data audit: prove the local copy is a faithful, complete mirror of Street. For each resource we compare
    // our row count to Street's real total (coverage %), and field-by-field check a live sample against the
    // exact record we stored (structural field parity + value match). Admin-gated.
    if (path === "/api/data-audit" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const list = [
        ["enquiries", "/enquiries"], ["viewings", "/viewings"], ["valuations", "/valuations"], ["contacts", "/people"],
        ["properties_all", "/properties"], ["sales", "/sales"], ["tenancies", "/tenancies"], ["landlords", "/landlords"],
        ["vendors", "/vendors"], ["tenants", "/tenants"], ["inspections", "/inspections"], ["interested_applicants", "/interested-applicants"],
        ["property_keys", "/property-keys"], ["maintenance_jobs", "/maintenance-jobs"], ["move_outs", "/move-outs"], ["solicitors", "/solicitors"],
        ["todos", "/todos"], ["follow_ups", "/follow-ups"], ["sales_instructions", "/sales-instructions"], ["lettings_instructions", "/lettings-instructions"],
        ["areas", "/areas"], ["brands", "/brands"], ["companies", "/companies"], ["branches_all", "/branches"], ["users_all", "/users"]
      ];
      const out = [];
      for (const [name, path] of list) {
        let total = null, localCount = 0, sample = 0, found = 0, fieldOk = 0, valMatch = 0, valTotal = 0; const missing = [];
        try {
          const r = await streetGet(env, path + "?page%5Bsize%5D=4");
          const b = r.body || {}; const pg = (b.meta && b.meta.pagination) || {};
          total = (pg.total != null) ? pg.total : ((pg.total_count != null) ? pg.total_count : ((pg.count != null) ? pg.count : null));
          const recs = b.data || []; sample = recs.length;
          try { if (env.gr_estates) { const c = await env.gr_estates.prepare("SELECT COUNT(*) AS n FROM " + name).first(); localCount = (c && c.n) || 0; } } catch (_) {}
          for (const rec of recs) {
            let row = null; try { if (env.gr_estates) row = await env.gr_estates.prepare("SELECT raw FROM " + name + " WHERE id = ?").bind(rec.id).first(); } catch (_) {}
            if (!row || !row.raw) continue;
            found++;
            let stored = {}; try { stored = JSON.parse(row.raw) || {}; } catch (_) {}
            const liveA = rec.attributes || {}, storedA = stored.attributes || {};
            const liveKeys = Object.keys(liveA);
            const miss = liveKeys.filter(function (k) { return !(k in storedA); });
            if (miss.length === 0) fieldOk++;
            miss.forEach(function (k) { if (missing.indexOf(k) < 0) missing.push(k); });
            liveKeys.forEach(function (k) { valTotal++; if (JSON.stringify(liveA[k]) === JSON.stringify(storedA[k])) valMatch++; });
          }
        } catch (_) {}
        out.push({
          name: name, streetTotal: total, localCount: localCount,
          coverage: (total != null && total > 0) ? Math.min(100, Math.round(localCount / total * 100)) : (total === 0 ? 100 : null),
          sample: sample, found: found,
          fieldParity: found ? Math.round(fieldOk / found * 100) : null,
          valueMatch: valTotal ? Math.round(valMatch / valTotal * 100) : null,
          missingFields: missing.slice(0, 8)
        });
      }
      return respond(JSON.stringify({ ok: true, audit: out }, null, 2), 200, J);
    }

    // Intelligent cross-data search for the hub: properties, enquiries, contacts, viewings, valuations. Admin-gated (PII).
    if (path === "/api/hub-search" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      const q = String(url.searchParams.get("q") || "").trim();
      if (q.length < 2 || !env.gr_estates) return respond(JSON.stringify({ ok: true, q: q, groups: [] }), 200, J);
      const db = env.gr_estates;
      const like = "%" + q.replace(/[%_]/g, "") + "%";
      const groups = [];
      try {
        const r = await db.prepare("SELECT id,address,town,price,kind,beds,type,image FROM listings WHERE address LIKE ? OR town LIKE ? OR postcode LIKE ? ORDER BY (price IS NULL), price DESC LIMIT 6").bind(like, like, like).all();
        const items = ((r && r.results) || []).map(function (x) { const mny = x.price != null ? ("£" + Number(x.price).toLocaleString("en-GB") + (x.kind === "let" ? " pcm" : "")) : "POA"; return { type: "property", id: x.id, pid: x.id, img: x.image || null, title: x.address || "Property", sub: [mny, (x.beds != null ? x.beds + " bed" : ""), x.type || ""].filter(Boolean).join(" · ") }; });
        if (items.length) groups.push({ type: "property", label: "Properties", items: items });
      } catch (_) {}
      try {
        const r = await db.prepare("SELECT id,name,email,phone,kind,property,property_id,created_at FROM enquiries WHERE name LIKE ? OR email LIKE ? OR phone LIKE ? OR property LIKE ? ORDER BY created_at DESC LIMIT 6").bind(like, like, like, like).all();
        const items = ((r && r.results) || []).map(function (x) { return { type: "enquiry", id: x.id, pid: x.property_id || null, term: x.name || x.email || "", title: x.name || x.email || "Enquiry", sub: [(x.kind || "enquiry"), (x.property || x.email || x.phone || "")].filter(Boolean).join(" · ") }; });
        if (items.length) groups.push({ type: "enquiry", label: "Enquiries", items: items });
      } catch (_) {}
      try {
        const r = await db.prepare("SELECT id,name,email,phone,created_at FROM contacts WHERE name LIKE ? OR email LIKE ? OR phone LIKE ? ORDER BY created_at DESC LIMIT 6").bind(like, like, like).all();
        const items = ((r && r.results) || []).map(function (x) { return { type: "contact", id: x.id, term: x.name || x.email || "", title: x.name || "Contact", sub: [x.email, x.phone].filter(Boolean).join(" · ") }; });
        if (items.length) groups.push({ type: "contact", label: "Contacts", items: items });
      } catch (_) {}
      try {
        const r = await db.prepare("SELECT id,address,status,start,created_at,property_id FROM viewings WHERE address LIKE ? ORDER BY COALESCE(start,created_at) DESC LIMIT 5").bind(like).all();
        const items = ((r && r.results) || []).map(function (x) { return { type: "viewing", id: x.id, pid: x.property_id || null, term: x.address || "", title: x.address || "Viewing", sub: ["Viewing", (x.status || "")].filter(Boolean).join(" · ") }; });
        if (items.length) groups.push({ type: "viewing", label: "Viewings", items: items });
      } catch (_) {}
      try {
        const r = await db.prepare("SELECT id,address,status,start,created_at FROM valuations WHERE address LIKE ? ORDER BY COALESCE(start,created_at) DESC LIMIT 5").bind(like).all();
        const items = ((r && r.results) || []).map(function (x) { return { type: "valuation", id: x.id, term: x.address || "", title: x.address || "Valuation", sub: ["Valuation", (x.status || "")].filter(Boolean).join(" · ") }; });
        if (items.length) groups.push({ type: "valuation", label: "Valuations", items: items });
      } catch (_) {}
      return respond(JSON.stringify({ ok: true, q: q, groups: groups }), 200, J);
    }

    // Live branches from Street (no hardcoding the office list). Admin-gated.
    if (path === "/api/branches" && request.method === "GET") {
      const J = { "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=1800" };
      if (!env || !env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "locked" }), 403, J);
      const akey = request.headers.get("x-admin-key") || url.searchParams.get("key") || "";
      if (akey !== env.LEADS_KEY) return respond(JSON.stringify({ ok: false, error: "unauthorised" }), 403, J);
      let branches = [];
      try {
        const r = await streetGet(env, "/branches");
        if (r && r.ok && r.body && r.body.data) {
          branches = (r.body.data || []).map(function (b) {
            const a = b.attributes || {};
            const addr = a.address || {};
            return { id: b.id, name: a.name || a.branch_name || a.display_name || a.title || "", town: a.town || addr.town || addr.city || "", postcode: a.postcode || addr.postcode || "" };
          }).filter(function (b) { return b.name; });
        }
      } catch (_) {}
      return respond(JSON.stringify({ ok: true, count: branches.length, branches: branches }), 200, J);
    }

    // Real Instagram + Facebook posts (cached in KV, refreshed hourly from Meta's Graph API).
    if (path === "/api/social") {
      let data = null;
      if (env && env.LISTINGS) { try { const v = await env.LISTINGS.get("social:posts"); if (v) data = JSON.parse(v); } catch (_) {} }
      if ((!data || !data.posts || !data.posts.length) && env && env.META_TOKEN) {
        try { await refreshSocial(env); const v = await env.LISTINGS.get("social:posts"); if (v) data = JSON.parse(v); } catch (_) {}
      }
      const out = { ok: true, posts: (data && data.posts) || [], generated_at: (data && data.generated_at) || null };
      if (url.searchParams.get("debug") === "1") {
        let err = null; if (env && env.LISTINGS) { try { const e2 = await env.LISTINGS.get("social:err"); if (e2) err = JSON.parse(e2); } catch (_) {} }
        out.debug = { count: out.posts.length, tokenSet: !!(env && env.META_TOKEN), lastError: err };
      }
      return respond(JSON.stringify(out), 200, {
        "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "public, max-age=600"
      });
    }

    if (path === "/api/listings") {
      let data = null;
      if (env && env.LISTINGS) {
        try { const kv = await env.LISTINGS.get("current"); if (kv) data = JSON.parse(kv); } catch (_) {}
      }
      const listings = (data && data.listings) || [];
      return respond(JSON.stringify({ ok: true, count: listings.length, listings, generated_at: (data && data.generated_at) || null }), 200, {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=300"
      });
    }

    // Property alerts ("be first") — buyers register their criteria; we notify when a match lands.
    // Captured now (visible in the Hub); email delivery wired later.
    if (path === "/api/alert" && request.method === "POST") {
      if (!originOk(request)) return respond(JSON.stringify({ ok: false }), 403, { "content-type": "application/json; charset=utf-8" });
      let b = {}; try { b = await request.json(); } catch (_) {}
      const email = String((b && b.email) || "").trim().toLowerCase().slice(0, 160);
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return respond(JSON.stringify({ ok: false, error: "invalid email" }), 400, { "content-type": "application/json; charset=utf-8" });
      }
      const rec = { email: email, kind: (b && b.kind === "let") ? "let" : "sale", area: String((b && b.area) || "").slice(0, 60), beds: String((b && b.beds) || "").slice(0, 4), type: String((b && b.type) || "").slice(0, 40), max: String((b && b.max) || "").slice(0, 12), at: Date.now() };
      if (env && env.LISTINGS) {
        try {
          const ip = request.headers.get("cf-connecting-ip") || "";
          const rk = "alrate:" + ip;
          const rc = parseInt((await env.LISTINGS.get(rk)) || "0", 10);
          if (rc <= 20) {
            await env.LISTINGS.put(rk, String(rc + 1), { expirationTtl: 600 });
            // Push into Street as an enquiry (criteria in the message). Street has no API to create a
            // structured applicant, so the team converts this enquiry into an applicant + runs matching.
            let streetOk = false;
            try {
              const kindLabel = rec.kind === "let" ? "RENT" : "BUY";
              let amsg = "PROPERTY ALERT SIGNUP — wants to be first to know. Looking to " + kindLabel + ".";
              if (rec.beds) amsg += " Min " + rec.beds + " bed.";
              if (rec.area) amsg += " Area: " + rec.area + ".";
              if (rec.max) amsg += " Max price: " + rec.max + ".";
              amsg += " Please set up as an applicant + property match (via the website be-first alerts).";
              const sr = await streetPost(env, "/enquiries", { data: { type: "enquiry", attributes: { email_address: rec.email, message: amsg.slice(0, 2000), custom_source: "web-alerts" } } });
              streetOk = !!(sr && sr.ok);
            } catch (_) {}
            rec.streetOk = streetOk;
            await env.LISTINGS.put("alert:" + Date.now() + ":" + Math.random().toString(36).slice(2, 8), JSON.stringify(rec));
          }
        } catch (_) {}
      }
      return respond(JSON.stringify({ ok: true }), 200, { "content-type": "application/json; charset=utf-8" });
    }

    // Early-access signups for the "My G.R. Estates" coming-soon page. Stored in KV as waitlist:<email>.
    if (path === "/api/waitlist" && request.method === "POST") {
      if (!originOk(request)) return respond(JSON.stringify({ ok: false }), 403, { "content-type": "application/json; charset=utf-8" });
      let email = "";
      try { const b = await request.json(); email = String((b && b.email) || "").trim().toLowerCase().slice(0, 120); } catch (_) {}
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return respond(JSON.stringify({ ok: false, error: "invalid email" }), 400, { "content-type": "application/json; charset=utf-8" });
      }
      if (env && env.LISTINGS) {
        try {
          const ip = request.headers.get("cf-connecting-ip") || "";
          const rk = "wlrate:" + ip;
          const rc = parseInt((await env.LISTINGS.get(rk)) || "0", 10);
          if (rc <= 20) {
            await env.LISTINGS.put(rk, String(rc + 1), { expirationTtl: 600 });
            await env.LISTINGS.put("waitlist:" + email, JSON.stringify({ email, at: Date.now() }));
          }
        } catch (_) {}
      }
      return respond(JSON.stringify({ ok: true }), 200, { "content-type": "application/json; charset=utf-8" });
    }

    // Instant valuation guide — indicative range from comparable live listings (D1). No PII, honest framing.
    if (path === "/api/estimate") {
      const J = { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "no-store" };
      if (!env || !env.gr_estates) return respond(JSON.stringify({ ok: false }), 200, J);
      const p = url.searchParams;
      const kind = p.get("kind") === "let" ? "let" : "sale";
      const beds = parseInt(p.get("beds"), 10);
      const type = (p.get("type") || "").trim().toLowerCase();
      const area = (p.get("q") || p.get("area") || "").trim().toLowerCase();
      const db = env.gr_estates;
      async function comps(useBeds, useType, useArea) {
        const where = ["kind = ?", "price IS NOT NULL", "price > 0"]; const args = [kind];
        if (useBeds === 1 && !isNaN(beds)) { where.push("beds = ?"); args.push(beds); }
        else if (useBeds === 2 && !isNaN(beds)) { where.push("beds BETWEEN ? AND ?"); args.push(beds - 1, beds + 1); }
        if (useType && type) { where.push("LOWER(IFNULL(type,'')) LIKE ?"); args.push("%" + type + "%"); }
        if (useArea && area) { where.push("(LOWER(IFNULL(town,'')) LIKE ? OR REPLACE(LOWER(IFNULL(postcode,'')),' ','') LIKE ?)"); args.push("%" + area + "%", "%" + area.replace(/\s+/g, "") + "%"); }
        try {
          const r = await db.prepare("SELECT price FROM listings WHERE " + where.join(" AND ")).bind(...args).all();
          return ((r && r.results) || []).map(function (x) { return x.price; }).filter(function (v) { return v && v > 0; }).sort(function (a, b) { return a - b; });
        } catch (e) { return []; }
      }
      const basis = { beds: !isNaN(beds), type: !!type, area: !!area, widened: false };
      let prices = await comps(1, true, true);
      if (prices.length < 4 && area) { basis.area = false; basis.widened = true; prices = await comps(1, true, false); }
      if (prices.length < 4 && type) { basis.type = false; basis.widened = true; prices = await comps(1, false, false); }
      if (prices.length < 4 && !isNaN(beds)) { basis.beds = "wide"; basis.widened = true; prices = await comps(2, false, false); }
      if (prices.length < 3) { basis.beds = false; prices = await comps(0, false, false); }
      const n = prices.length;
      if (!n) return respond(JSON.stringify({ ok: true, count: 0, kind: kind }), 200, J);
      const pct = function (q) { const i = Math.min(n - 1, Math.max(0, Math.round(q * (n - 1)))); return prices[i]; };
      const median = n % 2 ? prices[(n - 1) / 2] : Math.round((prices[n / 2 - 1] + prices[n / 2]) / 2);
      let low = pct(0.2), high = pct(0.8);
      if (low >= high) { low = prices[0]; high = prices[n - 1]; }
      const step = kind === "let" ? 25 : (median > 300000 ? 10000 : 5000);
      const rnd = function (v) { return Math.max(step, Math.round(v / step) * step); };
      return respond(JSON.stringify({ ok: true, kind: kind, count: n, low: rnd(low), high: rnd(high), mid: rnd(median), basis: basis }), 200, J);
    }

    // Property search over D1 (SQL) — filters + pagination.
    if (path === "/api/search") {
      if (!env || !env.gr_estates) {
        return respond(JSON.stringify({ ok: false, total: 0, results: [] }), 200, {
          "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*"
        });
      }
      const p = url.searchParams;
      const where = []; const args = [];
      const kind = p.get("kind");
      if (kind === "sale" || kind === "let") { where.push("kind = ?"); args.push(kind); }
      const min = parseInt(p.get("min"), 10); if (!isNaN(min)) { where.push("price >= ?"); args.push(min); }
      const max = parseInt(p.get("max"), 10); if (!isNaN(max)) { where.push("price <= ?"); args.push(max); }
      const beds = parseInt(p.get("beds"), 10); if (!isNaN(beds)) { where.push("beds >= ?"); args.push(beds); }
      const type = p.get("type"); if (type) { where.push("type = ?"); args.push(type); }
      const q = (p.get("q") || "").trim();
      if (q) { const like = "%" + q + "%"; where.push("(address LIKE ? OR town LIKE ? OR postcode LIKE ?)"); args.push(like, like, like); }
      const clause = where.length ? ("WHERE " + where.join(" AND ")) : "";
      const pageSize = Math.min(48, Math.max(1, parseInt(p.get("pageSize"), 10) || 12));
      const page = Math.max(1, parseInt(p.get("page"), 10) || 1);
      const offset = (page - 1) * pageSize;
      const order = p.get("sort") === "price_desc" ? "ORDER BY (price IS NULL OR price = 0), price DESC" : "ORDER BY (price IS NULL OR price = 0), price ASC";
      try {
        const db = env.gr_estates;
        const countRow = await db.prepare("SELECT COUNT(*) AS n FROM listings " + clause).bind(...args).first();
        const total = (countRow && countRow.n) || 0;
        const rs = await db.prepare("SELECT id,kind,status,price,address,town,postcode,beds,baths,type,style,image FROM listings " + clause + " " + order + " LIMIT ? OFFSET ?").bind(...args, pageSize, offset).all();
        return respond(JSON.stringify({ ok: true, total, page, pageSize, results: (rs && rs.results) || [] }), 200, {
          "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "public, max-age=120"
        });
      } catch (e) {
        return respond(JSON.stringify({ ok: false, error: "search failed", total: 0, results: [] }), 200, {
          "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*"
        });
      }
    }

    // Live team straight from the Street CRM (names + titles only — no contact details).
    if (path === "/api/team") {
      try {
        const r = await streetGet(env, "/users?page%5Bsize%5D=100");
        if (!r.ok || !r.body || !r.body.data) throw new Error("no data");
        const exclude = new Set(["arelly camacho", "nicole purvis", "leanne wood", "abbie huskinson"]);
        const excludeFirst = new Set(["emma", "lewis", "rebecca", "nicola"]); // left G.R. Estates, still active in CRM
        const titleOverride = { "megan": "Sales Progressor", "vikki": "Manager / Senior Valuer" }; // correct titles by first name
        const rankOf = function (t) {
          t = (t || "").toLowerCase();
          if (t.indexOf("director") >= 0) return 0;
          if (t.indexOf("sales manager") >= 0) return 1;
          if (t.indexOf("senior valuer") >= 0) return 2;
          if (t.indexOf("property manager") >= 0) return 3;
          if (t.indexOf("negotiator") >= 0) return 4;
          if (t.indexOf("lettings") >= 0) return 4;
          if (t.indexOf("progress") >= 0) return 4;
          if (t.indexOf("valuer") >= 0) return 5;
          if (t.indexOf("social") >= 0 || t.indexOf("marketing") >= 0) return 6;
          if (t.indexOf("maintenance") >= 0) return 6;
          if (t.indexOf("admin") >= 0 || t.indexOf("accounts") >= 0) return 7;
          if (t.indexOf("techie") >= 0) return 9;
          return 5;
        };
        const members = r.body.data
          .map(function (d) { return d.attributes || {}; })
          .filter(function (a) {
            if (a.deactivated_at || a.deleted_at) return false;
            const first = (a.first_name || "").toLowerCase().trim();
            const nm = ((a.first_name || "") + " " + (a.last_name || "")).toLowerCase().trim();
            if (!nm || exclude.has(nm) || excludeFirst.has(first)) return false;
            return true;
          })
          .map(function (a) {
            const fn = (a.first_name || "").toLowerCase().trim();
            return {
              name: ((a.first_name || "") + " " + (a.last_name || "")).trim(),
              title: titleOverride[fn] || a.job_title || "",
              email: a.email || a.email_address || null,
              phone: a.telephone_number || a.phone_number || a.mobile_number || a.contact_number || a.telephone || null,
              photo: a.profile_image_url || a.avatar_url || a.photo_url || a.image_url || a.profile_photo_url || null,
              branch: a.branch_name || a.office_name || a.office || (a.branch && a.branch.name) || null
            };
          });
        // Team members who aren't in the CRM (e.g. social media manager) — added by hand.
        const extra = [{ name: "Tia-Rose Catterson", title: "Social Media Manager" }];
        extra.forEach(function (m) { if (!members.some(function (x) { return x.name.toLowerCase() === m.name.toLowerCase(); })) members.push(m); });
        members.sort(function (x, y) { const d = rankOf(x.title) - rankOf(y.title); return d !== 0 ? d : x.name.localeCompare(y.name); });
        return respond(JSON.stringify({ ok: true, count: members.length, members }), 200, {
          "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "public, max-age=3600"
        });
      } catch (e) {
        return respond(JSON.stringify({ ok: false, members: [] }), 200, {
          "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*"
        });
      }
    }

    // Full detail for one property (for the detail page) — Street property + media + D1 price.
    if (path === "/api/property") {
      const id = url.searchParams.get("id") || "";
      if (!id) return respond(JSON.stringify({ ok: false }), 200, { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" });
      const PJSON = { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*", "cache-control": "public, max-age=600" };
      if (env && env.LISTINGS) {
        try { const cached = await env.LISTINGS.get("prop:" + id); if (cached) return respond(cached, 200, PJSON); } catch (e) {}
      }
      try {
        const r = await streetGet(env, "/properties/" + encodeURIComponent(id) + "?include=media");
        if (!r.ok || !r.body || !r.body.data) throw new Error("not found");
        const a = r.body.data.attributes || {};
        const inc = r.body.included || [];
        let images = inc.filter(function (x) { return x.type === "media" && ((x.attributes || {}).media_type || (x.attributes || {}).type || "").toLowerCase() === "image"; }).map(function (x) { return (x.attributes || {}).url; }).filter(Boolean);
        if (!images.length) images = inc.filter(function (x) { return x.type === "media" && (x.attributes || {}).url; }).map(function (x) { return x.attributes.url; });
        let price = null, kind = null, status = a.status || null;
        if (env && env.gr_estates) {
          try { const row = await env.gr_estates.prepare("SELECT price,kind,status FROM listings WHERE id = ?").bind(id).first(); if (row) { price = row.price; kind = row.kind; status = row.status || status; } } catch (e) {}
        }
        const isLet = kind === "let" || (a.is_lettings && !a.is_sales);
        const features = (a.features || []).filter(function (f) { return f && f.name; }).sort(function (x, y) { return (x.order || 0) - (y.order || 0); }).map(function (f) { return f.name; });
        const out = {
          ok: true, id: id,
          address: a.public_address || a.inline_address || "",
          kind: isLet ? "let" : "sale",
          status: status,
          price: price,
          beds: a.bedrooms, baths: a.bathrooms, receptions: a.receptions,
          type: a.display_property_style || a.property_type || "",
          tenure: a.tenure || "",
          councilTaxBand: a.council_tax_band || "",
          heating: a.heating_system || "",
          description: isLet ? (a.full_description_lettings || a.full_description || "") : (a.full_description || a.full_description_lettings || ""),
          location: isLet ? (a.location_summary_lettings || a.location_summary || "") : (a.location_summary || a.location_summary_lettings || ""),
          features: features,
          images: images.slice(0, 30),
          virtualTour: a.virtual_tour || ""
        };
        const body = JSON.stringify(out);
        if (env && env.LISTINGS) { try { await env.LISTINGS.put("prop:" + id, body, { expirationTtl: 3600 }); } catch (e) {} }
        return respond(body, 200, PJSON);
      } catch (e) {
        return respond(JSON.stringify({ ok: false }), 200, { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" });
      }
    }

    if (path === "/badge.svg") {
      const themes = ["dark", "light", "transparent", "transparent-dark"];
      const theme = themes.includes(url.searchParams.get("theme")) ? url.searchParams.get("theme") : "dark";
      const cursor = url.searchParams.get("cursor") === "underscore" ? "underscore" : "block";
      const blink = url.searchParams.get("blink") !== "0";
      return respond(badgeSVG(theme, cursor, blink), 200, {
        "content-type": "image/svg+xml",
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=86400"
      });
    }

    if (path === "/badge") {
      return respond(BADGE_PAGE, 200, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      });
    }

    if (path === "/favicon.ico" || path === "/favicon.svg") {
      const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="#0d1117"/><rect x="30" y="30" width="18" height="40" fill="#28c840"/></svg>`;
      return respond(icon, 200, {
        "content-type": "image/svg+xml",
        "cache-control": "public, max-age=604800"
      });
    }

    if (path === "/robots.txt") {
      const robots = [
        "# dean.id: humans and machines welcome",
        "# AI crawlers: see /llms.txt and the live profile at /v1/me",
        "User-agent: *",
        "Allow: /",
        "",
        "Sitemap: https://dean.id/sitemap.xml"
      ].join("\n") + "\n";
      return respond(robots, 200, {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=86400"
      });
    }

    if (path === "/sitemap.xml") {
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://dean.id/</loc></url>
<url><loc>https://dean.id/badge</loc></url>
</urlset>
`;
      return respond(sitemap, 200, {
        "content-type": "application/xml; charset=utf-8",
        "cache-control": "public, max-age=86400"
      });
    }

    if (path === "/llms.txt") {
      const llms = [
        "# dean.id",
        "",
        "> The personal site of Dean Benson: AI, tech, automation, web and strategy. Based in North East, UK. Currently helping businesses do more with less.",
        "",
        "This entire site is served as a JSON API response, because the medium is the message.",
        "",
        "## Live data",
        "",
        "- [Machine-readable profile](https://dean.id/v1/me): plain JSON, no auth, CORS-open. Works over http and https (`curl dean.id/v1/me`).",
        "- [The stamp](https://dean.id/badge): the badge Dean places in the footer of sites he has built, fixed, or grown.",
        "",
        "## Contact",
        "",
        "- Email: hello@dean.id",
        ""
      ].join("\n");
      return respond(llms, 200, {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=86400"
      });
    }

    if (path === "/coffee") {
      return errorResponse(request, url, 418); // easter egg (HTCPCP). remove this block if undesired.
    }

    if (path === "/") {
      return respond(HOME, 200, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      });
    }

    return errorResponse(request, url, 404);
    } catch (err) {
      let u;
      try { u = new URL(request.url); } catch (_) { u = new URL("https://dean.id/"); }
      return errorResponse(request, u, 500);
    }
  }
};
