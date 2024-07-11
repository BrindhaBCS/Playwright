import { test as base } from '@playwright/test';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from a .env file if present
dotenv.config();

// Get the screenshot path from the environment variable
const screenshotPath = process.env.SCREENSHOT_PATH || 'default_screenshot_path';

// Extend the base test to include our custom behavior
const test = base.extend<{ screenshotPath: string }>({
  screenshotPath: async ({}, use) => {
    use(screenshotPath);
  },
});


export { test };