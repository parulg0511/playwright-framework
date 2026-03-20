import { test, expect } from '../../fixtures/baseTest';

test(' file upload', async ({ page , loginPage, fileUploadPage}) => {
await page.goto('https://selenium-prd.firebaseapp.com/home.html', {
    waitUntil: 'domcontentloaded'
  });
  
  await loginPage.login('admin123@gmail.com', 'admin123');

  await fileUploadPage.openFileUploadPage();

  await fileUploadPage.uploadFile('C:/Users/durgesh singh/Desktop/imp.txt');

});