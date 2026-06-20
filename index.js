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

const STREET_API_BASE = "https://street.co.uk/open-api";

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
    .transform(assetResp);
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshListings(env).catch(() => {}));
    ctx.waitUntil(refreshD1(env).catch(() => {}));
  },
  async fetch(request, env) {
   try {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (!["GET", "HEAD"].includes(request.method)) {
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
        const exclude = new Set(["arelly camacho"]);
        const rankOf = function (t) {
          t = (t || "").toLowerCase();
          if (t.indexOf("director") >= 0) return 0;
          if (t.indexOf("sales manager") >= 0) return 1;
          if (t.indexOf("senior valuer") >= 0) return 2;
          if (t.indexOf("property manager") >= 0) return 3;
          if (t.indexOf("negotiator") >= 0) return 4;
          if (t.indexOf("lettings") >= 0) return 4;
          if (t.indexOf("valuer") >= 0) return 5;
          if (t.indexOf("maintenance") >= 0) return 6;
          if (t.indexOf("admin") >= 0 || t.indexOf("accounts") >= 0) return 7;
          if (t.indexOf("techie") >= 0) return 9;
          return 5;
        };
        const members = r.body.data
          .map(function (d) { return d.attributes || {}; })
          .filter(function (a) {
            if (a.deactivated_at || a.deleted_at) return false;
            const nm = ((a.first_name || "") + " " + (a.last_name || "")).toLowerCase().trim();
            if (!nm || exclude.has(nm)) return false;
            return true;
          })
          .map(function (a) { return { name: ((a.first_name || "") + " " + (a.last_name || "")).trim(), title: a.job_title || "" }; });
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
