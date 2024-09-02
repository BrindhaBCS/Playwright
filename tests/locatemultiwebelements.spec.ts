import{test,expect} from '@playwright/test';
test('multi-tiles-opening',async({page})=>{
    await page.goto('https://qa.symphony4sap.com/login');
    await page.fill('#customer_code','c100001');
    await page.fill('#user_name','selenium_user');
    await page.fill('#password','Seleqa@123'); 
    await page.click('//button[@type="submit"]');   
    await page.getByTestId('ChevronRightRoundedIcon').click();
    await page.locator("(//span[text()='Drag & Drop'])[1]").click();
    await page.waitForSelector("//h3[contains(@class,'MuiTypography-root MuiTypography-h3')]");
    const headings=await page.$$("//h3[contains(@class,'MuiTypography-root MuiTypography-h3')]");
    console.log("headings are:",headings)
    for(const heading of headings){
        const data= await heading.textContent();
        console.log(data);
    }    
    await page.waitForTimeout(5000);
})


