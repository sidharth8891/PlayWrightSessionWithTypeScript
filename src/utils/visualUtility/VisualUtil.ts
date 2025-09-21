import { Page, Locator, expect } from '@playwright/test';

export class VisualUtil {

  // Capture full-page snapshot
  static async compareFullPage(page: Page, snapshotName: string) {
    expect(await page.screenshot({ fullPage: true }))
      .toMatchSnapshot(`${snapshotName}.png`);
  }

  // Capture snapshot of a specific element
  static async compareElement(locator: Locator, snapshotName: string) {
    expect(await locator.screenshot())
      .toMatchSnapshot(`${snapshotName}.png`);
  }

  // Capture snapshot in mobile/desktop view
  static async compareResponsive(page: Page, snapshotName: string, width: number, height: number) {
    await page.setViewportSize({ width, height });
    expect(await page.screenshot())
      .toMatchSnapshot(`${snapshotName}-${width}x${height}.png`);
  }
}
