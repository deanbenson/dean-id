/* Ask Georgina — G.R. Estates AI assistant widget.
   Self-contained: injects styles + a floating launcher + chat panel on any page.
   Talks to the Worker at /api/ask (Cloudflare Workers AI). Exposes window.AskGeorgina. */
(function () {
  if (window.__askGeorgina) return;
  window.__askGeorgina = true;

  var API = "/api/ask";
  var msgs = [];        // conversation history [{role, content}]
  var started = false;  // greeting shown?
  var busy = false;

  /* ---------- styles ---------- */
  var css = `
  .ag-launch{position:fixed;right:20px;bottom:20px;z-index:2147483000;display:flex;align-items:center;gap:10px;
    background:#1b2430;color:#fff;border:0;border-radius:40px;padding:9px 18px 9px 9px;cursor:pointer;
    box-shadow:0 12px 30px rgba(27,36,48,.32);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
    font-size:.95rem;font-weight:600;transition:transform .18s,box-shadow .18s}
  .ag-launch:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(27,36,48,.4)}
  .ag-ava{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#e2672a,#c2541d);display:grid;place-items:center;
    color:#fff;font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:1.15rem;flex:none}
  .ag-launch .ag-sub{font-size:.72rem;font-weight:600;color:#9fb0c0;display:block;line-height:1}
  .ag-launch .ag-ttl{display:block;line-height:1.25}
  .ag-dot{position:absolute;top:6px;left:34px;width:11px;height:11px;border-radius:50%;background:#2bb673;border:2px solid #1b2430}
  @keyframes agpulse{0%{box-shadow:0 0 0 0 rgba(226,103,42,.5)}100%{box-shadow:0 0 0 14px rgba(226,103,42,0)}}
  .ag-launch.ag-pulse .ag-ava{animation:agpulse 2.2s infinite}

  .ag-panel{position:fixed;right:20px;bottom:20px;z-index:2147483001;width:390px;max-width:calc(100vw - 32px);
    height:610px;max-height:calc(100vh - 40px);background:#fbf7f2;border-radius:20px;overflow:hidden;display:none;
    flex-direction:column;box-shadow:0 30px 70px rgba(27,36,48,.4);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif}
  .ag-panel.ag-on{display:flex;animation:agin .22s ease}
  @keyframes agin{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
  .ag-head{background:linear-gradient(135deg,#1b2430,#2b3645);color:#fff;padding:15px 16px;display:flex;align-items:center;gap:12px}
  .ag-head .ag-ava{width:44px;height:44px;font-size:1.3rem}
  .ag-head b{font-size:1.04rem;display:block;line-height:1.2}
  .ag-head .ag-st{font-size:.76rem;color:#a9c5b4;display:flex;align-items:center;gap:5px}
  .ag-head .ag-st i{width:7px;height:7px;border-radius:50%;background:#2bb673;display:inline-block}
  .ag-aitag{margin-left:6px;font-size:.6rem;font-weight:700;letter-spacing:.06em;background:rgba(255,255,255,.16);
    padding:2px 6px;border-radius:5px;color:#fff;vertical-align:middle}
  .ag-x{margin-left:auto;background:rgba(255,255,255,.12);border:0;color:#fff;width:32px;height:32px;border-radius:9px;
    cursor:pointer;font-size:1.1rem;line-height:1}
  .ag-x:hover{background:rgba(255,255,255,.24)}
  .ag-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth}
  .ag-row{display:flex;gap:9px;align-items:flex-end;max-width:90%}
  .ag-row.me{align-self:flex-end;flex-direction:row-reverse}
  .ag-mava{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#e2672a,#c2541d);flex:none;
    display:grid;place-items:center;color:#fff;font-family:'Fraunces',Georgia,serif;font-weight:700;font-size:.8rem}
  .ag-bub{background:#fff;border:1px solid #ece3d7;border-radius:15px;padding:10px 13px;font-size:.92rem;line-height:1.5;color:#26313f;
    box-shadow:0 2px 8px rgba(27,36,48,.05);white-space:pre-wrap}
  .ag-row.me .ag-bub{background:#e2672a;color:#fff;border-color:#e2672a}
  .ag-cards{display:flex;flex-direction:column;gap:8px;align-self:stretch;margin:2px 0 4px 37px}
  .agc{display:flex;gap:10px;background:#fff;border:1px solid #ece3d7;border-radius:13px;overflow:hidden;text-decoration:none;
    color:#1b2430;box-shadow:0 2px 8px rgba(27,36,48,.06);transition:transform .15s,box-shadow .15s}
  .agc:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(27,36,48,.14)}
  .agc-img{width:84px;flex:none;background:#e9e2d8 center/cover no-repeat;min-height:74px}
  .agc-b{padding:8px 10px 8px 2px;display:flex;flex-direction:column;justify-content:center;gap:1px;min-width:0}
  .agc-p{font-weight:800;font-size:.95rem}
  .agc-a{font-size:.78rem;color:#33404f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .agc-m{font-size:.74rem;color:#7a8696}
  .ag-chips{display:flex;flex-wrap:wrap;gap:7px;margin:2px 0 0 37px}
  .ag-chip{background:#fff;border:1px solid #e2d9cd;color:#1b2430;border-radius:30px;padding:7px 12px;font-size:.82rem;
    cursor:pointer;font-weight:600;transition:.15s;font-family:inherit}
  .ag-chip:hover{background:#e2672a;color:#fff;border-color:#e2672a}
  .ag-foot{border-top:1px solid #ece3d7;background:#fff;padding:10px;display:flex;gap:8px;align-items:flex-end}
  .ag-ta{flex:1;border:1px solid #e2d9cd;border-radius:13px;padding:10px 12px;font-size:.92rem;font-family:inherit;resize:none;
    max-height:90px;outline:none;color:#1b2430;background:#fbf7f2}
  .ag-ta:focus{border-color:#e2672a;background:#fff}
  .ag-send{background:#e2672a;border:0;color:#fff;width:42px;height:42px;border-radius:12px;cursor:pointer;flex:none;font-size:1.1rem}
  .ag-send:hover{background:#c2541d}
  .ag-send:disabled{opacity:.5;cursor:default}
  .ag-typing{display:flex;gap:4px;padding:4px 2px}
  .ag-typing span{width:7px;height:7px;border-radius:50%;background:#c2b8a8;animation:agbounce 1.1s infinite}
  .ag-typing span:nth-child(2){animation-delay:.15s}.ag-typing span:nth-child(3){animation-delay:.3s}
  @keyframes agbounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
  .ag-disc{font-size:.66rem;color:#9aa3af;text-align:center;padding:0 12px 8px;background:#fff}
  @media(max-width:480px){
    .ag-panel{right:0;bottom:0;width:100vw;max-width:100vw;height:100dvh;max-height:100dvh;border-radius:0}
    .ag-launch .ag-txt{display:none}.ag-launch{padding:9px;border-radius:50%}
  }`;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  /* ---------- dom ---------- */
  var launch = document.createElement("button");
  launch.className = "ag-launch ag-pulse";
  launch.setAttribute("aria-label", "Ask Georgina, our AI assistant");
  launch.innerHTML = '<span class="ag-ava">G</span><span class="ag-dot"></span>' +
    '<span class="ag-txt"><span class="ag-ttl">Ask Georgina</span><span class="ag-sub">AI assistant · ask me anything</span></span>';
  document.body.appendChild(launch);

  var panel = document.createElement("div");
  panel.className = "ag-panel"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Ask Georgina chat");
  panel.innerHTML =
    '<div class="ag-head"><span class="ag-ava">G</span>' +
      '<div><b>Georgina<span class="ag-aitag">AI</span></b>' +
      '<span class="ag-st"><i></i> G.R. Estates assistant · replies in seconds</span></div>' +
      '<button class="ag-x" aria-label="Close">&times;</button></div>' +
    '<div class="ag-body" id="agBody"></div>' +
    '<div class="ag-disc">Georgina is an AI assistant. Please double-check anything important with the team.</div>' +
    '<div class="ag-foot"><textarea class="ag-ta" id="agTa" rows="1" placeholder="Tell me what you\'re looking for…"></textarea>' +
      '<button class="ag-send" id="agSend" aria-label="Send">&#10148;</button></div>';
  document.body.appendChild(panel);

  var body = panel.querySelector("#agBody");
  var ta = panel.querySelector("#agTa");
  var sendBtn = panel.querySelector("#agSend");

  /* ---------- helpers ---------- */
  function esc(s) { return (s == null ? "" : String(s)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function scrollDown() { body.scrollTop = body.scrollHeight; }
  function shortAddr(a) { var p = String(a || "").split(","); return p.slice(0, 2).join(",").trim() || a || ""; }

  function bubble(role, text) {
    var row = document.createElement("div");
    row.className = "ag-row " + (role === "me" ? "me" : "");
    row.innerHTML = (role === "me" ? "" : '<span class="ag-mava">G</span>') + '<div class="ag-bub">' + esc(text) + "</div>";
    body.appendChild(row); scrollDown(); return row;
  }

  function cardsBlock(props) {
    if (!props || !props.length) return;
    var wrap = document.createElement("div"); wrap.className = "ag-cards";
    wrap.innerHTML = props.slice(0, 6).map(function (p) {
      var price = p.price ? ("£" + Number(p.price).toLocaleString("en-GB") + (p.kind === "let" ? " pcm" : "")) : "POA";
      var meta = []; if (p.beds) meta.push(p.beds + " bed"); if (p.baths) meta.push(p.baths + " bath"); if (p.type) meta.push(p.type);
      var img = p.image ? esc(p.image) : "";
      return '<a class="agc" href="property.html?id=' + encodeURIComponent(p.id) + '">' +
        '<div class="agc-img"' + (img ? ' style="background-image:url(\'' + img + '\')"' : "") + '></div>' +
        '<div class="agc-b"><div class="agc-p">' + esc(price) + '</div>' +
        '<div class="agc-a">' + esc(shortAddr(p.address)) + '</div>' +
        '<div class="agc-m">' + esc(meta.join(" · ")) + '</div></div></a>';
    }).join("");
    body.appendChild(wrap); scrollDown();
  }

  function chips(list) {
    var wrap = document.createElement("div"); wrap.className = "ag-chips";
    list.forEach(function (t) {
      var b = document.createElement("button"); b.className = "ag-chip"; b.type = "button"; b.textContent = t;
      b.onclick = function () { wrap.remove(); send(t); };
      wrap.appendChild(b);
    });
    body.appendChild(wrap); scrollDown();
  }

  function typing(on) {
    var ex = body.querySelector(".ag-row.ag-typewrap");
    if (on) {
      if (ex) return;
      var row = document.createElement("div"); row.className = "ag-row ag-typewrap";
      row.innerHTML = '<span class="ag-mava">G</span><div class="ag-bub"><div class="ag-typing"><span></span><span></span><span></span></div></div>';
      body.appendChild(row); scrollDown();
    } else if (ex) { ex.remove(); }
  }

  function greet() {
    if (started) return; started = true;
    bubble("ai", "Hi, I'm Georgina, G.R. Estates' AI assistant. 👋 I can help you find a home to buy or rent, tell you what your place might be worth, or answer anything about how we work. What are you after?");
    chips(["2 bed houses under £150k", "Flats to rent in Stockton", "What's my home worth?", "Do you manage Airbnbs?"]);
  }

  function send(text) {
    text = (text || ta.value || "").trim();
    if (!text || busy) return;
    var oldChips = body.querySelector(".ag-chips"); if (oldChips) oldChips.remove();
    ta.value = ""; ta.style.height = "auto";
    bubble("me", text);
    msgs.push({ role: "user", content: text });
    busy = true; sendBtn.disabled = true; typing(true);
    fetch(API, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ q: text, history: msgs.slice(-7, -1) })
    }).then(function (r) { return r.json(); }).then(function (d) {
      typing(false);
      var reply = (d && d.reply) || "Sorry, I had a hiccup. Please call us on 01642 378022.";
      bubble("ai", reply);
      msgs.push({ role: "assistant", content: reply });
      if (d && d.properties && d.properties.length) cardsBlock(d.properties);
    }).catch(function () {
      typing(false);
      bubble("ai", "Sorry, I couldn't reach the system just then. Please try again, or call us on 01642 378022.");
    }).then(function () { busy = false; sendBtn.disabled = false; ta.focus(); });
  }

  /* ---------- open / close ---------- */
  function open(prefill) {
    panel.classList.add("ag-on"); launch.style.display = "none";
    greet();
    if (prefill) { ta.value = prefill; setTimeout(function () { send(prefill); }, 120); }
    else setTimeout(function () { ta.focus(); }, 120);
  }
  function close() { panel.classList.remove("ag-on"); launch.style.display = "flex"; }

  launch.onclick = function () { open(); };
  panel.querySelector(".ag-x").onclick = close;
  sendBtn.onclick = function () { send(); };
  ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });
  ta.addEventListener("input", function () { ta.style.height = "auto"; ta.style.height = Math.min(90, ta.scrollHeight) + "px"; });

  window.AskGeorgina = { open: open, close: close };
})();
