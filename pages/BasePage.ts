import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: 'networkidle', // waits until no network requests for 500ms
      timeout: 40000            // 40s timeout
    });


  }
}