// filepath: d:\Workspace\gametip\playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './server/tests',
  reporter: [
    ['list'],
    ['json', { outputFile: 'playwright-report/test-results.json' }],
    ['allure-playwright'],
  ],
  use: {
    baseURL: 'http://localhost:4001',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});