const { Admin, Order, User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    const token = (admin) => {
      const token = jwt.sign({ sub: admin.id }, process.env.SESSION_SECRET, { expiresIn: "1h" });
      return token;
    };

    if (admin) {
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect credentials" });
      }
    }
    const { firstname, lastname, id } = admin;
    const accessToken = token(admin);
    return res.json({
      accessToken,
      firstname,
      lastname,
      email,
      id,
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Internal server error" });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("token");
    console.log("logged out successfully");
    return res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
// SIGN UP
async function register(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const existingAdmin = await Admin.findOne({ where: { email } });

    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already registered" });
    }

    const newAdmin = await Admin.create({
      firstname,
      lastname,
      email,
      password,
    });

    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Internal server error" });
  }
}

async function getAllOrders(req, res) {
  try {
    const orders = await Order.findAll({
      include: {
        model: User,
      },
    });

    return res.status(200).json(orders);
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
    admin.password = password;

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

module.exports = {
  index,
  show,
  edit,
  update,
  destroy,
  getAllOrders,
  login,
  logout,
  register,
};
