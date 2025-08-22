import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/login"

test("Adding to Cart", async ({ page }) => {
  const Login = new LoginPage(page)

  await Login.gotoLoginPage("https://rahulshettyacademy.com/client/#/auth/login")

  await Login.login(
    "exampleemail@email.com",
    "Malik2002!",
  )

  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(1).click();
  await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
  await page.getByRole('button', { name: '   Cart' }).click();

  expect(await page.getByRole('heading', { name: /adidas original/i }).click());
  expect(await page.getByRole('heading', { name: /zara coat/i }).click());
  expect(await page.getByRole('heading', { name: /iphone 13 pro/i }).click());

})