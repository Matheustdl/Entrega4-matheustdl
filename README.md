## Cadastro de Clientes e Contatos - Aplicação Fullstack
O projeto "Cadastro de Clientes e Contatos" é uma aplicação web desenvolvida em TypeScript que possibilita o cadastro de clientes e seus respectivos contatos. A aplicação oferece funcionalidades básicas de um CRUD (Create, Read, Update, Delete) para gerenciar os dados dos clientes e contatos, além de permitir a geração de um relatório em tela, exibindo os detalhes do cliente e seus contatos associados.

Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias:

JavaScript ou TypeScript
Node.js (backend)
React (frontend)
Banco de dados (por exemplo, PostgreSQL)
Configuração e Execução
Para configurar e executar o projeto, siga as etapas abaixo:

Clone este repositório em seu ambiente utilizando a chave ssh.

Entre no diretório do projeto.

Instale as dependências do backend executando o comando:

bash
Copy code
npm install
# ou
yarn install
Dentro da pasta "front", instale as dependências do front com o comando:
bash
Copy code
cd front
npm install
# ou
yarn install
Inicie o servidor backend com o comando:
bash
Copy code
npm run dev
# ou
yarn start
Em outra janela do terminal, dentro do diretório do projeto, inicie o front com os comandos:
bash
Copy code
cd front
npm run dev
# ou
yarn start
Rodando as Migrations
As migrations são utilizadas para criar as tabelas no banco de dados. Para rodar as migrations, você precisará utilizar o comando do ORM (Object-Relational Mapping) que está sendo utilizado no projeto. Vamos assumir que o projeto esteja utilizando o TypeORM, que é uma opção comum para projetos em TypeScript e Node.js.

Para rodar as migrations, execute o seguinte comando:

bash
Copy code
npx typeorm migration:run
Isso irá criar as tabelas necessárias no banco de dados de acordo com as definições de entidades do projeto.

Preenchendo o arquivo .env no backend
O arquivo .env é utilizado para armazenar variáveis de ambiente que o projeto precisa para funcionar corretamente. Você precisa criar um arquivo chamado .env na raiz do diretório do backend e preenchê-lo com as informações necessárias. As variáveis a serem definidas podem incluir informações sensíveis como credenciais de banco de dados, chaves de API, entre outras.

Aqui está um exemplo de como o arquivo .env pode ser preenchido:

plaintext
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

JWT_SECRET=sua_chave_secreta_para_jwt
Lembre-se de substituir os valores "seu_usuario", "sua_senha", "nome_do_banco" e "sua_chave_secreta_para_jwt" pelos valores corretos para o seu ambiente.

Com essas etapas concluídas, você deverá estar pronto para executar a aplicação e testar as funcionalidades de cadastro de clientes e contatos. Lembre-se de que é importante ter o banco de dados PostgreSQL instalado e configurado corretamente com as informações fornecidas no arquivo .env para que a aplicação possa se conectar ao banco e funcionar adequadamente.

