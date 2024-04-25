import request from "supertest";
import server from "../server"; // Importing the server instance

describe("Test Doc Page root", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(server).get("/api-doc");
    expect(response.status).toBe(200);
  });
});

afterAll((done) => {
  server.close(done);
});
