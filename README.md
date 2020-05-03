#Back-end com Node.js

- [x] Criando projeto Node

  - Crie uma pasta chamada Backend e inicie o yarn com o comando: yarn init -y. E abri o arquivo no vc code. Criei a pasta src que fica armazenado os códigos que será mantido pelo desenvolveedor. Criei o arquivo principal chamado de index.js. Para iniciar a aplicação adiciono o express com o comando: yarn add express. O express irá permitir incluir rotas na aplicação, acessar endereços diferentes e irá gerenciar todo esse contexto e o middleware.

    //importo o expresse dentro da variável chamada express
    const express = require('express');
    //crio a minha aplicação
    const app = express( );
    //Para acessar a aplicação pelo navegador é necessário ouvir uma porta
    app.listen(3333);

  Para criar a rota eu chamo a aplicação e dfino o método que quero utilizar e o primeiro parãmetro é o endereço que quero observar, o segundo parãmetro é uma função que recebe dois parâmetros (requisição e resposta). Todo retorno que uma rota ter é preciso chamar o response porque é ele que envia a resposta paa o front-end.

  app.get('/projects', (request, response) => {
  return response.send('Hello World');
  } );

  Para executar a aplicação utilizo o comando: node src/index.js.
