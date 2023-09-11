const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");
//axios es un paquete asincrono
//Axios es una librería cliente HTTP basada en promesas que se puede usar tanto en Node JS como en el navegador

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;
  let headers = results.map((head) => {
    return {
      id: head.id,
      name: head.name,
      status: head.status,
      species: head.species,
      gender: head.gender,
    };
  });
  let encabezado = Object.keys(headers[0]).join(",");

  let characters = results
    .map((character) => {
      return {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
      };
    })
    .map((personaje) => Object.values(personaje).join(","))
    .join("\n");

    let rows = (encabezado + "\n" + characters)

  await fs.writeFile(path.join(__dirname, "data.csv"), rows);
  //console.log(characters);
  console.log(rows);
};

main();
