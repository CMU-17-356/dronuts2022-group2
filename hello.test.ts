const request = require("supertest");
const app = require('./hello');

describe("Testing hello world works", () => {
    test("hello world gives status 200", async () => {
      await request(app).get("/").expect(200);
    })
})
