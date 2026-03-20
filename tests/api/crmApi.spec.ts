import { test, expect } from '@playwright/test';

test('Get campaigns API', async ({ request }) => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybWd5YW50cmEiLCJleHAiOjE3NzM3NTE4MTIsImlhdCI6MTc3MzcxNTgxMn0.v2_byoMUpbxNt_axtbplFVJC5nmwqkqQHXg3_omU3kM";

  const response = await request.get(
    'http://49.249.28.218:8098/campaign/all?page=1&size=10',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  console.log("Status:", response.status());
  console.log("Body:", await response.text());

  expect(response.ok()).toBeTruthy();

});