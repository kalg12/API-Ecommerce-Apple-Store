const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: [true, "El apellido es obligatorio"],
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        default: "https://www.gravatar.com/avatar/https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg?s=200",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = model("User", UserSchema);