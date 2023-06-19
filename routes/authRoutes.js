const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas a los register y login:
// ...

router.get("/login", authController.login);
router.post("/login", authController.signup);
/* router.get("/logout", authController.logout); */

module.exports = router;
