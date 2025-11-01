

// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/loginPage';
// import { credentials } from '../constants/testData';

// test.describe('Gmail Login Suite', () => {
//   let loginPage: LoginPage;

//   test.beforeEach(async ({ page }) => {
//     loginPage = new LoginPage(page);
//     await page.goto('/');
//   });

//   test('user should be able to login successfully', async ({ page }) => {
//     await loginPage.login(credentials.email, credentials.password);
    
//     // A better assertion: wait for the inbox to be ready by looking for the compose button.
//     await expect(page.getByRole('button', { name: 'Compose' })).toBeVisible();
//   });
// });

