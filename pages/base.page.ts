import { expect, type Locator, type Page } from '@playwright/test';

class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }
}

export default BasePage;