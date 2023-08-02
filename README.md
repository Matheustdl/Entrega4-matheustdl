## Cadastro de Clientes e Contatos - Aplicação Fullstack

O projeto "Cadastro de Clientes e Contatos" é uma aplicação web desenvolvida em TypeScript que possibilita o cadastro de clientes e seus respectivos contatos. A aplicação oferece funcionalidades básicas de um CRUD (Create, Read, Update, Delete) para gerenciar os dados dos clientes e contatos, além de permitir a geração de um relatório em tela, exibindo os detalhes do cliente e seus contatos associados.

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

JavaScript ou TypeScript
Node.js (backend)
React (frontend)
Banco de dados (por exemplo, PostgreSQL)

## Configuração e Execução

Para configurar e executar o projeto, siga as etapas abaixo:

Clone este repositório em seu ambiente utilizando a chave ssh.

Entre no diretório do projeto.

Rodar as Migrations.

Dentro do diretório do backend, execute o seguinte comando para rodar as migrations:

npm typeorm migration:run

Rode as Migrations.

Dentro do diretório do backend, execute o seguinte comando para rodar as migrations:

npm run typeorm migration:run -- -d ./src/data-source


Você precisa criar um arquivo chamado .env na raiz do diretório do backend e preenchê-lo com as informações necessárias. As variáveis a serem definidas podem incluir informações sensíveis como credenciais de banco de dados, chaves de API, entre outras.

Aqui está um exemplo de como o arquivo .env pode ser preenchido:

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

JWT_SECRET=sua_chave_secreta_para_jwt

Instale as dependências do backend executando o comando: npm install ou yarn install.

Dentro da pasta "front", instale as dependências do front com o comando: npm install ou yarn install.

Inicie o servidor backend com o comando: npm run dev ou yarn start.

Em outra janela do terminal, dentro do diretório do projeto, inicie o front com os comandos: cd front e depois npm run dev ou yarn start.

## Funcionalidades das Rotas

A aplicação possui as seguintes rotas e endpoints:

## Rotas de Clientes

/users (POST): Página de cadastro de um novo cliente. Permite cadastrar um novo cliente no sistema.

/users/:id (PATCH): Página de modificação de um cliente existente. Permite atualizar os dados de um cliente específico.

/users/:id (DELETE): Página de deleção de um cliente existente. Permite excluir um cliente específico do sistema.

/users/:id (GET): Página de detalhes de um cliente específico. Mostra os dados do cliente e seus contatos vinculados.

/users (GET): Página de listagem de todos os usuários cadastrados. Mostra todos os clientes cadastrados no sistema.

## Rotas de Contatos

/contacts (POST): Página de cadastro de um novo contato. Permite cadastrar um novo contato vinculado a um cliente.

/contacts/:id (PATCH): Página de atualização de um contato existente. Permite atualizar os dados de um contato específico.

/contacts/:id (DELETE): Página de deleção de um contato existente. Permite excluir um contato específico do sistema.

/contacts (GET): Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.

## Outras Rotas

/users/:id/contacts (GET): Página de listagem de contatos do usuário. Mostra todos os contatos cadastrados vinculados ao usuário.
