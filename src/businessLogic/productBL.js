const { listarProductos, nuevoProducto } = require("../repositories/productRepository");

  const obtenerProductos = async () => {
    return await listarProductos();
  };

  const crearProducto = async (model) => {
    return await nuevoProducto(model);
  };

  module.exports = { obtenerProductos, crearProducto };