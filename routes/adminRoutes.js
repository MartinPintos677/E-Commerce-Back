const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Rutas relacionadas a los admin:
// ...

router.post("/admin/login", adminController.login);
router.post("/admin/register", adminController.register); //sign up admin
router.post("/admin/logout", adminController.logout);

// CRUD ADMIN //

router.get("/admin", adminController.index);
router.get("/admin/:id", adminController.show);
router.post("/admin/create", adminController.store);
router.patch("/admin/:id", adminController.update);
router.delete("/admin/:id", adminController.destroy);

module.exports = router;
