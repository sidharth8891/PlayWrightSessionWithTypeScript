
import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, expect, chromium } from '@playwright/test';
import { LoginPage } from '../../src/pages/loginPage';
import { credentials } from '../../src/constants/testData';

let browser: Browser;
let page: Page;
let context: BrowserContext;
let loginPage: LoginPage;

setDefaultTimeout(60 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
});

After(async () => {
  await browser.close();
});

Given('I am on the Google login page', async function () {
  await page.goto('https://accounts.google.com/');
});

When('I enter my valid email and password', async function () {
  await loginPage.login(credentials.email, credentials.password);
});

Then('I should be successfully logged in and see the compose button', async function () {
  await expect(page.getByRole('button', { name: 'Compose' })).toBeVisible();
});
