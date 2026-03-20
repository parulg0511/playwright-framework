import { test, expect } from '../../fixtures/baseTest';

test('Switch test', async ({ page,loginPage, switchPage }) => {

  // Navigate to the page
  await page.goto('https://selenium-prd.firebaseapp.com/home.html', {
    waitUntil: 'domcontentloaded'
  });
  
  await loginPage.login('admin123@gmail.com', 'admin123');
  await switchPage.hoverSwitchTo();

  await switchPage.clickAlerts();

  //await expect(page).toHaveURL(/alert/);

  // Window alert
  await switchPage.handleWindowAlert();

  await page.screenshot({ path: 'screenshots/form_filled.png', fullPage: true });
});