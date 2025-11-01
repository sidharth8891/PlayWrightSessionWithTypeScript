
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = this.page.getByLabel('Email or phone');
    this.passwordInput = this.page.getByLabel('Enter your password');
    this.nextButton = this.page.getByRole('button', { name: 'Next' });
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickNext() {
    await this.nextButton.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.clickNext();
    
    // Wait for the URL to change to the password page
    await this.page.waitForURL('**/signin/v2/challenge/password/**');
    
    await this.enterPassword(password);
    await this.clickNext();
  }
}
