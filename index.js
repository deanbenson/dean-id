const ME = {
  name: "Dean Benson",
  status: "online",
  location: "North Yorkshire, UK",
  services: ["websites built", "websites rescued"],
  contact: "hello@dean.id",
  built_by: "dean.id",
  _comment: "yes, we tag our own work"
};

const BADGE_DARK = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="26" viewBox="0 0 92 26" role="img" aria-label="dean.id">
<rect width="92" height="26" rx="6" fill="#0d1117"/>
<text x="12" y="17.5" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="13" fill="#e6edf3">dean.id</text>
<rect x="70" y="7" width="7" height="13" fill="#28c840"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.45;0.5;0.95;1" dur="1.2s" repeatCount="indefinite"/></rect>
</svg>`;

const BADGE_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="92" height="26" viewBox="0 0 92 26" role="img" aria-label="dean.id">
<rect width="92" height="26" rx="6" fill="#f4f1ea" stroke="#d8d4c8" stroke-width="1"/>
<text x="12" y="17.5" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,monospace" font-size="13" fill="#1a1a1a">dean.id</text>
<rect x="70" y="7" width="7" height="13" fill="#1d9e75"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.45;0.5;0.95;1" dur="1.2s" repeatCount="indefinite"/></rect>
</svg>`;

const SNIPPET_DARK = `<a href="https://dean.id" title="site by dean.id"><img src="https://dean.id/badge.svg" alt="site by dean.id" width="92" height="26" loading="lazy"></a>`;
const SNIPPET_LIGHT = `<a href="https://dean.id" title="site by dean.id"><img src="https://dean.id/badge.svg?theme=light" alt="site by dean.id" width="92" height="26" loading="lazy"></a>`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const HOME = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>dean.id</title>
<meta name="description" content="dean.id — websites built, websites rescued. hello@dean.id">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230d1117'/><rect x='30' y='30' width='18' height='40' fill='%2328c840'/></svg>">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #111113;
    min-height: 100vh;
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
  pre {
    padding: 18px 20px;
    font-size: 13px;
    line-height: 1.9;
    color: #e6edf3;
    min-height: 285px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .k { color: #AFA9EC; }
  .s { color: #9FE1CB; }
  .g { color: #28c840; }
  .p { color: #7d8590; }
  pre a { color: #9FE1CB; }
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
    font-size: 11.5px;
    color: #55555c;
  }
  .get a { color: #8a8a93; }
  @media (prefers-reduced-motion: reduce) { .cursor, .stamp .block { animation: none; } }
</style>
</head>
<body>
  <div class="win" role="img" aria-label="API response: GET dean.id/v1/me returns Dean Benson, online, North Yorkshire UK, services websites built and rescued, contact hello@dean.id">
    <div class="bar">
      <span class="method">GET</span>
      <span class="url">https://dean.id/v1/me</span>
      <span class="badge200" id="badge">200 OK</span>
    </div>
    <pre id="out" aria-hidden="true"></pre>
  </div>
  <p class="foot">
    <a class="stamp" href="https://dean.id">dean.id<span class="block"></span></a>
    <span class="get">it&rsquo;s real: <span style="font-family:ui-monospace,Menlo,monospace">curl dean.id/v1/me</span> &nbsp;&middot;&nbsp; <a href="/badge">get this stamp for your site</a></span>
  </p>
<script>
  var lines = [
    '<span class="p">{</span>',
    '  <span class="k">"name"</span>: <span class="s">"Dean Benson"</span>,',
    '  <span class="k">"status"</span>: <span class="g">"online"</span>,',
    '  <span class="k">"location"</span>: <span class="s">"North Yorkshire, UK"</span>,',
    '  <span class="k">"services"</span>: [<span class="s">"websites built"</span>, <span class="s">"websites rescued"</span>],',
    '  <span class="k">"contact"</span>: <span class="s">"<a href="mailto:hello@dean.id">hello@dean.id</a>"</span>',
    '<span class="p">}</span>'
  ];
  var out = document.getElementById('out');
  var i = 0;
  function step() {
    if (i < lines.length) {
      out.innerHTML = lines.slice(0, i + 1).join('\\n') + '<span class="cursor"></span>';
      i++;
      setTimeout(step, 160);
    } else {
      out.innerHTML = lines.join('\\n');
      document.getElementById('badge').classList.add('show');
    }
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { i = lines.length; }
  setTimeout(step, 350);
</script>
</body>
</html>`;

const BADGE_PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>the stamp — dean.id</title>
<meta name="description" content="Put the dean.id stamp on your site.">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    background: #111113;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    padding: 32px 24px;
    color: #b8b8c0;
  }
  h1 { font-size: 17px; font-weight: 500; color: #fafafa; }
  p.sub { font-size: 13.5px; max-width: 440px; text-align: center; line-height: 1.7; }
  .row { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; justify-content: center; }
  .chip { padding: 14px 18px; border-radius: 10px; border: 1px solid #26262a; }
  .chip.l { background: #e9e6df; }
  .code {
    width: 100%;
    max-width: 560px;
    background: #0d1117;
    border: 1px solid #26262a;
    border-radius: 10px;
    padding: 14px 16px;
    font-family: ui-monospace, Menlo, Consolas, monospace;
    font-size: 12px;
    line-height: 1.7;
    color: #9FE1CB;
    white-space: pre-wrap;
    word-break: break-all;
    cursor: pointer;
  }
  .code:hover { border-color: #3a3a40; }
  .hint { font-size: 11.5px; color: #55555c; }
  a { color: #9FE1CB; }
</style>
</head>
<body>
  <h1>the stamp</h1>
  <p class="sub">If I built or rescued your site, this little fella goes in your footer and links back to <a href="https://dean.id">dean.id</a>. Click a snippet to copy it.</p>
  <div class="row">
    <span class="chip">${BADGE_DARK}</span>
    <span class="chip l">${BADGE_LIGHT.replace('badge.svg"', 'badge.svg?theme=light"')}</span>
  </div>
  <div class="code" onclick="cp(this)" title="click to copy">${esc(SNIPPET_DARK)}</div>
  <div class="code" onclick="cp(this)" title="click to copy">${esc(SNIPPET_LIGHT)}</div>
  <p class="hint" id="hint">dark &middot; light &mdash; click to copy &middot; <a href="/">back</a></p>
<script>
  function cp(el) {
    navigator.clipboard.writeText(el.textContent).then(function(){
      document.getElementById('hint').textContent = 'copied.';
      setTimeout(function(){ location.reload(); }, 1200);
    });
  }
</script>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    if (url.hostname === "www.dean.id") {
      url.hostname = "dean.id";
      return Response.redirect(url.toString(), 301);
    }

    if (path === "/v1/me") {
      return new Response(JSON.stringify(ME, null, 2) + "\n", {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "access-control-allow-origin": "*",
          "cache-control": "public, max-age=3600"
        }
      });
    }

    if (path === "/badge.svg") {
      const theme = url.searchParams.get("theme");
      return new Response(theme === "light" ? BADGE_LIGHT : BADGE_DARK, {
        headers: {
          "content-type": "image/svg+xml",
          "access-control-allow-origin": "*",
          "cache-control": "public, max-age=86400"
        }
      });
    }

    if (path === "/badge") {
      return new Response(BADGE_PAGE, {
        headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" }
      });
    }

    return new Response(HOME, {
      status: path === "/" ? 200 : 404,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" }
    });
  }
};
