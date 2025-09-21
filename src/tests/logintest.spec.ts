import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { customLogger } from '../logger/customLogger';

// test('Login with valid credentials', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();
//   await loginPage.login('testuser', 'password123');
//   await loginPage.verifyLoginSuccess('testuser');
// });

const logger = new customLogger();

// test('Login test with logger', async ({ page }) => {
//  logger.info('Navigating to login page');
//   const loginPage = new LoginPage(page);

//   await loginPage.goto();
//   await loginPage.login('standard_user', 'secret_sauce');
//   await loginPage.verifyLoginSuccess();

// });

test.describe('Login Suite', () => {

  // test('Successful login @smoke @regression', async ({ page }) => {
  //   await page.goto('https://www.saucedemo.com/');
  //   await page.fill('#user-name', 'standard_user');
  //   await page.fill('#password', 'secret_sauc');
  //   await page.click('#login-button');
  //   await expect(page.locator('.inventory_list')).toBeVisible();
  // });

  test('Locked out user login @regression', async ({ page }) => {
    await page.goto(("https://self-signed.badssl.com/"));
    // await page.fill('#user-name', 'locked_out_user');
    // await page.fill('#password', 'secret_sauce');
    // await page.click('#login-button');
    // await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});
