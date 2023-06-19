const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas a los admin:
// ...

router.get("/admin/login", adminController.login);
router.post("/admin/register", adminController.register); //sign up admin
router.post("/admin/logout", adminController.logout);

// CRUD ADMIN //

router.get("/admin", adminController.index);
router.post("/admin/create", adminController.store);
router.patch("/admin/edit", adminController.update);
router.delete("/admin/:id", adminController.destroy);

module.exports = router;
