import { test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test.describe("Launch the orange HRM",()=>{

    test.beforeEach("launch the url", async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        console.log('>>url of the page: ', await page.url());


    })
    test("Verify the url in orange HRM",async({page})=>{
        await expect(page).toHaveTitle(/OrangeHRM/);
    })
})