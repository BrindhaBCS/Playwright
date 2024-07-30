import { test as base, Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { getUniqueFilename } from './utils';
//import { getUniqueFilename } from './utils'; 


dotenv.config();

const screenshotPath = process.env.screenshot_path || 'C:/Playwright/Playwright/screenshotDir';

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotPath)) {
  fs.mkdirSync(screenshotPath, { recursive: true });
}

const test = base.extend<{ screenshotDir: string, takeFullPageScreenshot: (page: Page, name?: string) => Promise<void> }>({
  screenshotDir: async ({}, use) => {
    await use(screenshotPath);
  },
  takeFullPageScreenshot: async ({}, use) => {
    const takeFullPageScreenshot = async (page: Page, name?: string) => {
      const filename = name ? `${name}.png` : getUniqueFilename(screenshotPath);
      await page.screenshot({ path: path.join(screenshotPath, filename), fullPage: true });
    };
    await use(takeFullPageScreenshot);
  },
});

export { test };
