const { Schema, model } = require("mongoose");

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "http://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg",
    },
    stock: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("Products", ProductsSchema);