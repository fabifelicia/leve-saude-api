import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { validarAgendamento } from "../validators/agendamentoValidator";

export const agendamentoController = {
  async create(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const body = JSON.parse(event.body || "{}");

      const err = validarAgendamento(body);

      if (err && err.length > 0) {
        return {
          statusCode: 400,
          body: JSON.stringify({ erros: err })
        };
      }
      
      return {
        statusCode: 201,
        body: JSON.stringify({
          mensagem: "Agendamento realizado com sucesso",
          agendamento: body,
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          mensagem: "Erro interno do servidor",
          error: (error as Error).message,
        }),
      };
    }
  },
};
