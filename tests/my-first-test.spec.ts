import { test, expect } from '@playwright/test';

test('Example page has correct title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('Example page has visible text', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByText('Example Domain')).toBeVisible();
});

test('Example page has a paragraph', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByText('documentation examples')).toBeVisible();
});
