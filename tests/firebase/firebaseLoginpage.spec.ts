import { test, expect } from '../../fixtures/baseTest';

test('Login', async ({ loginPage, page }) => {
  // Navigate to the login page
  await page.goto(`${process.env.BASE_URL}/home.html`);

  // Fill credentials from .env
  await loginPage.login(
    process.env.ADMIN_EMAIL!,
    process.env.ADMIN_PASSWORD!
  );

  // Verify login success by checking for a home page element
  const loggedInIndicator = page.locator('text=Interactions');
  await expect(loggedInIndicator).toBeVisible();

  console.log('Login via UI successful!');
});