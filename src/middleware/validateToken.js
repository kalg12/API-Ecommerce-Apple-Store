const { verificarJWT } = require('../helpers/jwt.hp');

const validateToken = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
      return res.status(401).json({ messages: 'No contiene token' })
    }
    try {
      const { id, username } = verificarJWT(authorization)
      req.id = id
      req.username = username
      next()
    } catch (error) {
      return res.status(401).json({ messages: 'Token invalido' })
    }
  }

  module.exports = { validateToken }
