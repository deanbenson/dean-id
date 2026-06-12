const ME = {
  name: "Dean Benson",
  status: "online",
  location: "North Yorkshire, UK",
  stack: ["ai", "web", "automation", "strategy"],
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

const HOME = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>dean.id · Dean Benson</title>
<meta name="description" content="ai, web, automation, strategy. North Yorkshire, UK.">
<meta name="theme-color" content="#111113">
<link rel="canonical" href="https://dean.id/">
<meta property="og:title" content="dean.id · Dean Benson">
<meta property="og:description" content="ai, web, automation, strategy. North Yorkshire, UK. It's a real API: curl dean.id/v1/me">
<meta property="og:url" content="https://dean.id/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="dean.id">
<meta property="og:image" content="https://dean.id/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="dean.id, with a green terminal cursor. ai, web, automation, strategy.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://dean.id/og.png">
<meta name="twitter:title" content="dean.id · Dean Benson">
<meta name="twitter:description" content="ai, web, automation, strategy. It's a real API: curl dean.id/v1/me">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dean Benson",
  "url": "https://dean.id",
  "jobTitle": "AI, web, automation & strategy",
  "address": { "@type": "PostalAddress", "addressRegion": "North Yorkshire", "addressCountry": "GB" },
  "knowsAbout": ["AI", "automation", "web development", "business strategy"],
  "mainEntityOfPage": "https://dean.id/v1/me"
}
</script>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><rect x='30' y='30' width='18' height='40' fill='%2328c840'/></svg>">
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
    gap: 26px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    padding: 24px;
  }
  .win {
    width: 100%;
    max-width: 500px;
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
  .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
  @media (prefers-reduced-motion: reduce) { .cursor, .stamp .block { animation: none; } }
</style>
</head>
<body>
  <h1 class="sr">dean.id, Dean Benson: ai, web, automation, strategy</h1>
  <main style="display: contents;">
  <div class="win" role="img" aria-label="Dean Benson, North Yorkshire UK. Helps businesses grow with websites, systems, automation and AI. Contact hello@dean.id. Styled as an API response; a human-readable toggle follows.">
    <div class="bar">
      <span class="method" id="m">GET</span>
      <span class="url" id="u">https://dean.id/v1/me</span>
      <span class="badge200" id="badge">200 OK</span>
    </div>
    <div id="out" aria-hidden="true"></div>
  </div>
  <p class="foot">
    <a class="stamp" href="https://dean.id">dean.id<span class="block"></span></a>
    <span class="get">it&rsquo;s real: <span style="font-family:ui-monospace,Menlo,monospace">curl dean.id/v1/me</span> &nbsp;&middot;&nbsp; <a href="/badge">the stamp</a> &nbsp;&middot;&nbsp; <a href="#human" id="mode">human?</a></span>
  </p>
  </main>
<script>
  var jsonLines = [
    '<span class="p">{</span>',
    '  <span class="k">"name"</span>: <span class="s">"Dean Benson"</span>,',
    '  <span class="k">"status"</span>: <span class="g">"online"</span>,',
    '  <span class="k">"location"</span>: <span class="s">"North Yorkshire, UK"</span>,',
    '  <span class="k">"stack"</span>: [<span class="s">"ai"</span>, <span class="s">"web"</span>, <span class="s">"automation"</span>, <span class="s">"strategy"</span>],',
    '  <span class="k">"currently"</span>: <span class="s">"helping businesses do more with less"</span>,',
    '  <span class="k">"contact"</span>: <span class="s">"<a href="mailto:hello@dean.id" tabindex="-1">hello@dean.id</a>"</span>',
    '<span class="p">}</span>'
  ];
  var humanLines = [
    'Hi, I\\'m Dean.',
    'I help businesses grow. Sharper websites, systems that run themselves, automation that kills the boring work.',
    'I deploy AI that blows minds and quietly makes you money.',
    'North Yorkshire, UK. Say hello: <a href="mailto:hello@dean.id" tabindex="-1">hello@dean.id</a>'
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
    modeLink.textContent = human ? 'machine?' : 'human?';
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
  "content-security-policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'"
};

function respond(body, status, headers) {
  return new Response(body, { status, headers: { ...SEC, ...headers } });
}

export default {
  async fetch(request) {
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

    if (url.protocol === "http:" && path !== "/v1/me") {
      url.protocol = "https:";
      return respond(null, 301, { location: url.toString() });
    }

    if (path === "/v1/me") {
      return respond(JSON.stringify(ME, null, 2) + "\n", 200, {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=3600"
      });
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
        "> The personal site of Dean Benson: AI, web, automation and strategy. Based in North Yorkshire, UK. Currently helping businesses do more with less.",
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

    return respond(HOME, path === "/" ? 200 : 404, {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300"
    });
  }
};
