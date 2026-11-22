import { test,expect} from '@playwright/test';
import { TIMEOUT } from 'dns';

test.describe("Launch the orange HRM",()=>{

    test.beforeEach("launch the Orange HRM url", async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        console.log('>>url of the page: ', await page.url());
        await expect(page).toHaveTitle(/OrangeHRM/);
        await expect(page.locator('//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]')).toBeVisible();

    })
  
test("Verify the valid login in Orange HRM", async ({ page }) => {
 
  await expect(page.getByRole("textbox", { name: "Username" })).toBeVisible();

  await page.getByRole("textbox", { name: "Username" }).fill("Admin");

  await page.locator('input[name="password"]').fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/dashboard/);

  await page.waitForTimeout(4000);
});



})