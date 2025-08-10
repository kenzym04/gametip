import { test, expect } from '@playwright/test';

test.describe('Homepage UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4001/');
  });

  test('loads homepage and wallet connect button is visible', async ({ page }) => {
    await expect(page.getByText('Welcome to Gamba v2')).toBeVisible();
    await expect(page.getByRole('button', { name: /connect/i })).toBeVisible();
  });
  
  test('all main homepage components are visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Gamba logo' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Welcome to Gamba v2 👋' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Connect' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'FAKE' })).toBeVisible();
    await expect(page.getByRole('button', { name: '🚀 Add Liquidity' })).toBeVisible();
    await expect(page.getByRole('button', { name: '👨‍💻 Build your own' })).toBeVisible();
    await expect(page.getByRole('button', { name: '💬 Discord' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Games' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Dice' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Slots' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Flip' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play HiLo' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Roulette' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Plinko' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Play Crash' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Recent Plays' })).toBeVisible();
  });

  test('can play Dice game', async ({ page }) => {
    // Dismiss acknowledge modal if present
    const acknowledgeBtn = page.getByRole('button', { name: 'Acknowledge' });
    if (await acknowledgeBtn.isVisible().catch(() => false)) {
      await acknowledgeBtn.click();
    }
    // Wait for Play Dice link to be enabled and visible
    const playDiceLink = page.getByRole('link', { name: 'Play Dice' });
    await expect(playDiceLink).toBeVisible();
    await expect(playDiceLink).toBeEnabled();
    await playDiceLink.scrollIntoViewIfNeeded();
    await playDiceLink.click();
    await expect(page.getByText(/Dice/i)).toBeVisible();
    await page.getByRole('button', { name: 'Play' }).click();
    await expect(page.getByRole('button', { name: 'Roll' })).toBeVisible();
    await page.getByRole('button', { name: 'Roll' }).click();
    await expect(page.getByText(/result|win|lose/i)).toBeVisible();
    await page.getByRole('button', { name: 'Roll' }).click();
    await expect(page.getByText(/result|win|lose/i)).toBeVisible();
  });

  test('can play Slots game', async ({ page }) => {
    // Dismiss acknowledge modal if present
    const acknowledgeBtn = page.getByRole('button', { name: 'Acknowledge' });
    if (await acknowledgeBtn.isVisible().catch(() => false)) {
      await acknowledgeBtn.click();
    }
    const playSlotsLink = page.getByRole('link', { name: 'Play Slots' });
    await expect(playSlotsLink).toBeVisible();
    await expect(playSlotsLink).toBeEnabled();
    await playSlotsLink.scrollIntoViewIfNeeded();
    await playSlotsLink.click();
    await expect(page.getByText(/Slots/i)).toBeVisible();

    // Start the Slots game
    const playBtn = page.getByRole('button', { name: 'Play' });
    await expect(playBtn).toBeVisible();
    await playBtn.click();

    // Now click Spin
    const spinBtn = page.getByRole('button', { name: 'Spin' });
    await expect(spinBtn).toBeVisible();
    await spinBtn.click();
    
    // Spin again
    await spinBtn.click();
  });

  test('can play Flip game', async ({ page }) => {
    // Dismiss acknowledge modal if present
    const acknowledgeBtn = page.getByRole('button', { name: 'Acknowledge' });
    if (await acknowledgeBtn.isVisible().catch(() => false)) {
      await acknowledgeBtn.click();
    }
    const playFlipLink = page.getByRole('link', { name: 'Play Flip' });
    await expect(playFlipLink).toBeVisible();
    await expect(playFlipLink).toBeEnabled();
    await playFlipLink.scrollIntoViewIfNeeded();
    await playFlipLink.click();
    await expect(page.getByText(/Flip/i)).toBeVisible();

    // Start the Flip game
    const playBtn = page.getByRole('button', { name: 'Play' });
    await expect(playBtn).toBeVisible();
    await playBtn.click();

    // Now click Flip
    const flipBtn = page.getByRole('button', { name: 'Flip' });
    await expect(flipBtn).toBeVisible();
    await flipBtn.click();
  });
});