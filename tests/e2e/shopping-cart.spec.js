import { test, expect } from '@playwright/test';

test.describe('E-Commerce Shopping Cart App', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/');
  });

  test('should display the header with logo', async ({ page }) => {
    // Check for header elements
    const logo = page.getByText('ShopHub');
    await expect(logo).toBeVisible();

    const searchInput = page.getByPlaceholder('Search products...');
    await expect(searchInput).toBeVisible();

    const cartButton = page.getByRole('button', { name: /shopping cart/i });
    await expect(cartButton).toBeVisible();
  });

  test('should display product list', async ({ page }) => {
    // Check that products are visible
    const product = page.getByText('Premium Wireless Headphones');
    await expect(product).toBeVisible();

    const category = page.getByText('Electronics');
    await expect(category).toBeVisible();
  });

  test('should add product to cart', async ({ page }) => {
    // Find and click add button for first product
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    const firstAddButton = addButtons.first();
    
    await firstAddButton.click();
    
    // Check that cart badge shows 1
    const badge = page.getByText('1');
    await expect(badge).toBeVisible();
  });

  test('should open and close cart', async ({ page }) => {
    // Add a product first
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.first().click();

    // Open cart
    const cartButton = page.getByRole('button', { name: /shopping cart with 1 items/i });
    await cartButton.click();

    // Check cart is open
    const cartTitle = page.getByText('Shopping Cart');
    await expect(cartTitle).toBeVisible();

    // Close cart
    const closeButton = page.getByRole('button', { name: /close cart/i });
    await closeButton.click();

    // Cart should be hidden
    await expect(cartTitle).not.toBeVisible();
  });

  test('should search for products', async ({ page }) => {
    // Type in search box
    const searchInput = page.getByPlaceholder('Search products...');
    await searchInput.fill('Headphones');

    // Check that only matching products are visible
    const headphones = page.getByText('Premium Wireless Headphones');
    await expect(headphones).toBeVisible();
  });

  test('should filter by category', async ({ page }) => {
    // Click on Electronics category
    const electronicsFilter = page.getByLabel('Filter by Electronics');
    await electronicsFilter.click();

    // Check that Electronics products are visible
    const electronics = page.getByText('Premium Wireless Headphones');
    await expect(electronics).toBeVisible();
  });

  test('should update cart quantity', async ({ page }) => {
    // Add product
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.first().click();

    // Open cart
    const cartButton = page.getByRole('button', { name: /shopping cart with 1 items/i });
    await cartButton.click();

    // Increase quantity
    const increaseButton = page.getByRole('button', { name: /increase quantity/i }).first();
    await increaseButton.click();

    // Check cart badge now shows 2
    await expect(page.getByText('2')).toBeVisible();
  });

  test('should remove item from cart', async ({ page }) => {
    // Add product
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.first().click();

    // Open cart
    const cartButton = page.getByRole('button', { name: /shopping cart with 1 items/i });
    await cartButton.click();

    // Wait for cart to open
    const cartTitle = page.getByText('Shopping Cart');
    await expect(cartTitle).toBeVisible();

    // Remove item
    const removeButton = page.getByRole('button', { name: /remove/i }).first();
    await removeButton.click();

    // Cart should show empty
    const emptyCart = page.getByText('Your cart is empty');
    await expect(emptyCart).toBeVisible();
  });

  test('should calculate correct totals in cart', async ({ page }) => {
    // Add first product
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.first().click();

    // Open cart
    const cartButton = page.getByRole('button', { name: /shopping cart with 1 items/i });
    await cartButton.click();

    // Check that totals are visible
    const subtotal = page.getByText(/Subtotal:/);
    await expect(subtotal).toBeVisible();

    const tax = page.getByText(/Tax/);
    await expect(tax).toBeVisible();

    const total = page.getByText(/Total:/);
    await expect(total).toBeVisible();
  });

  test('should handle multiple product additions', async ({ page }) => {
    // Add first product
    let addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.nth(0).click();

    // Add second product
    await page.waitForTimeout(500); // Wait for DOM update
    addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.nth(1).click();

    // Check cart badge shows 2
    const badge = page.getByText('2');
    await expect(badge).toBeVisible();
  });

  test('should show "Added!" feedback on product addition', async ({ page }) => {
    // Click add button
    const addButtons = page.getByRole('button', { name: /add.*to cart/i });
    await addButtons.first().click();

    // Check for "Added!" text
    const addedText = page.getByText('Added!');
    await expect(addedText).toBeVisible();
  });

  test('should show empty search results', async ({ page }) => {
    // Search for non-existent product
    const searchInput = page.getByPlaceholder('Search products...');
    await searchInput.fill('NonExistentProduct12345');

    // Check for empty state
    const emptyState = page.getByText('No products found');
    await expect(emptyState).toBeVisible();
  });
});
