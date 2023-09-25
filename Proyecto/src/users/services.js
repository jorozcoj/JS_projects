//Se gestionan todos los datos y la comunicacion con la base de datos
const { ObjectId } = require("mongodb");

const { Database } = require("../database/index");

const COLLECTION = "users";
const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray();
};

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return collection.findOne({ _id: new ObjectId(id) });
};

//crea un nuevo producto en nuestra bd
const create = async (product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product);
  return result.insertedId;
};

//update

//delete
const deleteProduct = async (product) => {
    const collection = await Database(COLLECTION);
    return collection.deleteOne({_id: (product)});
  };


module.exports.UsersService = {
  getAll,
  getById,
  create,
  deleteProduct
};
