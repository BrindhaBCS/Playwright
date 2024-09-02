import { test } from './customfixture';  // Use the custom fixture
import { Page } from '@playwright/test';
import { QA_link, customerCode, passwword_qa, username } from '../constant';

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://qa.symphony4cloud.com/login');
  await page.fill('#customer_code', 'c100001');
  await page.fill('#user_name', 'selenium_user');
  await page.fill('#password', 'Seleqa@123'); 
  await page.click('//button[@type="submit"]');
});

test.afterAll(async () => {
  await page.goto('https://qa.symphony4cloud.com/dashboard');
  await page.click("(//button[@type='button'])[3]");
  await page.click("//li[text()='Log Out']");
  await page.close(); // Close the page after tests
});

test('screentest', async ({ takeFullPageScreenshot }) => {
  await page.getByTestId('ChevronRightRoundedIcon').click();
  // await takeFullPageScreenshot(page, 'dashboard2-screenshot');
  await page.locator("//span[text()='Drag & Drop']").click();
  await page.waitForTimeout(5000);
  // await takeFullPageScreenshot(page, 'EXPANDING-screenshot');  // Using provided name
  await takeFullPageScreenshot(page); // Not providing name, should use getUniqueFilename
  await page.locator("//h3[text()='Flexi Flow']").click();
  await takeFullPageScreenshot(page); // Not providing name, should use getUniqueFilename
  await page.getByText('General Services').click();

  await page.locator("xpath=//span[text()='Delay']").hover();
  await page.mouse.down();
  await page.mouse.move(700, 300);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover();
  await page.mouse.down();
  await page.mouse.move(1000, 300);
  await page.mouse.up();
  await takeFullPageScreenshot(page);

  await page.locator("xpath=//span[text()='Delay']").hover();
  await page.mouse.down();
  await page.mouse.move(700, 500);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover();
  await page.mouse.down();
  await page.mouse.move(1000, 500);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover();
  await page.mouse.down();
  await page.mouse.move(350, 400);
  await page.mouse.up();
  await takeFullPageScreenshot(page);

  await page.locator("(//div[@class='port ']/following-sibling::div)[1]").dragTo(page.locator("(//div[contains(@class,'port')])[7]"));
  await page.locator("(//div[@class='port ']/following-sibling::div)[3]").dragTo(page.locator("(//div[contains(@class,'port')])[17]"));
  await page.locator("(//div[contains(@class,'port')])[24]").dragTo(page.locator("(//div[contains(@class,'port')])[2]"));
  await page.locator("(//div[contains(@class,'port')])[24]").dragTo(page.locator("(//div[contains(@class,'port')])[12]"));
  await page.waitForTimeout(5000);
  await takeFullPageScreenshot(page);
});
