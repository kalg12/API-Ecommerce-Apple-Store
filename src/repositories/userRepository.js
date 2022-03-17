const UserModel = require('../models/userModel');

const listarUsuarios = async () => {
    return await UserModel.find();
};

const nuevoUsuario = async (model) => {
    const add = new UserModel(model);

    return await add.save();
}

const actualizarUsuario = async (id, model) => {
    return await UserModel.findByIdAndUpdate(id, model);
}

const eliminarUsuario = async (id) => {
    return await UserModel.findByIdAndDelete(id);
}

const buscarUsuario = async (id) => {
    return await UserModel.findById(id);
}

module.exports = { listarUsuarios, nuevoUsuario, actualizarUsuario, eliminarUsuario, buscarUsuario };