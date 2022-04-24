const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

const comparePassword = (password, encryptedPassword) => {
    return bcrypt.compareSync(password, encryptedPassword);
}

module.exports = {
    encryptPassword,
    comparePassword
};