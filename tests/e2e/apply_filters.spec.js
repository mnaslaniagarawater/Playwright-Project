import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/login"

test('apply filters', async ({ page }) => {
  const Login = new LoginPage(page)

  await Login.gotoLoginPage("https://rahulshettyacademy.com/client/#/auth/login")

  await Login.login(
    "exampleemail@email.com",
    "Malik2002!",
  )

  await page.locator('#sidebar div').filter({ hasText: /^fashion$/ }).getByRole('checkbox').check();
  await expect(page.getByText(/zara coat 3/i)).toBeVisible();
  await expect(page.getByText(/adidas original/i)).toBeVisible();
  await expect(page.getByText(/iphone 13 pro/i)).not.toBeVisible();
  await page.locator('#sidebar div').filter({ hasText: /^fashion$/ }).getByRole('checkbox').uncheck();

  await page.locator('#sidebar div').filter({ hasText: /^electronics$/ }).getByRole('checkbox').check();
  await expect(page.getByText(/zara coat 3/i)).not.toBeVisible();
  await expect(page.getByText(/adidas original/i)).not.toBeVisible();
  await expect(page.getByText(/iphone 13 pro/i)).toBeVisible();
  await page.locator('#sidebar div').filter({ hasText: /^electronics$/ }).getByRole('checkbox').uncheck();
  
  await page.locator('#sidebar div').filter({ hasText: /^household$/ }).getByRole('checkbox').check();
  await expect(page.getByText(/zara coat 3/i)).not.toBeVisible();
  await expect(page.getByText(/adidas original/i)).not.toBeVisible();
  await expect(page.getByText(/iphone 13 pro/i)).not.toBeVisible();
  await page.locator('#sidebar div').filter({ hasText: /^household$/ }).getByRole('checkbox').uncheck();
});

