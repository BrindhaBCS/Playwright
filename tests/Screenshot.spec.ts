import { test } from './customfixture';  // Use the custom fixture
import {Page, Expect } from '@playwright/test';
//import { QA_link, customerCode, passwword_qa, username } from '../constant';
import path from 'path';


//const {RegisterPage} = require('../pages/RegisterPage.page');
let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  // const pagesetup = new RegisterPage(page);   
  // await pagesetup.login(username,passwword_qa,customerCode,QA_link);
  await page.goto('https://qa.symphony4cloud.com/login');
  await page.fill('#customer_code','c100001');
  await page.fill('#user_name','selenium_user');
  await page.fill('#password','Selepredev@12345'); 
  await page.click('//button[@type="submit"]');
});

test.afterAll('teardown',async()=>{
  await page.goto('https://qa.symphony4cloud.com/dashboard');
  await page.click("(//button[@type='button'])[2]");
  await page.click("//li[text()='Log Out']");
})

test('screenshots', async ({screenshotPath }) => {
  await page.getByTestId('ChevronRightRoundedIcon').click();
  await page.screenshot({ path: path.join(screenshotPath, 'dashboard-screenshot.png') });

  await page.locator("//span[text()='Drag & Drop']").click();
  await page.waitForTimeout(5000);

  await page.screenshot({ path: path.join(screenshotPath, 'EXPANDING-screenshot.png') });
  
  await page.locator("//h3[text()='Flexi Flow']").click(); 
  await page.screenshot({ path: path.join(screenshotPath, 'flexiflow-screenshot.png') });  
  await page.getByText('General Services').click();
  // await page.locator('#item-to-be-dragged').dragTo(page.locator('#item-to-drop-at'));
  await page.locator("xpath=//span[text()='Delay']").hover()
  await page.mouse.down();
  await page.mouse.move(700,300);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover()
  await page.mouse.down();
  await page.mouse.move(1000,300);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover()
  await page.mouse.down();
  await page.mouse.move(700,500);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover()
  await page.mouse.down();
  await page.mouse.move(1000,500);
  await page.mouse.up();
  await page.locator("xpath=//span[text()='Delay']").hover()
  await page.mouse.down();
  await page.mouse.move(350,400);
  await page.mouse.up();
  await page.locator("(//div[@class='port ']/following-sibling::div)[1]").dragTo(page.locator("(//div[contains(@class,'port')])[7]"));
  await page.locator("(//div[@class='port ']/following-sibling::div)[3]").dragTo(page.locator("(//div[contains(@class,'port')])[17]"));
  await page.locator("(//div[contains(@class,'port')])[24]").dragTo(page.locator("(//div[contains(@class,'port')])[2]"));
  await page.locator("(//div[contains(@class,'port')])[24]").dragTo(page.locator("(//div[contains(@class,'port')])[12]"));
  await page.waitForTimeout(5000);

  // Take a screenshot and save it to the specified path
  await page.screenshot({ path: path.join(screenshotPath, 'dragNdrop-screenshot.png') });
});
