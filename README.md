# Jack Project

## Descrição

O Jack Project é uma aplicação Full Stack desenvolvida como um teste técnico para estagiário Full Stack. Ele consiste em uma aplicação To-Do, com uma API para gerenciar tarefas e um front-end para interação do usuário.

## Estrutura do Projeto

- **Frontend**: React com Material-UI
- **Backend**: NestJS com Prisma e SQLite

## Funcionalidades

### Usuários
- **Registro de Usuários:** Permite a criação de novos usuários com informações básicas.
- **Autenticação:** Utiliza JWT para autenticação de usuários.
- **Gerenciamento de Usuários:** Permite visualizar, criar e remover usuários.

### Tarefas
- **Criação de Tarefas:** Usuários podem criar novas tarefas.
- **Visualização de Tarefas:** Permite visualizar todas as tarefas associadas ao usuário logado.
- **Marcar Tarefas como Concluídas:** Permite marcar tarefas como concluídas ou não concluídas.

## Endpoints da API

### Usuários
- **GET /users** - Obtém todos os usuários.
- **GET /users/:id** - Obtém um usuário pelo ID.
- **POST /users/register** - Cria um novo usuário.
- **DELETE /users/:id** - Remove um usuário pelo ID.

### Tarefas
- **GET /tasks** - Obtém todas as tarefas do usuário logado.
- **POST /tasks** - Cria uma nova tarefa para o usuário logado.
- **PATCH /tasks/:id/complete** - Marca uma tarefa como concluída ou não concluída.

## Tecnologias

### Frontend

- React
- Material-UI
- Styled Components
- TypeScript
- Axios
- React Router

### Backend

- NestJS
- Prisma
- SQLite
- JWT Authentication

## Instalação

### Frontend

1. Navegue até o diretório do frontend:

    ```bash
    cd jack-front
    ```

2. Instale as dependências:

    ```bash
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    yarn start
    ```

   O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

### Backend

1. Navegue até o diretório do backend:

    ```bash
    cd jack-back
    ```

2. Instale as dependências:

    ```bash
    yarn install
    ```

3. Crie o banco de dados e execute as migrações:

    ```bash
    npx prisma migrate dev
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    yarn start:dev
    ```

   O backend estará disponível em [http://localhost:8080](http://localhost:8080).