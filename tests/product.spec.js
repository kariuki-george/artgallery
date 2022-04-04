const { test, expect } = require("@playwright/test");

test("product test", async ({ page }) => {
    await page.goto("https://artgalleryprod.vercel.app/");
  
    await expect(page.locator("text=cart").first()).toHaveAttribute("href", "/cart");
    await page.locator('_react=ListItem[text *= "@" i]');
    await page.goto("https://artgalleryprod.vercel.app/product/2");
  
    await expect(page).toHaveTitle(/product/);
    await expect(page.locator("text=Add to cart").first()).toBeVisible();

  });

  