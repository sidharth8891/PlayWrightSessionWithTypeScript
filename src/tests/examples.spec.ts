import { test, expect } from '@playwright/test';
import { setDevice } from '../utils/visualUtility/deviceUtils';
import { VisualUtil } from '../utils/visualUtility/VisualUtil';
import AxeBuilder from '@axe-core/playwright';
// import { getTestData, getJsonArray, getJsonObject } from '../utils/testdatareader'; 
// import { customLogger } from '../logger/customLogger';
// import { TestDataGenerator } from '../utils/TestDataGenerator';


// test('timer test1', async ({ page }) => {
//   await page.goto('https://www.timeanddate.com/');
//   await expect(page).toHaveScreenshot();
// });

// test('example test', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   await expect(page).toHaveScreenshot("expected.png");
// });

// test('example tests', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
// });

// test('Docs link visual check', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
  
//   const docsLink = page.locator('a:get-by-text("Docs")');
//   expect(await docsLink.screenshot()).toMatchSnapshot('docs-link.png');
// });

// test('mobile view snapshot', async ({ page }) => {
//   await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
//   await page.goto('https://playwright.dev/');
//   expect(await page.screenshot()).toMatchSnapshot('mobile-homepage.png');
// });

// // Use Playwright's built-in device descriptors
// test.use({ viewport: { width: 1280, height: 720 } }); // Desktop
// test('Homepage on desktop', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   expect(await page.screenshot()).toMatchSnapshot('homepage-desktop.png');
// });

// test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE
// test('Homepage on mobile', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   expect(await page.screenshot()).toMatchSnapshot('homepage-mobile.png');
// });

// test('Wikipedia Main Page - Stabilized Visual Test', async ({ page }) => {

//   // 1. Navigate to Wikipedia's main page
//   await page.goto('https://en.wikipedia.org/wiki/Main_Page');

//   // 2. Stabilize the dynamic content
//   // --- The "From today's featured article" section is a big block of text that changes daily
//   const featuredArticleSection = page.locator('#mp-tfa');
//   await featuredArticleSection.evaluate(element => {
//     element.innerHTML = `<p>***STABILIZED FOR TESTING: Today's featured article content would be here.***</p>`;
//   });

//   // --- The "In the news" section has a list of current events
//   const inTheNewsSection = page.locator('#mp-itn');
//   await inTheNewsSection.evaluate(element => {
//     element.innerHTML = `<p>***STABILIZED FOR TESTING: News items would be listed here.***</p>`;
//   });

//   // --- The "On this day" section also changes daily
//   const onThisDaySection = page.locator('#mp-otd');
//   await onThisDaySection.evaluate(element => {
//     element.innerHTML = `<p>***STABILIZED FOR TESTING: On this day historical events would be listed here.***</p>`;
//   });

//   // 3. OPTIONAL: Hide the donation banner. It can be intrusive and change often.
//   const donationBanner = page.locator('#siteNotice');
//   await donationBanner.evaluate(element => element.style.display = 'none');

//   // 4. Take a screenshot of the entire page and compare it.
//   // This will FAIL on the first run until we create the baseline snapshot.
//   expect(await page.screenshot({ fullPage: true })).toMatchSnapshot('wikipedia-stabilized.png');
// });



// test('Validate timeanddate main content while ignoring the live clock-2', async ({ page }) => {

//   // 1. Navigate to the website
//   await page.goto('https://www.timeanddate.com/');

//   // 2. Locate the very specific section you want to test
//   const mainContentSection = page.locator('//div[@class="tad-tpl-index__time"]//p[1]');
  
//   // 3. Locate the dynamic clock element we want to ignore
//   const liveClockElement = page.locator('//span[@id="ij2"]');

//   // 4. BEFORE taking a screenshot, mask the live clock to stabilize the test
//   // We will cover it with a solid-colored box to completely hide its changing text
//   await liveClockElement.evaluate((element) => {
//     element.style.visibility = 'hidden'; // Hide the original clock
//   });

//   // 5. (Optional but good practice) Wait for any animations or lazy loading
// //  await page.waitForLoadState('networkidle');
//   await mainContentSection.waitFor({ state: 'visible' });

//   // 6. Take a screenshot of ONLY the specific mainContentSection and compare it.
//   // This will fail the first time until we create the baseline.
//   expect(await mainContentSection.screenshot()).toMatchSnapshot();
// });



// test.describe('homepage', () => { // 2
//   test('should not have any automatically detectable accessibility issues', async ({ page }) => {
//     await page.goto('https://your-site.com/'); // 3

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });

// test('get started link', async ({ page }) => {

//     const url = getTestData("base_url");
//     console.log("The base_url from testdata.json file is : " + url);
//     await page.goto(url);


//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();

//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// const loginData = [
//  { username: 'standard_user', password: 'secret_sauce' },   // valid creds
//  { username: 'locked_out_user', password: 'secret_sauce' }, // locked user
//  { username: 'invalid_user', password: 'wrong_pass' }       // invalid creds
// ];


// test.describe('Login Tests with Data Provider', () => {
//  for (const data of loginData) {
//    test(`Login test with username: ${data.username}`, async ({ page }) => {
//      await page.goto('https://www.saucedemo.com/v1/');


//      await page.fill('#user-name', data.username);
//      await page.fill('#password', data.password);
//      await page.click('#login-button');


//      if (data.username === 'standard_user' && data.password === 'secret_sauce') {
//        // successful login
//        await expect(page).toHaveURL(/inventory.html/);
//      } else {
//        // failed login
//        await expect(page.locator('[data-test="error"]')).toBeVisible();
//      }
//    });
//  }
// });

// const loginData = getJsonArray("loginData"); // loads from JSON file


// test.describe("Login Tests with Data Provider", () => {
//   for (const data of loginData) {
//     test(`Login test with username: ${data.username}`, async ({ page }) => {
//       await page.goto("https://www.saucedemo.com/v1/");


//       await page.fill("#user-name", data.username);
//       await page.fill("#password", data.password);
//       await page.click("#login-button");


//       if (data.username === "standard_user" && data.password === "secret_sauce") {
//         // successful login
//         await expect(page).toHaveURL(/inventory.html/);
//       } else {
//         // failed login
//         await expect(page.locator('[data-test="error"]')).toBeVisible();
//       }
//     });
//   }
// });


// const logger = new customLogger();


// test('Login test with logger', async ({ page }) => {
//  logger.info('Navigating to login page');
//  await page.goto('https://www.saucedemo.com/v1/');


//  logger.info('Filling username and password');
//  await page.fill('#user-name', 'standard_use');
//  await page.fill('#password', 'secret_sauce');


//  logger.info('Clicking login button');
//  await page.click('#login-button');


//  logger.info('Checking for inventory page load');
//  try{
//  await expect(page.locator('.product_label')).toHaveText('Products');
//  logger.info('✅ Login successful');
//  } catch (error){
//   logger.error(" Login failed, unable to redirect to the homepage");
//   throw error;
//  }
// });

// test('generate random test data', () => {
//   // Random string
//   const randomString = TestDataGenerator.generateRandomString(10);
//   console.log('Random String:', randomString);

//   // Random alphanumeric string
//   const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(12);
//   console.log('Random Alphanumeric:', randomAlphanumeric);

//   // Random integer between 1 and 100
//   const randomInt = TestDataGenerator.generateRandomInteger(1, 100);
//   console.log('Random Integer:', randomInt);

//   // Random email
//   const randomEmail = TestDataGenerator.generateRandomEmail();
//   console.log('Random Email:', randomEmail);

//   // Random phone number
//   const randomPhone = TestDataGenerator.generateRandomPhone();
//   console.log('Random Phone:', randomPhone);

//   // Random date between Jan 1, 2020 and Dec 31, 2025
//   const randomDate = TestDataGenerator.generateRandomDate(new Date('2020-01-01'), new Date('2025-12-31'));
//   console.log('Random Date:', randomDate);
// });


// test('mobile view snapshot iPad', async ({ page }) => {
//   await setDevice(page, "iPad"); // iPhone X
//   await page.goto('https://playwright.dev/');
//   expect(await page.screenshot()).toMatchSnapshot({ threshold: 0.1 });
// });

// test('homepage visual test', async ({ page }, testInfo) => {
//   await page.goto('https://example.com');
//   console.log(`${testInfo.title}.png`)
//   console.log(`${testInfo.outputDir}.png`)
//   console.log(`${testInfo.snapshotDir}.png`)
//   console.log(`${testInfo.retry}.png`)
//   console.log(`${testInfo.workerIndex}.png`)
//   console.log(`${testInfo.annotations}.png`)
//   expect(await page.screenshot()).toMatchSnapshot(`${testInfo.title}.png`);
// });


// test('Homepage full-page visual test', async ({ page }) => {
//   await page.goto('https://playwright.dev/docs/');
//   await VisualUtil.compareFullPage(page, 'homepage');
// });

// test('Docs link visual test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const docsLink = page.locator('//a[normalize-space()="Get started"]');
//   await VisualUtil.compareElement(docsLink, 'docs-link');
// });

// test('Mobile layout test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await VisualUtil.compareResponsive(page, 'homepage-mobile', 375, 812);
// });


// test.describe('Automated accessibility checks with axe', () => {
//   test('should have no automatically detectable accessibility violations', async ({ page }) => {
//     await page.goto('http://127.0.0.1:5501/tests/accessibility.html');


//     const results = await new AxeBuilder({ page }).analyze();
//     if (results.violations.length > 0) {
//       console.log('Accessibility Violations:', results.violations);
//     }


//     // Fail test if violations exist
//     expect(results.violations).toEqual([]);
//   });
// });


// test.describe('ARIA & semantic checks', () => {
//   test('accordion should toggle aria-expanded', async ({ page }) => {
//     await page.goto('http://127.0.0.1:5501/tests/accessibility.html');


//     const btn = page.locator('#acc-btn-1');
//     await expect(btn).toHaveAttribute('aria-expanded', 'false');


//     await btn.click();
//     await expect(btn).toHaveAttribute('aria-expanded', 'true');
//     await expect(page.locator('#acc-panel-1')).toBeVisible();
//   });


  // test('custom select should have role listbox and options', async ({ page }) => {
  //   await page.goto('http://127.0.0.1:5501/tests/accessibility.html');


  //   await expect(page.locator('.custom-select')).toHaveAttribute('role', 'listbox');
  //   const options = page.locator('.custom-select [role="option"]');
  //   await expect(options).toHaveCount(3);
  // });


// test('3 navigation menu should have no automatically detectable accessibility violations on playwright.dev', async ({ page }) => {
//   // Go to Playwright site
//   await page.goto('https://playwright.dev/');

//   // If the nav is hidden, click the "Toggle menu" button
// //   const toggle = page.getByRole('button', { name: /menu|toggle/i });
// //   if (await toggle.count() > 0) {
// //     await toggle.click();
// //   }

//   // Wait for the main nav to appear
//   const nav = page.locator('nav[aria-label="Main"]');
//   await expect(nav).toBeVisible({ timeout: 5000 });

//   // Run axe-core accessibility scan scoped to the navigation
//   const results = await new AxeBuilder({ page })
//   .include('nav[aria-label="Main"]')
//   .analyze();

//   // Log violations if any
// //   if (results.violations.length > 0) {
// //     console.log('Accessibility Violations:', JSON.stringify(results.violations, null, 2));
// //   }

//   // Assert no violations
//   expect(results.violations).toEqual([]);
// });


// test('should not have any accessibility violations outside of known-issue elements', async ({ page }) => {
//   // 1. Navigate to a real Playwright docs page
//   await page.goto('https://playwright.dev/docs/intro');

//   // 2. Run axe-core scan, excluding a known issue element (e.g. search box container)
//   const results = await new AxeBuilder({ page })
//     .exclude('#docsearch') // pretend this has known issues
//     .analyze();

//   // 3. Log violations for teaching/debugging
//   if (results.violations.length > 0) {
//     console.log('Accessibility Violations (excluding #docsearch):', 
//       JSON.stringify(results.violations, null, 2)
//     );
//   }

//   // 4. Assert there are no other violations
//   expect(results.violations).toEqual([]);
// });



// test('should not have any accessibility violations outside of disabled rules', async ({ page }) => {
//   // 1. Navigate to a real page
//   await page.goto('https://playwright.dev/docs/intro');

//   // 2. Run axe-core scan, disabling known noisy rules
//   const results = await new AxeBuilder({ page })
//     .disableRules(['duplicate-id', 'color-contrast']) // 👈 disable multiple rules
//     .analyze();

//   // 3. Log results for debug/teaching
//   if (results.violations.length > 0) {
//     console.log('Accessibility Violations (excluding disabled rules):',
//       JSON.stringify(results.violations, null, 2)
//     );
//   }

//   // 4. Assert no violations remain after disabling those rules
//   expect(results.violations).toEqual([]);
// });

// test.describe('homepage', () => { // 2
//   test('2 should not have any automatically detectable accessibility issues -2', async ({ page }) => {
//     await page.goto('http://127.0.0.1:5501/tests/accessibility.html'); // 3

//     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

//     expect(accessibilityScanResults.violations).toEqual([]); // 5
//   });
// });

// test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   const accessibilityScanResults = await new AxeBuilder({ page })
//       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
//       .analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('4 should not have any accessibility violations outside of rules with known issues', async ({
//   page,
// }) => {
//   await page.goto('http://127.0.0.1:5501/tests/accessibility.html');

//   const accessibilityScanResults = await new AxeBuilder({ page })
//       .disableRules(['color-contrast', 'heading-order', 'label', 'aria-required-attr'])
//       .analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('5 navigation menu should have no automatically detectable accessibility violations on playwright.dev', async ({ page }) => {
//   // Go to Playwright site
//   await page.goto('https://playwright.dev/');
//   // Wait for the main nav to appear
//   const nav = page.locator('nav[aria-label="Main"]');
//   await expect(nav).toBeVisible({ timeout: 5000 });

//   // Run axe-core accessibility scan scoped to the navigation
//   const results = await new AxeBuilder({ page })
//   .exclude('nav[aria-label="Main"]')
//   .analyze();

//   // Assert no violations
//   expect(results.violations).toEqual([]);
// });

// test('example with attachment', async ({ page }, testInfo) => {
//   await page.goto('https://playwright.dev/');

//   const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

//   await testInfo.attach('accessibility-scan-results', {
//     body: JSON.stringify(accessibilityScanResults, null, 2),
//     contentType: 'application/json'
//   });

//   expect(accessibilityScanResults.violations).toEqual([]);
// });

// test('7 should not have critical accessibility violations', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   const results = await new AxeBuilder({ page }).analyze();
//   const criticalViolations = results.violations.filter(v => v.impact === 'serious');
//   if (criticalViolations.length > 0) {
//     console.log('Critical accessibility violations:', criticalViolations);
//   }
//   expect(criticalViolations).toEqual([]);
// });
