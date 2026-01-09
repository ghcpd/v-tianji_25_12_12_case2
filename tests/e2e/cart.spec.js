import { test, expect } from '@playwright/test'

test('user can add item to cart and see totals', async ({ page }) => {
  await page.goto('/')

  // Ensure products are visible
  await expect(page.locator('[data-testid="product-p1"]')).toBeVisible()

  // Add first product
  await page.click('[data-testid="add-btn-p1"]')

  // Cart badge should show 1
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1')

  // Open cart
  await page.click('button[aria-label="Open cart"]')

  // Cart should contain item
  await expect(page.locator('[data-testid^="cart-item-"]')).toHaveCount(1)

  // Add same product again
  await page.click('[data-testid="add-btn-p1"]')
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('2')

  // Verify total shows expected amount (129 * 2 = 258)
  await expect(page.locator('text=$258.00')).toBeVisible()
})
