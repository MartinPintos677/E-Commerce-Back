const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", articleController.showAdmin);

module.exports = router;
