import { test, expect } from '@playwright/test';

test.fail('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/', { timeout:60000});

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle((/Playwright/), { timeout:10000});
  // const timestamp = Date.now();
  // await page.screenshot({ path: `test-results/screenshots/screeshot-${timestamp}.png`, fullPage: true });

});

// test('Should click login button', async ({ page }) => {
//   await page.goto('http://127.0.0.1:5500/javascript-practice/myfirstapp.html');
//   await page.getByTestId('login-button').click(); // ❌ This will fail
// });


test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

