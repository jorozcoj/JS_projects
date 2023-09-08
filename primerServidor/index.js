const axios =require("axios");
//axios es un paquete asincrono

const main = async()=>{
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let {
        data: {results},
    } = response;
    let characters=results.map((character)=>{
        return{
            id:character.id,
            name:character.name
        }
    })

    console.log(characters);
}

main()