/* =========================================================================
   JLPT 道場 — Paywall  (démo à 10 questions fixes)
   Lit window.PAYWALL_CONFIG:
     level, appName, storeKey, code, stripeLink
     accent       – couleur hex (ex. "#ffa532")
     totalPoints  – nombre total de points du niveau (ex. 182)
     demoQs       – tableau de { q, ctx, o[4], a, e }
                    q   : question (avec ＿＿＿ pour le blanc)
                    ctx : traduction française affichée sous la question
                    o   : tableau de 4 options
                    a   : index de la bonne réponse
                    e   : explication affichée après la réponse
   ========================================================================= */
(function () {
  var cfg         = window.PAYWALL_CONFIG || {};
  var storeKey    = cfg.storeKey    || 'dojo.unlocked';
  var unlockCode  = cfg.code        || '';
  var stripeLink  = cfg.stripeLink  || '#';
  var appName     = cfg.appName     || '道場';
  var level       = cfg.level       || 'N?';
  var accent      = cfg.accent      || '#5b9cff';
  var totalPoints = cfg.totalPoints || 100;
  var demoQs      = cfg.demoQs     || null;

  // Retour Gumroad avec ?unlocked=CODE
  try {
    var params = new URLSearchParams(location.search);
    if (unlockCode && params.get('unlocked') === unlockCode) {
      localStorage.setItem(storeKey, '1');
      history.replaceState(null, '', location.pathname);
    }
  } catch (e) {}

  // Déjà débloqué — on sort
  try { if (localStorage.getItem(storeKey) === '1') return; } catch (e) {}

  // ── CSS ──────────────────────────────────────────────────────────────────
  var s = document.createElement('style');
  s.textContent =
    '#pw{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;' +
      'padding:1.5rem;background:rgba(12,15,22,.92);backdrop-filter:blur(20px) saturate(1.5);' +
      '-webkit-backdrop-filter:blur(20px) saturate(1.5);overflow-y:auto}' +
    '#pw-card{background:#141925;border:1px solid #283042;border-radius:24px;padding:2rem 1.75rem;' +
      'max-width:380px;width:100%;box-shadow:0 12px 60px rgba(0,0,0,.6);' +
      'text-align:center;color:#e9eef6;font-family:"Inter",system-ui,sans-serif}' +

    /* section démo */
    '#pw-demo-label{font-size:.68rem;font-weight:700;letter-spacing:.1em;color:#687388;' +
      'text-transform:uppercase;margin-bottom:.8rem}' +
    '#pw-progress{height:5px;background:#1b2230;border-radius:4px;margin-bottom:1.1rem;overflow:hidden}' +
    '#pw-progress-fill{height:100%;border-radius:4px;transition:width .5s ease}' +
    '#pw-question{font-size:1.05rem;font-weight:700;color:#e9eef6;margin-bottom:.35rem;' +
      'line-height:1.55;font-family:"Noto Sans JP","Inter",system-ui,sans-serif;' +
      'min-height:2.8rem}' +
    '#pw-ctx{font-size:.78rem;color:#687388;margin-bottom:1rem;font-style:italic;min-height:1.2rem}' +
    '#pw-opts{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.9rem}' +
    '.pw-opt{background:#1b2230;border:1.5px solid #283042;border-radius:10px;padding:.65rem .5rem;' +
      'font-size:.9rem;font-weight:600;color:#e9eef6;cursor:pointer;' +
      'transition:background .15s,border-color .15s;' +
      'font-family:"Noto Sans JP","Inter",system-ui,sans-serif}' +
    '.pw-opt:hover:not(:disabled){background:#222d40;border-color:#3a4a62}' +
    '.pw-opt.correct{background:#0d3320!important;border-color:#2a9e5e!important;color:#4ade80!important}' +
    '.pw-opt.wrong{background:#2d1515!important;border-color:#8b2020!important;color:#f87171!important}' +
    '.pw-opt:disabled{cursor:default}' +
    '#pw-result{font-size:.8rem;color:#9aa6bb;line-height:1.55;' +
      'text-align:left;padding:.7rem .85rem;background:#0c0f16;border-radius:10px;display:none}' +
    '#pw-result-label{display:block;margin-bottom:.25rem;font-size:.82rem;font-weight:700}' +

    /* séparateur */
    '#pw-sep{height:1px;background:#1b2230;margin:1.4rem 0;display:none}' +

    /* section déverrouillage */
    '#pw-unlock{display:none}' +
    '#pw-unlock.visible{display:block}' +
    '#pw-unlock .lock-ic{width:36px;height:36px;stroke:#687388;stroke-width:1.8;fill:none;' +
      'stroke-linecap:round;stroke-linejoin:round;display:block;margin:0 auto .7rem}' +
    '#pw-lvl{display:inline-block;color:#fff;font-size:.72rem;font-weight:800;' +
      'letter-spacing:.07em;padding:.22rem .7rem;border-radius:100px;margin-bottom:.8rem}' +
    '#pw-card h2{font-size:1.3rem;font-weight:800;margin-bottom:.5rem;color:#e9eef6}' +
    '#pw-sub{font-size:.85rem;color:#9aa6bb;line-height:1.6;margin-bottom:1.5rem}' +
    '#pw-btn{display:block;width:100%;color:#fff;border:none;border-radius:14px;' +
      'padding:.9rem 1rem;font-size:1rem;font-weight:700;cursor:pointer;' +
      'text-decoration:none;transition:opacity .15s,transform .15s;box-sizing:border-box}' +
    '#pw-btn:hover{opacity:.86;transform:translateY(-2px)}' +
    '#pw-btn:active{transform:scale(.97);opacity:1}' +
    '#pw-note{font-size:.72rem;color:#687388;margin-top:.9rem;line-height:1.5}' +
    '#pw-code-wrap{margin-top:1rem}' +
    '#pw-code-toggle{background:none;border:none;color:#687388;font-size:.75rem;cursor:pointer;text-decoration:underline;padding:0}' +
    '#pw-code-row{display:none;margin-top:.6rem;gap:.4rem;align-items:center}' +
    '#pw-code-row.visible{display:flex}' +
    '#pw-code-input{flex:1;background:#0c0f16;border:1px solid #283042;border-radius:8px;' +
      'padding:.5rem .7rem;color:#e9eef6;font-size:.85rem;outline:none}' +
    '#pw-code-submit{color:#fff;border:none;border-radius:8px;padding:.5rem .8rem;font-size:.85rem;font-weight:700;cursor:pointer}';
  document.head.appendChild(s);

  // ── Contenu HTML statique ─────────────────────────────────────────────────
  var hasDemoQs = demoQs && demoQs.length > 0;
  var totalQs   = hasDemoQs ? demoQs.length : 0;

  function buildOptButtons() {
    var html = '';
    var opts = hasDemoQs ? demoQs[0].o : ['','','',''];
    for (var i = 0; i < 4; i++) {
      html += '<button class="pw-opt" data-idx="' + i + '">' + opts[i] + '</button>';
    }
    return html;
  }

  var demoHTML = '';
  if (hasDemoQs) {
    var firstQ = demoQs[0];
    demoHTML =
      '<p id="pw-demo-label">Essai &mdash; 1&nbsp;/&nbsp;' + totalPoints + ' points</p>' +
      '<div id="pw-progress">' +
        '<div id="pw-progress-fill" style="width:' +
          Math.max(1, Math.round(1 / totalPoints * 100)) + '%;background:' + accent + '"></div>' +
      '</div>' +
      '<p id="pw-question">' + firstQ.q + '</p>' +
      '<p id="pw-ctx">' + (firstQ.ctx || '') + '</p>' +
      '<div id="pw-opts">' + buildOptButtons() + '</div>' +
      '<div id="pw-result"><span id="pw-result-label"></span><span id="pw-result-exp"></span></div>';
  }

  var unlockHTML =
    '<div id="pw-unlock">' +
      '<svg class="lock-ic" viewBox="0 0 24 24">' +
        '<rect x="3" y="11" width="18" height="11" rx="2"/>' +
        '<path d="M7 11V7a5 5 0 0 1 10 0v4"/>' +
      '</svg>' +
      '<div id="pw-lvl">' + level + '</div>' +
      '<h2>' + appName + '</h2>' +
      '<p id="pw-sub">Quiz SRS &middot; Flashcards &middot; Défi chrono &middot; Référence complète<br>Accès permanent, fonctionne hors ligne.</p>' +
      '<a id="pw-btn" href="' + stripeLink + '">Débloquer pour 3,50&nbsp;€ &rarr;</a>' +
      '<p id="pw-note">Paiement unique &middot; Sécurisé par Gumroad</p>' +
      '<div id="pw-code-wrap">' +
        '<button id="pw-code-toggle">Déjà acheté&nbsp;? Entrez votre code</button>' +
        '<div id="pw-code-row">' +
          '<input id="pw-code-input" type="text" placeholder="ex. N3-FR-E8N4"' +
            ' autocomplete="off" autocorrect="off" autocapitalize="characters" />' +
          '<button id="pw-code-submit" style="background:' + accent + '">OK</button>' +
        '</div>' +
        '<p id="pw-code-err" style="color:#ff5d6c;font-size:.72rem;margin-top:.4rem;display:none">Code invalide.</p>' +
      '</div>' +
    '</div>';

  var overlay = document.createElement('div');
  overlay.id = 'pw';
  overlay.innerHTML =
    '<div id="pw-card">' +
      demoHTML +
      (hasDemoQs ? '<div id="pw-sep"></div>' : '') +
      unlockHTML +
    '</div>';

  document.documentElement.style.overflow = 'hidden';

  // ── Montage ───────────────────────────────────────────────────────────────
  function mount() {
    document.body.appendChild(overlay);

    if (!hasDemoQs) {
      document.getElementById('pw-unlock').classList.add('visible');
      wireCodeInput();
      return;
    }

    // ── Machine d'état démo ───────────────────────────────────────────────
    var currentIdx = 0;
    var answering  = false;

    var labelEl    = document.getElementById('pw-demo-label');
    var fillEl     = document.getElementById('pw-progress-fill');
    var questionEl = document.getElementById('pw-question');
    var ctxEl      = document.getElementById('pw-ctx');
    var resultEl   = document.getElementById('pw-result');
    var resultLbl  = document.getElementById('pw-result-label');
    var resultExp  = document.getElementById('pw-result-exp');
    var optEls     = document.querySelectorAll('.pw-opt');

    function pct(idx) {
      return Math.max(1, Math.round((idx + 1) / totalPoints * 100)) + '%';
    }

    function showQuestion(idx) {
      var q = demoQs[idx];
      labelEl.innerHTML  = 'Essai &mdash; ' + (idx + 1) + '&nbsp;/&nbsp;' + totalPoints + ' points';
      fillEl.style.width = pct(idx);
      questionEl.textContent = q.q;
      ctxEl.textContent      = q.ctx || '';
      resultEl.style.display = 'none';
      for (var i = 0; i < optEls.length; i++) {
        optEls[i].textContent = q.o[i];
        optEls[i].disabled    = false;
        optEls[i].className   = 'pw-opt';
      }
      answering = false;
    }

    function revealUnlock() {
      var remaining = totalPoints - totalQs;
      labelEl.innerHTML =
        totalQs + '&nbsp;/&nbsp;' + totalPoints + ' points maîtrisés dans l\'essai';
      document.getElementById('pw-sep').style.display = 'block';
      var sub = document.getElementById('pw-sub');
      sub.innerHTML =
        remaining + ' points vous attendent encore &mdash;' +
        ' Quiz SRS &middot; Flashcards &middot; Défi chrono &middot; Référence<br>' +
        'Accès permanent, fonctionne hors ligne.';
      document.getElementById('pw-unlock').classList.add('visible');
      document.getElementById('pw-unlock').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function handleAnswer(btnIdx) {
      if (answering) return;
      answering = true;

      var q  = demoQs[currentIdx];
      var ok = btnIdx === q.a;

      for (var i = 0; i < optEls.length; i++) optEls[i].disabled = true;
      optEls[q.a].classList.add('correct');
      if (!ok) optEls[btnIdx].classList.add('wrong');

      resultLbl.textContent = ok ? '✓ Correct !' : '✗ Pas tout à fait.';
      resultLbl.style.color = ok ? '#4ade80' : '#f87171';
      resultExp.textContent = q.e;
      resultEl.style.display = 'block';

      setTimeout(function () {
        currentIdx++;
        if (currentIdx < totalQs) {
          showQuestion(currentIdx);
        } else {
          revealUnlock();
        }
      }, 1400);
    }

    for (var j = 0; j < optEls.length; j++) {
      optEls[j].addEventListener('click', (function (btnIdx) {
        return function () { handleAnswer(btnIdx); };
      })(j));
    }

    wireCodeInput();
  }

  // ── Saisie du code (partagé) ──────────────────────────────────────────────
  function wireCodeInput() {
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
