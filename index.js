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
    await env.LISTINGS.put("google:reviewsv5", JSON.stringify({ ok: true, total: total, average: average, branches: branches, reviews: reviews.slice(0, 12), removals: removals, generated_at: new Date().toISOString() }));
    try { await env.LISTINGS.delete("google:err"); } catch (_) {}
  } catch (e) {
    try { if (env.LISTINGS) await env.LISTINGS.put("google:err", JSON.stringify({ err: String((e && e.message) || e), at: Date.now() })); } catch (_) {}
  }
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshListings(env).catch(() => {}));
    ctx.waitUntil(refreshD1(env).catch(() => {}));
    ctx.waitUntil(refreshSocial(env).catch(() => {}));
    ctx.waitUntil(refreshGoogleReviews(env).catch(() => {}));
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
          .map(function (a) { const fn = (a.first_name || "").toLowerCase().trim(); return { name: ((a.first_name || "") + " " + (a.last_name || "")).trim(), title: titleOverride[fn] || a.job_title || "" }; });
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
