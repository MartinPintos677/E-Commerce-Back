const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a la categoria:
// ...

router.get("/category", categoryController.index);
router.get("/category/:id", categoryController.show);
router.post("/category/features", categoryController.getProductsByCategory);
router.post("/category", categoryController.store);
router.patch("/category", categoryController.update);
router.delete("/category", categoryController.destroy);

module.exports = router;
