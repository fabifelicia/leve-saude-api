# Leve Saúde API

API RESTful de agendamento médico, desenvolvida com **Node.js**, **TypeScript**, **AWS Lambda** e o **Serverless Framework**, conforme desafio técnico proposto pela [Leve Saúde](https://levesaude.com.br) e descrito [aqui](https://succinct-tadpole-fde.notion.site/Teste-T-cnico-13ee9214de4e479b8f6e87752a358078)

---

## 📋 Descrição

Este projeto implementa dois endpoints principais:

- `GET /agendas` – Lista agendas médicas disponíveis.
- `POST /agendamento` – Realiza o agendamento de uma consulta.

---

## 🚀 Tecnologias Utilizadas

- Node.js 18.x
- TypeScript
- AWS Lambda
- Serverless Framework v4
- Jest (testes)
- Serverless Offline (desenvolvimento local)

---

## 📦 Instalação e Execução Local

### 1. Clone o repositório

```bash
git clone https://github.com/fabifelicia/leve-saude-api.git
cd leve-saude-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto localmente

```bash
npm run dev
```

### 4. Acesse a API

O Serverless Offline será iniciado em http://localhost:3000.

### 5. Teste os endpoints

✅ GET /agendas

Lista as agendas médicas disponíveis.

Requisição:

```
GET /agendas HTTP/1.1
Host: localhost:3000
```

Resposta:

```
HTTP/1.1 200 OK
Content-Type: application/json
[
  {
    id: 1,
    nome: "Dr. House",
    especialidade: "Cardiologist",
    horarios_disponiveis: ["2024-11-01 09:00", "2024-11-01 10:00", "2024-11-01 11:00"],
  },
  {
    id: 2,
    nome: "Dr. Strange",
    especialidade: "Neurologist",
    horarios_disponiveis: ["2024-11-04 14:00", "2024-11-04 15:00"],
  },
  {
    id: 3,
    nome: "Dr. Who",
    especialidade: "Pediatrician",
    horarios_disponiveis: ["2024-11-05 09:00", "2024-11-05 10:00", "2024-11-05 11:00"],
  },
];
```

📤 POST /agendamento

Cria um novo agendamento de consulta.

Requisição:

```
POST /agendamento HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "paciente": "Fulano de Tal",
  "medico": "Dr. Sicrano",
  "data_horario": "2025-08-01 09:00"
}
```

Resposta:

```
HTTP/1.1 201 Created
Content-Type: application/json
{
  "mensagem": "Agendamento realizado com sucesso",
  "agendamento": {
    "paciente": "Fulano de Tal",
    "medico": "Dr. Sicrano",
    "data_horario": "2025-08-01 09:00"
  }
}
```

### 6. Executando os testes

```bash
npm test
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
