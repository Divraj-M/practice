import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger";

test.describe("Launch the orange HRM", () => {
  test.beforeEach("launch the Orange HRM url", async ({ page }) => {
    await log("info", "Navigating to OrangeHRM login page");
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await log("info", `Opened URL: ${page.url()}`);
    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page.locator('//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]')).toBeVisible();
    await log("log", "OrangeHRM login page loaded successfully");
  });

  test("Verify the valid login in Orange HRM", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: "Username" })).toBeVisible();
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await log("log", "Entered OrangeHRM username");

    await page.locator('input[name="password"]').fill("admin123");
    await log("log", "Entered OrangeHRM password");

    await page.getByRole("button", { name: "Login" }).click();
    await log("info", "Submitted OrangeHRM login form");

    await expect(page).toHaveURL(/dashboard/);
    await log("log", `Login succeeded and dashboard opened: ${page.url()}`);

    await page.waitForTimeout(4000);
  });
});