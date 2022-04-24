const { Router } = require("express");
const router = Router();
const { obtener, guardar, actualizar, eliminar, buscar } = require("../controllers/usersController");
const {login} = require("../controllers/auth");

router.get("/", obtener);
router.post("/", guardar);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);
router.get("/:id", buscar);
router.post("/login", login);

module.exports = router;