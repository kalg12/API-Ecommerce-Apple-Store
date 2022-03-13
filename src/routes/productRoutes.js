const { Router } = require("express");
const router = Router();
const {obtener, guardar} = require("../controllers/productsController");

router.get("/", obtener);
router.post("/", guardar);

module.exports = router;