const {listarUsuarios, nuevoUsuario, actualizarUsuario, eliminarUsuario, buscarUsuario} = require("../repositories/userRepository");

const obtenerUsuarios = async () => {
    return await listarUsuarios();
}


const crearUsuario = async (model) => {
    return await nuevoUsuario(model);
}


const actualizaUsuario = async (id, model) => {
    return await actualizarUsuario(id, model);
}


const eliminaUsuario = async (id) => {
    return await eliminarUsuario(id);
}


const buscaUsuario = async (id) => {
    return await buscarUsuario(id);
}


module.exports = {
    obtenerUsuarios,
    crearUsuario,
    actualizaUsuario,
    eliminaUsuario,
    buscaUsuario
};