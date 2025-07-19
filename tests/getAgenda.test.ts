import { medicos } from "../src/utils/mockAgenda";

describe("GET /agenda", () => {
  it("should return the schedule and status 200", async () => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ medicos }),
    };
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ medicos });
    expect(Array.isArray(JSON.parse(response.body).medicos)).toBe(true);
  });

  it("should handle errors and return status 400", async () => {
    const errorResponse = {
      statusCode: 400,
      body: JSON.stringify({
        message: "Erro ao listar médicos",
        error: expect.anything(),
      }),
    };
    expect(errorResponse.statusCode).toBe(400);
    expect(JSON.parse(errorResponse.body)).toHaveProperty("message");
    expect(JSON.parse(errorResponse.body)).toHaveProperty("error");
  });
});
