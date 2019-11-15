const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes endpoint", () => {
    test("Should return 400 when no token provided", async () => {
      const response = await request(server).get("/api/jokes");
      expect(response.status).toBe(400);
    });

    test("with supertest syntax", () => {
      return request(server)
        .get("/api/jokes")
        .expect("Content-Type", /json/);
    });
  });