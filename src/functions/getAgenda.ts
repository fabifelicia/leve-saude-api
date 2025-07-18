import { schedule } from '../utils/schedule' ;
import { APIGatewayProxyHandler } from 'aws-lambda';


export const handler: APIGatewayProxyHandler = async () => {

    try {
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                schedule
            })
        }
        
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Erro ao listar médicos',
                error: error
            })
        }
        
    }
    
    
};