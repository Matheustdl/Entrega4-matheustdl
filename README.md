## Cadastro de Clientes e Contatos - Aplicação Fullstack

O projeto "Cadastro de Clientes e Contatos" é uma aplicação web desenvolvida em TypeScript que possibilita o cadastro de clientes e seus respectivos contatos. A aplicação oferece funcionalidades básicas de um CRUD (Create, Read, Update, Delete) para gerenciar os dados dos clientes e contatos, além de permitir a geração de um relatório em tela, exibindo os detalhes do cliente e seus contatos associados.

## Tecnologias Utilizadas

## O projeto utiliza as seguintes tecnologias:

JavaScript ou TypeScript
Node.js (backend)
React (frontend)
Banco de dados (por exemplo, PostgreSQL)

## Configuração e Execução

## Para configurar e executar o projeto, siga as etapas abaixo:

Verifique se o Node.js está instalado em sua máquina.

Clone este repositório em seu ambiente Unix (Linux ou Mac OS X).

Navegue até o diretório do projeto usando o terminal.

Instale as dependências do backend executando o comando: npm install ou yarn install.

Dentro da pasta "frontend", instale as dependências do frontend com o comando: npm install ou yarn install.

Inicie o servidor backend com o comando: npm start ou yarn start.

Em outra janela do terminal, dentro do diretório do projeto, inicie o frontend com os comandos: cd frontend e depois npm start ou yarn start.

Acesse a aplicação em seu navegador através do endereço: http://localhost:3000.

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
