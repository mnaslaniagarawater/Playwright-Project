import { test, expect } from '@playwright/test';
import { RegisterPage } from "../../pages/register"

test("Register Account", async ({ page }) => {
  const Register = new RegisterPage(page)

  await Register.gotoRegisterPage("https://rahulshettyacademy.com/client/#/auth/register")

  await Register.register(
    "Malik",
    "Nasla",
    "exampleemail@email.com",
    "1234567890",
    "Student",
    "Male",
    "Malik2002!",
    "Malik2002!",
    23
  )

});