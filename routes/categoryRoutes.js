const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas relacionadas a la categoria:
// ...

router.get("/category", categoryController.index);
router.get("/category/:id", categoryController.show);
router.get("/category/list/:categoryid", categoryController.getProductsByCategory);
router.post("/category", categoryController.store);
router.patch("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.destroy);

module.exports = router;
