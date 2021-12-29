const puppeteer = require("puppeteer")

async function scrapeData(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url);

    const [element] = await page.$x('//*[@id="imgBlkFront"]')
    const src = await element.getProperty('src');
    const text = await src.jsonValue();

    console.log({text})
    
}

scrapeData(
  "https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2"
);