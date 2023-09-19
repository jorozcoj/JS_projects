const express = require("express");

//router permite manejar las rutas de nuestro modulo independiente de nuestra aplicacion
const router = express.Router();

const {ProductsController}= require('./controller');

module.exports.ProductsAPI = (app) => {
  router
    .get("/", ProductsController.getProducts) //http://localhost:3000/api/products/
    .get("/report",ProductsController.generateReport) //http://localhost:3000/api/products/report
    .get("/:id", ProductsController.getProduct) //http://localhost:3000/api/products/23
    .post("/", ProductsController.createProduct)
//concatena cada una de las rutas con las que se tienen anteriormente "/"
  app.use("/api/products", router);
};
