import { test, expect } from '@playwright/test';
import path from "path";

test('locator demo', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/tests/actions.html');
  //creating a locator
  // const clickMeButton = page.getByRole('button', { name: 'Click Me' });
  // await clickMeButton.click();
  // const navElement = page.getByRole('navigation', { name: 'Main Navigation' });
  // await navElement.isVisible;
  // await page.getByPlaceholder('Search here...').fill('Playwright');
  // await expect(page.getByText('Welcome, John')).toBeVisible();
  // await expect(page.getByText('Welcome, John', { exact: true })).toBeVisible();
  // await expect(page.getByText(/[A-Za-z],\s[A-Za-z]{4,20}/)).toBeVisible();
  // await page.getByAltText('Playwright Logo').click();
  //await expect(page.getByTitle('More Info')).toHaveText('Hover over me');
  // await expect(page.getByTestId('submit-btn')).toHaveText('Submit Form');

  // const clickMeButton = page.locator('xpath=//button[normalize-space()="Click Me"]');
  // await clickMeButton.click();
  // await page.locator('css=button[role="button"]').click();

  //await page.getByText('Details (Open Shadow)').click();
 // await page.getByText('Details (Closed Shadow)').click();


  // await page.goto('http://127.0.0.1:5501/tests/irameapp.html');
  // // Step 1: Start from the page
  // const frame = page.frameLocator('#loginFrame');

  // // Step 2: Narrow down to the label inside that form
  // const password = frame.getByLabel('Password')

  // // Step 3: Fill it
  // await password.getByLabel('Password').fill('myPassword');  

  // await page
  //   .getByRole('listitem')
  //   .filter({ hasText: 'Product 2' })
  //   .getByRole('button', { name: 'Add to cart' })
  //   .click();

    // 5 in-stock items
// await expect(page.getByRole('listitem').filter({ hasNotText: 'Out of stock' })).toHaveCount(2);
  
// await page
//     .getByRole('button', { name: 'Add to cart' }).filter({ visible: true });

    // await expect(page
    // .getByRole('listitem'))
    // .toHaveText(['apple', 'banana', 'orange']);

    // //await page.locator('button').filter({ visible: true }).click();

//     const rowLocator = page.getByRole('listitem');

// await rowLocator
//     .filter({ hasText: 'Mary' })
//     .filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })
//     .screenshot({ path: 'screenshot.png' });


// await page.evaluate('(() => {window.waitForPrintDialog = new Promise(f => window.print = f);})()');
// await page.getByText('Print Page').click();
// await page.waitForFunction('window.waitForPrintDialog');

// page.on('dialog', async dialog => {
//   if (dialog.type() === 'beforeunload') await dialog.dismiss();
// });
// await page.close({ runBeforeUnload: true });

// page.on('dialog', dialog => console.log(dialog.message())); // ❌ Will stall
// await page.getByText('Show Prompt').click();
// await page.locator('xpath = //input[@placeholder="Enter name"]').fill('Peter');
// await page.waitForTimeout(5000);
// await page.locator('xpath = //input[@aria-label="Appointment time"]').fill('20:20');
// await page.waitForTimeout(5000);
// await page.waitForTimeout(5000);
// await page.locator('xpath = //input[@aria-label="Local time"]').fill('23/03/2003, 20:20');
await page.waitForTimeout(2000);
// Check the checkbox 
// const checkboxElement = page.locator('xpath = //input[@aria-label="I agree to the terms above"]');
// await checkboxElement.check();
// // Assert the checked state
// expect(checkboxElement).toBeChecked();
// await page.waitForTimeout(5000);
// const radioElement = page.locator('xpath = //input[@value="M"]');
// await radioElement.check();

// const dropdownSelect = page.locator('xpath =//select[@aria-label= "Choose a color"]');
// await dropdownSelect.selectOption("Blue");
// await page.waitForTimeout(5000);

// const multiDropdownSelect = page.locator('xpath =//select[@aria-label="Choose multiple colors"]');
// await multiDropdownSelect.selectOption(['red', 'blue']);
// await page.waitForTimeout(5000);

// const keyboardEvent= page.locator('xpath =//button[normalize-space()="Generic Button"]');
// await keyboardEvent.press('Enter');
// await page.waitForTimeout(5000);

//await page.setInputFiles('//input[@aria-label="Upload file"]', path.resolve(__dirname,"/Users/sishukla/Downloads/playwright-ts-demo/tests/text.txt"));

// await page.locator('xpath =//input[@aria-label="Upload files"]').setInputFiles([
//   path.join(__dirname, 'texts.txt'),
//   path.join(__dirname, 'text.txt'),
// ]);

// await page.locator('//div[@id="item-to-be-dragged"]').dragTo(page.locator('//div[@id="item-to-drop-at"]'));
// await page.waitForTimeout(5000);
// await page.locator('#item-to-be-dragged').hover();
// await page.mouse.down();
// await page.locator('#item-to-drop-at').hover();
// await page.mouse.up();

//await page.locator('//div[normalize-space()="Row 8"]').click();
await page.waitForTimeout(5000);

// Scroll the footer into view, forcing an "infinite list" to load more content
//await page.getByText('Footer text').scrollIntoViewIfNeeded();
// Position the mouse and scroll with the mouse wheel
await page.getByTestId('scrolling-container').hover();
await page.mouse.wheel(0, 10);
await page.waitForTimeout(5000);
await page.mouse.wheel(0, -10);

// Alternatively, programmatically scroll a specific element
await page.getByTestId('scrolling-container').evaluate(e => e.scrollTop += 100);
await page.waitForTimeout(5000);

});
