import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl&zx=1771934105414&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('mukesh motwa');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.locator('iframe[name="a-atuj2wzoa9x"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.goto('https://www.google.com/?gws_rd=ssl&zx=1771934105414&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('hello');
  await page.goto('https://www.google.com/?gws_rd=ssl&zx=1771934105414&no_sw_cr=1');
});