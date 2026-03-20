import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { FileUploadPage } from '../pages/FileUploadPage';
import { InteractionsPage } from '../pages/InteractionsPage';
import { SwitchToPage } from '../pages/SwitchToPage';
import * as dotenv from 'dotenv';
import { ApiHelper } from '../utils/apiHelper';

dotenv.config(); // Load variables from .env

type MyFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  fileUploadPage: FileUploadPage;
  interactionPage: InteractionsPage;
  switchPage: SwitchToPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },


  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  fileUploadPage: async ({ page }, use) => {
    await use(new FileUploadPage(page));
  },

  interactionPage: async ({ page }, use) => {
    await use(new InteractionsPage(page));
  },

  switchPage: async ({ page }, use) => {
    await use(new SwitchToPage(page));
  }

});

export { expect } from '@playwright/test';