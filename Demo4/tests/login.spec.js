// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwrightlabs.com/practice/login.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Practice Login — Playwright Labs');


  await page.locator('#username').fill('admin');

  await page.locator('#password').fill('admin123');

  await page.locator('#login-button').click();

  await page.waitForTimeout(5000);


});
