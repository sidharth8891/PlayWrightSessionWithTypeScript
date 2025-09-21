import { test, expect, Page } from '@playwright/test';

class HuggingFaceValidator {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHuggingFace(): Promise<void> {
    await this.page.goto('https://huggingface.co/', { timeout: 60000 });
  }

  async validateTitle(): Promise<void> {
    // Validate that the title contains "Hugging Face"
    await expect(this.page).toHaveTitle(/Hugging Face/, { timeout: 10000 });
  }

  async validatePageHeader(): Promise<void> {
    // Additional validation to check if the main heading is visible
    await expect(this.page.getByRole('heading', { name: /The AI community/ })).toBeVisible({ timeout: 10000 });
  }

  async takeScreenshot(screenshotName: string = 'huggingface'): Promise<void> {
    const timestamp = Date.now();
    await this.page.screenshot({ 
      path: `test-results/screenshots/${screenshotName}-${timestamp}.png`, 
      fullPage: true 
    });
  }
}

test.describe('Hugging Face Tests', () => {
  test('Should navigate to Hugging Face and validate title', async ({ page }) => {
    const huggingFaceValidator = new HuggingFaceValidator(page);
    
    // Navigate to Hugging Face
    await huggingFaceValidator.navigateToHuggingFace();
    
    // Validate the page title
    await huggingFaceValidator.validateTitle();
    
    // Additional validation for page content
    await huggingFaceValidator.validatePageHeader();
    
    // Take a screenshot for verification
    await huggingFaceValidator.takeScreenshot('huggingface-homepage');
  });

  test('Should validate Hugging Face page elements', async ({ page }) => {
    const huggingFaceValidator = new HuggingFaceValidator(page);
    
    // Navigate to Hugging Face
    await huggingFaceValidator.navigateToHuggingFace();
    
    // Validate title
    await huggingFaceValidator.validateTitle();
    
    // Check for navigation elements
    await expect(page.getByRole('navigation')).toBeVisible();
    
    // Check for sign-up or login buttons
    await expect(page.getByRole('link', { name: /Sign Up|Log In|Login/i })).toBeVisible();
    
    // Take screenshot
    await huggingFaceValidator.takeScreenshot('huggingface-elements');
  });
});
