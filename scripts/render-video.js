/* Renders video/promo.html frame by frame at 1920×1080.
   Deterministic: every frame is drawn from a time value, never from a clock.
   usage: node scripts/render-video.js [fps] */
const path = require('path');
const fs = require('fs');
const { chromium } = require('C:/Users/user/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'video', 'frames');
const FPS = Number(process.argv[2] || 25);
const TOTAL = 18.6;

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:8123/video/promo.html?norec', { waitUntil: 'load' });
  await page.waitForFunction('window.ready === true', { timeout: 20000 });
  await page.waitForTimeout(250);

  const n = Math.round(TOTAL * FPS);
  const t0 = Date.now();
  for (let i = 0; i < n; i++) {
    await page.evaluate(t => window.renderAt(t), i / FPS);
    await page.screenshot({ path: path.join(OUT, String(i).padStart(4, '0') + '.jpg'), type: 'jpeg', quality: 90 });
    if (i % 50 === 0) process.stdout.write(`${i}/${n}  ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);
  }
  console.log(`rendered ${n} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
