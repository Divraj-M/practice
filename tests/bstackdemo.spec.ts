import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger";

 test("Launch BrowserStack demo and verify the page title", async ({ page }) => {
  await log("info", "Navigating to BrowserStack Demo application");
  await page.goto("https://bstackdemo.com/");

  await log("info", `Opened URL: ${page.url()}`);
  await expect(page).toHaveURL("https://bstackdemo.com/");
  await expect(page).toHaveTitle("StackDemo");
  await log("log", "Title assertion passed: StackDemo");
});
