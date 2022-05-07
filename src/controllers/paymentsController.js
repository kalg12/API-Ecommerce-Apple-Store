const mercadopago = require("mercadopago");
const {GenericResponse} = require("../utils/genericResponse");
const {CustomMessages} = require("../utils/messages");

mercadopago.configure({
    access_token: process.env.TOKEN_MP,
});

const payment = async (req, res) => {
    const response = new GenericResponse();
    const {articulos} = req.body;

    try {
        let preference = {
            items: [],
        };

        articulos.forEach((prod) => {
            const add = {
              tittle: prod.nombre,
              unit_price: prod.precio,
              quantity: prod.cantidad,
            };

        preference.items.push(add);

        const result = mercadopago.preferences.create(preference);
        response.data = result.body.id;

        return res.json(response);

        });

    } catch (error) {
        console.log(error);
        response.messages = CustomMessages.error_500;
        response.status = false;
    }

    return res.status(500).json(response);
}

module.exports = { payment };