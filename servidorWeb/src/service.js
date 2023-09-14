const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,
  getUser: (id) => {
    let identifier = Number(id);
    let user = data.filter((person) => person.id === identifier)[0];
    return user;
  },
  createUsers: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);

    return newUser;
  },
};
