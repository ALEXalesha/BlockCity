// Кадры для README: безголовый Chromium, страница по файловому адресу, без сети.
//   node tools/screenshots.js   ->  docs/screens/*.png
// Захват мыши только поддельный (настоящий в безголовом Chromium на Windows зажимает курсор).
const path = require('path');
const fs = require('fs');
const { chromium } = require('@playwright/test');
const { pageUrl, fakePointerLock } = require('../tests/helpers');

const OUT = path.join(__dirname, '..', 'docs', 'screens');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true, args: ['--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  await page.addInitScript(fakePointerLock);
  await page.route(/^https?:\/\//, (r) => r.abort());
  await page.goto(pageUrl('blockcity') + '?seed=7&fast=1');
  await page.waitForFunction(() => window.__blox && window.__blox.ready === true, null, { timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(OUT, 'home.png') });
  for (const [id, file] of [['obby', 'obby.png'], ['tube', 'tube.png']]) {
    await page.evaluate((i) => __blox.enter(i), id);
    await page.waitForTimeout(6000);
    await page.screenshot({ path: path.join(OUT, file) });
    await page.goto(pageUrl('blockcity') + '?seed=7&fast=1');
    await page.waitForFunction(() => window.__blox && window.__blox.ready === true, null, { timeout: 60000 });
  }
  await browser.close();
  console.log('кадры в', OUT);
})().catch((e) => { console.error(e); process.exit(1); });
