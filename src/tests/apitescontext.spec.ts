import { test, request, APIRequestContext, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { UserPayload, Address } from '../dataModels/userPayload';


// let apiContext: APIRequestContext;

// test.beforeAll(async () => {
//   apiContext = await request.newContext({
//     baseURL: 'https://reqres.in/api',
//     extraHTTPHeaders: {
//       'Content-Type': 'application/json'
//     },
//   });
// });

// test.afterAll(async () => {
//   await apiContext.dispose();
// });

// test('GET users endpoint returns 200', async () => {
//   if (!apiContext) throw new Error('API context not initialized');

//   const response = await apiContext.get('/users', {
//     params: { page: '2' }
//   });

//   console.log('GET Status:', response.status());
//   expect(response.status()).toBe(200);

//   const body = await response.json();
//   console.log('GET Response:', body);
// });



// interface User {
//   name: string;
//   job: string;
// }

// // Shared request context
// let apiContext: APIRequestContext;

// test.beforeAll(async ({ playwright }) => {
//   apiContext = await playwright.request.newContext({
//     baseURL: 'https://reqres.in',
//     extraHTTPHeaders: {
//       'Content-Type': 'application/json',
//       'x-api-key': 'reqres-free-v1', // API key per request
//     },
//   });
// });

// test.afterAll(async () => {
//   await apiContext.dispose();
// });

// test('Create user and validate response', async ({ page }) => {
//   const user: User = { name: 'Neo', job: 'The One' };

//   // 1️⃣ Create a new user (POST)
//   const postResponse = await apiContext.post('/api/users', {
//     data: user,
//   });

//   expect(postResponse.status()).toBe(201);
//   const createdUser = await postResponse.json();
//   console.log('POST Response:', createdUser);
// });



test('POST user with external JSON input', async ({ request }) => {
 // Resolve path relative to this test file
 const filePath = path.resolve(__dirname, '../resources/userRequestPayload.json');
 const userData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

 // Send POST request with API key
 const response = await request.post('https://reqres.in/api/users', {
   headers: {
     'Content-Type': 'application/json',
     'x-api-key': 'reqres-free-v1'
   },
   data: userData
 });

 // Validate response
 console.log('Response Status Code:', response.status());
 expect(response.status()).toBe(201);
 const responseBody = await response.json();
 console.log('Response Body:', responseBody);

 expect(responseBody.name).toBe(userData.name);
 expect(responseBody.job).toBe(userData.job);
});

test('POST request with POJO-like structure', async ({ request }) => {
  // Create an object structure
  const user: UserPayload = {
    name: 'sid',
    job: 'sdet',
    skills: ['Java','Selenium'],
    address: {
    "street":"123 lynnwodd",
    "city":"seattle"
    }
  };

  // Send POST request
  const response = await request.post('https://reqres.in/api/users', {
    data: user,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1' // your API key
    }
  });

  // Assertions
  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log(responseBody);

  // Validate response data
  console.log(responseBody.skills);
  console.log(responseBody.address);
  expect(responseBody.name).toBe(user.name);
  expect(responseBody.name).toBe(user.name);
  expect(responseBody.job).toBe(user.job);
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('createdAt');
});

test('API Chaining with ReqRes', async ({ request }) => {
  // 1. Create a new user (POST)
  const createResponse = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'sid',
      job: 'the one'
    },
      headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1' // your API key
    }
  });

  expect(createResponse.status()).toBe(201);
  const createBody = await createResponse.json();
  console.log('Created User:', createBody);

  const userId = createBody.id;
  console.log(userId);

  // // 2. Get the created user (GET) using id
   const getResponse = await request.get('https://reqres.in/api/users/${userId}', {headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1' // your API key
}});
   console.log('Fetched User:', await getResponse.json());

     // 4. Delete the user (DELETE)
  const deleteResponse = await request.delete('https://reqres.in/api/users/${userId}', {headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'reqres-free-v1' // your API key
}});
  expect(deleteResponse.status()).toBe(204);
  console.log('User deleted');

});

