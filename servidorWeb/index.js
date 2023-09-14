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

app.get("/:id", (req, res) => {
  let {params:{id}}=req
  let user=Service.getUser(id)
  res.json({
    messaje: `Usuario ${id}`,
    body: user,
  });
});


//crea un nuevo usuario
app.post("/", (req, res) => {
  let {body :newUser} = req;  
  let user = Service.createUsers(newUser);
  res.status(201).json({
    messaje:'Usuario creado',
    body: user   
  })
});

app.listen(port, () => {
  console.log(
    `ejemplo de aplicacion escuchando en el puerto http://localhost:${port}`
  );
});
