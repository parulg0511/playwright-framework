type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};


import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

const API_KEY = 'reqres_1f2b571c04a24ce5b96c4994f0a235a8'; 

test.describe('Reqres API CRUD Tests', () => {

  let createdUserId: string;

  // ---------------- GET users ----------------
  test('GET users', async ({ request }) => {
    const response = await request.get(
      'https://reqres.in/api/users?page=2',
      { headers: { 'x-api-key': API_KEY } }
    );

    const body = await response.json();

    // Log records
const users: User[] = body.data;

  users.forEach(user => {
    console.log(`${user.id}: ${user.first_name} ${user.last_name} - ${user.email}`);
  });
    // Attach to Allure
    allure.attachment('GET Users Response', JSON.stringify(body.data, null, 2), 'application/json');

    expect(response.status()).toBe(200);
    expect(body.data.length).toBeGreaterThan(0);
  });

  // ---------------- POST create user ----------------
  test('POST create user', async ({ request }) => {
    const response = await request.post(
      'https://reqres.in/api/users',
      {
        headers: { 'x-api-key': API_KEY },
        data: { name: 'Parul Singh', job: 'QA Engineer' }
      }
    );

    const body = await response.json();

    console.log('Created User:', body);
    allure.attachment('POST Create User Response', JSON.stringify(body, null, 2), 'application/json');

    createdUserId = body.id;

    expect(response.status()).toBe(201);
    expect(body).toHaveProperty('id');
  });

  // ---------------- PUT update user ----------------
  test('PUT update user', async ({ request }) => {
    const userId = createdUserId || '2'; // fallback if POST not run
    const response = await request.put(
      `https://reqres.in/api/users/${userId}`,
      {
        headers: { 'x-api-key': API_KEY },
        data: { name: 'Parul Singh', job: 'Senior QA' }
      }
    );

    const body = await response.json();

    console.log('Updated User:', body);
    allure.attachment('PUT Update User Response', JSON.stringify(body, null, 2), 'application/json');

    expect(response.status()).toBe(200);
    expect(body).toHaveProperty('updatedAt');
  });

  // ---------------- DELETE user ----------------
  //test('DELETE user', async ({ request }) => {
   // const userId = createdUserId || '2'; // fallback
    //const response = await request.delete(
     // `https://reqres.in/api/users/${userId}`,
     // { headers: { 'x-api-key': API_KEY } }
    //);

    //console.log('Deleted User Status:', response.status());
    //allure.attachment('DELETE User Response', `Status: ${response.status()}`, 'text/plain');

    //expect(response.status()).toBe(204);
 // });

});