/* Audits every image and video on the deployed site.
   usage: node scripts/audit-media.js [url] */
const path = require('path');
const fs = require('fs');
/* resolve playwright however this machine has it */
let chromium;
try { ({ chromium } = require('playwright')); }
catch (e) {
  ({ chromium } = require(process.env.PLAYWRIGHT_MODULE ||
    'C:/Users/user/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright'));
}

const URL = process.argv[2] || 'https://ahmedalighori.github.io/mithaas-co/';
const OUT = path.resolve(__dirname, '..', 'shots', 'media-audit.json');

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const bad = [];
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('requestfailed', r => bad.push({ kind: 'requestfailed', url: r.url(), err: r.failure() && r.failure().errorText }));
  page.on('response', r => { if (r.status() >= 400) bad.push({ kind: 'http', url: r.url(), status: r.status() }); });

  await page.goto(URL, { waitUntil: 'load' });
  await page.waitForFunction('window.ready === true', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(3000);

  /* wait for every scrub clip to actually be seekable, and time it — on a
     cold CDN the last sweet can take a while, and that is what we measure */
  const t0 = Date.now();
  const readyAt = {};
  for (let i = 0; i < 240; i++) {
    const pending = await page.evaluate(() =>
      Array.prototype.map.call(document.querySelectorAll('video[data-clip]'), v => ({
        c: v.getAttribute('data-clip'), ok: v.videoWidth > 0 && v.readyState >= 1
      })).filter(x => !x.ok).map(x => x.c));
    for (const c of Object.keys(readyAt)) if (readyAt[c] == null) readyAt[c] = 0;
    for (const c of ['box', 'kaju', 'laddoo', 'jalebi', 'gulab', 'rasmalai', 'soan']) {
      if (readyAt[c] == null && pending.indexOf(c) === -1) readyAt[c] = +((Date.now() - t0) / 1000).toFixed(1);
    }
    if (!pending.length) break;
    await page.waitForTimeout(500);
  }
  console.error('scrub clips ready at (s): ' + JSON.stringify(readyAt));

  /* walk the whole page so every IntersectionObserver loop gets its src */
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 450) {
    await page.evaluate(v => window.lenis ? window.lenis.scrollTo(v, { immediate: true }) : window.scrollTo(0, v), y);
    await page.waitForTimeout(70);
  }
  await page.evaluate(() => window.lenis ? window.lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0));
  await page.waitForTimeout(1500);

  const report = await page.evaluate(async () => {
    const out = { images: [], videos: [], backgrounds: [] };

    document.querySelectorAll('img').forEach(img => {
      out.images.push({
        src: img.currentSrc || img.src,
        ok: img.complete && img.naturalWidth > 0,
        w: img.naturalWidth, h: img.naturalHeight,
        where: (img.closest('section,header,footer,article,li') || {}).id || (img.parentElement && img.parentElement.className) || '?'
      });
    });

    const vids = Array.prototype.slice.call(document.querySelectorAll('video'));
    for (const v of vids) {
      /* if it has no src yet, wake it up by intersecting */
      if (!v.src && v.getAttribute('data-loop')) {
        v.scrollIntoView({ block: 'center' });
        await new Promise(r => setTimeout(r, 700));
      }
      out.videos.push({
        clip: v.getAttribute('data-clip') || v.getAttribute('data-loop') || '?',
        kind: v.getAttribute('data-clip') ? 'scrub' : 'loop',
        hasSrc: !!v.src,
        readyState: v.readyState,
        vw: v.videoWidth, vh: v.videoHeight,
        duration: isFinite(v.duration) ? +v.duration.toFixed(2) : null,
        error: v.error ? v.error.code : null,
        t: +v.currentTime.toFixed(2),
        visible: !!(v.offsetWidth || v.offsetHeight)
      });
    }

    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.indexOf('url(') === 0) out.backgrounds.push(bg.slice(5, -2));
    });
    return out;
  });

  /* drive each scrub clip and prove it decodes at its own scroll position */
  const scrubProbe = await page.evaluate(async () => {
    const res = [];
    const clips = Array.prototype.slice.call(document.querySelectorAll('video[data-clip]'));
    return clips.map(v => ({ clip: v.getAttribute('data-clip'), hasSrc: !!v.src, dur: v.duration, vw: v.videoWidth }));
  });

  await page.evaluate(() => { if (window.lenis) window.lenis.scrollTo(0, { immediate: true }); });
  await page.waitForTimeout(400);
  const st = await page.evaluate(() => ScrollTrigger.getAll().map(t => ({ t: (t.trigger && (t.trigger.id || t.trigger.className)) || '', s: Math.round(t.start), e: Math.round(t.end) })));
  const heroT = st.find(x => x.t === 'hero');
  const mithaiT = st.find(x => x.t === 'mithai');
  const boxTimes = [];
  for (const frac of [0.15, 0.45, 0.75, 0.99]) {
    const y = Math.round(heroT.s + (heroT.e - heroT.s) * frac);
    await page.evaluate(v => window.lenis ? window.lenis.scrollTo(v, { immediate: true }) : window.scrollTo(0, v), y);
    await page.waitForTimeout(1100);
    boxTimes.push(await page.evaluate(() => {
      const v = document.querySelector('video[data-clip=box]');
      return { y: Math.round(window.pageYOffset), t: +v.currentTime.toFixed(2), vw: v.videoWidth, seek: v.seeking };
    }));
  }
  const sweetTimes = [];
  for (let i = 0; i < 6; i++) {
    const span = mithaiT.e - mithaiT.s;
    const y = Math.round(mithaiT.s + span * ((i + 0.8) / 6));
    await page.evaluate(v => window.lenis ? window.lenis.scrollTo(v, { immediate: true }) : window.scrollTo(0, v), y);
    await page.waitForTimeout(1100);
    sweetTimes.push(await page.evaluate(i => {
      const v = document.querySelectorAll('video[data-clip]')[i + 1];
      return { clip: v && v.getAttribute('data-clip'), t: v ? +v.currentTime.toFixed(2) : null, vw: v ? v.videoWidth : 0, vis: v ? getComputedStyle(v.closest('.sweet')).visibility : '?' };
    }, i));
  }

  await browser.close();
  const out = { url: URL, report, scrubProbe, boxTimes, sweetTimes, bad, errors };
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

  /* ── summary ── */
  const R = report;
  const imgs = R.images.filter(i => !i.ok);
  const vidsBad = R.videos.filter(v => !v.hasSrc || v.readyState < 2 || v.vw === 0 || v.error);
  console.log('URL                 ' + URL);
  console.log('images              ' + R.images.length + '   broken: ' + imgs.length);
  imgs.forEach(i => console.log('   BROKEN img  ' + i.src + '  @' + i.where));
  console.log('videos              ' + R.videos.length + '   not ready: ' + vidsBad.length);
  R.videos.forEach(v => console.log('   ' + (v.hasSrc && v.readyState >= 2 && v.vw ? 'ok  ' : 'BAD ') + v.kind.padEnd(5) + ' ' + String(v.clip).padEnd(10) + ' rs=' + v.readyState + ' ' + v.vw + 'x' + v.vh + ' dur=' + v.duration + ' err=' + v.error));
  console.log('background images   ' + R.backgrounds.length);
  R.backgrounds.forEach(b => console.log('   ' + b));
  console.log('scrub clips         ' + JSON.stringify(out.scrubProbe));
  console.log('box scrub frames    ' + JSON.stringify(out.boxTimes));
  console.log('sweet scrub frames  ' + JSON.stringify(out.sweetTimes));
  console.log('network failures    ' + bad.length);
  bad.forEach(b => console.log('   ' + b.kind + ' ' + (b.status || b.err) + ' ' + b.url));
  console.log('console errors      ' + errors.length);
  errors.forEach(e => console.log('   ' + e));
})().catch(e => { console.error(e); process.exit(1); });
