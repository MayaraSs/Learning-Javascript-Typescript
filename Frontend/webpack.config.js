const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.js$/, // converte todos os arquivo terminado em js
        exclude: /node_modules/, //se os arquivos não estiver na pasta node_modules não precisa executar o babel
        use: {
          loader: "babel-loader", //converte utilizando o babel
        },
      },
    ],
  },
};
