import { test, expect } from '@playwright/test';

test('mock GET request with route', async ({ page }) => {
  // Mock API
  await page.route('**/api/users', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([{ id: 1, name: 'Sid', contact: '6536764746' }]),
    });
  });

  // Trigger fetch from the page context
  await page.goto('https://reqres.in');
  const response = await page.evaluate(async () => {
    const res = await fetch('https://reqres.in/api/users');
    return res.json();
  });

  console.log('Mocked response:', response);
  expect(response[0].name).toBe('Sid');
});
