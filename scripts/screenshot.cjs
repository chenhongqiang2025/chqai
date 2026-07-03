// Windows headless-Chrome screenshot helper via puppeteer-core.
//
// Why this exists:
//   `chrome.exe --headless --virtual-time-budget=N --screenshot=out.png URL`
//   does NOT reliably advance JS setTimeout/animations under virtual time on
//   Windows, so screenshots capture pre-animation state (empty hero, missing
//   entrance transforms, etc.). Puppeteer driving the same locally installed
//   Chrome with real wall-clock waits is the fix.
//
// Usage:
//   1. Install puppeteer-core somewhere (Git Bash `/tmp` maps to
//      %LOCALAPPDATA%\Temp; require by absolute path OR set NODE_PATH):
//        npm i puppeteer-core --prefix /tmp --silent --no-fund --no-audit
//   2. Start a static server for the page under test (e.g. `npx http-server -p 8765`).
//   3. Run:
//        NODE_PATH=/tmp/node_modules node scripts/screenshot.cjs \
//          "http://127.0.0.1:8765/index.html" \
//          "C:/Users/HongQiangChen/AppData/Local/Temp/out.png" \
//          4500
//
// Args: URL  OUT_PATH  WAIT_MS(default 4500)  [--full]
//
// Prefer this over `chrome.exe --screenshot` whenever the page has JS-driven
// entrance/reveal animations or CDN-loaded imagery that finishes after
// networkidle0.

const puppeteer = require(process.env.PUPPETEER_CORE_PATH || 'puppeteer-core');

const CHROME =
  process.env.CHROME_PATH ||
  'C:/Program Files/Google/Chrome/Application/chrome.exe';

const URL = process.argv[2];
const OUT = process.argv[3];
const WAIT = parseInt(process.argv[4] || '4500', 10);
const FULL = process.argv.includes('--full');

if (!URL || !OUT) {
  console.error('Usage: node screenshot.cjs URL OUT_PATH [WAIT_MS] [--full]');
  process.exit(2);
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1200, deviceScaleFactor: 1 });
    await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
    // Real wall-clock wait — lets setTimeout-driven entrance animations,
    // requestAnimationFrame reveals, and late CDN icon loads settle.
    await new Promise((r) => setTimeout(r, WAIT));
    await page.screenshot({ path: OUT, fullPage: FULL });
    console.log('Wrote', OUT);
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
