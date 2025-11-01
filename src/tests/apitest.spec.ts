// import { test, expect } from '@playwright/test';
// import userPayload from '../resources/userPayload.json';
// import jp from 'jsonpath';

// test.describe('Reqres API automation', () => {

//   // 🔹 GET request
// test('GET users', async ({ request }) => {
//   const response = await request.get('https://reqres.in/api/users?page=2', {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     }
//   });

//   console.log('GET Status:', response.status());
//   const body = await response.json();
//   console.log('GET Response:', body);

//   expect(response.ok()).toBeTruthy();
//   expect(body.data.length).toBeGreaterThan(0);
// });

// test('GET user', async ({ request }) => {
//   const response = await request.get('https://reqres.in/api/users', {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     },
//     params: {
//       page: '2'  // ✅ Query param handled automatically
//     }
//   });

//   console.log('GET Status:', response.status());

//   const body = await response.json();
//   console.log('GET Response:', body);

//   expect(response.ok()).toBeTruthy();
//   expect(body.data.length).toBeGreaterThan(0);
// });

// // params: { page: '2', per_page: '5' }

//   // 🔹 POST request
// test('POST create user', async ({ request }) => {
//   const response = await request.post('https://reqres.in/api/users', {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     },
//     data: {
//       name: 'Sidharth',
//       job: 'SDET'
//     }
//   });

//   console.log('POST Status:', response.status());
//   expect(response.status()).toBe(201);

//   const body = await response.json();
//   console.log('POST Response:', body);
//   expect(body.name).toBe('Sidharth');
// });


//   // 🔹 PUT request
// test('PUT update user', async ({ request }) => {
//   const response = await request.put('https://reqres.in/api/users/2', {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     },
//     data: {
//       name: 'UpdatedName',
//       job: 'QA Lead'
//     }
//   });

//   console.log('PUT Status:', response.status());
//   expect(response.ok()).toBeTruthy();

//   const body = await response.json();
//   console.log('PUT Response:', body);
//   expect(body.name).toBe('UpdatedName');
// });

//   // 🔹 PATCH request
// test('PATCH update user', async ({ request }) => {
//   const response = await request.patch('https://reqres.in/api/users/2', {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     },
//     data: {
//       job: 'Sr. QA Engineer'
//     }
//   });

//   console.log('PATCH Status:', response.status());
//   expect(response.ok()).toBeTruthy();

//   const body = await response.json();
//   console.log('PATCH Response:', body);
//   expect(body.job).toBe('Sr. QA Engineer');
// });


//   // 🔹 DELETE request
//   test('DELETE user', async ({ request }) => {
//     const response = await request.delete('https://reqres.in/api/users/2', {
//       headers: {
//         'x-api-key': 'reqres-free-v1',
//         'Content-Type': 'application/json'
//       }
//     });

//     expect(response.status()).toBe(204); // No Content
//     console.log('DELETE successful with status:', response.status());
//   });

// }); // <-- ✅ closes test.describe



// const userId1 = 2;

// test('GET user by ID', async ({ request }) => {
//   const response = await request.get(`https://reqres.in/api/users/${userId1}`, {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     }
//   });

//   console.log('GET Status:', response.status());
//   const body = await response.json();
//   console.log('GET Response:', body);

//   expect(response.ok()).toBeTruthy();
//   expect(body.data.id).toBe(userId);
// });


// const userId = 2;
// const postId = 5;

// test('GET user post by userId and postId', async ({ request }) => {
//   const response = await request.get(`https://reqres.in/api/users/${userId}/posts/${postId}`, {
//     headers: {
//       'x-api-key': 'reqres-free-v1',
//       'Content-Type': 'application/json'
//     }
//   });

//   console.log('GET Status:', response.status());
//   const body = await response.json();
//   console.log('GET Response:', body);

//   expect(response.ok()).toBeTruthy();
//   expect(body.data.userId).toBe(userId);
//   expect(body.data.id).toBe(postId);
// });


//  // adjust path as needed

// test('POST create user with external JSON and API key', async ({ request }) => {
//   const response = await request.post('https://reqres.in/api/users', {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-api-key': 'reqres-free-v1', // ✅ adding API key
//     },
//     data: userPayload, // ✅ using external JSON
//   });

//   console.log('POST Status:', response.status());
//   expect(response.status()).toBe(201);

//   const body = await response.json();
//   console.log('POST Response:', body);
//   expect(body.name).toBe(userPayload.name);
// });



// test('Validate data from GET /users response using JSONPath', async ({ request }) => {
//   const response = await request.get('https://reqres.in/api/users', {
//     params: { page: '2' },
//     headers: {
//       'Content-Type': 'application/json',
//       'x-api-key': 'reqres-free-v1',
//     }
//   });

//   expect(response.status()).toBe(200);

//   const body = await response.json();
//   console.log('Full Response:', body);

//   // ✅ Example: get all IDs using JSONPath
//   const ids = jp.query(body, '$.data[*].id');
//   console.log('All user IDs:', ids);

//   // ✅ Validate that a specific ID exists
//   expect(ids).toContain(7);

//   // ✅ Get first user’s email
//   const firstEmail = jp.query(body, '$.data[0].email')[0];
//   console.log('First user email:', firstEmail);

//   // ✅ Assert a specific email
//   expect(firstEmail).toBe('michael.lawson@reqres.in');
// });

