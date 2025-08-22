import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/login"

test("checking out order", async ({ page }) => {
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
  await page.getByRole('button', { name: 'Checkout❯' }).click();

  await page.locator('input[type="text"]').nth(1).click();
  await page.locator('input[type="text"]').nth(1).fill('123');
  await page.locator('input[type="text"]').nth(2).click();
  await page.locator('input[type="text"]').nth(2).fill('Name');
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially('United St');
  await page.getByRole('button', { name: ' United States', exact: true }).click();
  await page.getByText('Place Order').click();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Click To Download Order Details in CSV' }).click();
  const download = await downloadPromise;

  await page.getByRole('button', { name: '   ORDERS' }).click();
  expect(await page.getByRole('cell', { name: 'IPHONE 13 PRO' }));
  expect(await page.getByRole('cell', { name: 'ZARA COAT' }));
  expect(await page.getByRole('cell', { name: 'ADIDAS ORIGINAL' }));

})