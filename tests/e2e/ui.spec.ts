import { test, expect } from '@playwright/test';

test.describe('Dice Game E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4001/');
    // Dismiss acknowledge modal if present
    const acknowledgeBtn = page.getByRole('button', { name: 'Acknowledge' });
    if (await acknowledgeBtn.isVisible().catch(() => false)) {
      await acknowledgeBtn.click();
    }
    await page.getByRole('link', { name: 'Play Dice' }).click();
    await expect(page.getByText(/Dice/i)).toBeVisible();
  });

  test('can play Dice and roll multiple times', async ({ page }) => {
    await page.getByRole('button', { name: 'Play' }).click();
    await expect(page.getByRole('button', { name: 'Roll' })).toBeVisible();
    await page.getByRole('button', { name: 'Roll' }).click();
    await expect(page.getByText(/result|win|lose/i)).toBeVisible();
    await page.getByRole('button', { name: 'Roll' }).click();
    await expect(page.getByText(/result|win|lose/i)).toBeVisible();
  });
});