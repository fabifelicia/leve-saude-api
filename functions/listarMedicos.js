import schedule from '../utils/schedule.json' assert {type: 'json'};

export const handler = async (event) => {

    try {
        const result = schedule.data;

        return {
            statusCode: 200,
            body: JSON.stringify({
                agenda : result
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