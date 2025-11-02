
import { test, expect } from '@playwright/test';

test('GET users', async ({ request }) => {

 const response = await request.get('https://reqres.in/api/users?page=2', {
   headers: {
      'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   }
 });

 console.log('GET Status:', response.status());
 expect(response.status()).toBe(200);
 const body = await response.json();
 console.log('GET Response:', body);
 expect(response.ok()).toBeTruthy();// response.ok() returns true if the HTTP status code is in the 200–299 range.
 expect(body.data.length).toEqual(6);
});


 test('DELETE user', async ({ request }) => {
   const response = await request.delete('https://reqres.in/api/users/2', {
     headers: {
       'x-api-key': 'reqres-free-v1',
       'Content-Type': 'application/json'
     }
   });

   expect(response.status()).toBe(200); // No Content
   console.log('DELETE successful with status:', response.status());
 });


 test('POST create user', async ({ request }) => {
    const fullName = "SIDHARTH MISHRA";
 const response = await request.post('https://reqres.in/api/users', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     name: fullName,
     job: 'SDET'
   }
 });

 console.log('POST Status:', response.status());
 expect(response.status()).toBe(201);

 const body = await response.json();
 console.log('POST Response:', body);
 expect(body.name).toBe(fullName);
});

test('PUT update user', async ({ request }) => {
 const response = await request.put('https://reqres.in/api/users/2', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     name: 'test',
     job: 'QA Lead'
   }
 });


 console.log('PUT Status:', response.status());
 expect(response.status()).toBe(200);

 const body = await response.json();
 console.log('PUT Response:', body);
 expect(body.name).toBe('test');
});

test('PATCH update user', async ({ request }) => {
 const response = await request.patch('https://reqres.in/api/users/2', {
   headers: {
     'x-api-key': 'reqres-free-v1',
     'Content-Type': 'application/json'
   },
   data: {
     name: 'test'
   }
 });

 console.log('PATCH Status:', response.status());
 expect(response.ok()).toBeTruthy();

 const body = await response.json();
 console.log('PATCH Response:', body);
 expect(body.name).toBe('test');
});
