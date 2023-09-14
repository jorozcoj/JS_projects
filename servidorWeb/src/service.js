const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    let identifier = Number(id);
    let user = data.filter((person) => person.id === identifier)[0];
    return user;
  },
  modifyUser: (id) => {
   
  },
  createUsers: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },  

/*  updateUser: (identificador, updateData) => {
    let id = Number(identificador);
    let usuarioBuscado = data.find((cliente) => {
      return cliente.id === id;
      
    });
    usuarioBuscado.first_name = updateData.first_name;
    usuarioBuscado.last_name = updateData.last_name;
    usuarioBuscado.email = updateData.email;
    return usuarioBuscado;
  }, */

  deleteUser: (identifier) => {
    let id =Number(identifier)
    let deletedUser = data.find((user)=> user.id==identifier)
    let index = data.findIndex((user)=>user.id===id)
    data.splice(index,1);
    return deletedUser
  },
};
