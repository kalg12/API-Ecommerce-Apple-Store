const jwt = require("jsonwebtoken");

const generarJWT = (usuario) => {
  const payload = {
    usuario: {
      id: usuario.id,
    },
  };

  jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{expiresIn: '2h'},(err, token) => {
    if (err) {
        reject(err);
    } else {
        resolve(token);
    }
    }
    );
};

const verificarJWT = (token) => {
  return jwt .verify(token,process.env.SECRETORPRIVATEKEY);
}

module.exports = {
    generarJWT,
    verificarJWT
}
