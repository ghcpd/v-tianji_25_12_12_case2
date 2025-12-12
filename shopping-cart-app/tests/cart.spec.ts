import { test, expect } from '@playwright/test';

test('should load the shopping cart app', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Check if header is present
  await expect(page.locator('text=ShopHub')).toBeVisible();

  // Check if products are displayed
  await expect(page.locator('text=Wireless Headphones')).toBeVisible();
});