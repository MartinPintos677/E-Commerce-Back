const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Rutas relacionadas a la order:

router.post("/order", orderController.createOrder);

module.exports = router;
