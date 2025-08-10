import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:4001/api';

test.describe('API Integration Tests', () => {
  // --- PRODUCT ROUTES ---
  test('GET /products', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/products`);
    expect(res.status()).toBe(200);
  });

  test('GET /products/all', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/products/all`);
    expect(res.status()).toBe(200);
  });

  test('GET /admin/products (unauthenticated)', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/admin/products`);
    console.log('GET /admin/products (unauthenticated) Status:', res.status());
    // Standard REST: Should be 401/403 for unauthenticated
    expect([401, 403]).toContain(res.status());
  });

  test('POST /admin/product/new (unauthenticated)', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/admin/product/new`, { data: {} });
    expect([401, 403, 404]).toContain(res.status());
  });

  test('PUT /admin/product/:id (unauthenticated)', async ({ request }) => {
    const res = await request.put(`${BASE_URL}/admin/product/fakeid`, { data: {} });
    expect([401, 403, 404]).toContain(res.status());
  });

  test('DELETE /admin/product/:id (unauthenticated)', async ({ request }) => {
    const res = await request.delete(`${BASE_URL}/admin/product/fakeid`);
    expect([401, 403, 404]).toContain(res.status());
  });

  test('GET /product/:id', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/product/fakeid`);
    expect([200, 404]).toContain(res.status());
  });

  test('PUT /review (unauthenticated)', async ({ request }) => {
    const res = await request.put(`${BASE_URL}/review`, { data: {} });
    expect([401, 403, 404]).toContain(res.status());
  });

  test('GET /admin/reviews', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/admin/reviews`);
    expect(res.status()).toBe(200);
  });

  test('DELETE /admin/reviews (unauthenticated)', async ({ request }) => {
    const res = await request.delete(`${BASE_URL}/admin/reviews`, { data: {} });
    expect([401, 403, 404]).toContain(res.status());
  });

  // --- USER ROUTES ---
  test('POST /user/register', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/user/register`, { data: { email: '', password: '' } });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('POST /user/login', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/user/login`, { data: { email: 'fake@example.com', password: 'wrongpass' } });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('GET /user/profile (unauthenticated)', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/user/profile`);
    console.log('GET /user/profile (unauthenticated) Status:', res.status());
    expect([401, 403]).toContain(res.status());
  });

  // --- ORDER ROUTES ---
  test('GET /order (unauthenticated)', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/order`);
    console.log('GET /order (unauthenticated) Status:', res.status());
    expect([401, 403]).toContain(res.status());
  });

  test('POST /order (unauthenticated)', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/order`, { data: { productId: 'fakeid', amount: 10 } });
    expect([401, 403, 404]).toContain(res.status());
  });

  // --- PAYMENT ROUTES ---
  test('POST /payment/process', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/payment/process`, { data: { amount: -100 } });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('POST /callback', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/callback`, { data: {} });
    expect([200, 400, 404, 500]).toContain(res.status());
  });

  test('GET /payment/status/:id (unauthenticated)', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/payment/status/fakeid`);
    console.log('GET /payment/status/:id (unauthenticated) Status:', res.status());
    expect([401, 403]).toContain(res.status());
  });
});