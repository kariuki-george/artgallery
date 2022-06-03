const { test, expect } = require("@playwright/test");

let page;

test("login test",async ({ browser }) => {
  // Create page yourself and sign in.
  page = await browser.newPage();

  await page.goto("https://artgalleryprod.vercel.app/");

  await page.click("text=sign in");
  await expect(page).toHaveTitle(/login/);
  await page.locator('css=[placeholder="johndoe@email.com"]').fill('f@gmail.com');
  await page.locator('css=[placeholder="passw123"]').fill('1');
 
  await page.click("text=login");
  await expect(page.locator("text=buyer").first()).toBeVisible()
  
});
