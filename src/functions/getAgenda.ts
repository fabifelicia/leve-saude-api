import { medicos } from '../utils/mockAgenda';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        medicos,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Erro ao listar médicos',
        error: error,
      }),
    };
  }
};
