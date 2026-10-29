/* reetnandy.com. Progressive enhancement only: the page reads fully without this file. */

/* =====================================================================
   LATELY — the live status row in the "Lately" section.
   The "Latest updates" list itself is plain HTML in index.html (search for
   "Chapter 5"), so search engines and no-script visitors see it too.
   ===================================================================== */
const LATELY = {
  github: 'TechPertz',                 // public GitHub user for the live "last push"
  // What "probably" goes next to the New York clock, by hour (24h, Eastern Time). First match wins.
  hours: [
    { from: 0, to: 7, say: 'asleep' },
    { from: 7, to: 9, say: 'making breakfast' },
    { from: 9, to: 12, say: 'deep in code' },
    { from: 12, to: 13, say: 'at lunch' },
    { from: 13, to: 18, say: 'shipping' },
    { from: 18, to: 21, say: 'cooking dinner' },
    { from: 21, to: 24, say: 'on one more commit' },
  ],
};

(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const wide = matchMedia('(min-width: 901px)');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  /* ---- bar: solid once scrolled, tucks away while reading down ---- */
  const bar = $('#bar');
  let lastY = scrollY;

  /* ---- reveals, staggered among siblings ---- */
  const seen = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in', 'is-seen'); seen.unobserve(e.target); }
  }), { rootMargin: '0px 0px -12% 0px' });
  $$('.reveal').forEach((el) => {
    const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    el.style.setProperty('--d', Math.min(sibs.indexOf(el), 6));
    seen.observe(el);
  });
  seen.observe($('#contact'));
  $$('.call, .build').forEach((el) => seen.observe(el));

  /* ---- statements: words light up as you read down ---- */
  const scrubs = $$('.scrub').map((el) => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = words.map((w) => `<span class="w" aria-hidden="true">${w}</span>`).join(' ');
    el.classList.add('is-scrub');
    return { el, words: $$('.w', el), lit: -1 };
  });

  /* ---- the living system ---- */
  const stage = $('#stage');
  const tip = $('#tip');
  const label = $('#stage-step');
  const systems = $$('.sys', stage);
  let step = null;

  const paint = (pred, focus) => systems.forEach((svg) => {
    $$('.node', svg).forEach((n) => n.classList.toggle('on', pred(n.dataset.g.split(' '), n.dataset.id)));
    $$('.edge, .packet', svg).forEach((e) => e.classList.toggle('on', pred(e.dataset.g.split(' '), null, e)));
    stage.classList.toggle('is-focus', focus);
  });

  // a beat with a symptom first marks where it looked wrong, then moves the light to the cause
  let symT = 0, curText = '';
  const setLabel = (html) => {
    if (!label) return;
    label.innerHTML = html;
    label.classList.remove('swap'); void label.offsetWidth; label.classList.add('swap');
  };
  const clearSym = () => systems.forEach((svg) => $$('.node.sym', svg).forEach((n) => n.classList.remove('sym')));
  const lightCause = (s) => {
    clearSym();
    if (!s) paint(() => false, false);
    else if (s === 'all') paint(() => true, false);
    else paint((g) => g.includes(s), true);
    setLabel(curText);
  };
  const setStep = (s, text, sym) => {
    if (s === step) return;
    step = s; curText = text || '';
    clearTimeout(symT);
    if (s && sym && !reduce) {
      clearSym();
      paint(() => false, true);
      systems.forEach((svg) => { const n = $(`.node[data-id="${sym}"]`, svg); if (n) n.classList.add('sym'); });
      setLabel('<span class="sym-chip">Symptom…</span>');
      symT = setTimeout(() => lightCause(s), 1150);
    } else lightCause(s);
  };

  new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && !stage.classList.contains('is-built')) {
      stage.classList.add('is-building', 'is-built');
      setTimeout(() => stage.classList.remove('is-building'), 1600);
    }
  }), { threshold: 0.25 }).observe(stage);

  const steps = $$('.step');
  // symptom → root cause → fix: a thin line in the left gutter, measured from the real text positions
  const traced = steps.filter((st) => $('.step-was', st) && $('.step-act', st));
  traced.forEach((st) => {
    const t = document.createElement('span');
    t.className = 'trace'; t.setAttribute('aria-hidden', 'true');
    t.innerHTML = '<i class="d-cause"></i><i class="d-fix"></i>';
    st.appendChild(t);
  });
  const measureTraces = () => traced.forEach((st) => {
    const was = $('.step-was', st), act = $('.step-act .k', st), fix = $('.step-so .k', st), t = $('.trace', st);
    const base = st.getBoundingClientRect().top;
    const rel = (el) => { const r = el.getBoundingClientRect(); return { top: r.top - base, mid: r.top - base + r.height / 2 }; };
    const w = was.getBoundingClientRect();
    const top = w.bottom - base + 4;
    const yC = rel(act).mid - 3.5, yF = rel(fix).mid - 3.5;
    t.style.setProperty('--tr-y', `${top}px`);
    t.style.setProperty('--tr-h', `${Math.max(0, yF - top + 3.5)}px`);
    t.children[0].style.setProperty('--d', `${yC - top}px`);
    t.children[1].style.setProperty('--d', `${yF - top}px`);
  });
  measureTraces();
  addEventListener('resize', measureTraces);
  if (document.fonts) document.fonts.ready.then(measureTraces);
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(measureTraces); traced.forEach((st) => ro.observe(st)); }
  // the active step is the last one whose top has passed the reading line
  // (mid-screen on desktop; the middle of the space under the pinned diagram on phones)
  const sysEl = $('#system');
  const pickStep = (vh) => {
    const sr = stage.getBoundingClientRect();
    const pinnedTop = sr.height < vh * 0.8;
    if (pinnedTop) sysEl.style.setProperty('--band', `${Math.round(sr.height)}px`);
    const mid = pinnedTop ? sr.bottom + (vh - sr.bottom) / 2 : vh / 2;
    let active = null, best = Infinity;
    if (pinnedTop) {
      // phones: a step takes over once its top reaches just under the pinned diagram,
      // so the previous step stays readable until the next one is actually there
      const line = sr.bottom + (vh - sr.bottom) * 0.28;
      steps.forEach((s) => { const r = s.getBoundingClientRect(); if (r.top <= line && r.bottom > sr.bottom) active = s; });
      if (!active) { const r = steps[0].getBoundingClientRect(); if (r.top < vh && r.bottom > sr.bottom) active = steps[0]; }
    } else steps.forEach((s) => {
      const r = s.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < best && r.top < vh && r.bottom > 0) { best = d; active = s; }
    });
    const first = steps[0].getBoundingClientRect();
    if (first.top + first.height * 0.25 > vh) active = null;
    steps.forEach((s) => s.classList.toggle('is-active', s === active));
    if (active) {
      setStep(active.dataset.step, active.dataset.label, active.dataset.sym);
      $$(`[data-solves="${active.dataset.step}"]`).forEach((t) => t.classList.add('is-solved'));
    } else setStep(null, '');
  };

  // hover or focus a node: light it, its links and its neighbours; show what it does
  const desk = $('.sys-desk', stage);
  if (desk) {
    const enter = (node) => {
      const id = node.dataset.id;
      const near = new Set([id]);
      $$('.edge', desk).forEach((e) => { if (e.dataset.a === id || e.dataset.b === id) { near.add(e.dataset.a); near.add(e.dataset.b); } });
      $$('.node', desk).forEach((n) => { n.classList.toggle('on', near.has(n.dataset.id)); n.classList.toggle('hot', n === node); });
      $$('.edge, .packet', desk).forEach((e) => e.classList.toggle('on', e.dataset.a === id || e.dataset.b === id));
      stage.classList.add('is-focus');
      const name = $('.n-name', node).textContent;
      tip.innerHTML = `<b>${name}</b>${node.dataset.tip}`;
      tip.hidden = false;
      const sr = stage.getBoundingClientRect(), nr = node.getBoundingClientRect();
      const x = clamp(nr.left - sr.left + nr.width / 2 - 140, 8, sr.width - 288);
      const below = nr.top - sr.top < sr.height * 0.32;
      const y = below ? nr.bottom - sr.top + 12 : nr.top - sr.top - 12;
      tip.style.setProperty('--tx', `${x}px`);
      tip.style.setProperty('--ty', `${y}px`);
      tip.style.transformOrigin = below ? 'top center' : 'bottom center';
      requestAnimationFrame(() => {
        if (!below) tip.style.setProperty('--ty', `${y - tip.offsetHeight}px`);
        tip.classList.add('show');
      });
    };
    const leave = () => {
      tip.classList.remove('show');
      $$('.node', desk).forEach((n) => n.classList.remove('hot'));
      const s = step; step = null; setStep(s, curText);
    };
    $$('.node', desk).forEach((n) => {
      n.addEventListener('mouseenter', () => enter(n));
      n.addEventListener('mouseleave', leave);
      n.addEventListener('focus', () => enter(n));
      n.addEventListener('blur', leave);
    });
  }

  /* ---- journey: the line fills as you scroll, the current year darkens ---- */
  const path = $('#path');
  const beats = $$('.beat');
  const fades = $$('.fade-up');

  /* ---- one scroll loop ---- */
  let ticking = false;
  const frame = () => {
    ticking = false;
    const vh = innerHeight, y = scrollY;
    bar.classList.toggle('is-scrolled', y > 8);
    bar.classList.toggle('is-hidden', innerWidth > 900 && y > lastY && y > vh * 0.9 && !bar.matches(':focus-within'));
    document.documentElement.classList.toggle('bar-up', !bar.classList.contains('is-hidden'));
    lastY = y;

    scrubs.forEach((s) => {
      const r = s.el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 1.5) return;
      const p = clamp((vh * 0.9 - r.top) / (r.height + vh * 0.12));
      const lit = Math.round(p * s.words.length);
      if (lit !== s.lit) { s.words.forEach((w, i) => w.classList.toggle('on', i < lit)); s.lit = lit; }
    });

    if (fades.length && !reduce) {
      const p = clamp(y / vh);
      fades.forEach((f) => {
        f.style.setProperty('--oy', `${(-p * vh * 0.18).toFixed(1)}px`);
        f.style.setProperty('--oo', (1 - p * 0.9).toFixed(3));
      });
    }

    if (steps.length) pickStep(vh);

    if (path) {
      const r = path.getBoundingClientRect();
      path.style.setProperty('--p', clamp((vh * 0.55 - r.top) / r.height).toFixed(4));
      beats.forEach((b) => { const br = b.getBoundingClientRect(); b.classList.toggle('is-now', br.top < vh * 0.6 && br.bottom > vh * 0.25); });
    }

  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener('scroll', onScroll, { passive: true });

  /* =====================================================================
     The desk. Each object (photo, the two tickets) has a list of docks down the
     page. It sits in a dock and scrolls with it, then, as the next dock's
     marker nears the middle of the screen, glides over to it.
     ===================================================================== */
  const fly = (() => {
    if (reduce || !wide.matches) { document.documentElement.classList.add('no-fly'); return null; }
    const layer = document.createElement('div');
    layer.className = 'fly';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
    const objs = $$('[data-obj]').map((el, i) => {
      const id = el.dataset.obj;
      const all = $$(`[data-dock="${id}"]`);
      layer.appendChild(el);
      el.style.width = '';
      if (fine) el.classList.add('can-drag');
      return { el, id, all, docks: [], w: 0, h: 0, dx: 0, dy: 0, vx: 0, vy: 0, drag: false, depth: [0.9, 1.4, 0.6][i] || 1, phase: i * 1.7 };
    });
    const docTop = (el) => { let y = 0; for (let n = el; n; n = n.offsetParent) y += n.offsetTop; return y; };
    const measure = () => {
      const vh = innerHeight;
      objs.forEach((o) => {
        o.w = o.el.offsetWidth; o.h = o.el.offsetHeight;
        o.docks = o.all.filter((d) => d.offsetWidth > 0).map((d) => {
          const m = d.dataset.arrive ? $(d.dataset.arrive) : d;
          return { el: d, rot: +(d.dataset.rot || 0), at: docTop(m) - vh * 0.5 };
        });
        o.docks.forEach((d, k) => { if (k === 0) d.at = -Infinity; });
      });
    };
    // travel window before arriving at a dock, in px of scroll
    const span = (prev, next) => Math.min(innerHeight * 0.85, Math.max(1, next.at - (prev.at === -Infinity ? 0 : prev.at)) * 0.9);
    let mx = 0, my = 0, smx = 0, smy = 0;
    if (fine) addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; }, { passive: true });

    const place = (o, now) => {
      const y = scrollY, vh = innerHeight, d = o.docks;
      if (!d.length) return;
      let k = 0;
      while (k < d.length - 1 && y >= d[k + 1].at) k++;
      const a = d[k], b = d[k + 1];
      let t = 0;
      if (b) { const s = span(a, b); t = clamp((y - (b.at - s)) / s); }
      // k is the dock we sit in (or are leaving); t is how far along we are toward the next one
      const ra = a.el.getBoundingClientRect();
      let cx = ra.left + ra.width / 2, cy = ra.top + ra.height / 2, sc = ra.width / o.w, rot = a.rot;
      let op = 1;
      if (b && t > 0) {
        const rb = b.el.getBoundingClientRect(), e = ease(t);
        const bx = rb.left + rb.width / 2, by = rb.top + rb.height / 2;
        const aOn = cy + o.h * sc / 2 > 0 && cy - o.h * sc / 2 < vh;
        if (aOn) {
          // both ends in view: glide across on a slight arc
          cx = lerp(cx, bx, e);
          cy = lerp(cy, by, e) - Math.sin(Math.PI * e) * vh * 0.05;
          rot = lerp(rot, b.rot, e) + Math.sin(Math.PI * e) * 6 * (o.depth > 1 ? 1 : -1);
        } else {
          // the old dock has scrolled away: settle into the new one from just above it
          cx = bx; cy = by - (1 - e) * 120; rot = lerp(b.rot - 8, b.rot, e); op = e;
        }
        sc = lerp(sc, rb.width / o.w, e);
      }
      // a slow idle float and a little lean toward the cursor
      const fl = Math.sin(now / 1400 + o.phase) * 5;
      const lx = -smx * 22 * o.depth, ly = -smy * 14 * o.depth;
      const x = cx - o.w / 2 + lx + o.dx, yy = cy - o.h / 2 + ly + fl + o.dy;
      const half = o.h * sc / 2, mid = yy + o.h / 2;
      const off = mid - half > vh + 40 || mid + half < -40;
      o.el.classList.toggle('is-gone', off && !o.drag);
      if (!off || o.drag) {
        o.el.style.transform = `translate3d(${x.toFixed(1)}px,${yy.toFixed(1)}px,0) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(4)})`;
        o.el.style.opacity = op < 1 ? op.toFixed(3) : '';
      }
    };

    // pick things up; they spring back to where they belong
    objs.forEach((o) => {
      if (!fine) return;
      let sx = 0, sy = 0, id = null;
      o.el.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        id = e.pointerId; sx = e.clientX - o.dx; sy = e.clientY - o.dy;
        o.el.setPointerCapture(id); o.drag = true; o.el.classList.add('is-dragging');
        layer.appendChild(o.el);
      });
      o.el.addEventListener('pointermove', (e) => { if (e.pointerId === id) { o.dx = e.clientX - sx; o.dy = e.clientY - sy; } });
      const drop = (e) => { if (e.pointerId !== id) return; id = null; o.drag = false; o.el.classList.remove('is-dragging'); };
      o.el.addEventListener('pointerup', drop);
      o.el.addEventListener('pointercancel', drop);
    });

    let raf = 0;
    const loop = (now) => {
      smx += (mx - smx) * 0.06; smy += (my - smy) * 0.06;
      objs.forEach((o) => {
        if (!o.drag && (o.dx || o.dy)) {
          o.vx = (o.vx - o.dx * 0.09) * 0.8; o.vy = (o.vy - o.dy * 0.09) * 0.8;
          o.dx += o.vx; o.dy += o.vy;
          if (Math.abs(o.dx) + Math.abs(o.dy) + Math.abs(o.vx) + Math.abs(o.vy) < 0.15) { o.dx = o.dy = o.vx = o.vy = 0; }
        }
        place(o, now);
      });
      raf = requestAnimationFrame(loop);
    };
    document.addEventListener('visibilitychange', () => {
      if (raf === -1) return;
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (!raf) raf = requestAnimationFrame(loop);
    });
    const deskEl = $('.desk');
    const stop = () => {
      cancelAnimationFrame(raf); raf = -1;
      objs.forEach((o) => { o.el.style.transform = ''; o.el.style.opacity = ''; o.el.classList.remove('is-gone', 'can-drag'); deskEl.appendChild(o.el); });
      layer.remove();
      document.documentElement.classList.add('no-fly');
    };
    return { measure, stop, start: () => { measure(); if (!raf) raf = requestAnimationFrame(loop); } };
  })();

  /* =====================================================================
     Lately: the New York clock and the last push are live; updates rise in one by one.
     ===================================================================== */
  (() => {
    const now = $('#lately-now'), push = $('#last-push');
    if (!now) return;

    // updates: each entry rises in as it arrives, a beat after the one before
    const ups = $$('.upd');
    const upIO = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); upIO.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    ups.forEach((u) => { const l = [...u.parentElement.children]; u.style.setProperty('--d', Math.min(l.indexOf(u), 4)); upIO.observe(u); });
    const more = $('#upd-more');
    if (more) more.addEventListener('toggle', () => { if (more.open) $$('.upd', more).forEach((u, i) => { u.style.setProperty('--d', i); requestAnimationFrame(() => u.classList.add('in')); }); });

    // the last push, live from GitHub's public events (cached for this visit). Repo only, no relative time.
    const esc = (t) => t.replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]);
    const showPush = (c) => {
      if (!push || !c) return;
      push.innerHTML = `<span class="lp-dot" aria-hidden="true"></span><span>Last push to <a href="https://github.com/${esc(c.full)}" target="_blank" rel="noopener">${esc(c.repo)}</a></span>`;
    };
    const KEY = 'lately-commit';
    let cached = null;
    try { cached = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { /* storage off */ }
    if (cached) showPush(cached);
    else if (push) {
      fetch(`https://api.github.com/users/${LATELY.github}/events/public?per_page=30`, { headers: { Accept: 'application/vnd.github+json' } })
        .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
        .then((evs) => {
          const p = evs.find((e) => e.type === 'PushEvent');
          if (!p) return;
          const c = { repo: p.repo.name.split('/').pop(), full: p.repo.name, at: p.created_at };
          try { sessionStorage.setItem(KEY, JSON.stringify(c)); } catch (e) { /* storage off */ }
          showPush(c);
        })
        .catch(() => { /* rate-limited or offline: keep the fallback in the HTML */ });
    }

    // New York, right now
    const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' });
    const hourNY = () => +new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', hourCycle: 'h23' }).format(new Date());
    const tickClock = () => {
      const h = hourNY();
      const g = (LATELY.hours.find((x) => h >= x.from && h < x.to) || {}).say || 'around';
      now.innerHTML = `<span>It's</span> <span class="clock">${fmt.format(new Date()).toLowerCase()}</span> <span>in New York. I'm probably</span> <span class="guess">${g}</span>`;
    };
    tickClock();
    setInterval(tickClock, 20000);
  })();

  /* ---- sizes: after fonts and images settle, and on resize ---- */
  let flyOn = !!fly;
  const resize = () => {
    if (flyOn && !wide.matches) { fly.stop(); flyOn = false; }
    if (flyOn) fly.measure(); frame();
  };
  addEventListener('resize', resize);
  if (wide.addEventListener) wide.addEventListener('change', resize);
  addEventListener('load', resize);
  $$('.beat-d').forEach((d) => d.addEventListener('toggle', () => setTimeout(resize, 650)));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);
  frame();
  if (fly) fly.start();

  /* ---- projects (ported from option E): a rail that vertical scroll drives sideways, then a list ---- */
  const kin = $('#kin-rail'), track = $('#rail-track'), view = $('#rail-view'), railBar = $('#rail-bar');
  const panels = track ? $$('.panel', track) : [];
  const railWide = matchMedia('(min-width: 761px)');
  let railOn = false, railDist = 0;
  const sizeRail = () => {
    if (!kin) return;
    railOn = railWide.matches && !reduce;
    if (!railOn) { kin.style.height = ''; track.style.transform = ''; return; }
    railDist = Math.max(0, track.scrollWidth - view.clientWidth);
    kin.style.height = (innerHeight + railDist * 0.85) + 'px';
  };
  const setRailBar = (p) => { railBar.style.transform = `scaleX(${(1 / panels.length + p * (1 - 1 / panels.length)).toFixed(3)})`; };
  const railFrame = () => {
    if (!railOn) return;
    const rr = kin.getBoundingClientRect();
    const p = clamp(-rr.top / Math.max(1, rr.height - innerHeight));
    track.style.transform = `translate3d(${(-p * railDist).toFixed(1)}px,0,0)`;
    setRailBar(p);
  };
  if (kin) {
    let rt = false;
    addEventListener('scroll', () => { if (!rt) { rt = true; requestAnimationFrame(() => { railFrame(); rt = false; }); } }, { passive: true });
    const rs = () => { sizeRail(); railFrame(); };
    addEventListener('resize', rs);
    if (railWide.addEventListener) railWide.addEventListener('change', rs);
    addEventListener('load', rs);
    rs();
    view.addEventListener('scroll', () => { if (!railOn) setRailBar(view.scrollLeft / Math.max(1, view.scrollWidth - view.clientWidth)); }, { passive: true });
    $$('.pods i', kin).forEach((p, i) => p.style.setProperty('--n', (i * 7) % 24));
    const pio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-seen'); pio.unobserve(e.target); } }), { threshold: 0.1 });
    panels.forEach((el) => pio.observe(el));
  }
  $$('.kin [data-up]').forEach((el, i) => { el.style.setProperty('--d', i % 4); seen.observe(el); });

  /* ---- the eight more: a preview trails the cursor, kept in the left column so it never covers a row (from option D) ---- */
  const peek = $('#peek'), peekIn = $('#peek-in'), list = $('#more-list');
  if (peek && list && fine && !reduce) {
    const A = '#2346ff', I = '#0e0e0c', G = 'rgba(14,14,12,.14)', S = '#f4f4f2';
    const svg = (body) => `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg"><rect width="360" height="240" fill="${S}"/>${body}</svg>`;
    const rnd = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const txt = (x, y, t, o = '') => `<text x="${x}" y="${y}" font-family="Geist, sans-serif" font-size="13" font-weight="500" fill="${I}" ${o}>${t}</text>`;
    const V = {
      docflow: () => '<img src="assets/plate-report.jpg" alt="">',
      vector: () => {
        const r = rnd(7); let b = '';
        for (let i = 0; i < 90; i++) { const x = 30 + r() * 300, y = 30 + r() * 180, d = Math.hypot(x - 210, y - 110); b += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${d < 46 ? 4 : 2.6}" fill="${d < 46 ? I : G}"/>`; }
        return svg(`${b}<circle cx="210" cy="110" r="46" fill="none" stroke="${I}" stroke-dasharray="3 4"/><circle cx="210" cy="110" r="6" fill="${A}"/>${txt(24, 222, '10M vectors · 18 ms')}`);
      },
      grant: () => {
        let b = ''; const L = [50, 95, 140, 185], R = [70, 120, 170];
        L.forEach((y, i) => R.forEach((ry, j) => { if ((i + j) % 2 === 0) b += `<path d="M70 ${y} C180 ${y} 180 ${ry} 290 ${ry}" fill="none" stroke="${i === 1 && j === 1 ? A : G}" stroke-width="${i === 1 && j === 1 ? 2.5 : 1.2}"/>`; }));
        L.forEach((y) => b += `<circle cx="64" cy="${y}" r="9" fill="${I}"/>`);
        R.forEach((y) => b += `<rect x="290" y="${y - 12}" width="44" height="24" rx="12" fill="#fff" stroke="${I}"/>`);
        return svg(b + txt(24, 226, 'builders → grants'));
      },
      fitness: () => {
        const r = rnd(3); let d = 'M24 170'; for (let x = 24; x <= 336; x += 24) d += ` L${x} ${(150 - Math.sin(x / 40) * 40 - r() * 26).toFixed(1)}`;
        return svg(`<path d="${d}" fill="none" stroke="${I}" stroke-width="2.5" stroke-linejoin="round"/><path d="${d} L336 200 L24 200Z" fill="${A}" opacity=".14"/><circle cx="336" cy="${d.split(' ').pop()}" r="5" fill="${A}"/>${txt(24, 226, 'Google Fit → SageMaker')}`);
      },
      kube: () => {
        let b = ''; for (let i = 0; i < 18; i++) { const x = 30 + (i % 6) * 52, y = 34 + Math.floor(i / 6) * 52; b += `<rect x="${x}" y="${y}" width="40" height="40" rx="10" fill="${i === 9 ? A : '#fff'}" stroke="${i === 9 ? A : G}"/>`; }
        return svg(b + txt(24, 226, 'pod down · alert sent to Slack'));
      },
      board: () => svg(`<path d="M40 160 C90 60 140 200 190 100 S280 60 320 140" fill="none" stroke="${I}" stroke-width="3" stroke-linecap="round"/><path d="M60 80 C120 120 160 40 230 70" fill="none" stroke="${A}" stroke-width="3" stroke-linecap="round"/><path d="M230 70 l0 18 l6 -6 l8 2 z" fill="${A}"/><path d="M320 140 l0 18 l6 -6 l8 2 z" fill="${I}"/>${txt(24, 226, 'two users · under 150 ms sync')}`),
      flow: () => {
        const cmds = ['ls -la', 'grep .log', 'sort', '> out.txt'];
        return svg(cmds.map((c, i) => `<rect x="${24 + i * 82}" y="96" width="70" height="44" rx="22" fill="${i === 3 ? A : '#fff'}" stroke="${I}"/><text x="${59 + i * 82}" y="123" text-anchor="middle" font-family="Geist Mono, monospace" font-size="11" fill="${I}">${c}</text>${i < 3 ? `<path d="M${94 + i * 82} 118 h12" stroke="${I}"/>` : ''}`).join('') + txt(24, 226, '.flow → pipes, redirects, errors'));
      },
      disk: () => {
        const v = [[15003, 'cached'], [3000, 'large'], [2500, 'cold']];
        return svg(v.map(([n, l], i) => { const w = n / 15003 * 270; return `<rect x="24" y="${44 + i * 52}" width="${w.toFixed(1)}" height="30" rx="6" fill="${i === 0 ? A : I}"/><text x="${Math.max(34 + w, 120)}" y="${64 + i * 52}" font-family="Geist, sans-serif" font-size="13" font-weight="500" fill="${I}">${n.toLocaleString('en-US')} MiB/s · ${l}</text>`; }).join('') + txt(24, 226, 'multithreaded reads, 5x+'));
      },
      mail: () => svg(`<rect x="28" y="56" width="120" height="84" rx="10" fill="#fff" stroke="${I}"/><path d="M28 66 l60 40 l60 -40" fill="none" stroke="${I}"/><path d="M160 98 h34" stroke="${A}" stroke-width="2.5"/><path d="M188 92 l8 6 l-8 6" fill="none" stroke="${A}" stroke-width="2.5"/>${[0, 1, 2].map((i) => `<rect x="210" y="${44 + i * 40}" width="122" height="30" rx="8" fill="${i === 0 ? I : '#fff'}" stroke="${I}"/>`).join('')}${txt(24, 226, 'Gmail → tasks → Trello')}`),
      site: () => svg(`<rect x="34" y="30" width="292" height="170" rx="12" fill="#fff" stroke="${G}"/><text x="54" y="104" font-family="Geist, sans-serif" font-size="46" font-weight="600" letter-spacing="-3" fill="${I}">Reet Nandy</text><rect x="54" y="124" width="150" height="10" rx="5" fill="${G}"/><rect x="54" y="152" width="74" height="26" rx="13" fill="${I}"/><circle cx="300" cy="52" r="5" fill="${A}"/>`),
      map: () => svg(`${[50, 100, 150, 200].map((y) => `<path d="M0 ${y} H360" stroke="${G}"/>`).join('')}${[60, 140, 220, 300].map((x) => `<path d="M${x} 0 V240" stroke="${G}"/>`).join('')}<circle cx="180" cy="116" r="54" fill="${A}" opacity=".16"/><circle cx="180" cy="116" r="54" fill="none" stroke="${A}" stroke-width="1.5"/><path d="M180 116 m0 -26 a14 14 0 0 1 14 14 c0 12 -14 26 -14 26 s-14 -14 -14 -26 a14 14 0 0 1 14 -14z" fill="${I}"/>${txt(24, 226, 'results within 100 m')}`),
      review: () => svg(['positive', 'neutral', 'negative'].map((l, i) => `<text x="24" y="${78 + i * 44}" font-family="Geist, sans-serif" font-size="13" font-weight="500" fill="${I}">${l}</text><rect x="104" y="${64 + i * 44}" width="${[200, 120, 70][i]}" height="18" rx="9" fill="${i === 0 ? A : i === 1 ? I : G}"/>`).join('') + txt(24, 226, 'spaCy sentiment + keywords')),
      tele: () => svg(`<rect x="24" y="40" width="190" height="40" rx="20" fill="#fff" stroke="${G}"/>${txt(42, 65, '/refund 4821')}<rect x="146" y="96" width="190" height="40" rx="20" fill="${I}"/><text x="164" y="121" font-family="Geist, sans-serif" font-size="13" font-weight="500" fill="${S}">Approved. Refund sent.</text><rect x="24" y="152" width="130" height="40" rx="20" fill="#fff" stroke="${G}"/>${txt(42, 177, 'Thanks!')}`),
      chat: () => svg(`${[[24, 40, 160, '#fff'], [176, 92, 160, A], [24, 144, 200, '#fff']].map(([x, y, w, f]) => `<rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="${f}" stroke="${f === '#fff' ? G : f}"/>`).join('')}${txt(24, 226, 'Flutter + Firebase group rooms')}`),
    };
    let tx = 0, ty = 0, x = 0, y = 0, raf = 0, cur = '', pw = 360;
    const loop = () => {
      const dx = tx - x; x += dx * 0.16; y += (ty - y) * 0.16;
      peek.style.setProperty('--px', `${x.toFixed(1)}px`);
      peek.style.setProperty('--py', `${y.toFixed(1)}px`);
      peek.style.setProperty('--pr', `${clamp(dy(dx), -6, 6).toFixed(2)}deg`);
      raf = Math.abs(dx) > 0.2 || Math.abs(ty - y) > 0.2 ? requestAnimationFrame(loop) : 0;
    };
    const dy = (d) => d * 0.06;
    // the room to the left of the list; no room (one column) means no preview
    const room = () => { const r = list.getBoundingClientRect(); return r.left - 48; };
    const aim = (e) => {
      const r = list.getBoundingClientRect();
      pw = Math.min(360, room());
      peek.style.width = `${pw}px`; peek.style.height = `${(pw * 2 / 3).toFixed(0)}px`;
      tx = r.left - 40 - pw + clamp((e.clientX - r.left) / r.width, 0, 1) * 16;
      ty = clamp(e.clientY - pw / 3, 80, innerHeight - pw * 2 / 3 - 24);
    };
    list.addEventListener('mousemove', (e) => { if (room() < 240) return; aim(e); if (!raf) raf = requestAnimationFrame(loop); });
    $$('li[data-peek]', list).forEach((li) => li.addEventListener('mouseenter', (e) => {
      if (room() < 240) { peek.classList.remove('show'); return; }
      const k = li.dataset.peek;
      aim(e);
      if (!peek.classList.contains('show')) { x = tx; y = ty; }
      if (k !== cur && V[k]) { peekIn.innerHTML = V[k](); cur = k; }
      peek.classList.add('show');
      if (!raf) raf = requestAnimationFrame(loop);
    }));
    list.addEventListener('mouseleave', () => peek.classList.remove('show'));
  }

  /* ---- magnetic email button ---- */
  if (fine && !reduce) $$('.magnet').forEach((m) => {
    m.addEventListener('mousemove', (e) => {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)}px)`;
    });
    m.addEventListener('mouseleave', () => { m.style.transform = ''; });
  });
})();
