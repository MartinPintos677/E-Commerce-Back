const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas a los register y login:
// ...

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/register", authController.signUp);

module.exports = router;
