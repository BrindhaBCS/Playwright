import { test, expect } from "@playwright/test";
import { chromium } from "playwright";
import Loginpage from "../src/pages/Loginpage";
import { screenshotPath } from "../src/variable.constant";
import { getUniqueFilename } from "../src/Function.helper";



test("Loginpage", async ({}) => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginpage = new Loginpage(page);
    await loginpage.navigateToLoginPage();
    
    const screenshotFullPath1 = `${screenshotPath}${getUniqueFilename(screenshotPath)}`;
    const promise1 = page.screenshot({ path: screenshotFullPath1 });

    await loginpage.fillcustomer(process.env.csid);
    await loginpage.fillUsername(process.env.user);
    await loginpage.fillpassword(process.env.pass);
    await loginpage.clickLoginButton();

    await page.waitForTimeout(5000);
    await browser.close();
});

test("Homepage",async({}) =>{




});