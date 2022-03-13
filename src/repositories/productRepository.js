const ProductModel = require("../models/productsModel");

const listarProductos = async () => {
  return await ProductModel.find();
};

const nuevoProducto = async (model) => {
  const add = new ProductModel(model);

  return await add.save();
};

module.exports = { listarProductos, nuevoProducto };