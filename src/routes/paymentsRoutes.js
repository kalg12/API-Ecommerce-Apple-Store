const { Router } = require("express");
const router = Router();
const payment = require("../controllers/paymentsController");

router.post("/", payment.payment);

module.exports = router;