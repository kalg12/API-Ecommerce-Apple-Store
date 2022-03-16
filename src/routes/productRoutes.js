const { Router } = require("express");
const router = Router();
const {obtener, guardar, actualizar, eliminar, buscar, buscarPorCategoria} = require("../controllers/productsController");

router.get("/", obtener);
router.post("/", guardar);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);
router.get("/:id", buscar);
router.get("/category/:category", buscarPorCategoria);

module.exports = router;