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
