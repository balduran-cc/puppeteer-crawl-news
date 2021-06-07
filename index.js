const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  await page.goto('https://us.yahoo.com/');

  const HEADLINE1_SELECTOR = '#ntk-title';
  let headline_text = await page.evaluate((sel) => {
    let element = document.querySelector(sel);

    return element ? element.innerHTML : null;
  }, HEADLINE1_SELECTOR);

  console.log('headline', ' -> ', headline_text);

  browser.close();
}

run();