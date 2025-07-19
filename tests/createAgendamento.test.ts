import { handler } from '../src/functions/createAgendamento';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('createAgendamento handler', () => {
  it('should return 201 when agendamento is created successfully', async () => {
    const mockEvent = {
      body: JSON.stringify({
        paciente: 'João',
        medico: 'Dra. Ana',
        data_horario: '2025-07-20 10:00',
      }),
    } as APIGatewayProxyEvent;

    const response = await handler(mockEvent);

    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.body)).toEqual({
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: {
        paciente: 'João',
        medico: 'Dra. Ana',
        data_horario: '2025-07-20 10:00',
      },
    });
  });

  it('should return 400 for validation errors', async () => {
    const errorEvent = {
      body: JSON.stringify({
        paciente: '',
        medico: '',
        data_horario: '',
      }),
    } as unknown as APIGatewayProxyEvent;

    const response = await handler(errorEvent);

    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);

    expect(body.erros).toEqual(
      expect.arrayContaining([
        { field: 'medico', message: 'O nome do médico é obrigatório.' },
        { field: 'paciente', message: 'O nome do paciente é obrigatório.' },
        {
          field: 'data_horario',
          message: 'O formato da data e horário deve ser no formato YYYY-MM-DD HH:MM.',
        },
      ])
    );
  });
  it('should return 400 when the date is invalid', async () => {
    const event = {
      body: JSON.stringify({
        paciente: 'Maria',
        medico: 'Dra. Ana',
        data_horario: '2020-01-01 10:00',
      }),
    } as APIGatewayProxyEvent;

    const response = await handler(event);
    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);
    expect(body.erros).toEqual(
      expect.arrayContaining([
        {
          field: 'data_horario',
          message: 'A data e/ou horário estão inválidos.',
        },
      ])
    );
  });
  it('should return 500 when the body is invalid JSON', async () => {
    const event = {
      body: {},
    } as APIGatewayProxyEvent;

    const response = await handler(event);
    expect(response.statusCode).toBe(500);
    const body = JSON.parse(response.body);
    expect(body.mensagem).toEqual('Erro interno do servidor');
  });
});
