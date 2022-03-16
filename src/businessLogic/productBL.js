const { listarProductos, nuevoProducto, actualizarProducto, eliminarProducto, buscarProducto, buscarPorCategoria } = require("../repositories/productRepository");

  const obtenerProductos = async () => {
    return await listarProductos();
  };

  const crearProducto = async (model) => {
    return await nuevoProducto(model);
  };

  const actualizaProducto = async (id, model) => {
    return await actualizarProducto(id, model);
  };

  const eliminaProducto = async (id) => {
    return await eliminarProducto(id);
  };

  const buscaProducto = async (id) => {
    return await buscarProducto(id);
  };

  const buscarProductosPorCategoria = async (category) => {
    return await buscarProductosPorCategoria(category);
  };

  module.exports = {
    obtenerProductos,
    crearProducto,
    actualizaProducto,
    eliminaProducto,
    buscaProducto,
    buscarProductosPorCategoria
  };