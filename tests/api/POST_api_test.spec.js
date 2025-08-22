import { test, expect } from '@playwright/test'

test('POST API Test', async ({ request }) => {
  const payload = { title: 'Playwright', body: 'API test', userId: 99 };

  const res = await request.post(`https://jsonplaceholder.typicode.com/posts`, { data: payload });
  expect(res.status()).toBe(201);
  const json = await res.json();

  expect(json).toMatchObject(payload);
  expect(typeof json.id).toBe('number');

  console.log(await res.json());
});