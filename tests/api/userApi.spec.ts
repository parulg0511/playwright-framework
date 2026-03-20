import { test, expect } from '@playwright/test';
import { getUsers } from '../../utils/apiHelper';

test('Get users API', async ({ request }) => {

  const response = await getUsers(request);

  console.log('Status code:', response.status());

  const body = await response.json();
  console.log('Body:', body);

  expect(response.status()).toBe(200);

});