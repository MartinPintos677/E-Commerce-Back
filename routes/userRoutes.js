const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:

router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.get("/users/:userId/orders", userController.getOrders);

module.exports = router;
