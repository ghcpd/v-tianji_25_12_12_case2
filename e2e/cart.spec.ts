import { test, expect } from '@playwright/test'

test('can add items to cart and see totals', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Featured Products')).toBeVisible()

  const firstAdd = page.getByRole('button', { name: 'Add' }).first()
  await firstAdd.click()
  await page.waitForTimeout(200)

  // check cart drawer total within drawer
  const drawer = page.locator('.cart-drawer')
  await expect(drawer.getByRole('heading', { name: 'Cart' })).toBeVisible()
  await expect(drawer.getByText('Total')).toBeVisible()
  const total = await drawer.getByText(/\$/).first().textContent()
  expect(total).toContain('$')
})
