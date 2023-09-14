const express = require("express");
const Service = require("./src/service");

const app = express();
const port = 3000;

app.use(express.json());

//envia una lista de usuarios
app.get("/", (req, res) => {
  res.json({
    messaje: "lista de usuarios",
    body: Service.getUsers(),
  });
});

//Obtiene un solo usuario
app.get("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);
  res.json({
    messaje: `Usuario ${id}`,
    body: user,
  });
});

/* app.put("/:id", (req, res) => {
  const user = Service.getUser(req.params.id);
  let {params: { id }} = req;
  let { body: newUpdater } = req;
  if (user.length == 0) {
    res.status(404).send(`Usuario con id ${req.params.id} no existe`);
  } else {
    const result = Service.validatos(req.body);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    } else {
      res.send(Service.updateUser(id, newUpdater));
    }
  }
}); */

//Elimina un usuario
app.delete("/:id", (req, res) => {
  let identifier = req.params.id;
  let deletedUser =Service.deleteUser(identifier);

  res.json({
    messaje: `usuario ${identifier} eliminado`,
    body: deletedUser
  });
});

//crea un nuevo usuario
app.post("/", (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUsers(newUser);
  res.status(201).json({
    messaje: "Usuario creado",
    body: user,
  });
});

app.listen(port, () => {
  console.log(
    `ejemplo de aplicacion escuchando en el puerto http://localhost:${port}`
  );
});
