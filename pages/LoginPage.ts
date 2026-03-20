import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#email_field');
    this.passwordInput = page.locator('#password_field');
    this.loginButton = page.locator('button:has-text("Login to Account")');
  }

  // UI login
  async login(email: string, password: string) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.emailInput.fill(email);

    await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await this.passwordInput.fill(password);

    await this.loginButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.loginButton.click();

    // optional: wait for some element on the home page to ensure login succeeded
    await this.page.waitForLoadState('networkidle');
  }
}