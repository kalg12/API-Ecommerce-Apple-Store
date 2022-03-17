const { Router } = require("express");
const router = Router();
const { obtener, guardar, actualizar, eliminar, buscar } = require("../controllers/usersController");

router.get("/", obtener);
router.post("/", guardar);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);
router.get("/:id", buscar);

module.exports = router;