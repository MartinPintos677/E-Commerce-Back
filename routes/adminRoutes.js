const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas a los admin:
// ...

router.get("/admin/login", adminController.login);
router.post("/admin/register", adminController.store); //sign up admin
router.post("/admin/logout", adminController.logout);

// CRUD ADMIN //

router.get("/admin", adminController.index);
router.post("/admin", adminController.store);
router.patch("/admin", adminController.update);
router.delete("/admin", adminController.destroy);

module.exports = router;
