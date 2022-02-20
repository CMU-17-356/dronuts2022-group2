const request = require('supertest');
const helloApp = require('./hello');

describe('Testing hello world works', () => {
  test('hello world gives status 200', async () => {
    await request(helloApp).get('/').expect(200);
  });
});

export { };
