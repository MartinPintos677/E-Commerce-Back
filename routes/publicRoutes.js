const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);

router.get("/article/:id", pagesController.showArticle);

module.exports = router;
