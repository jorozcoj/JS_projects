const express = require("express");
const debug = require("debug")("app:main");

const { Config } = require("./src/config");
const { ProductsAPI } = require("./src/products");
const {UsersAPI} = require('./src/users/index');
const app = express();

app.use(express.json());

//se agregan los modulos
ProductsAPI(app);
UsersAPI(app)

app.listen(Config.port, () => {
  debug(`servidor funcionando en el puerto ${Config.port}`);
});
