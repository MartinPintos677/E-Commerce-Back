const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:

router.get("/users", userController.index);
router.get("/users/orders", userController.getOrders);

module.exports = router;
