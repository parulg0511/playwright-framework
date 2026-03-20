import { test, expect } from '../../fixtures/baseTest';

test('Interaction test', async ({ page,loginPage, interactionPage }) => {

  // Navigate to the page
  await page.goto('https://selenium-prd.firebaseapp.com/home.html', {
    waitUntil: 'domcontentloaded'
  });
  
  await loginPage.login('admin123@gmail.com', 'admin123');
  // Use the fixture instance to call methods
  await interactionPage.hoverInteractions();  
  await interactionPage.clickTooltip();

  // Verify tooltip texts
  expect(await interactionPage.getRightTooltipText()).toBe('Right');
  expect(await interactionPage.getLeftTooltipText()).toBe('Left');
  expect(await interactionPage.getTopTooltipText()).toBe('Top');
  expect(await interactionPage.getBottomTooltipText()).toBe('Bottom');

});