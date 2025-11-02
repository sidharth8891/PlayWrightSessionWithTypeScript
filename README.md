# Playwright TypeScript Demo

A comprehensive test automation framework built with **Playwright** and **TypeScript**, featuring both traditional test automation and Behavior-Driven Development (BDD) with Cucumber.

## 🚀 Framework Overview

This project uses **Playwright** - a modern end-to-end testing framework that enables reliable testing across Chromium, Firefox, and WebKit browsers. It supports both web UI testing and API testing with powerful features like auto-waiting, network interception, and parallel execution.

### Key Features
- **Cross-browser testing** (Chromium, Firefox, WebKit)
- **API and UI testing** capabilities
- **BDD support** with Cucumber integration
- **Parallel test execution**
- **Visual testing** with screenshots and video recording
- **Test reporting** with HTML and Allure reports
- **CI/CD ready** with Jenkins pipeline support

## 📁 Project Structure

```
playwright-ts-demo/
├── src/
│   ├── tests/              # Test files (.spec.ts)
│   ├── pages/              # Page Object Models
│   ├── utils/              # Utility functions
│   ├── constants/          # Test constants
│   ├── resources/          # Test data and resources
│   └── setup/              # Test setup configurations
├── features/               # BDD feature files
│   └── step_definitions/   # Cucumber step definitions
├── playwright.config.ts    # Playwright configuration
├── cucumber.js            # Cucumber configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright-ts-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 📝 Writing Tests

### UI Tests
Create test files in `src/tests/` with `.spec.ts` extension:

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example');
});
```

### API Tests
```typescript
import { test, expect } from '@playwright/test';

test('API test', async ({ request }) => {
  const response = await request.get('/users');
  expect(response.status()).toBe(200);
});
```

### BDD Tests (Cucumber)
1. **Create feature files** in `features/` directory:
   ```gherkin
   Feature: Login functionality
     Scenario: Successful login
       Given I am on the login page
       When I enter valid credentials
       Then I should be logged in
   ```

2. **Create step definitions** in `features/step_definitions/`:
   ```typescript
   import { Given, When, Then } from '@cucumber/cucumber';
   
   Given('I am on the login page', async function () {
     // Implementation
   });
   ```

## 🏃‍♂️ Running Tests

### Basic Test Execution
```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run with retries and trace on failure
npm run test:tracewithretry
```

### Tagged Test Execution
```bash
# Run smoke tests
npm run test:smoke

# Run regression tests
npm run test:regression
```

### BDD Test Execution
```bash
# Run Cucumber/BDD tests
npm run test:bdd
```

### Test Configuration Options
- **Parallel execution**: Tests run in parallel by default
- **Retries**: Configured for CI environments
- **Screenshots**: Captured on test failures
- **Video recording**: Available for debugging
- **Trace files**: Generated on failures for detailed debugging

## 📊 Test Reports

### HTML Reports
```bash
# Generate and open HTML report
npm run report:html
```

### Allure Reports
```bash
# Generate and open Allure report
npm run report:allure
```

Reports are automatically generated in:
- `playwright-report/` - HTML reports
- `allure-report/` - Allure reports

## 🔧 Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Test directory**: `./src/tests`
- **Base URL**: `https://reqres.in/api` (for API tests)
- **Browsers**: Chromium (Firefox and WebKit commented out)
- **Parallel execution**: Enabled
- **Screenshots**: On failure
- **Trace**: On failure (CI) / Off (local)

### Environment-specific Settings
- **CI Mode**: Headless execution with retries
- **Local Mode**: Headed execution with slow motion
- **Test timeout**: Configurable per test

## 🚀 CI/CD Integration

The project includes Jenkins pipeline configuration (`.jenkinsfile`) for continuous integration. Tests can be executed in CI environments with:
- Headless browser execution
- Parallel test execution
- Automatic report generation
- Failure screenshots and traces

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm test` | Run all Playwright tests |
| `npm run test:headed` | Run tests with visible browser |
| `npm run test:smoke` | Run tests tagged with @smoke |
| `npm run test:regression` | Run tests tagged with @regression |
| `npm run test:tracewithretry` | Run with trace on failure and retries |
| `npm run test:bdd` | Run Cucumber BDD tests |
| `npm run report:html` | Open HTML test report |
| `npm run report:allure` | Generate and open Allure report |

## 🔍 Debugging

1. **Run in headed mode**: `npm run test:headed`
2. **Use Playwright Inspector**: Add `await page.pause()` in your test
3. **Check trace files**: Available in `test-results/` after failures
4. **View screenshots**: Captured automatically on failures

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

1. Add tests in appropriate directories (`src/tests/` or `features/`)
2. Follow existing naming conventions
3. Include appropriate tags for test categorization
4. Ensure tests pass locally before committing
5. Update documentation as needed
