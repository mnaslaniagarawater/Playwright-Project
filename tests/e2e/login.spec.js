import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pages/login"
import { RegisterPage } from "../../pages/register"

test("Login", async ({ page }) => {
  const Login = new LoginPage(page)
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

  await Login.gotoLoginPage("https://rahulshettyacademy.com/client/#/auth/login")

  await Login.login(
    "exampleemail@email.com",
    "Malik2002!",
  )

});