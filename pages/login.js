exports.LoginPage = class LoginPage{
  constructor(page){
    this.page = page
    this.username_textbox = page.locator("input[formcontrolname='userEmail']")
    this.password_textbox = page.locator("input[formcontrolname='userPassword']")
    this.botton = page.getByRole('button', { name: 'Login' })

  }

  async gotoLoginPage(URL) {
    await this.page.goto(URL)
  }

  async login(username, password){
    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.botton.click()
  }
}