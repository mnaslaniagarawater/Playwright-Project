exports.RegisterPage = class RegisterPage{
  constructor(page){
    this.page = page
    this.first_name_textbox = page.getByLabel("First Name")
    this.last_name_textbox = page.getByLabel("Last Name")
    this.email_textbox = page.getByPlaceholder("email@example.com")
    this.phone_number_textbox = page.getByPlaceholder("enter your number")
    this.occupation_dropdown = page.locator("select[formcontrolname='occupation']")
    this.male_gender_selector   = page.locator("input[type='radio'][formcontrolname='gender'][value='Male']");
    this.female_gender_selector = page.locator("input[type='radio'][formcontrolname='gender'][value='Female']");
    this.password_textbox = page.locator("input[formcontrolname='userPassword']")
    this.confirm_password_textbox = page.locator("input[formcontrolname='confirmPassword']")
    const form = page.locator('form');
    this.age_checkbox = form.locator('input[type="checkbox"]')
    this.register_botton = page.getByRole('button', { name: 'Register' })

  }

  async gotoRegisterPage(URL) {
    await this.page.goto(URL)
  }

  async register(
    first_name, 
    last_name, 
    email, 
    phone_number, 
    occupation, 
    gender,
    password,
    confirm_password,
    age,
  ){
    await this.first_name_textbox.fill(first_name)
    await this.last_name_textbox.fill(last_name)
    await this.email_textbox.fill(email)
    await this.phone_number_textbox.fill(phone_number)
    await this.occupation_dropdown.selectOption({label: occupation})

    if (gender === "Male") { await this.male_gender_selector.check() }
    else { await this.female_gender_selector.check() }

    await this.password_textbox.fill(password)

    await this.confirm_password_textbox.fill(confirm_password)

    if (age >= 18) { await this.age_checkbox.waitFor({ state: 'visible' });  await this.age_checkbox.setChecked(true); }
    
    await this.register_botton.click()
  }
}



