const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas a los register y login:
// ...

router.get("/login", authController.login);
router.post("/login", authController.signUp);
router.get("/logout", authController.logout);
router.post("/register", authController.register);

module.exports = router;
