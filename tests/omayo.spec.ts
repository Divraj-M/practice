import { test, expect } from "@playwright/test";

test("Go to the url and assert the fields", async ({ page }) => {
  await page.goto("https://omayo.blogspot.com/");

  await expect(page).toHaveURL("https://omayo.blogspot.com/");
  await expect(page).toHaveTitle("omayo (QAFox.com)");

  await expect(page.locator("//h1[contains(text(),'omayo')]")).toHaveText(/^\s*omayo/);
  
  await page.getByRole('heading', { name: 'Page One' }).click();
  await expect(page.locator('#Text1')).toContainText('This is a sample Text on this page. This is a sample Text on this page. This is a sample Text on this page.');
  await page.getByRole('textbox', { name: 'search' }).click();
  await page.getByRole('textbox', { name: 'search' }).fill('hello');
  await page.getByRole('button', { name: 'Search' }).click();

});
test(
  "should load the page",
  {
    tag: "@smoke",
  },
  async ({ page }) => {
    await page.goto("https://playwright.dev/");

    await expect(page).toHaveTitle(/Playwright/);
  },
);

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});