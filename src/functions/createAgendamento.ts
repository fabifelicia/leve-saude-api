import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { agendamentoController } from '../controllers/agendamentoController';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  return await agendamentoController.create(event);
};
