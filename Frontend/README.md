# Front-end com ReactJs

- [x] Conceitos ReactJs

  - React é uma biblioteca para construção de interface.

  - Utilizado para construção de Single-Pape-Applications. É uma forma de construir a aplicação no front-end, onde o back-end só retorna json e o front-end é quem controla as rotas e a parte de cosumir os dados e mostrar para os usuários. O roteamente irá ficar todo no front-end. A SPA fica tudo em uma única página, ela nunca recarrega. Assim, existe algumas formas de roteamento para navegar nas páginas sem recarregar todo o browser.

  - Tudo fica dentro do Javascript (css, html, imagens).

  - Diferenças entre React, ReactJS, React Native

        - React = a biblioteca de construção de interfaces e compenentização.
        - ReactJS = ao comportamento do react diretamente no browser.
        - React Native = é a soma do React e uma outra biblioteca que lida com componentes nativos.

  - Vantagens: - Organização do código - Componentização: dividr partes do nosso código que tem funcionalidades específicas que não interfere no restante do código.

            - Divisão de responsabilidades:
                    -Back-end : Regra de negócio
                    - Front-end: Interface

            - Apenas uma API e múltiplos clientes (mobile, web)

            - Programação declarativa: qual o resultado que espera.

    - JSX = pode escrever html dentro do Javascript. Com React podemos criar nossos próprios elementos.

    - Babel / Webpack: Como o browser nao entende todo esse código, o babel converte o código em JS . O Webpack faz a criação do bundle, arquivo com todo o códgio da aplicação, ensina o JS como importar os arquivos CSS, imagem e etc, Live reload.

- [x] Configurando o projeto

        - Configurando o Babel

                - Inicializei o yarn init -y. Crio a pasta src e public. Adiciono o yarn add react react-dom.

                - Loaders: babel-loader (vai converter o JS para algo que o browse entenda), css-loader....

                - Adicionei yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

                - Criei um arquivo chamado babel.config.js, ficará as configurações relacionadas ao babel

                - Adicionei o yarn add @babel/cli que é uma interface por linha e comando, assim posso simplificar o uso do babel no terminal.

        - Configurando Webpack

                - Criei uma pasta chamada webpack.config.js

                - Adiciono o yarn add babel-loader

                - Adicionei o yarn webpack --node development

                - Adicionei o yarn add webpack-dev-server -D é o servidor de desenvolvimento do Webpack.

- [x] Componentização

        -  É basicamente dividir pedaços da nossa aplicação em componentes.  Se for utilizar algum componentes em vários lugares é criado um componente um conjunto de código isolado que pode ser utilizado N vezes na aplicação.

        - Dentro da div do index.html que vai todos os componentes criados pelo React.

        - Quando criar um componente no React sempre vai usar letra maiúscula no arquivo.

        - O componente no React é basicamente uma função

        - JSX html dentro do Javascript

        - Quando querer usar o mesmo comando um embaixo do outro no react é necessário inserir algo por fora como uma div ou pode utilizar o conceito de fragments que é utilizar apenas <> </>, assim não causa nenhum efeito na árvore de elementos.

- [x] Propriedades
        
       - É alguma informação que queira passar de um componente pai para um filho.

        - No react podemos usar a propriedade children para exibir todo o conteúdo da tag.

- [x] Estado e Imutabilidade

        -  useState retorna um array com duas posições, na primeira posição ele retorna a variável com seu valor inicial e a segunda uma função para atualizar esse valor.

        - No react temos que evitar de alterar diretamente o valor original, então temos que criar uma nova informação.

- [x] Importando CSS e imagens

        -  Primeiro foi configurado um novo loader, criando uma nova regra dentro do arquivo webpack.  E adiciono os pacotes yarn add style-loader css-loader.  O css-loader vai conseguir ler os arquivos css e conseguir interpretar também as importações que existem dentro dos arquivos e o style-loader ele vai pegar a interpretação do css-loader e vai injetar dentro do html.

        {
                test: /\.css/,
                exclude: /node_modules/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },

      - Foi criada uma pasta chamada assets para armazenar os arquivos de imagem, foi scolhida uma imagem e importada no arquivo app.js .

- [x] Listando Projetos da API

        - Conectar o Back-end com o Front-end. Adiciono a biblioteca axios ele é o responsável por fazer a chamadas da API.

        - Criei a pasta services que armazenará qualquer arquivo que irá fazer a comunicação com serviços externos. Criei um arquivo chamado api.js
