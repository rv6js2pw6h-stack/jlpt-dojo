/* =========================================================================
   JLPT 道場 — Paywall
   Reads window.PAYWALL_CONFIG:
     level, appName, storeKey, code, stripeLink, accent, totalPoints, demoQs
   ========================================================================= */
(function () {
  var cfg        = window.PAYWALL_CONFIG || {};
  var storeKey   = cfg.storeKey   || 'dojo.unlocked';
  var demoKey    = storeKey.replace('.unlocked', '.demo');
  var unlockCode = cfg.code       || '';
  var stripeLink = cfg.stripeLink || '#';
  var appName    = cfg.appName    || '道場';
  var level      = cfg.level      || 'N?';
  var accent     = cfg.accent     || '#5b9cff';

  // Handle ?unlocked=CODE return from Gumroad
  try {
    var params = new URLSearchParams(location.search);
    if (unlockCode && params.get('unlocked') === unlockCode) {
      localStorage.setItem(storeKey, '1');
      history.replaceState(null, '', location.pathname);
    }
  } catch (e) {}

  // Already unlocked OR demo already active — bail (app.js handles demo)
  try {
    if (localStorage.getItem(storeKey) === '1') return;
    if (localStorage.getItem(demoKey)  === '1') return;
  } catch (e) {}

  // ── CSS ──────────────────────────────────────────────────────────────────
  var s = document.createElement('style');
  s.textContent =
    '#pw{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;' +
      'padding:1.5rem;background:rgba(12,15,22,.92);backdrop-filter:blur(20px) saturate(1.5);' +
      '-webkit-backdrop-filter:blur(20px) saturate(1.5)}' +
    '#pw-card{background:#141925;border:1px solid #283042;border-radius:24px;padding:2.5rem 2rem;' +
      'max-width:360px;width:100%;box-shadow:0 12px 60px rgba(0,0,0,.6);' +
      'text-align:center;color:#e9eef6;font-family:"Inter",system-ui,sans-serif}' +
    '#pw-card svg.lock-ic{width:48px;height:48px;stroke:#687388;stroke-width:1.8;fill:none;' +
      'stroke-linecap:round;stroke-linejoin:round;display:block;margin:0 auto 1.1rem}' +
    '#pw-lvl{display:inline-block;color:#fff;font-size:.72rem;font-weight:800;' +
      'letter-spacing:.07em;padding:.22rem .7rem;border-radius:100px;margin-bottom:.8rem}' +
    '#pw-card h2{font-size:1.45rem;font-weight:800;margin-bottom:.55rem;color:#e9eef6}' +
    '#pw-card p{font-size:.88rem;color:#9aa6bb;line-height:1.65;margin-bottom:1.4rem}' +
    '#pw-btn{display:block;width:100%;color:#fff;border:none;border-radius:14px;' +
      'padding:.95rem 1rem;font-size:1rem;font-weight:700;cursor:pointer;text-decoration:none;' +
      'transition:opacity .15s,transform .15s;box-sizing:border-box;margin-bottom:.65rem}' +
    '#pw-btn:hover{opacity:.86;transform:translateY(-2px)}' +
    '#pw-btn:active{transform:scale(.97);opacity:1}' +
    '#pw-demo-btn{display:block;width:100%;background:transparent;color:#9aa6bb;' +
      'border:1.5px solid #283042;border-radius:14px;padding:.8rem 1rem;font-size:.9rem;' +
      'font-weight:600;cursor:pointer;transition:border-color .15s,color .15s;box-sizing:border-box}' +
    '#pw-demo-btn:hover{border-color:#3a4a62;color:#e9eef6}' +
    '#pw-note{font-size:.72rem;color:#687388;margin-top:.9rem;line-height:1.5;margin-bottom:0}' +
    '#pw-code-wrap{margin-top:1rem}' +
    '#pw-code-toggle{background:none;border:none;color:#687388;font-size:.75rem;cursor:pointer;text-decoration:underline;padding:0}' +
    '#pw-code-row{display:none;margin-top:.6rem;gap:.4rem;align-items:center}' +
    '#pw-code-row.visible{display:flex}' +
    '#pw-code-input{flex:1;background:#0c0f16;border:1px solid #283042;border-radius:8px;' +
      'padding:.5rem .7rem;color:#e9eef6;font-size:.85rem;outline:none}' +
    '#pw-code-submit{color:#fff;border:none;border-radius:8px;padding:.5rem .8rem;font-size:.85rem;font-weight:700;cursor:pointer}';
  document.head.appendChild(s);

  // ── Overlay ───────────────────────────────────────────────────────────────
  var overlay = document.createElement('div');
  overlay.id = 'pw';
  overlay.innerHTML =
    '<div id="pw-card">' +
      '<svg class="lock-ic" viewBox="0 0 24 24">' +
        '<rect x="3" y="11" width="18" height="11" rx="2"/>' +
        '<path d="M7 11V7a5 5 0 0 1 10 0v4"/>' +
      '</svg>' +
      '<div id="pw-lvl">' + level + '</div>' +
      '<h2>' + appName + '</h2>' +
      '<p>SRS Quiz &middot; Flashcards &middot; Speed challenge &middot; Full reference<br>Permanent access, works offline.</p>' +
      '<a id="pw-btn" href="' + stripeLink + '">Start ' + level + ' &rarr;</a>' +
      '<button id="pw-demo-btn">Try 10 free questions</button>' +
      '<p id="pw-note">One-time payment &middot; $3.50 &middot; Secured by Gumroad</p>' +
      '<div id="pw-code-wrap">' +
        '<button id="pw-code-toggle">Already purchased? Enter your code</button>' +
        '<div id="pw-code-row">' +
          '<input id="pw-code-input" type="text" placeholder="e.g. N5-T8J1C4"' +
            ' autocomplete="off" autocorrect="off" autocapitalize="characters" />' +
          '<button id="pw-code-submit" style="background:' + accent + '">OK</button>' +
        '</div>' +
        '<p id="pw-code-err" style="color:#ff5d6c;font-size:.72rem;margin-top:.4rem;display:none">Invalid code.</p>' +
      '</div>' +
    '</div>';

  document.documentElement.style.overflow = 'hidden';

  function mount() {
    document.body.appendChild(overlay);

    // Demo button → set flag, reload so init() picks it up cleanly
    document.getElementById('pw-demo-btn').addEventListener('click', function () {
      try { localStorage.setItem(demoKey, '1'); } catch (e) {}
      location.reload();
    });

    // Code toggle
    document.getElementById('pw-code-toggle').addEventListener('click', function () {
      var row = document.getElementById('pw-code-row');
      row.classList.toggle('visible');
      if (row.classList.contains('visible')) document.getElementById('pw-code-input').focus();
    });

    function tryCode() {
      var val = document.getElementById('pw-code-input').value.trim().toUpperCase();
      var err = document.getElementById('pw-code-err');
      if (unlockCode && val === unlockCode) {
        try { localStorage.setItem(storeKey, '1'); } catch (e) {}
        document.documentElement.style.overflow = '';
        overlay.remove();
      } else {
        err.style.display = 'block';
        document.getElementById('pw-code-input').value = '';
      }
    }
    document.getElementById('pw-code-submit').addEventListener('click', tryCode);
    document.getElementById('pw-code-input').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') tryCode();
    });
  }

  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
