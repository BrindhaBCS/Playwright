import { Page } from "@playwright/test";
// import Homepage from "./Homepage";

export default class Loginpage {
    private readonly ciInput = "#customer_code";
    private readonly userInput = "#user_name";
    private readonly passInput = "#password";
    private readonly loginInput = "//button[normalize-space()='LOGIN']";
    private mypage: Page;

    constructor(private page: Page){
    }
    async navigateToLoginPage(){
        await this.page.goto(process.env.url!);
    }
    async fillcustomer(ci: any) {
        await this.page.locator(this.ciInput).fill(ci);
    }
    async fillUsername(username: any) {
        await this.page.locator(this.userInput).fill(username);
    }
    async fillpassword(password: any) {
        await this.page.locator(this.passInput).fill(password);
    }
    async clickLoginButton(){
        await this .page
            .locator(this.loginInput)
            .click()
            .catch((error)=>{
                console.error('loginbutton is not working: ${error}');
            throw error;
            });
            // const homepage = new Homepage(this.page);
            // return homepage;
    }
}
