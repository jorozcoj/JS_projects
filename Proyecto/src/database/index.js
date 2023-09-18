const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");
const { Config } = require("../config");
//este archivo se encarga de cargar una funcion que nos devuelva la conexion a la BD
var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!connection) {
        const client = new MongoClient(Config.mongoUri);
        connection = await client.connect();
        debug("Nueva conexion realizada con mongoDB Atlas");
      }
      debug("reutilizando conexion");
      const db = connection.db(Config.mongoDBname);
      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });
