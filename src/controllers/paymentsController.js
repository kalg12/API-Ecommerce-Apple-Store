const mercadopago = require("mercadopago");
const {
    GenericResponse
} = require("../utils/genericResponse");
const {
    CustomMessages
} = require("../utils/messages");

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

        articulos.forEach(articulo => {
            preference.items.push({
                title: articulo.nombre,
                quantity: articulo.cantidad,
                unit_price: articulo.precio,
            });

            preference.items.push(add);

        const result = mercadopago.preferences.create(preference);
        response.data = result.body.id;

        });

    } catch (error) {
        console.log(error);
        response.messages = CustomMessages.error_500;
        response.status = false;
    }

    return res.status(500).json(response);
}


module.exports = { payment };