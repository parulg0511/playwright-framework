import { test, expect } from '../../fixtures/baseTest';

test('Login', async ({ loginPage, page }) => {
  const baseUrl = process.env.BASE_URL;
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  // ✅ Fail fast if env variables are missing
  if (!baseUrl || !email || !password) {
    throw new Error('Missing environment variables');
  }

  // Navigate to the login page
  await page.goto(`${baseUrl}/home.html`);

  // Login
  await loginPage.login(email, password);

  // Verify login success
  const loggedInIndicator = page.locator('text=Interactions');
  await expect(loggedInIndicator).toBeVisible({ timeout: 10000 });

  console.log('Login via UI successful!');
});