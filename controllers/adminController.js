const { Admin, Order } = require("../models");
const bcrypt = require("bcryptjs");

async function getAllOrders(req, res) {
  try {
    const orders = await Order.findAll({
      include: {
        model: User,
      },
    });

    return res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = await Admin.findAll();
    return res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Show the form for creating a new resource
async function create(req, res) {
  // ir a la Ruta de SignUp ?
  return res.render("admin.create.ruta");
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.firstname = firstname;
    admin.lastname = lastname;
    admin.email = email;
    admin.password = await bcrypt.hash(password, 10);

    await admin.save();

    return res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    await admin.destroy();

    return res.status(204).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  edit,
  update,
  destroy,
  getAllOrders,
};
