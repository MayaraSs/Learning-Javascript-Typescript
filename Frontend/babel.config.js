module.exports = {
  //conjunto de configurações criado por terceiros que podemos reutliizar
  //env = vai entender o ambiente que a aplicação está sendo criada para converter o código JS
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
};
