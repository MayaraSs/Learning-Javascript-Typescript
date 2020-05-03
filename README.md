#Back-end com Node.js

- [x] Criando projeto Node

  - Foi criada uma pasta chamada Backend e iniciado o yarn com o comando: yarn init -y. E aberto o arquivo no vc code. Foi Criada a pasta src que fica armazenado os códigos que será mantido pelo desenvolvedor. Foi criado o arquivo principal chamado de index.js. Para iniciar a aplicação foi adicionado o express com o comando: yarn add express. O express irá permitir incluir rotas na aplicação, acessar endereços diferentes e irá gerenciar todo esse contexto e o middleware. importo o express dentro da variável chamada express, crio a minha aplicação e para acessar a aplicação pelo navegador é necessário ouvir uma porta que foi deifnida a 3333.

  - Para criar a rota eu chamo a aplicação e defino o método que quero utilizar e o primeiro parâmetro é o endereço que quero observar, o segundo parâmetro é uma função que recebe dois parâmetros (requisição e resposta). Todo retorno que uma rota ter, é preciso chamar o response porque é ele que envia a resposta para o front-end.

- [x] Configurando o Nodemon

      Para executar a aplicação utilizo o comando: node src/index.js. Para fazer a atualização automática sem tem que ficar parando o servidor, foi instalado o Nodemon. Comando: yarn add nodemon -D. Acessei o package.json em baixo de license adicionei o campo scripts para adicionar o atalho "dev" para executar o servidor.

- [x] Métodos HTTP

  - GET: Busca informações do back-end, ou seja, toda vez que estiver criando uma rota e ela tem como objetivo retornar algumas informações para o usuário é utilizado o método GET.
  - POST: Cria uma informação no back-end.
  - PUT: Altera uma informação no back-end.
  - DELTE: Deleta uma informação no back-end.
