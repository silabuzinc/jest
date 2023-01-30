import app from "../app";
import request from "supertest";

describe("GET /tasks", () => {
  test("should response with a 200 status code", async () => {
    const response = await request(app).get("/ping").send();
  });
});
