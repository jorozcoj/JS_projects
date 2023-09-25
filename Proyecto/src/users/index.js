const express = require("express");

//router permite manejar las rutas de nuestro modulo independiente de nuestra aplicacion
const router = express.Router();

const {UsersController}= require('./controller');

module.exports.UsersAPI = (app) => {
  router
    .get("/", UsersController.getUser) //http://localhost:3000/api/products/
    .get("/:id", UsersController.getUser) //http://localhost:3000/api/products/23
    .post("/", UsersController.createUser)
    .delete("/id:",UsersController.deleteUser)

    //update
    //delete
//concatena cada una de las rutas con las que se tienen anteriormente "/"
  app.use("/api/users", router);
};
