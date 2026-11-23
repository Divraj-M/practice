import { test, expect } from "@playwright/test";
import { log } from "../helpers/logger";

test("Go to the url and assert the fields", async ({ page }) => {
  await log("info", "Navigating to Omayo blog");
  await page.goto("https://omayo.blogspot.com/");

  await log("info", `Opened URL: ${page.url()}`);
  await expect(page).toHaveURL("https://omayo.blogspot.com/");
  await expect(page).toHaveTitle("omayo (QAFox.com)");
  await log("log", "Omayo URL and title assertions passed");

  await expect(page.locator("//h1[contains(text(),'omayo')]")).toHaveText(/^\s*omayo/);
  await log("log", "Omayo heading assertion passed");

  await page.getByRole('heading', { name: 'Page One' }).click();
  await expect(page.locator('#Text1')).toContainText('This is a sample Text on this page.');
  await log("log", "Page One sample text assertion passed");

  await page.getByRole('textbox', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'search' }).fill('hello');
  await page.getByRole('button', { name: 'Search' }).click();
  await log("log", "Search textbox and button interactions completed");
});

test(
  "should load the page",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    await log("info", "Navigating to Playwright documentation");
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);
    await log("log", `Playwright title assertion passed: ${await page.title()}`);
  },
);

test("get started link", async ({ page }) => {
  await log("info", "Navigating to Playwright documentation for Get started flow");
  await page.goto("https://playwright.dev/");

  await page.getByRole("link", { name: "Get started" }).click();
  await log("log", "Clicked the Get started link");

  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
  await log("log", "Installation heading is visible");
});