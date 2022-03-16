const ProductModel = require("../models/productsModel");

const listarProductos = async () => {
  return await ProductModel.find();
};

const nuevoProducto = async (model) => {
  const add = new ProductModel(model);

  return await add.save();
};

const actualizarProducto = async (id, model) => {
  return await ProductModel.findByIdAndUpdate(id, model);
};

const eliminarProducto = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};

const buscarProducto = async (id) => {
  return await ProductModel.findById(id);
};

const buscarPorCategoria = async (category) => {
  return await ProductModel.find({ category });
};

module.exports = { listarProductos, nuevoProducto, actualizarProducto, eliminarProducto, buscarProducto, buscarPorCategoria };