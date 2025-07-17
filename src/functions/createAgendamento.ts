import { APIGatewayProxyHandler } from 'aws-lambda';
import { agendamentoController } from '../controllers/agendamentoController';

export const createAgendamentoHandler: APIGatewayProxyHandler = async (event) => {

    return await agendamentoController.create(event)
    
};