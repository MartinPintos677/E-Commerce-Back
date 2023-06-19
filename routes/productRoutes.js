const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Rutas relacionadas a los productos:
// ...

router.get("/product", productController.index);
router.get("/product/:id", productController.show);
router.post("/product/features", productController.getFeaturedProducts);
router.post("/product", productController.store);
router.patch("/product", productController.update);
router.delete("/product", productController.destroy);

module.exports = router;
