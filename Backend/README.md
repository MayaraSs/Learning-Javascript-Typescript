# Back-end com Node.js

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

- [x] Utilizando o Insomnia

  - Ferramenta que será utilizada para testar o retorno das rotas.

- [x] Tipos de Parâmetros

  - Query Params: Filtros e paginação
  - Route Params: Identificar recursos (Atualizar / Deletar)
  - Request Body: COnteúdo na hora de criar ou editar um recurso (JSON).

- [x] Aplicação Funcional

  - Será utilizado os conhcimento até o momento para criar a API que irá conseguir manter projetos (armazenar, deletar, criar e deletar). Crio a variável que será um array que armazenará as informaçõs da aplicação. Adiciono a biblioteca yarn add uuidv4 para gerar o id. E crio cada rota.

- [x] Middlewares

  - É um interceptador de requisições que interrompe totalmente a requisição ou altera os dados da requisição.

  - Ele é uma função que sempre vai receber como parâmetro uma requisição e uma resposta e o next. O middlewares pode pega os mesmos tipos de parâmetros que as rotas utilizam.  

  - Vou utilizar quando querer que algum techo do código seja disparado de forma automática em uma ou mais rotas da aplicação.  Como exemplo foi criado o middleware logRequests que será disparado de forma automática em todas as requisições, pois ele mostrará  no terminal qual a rota que está sendo chamada pelo insomnia. 
