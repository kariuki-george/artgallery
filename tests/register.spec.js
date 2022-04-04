const { test, expect } = require("@playwright/test");

let page;

test("register", async ({ browser }) => {
  // Create page yourself and sign in.
  page = await browser.newPage();

  await page.goto("https://artgalleryprod.vercel.app/");

  await page.click("text=sign in");
  await expect(page).toHaveTitle(/login/);
  await page.click("text=Register");
  await expect(page).toHaveTitle(/register/);

  await page.locator('css=[placeholder="john doe"]').fill("thuo g");

  await page
    .locator('css=[placeholder="johndoe@email.com"]')
    .fill("thuo@gmail.com");
  await page.locator('css=[placeholder="0712345678"]').fill("0748440468");
  await page.locator('css=[placeholder="12345678"]>> nth=0').fill("1");

  await page.locator('css=[placeholder="12345678"]>> nth=1').fill("1");
  await page.click("text=create");
  await expect(page.locator("text=buyer").first()).toBeVisible()
});
