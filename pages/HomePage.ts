import { BasePage } from '../pages/BasePage';
import { Locator, Page } from '@playwright/test';

export class HomePage extends BasePage{

  readonly nameInput: Locator;
  readonly sexMaleRadio: Locator;
  readonly sexFemaleRadio: Locator;
  readonly citySelect: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

   constructor(page: Page) {
    super(page);

    // text inputs
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#emailid');

    // radio buttons
    this.sexMaleRadio = page.locator('input#male');
    this.sexFemaleRadio = page.locator('input#female');

    // selects / dropdowns
    this.citySelect = page.locator('#city');
   
    // submit button (update selector as needed)
    this.submitButton = page.locator('.bootbutton');
  }

  // Fill the form
  async fillName(name: string) {
    await this.nameInput.fill('parul');
  }

  async selectSex(sex: 'Male' | 'Female') {
  // Use label text (works even if input is hidden)
  const label = sex === 'Male'
    ? this.page.locator('label:has-text("Male")')
    : this.page.locator('label:has-text("Female")');

  await label.waitFor({ state: 'visible', timeout: 15000 }); // wait for label to appear
  await label.scrollIntoViewIfNeeded();                     // scroll if needed
  await label.click();                                      // click the label
}

  async selectCity(city: string) {
    await this.citySelect.selectOption({ label: city });
  }

   async fillEmail(email: string) {
    await this.emailInput.fill('abc@gmail.com');
  }

  async clickSubmit() {
    await this.submitButton.click();
  }
// convenience method to fill entire form
  async fillForm(data: {
    name: string;
    sex: 'Male' | 'Female';
    city: string;
    email: string;
  }) { 
    await this.fillName(data.name);
    await this.selectSex(data.sex);
    await this.selectCity(data.city);
    await this.fillEmail(data.email);
  }
}