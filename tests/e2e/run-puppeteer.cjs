const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  const url = process.env.E2E_URL || 'http://127.0.0.1:5173'
  console.log('E2E: opening', url)
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 })

  // ensure product visible
  await page.waitForSelector('[data-testid="product-p1"]', { timeout: 5000 })

  // add first product
  await page.click('[data-testid="add-btn-p1"]')

  // check cart badge
  await page.waitForSelector('[data-testid="cart-count"]')
  const badge = await page.$eval('[data-testid="cart-count"]', (el) => el.textContent.trim())
  if (badge !== '1') throw new Error('Expected cart count 1, got ' + badge)

  // open cart
  await page.click('button[aria-label="Open cart"]')
  await page.waitForSelector('[data-testid^="cart-item-"]')

  // add same product again
  await page.click('[data-testid="add-btn-p1"]')
  await page.waitForTimeout(300)
  const badge2 = await page.$eval('[data-testid="cart-count"]', (el) => el.textContent.trim())
  if (badge2 !== '2') throw new Error('Expected cart count 2, got ' + badge2)

  // verify total (129 * 2)
  const pageText = await page.content()
  if (!pageText.includes('$258.00')) throw new Error('Expected total $258.00 not found')

  await browser.close()
  console.log('E2E: PASS')
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('E2E: FAILED')
    console.error(err)
    process.exit(1)
  })
