const {generarJWT} = require("../helpers/jwt.hp");
const { comparePassword } = require("../helpers/passwordEncrypt");
const {buscaUsuario} = require("../businessLogic/userBL");
const {GenericResponse} = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");

const login = async (req, res) => {

    const response = new GenericResponse();

    try{
        const { email, password } = req.body;

        const user = await buscaUsuario(email);

        if(!user){
            response.messages = CustomMessages.user_not_found;
            response.success = false;

            return res.status(404).json(response);
        }

        const passwordIsValid = await comparePassword(password, user.password);

        if(!passwordIsValid){
            response.messages = CustomMessages.user_not_found;
            response.success = false;

            return res.status(404).json(response);
        }

        const token = generarJWT(user.id);

        response.data = {
            token,
            user
        };

        return res.json(response);
    }catch(error){
        console.log(error);
        response.messages = CustomMessages.error_500;
        response.success = false;

        return res.status(500).json(response);
    }
}


module.exports = {
    login
}