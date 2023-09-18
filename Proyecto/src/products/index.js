const express = require("express");

//router permite manejar las rutas de nuestro modulo independiente de nuestra aplicacion
const router = express.Router();

module.exports.ProductsAPI = (app) => {
  router
    .get("/", (req, res) => {})
    .get("/:id", (req, res) => {})
    .post("/", (req, res) => {});

  app.use("/api/products", router);
};
