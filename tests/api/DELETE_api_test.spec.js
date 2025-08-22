import { test, expect } from '@playwright/test'

test('DELETE API Test', async ({ request }) => {
  const res = await request.delete(`https://jsonplaceholder.typicode.com/posts/1`);
  expect(res.status()).toBe(200);
  const json = await res.json();
  expect(json).toEqual({});

  console.log(await res.json());
});