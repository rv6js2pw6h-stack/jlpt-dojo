/* ============================================================
   N2 道場 ・ Flashcards — moteur de l'app
   Source : 195 flashcards N2 (window.DATA). Aucune autre donnée.
   ============================================================ */
(() => {
"use strict";
const D = window.DATA;
const POINTS = D.points;
const CATS = D.cats;
const NDAYS = D.meta.days;
const BYID = Object.fromEntries(POINTS.map(p => [p.id, p]));
const KEY = "n2flash.v1";

/* ---------- état persistant ---------- */
const todayStr = () => new Date().toISOString().slice(0, 10);
const blank = () => ({
  xp: 0, streak: 0, last: null,
  days: {}, pts: {}, speedBest: 0, created: todayStr()
});
let S = load();
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); return s && s.pts ? s : blank(); }
  catch { return blank(); }
}
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }
function ps(id) { return S.pts[id] || (S.pts[id] = { box: 0, seen: false, ok: 0, ko: 0, due: 0 }); }
function ds(d) { return S.days[d] || (S.days[d] = { studied: false, best: 0, stars: 0, done: false }); }

function touchStreak() {
  const t = todayStr();
  if (S.last === t) return;
  const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
  S.streak = (S.last === y) ? S.streak + 1 : 1;
  S.last = t; save();
}
function addXP(n) { S.xp += n; save(); }
const level = () => Math.floor(S.xp / 500) + 1;

/* points par jour */
const dayPoints = d => POINTS.filter(p => p.day === d).sort((a, b) => a.n - b.n);
const masteredCount = () => POINTS.filter(p => (S.pts[p.id]?.box || 0) >= 3).length;
function dayUnlocked(d) {
  if (d <= 1) return true;
  return ds(d - 1).studied || ds(d - 1).done;
}
const currentDay = () => {
  for (let d = 1; d <= NDAYS; d++) if (!ds(d).done) return d;
  return NDAYS;
};

/* ---------- utils ---------- */
const $ = (s, r = document) => r.querySelector(s);
const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = (s) => (s || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
const catColor = c => CATS[c]?.color || "#888";
const catLabel = c => CATS[c]?.label || c;

/* options de quiz mélangées (la bonne réponse = index a) */
function mixQ(q) {
  const correct = q.o[q.a];
  const opts = shuffle(q.o);
  return { ...q, o: opts, a: opts.indexOf(correct), _correct: correct };
}

function toast(msg) {
  let t = $(".toast"); if (!t) { t = el(`<div class="toast"></div>`); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 1600);
}
function confetti() {
  const c = el(`<div class="confetti"></div>`);
  const cols = ["#ff5d6c", "#ffd24d", "#43c97f", "#5b9cff", "#c98cff"];
  for (let i = 0; i < 80; i++) {
    const p = el(`<i></i>`);
    p.style.left = Math.random() * 100 + "%";
    p.style.background = cols[i % cols.length];
    p.style.animationDuration = (1.4 + Math.random() * 1.6) + "s";
    p.style.animationDelay = (Math.random() * .3) + "s";
    c.appendChild(p);
  }
  document.body.appendChild(c); setTimeout(() => c.remove(), 3200);
}

/* ---------- header ---------- */
function header() {
  return `<header class="topbar">
    <button class="brand" onclick="NAV.go('home')">
      <span class="mark">N2</span>
      <span class="nm">道場<small>Flashcards · 14 jours</small></span>
    </button>
    <div class="spacer"></div>
    <div class="stat-pill" title="Série de jours consécutifs">🔥 <b>${S.streak}</b></div>
    <div class="stat-pill" title="Niveau et XP"><span class="lab">Niv.</span> <b>${level()}</b></div>
  </header>`;
}

/* ======================================================
   ROUTER
   ====================================================== */
const app = $("#app");
const NAV = {
  stack: [],
  go(view, arg) { this.stack.push([view, arg]); render(view, arg); window.scrollTo(0, 0); },
  back() { this.stack.pop(); const [v, a] = this.stack[this.stack.length - 1] || ["home"]; render(v, a); window.scrollTo(0, 0); }
};
window.NAV = NAV;

function render(view, arg) {
  const body = VIEWS[view] ? VIEWS[view](arg) : VIEWS.home();
  app.innerHTML = header() + `<main class="wrap">${body}</main>`;
  if (AFTER) { const f = AFTER; AFTER = null; f(); }
}
let AFTER = null;

/* ======================================================
   VIEWS
   ====================================================== */
const VIEWS = {};

/* ---------- HOME / PLAN ---------- */
VIEWS.home = () => {
  const total = POINTS.length, mast = masteredCount();
  const pct = Math.round(mast / total * 100);
  const cur = currentDay();
  const daysHtml = [];
  for (let d = 1; d <= NDAYS; d++) {
    const dp = dayPoints(d), st = ds(d), unlocked = dayUnlocked(d);
    const seen = dp.filter(p => S.pts[p.id]?.seen).length;
    const prog = Math.round(seen / dp.length * 100);
    const stars = "★★★".slice(0, st.stars) + "☆☆☆".slice(0, 3 - st.stars);
    const sample = dp.slice(0, 3).map(p => p.g.replace(/[〜～]/g, "")).join(" · ");
    daysHtml.push(`<button class="day ${unlocked ? "" : "locked"} ${d === cur ? "current" : ""}"
        onclick="${unlocked ? `NAV.go('day',${d})` : `NAV.lock()`}">
      ${st.done ? `<span class="badge-ok">✓</span>` : (unlocked ? "" : `<span class="lock">🔒</span>`)}
      <div class="dh"><span class="dn">Jour ${d}</span></div>
      <div class="dt">${dp.length} points</div>
      <div class="dc jp">${esc(sample)}…</div>
      <div class="pbar"><i style="width:${prog}%"></i></div>
      <div class="stars" style="color:var(--gold)">${st.stars ? stars : `<span style="color:var(--mut2)">${prog}% vus</span>`}</div>
    </button>`);
  }
  const reviewDue = POINTS.filter(p => { const x = S.pts[p.id]; return x && x.seen && x.due <= Date.now() && x.box < 5; }).length;
  return `
  <section class="hero">
    <h1>Apprends les <b>195 points</b> de grammaire N2<br>en <b>14 jours</b>.</h1>
    <p>Flashcards officielles JLPT · phrases à trous · sens · nuances.</p>
    <div class="bigbar"><i style="width:${pct}%"></i></div>
    <div class="meta"><span>${mast}/${total} points maîtrisés</span><span>${pct}%</span></div>
    <button class="cta" onclick="NAV.go('day',${cur})">▶ ${ds(cur).studied ? "Continuer" : "Commencer"} le Jour ${cur}</button>
  </section>

  <div class="modes">
    <button class="mode" onclick="NAV.go('review')"><div class="e">🔁</div><div class="t">Révision</div><div class="s">${reviewDue} à revoir</div></button>
    <button class="mode" onclick="NAV.go('speed')"><div class="e">⚡</div><div class="t">Défi chrono</div><div class="s">record ${S.speedBest}</div></button>
    <button class="mode" onclick="NAV.go('ref')"><div class="e">📖</div><div class="t">Référence</div><div class="s">195 fiches</div></button>
  </div>

  <div class="section-title">Ton plan sur 14 jours</div>
  <div class="days">${daysHtml.join("")}</div>`;
};
NAV.lock = () => toast("Termine d'abord le jour précédent 🔒");

/* ---------- DAY ---------- */
VIEWS.day = (d) => {
  const dp = dayPoints(d), st = ds(d);
  const rows = dp.map(p => `
    <button class="prow" onclick="NAV.go('detail','${p.id}')">
      <span class="cat-dot" style="background:${catColor(p.c)}"></span>
      <span class="pg jp">${esc(p.g)}</span>
      <span class="pm">${esc(p.m)}</span>
      ${S.pts[p.id]?.box >= 3 ? `<span class="chip" style="color:var(--green)">maîtrisé</span>` : (S.pts[p.id]?.seen ? `<span class="chip">vu</span>` : "")}
    </button>`).join("");
  return `
  <div class="page-head"><button class="back" onclick="NAV.go('home')">← Plan</button>
    <h2>Jour ${d} <span style="color:var(--mut);font-weight:600;font-size:.9rem">· ${dp.length} points</span></h2></div>
  <div class="row2">
    <button class="btn" onclick="NAV.go('study',${d})">🃏 Étudier (flashcards)</button>
    <button class="btn sec" onclick="NAV.go('quiz',{day:${d}})">📝 Quiz du jour</button>
  </div>
  ${st.stars ? `<p style="color:var(--mut);font-size:.85rem;margin:-.3rem .2rem 0">Meilleur score : <b style="color:var(--gold)">${st.best}%</b> ${"★".repeat(st.stars)}</p>` : ""}
  <div class="section-title">Les points du jour</div>
  <div class="plist">${rows}</div>`;
};

/* ---------- STUDY (flashcards) ---------- */
VIEWS.study = (d) => {
  const dp = dayPoints(d);
  STUDY = { d, list: dp, i: 0 };
  AFTER = () => renderCard();
  return `<div class="page-head"><button class="back" onclick="NAV.go('day',${d})">← Jour ${d}</button>
      <h2>Flashcards</h2></div>
    <div class="fc-nav"><span class="count" id="fc-count"></span><span class="fc-prog"><i id="fc-bar"></i></span></div>
    <div class="fc-wrap"><div class="flashcard" id="fc" onclick="STUDYAPI.flip()"></div></div>
    <div class="row2">
      <button class="btn sec" onclick="STUDYAPI.again()">↻ À revoir</button>
      <button class="btn" onclick="STUDYAPI.known()">✓ Je connais</button>
    </div>`;
};
let STUDY = null;
function renderCard() {
  const { list, i } = STUDY; const p = list[i];
  $("#fc-count").textContent = `${i + 1} / ${list.length}`;
  $("#fc-bar").style.width = (i / list.length * 100) + "%";
  const exs = p.ex.map(e => `<div class="b-ex"><div class="jp">${esc(e.jp)}</div>${e.r ? `<div class="rd jp">${esc(e.r)}</div>` : ""}<div class="tr">${esc(e.fr)}</div></div>`).join("");
  const fc = $("#fc"); fc.classList.remove("flip");
  fc.innerHTML = `
    <div class="face front">
      <span class="fc-cat" style="background:${catColor(p.c)}22;color:${catColor(p.c)}">${catLabel(p.c)}</span>
      <span class="fc-num">#${p.n}</span>
      <div class="fc-form jp">${esc(p.g)}</div>
      <div class="fc-romaji">${esc(p.r)}</div>
      <div class="fc-tap">tap pour retourner ↻</div>
    </div>
    <div class="face back">
      <div class="b-m">${esc(p.m)}</div>
      <div class="b-sec"><div class="b-lab">Construction</div><div class="b-f jp">${esc(p.f)}</div></div>
      <div class="b-sec"><div class="b-lab">Exemple</div>${exs}</div>
      ${p.note ? `<div class="b-note">💡 ${esc(p.note)}</div>` : ""}
    </div>`;
}
const STUDYAPI = {
  flip() { $("#fc")?.classList.toggle("flip"); },
  advance(known) {
    const p = STUDY.list[STUDY.i]; const x = ps(p.id);
    x.seen = true;
    if (known) { x.box = Math.min(5, (x.box || 0) + 1); x.due = Date.now() + 864e5; }
    else { x.box = Math.max(0, (x.box || 0)); x.due = Date.now(); }
    addXP(known ? 5 : 2);
    STUDY.i++;
    if (STUDY.i >= STUDY.list.length) {
      const st = ds(STUDY.d); st.studied = true; save(); touchStreak();
      toast("Jour étudié ✓ — prochain jour débloqué");
      NAV.go("day", STUDY.d);
    } else { save(); renderCard(); }
  },
  known() { this.advance(true); },
  again() { this.advance(false); }
};
window.STUDYAPI = STUDYAPI;

/* ---------- QUIZ ---------- */
/* arg: {day} ou {ids:[...], title, kind:'review'|'day'} */
VIEWS.quiz = (arg) => {
  let pool, title, kind = arg.kind || (arg.day ? "day" : "mix");
  if (arg.day) { pool = dayPoints(arg.day); title = `Quiz · Jour ${arg.day}`; }
  else if (arg.ids) { pool = arg.ids.map(id => BYID[id]); title = arg.title || "Quiz"; }
  else { pool = POINTS; title = "Quiz"; }
  // construit la liste de questions : 1 question variée par point (+ borne)
  let qs = [];
  pool.forEach(p => { const q = p.qs[Math.random() * p.qs.length | 0]; qs.push(mixQ({ ...q, _pid: p.id })); });
  qs = shuffle(qs);
  const cap = kind === "day" ? qs.length : Math.min(qs.length, 20);
  qs = qs.slice(0, cap);
  QUIZ = { qs, i: 0, ok: 0, title, kind, day: arg.day, back: arg.day ? ["day", arg.day] : ["home"] };
  AFTER = () => renderQuestion();
  return `<div id="quizroot"></div>`;
};
let QUIZ = null;
function renderQuestion() {
  const Q = QUIZ; const root = $("#quizroot");
  if (Q.i >= Q.qs.length) return finishQuiz();
  const q = Q.qs[Q.i];
  const tag = { fill: "Phrase à trou", meaning: "Sens", form: "Production" }[q.t] || q.t;
  const qhtml = q.t === "fill" ? esc(q.q).replace("＿＿＿", `<span class="blank">＿＿＿</span>`) : esc(q.q);
  root.innerHTML = `
    <div class="quiz-top">
      <button class="back" onclick="NAV.go('${Q.back[0]}'${Q.back[1] ? "," + JSON.stringify(Q.back[1]) : ""})">✕</button>
      <span class="qp"><i style="width:${Q.i / Q.qs.length * 100}%"></i></span>
      <span class="score">${Q.ok}✓</span>
    </div>
    <div class="qcard">
      <span class="qtag ${q.t}">${tag}</span>
      <div class="qq jp">${qhtml}</div>
      ${q.fr ? `<div class="qfr">« ${esc(q.fr)} »</div>` : ""}
      <div class="opts" id="opts">
        ${q.o.map((o, k) => `<button class="opt jp" data-k="${k}" onclick="QUIZAPI.answer(${k})">
            <span class="k">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("")}
      </div>
      <div class="expl" id="expl"></div>
      <button class="btn wide qnext hidden" id="qnext" onclick="QUIZAPI.next()">Suivant →</button>
    </div>`;
}
const QUIZAPI = {
  answer(k) {
    const Q = QUIZ; const q = Q.qs[Q.i];
    const opts = [...document.querySelectorAll("#opts .opt")];
    opts.forEach(o => o.disabled = true);
    const correct = q.a;
    const good = k === correct;
    opts[correct].classList.add("correct");
    if (!good) opts[k].classList.add("wrong");
    const x = ps(q._pid);
    if (good) { Q.ok++; x.ok++; x.box = Math.min(5, (x.box || 0) + 1); x.due = Date.now() + boxDelay(x.box); addXP(10); }
    else { x.ko++; x.box = Math.max(0, (x.box || 1) - 1); x.due = Date.now(); }
    x.seen = true; save();
    const sc = $(".quiz-top .score"); if (sc) sc.textContent = Q.ok + "✓";
    const ex = $("#expl"); ex.innerHTML = `<b>${good ? "✓ Correct" : "✗ " + esc(q._correct)}</b> — ${esc(q.e)}`;
    ex.classList.add("show");
    $("#qnext").classList.remove("hidden");
  },
  next() { QUIZ.i++; renderQuestion(); }
};
window.QUIZAPI = QUIZAPI;
function boxDelay(b) { return [0, 6e4, 864e5, 3 * 864e5, 7 * 864e5, 16 * 864e5][b] || 864e5; }

function finishQuiz() {
  const Q = QUIZ; const pct = Math.round(Q.ok / Q.qs.length * 100);
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  let bonus = 0;
  if (Q.kind === "day" && Q.day) {
    const st = ds(Q.day);
    if (pct > st.best) st.best = pct;
    st.stars = Math.max(st.stars, stars);
    if (pct >= 50 && !st.done) { st.done = true; bonus = 100; addXP(100); }
    st.studied = true; save(); touchStreak();
  }
  if (stars === 3) confetti();
  const em = pct >= 90 ? "🏆" : pct >= 70 ? "🎉" : pct >= 50 ? "👍" : "💪";
  const msg = pct >= 90 ? "Parfait !" : pct >= 70 ? "Bien joué !" : pct >= 50 ? "C'est validé !" : "Continue, ça vient !";
  $("#quizroot").innerHTML = `
    <div class="result">
      <div class="em">${em}</div>
      <h2>${msg}</h2>
      <div class="stars" style="color:var(--gold)">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <div class="sc">${Q.ok} / ${Q.qs.length} bonnes réponses · ${pct}%</div>
      ${bonus ? `<div class="xp">+${bonus + Q.ok * 10} XP · Jour terminé !</div>` : `<div class="xp">+${Q.ok * 10} XP</div>`}
      <div class="row2" style="max-width:380px;margin:1.4rem auto 0">
        <button class="btn sec" onclick="NAV.go('${Q.back[0]}'${Q.back[1] ? "," + JSON.stringify(Q.back[1]) : ""})">${Q.day ? "← Jour " + Q.day : "← Accueil"}</button>
        <button class="btn" onclick="${Q.day ? `NAV.go('quiz',{day:${Q.day}})` : `NAV.go('home')`}">${Q.day ? "↻ Refaire" : "Accueil"}</button>
      </div>
    </div>`;
}

/* ---------- REVIEW (SRS) ---------- */
VIEWS.review = () => {
  const due = POINTS.filter(p => { const x = S.pts[p.id]; return x && x.seen && x.due <= Date.now() && x.box < 5; });
  const pool = due.length ? due : POINTS.filter(p => S.pts[p.id]?.seen);
  if (!pool.length) {
    return `<div class="page-head"><button class="back" onclick="NAV.go('home')">← Plan</button><h2>Révision</h2></div>
      <div class="result"><div class="em">🌱</div><h2>Rien à réviser pour l'instant</h2>
      <div class="sc">Étudie quelques jours, puis reviens : les points vus réapparaîtront ici au bon moment (répétition espacée).</div>
      <div style="margin-top:1.2rem"><button class="btn" onclick="NAV.go('day',${currentDay()})">Aller au Jour ${currentDay()}</button></div></div>`;
  }
  const ids = shuffle(pool).slice(0, 20).map(p => p.id);
  AFTER = () => NAV.stack.pop(); // remplace l'entrée par le quiz
  return VIEWS.quiz({ ids, title: "Révision", kind: "review" });
};

/* ---------- SPEED ---------- */
VIEWS.speed = () => {
  const seen = POINTS.filter(p => S.pts[p.id]?.seen);
  const pool = seen.length >= 8 ? seen : POINTS;
  SPEED = { pool, score: 0, time: 60, q: null, timer: null };
  AFTER = () => startSpeed();
  return `<div class="page-head"><button class="back" onclick="SPEEDAPI.quit()">✕</button><h2>Défi chrono ⚡</h2></div>
    <div class="speed-timer" id="sp-timer">60</div>
    <p style="text-align:center;color:var(--mut);font-size:.85rem;margin-top:-.2rem">Score <b id="sp-score" style="color:var(--gold)">0</b> · record ${S.speedBest}</p>
    <div id="sp-root" style="margin-top:1rem"></div>`;
};
let SPEED = null;
function startSpeed() {
  SPEED.timer = setInterval(() => {
    SPEED.time--; const t = $("#sp-timer"); if (!t) return clearInterval(SPEED.timer);
    t.textContent = SPEED.time; if (SPEED.time <= 10) t.classList.add("warn");
    if (SPEED.time <= 0) endSpeed();
  }, 1000);
  speedNext();
}
function speedNext() {
  const p = SPEED.pool[Math.random() * SPEED.pool.length | 0];
  const q = mixQ({ ...p.qs.find(q => q.t === "meaning" || q.t === "form") || p.qs[0], _pid: p.id });
  SPEED.q = q;
  $("#sp-root").innerHTML = `<div class="qcard">
    <span class="qtag ${q.t}">${q.t === "form" ? "Production" : "Sens"}</span>
    <div class="qq jp">${esc(q.q)}</div>
    <div class="opts">${q.o.map((o, k) => `<button class="opt jp" onclick="SPEEDAPI.answer(${k})"><span class="k">${"ABCD"[k]}</span><span>${esc(o)}</span></button>`).join("")}</div>
  </div>`;
}
const SPEEDAPI = {
  answer(k) {
    if (!SPEED || SPEED.time <= 0) return;
    const good = k === SPEED.q.a;
    if (good) { SPEED.score++; $("#sp-score").textContent = SPEED.score; addXP(2); }
    else { SPEED.time = Math.max(0, SPEED.time - 3); }
    speedNext();
  },
  quit() { if (SPEED?.timer) clearInterval(SPEED.timer); SPEED = null; NAV.go("home"); }
};
window.SPEEDAPI = SPEEDAPI;
function endSpeed() {
  clearInterval(SPEED.timer);
  const rec = SPEED.score > S.speedBest;
  if (rec) { S.speedBest = SPEED.score; save(); confetti(); }
  touchStreak();
  $("#sp-root").innerHTML = `<div class="result">
    <div class="em">${rec ? "🏆" : "⚡"}</div><h2>${rec ? "Nouveau record !" : "Temps écoulé"}</h2>
    <div class="sc">${SPEED.score} bonnes réponses${rec ? "" : ` · record ${S.speedBest}`}</div>
    <div class="row2" style="max-width:380px;margin:1.4rem auto 0">
      <button class="btn sec" onclick="NAV.go('home')">← Accueil</button>
      <button class="btn" onclick="NAV.go('speed')">↻ Rejouer</button></div></div>`;
  $("#sp-timer").textContent = "0";
}

/* ---------- REFERENCE ---------- */
VIEWS.ref = () => {
  AFTER = () => { const i = $("#search"); i && i.addEventListener("input", e => filterRef(e.target.value)); filterRef(""); };
  return `<div class="page-head"><button class="back" onclick="NAV.go('home')">← Plan</button><h2>Référence · 195 fiches</h2></div>
    <input class="search" id="search" placeholder="Rechercher (forme, romaji, sens FR)…" autocomplete="off">
    <div class="plist" id="reflist"></div>`;
};
function filterRef(qs) {
  qs = (qs || "").toLowerCase().trim();
  const list = POINTS.filter(p => !qs ||
    p.g.toLowerCase().includes(qs) || p.r.toLowerCase().includes(qs) ||
    p.m.toLowerCase().includes(qs) || p.me.toLowerCase().includes(qs));
  $("#reflist").innerHTML = list.map(p => `
    <button class="prow" onclick="NAV.go('detail','${p.id}')">
      <span class="cat-dot" style="background:${catColor(p.c)}"></span>
      <span class="pg jp">${esc(p.g)}</span><span class="pm">${esc(p.m)}</span>
      <span class="chip">J${p.day}</span>
    </button>`).join("") || `<p style="color:var(--mut);text-align:center;padding:2rem">Aucun résultat.</p>`;
}

/* ---------- DETAIL ---------- */
VIEWS.detail = (id) => {
  const p = BYID[id];
  const exs = p.ex.map(e => `<div class="b-ex"><div class="jp">${esc(e.jp)}</div>${e.r ? `<div class="rd jp">${esc(e.r)}</div>` : ""}<div class="tr">${esc(e.fr)}</div></div>`).join("");
  const x = S.pts[id];
  return `<div class="page-head"><button class="back" onclick="NAV.back()">← Retour</button>
      <h2 class="jp">${esc(p.g)}</h2></div>
    <div class="qcard">
      <span class="fc-cat" style="position:static;display:inline-block;background:${catColor(p.c)}22;color:${catColor(p.c)};margin-bottom:.6rem">${catLabel(p.c)} · Jour ${p.day}</span>
      <div style="font-size:1.5rem;font-weight:800" class="jp">${esc(p.g)}</div>
      <div class="fc-romaji" style="margin:.2rem 0 .8rem">${esc(p.r)}</div>
      <div class="b-m">${esc(p.m)}</div>
      <div class="b-sec"><div class="b-lab">Construction</div><div class="b-f jp">${esc(p.f)}</div></div>
      <div class="b-sec"><div class="b-lab">Exemples</div>${exs}</div>
      ${p.note ? `<div class="b-note">💡 ${esc(p.note)}</div>` : ""}
      ${x?.seen ? `<div class="b-note" style="color:var(--mut2)">Progression : ${"●".repeat(x.box || 0)}${"○".repeat(5 - (x.box || 0))} ${x.box >= 3 ? "· maîtrisé ✓" : ""}</div>` : ""}
    </div>
    <button class="btn wide" style="margin-top:1rem" onclick="NAV.go('quiz',{ids:['${id}'],title:'Test'})">📝 Me tester sur ce point</button>`;
};

/* ---------- boot ---------- */
render("home");
NAV.stack = [["home"]];
})();
