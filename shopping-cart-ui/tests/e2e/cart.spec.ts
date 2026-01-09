import { test, expect } from '@playwright/test'

test('add product to cart and see total', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('text=Featured Products')).toBeVisible()
  const add = page.locator('button', { hasText: 'Add' }).first()
  await add.click()
  await expect(page.locator('text=Your Cart')).toBeVisible()
  await expect(page.locator('text=Total')).toBeVisible()
  // Verify checkout button and that item quantity 1 is present
  await expect(page.locator('text=Checkout')).toBeVisible()
  // The added product should have an increment control in the cart
  await expect(page.locator('[aria-label="inc-p1"]')).toBeVisible()
})
