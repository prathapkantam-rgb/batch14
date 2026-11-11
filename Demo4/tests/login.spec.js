// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwrightlabs.com/practice/login.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Practice Login — Playwright Labs');
});
