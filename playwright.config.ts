import { defineConfig } from '@playwright/test';

export default defineConfig({
  
  reporter: [
    ['list'],                 // console reporter
    ['allure-playwright']     // Allure reporter
  ],

  use: {
    headless: true,
    baseURL: 'https://selenium-prd.firebaseapp.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});