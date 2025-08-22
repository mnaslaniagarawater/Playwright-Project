import { test, expect } from '@playwright/test'

test('GET API Test', async ({ request }) => {
  const res = await request.get(`https://jsonplaceholder.typicode.com/posts/1`);
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('application/json');
  const body = await res.json();

  expect(body).toMatchObject({
    id: 1,
    userId: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  });

  console.log(await res.json());
});