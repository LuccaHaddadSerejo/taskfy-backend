# Projeto Full Stack Taskfy

Uma aplicação para administrar tarefas.

## Índice

- <a href="#-instalar">Instalando e rodando o projeto</a>
- <a href="#-funcionalidades">Funcionalidades</a>
- <a href="#-bibliotecas">Bibliotecas utilizadas</a>
- <a href="#-ferramentas">Ferramentas utilizadas</a>
- <a href="#-endpoints">Endpoints do serviço</a>
- <a href="#-requisitos">Requisitos do serviço</a>
- <a href="#-exemplos">Exemplos de requisição</a>

## <h2 id=#-instalar>Instalando e rodando o projeto<h2>

```bash
# Instale as dependências:
$ npm install

# Crie o DB local.
$ Crie um banco de dados PostgreSQL na sua máquina

# Crie e configure o .env
$ Crie um arquivo .env na raiz do projeto e configure com base no arquivo .env.example, lembre-se de usar um banco de dados existente.

# Execute a aplicação:
$ npm run start:dev

# Acesse pelo seu software de preferência (Postman, Insomnia):
$ http://localhost:3000
```

## <h2 id="-funcionalidades">Funcionalidades</h2>

### Gerais

- Leitura de tarefas;
- Cadastro de novas tarefas;
- Atualização de tarefas;
- Deleção de tarefas;
- Leitura de subtarefas;
- Cadastro de subtarefas;
- Atualização de subtarefas;
- Deleção de subtarefas;
- Filtro por estado da tarefa - pendente ou concluída.

## <h2 id="-bibliotecas">Bibliotecas utilizadas</h2>

- [x] Nest
- [x] Prisma
- [x] dotenv
- [x] cors

## <h2 id="-ferramentas">Ferramentas utilizadas</h2>

- [x] TypeScript
- [x] VS CODE
- [x] GitHub
- [x] GIT

## <h2 id="-endpoints">Endpoints do serviço</h2>

| Método | Endpoint          | Responsabilidade                                 |
| ------ | ----------------- | ------------------------------------------------ |
| POST   | /tasks            | Cria uma novo tarefa                             |
| GET    | /tasks            | Lista todas as tarefas                           |
| GET    | /tasks/:id        | Lista uma tarefa pelo id                         |
| PATCH  | /tasks/:id        | Atualiza os dados de uma tarefa                  |
| DELETE | /tasks/:id        | Deleta uma tarefa e suas subtarefas              |
| POST   | /subtasks/:taskId | Cria uma nova subtarefa com base no id da tarefa |
| GET    | /subtasks         | Lista todas as subtarefas                        |
| GET    | /subtasks/:id     | Lista uma subtarefa por id                       |
| PATCH  | /subtasks/:id     | Atualiza os dados de uma subtarefa               |
| DELETE | /subtasks/:id     | Deleta uma subtarefa                             |

## <h2 id="-requisitos">Requisitos do serviço</h2>

Esse serviço possui uma API REST para que os demais serviços consigam criar, listar, atualizar e deletar os dados do banco de dados.

- O banco de dados utilizado foi **PostgreSQL**.

## <h2 id="-exemplos">Exemplos de requisição</h2>

### **GET: /tasks**

- É possível listar todas as tarefas armazenadas no banco de dados.

**Exemplo de retorno**:

```json
[
  {
    "id": 1,
    "title": "Titulo Exemplo 1",
    "done": true,
    "createdAt": "2023-07-12T02:11:13.829Z",
    "updatedAt": "2023-07-12T02:11:13.829Z",
    "subtasks": []
  },
  {
    "id": 2,
    "title": "Titulo Exemplo 2",
    "done": false,
    "createdAt": "2023-07-12T02:11:13.829Z",
    "updatedAt": "2023-07-12T02:11:13.829Z",
    "subtasks": []
  },
  {
    "id": 3,
    "title": "Titulo Exemplo 3",
    "done": true,
    "subtasks": []
  }
]
```

### **GET: /tasks/:id**

- É possível listar uma tarefa com base no id passado por parâmetro

**Exemplo de retorno**:

```json
{
  "id": 1,
  "title": "Titulo Exemplo 1",
  "done": true,
  "createdAt": "2023-07-12T02:11:13.829Z",
  "updatedAt": "2023-07-12T02:11:13.829Z",
  "subtasks": []
}
```

- Caso seja passado um id que não existe no banco de dados, a API retornará um erro

**Exemplo de retorno**:

```json
{
  "message": "Task not found",
  "error": "Not Found",
  "statusCode": 404
}
```

### **POST: /tasks**

- É possível criar uma tarefa contendo os seguintes dados:
  - **title**: string, chave obrigatória
  - **done**: boolean, chave opcional
- Dados extras inseridos serão ignorados pela API

**Exemplo de envio**:

```json
{
  "title": "Título",
  "chaveExtra": "Extra"
}
```

**Retorno**:

```json
{
  "id": 1,
  "title": "Título",
  "done": false,
  "createdAt": "2023-07-12T02:11:13.829Z",
  "updatedAt": "2023-07-12T02:11:13.829Z",
  "subtasks": []
}
```

- Dados esperados pela API enviados com o tipo errado irão gerar um erro

**Exemplo de envio**:

```json
{
  "title": 1
}
```

**Retorno**:

```json
{
  "message": ["title must be a string"],
  "error": "Bad Request",
  "statusCode": 400
}
```

### **PATCH: /tasks/:id**

- É possível atualizar uma tarefa com base no id passado por parâmetro, contendo os seguintes dados:
  - **title**: string, chave opcional
  - **done**: boolean, chave opcional
- Dados extras inseridos serão ignorados pela API

**Exemplo de envio**:

```json
{
  "title": "Título editado",
  "done": true,
  "chaveExtra": "Extra"
}
```

**Retorno**:

```json
{
  "id": 2,
  "title": "Título editado",
  "done": true,
  "createdAt": "2023-07-02",
  "updatedAt": "2023-07-02",
  "subtasks": []
}
```

- Dados esperados pela API enviados com o tipo errado irão gerar um erro

**Exemplo de envio**:

```json
{
  "title": 1
}
```

**Retorno**:

```json
{
  "message": ["title must be a string"],
  "error": "Bad Request",
  "statusCode": 400
}
```

- Caso seja passado um id que não existe no banco de dados, a API retornará um erro

**Exemplo de retorno**:

```json
{
  "message": "Task not found",
  "error": "Not Found",
  "statusCode": 404
}
```

### **DELETE: /tasks/:id**

- É possível deletar uma task pelo id recebido por parâmetro.
- As subtasks associadas com a task também serão deletadas.

- Caso de sucesso:
  - **Envio**: Sem envio.
  - **Retorno**: Sem retorno.
  - **Status**: 204 NO CONTENT.

**Exemplos de retorno**:

```json
{
  "message": "Subtask not found",
  "error": "Not Found",
  "statusCode": 404
}
```

### **GET: /subtasks**

- É possível listar todas as subtarefas armazenadas no banco de dados.

**Exemplo de retorno**:

```json
[
  {
    "id": 1,
    "createdAt": "2023-07-12T04:20:25.402Z",
    "updatedAt": "2023-07-12T04:20:49.016Z",
    "title": "Subtítulo Exemplo 1",
    "done": false,
    "taskId": 150,
    "task": {
      "id": 1,
      "createdAt": "2023-07-12T02:11:13.829Z",
      "updatedAt": "2023-07-12T04:09:59.798Z",
      "title": "Título Exemplo 1",
      "done": false
    }
  },
  {
    "id": 2,
    "createdAt": "2023-07-12T04:20:25.402Z",
    "updatedAt": "2023-07-12T04:20:49.016Z",
    "title": "Subtítulo Exemplo 2",
    "done": true,
    "taskId": 2,
    "task": {
      "id": 3,
      "createdAt": "2023-07-12T02:11:13.829Z",
      "updatedAt": "2023-07-12T04:09:59.798Z",
      "title": "Título Exemplo 2",
      "done": true
    }
  },
  {
    "id": 3,
    "createdAt": "2023-07-12T04:20:25.402Z",
    "updatedAt": "2023-07-12T04:20:49.016Z",
    "title": "Subtítulo Exemplo 3",
    "done": true,
    "taskId": 3,
    "task": {
      "id": 3,
      "createdAt": "2023-07-12T02:11:13.829Z",
      "updatedAt": "2023-07-12T04:09:59.798Z",
      "title": "Título Exemplo 3",
      "done": true
    }
  }
]
```

### **GET: /subtasks/:id**

- É possível listar uma subtarefa com base no id passado por parâmetro

**Exemplo de retorno**:

```json
{
  "id": 3,
  "createdAt": "2023-07-12T04:20:25.402Z",
  "updatedAt": "2023-07-12T04:20:49.016Z",
  "title": "Subtítulo Exemplo 3",
  "done": true,
  "taskId": 3,
  "task": {
    "id": 3,
    "createdAt": "2023-07-12T02:11:13.829Z",
    "updatedAt": "2023-07-12T04:09:59.798Z",
    "title": "Título Exemplo 3",
    "done": true
  }
}
```

- Caso seja passado um id que não existe no banco de dados, a API retornará um erro

**Exemplo de retorno**:

```json
{
  "message": "Task not found",
  "error": "Not Found",
  "statusCode": 404
}
```

### **POST: /subtasks/:taskId**

- É possível criar uma subtarefa contendo os seguintes dados:
  - **title**: string, chave obrigatória
  - **done**: boolean, chave opcional
- Dados extras inseridos serão ignorados pela API

**Exemplo de envio**:

```json
{
  "title": "Título da subtarefa",
  "chaveExtra": "Extra"
}
```

**Retorno**:

```json
{
  "id": 1,
  "title": "Título da subtarefa",
  "done": false,
  "createdAt": "2023-07-02",
  "updatedAt": "2023-07-02",
  "taskId": 1
}
```

- Dados esperados pela API enviados com o tipo errado irão gerar um erro

**Exemplo de envio**:

```json
{
  "done": "tipo errado"
}
```

**Retorno**:

```json
{
  "message": ["done must be a boolean value"],
  "error": "Bad Request",
  "statusCode": 400
}
```

### **PATCH: /subtasks/:id**

- É possível atualizar uma subtarefa com base no id passado por parâmetro, contendo os seguintes dados:
  - **title**: string, chave opcional
  - **done**: boolean, chave opcional
- Dados extras inseridos serão ignorados pela API

**Exemplo de envio**:

```json
{
  "done": true,
  "chaveExtra": "Extra"
}
```

**Retorno**:

```json
{
  "id": 1,
  "title": "Título da subtarefa",
  "done": true,
  "createdAt": "2023-07-02",
  "updatedAt": "2023-07-02",
  "taskId": 1,
  "task": {
    "id": 1,
    "createdAt": "2023-07-12T02:11:13.829Z",
    "updatedAt": "2023-07-12T04:09:59.798Z",
    "title": "Título",
    "done": false
  }
}
```

- Dados esperados pela API enviados com o tipo errado irão gerar um erro

**Exemplo de envio**:

```json
{
  "done": "tipo errado"
}
```

**Retorno**:

```json
{
  "message": ["done must be a boolean value"],
  "error": "Bad Request",
  "statusCode": 400
}
```

- Caso seja passado um id que não existe no banco de dados, a API retornará um erro

**Exemplo de retorno**:

```json
{
  "message": "Subtask not found",
  "error": "Not Found",
  "statusCode": 404
}
```

### **DELETE: /subtasks/:id**

- É possível deletar uma subtask pelo id recebido por parâmetro.

- Caso de sucesso:
  - **Envio**: Sem envio.
  - **Retorno**: Sem retorno.
  - **Status**: 204 NO CONTENT.

**Exemplos de retorno**:

```json
{
  "message": "Subtask not found",
  "error": "Not Found",
  "statusCode": 404
}
```
