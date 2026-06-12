/* =========================================================================
   N5 道場 — Boss Battle RPG
   -------------------------------------------------------------------------
   Mini-jeu : enchaîne les questions de grammaire pour terrasser des yokai.
   Bonne réponse → tu attaques (combo, crit, dégâts). Mauvaise → le boss
   riposte. Tout est dessiné au canvas (aucune image externe, 100% hors-ligne).

   Branché par app.js :  BossBattle.mount(container, api)
     api = { grammar, byId, shuffle, esc, CATS, level, record, isDemo, demoQs, buyLink, go }
   ========================================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ état */
  let API = null;
  let ROOT = null;
  let raf = 0;
  let battle = null;

  const W = 600, H = 340;                 // espace logique du canvas
  const BUF_SCALE = 2;                     // buffer perso en 2× (textures nettes)
  const PROG_KEY = "n5boss.progress.v1";

  /* --------------------------------------------------------- persistance */
  function loadProg() {
    try { return JSON.parse(localStorage.getItem(PROG_KEY)) || { cleared: [], best: {} }; }
    catch (e) { return { cleared: [], best: {} }; }
  }
  function saveProg(p) { try { localStorage.setItem(PROG_KEY, JSON.stringify(p)); } catch (e) {} }
  function isCleared(id) { return loadProg().cleared.indexOf(id) >= 0; }
  function markCleared(id, turns) {
    const p = loadProg();
    if (p.cleared.indexOf(id) < 0) p.cleared.push(id);
    if (!p.best) p.best = {};
    if (p.best[id] == null || turns < p.best[id]) p.best[id] = turns;
    saveProg(p);
  }

  /* --------------------------------------------------------------- utils */
  const TAU = Math.PI * 2;
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function circle(c, x, y, r) { c.beginPath(); c.arc(x, y, r, 0, TAU); c.fill(); }
  function ell(c, x, y, rx, ry, rot) { c.beginPath(); c.ellipse(x, y, rx, ry, rot || 0, 0, TAU); c.fill(); }
  function rr(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }

  /* ============================================================ AUDIO SFX */
  let actx = null;
  function muted() { try { return localStorage.getItem("n5boss.mute") === "1"; } catch (e) { return false; } }
  function setMuted(v) { try { localStorage.setItem("n5boss.mute", v ? "1" : "0"); } catch (e) {} }
  function ac() { if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} } return actx; }
  function tone(freq, t0, dur, type, vol, sweepTo) {
    const a = ac(); if (!a || muted()) return;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type || "sine"; o.frequency.setValueAtTime(freq, a.currentTime + t0);
    if (sweepTo) o.frequency.exponentialRampToValueAtTime(sweepTo, a.currentTime + t0 + dur);
    g.gain.setValueAtTime(0.0001, a.currentTime + t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, a.currentTime + t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + t0 + dur);
    o.connect(g); g.connect(a.destination);
    o.start(a.currentTime + t0); o.stop(a.currentTime + t0 + dur + 0.02);
  }
  function noise(t0, dur, vol, hp) {
    const a = ac(); if (!a || muted()) return;
    const n = Math.floor(a.sampleRate * dur);
    const buf = a.createBuffer(1, n, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = a.createBufferSource(); src.buffer = buf;
    const g = a.createGain(); g.gain.value = vol || 0.2;
    const f = a.createBiquadFilter(); f.type = "highpass"; f.frequency.value = hp || 800;
    src.connect(f); f.connect(g); g.connect(a.destination);
    src.start(a.currentTime + t0);
  }
  const SFX = {
    slash() { noise(0, 0.18, 0.22, 1200); tone(880, 0, 0.12, "triangle", 0.12, 220); },
    hit() { tone(330, 0, 0.1, "square", 0.16, 110); noise(0, 0.08, 0.12, 400); },
    crit() { noise(0, 0.22, 0.28, 1500); tone(1320, 0, 0.18, "sawtooth", 0.16, 330); tone(660, 0.04, 0.2, "square", 0.1); },
    hurt() { tone(200, 0, 0.22, "sawtooth", 0.2, 70); noise(0, 0.12, 0.1, 300); },
    select() { tone(520, 0, 0.06, "square", 0.08); },
    victory() { [523, 659, 784, 1046].forEach((f, i) => tone(f, i * 0.1, 0.3, "triangle", 0.16)); },
    defeat() { [392, 330, 262, 196].forEach((f, i) => tone(f, i * 0.14, 0.4, "sawtooth", 0.16)); },
    appear() { tone(110, 0, 0.5, "sawtooth", 0.18, 55); tone(220, 0.05, 0.4, "square", 0.08); },
  };

  /* ========================================================== DESSINS BOSS
     Chaque boss : draw(c, t, fx)  — repère logique 600x340, dessiné statique
     (le flottement / l'esquive sont appliqués au blit). t = secondes.        */

  // — 狸 TANUKI ——————————————————————————————————————————————
  function drawTanuki(c, t) {
    const cx = 300, cy = 175;
    const sway = Math.sin(t * 1.6) * 6;
    // feuille sur la tête
    c.save();
    c.translate(cx + 6, cy - 150);
    c.rotate(Math.sin(t * 1.4) * 0.18 - 0.2);
    c.fillStyle = "#c97f3a";
    c.beginPath();
    c.moveTo(0, 0); c.quadraticCurveTo(40, -30, 64, -6);
    c.quadraticCurveTo(34, 4, 30, 34); c.quadraticCurveTo(10, 18, 0, 0);
    c.fill();
    c.strokeStyle = "#9c5e22"; c.lineWidth = 2;
    c.beginPath(); c.moveTo(6, 6); c.lineTo(44, -8); c.stroke();
    c.restore();
    // corps
    c.fillStyle = "#7c5234"; ell(c, cx, cy + 30, 96, 92);
    c.fillStyle = "#e8c79b"; ell(c, cx, cy + 46, 60, 64);   // ventre
    // pattes
    c.fillStyle = "#5d3c25";
    ell(c, cx - 60, cy + 96, 24, 16); ell(c, cx + 60, cy + 96, 24, 16);
    // bras
    c.fillStyle = "#6f4a2e";
    ell(c, cx - 86, cy + 18, 20, 34, -0.3); ell(c, cx + 86, cy + 18, 20, 34, 0.3);
    // tête
    c.fillStyle = "#7c5234"; circle(c, cx, cy - 70, 78);
    // oreilles
    c.fillStyle = "#5d3c25"; circle(c, cx - 58, cy - 124, 22); circle(c, cx + 58, cy - 124, 22);
    c.fillStyle = "#3a2415"; circle(c, cx - 58, cy - 122, 11); circle(c, cx + 58, cy - 122, 11);
    // masque (taches yeux)
    c.fillStyle = "#2c1a0e";
    ell(c, cx - 30, cy - 66, 26, 30, -0.25); ell(c, cx + 30, cy - 66, 26, 30, 0.25);
    // museau
    c.fillStyle = "#efd7b3"; ell(c, cx, cy - 38, 40, 30);
    // yeux
    c.fillStyle = "#fff"; circle(c, cx - 30, cy - 70, 13); circle(c, cx + 30, cy - 70, 13);
    c.fillStyle = "#1a120a";
    circle(c, cx - 28 + sway * 0.3, cy - 68, 7); circle(c, cx + 32 + sway * 0.3, cy - 68, 7);
    c.fillStyle = "#fff"; circle(c, cx - 26, cy - 71, 2.4); circle(c, cx + 34, cy - 71, 2.4);
    // nez + bouche
    c.fillStyle = "#241008"; ell(c, cx, cy - 44, 10, 7);
    c.strokeStyle = "#241008"; c.lineWidth = 3; c.lineCap = "round";
    c.beginPath(); c.moveTo(cx, cy - 40); c.quadraticCurveTo(cx - 12, cy - 28, cx - 20, cy - 32);
    c.moveTo(cx, cy - 40); c.quadraticCurveTo(cx + 12, cy - 28, cx + 20, cy - 32); c.stroke();
  }

  // — 河童 KAPPA ——————————————————————————————————————————————
  function drawKappa(c, t) {
    const cx = 300, cy = 180;
    const bob = Math.sin(t * 2) * 4;
    // carapace (dos)
    c.fillStyle = "#2f6b4a"; ell(c, cx, cy + 40, 100, 86);
    c.fillStyle = "#27583e";
    c.save(); c.beginPath(); c.ellipse(cx, cy + 40, 100, 86, 0, 0, TAU); c.clip();
    for (let i = -2; i <= 2; i++) { c.beginPath(); c.moveTo(cx + i * 34, cy - 40); c.lineTo(cx + i * 34, cy + 130); c.lineWidth = 3; c.strokeStyle = "#1f4630"; c.stroke(); }
    c.restore();
    // corps
    c.fillStyle = "#4f9e74"; ell(c, cx, cy + 26, 76, 80);
    c.fillStyle = "#bfe6cf"; ell(c, cx, cy + 40, 44, 52);   // plastron
    // bras
    c.fillStyle = "#458b66"; ell(c, cx - 78, cy + 10, 18, 30, -0.4); ell(c, cx + 78, cy + 10, 18, 30, 0.4);
    // tête
    c.fillStyle = "#5aa87e"; circle(c, cx, cy - 60, 70);
    // assiette (sara) sur la tête + reflet d'eau
    c.fillStyle = "#d9efe3"; ell(c, cx, cy - 118, 50, 20);
    c.fillStyle = "#a9d8c2"; ell(c, cx, cy - 116, 38, 12);
    c.fillStyle = "rgba(255,255,255," + (0.5 + Math.sin(t * 3) * 0.25) + ")";
    ell(c, cx - 10, cy - 119, 14, 4, -0.2);
    // cheveux verts autour de l'assiette
    c.fillStyle = "#3c8159";
    for (let i = 0; i < 9; i++) { const a = (i / 8) * Math.PI - Math.PI; c.save(); c.translate(cx + Math.cos(a) * 52, cy - 100 + Math.sin(a) * 16); c.rotate(a + Math.PI / 2); ell(c, 0, 0, 5, 12); c.restore(); }
    // bec
    c.fillStyle = "#e0a32b"; c.beginPath();
    c.moveTo(cx - 40, cy - 48); c.quadraticCurveTo(cx, cy - 30, cx + 40, cy - 48);
    c.quadraticCurveTo(cx, cy - 18, cx - 40, cy - 48); c.fill();
    c.strokeStyle = "#b9821b"; c.lineWidth = 2; c.beginPath(); c.moveTo(cx - 38, cy - 47); c.quadraticCurveTo(cx, cy - 38, cx + 38, cy - 47); c.stroke();
    // yeux globuleux
    c.fillStyle = "#fff"; circle(c, cx - 30, cy - 74, 18); circle(c, cx + 30, cy - 74, 18);
    c.strokeStyle = "#2f6b4a"; c.lineWidth = 2; c.beginPath(); c.arc(cx - 30, cy - 74, 18, 0, TAU); c.arc(cx + 30, cy - 74, 18, 0, TAU); c.stroke();
    c.fillStyle = "#111"; circle(c, cx - 28 + bob * 0.4, cy - 72, 8); circle(c, cx + 32 + bob * 0.4, cy - 72, 8);
    c.fillStyle = "#fff"; circle(c, cx - 26, cy - 75, 2.6); circle(c, cx + 34, cy - 75, 2.6);
  }

  // — 天狗 TENGU ——————————————————————————————————————————————
  function drawTengu(c, t) {
    const cx = 300, cy = 168;
    const sway = Math.sin(t * 1.7) * 4;
    // crinière / cheveux blancs
    c.fillStyle = "#e9edf2";
    for (let i = 0; i < 11; i++) { const a = (i / 10) * Math.PI - Math.PI; const r = 96; c.save(); c.translate(cx + Math.cos(a) * 70, cy - 40 + Math.sin(a) * 70); c.rotate(a + Math.PI / 2); ell(c, 0, 0, 9, 30); c.restore(); }
    // visage rouge
    c.fillStyle = "#b23123";
    c.beginPath(); c.ellipse(cx, cy - 30, 80, 92, 0, 0, TAU); c.fill();
    c.fillStyle = "#9c281b"; ell(c, cx, cy - 70, 70, 36); // front
    // sourcils blancs broussailleux
    c.fillStyle = "#f2f4f8";
    c.save(); c.translate(cx - 34, cy - 52); c.rotate(-0.25); ell(c, 0, 0, 30, 11); c.restore();
    c.save(); c.translate(cx + 34, cy - 52); c.rotate(0.25); ell(c, 0, 0, 30, 11); c.restore();
    // yeux féroces
    c.fillStyle = "#fff";
    c.save(); c.translate(cx - 30, cy - 34); c.rotate(0.18); ell(c, 0, 0, 18, 11); c.restore();
    c.save(); c.translate(cx + 30, cy - 34); c.rotate(-0.18); ell(c, 0, 0, 18, 11); c.restore();
    c.fillStyle = "#1a0d08";
    circle(c, cx - 26 + sway * 0.3, cy - 34, 6.5); circle(c, cx + 26 + sway * 0.3, cy - 34, 6.5);
    // long nez
    c.fillStyle = "#c4392a";
    c.beginPath(); c.moveTo(cx - 16, cy - 18); c.quadraticCurveTo(cx - 8, cy + 70, cx + 4, cy + 76);
    c.quadraticCurveTo(cx + 22, cy + 64, cx + 16, cy - 18);
    c.quadraticCurveTo(cx, cy - 6, cx - 16, cy - 18); c.fill();
    c.fillStyle = "#a82c1f"; ell(c, cx + 2, cy + 70, 11, 8);
    // moustache / barbe blanche
    c.strokeStyle = "#eef1f6"; c.lineWidth = 6; c.lineCap = "round";
    c.beginPath();
    c.moveTo(cx - 26, cy + 30); c.quadraticCurveTo(cx - 60, cy + 40, cx - 70, cy + 70);
    c.moveTo(cx + 26, cy + 30); c.quadraticCurveTo(cx + 60, cy + 40, cx + 70, cy + 70); c.stroke();
    // bouche serrée
    c.strokeStyle = "#2a0f09"; c.lineWidth = 4;
    c.beginPath(); c.moveTo(cx - 26, cy + 44); c.quadraticCurveTo(cx, cy + 36, cx + 26, cy + 44); c.stroke();
    // petit tokin (chapeau) sur le front
    c.fillStyle = "#2b2f3a"; circle(c, cx, cy - 92, 11);
  }

  // — 鬼 ONI ————————————————————————————————————————————————
  function drawOni(c, t, fx) {
    const cx = 300, cy = 172;
    const breath = Math.sin(t * 2.4) * 3;
    const low = fx && fx.lowHP;
    if (low) { // aura de rage
      c.save(); c.globalAlpha = 0.4 + Math.sin(t * 8) * 0.15;
      const g = c.createRadialGradient(cx, cy - 20, 30, cx, cy - 20, 150);
      g.addColorStop(0, "rgba(255,80,60,.5)"); g.addColorStop(1, "rgba(255,80,60,0)");
      c.fillStyle = g; circle(c, cx, cy - 20, 150); c.restore();
    }
    // cheveux sauvages
    c.fillStyle = "#241a2e";
    for (let i = 0; i < 13; i++) { const a = (i / 12) * Math.PI - Math.PI; c.save(); c.translate(cx + Math.cos(a) * 76, cy - 56 + Math.sin(a) * 60); c.rotate(a + Math.PI / 2 + Math.sin(t * 3 + i) * 0.1); ell(c, 0, 0, 8, 34); c.restore(); }
    // épaules / torse
    c.fillStyle = "#a82d22"; ell(c, cx, cy + 96, 110, 60);
    // tête
    c.fillStyle = "#c93a2b"; circle(c, cx, cy - 18, 86);
    c.fillStyle = "#b5301f"; ell(c, cx, cy - 52, 76, 40);
    // cornes
    c.fillStyle = "#e8dcc0";
    c.save(); c.translate(cx - 50, cy - 86); c.rotate(-0.5); c.beginPath(); c.moveTo(-10, 0); c.quadraticCurveTo(-4, -46, 12, -2); c.fill(); c.restore();
    c.save(); c.translate(cx + 50, cy - 86); c.rotate(0.5); c.beginPath(); c.moveTo(10, 0); c.quadraticCurveTo(4, -46, -12, -2); c.fill(); c.restore();
    c.fillStyle = "#cfc09c";
    c.save(); c.translate(cx - 50, cy - 86); c.rotate(-0.5); ell(c, 0, -2, 6, 5); c.restore();
    c.save(); c.translate(cx + 50, cy - 86); c.rotate(0.5); ell(c, 0, -2, 6, 5); c.restore();
    // sourcils
    c.fillStyle = "#1c1326";
    c.save(); c.translate(cx - 34, cy - 36); c.rotate(0.3); ell(c, 0, 0, 26, 8); c.restore();
    c.save(); c.translate(cx + 34, cy - 36); c.rotate(-0.3); ell(c, 0, 0, 26, 8); c.restore();
    // yeux jaunes brillants
    c.fillStyle = "#ffd24d";
    c.save(); c.translate(cx - 30, cy - 22); c.rotate(0.2); ell(c, 0, 0, 17, 12); c.restore();
    c.save(); c.translate(cx + 30, cy - 22); c.rotate(-0.2); ell(c, 0, 0, 17, 12); c.restore();
    c.fillStyle = "#1a0d04"; circle(c, cx - 28 + breath, cy - 22, 6); circle(c, cx + 32 + breath, cy - 22, 6);
    // bouche + crocs
    c.fillStyle = "#3a0f0a"; c.beginPath(); c.moveTo(cx - 44, cy + 18); c.quadraticCurveTo(cx, cy + 54, cx + 44, cy + 18); c.quadraticCurveTo(cx, cy + 34, cx - 44, cy + 18); c.fill();
    c.fillStyle = "#fff";
    c.beginPath(); c.moveTo(cx - 30, cy + 22); c.lineTo(cx - 22, cy + 40); c.lineTo(cx - 14, cy + 22); c.fill();
    c.beginPath(); c.moveTo(cx + 30, cy + 22); c.lineTo(cx + 22, cy + 40); c.lineTo(cx + 14, cy + 22); c.fill();
  }

  // — 八岐大蛇 OROCHI ———————————————————————————————————————————
  function drawOrochi(c, t, fx) {
    const cx = 300, cyBase = 320;
    const heads = 5;
    const rage = fx && fx.lowHP ? 1.6 : 1;
    // brume violette
    c.save(); c.globalAlpha = 0.5;
    const g = c.createRadialGradient(cx, 150, 20, cx, 150, 200);
    g.addColorStop(0, "rgba(150,90,200,.35)"); g.addColorStop(1, "rgba(150,90,200,0)");
    c.fillStyle = g; circle(c, cx, 150, 200); c.restore();
    for (let i = 0; i < heads; i++) {
      const spread = (i - (heads - 1) / 2);
      const baseX = cx + spread * 18;
      const sway = Math.sin(t * (1.4 + i * 0.18) + i) * (26 + Math.abs(spread) * 6) * rage;
      const tipX = cx + spread * 78 + sway;
      const tipY = 80 + Math.abs(spread) * 16 + Math.cos(t * 1.6 + i) * 10;
      const midX = (baseX + tipX) / 2 + sway * 0.4;
      const midY = (cyBase + tipY) / 2 - 30;
      // cou (bande verte épaisse)
      c.lineCap = "round";
      c.strokeStyle = "#3f7d3a"; c.lineWidth = 30;
      c.beginPath(); c.moveTo(baseX, cyBase); c.quadraticCurveTo(midX, midY, tipX, tipY); c.stroke();
      c.strokeStyle = "#67a83f"; c.lineWidth = 18;
      c.beginPath(); c.moveTo(baseX, cyBase); c.quadraticCurveTo(midX, midY, tipX, tipY); c.stroke();
      // ventre clair
      c.strokeStyle = "#b8d98a"; c.lineWidth = 6;
      c.beginPath(); c.moveTo(baseX, cyBase); c.quadraticCurveTo(midX, midY, tipX, tipY); c.stroke();
      // crinière violette
      const ang = Math.atan2(tipY - midY, tipX - midX);
      c.fillStyle = "#7b4fb0";
      for (let k = -2; k <= 2; k++) { c.save(); c.translate(tipX, tipY); c.rotate(ang + Math.PI + k * 0.4); ell(c, -14, 0, 14, 6); c.restore(); }
      // tête
      c.save(); c.translate(tipX, tipY); c.rotate(ang + Math.PI / 2);
      c.fillStyle = "#5a9a3e"; ell(c, 0, -6, 20, 26);
      c.fillStyle = "#4a8233"; ell(c, 0, -22, 16, 16);            // museau
      // cornes
      c.fillStyle = "#d9c98a";
      c.beginPath(); c.moveTo(-10, -20); c.quadraticCurveTo(-18, -40, -6, -34); c.fill();
      c.beginPath(); c.moveTo(10, -20); c.quadraticCurveTo(18, -40, 6, -34); c.fill();
      // gueule ouverte
      c.fillStyle = "#3a0f12"; ell(c, 0, -30, 11, 9);
      c.fillStyle = "#e0463f";                                    // langue
      c.beginPath(); c.moveTo(0, -30); c.lineTo(-3, -44); c.lineTo(3, -44); c.fill();
      // crocs
      c.fillStyle = "#fff";
      c.beginPath(); c.moveTo(-6, -34); c.lineTo(-4, -40); c.lineTo(-2, -34); c.fill();
      c.beginPath(); c.moveTo(6, -34); c.lineTo(4, -40); c.lineTo(2, -34); c.fill();
      // yeux rouges luisants
      c.fillStyle = "#ffec5a"; circle(c, -8, -10, 5); circle(c, 8, -10, 5);
      c.fillStyle = "#d11"; circle(c, -8, -10, 2.4); circle(c, 8, -10, 2.4);
      c.restore();
    }
    // masse à la base
    c.fillStyle = "#356b30"; ell(c, cx, cyBase + 6, 120, 40);
    c.fillStyle = "#2c5828"; ell(c, cx, cyBase + 16, 90, 26);
  }

  /* ===================================================== RIG (vrais assets)
     Personnage articulé multi-couches + fond cinématique.                   */
  const IMG = {};
  function loadImg(src) {
    return new Promise((res) => {
      if (IMG[src] !== undefined) return res(IMG[src]);
      const im = new Image();
      im.onload = () => { IMG[src] = im; res(im); };
      im.onerror = () => { IMG[src] = null; res(null); };
      im.src = src;
    });
  }
  function preloadRig(rig) {
    const srcs = rig.parts.map((p) => p.src);
    if (rig.bg) srcs.push(rig.bg);
    return Promise.all(srcs.map(loadImg));
  }

  // Layout du tanuki guerrier (coords logiques 600x340, perso centré x≈300)
  const RIGS = {
    tanuki: {
      bg: "assets/source/arena-shrine.jpg",
      eyeColor: "#ff8c1e", eyes: [{ x: 0.449, y: 0.402 }, { x: 0.691, y: 0.371 }],
      parts: [
        { k: "tail",  src: "assets/tanuki/tail.png",   cx: 392, cy: 252, h: 118, rot: -0.6,  flip: false, z: 0, sway: { amp: 0.08, spd: 1.1 } },
        { k: "armB",  src: "assets/tanuki/arm.png",    cx: 374, cy: 196, h: 156, rot: 0.22,  flip: true,  z: 1, sway: { amp: 0.05, spd: 1.5 } },
        { k: "legB",  src: "assets/tanuki/leg.png",    cx: 334, cy: 270, h: 128, rot: 0.06,  flip: true,  z: 2 },
        { k: "legF",  src: "assets/tanuki/leg.png",    cx: 270, cy: 272, h: 130, rot: -0.05, flip: false, z: 3 },
        { k: "torso", src: "assets/tanuki/torso.png",  cx: 300, cy: 198, h: 150, rot: 0,     flip: false, z: 4, breathe: true },
        { k: "armF",  src: "assets/tanuki/arm.png",    cx: 228, cy: 204, h: 158, rot: -0.18, flip: false, z: 5, sway: { amp: 0.06, spd: 1.25 } },
        { k: "mantle",src: "assets/tanuki/mantle.png", cx: 300, cy: 150, h: 74,  rot: 0,     flip: false, z: 6, breathe: true },
        { k: "head",  src: "assets/tanuki/head.png",   cx: 300, cy: 104, h: 124, rot: 0,     flip: false, z: 7, head: true, bob: 2.5 },
        { k: "katana",src: "assets/tanuki/katana.png", cx: 250, cy: 232, h: 208, rot: 0.5,   flip: false, z: 8 },
      ],
    },
  };

  // Dessine le rig dans le buffer ; renvoie la transfo de la tête (pour les yeux)
  function drawRig(rig, t, fx) {
    const breath = Math.sin(t * 1.6);
    const sorted = rig.parts.slice().sort((a, b) => a.z - b.z);
    let headTf = null;
    sorted.forEach((p) => {
      const img = IMG[p.src]; if (!img) return;
      const asp = img.width / img.height;
      const h = p.h, w = h * asp;
      let cx = p.cx, cy = p.cy, rot = p.rot || 0, sy = 1;
      if (p.sway) rot += Math.sin(t * p.sway.spd) * p.sway.amp;
      if (p.bob) cy += breath * p.bob;
      if (p.breathe) { sy = 1 + breath * 0.012; }
      bufx.save();
      bufx.translate(cx, cy);
      bufx.rotate(rot);
      if (p.flip) bufx.scale(-1, 1);
      if (sy !== 1) bufx.scale(1, sy);
      bufx.drawImage(img, -w / 2, -h / 2, w, h);
      bufx.restore();
      if (p.head) headTf = { cx, cy, w: p.flip ? -w : w, h };
    });
    return headTf;
  }

  /* --------------------------------------------------------- roster boss */
  const BOSSES = [
    { id: "tanuki", kanji: "狸", romaji: "Tanuki", fr: "L'espiègle", rig: "tanuki",
      hp: 120, atk: 14, dmg: 22, draw: drawTanuki,
      bg: ["#2d5a3d", "#16241c"], accent: "#c97f3a",
      intro: "Un tanuki farceur barre la route !", taunt: "くくく…",
      victory: "Le tanuki s'incline, vaincu par ta grammaire." },
    { id: "kappa", kanji: "河童", romaji: "Kappa", fr: "Le gardien du fleuve",
      hp: 170, atk: 18, dmg: 26, draw: drawKappa,
      bg: ["#1f4a5e", "#101f28"], accent: "#4f9e74",
      intro: "Un kappa surgit des eaux !", taunt: "ゲコッ…",
      victory: "Le kappa renverse son assiette et bat en retraite." },
    { id: "tengu", kanji: "天狗", romaji: "Tengu", fr: "Le maître arrogant",
      hp: 230, atk: 23, dmg: 30, draw: drawTengu,
      bg: ["#5a2d2d", "#241313"], accent: "#b23123",
      intro: "Le tengu te juge du regard…", taunt: "ふん、青いな。",
      victory: "Le tengu reconnaît ta maîtrise et s'envole." },
    { id: "oni", kanji: "鬼", romaji: "Oni", fr: "Le démon",
      hp: 300, atk: 28, dmg: 34, draw: drawOni,
      bg: ["#3a1f2a", "#1a0e14"], accent: "#c93a2b",
      intro: "Un Oni écrase le sol de sa massue !", taunt: "うぉぉぉ！",
      victory: "L'Oni s'effondre dans un rugissement." },
    { id: "orochi", kanji: "八岐大蛇", romaji: "Orochi", fr: "Le serpent à huit têtes",
      hp: 420, atk: 30, dmg: 30, draw: drawOrochi,
      bg: ["#2a1d44", "#120c20"], accent: "#7b4fb0",
      intro: "YAMATA-NO-OROCHI déploie ses têtes !", taunt: "シャアアア！",
      victory: "Les huit têtes retombent. Tu es un maître du N5." },
  ];
  function bossById(id) { return BOSSES.find((b) => b.id === id); }

  /* ====================================================== CSS (une fois) */
  function injectCSS() {
    if (document.getElementById("bb-style")) return;
    const s = document.createElement("style");
    s.id = "bb-style";
    s.textContent = `
    .bb-wrap{max-width:680px;margin:0 auto;padding:0 14px 90px}
    /* ---- carte des boss ---- */
    .bb-hero{position:relative;border-radius:20px;overflow:hidden;padding:26px 22px;margin:6px 0 18px;
      background:linear-gradient(135deg,#2a1d44,#3a1f2a);border:1px solid var(--border)}
    .bb-hero h1{font-size:1.5rem;font-weight:800;display:flex;align-items:center;gap:10px}
    .bb-hero h1 .k{font-family:var(--font-jp)}
    .bb-hero p{color:var(--text-dim);margin-top:6px;font-size:.92rem;max-width:440px}
    .bb-hero .spark{position:absolute;inset:0;pointer-events:none;opacity:.5;
      background:radial-gradient(420px 200px at 85% -20%,rgba(255,180,84,.25),transparent 60%)}
    .bb-roster{display:flex;flex-direction:column;gap:12px}
    .bb-card{display:flex;align-items:center;gap:14px;background:var(--surface);border:1px solid var(--border);
      border-radius:18px;padding:12px 14px;cursor:pointer;transition:transform var(--t),border-color var(--t),box-shadow var(--t)}
    .bb-card:not(.locked):hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow)}
    .bb-card.locked{opacity:.55;cursor:not-allowed}
    .bb-card.cleared{border-color:rgba(70,209,139,.5)}
    .bb-thumb{width:84px;height:84px;flex-shrink:0;border-radius:14px;overflow:hidden;
      display:flex;align-items:center;justify-content:center}
    .bb-thumb canvas{width:100%;height:100%;display:block;animation:bbFloat 4s ease-in-out infinite}
    @keyframes bbFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
    .bb-meta{flex:1;min-width:0}
    .bb-meta .nm{font-weight:800;font-size:1.08rem;display:flex;align-items:center;gap:8px}
    .bb-meta .nm .k{font-family:var(--font-jp)}
    .bb-meta .sub{color:var(--text-dim);font-size:.82rem;margin-top:2px}
    .bb-meta .hpline{display:flex;align-items:center;gap:6px;margin-top:7px}
    .bb-meta .hpline .pip{height:6px;border-radius:4px;flex:1;background:var(--surface-3)}
    .bb-tag{font-size:.7rem;font-weight:800;padding:4px 9px;border-radius:100px;white-space:nowrap}
    .bb-tag.go{background:var(--accent);color:#fff}
    .bb-tag.win{background:var(--green-soft);color:var(--green)}
    .bb-tag.lock{background:var(--surface-3);color:var(--text-faint)}

    /* ============ MODE JEU PLEIN ÉCRAN ============ */
    .bb-game{position:fixed;inset:0;z-index:9000;background:#05040a;overflow:hidden;font-family:var(--font);
      --safe-b:env(safe-area-inset-bottom,0px);--safe-t:env(safe-area-inset-top,0px)}
    .bb-canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
    .bb-flash{position:absolute;inset:0;background:rgba(255,70,70,0);pointer-events:none;z-index:3}
    .bb-vfx{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:4}
    .bb-dmg{position:absolute;font-weight:900;font-size:clamp(1.6rem,6vw,2.2rem);color:#ffce54;
      text-shadow:0 2px 0 rgba(0,0,0,.6),0 0 14px rgba(255,206,84,.7);
      pointer-events:none;will-change:transform,opacity;font-family:var(--font)}
    .bb-dmg.crit{font-size:clamp(2.4rem,9vw,3.4rem);color:#ff6b6b;text-shadow:0 2px 0 rgba(0,0,0,.7),0 0 20px rgba(255,107,107,.9)}
    .bb-dmg.pl{color:#ff5d6c}
    @keyframes bbDmg{0%{transform:translate(-50%,0) scale(.5);opacity:0}
      15%{transform:translate(-50%,-8px) scale(1.2);opacity:1}
      100%{transform:translate(-50%,-72px) scale(1);opacity:0}}

    /* barres communes */
    .bb-bar{position:relative;height:14px;border-radius:8px;background:rgba(0,0,0,.55);overflow:hidden;
      border:1px solid rgba(255,200,120,.3);box-shadow:inset 0 0 8px rgba(0,0,0,.6)}
    .bb-bar > span{position:absolute;left:0;top:0;height:100%;width:100%;border-radius:8px}
    .bb-bar .lead{background:rgba(255,255,255,.32);transition:width .9s ease .15s;z-index:0}
    .bb-bar .fg{z-index:1;transition:width .45s cubic-bezier(.2,.7,.3,1);
      background:linear-gradient(90deg,#ff5d6c,#ff8a5b);box-shadow:0 0 8px rgba(255,120,90,.5)}
    /* barre boss = épée (la lame se vide de la pointe vers le joyau) */
    .bb-sword{position:relative;width:100%;margin-top:5px;line-height:0;filter:drop-shadow(0 2px 5px rgba(0,0,0,.7))}
    .bb-sword img{display:block;width:100%;height:auto;user-select:none;-webkit-user-drag:none}
    .bb-sword .empty{filter:brightness(.32) saturate(.22) contrast(.92)}
    .bb-sword .fill{position:absolute;inset:0;clip-path:inset(0 0% 0 0);
      transition:clip-path .55s cubic-bezier(.2,.7,.3,1);filter:drop-shadow(0 0 5px rgba(255,70,45,.55))}

    /* HUD haut */
    .bb-hud-top{position:absolute;top:0;left:0;right:0;z-index:6;
      padding:calc(10px + var(--safe-t)) 14px 12px;
      background:linear-gradient(to bottom,rgba(5,4,8,.82),rgba(5,4,8,0))}
    .bb-row{display:flex;align-items:center;gap:10px}
    .bb-icbtn{width:38px;height:38px;border-radius:11px;flex-shrink:0;display:flex;align-items:center;justify-content:center;
      background:rgba(12,9,14,.62);border:1px solid rgba(255,190,110,.28);color:#ecdcc2;cursor:pointer;backdrop-filter:blur(4px)}
    .bb-icbtn:hover{border-color:rgba(255,190,110,.7)}
    .bb-icbtn svg{width:18px;height:18px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .bb-bossname{flex:1;min-width:0}
    .bb-bossname .nm{font-weight:800;font-size:1.05rem;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.85);display:flex;gap:8px;align-items:center}
    .bb-bossname .nm .k{font-family:var(--font-jp);color:#ffd9a0}
    .bb-bossname .hpnum{font-size:.7rem;color:rgba(255,235,205,.85);font-weight:700;text-shadow:0 1px 3px rgba(0,0,0,.85)}
    .bb-bossname .bb-bar{margin-top:5px}

    /* combo */
    .bb-combo{position:absolute;top:calc(82px + var(--safe-t));right:16px;z-index:6;text-align:right;
      font-weight:900;color:#ffce54;text-shadow:0 2px 12px rgba(0,0,0,.8);
      opacity:0;transform:scale(.6) rotate(-6deg);transition:opacity .2s,transform .2s}
    .bb-combo.show{opacity:1;transform:scale(1) rotate(-4deg)}
    .bb-combo b{font-size:2rem;display:block;line-height:1}
    .bb-combo small{font-size:.62rem;letter-spacing:.16em;color:#fff}

    /* HUD bas (joueur + question intégrée à la scène) */
    .bb-hud-bottom{position:absolute;left:0;right:0;bottom:0;z-index:6;
      padding:14px 12px calc(12px + var(--safe-b));max-height:82vh;overflow-y:auto;
      background:linear-gradient(to top,rgba(6,4,8,.95) 55%,rgba(6,4,8,.74) 82%,rgba(6,4,8,0));
      border-top:1px solid rgba(255,190,110,.16)}
    .bb-plrow{display:flex;align-items:center;gap:10px;margin-bottom:11px}
    .bb-plrow .av{width:34px;height:34px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;
      background:rgba(0,0,0,.42);border:1px solid rgba(120,200,160,.42)}
    .bb-plrow .col{flex:1}
    .bb-plrow .lab{display:flex;justify-content:space-between;font-size:.7rem;font-weight:700;color:#e2ebe4;margin-bottom:3px;text-shadow:0 1px 3px rgba(0,0,0,.8)}
    .bb-plrow .bb-bar{border-color:rgba(120,200,160,.42)}
    .bb-plrow .bb-bar .fg{background:linear-gradient(90deg,#46d18b,#5b9cff);box-shadow:0 0 8px rgba(70,209,139,.5)}

    /* question */
    .bb-qtop{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}
    .bb-qtop .turn{font-size:.66rem;font-weight:800;color:#bba98a;text-transform:uppercase;letter-spacing:.12em}
    .bb-qtop .cat{font-size:.64rem;font-weight:800;padding:3px 9px;border-radius:100px;color:#fff}
    .bb-stem{font-family:var(--font-jp);font-size:clamp(1.15rem,4.4vw,1.42rem);line-height:1.55;font-weight:600;color:#f4ead4;
      margin:2px 0 4px;text-shadow:0 1px 5px rgba(0,0,0,.7)}
    .bb-stem .blk{display:inline-block;min-width:50px;border-bottom:3px solid #ffb454;margin:0 3px}
    .bb-ctx{color:#b9a888;font-size:.82rem;margin-bottom:11px}
    .bb-opts{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .bb-opt{position:relative;display:flex;align-items:center;gap:9px;cursor:pointer;
      background:linear-gradient(180deg,rgba(42,31,22,.84),rgba(24,18,13,.88));
      border:1.5px solid rgba(200,150,85,.4);border-radius:12px;padding:12px 13px;
      font-size:clamp(1rem,3.6vw,1.12rem);font-family:var(--font-jp);font-weight:600;color:#f2e7d2;text-align:left;
      box-shadow:0 2px 10px rgba(0,0,0,.45),inset 0 0 0 1px rgba(0,0,0,.3);
      transition:transform var(--t-fast),border-color var(--t-fast),box-shadow var(--t-fast)}
    .bb-opt:not(:disabled):hover{transform:translateY(-2px);border-color:rgba(255,200,110,.9);
      box-shadow:0 5px 18px rgba(0,0,0,.5),0 0 16px rgba(255,180,90,.4)}
    .bb-opt:not(:disabled):active{transform:translateY(0) scale(.99)}
    .bb-opt:disabled{cursor:default}
    .bb-opt .k{width:22px;height:22px;border-radius:7px;flex-shrink:0;display:flex;align-items:center;justify-content:center;
      background:rgba(255,190,110,.16);color:#e9c98a;font-size:.74rem;font-weight:800;font-family:var(--font);border:1px solid rgba(255,190,110,.32)}
    .bb-opt.ok{border-color:#46d18b;background:linear-gradient(180deg,rgba(30,72,52,.92),rgba(18,44,33,.94));color:#9af0c4;box-shadow:0 0 20px rgba(70,209,139,.5)}
    .bb-opt.ko{border-color:#ff6066;background:linear-gradient(180deg,rgba(72,28,30,.92),rgba(44,18,20,.94));color:#ffb0b3;box-shadow:0 0 20px rgba(255,96,102,.45)}
    .bb-opt.ok .k{background:#46d18b;color:#06281a;border-color:#46d18b}
    .bb-opt.ko .k{background:#ff6066;color:#fff;border-color:#ff6066}
    .bb-opt.dim{opacity:.32}
    .bb-shake{animation:bbShakeX .4s}
    @keyframes bbShakeX{0%,100%{transform:translateX(0)}25%{transform:translateX(-7px)}75%{transform:translateX(7px)}}
    .bb-expl{margin-top:10px;background:rgba(20,15,11,.82);border:1px solid rgba(200,150,85,.32);border-radius:11px;
      padding:11px 13px;font-size:.86rem;line-height:1.55;color:#cdbfa6;animation:bbPop .25s;max-height:24vh;overflow:auto}
    .bb-expl b{color:#f4ead4}
    .bb-next{margin-top:10px;width:100%;border:none;border-radius:12px;padding:14px;font-size:1rem;font-weight:800;cursor:pointer;
      color:#1a1306;background:linear-gradient(180deg,#ffce6e,#f0a838);box-shadow:0 4px 16px rgba(240,168,56,.4);
      transition:transform var(--t-fast)}
    .bb-next:hover{transform:translateY(-2px)}
    .bb-next.gn{background:linear-gradient(180deg,#5fe0a0,#36b87a);color:#04261a}
    .bb-next.rd{background:linear-gradient(180deg,#ff8086,#e0454b);color:#fff}

    /* overlay intro / résultat */
    .bb-over{position:absolute;inset:0;z-index:8;display:flex;flex-direction:column;align-items:center;justify-content:center;
      text-align:center;padding:24px;background:radial-gradient(circle at 50% 40%,rgba(8,6,10,.42),rgba(4,3,6,.84))}
    .bb-over .big{font-size:clamp(2.4rem,11vw,4rem);font-weight:900;font-family:var(--font-jp);color:#fff;
      text-shadow:0 4px 30px rgba(0,0,0,.85),0 0 34px rgba(255,180,90,.4);animation:bbPop .5s cubic-bezier(.2,1.4,.4,1)}
    .bb-over .sub{color:rgba(255,245,225,.92);margin-top:8px;font-weight:600;max-width:360px;animation:bbPop .5s .1s both}
    .bb-stars{font-size:2rem;letter-spacing:8px;margin-top:10px;color:#ffce54;text-shadow:0 0 18px rgba(255,206,84,.6)}
    @keyframes bbPop{0%{transform:scale(.4);opacity:0}100%{transform:scale(1);opacity:1}}

    /* boutons écran fin */
    .bb-endbtns{display:flex;gap:10px;margin-top:22px;flex-wrap:wrap;justify-content:center}
    .bb-eb{border:none;border-radius:13px;padding:14px 22px;font-size:.95rem;font-weight:800;cursor:pointer;
      transition:transform var(--t-fast);text-decoration:none;display:inline-block}
    .bb-eb:hover{transform:translateY(-2px)}
    .bb-eb.primary{background:linear-gradient(180deg,#ffce6e,#f0a838);color:#1a1306}
    .bb-eb.ghost{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25)}
    `;
    document.head.appendChild(s);
  }

  /* ============================================================ CARTE BOSS */
  function renderMap() {
    stop();
    const prog = loadProg();
    const lvl = API.level || "N5";
    let unlockedUpTo = 0;
    BOSSES.forEach((b, i) => { if (prog.cleared.indexOf(b.id) >= 0) unlockedUpTo = Math.max(unlockedUpTo, i + 1); });
    const demo = API.isDemo;

    ROOT.innerHTML = `
      <div class="bb-wrap">
        <div class="bb-hero">
          <div class="spark"></div>
          <h1><span class="k">妖怪</span> Boss Battle</h1>
          <p>Terrasse les yokai en répondant juste. Combos, coups critiques, et un serpent à huit têtes pour finir. ${demo ? "<b>Démo : affronte le premier boss gratuitement.</b>" : ""}</p>
        </div>
        <div class="bb-roster" id="bbRoster"></div>
      </div>`;

    const roster = ROOT.querySelector("#bbRoster");
    BOSSES.forEach((b, i) => {
      const cleared = prog.cleared.indexOf(b.id) >= 0;
      const locked = demo ? i > 0 : (i > unlockedUpTo);
      const best = prog.best && prog.best[b.id];
      const card = document.createElement("div");
      card.className = "bb-card" + (locked ? " locked" : "") + (cleared ? " cleared" : "");
      const tag = locked ? `<span class="bb-tag lock">Verrouillé</span>`
        : cleared ? `<span class="bb-tag win">Vaincu${best ? " · " + best + " tours" : ""}</span>`
        : `<span class="bb-tag go">Combattre →</span>`;
      const stars = "●".repeat(i + 1) + "○".repeat(BOSSES.length - i - 1);
      card.innerHTML = `
        <div class="bb-thumb" style="background:linear-gradient(135deg,${b.bg[0]},${b.bg[1]})">
          <canvas width="${W}" height="${H}"></canvas>
        </div>
        <div class="bb-meta">
          <div class="nm"><span class="k">${b.kanji}</span> ${b.romaji}</div>
          <div class="sub">${b.fr} · ${locked ? "???" : b.hp + " PV"} · <span style="color:${b.accent}">${stars}</span></div>
        </div>
        ${tag}`;
      // dessine la vignette (statique)
      const cv = card.querySelector("canvas");
      const cc = cv.getContext("2d");
      if (locked) { cc.fillStyle = "rgba(0,0,0,.35)"; cc.fillRect(0, 0, W, H); cc.font = "bold 120px serif"; cc.fillStyle = "rgba(255,255,255,.25)"; cc.textAlign = "center"; cc.textBaseline = "middle"; cc.fillText("?", W / 2, H / 2); }
      else if (b.rig) drawRigThumb(cc, b);
      else b.draw(cc, 0.4, { lowHP: false });
      if (!locked) card.onclick = () => startBattle(b.id);
      else card.onclick = () => API.toast && API.toast("Bats le boss précédent pour le débloquer.");
      roster.appendChild(card);
    });
  }

  // Vignette carte : la vraie tête du boss riggé (chargée async)
  function drawRigThumb(cc, boss) {
    const rig = RIGS[boss.rig];
    const head = rig.parts.find((p) => p.head);
    loadImg(head.src).then((img) => {
      if (!img || !cc.canvas.isConnected) return;
      cc.clearRect(0, 0, W, H);
      const asp = img.width / img.height, h = H * 0.96, w = h * asp;
      cc.drawImage(img, (W - w) / 2, (H - h) / 2 + 6, w, h);
      // yeux luisants
      cc.save(); cc.globalCompositeOperation = "lighter";
      const x0 = (W - w) / 2, y0 = (H - h) / 2 + 6;
      rig.eyes.forEach((e) => {
        const ex = x0 + e.x * w, ey = y0 + e.y * h;
        const g = cc.createRadialGradient(ex, ey, 0, ex, ey, 26);
        g.addColorStop(0, "rgba(255,220,150,.9)"); g.addColorStop(0.4, "rgba(255,150,40,.7)"); g.addColorStop(1, "rgba(255,110,20,0)");
        cc.fillStyle = g; circle(cc, ex, ey, 26);
      });
      cc.restore();
    });
  }

  /* ============================================================== COMBAT */
  function buildQueue() {
    if (API.isDemo && API.demoQs && API.demoQs.length) {
      return API.shuffle(API.demoQs.map((d) => ({
        stem: d.q, ctx: d.ctx, o: d.o, a: d.a, e: d.e, cat: null, gid: null,
      })));
    }
    const pool = [];
    API.grammar.forEach((g) => {
      (g.qs || []).forEach((q, qi) => {
        if (q.t === "order") return; // pas de reconstruction de phrase ici
        pool.push({ stem: q.q, ctx: q.fr, o: q.o, a: q.a, e: q.e, cat: g.c, gid: g.id, qi });
      });
    });
    return API.shuffle(pool);
  }

  function startBattle(id) {
    stop();
    const boss = bossById(id);
    const rig = boss.rig ? RIGS[boss.rig] : null;
    SFX.appear();
    battle = {
      boss, rig, hp: boss.hp, maxhp: boss.hp,
      php: 100, pmax: 100,
      combo: 0, turn: 0, queue: buildQueue(), qi: 0,
      particles: [], slashes: [], dmgNodes: [], embers: [],
      bossHit: 0, bossAttack: 0, bossDying: 0, shake: 0, flash: 0,
      phase: "intro", t0: performance.now(), last: performance.now(),
      answered: false, result: null,
    };
    if (rig) preloadRig(rig);

    const lvl = API.level || "N5";
    gameEl = document.createElement("div");
    gameEl.className = "bb-game";
    gameEl.innerHTML = `
      <canvas class="bb-canvas" id="bbCanvas"></canvas>
      <div class="bb-flash" id="bbScreenFlash"></div>
      <div class="bb-vfx" id="bbVfx"></div>
      <div class="bb-hud-top">
        <div class="bb-row">
          <button class="bb-icbtn" id="bbBack" aria-label="Carte"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>
          <div class="bb-bossname">
            <div class="nm"><span class="k">${boss.kanji}</span> ${boss.romaji}<span class="hpnum" id="bbBossHpNum" style="margin-left:auto">${boss.hp} / ${boss.hp}</span></div>
            <div class="bb-sword"><img class="empty" src="assets/source/sword.png" alt=""><img class="fill" id="bbBossSword" src="assets/source/sword.png" alt=""></div>
          </div>
          <button class="bb-icbtn" id="bbMute" aria-label="Son">${muteIcon()}</button>
        </div>
      </div>
      <div class="bb-combo" id="bbCombo"><b>x2</b><small>COMBO</small></div>
      <div class="bb-hud-bottom">
        <div class="bb-plrow">
          <div class="av"><svg viewBox="0 0 24 24" style="width:20px;height:20px;stroke:#9af0c4;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><path d="M3 21l9-9M14 7l3-3 3 3-3 3M14 7l-3 3M17 4l-1-1"/></svg></div>
          <div class="col">
            <div class="lab"><span>侍 ${lvl} Apprenti</span><span id="bbPlHpNum">100 / 100</span></div>
            <div class="bb-bar"><span class="fg" id="bbPlHp"></span></div>
          </div>
        </div>
        <div id="bbPanel"></div>
      </div>
      <div class="bb-over" id="bbOver">
        <div class="big">${boss.kanji}</div>
        <div class="sub">${boss.intro}</div>
      </div>`;
    document.body.appendChild(gameEl);
    document.documentElement.style.overflow = "hidden";

    gameEl.querySelector("#bbBack").onclick = renderMap;
    gameEl.querySelector("#bbMute").onclick = (e) => { setMuted(!muted()); e.currentTarget.innerHTML = muteIcon(); };

    setupCanvas();
    onResize = () => setupCanvas();
    window.addEventListener("resize", onResize);
    loopStart();

    // fin de l'intro → première question
    setTimeout(() => {
      if (!battle || battle.phase !== "intro") return;
      const ov = gameEl.querySelector("#bbOver");
      if (ov) { ov.style.transition = "opacity .4s"; ov.style.opacity = "0"; setTimeout(() => ov.remove(), 400); }
      battle.phase = "play";
      nextQuestion();
    }, 1400);
  }

  function muteIcon() {
    return muted()
      ? `<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4zM23 9l-6 6M17 9l6 6"/></svg>`
      : `<svg viewBox="0 0 24 24"><path d="M11 5 6 9H2v6h4l5 4zM19 8a5 5 0 0 1 0 8M15.5 11a2 2 0 0 1 0 2.5"/></svg>`;
  }

  /* ----------------------------------------------------- canvas + boucle */
  let canvas, ctx, buf, bufx, dpr = 1, gameEl = null, onResize = null;
  function setupCanvas() {
    if (!gameEl) return;
    canvas = gameEl.querySelector("#bbCanvas");
    ctx = canvas.getContext("2d");
    dpr = Math.min(2, window.devicePixelRatio || 1);
    const vw = window.innerWidth, vh = window.innerHeight;
    if (battle) { battle.vw = vw; battle.vh = vh; }
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    if (!buf) { buf = document.createElement("canvas"); bufx = buf.getContext("2d"); }
    buf.width = W * BUF_SCALE; buf.height = H * BUF_SCALE;
    syncBars(true);
  }

  function loopStart() {
    cancelAnimationFrame(raf);
    const frame = (now) => {
      if (!battle) return;
      const dt = Math.min(0.05, (now - battle.last) / 1000);
      battle.last = now;
      const t = (now - battle.t0) / 1000;
      step(dt);
      draw(t);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  }

  function step(dt) {
    const b = battle;
    b.bossHit = Math.max(0, b.bossHit - dt * 3.5);
    b.bossAttack = Math.max(0, b.bossAttack - dt * 2.2);
    b.shake = Math.max(0, b.shake - dt * 4);
    b.flash = Math.max(0, b.flash - dt * 2.5);
    if (b.bossDying > 0 && b.bossDying < 1) b.bossDying = Math.min(1, b.bossDying + dt * 0.8);
    // particules
    for (let i = b.particles.length - 1; i >= 0; i--) {
      const p = b.particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life -= dt;
      p.vx *= 0.99;
      if (p.life <= 0) b.particles.splice(i, 1);
    }
    for (let i = b.slashes.length - 1; i >= 0; i--) { b.slashes[i].life -= dt * 3.2; if (b.slashes[i].life <= 0) b.slashes.splice(i, 1); }
    // braises d'ambiance (espace écran, plein écran)
    if (b.rig) {
      const vw = b.vw || W, vh = b.vh || H;
      if (Math.random() < dt * 18 && b.embers.length < 75) {
        b.embers.push({ x: rand(0, vw), y: rand(vh * 0.84, vh), vy: rand(-vh * 0.03, -vh * 0.07), vx: rand(-12, 12), life: rand(3, 6), max: 6, s: rand(1, 2.6), ph: rand(0, TAU) });
      }
      for (let i = b.embers.length - 1; i >= 0; i--) {
        const e = b.embers[i];
        e.y += e.vy * dt; e.x += (e.vx + Math.sin(battle.last / 600 + e.ph) * 8) * dt; e.life -= dt;
        if (e.life <= 0 || e.y < vh * 0.05) b.embers.splice(i, 1);
      }
    }
  }

  function drawCover(c, img, dx, dy, dw, dh, ox, oy) {
    const ir = img.width / img.height, sr = dw / dh; let w, h;
    if (ir > sr) { h = dh; w = dh * ir; } else { w = dw; h = dw / ir; }
    c.drawImage(img, dx + (dw - w) / 2 + (ox || 0), dy + (dh - h) / 2 + (oy || 0), w, h);
  }

  function draw(t) {
    const b = battle;
    const vw = b.vw || canvas.width / dpr, vh = b.vh || canvas.height / dpr;
    const sx = (Math.random() - 0.5) * b.shake * 22;
    const sy = (Math.random() - 0.5) * b.shake * 22;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, vw, vh);
    ctx.save();
    ctx.translate(sx, sy);

    const rig = b.rig;
    const low = b.hp / b.maxhp < 0.35;
    const bgImg = rig && IMG[rig.bg];

    // ---------- FOND PLEIN ÉCRAN ----------
    if (bgImg) {
      const par = Math.sin(t * 0.16) * (vw * 0.012), pay = Math.cos(t * 0.12) * (vh * 0.01);
      drawCover(ctx, bgImg, -vw * 0.04, -vh * 0.04, vw * 1.08, vh * 1.08, par, pay);
      ctx.globalCompositeOperation = "lighter";
      const R = Math.min(vw, vh) * 0.2;
      [[0.33, 0.60], [0.64, 0.60]].forEach((L, i) => {
        const lx = L[0] * vw, ly = L[1] * vh, pulse = 0.5 + Math.sin(t * 2.2 + i * 1.7) * 0.18;
        const g = ctx.createRadialGradient(lx, ly, 2, lx, ly, R);
        g.addColorStop(0, `rgba(255,170,70,${0.32 * pulse})`); g.addColorStop(1, "rgba(255,150,60,0)");
        ctx.fillStyle = g; circle(ctx, lx, ly, R);
      });
      const beam = ctx.createLinearGradient(vw * 0.5, 0, vw * 0.42, vh);
      beam.addColorStop(0, `rgba(210,200,170,${0.08 + Math.sin(t) * 0.02})`); beam.addColorStop(1, "rgba(210,200,170,0)");
      ctx.fillStyle = beam; ctx.beginPath(); ctx.moveTo(vw * 0.42, 0); ctx.lineTo(vw * 0.6, 0); ctx.lineTo(vw * 0.56, vh); ctx.lineTo(vw * 0.3, vh); ctx.closePath(); ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    } else {
      const bg = ctx.createRadialGradient(vw * 0.5, vh * 0.2, 40, vw * 0.5, vh * 0.5, Math.max(vw, vh) * 0.85);
      bg.addColorStop(0, b.boss.bg[0]); bg.addColorStop(1, b.boss.bg[1]);
      ctx.fillStyle = bg; ctx.fillRect(0, 0, vw, vh);
    }

    // ---------- MAPPING PERSO (échelle uniforme, sans distorsion) ----------
    const Sc = Math.min(vw / 440, (vh * 0.52) / 270);
    const cx = vw / 2, cyA = vh * 0.33;
    const SX = (lx) => cx + (lx - 300) * Sc;
    const SY = (ly) => cyA + (ly - 180) * Sc;

    // ombre au sol
    ctx.save(); ctx.fillStyle = "rgba(0,0,0,.45)";
    ctx.beginPath(); ctx.ellipse(SX(300), SY(312), 150 * Sc, 26 * Sc, 0, 0, TAU); ctx.fill(); ctx.restore();

    // rendu perso dans le buffer
    bufx.setTransform(BUF_SCALE, 0, 0, BUF_SCALE, 0, 0);
    bufx.clearRect(0, 0, W, H);
    let headTf = null;
    if (rig) headTf = drawRig(rig, t, { lowHP: low });
    else b.boss.draw(bufx, t, { lowHP: low });
    if (b.bossHit > 0) {
      bufx.save(); bufx.globalCompositeOperation = "source-atop";
      bufx.fillStyle = "rgba(255,255,255," + (b.bossHit * 0.85) + ")";
      bufx.fillRect(0, 0, W, H); bufx.restore();
    }
    const bobL = rig ? Math.sin(t * 1.6) * 3 : Math.sin(t * 1.8) * 6;
    const lungeL = -Math.sin(b.bossAttack * Math.PI) * (rig ? 38 : 46);
    const dyP = (bobL + lungeL) * Sc;
    const alpha = b.bossDying > 0 ? 1 - b.bossDying : 1;
    ctx.save(); ctx.globalAlpha = alpha;
    ctx.drawImage(buf, SX(0), SY(0) + dyP, 600 * Sc, 340 * Sc);
    // yeux luisants
    if (rig && headTf && alpha > 0.1) {
      ctx.globalCompositeOperation = "lighter";
      const flare = (b.bossAttack > 0 ? 0.5 : 0) + (low ? 0.3 : 0);
      const pulse = 0.7 + Math.sin(t * 4) * 0.12 + flare;
      rig.eyes.forEach((e) => {
        const elx = headTf.cx + (e.x - 0.5) * headTf.w;
        const ely = headTf.cy + (e.y - 0.5) * headTf.h;
        const ex = SX(elx), ey = SY(ely) + dyP, Rr = (8 + flare * 6) * (low ? 1.25 : 1) * Sc;
        const g = ctx.createRadialGradient(ex, ey, 0.5, ex, ey, Rr);
        g.addColorStop(0, "rgba(255,240,200," + clamp(pulse, 0, 1) + ")");
        g.addColorStop(0.4, "rgba(255,150,40," + clamp(pulse * 0.8, 0, 1) + ")");
        g.addColorStop(1, "rgba(255,110,20,0)");
        ctx.fillStyle = g; circle(ctx, ex, ey, Rr);
      });
      ctx.globalCompositeOperation = "source-over";
    }
    ctx.restore();

    // ---------- EFFETS DE COMBAT ----------
    ctx.globalCompositeOperation = "lighter";
    b.slashes.forEach((s) => {
      ctx.save(); ctx.globalAlpha = clamp(s.life, 0, 1);
      ctx.strokeStyle = "#fff"; ctx.lineWidth = (6 * s.life + 1) * Sc; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(SX(s.x1), SY(s.y1)); ctx.lineTo(SX(s.x2), SY(s.y2)); ctx.stroke();
      ctx.strokeStyle = "rgba(255,210,120,.9)"; ctx.lineWidth = 2.5 * s.life * Sc; ctx.stroke();
      ctx.restore();
    });
    if (rig) b.embers.forEach((e) => {
      const lf = clamp(e.life / e.max, 0, 1);
      ctx.globalAlpha = lf * (0.5 + Math.sin(battle.last / 200 + e.ph) * 0.3);
      const rr = e.s * 4;
      const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, rr);
      g.addColorStop(0, "rgba(255,190,90,.9)"); g.addColorStop(1, "rgba(255,140,40,0)");
      ctx.fillStyle = g; circle(ctx, e.x, e.y, rr);
    });
    ctx.globalAlpha = 1;
    b.particles.forEach((p) => {
      ctx.save(); ctx.globalAlpha = clamp(p.life / p.max, 0, 1); ctx.fillStyle = p.color;
      if (p.type === "shard") { ctx.globalCompositeOperation = "source-over"; ctx.translate(SX(p.x), SY(p.y)); ctx.rotate(p.r || 0); const s = p.s * Sc; ctx.fillRect(-s / 2, -s / 2, s, s); }
      else circle(ctx, SX(p.x), SY(p.y), p.s * Sc);
      ctx.restore();
    });
    ctx.globalCompositeOperation = "source-over";

    // ---------- VIGNETTE ----------
    const vg = ctx.createRadialGradient(vw * 0.5, vh * 0.42, vh * 0.18, vw * 0.5, vh * 0.5, Math.max(vw, vh) * 0.72);
    vg.addColorStop(0, "rgba(0,0,0,0)"); vg.addColorStop(1, "rgba(0,0,0,.62)");
    ctx.fillStyle = vg; ctx.fillRect(0, 0, vw, vh);
    if (low) { ctx.fillStyle = `rgba(120,0,0,${0.10 + Math.sin(t * 5) * 0.05})`; ctx.fillRect(0, 0, vw, vh); }
    ctx.restore();
  }

  /* ------------------------------------------------------ HP & UI sync */
  function gq(sel) { return gameEl ? gameEl.querySelector(sel) : null; }
  function syncBars(instant) {
    const b = battle; if (!b || !gameEl) return;
    const bp = clamp(b.hp / b.maxhp, 0, 1) * 100;
    const pp = clamp(b.php / b.pmax, 0, 1) * 100;
    const ph = gq("#bbPlHp");
    if (ph) ph.style.width = pp + "%";
    // barre boss = épée : la lame se vide de la pointe (droite) vers le joyau (gauche)
    const sword = gq("#bbBossSword");
    if (sword) {
      const vis = 0.21 + clamp(b.hp / b.maxhp, 0, 1) * 0.79; // garde le joyau (gauche) toujours visible
      sword.style.clipPath = "inset(0 " + ((1 - vis) * 100).toFixed(1) + "% 0 0)";
    }
    const bn = gq("#bbBossHpNum"); if (bn) bn.textContent = Math.max(0, Math.ceil(b.hp)) + " / " + b.maxhp;
    const pn = gq("#bbPlHpNum"); if (pn) pn.textContent = Math.max(0, Math.ceil(b.php)) + " / " + b.pmax;
  }

  function floatDamage(val, kind) {
    const vfx = gq("#bbVfx"); if (!vfx) return;
    const el = document.createElement("div");
    el.className = "bb-dmg" + (kind === "crit" ? " crit" : "") + (kind === "pl" ? " pl" : "");
    el.textContent = val + (kind === "crit" ? "!" : "");
    const x = kind === "pl" ? 50 : 50 + rand(-12, 12);
    const y = kind === "pl" ? 64 : 30 + rand(-5, 5);
    el.style.left = x + "%"; el.style.top = y + "%";
    el.style.animation = "bbDmg 1s ease-out forwards";
    vfx.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }

  function showCombo() {
    const c = gq("#bbCombo"); if (!c) return;
    if (battle.combo >= 2) {
      c.querySelector("b").textContent = "x" + battle.combo;
      c.classList.add("show");
    } else c.classList.remove("show");
  }

  function spawnSlashes() {
    const b = battle;
    for (let i = 0; i < 3; i++) {
      const y = rand(110, 220);
      b.slashes.push({ x1: rand(200, 240), y1: y - 40, x2: rand(360, 400), y2: y + 40, life: 1 });
    }
    for (let i = 0; i < 22; i++) {
      const a = rand(0, TAU), sp = rand(2, 7);
      b.particles.push({ x: 300 + rand(-30, 30), y: 160 + rand(-30, 30), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1, g: 0.18, s: rand(2, 5), life: rand(.4, .8), max: .8, color: i % 3 ? "#ffce54" : "#fff", type: "spark" });
    }
  }
  function spawnDeath() {
    const b = battle, col = b.boss.accent;
    for (let i = 0; i < 60; i++) {
      const a = rand(0, TAU), sp = rand(2, 9);
      b.particles.push({ x: 300 + rand(-40, 40), y: 160 + rand(-50, 50), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2, g: 0.22, s: rand(3, 8), life: rand(.7, 1.4), max: 1.4, color: i % 2 ? col : "#fff", type: "shard", r: rand(0, TAU) });
    }
  }

  /* ------------------------------------------------------- tour de jeu */
  function nextQuestion() {
    const b = battle;
    if (b.qi >= b.queue.length) { b.queue = API.shuffle(b.queue); b.qi = 0; }
    const q = b.queue[b.qi];
    b.qi++;
    b.cur = q; b.answered = false; b.turn++;

    const idx = API.shuffle([0, 1, 2, 3]);
    b.shufOpts = idx.map((i) => q.o[i]);
    b.shufAns = idx.indexOf(q.a);

    const catObj = q.cat && API.CATS[q.cat];
    const catChip = catObj ? `<span class="cat" style="background:${catObj.color}">${API.esc(catObj.label)}</span>` : "";
    const stem = renderStem(q.stem);
    const ctxLine = q.ctx ? `<div class="bb-ctx">${API.esc(q.ctx)}</div>` : "";
    const opts = b.shufOpts.map((o, i) => `
      <button class="bb-opt" data-i="${i}"><span class="k">${i + 1}</span><span>${API.esc(o)}</span></button>`).join("");

    gq("#bbPanel").innerHTML = `
      <div class="bb-qtop"><span class="turn">Tour ${b.turn}</span>${catChip}</div>
      <div class="bb-stem">${stem}</div>
      ${ctxLine}
      <div class="bb-opts" id="bbOpts">${opts}</div>
      <div id="bbAfter"></div>`;

    gameEl.querySelectorAll("#bbOpts .bb-opt").forEach((el) => el.onclick = () => onAnswer(Number(el.dataset.i), el));
  }

  function renderStem(text) {
    let out = API.esc(text);
    out = out.replace(/＿+/g, '<span class="blk">&nbsp;</span>');
    return out;
  }

  function onAnswer(i, el) {
    const b = battle; if (b.answered) return;
    b.answered = true;
    const correct = i === b.shufAns;
    SFX.select();

    gameEl.querySelectorAll("#bbOpts .bb-opt").forEach((o, idx) => {
      o.disabled = true;
      if (idx === b.shufAns) o.classList.add("ok");
      else if (idx === i) o.classList.add("ko");
      else o.classList.add("dim");
    });

    // SRS / stats (hors démo)
    if (b.cur.gid && API.record) API.record(b.cur.gid, correct);

    if (correct) playerAttack(); else { if (el) { el.classList.add("bb-shake"); } bossAttack(); }

    // explication
    const after = gq("#bbAfter");
    const e = b.cur.e ? `<div class="bb-expl">${API.esc(b.cur.e)}</div>` : "";
    let dead = b.hp <= 0, lost = b.php <= 0;
    const btnLabel = dead ? "Achever le boss →" : lost ? "Voir le résultat" : "Continuer →";
    const btnCls = correct ? "gn" : "rd";
    after.innerHTML = e + `<button class="bb-next ${btnCls}" id="bbNext">${btnLabel}</button>`;
    gq("#bbNext").onclick = () => {
      if (dead) return finishBattle(true);
      if (lost) return finishBattle(false);
      nextQuestion();
    };
    after.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function playerAttack() {
    const b = battle;
    b.combo++;
    let dmg = b.boss.dmg * (1 + (b.combo - 1) * 0.22);
    const crit = b.combo >= 3 && Math.random() < 0.28;
    if (crit) dmg *= 1.8;
    dmg = Math.round(dmg * rand(0.92, 1.08));
    b.hp = Math.max(0, b.hp - dmg);
    b.bossHit = 1; b.shake = crit ? 1 : 0.7;
    spawnSlashes();
    floatDamage(dmg, crit ? "crit" : "norm");
    showCombo();
    if (crit) SFX.crit(); else SFX.slash();
    setTimeout(() => SFX.hit(), 60);
    syncBars();
    if (b.hp <= 0) { b.bossDying = 0.001; spawnDeath(); }
  }

  function bossAttack() {
    const b = battle;
    b.combo = 0; showCombo();
    let dmg = Math.round(b.boss.atk * rand(0.85, 1.15));
    b.php = Math.max(0, b.php - dmg);
    b.bossAttack = 1; b.shake = 0.85; b.flash = 1;
    floatDamage(dmg, "pl");
    SFX.hurt();
    const sf = gq("#bbScreenFlash");
    if (sf) { sf.style.transition = "none"; sf.style.background = "rgba(255,60,60,.5)"; requestAnimationFrame(() => { sf.style.transition = "background .5s"; sf.style.background = "rgba(255,60,60,0)"; }); }
    syncBars();
  }

  /* -------------------------------------------------------- fin combat */
  function finishBattle(won) {
    const b = battle, boss = b.boss;
    const lvl = API.level || "N5";
    if (won && !API.isDemo) markCleared(boss.id, b.turn);
    if (won) SFX.victory(); else SFX.defeat();

    // étoiles selon PV restants
    const ratio = b.php / b.pmax;
    const stars = won ? (ratio > 0.7 ? 3 : ratio > 0.35 ? 2 : 1) : 0;
    const starStr = "★".repeat(stars) + "☆".repeat(3 - stars);

    const idx = BOSSES.findIndex((x) => x.id === boss.id);
    const isLast = idx === BOSSES.length - 1;
    const nextBoss = BOSSES[idx + 1];

    // overlay plein écran
    const stage = gameEl;
    let inner;
    if (won) {
      if (API.isDemo) {
        inner = `
          <div class="big" style="color:#46d18b">勝利!</div>
          <div class="sub">${boss.victory}</div>
          <div class="bb-stars" style="color:#ffce54">${starStr}</div>
          <p style="color:rgba(255,255,255,.92);margin-top:14px;font-weight:600;max-width:340px">
            C'était la démo. Débloque les <b>${BOSSES.length - 1} autres boss</b> et toute la grammaire ${lvl}.</p>
          <div class="bb-endbtns">
            <a class="bb-eb primary" href="${API.buyLink || "#"}">Débloquer la version complète →</a>
          </div>
          <p style="font-size:.72rem;color:rgba(255,255,255,.6);margin-top:10px">Paiement unique · sécurisé par Gumroad</p>`;
      } else {
        inner = `
          <div class="big" style="color:#46d18b">勝利!</div>
          <div class="sub">${boss.victory}</div>
          <div class="bb-stars" style="color:#ffce54">${starStr}</div>
          <div class="bb-endbtns">
            ${isLast
              ? `<button class="bb-eb primary" id="bbToMap">Tous les boss vaincus 🎉</button>`
              : `<button class="bb-eb primary" id="bbNextBoss">Boss suivant : ${nextBoss.romaji} →</button>
                 <button class="bb-eb ghost" id="bbToMap">Carte</button>`}
          </div>`;
      }
    } else {
      inner = `
        <div class="big" style="color:#ff6b6b">敗北…</div>
        <div class="sub">${boss.romaji} t'a vaincu. Réessaie !</div>
        <div class="bb-endbtns">
          <button class="bb-eb primary" id="bbRetry">Réessayer</button>
          <button class="bb-eb ghost" id="bbToMap">Carte</button>
        </div>`;
    }

    // attendre la fin de l'anim de mort si victoire
    const reveal = () => {
      if (!gameEl) return;
      const ov = document.createElement("div");
      ov.className = "bb-over"; ov.innerHTML = inner;
      gameEl.appendChild(ov);
      const panel = gq("#bbPanel"); if (panel) panel.innerHTML = "";
      const map = gq("#bbToMap"); if (map) map.onclick = renderMap;
      const nb = gq("#bbNextBoss"); if (nb) nb.onclick = () => startBattle(nextBoss.id);
      const rt = gq("#bbRetry"); if (rt) rt.onclick = () => startBattle(boss.id);
      if (won) confetti();
    };
    battle.phase = "end";
    if (won) setTimeout(reveal, 950); else reveal();
  }

  function confetti() {
    const stage = gameEl; if (!stage) return;
    const cv = document.createElement("canvas");
    cv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:9";
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    stage.appendChild(cv);
    const cc = cv.getContext("2d");
    const cols = ["#ffce54", "#46d18b", "#5b9cff", "#ff6b6b", "#fff"];
    const ps = Array.from({ length: 90 }, () => ({ x: cv.width / 2, y: cv.height / 2, vx: rand(-6, 6), vy: rand(-9, -2), g: 0.22, w: rand(4, 9), h: rand(4, 9), rot: rand(0, TAU), vr: rand(-.2, .2), op: 1, c: cols[Math.floor(rand(0, cols.length))] }));
    let f = 0;
    (function tick() {
      cc.clearRect(0, 0, cv.width, cv.height); f++;
      ps.forEach((p) => { p.x += p.vx; p.y += p.vy; p.vy += p.g; p.rot += p.vr; if (f > 60) p.op = Math.max(0, p.op - 0.02); cc.save(); cc.translate(p.x, p.y); cc.rotate(p.rot); cc.globalAlpha = p.op; cc.fillStyle = p.c; cc.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cc.restore(); });
      if (f < 130 && stage.contains(cv)) requestAnimationFrame(tick); else cv.remove();
    })();
  }

  /* ------------------------------------------------------------- public */
  function mount(container, api) {
    API = api; ROOT = container;
    injectCSS();
    renderMap();
  }
  function stop() {
    cancelAnimationFrame(raf); raf = 0;
    if (onResize) { window.removeEventListener("resize", onResize); onResize = null; }
    if (gameEl) { gameEl.remove(); gameEl = null; }
    document.documentElement.style.overflow = "";
    if (battle) battle = null;
  }

  window.BossBattle = { mount, stop };
})();
