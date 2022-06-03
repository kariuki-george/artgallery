const { test, expect } = require("@playwright/test");

test("home page test", async ({ page }) => {
  await page.goto("https://artgalleryprod.vercel.app/");

  await expect(page).toHaveTitle(/Art Gallery/);
  await expect(page.locator("text=cart").first()).toHaveAttribute(
    "href",
    "/cart"
  );

  await page.click("text=cart");
  // Expect some text to be visible on the page.
  await expect(page.locator("text=Your cart is empty").first()).toBeVisible();
  await page.click("text=sign in");
  await expect(page.locator("text=login").first()).toBeVisible();
  await expect(page).toHaveTitle(/login/);

  await page.click("text=Designer");
  await expect(
    page.locator("text=Proceed only if you are a designer").first()
  ).toBeVisible();
});

test("cart page test", async ({ page }) => {
  await page.goto("https://artgalleryprod.vercel.app/cart");

  await expect(page).toHaveTitle(/cart/);
  await expect(page.locator("text=home").first()).toHaveAttribute("href", "/");
});

test("login page test", async ({ page }) => {
  await page.goto("https://artgalleryprod.vercel.app/auth/login");

  await expect(page.locator("text=login").first()).toBeVisible();
  await expect(page).toHaveTitle(/login/);
  await expect(page.locator("text=Register").first()).toBeVisible();
  
  await page.click("text=Designer");
  await expect(
    page.locator("text=Proceed only if you are a designer").first()
  ).toBeVisible();
});
test("register page test", async ({ page }) => {
  await page.goto("https://artgalleryprod.vercel.app/auth/register");

  await expect(page.locator("text=sign up").first()).toBeVisible();
  await expect(page).toHaveTitle(/register/);
  
  await page.click("text=Designer");
  await expect(
    page.locator("text=Proceed only if you are a designer").first()
  ).toBeVisible();
});
test("create page test", async ({ page }) => {
  await page.goto("https://artgalleryprod.vercel.app/designer/create");

  await expect(page.locator("text=Name").first()).toBeVisible();
  await expect(page).toHaveTitle(/create/);
 
});



