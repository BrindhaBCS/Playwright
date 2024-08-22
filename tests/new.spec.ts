import { test, expect } from "@playwright/test";
import { folderPath } from "../src/variable.constant";
import { deleteImageFiles } from "../src/Function.helper";
let page;

test.beforeAll(async ({browser})=>{


    deleteImageFiles(folderPath);


    page=await browser.newPage();
    await page.goto(process.env.url);
    await page.waitForTimeout(4000);
    await page.locator(process.env.code).fill(process.env.csid);

    await page.screenshot({ path: folderPath+'screenshotloop.png' });

    await page.locator(process.env.userfiled).fill(process.env.user);
    await page.locator(process.env.password).fill(process.env.pass);
    await page.screenshot({ path: folderPath+'acces223.png' });
    await page.locator(process.env.Login).click();
    await page.screenshot({ path: folderPath+'acces345.png' });
    await page.waitForTimeout(9000);
    const title = await page.title();
    console.log("home page:",title);
    try {
        expect(title).toEqual(process.env.HomeTitle);
    } catch (error) {
        console.error('Your title is not matching. Please check.');
        throw error;
    }
});

test.afterAll(async()=>{
    await page.close();
});

test('homepage',async()=>{
    await page.locator(process.env.arrow).click();
    await page.screenshot({ path: folderPath+'acces346.png' });
    await page.locator(process.env.Draganddrop).click();
    await page.waitForTimeout(3000);
    await page.locator(process.env.Templatelist).click();
    await page.waitForTimeout(3000);
});