const { Admin, Order } = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Incorrect credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect credentials" });
    }

    if (chekPass) {
      const token = jwt.sign({ userId: admin.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "10h",
      });
      admin._doc.token = token;

      return res.status(201).json(admin);
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Internal server error" });
  }
}

async function signUp(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const existingAdmin = await Admin.findOne({ where: { email } });

    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    return res.status(201).json(newAdmin);
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

/*async function getAllOrders(req, res) {
  try {
    const userId = req.user.userId;

    const user = await User.findByPk(userId, { include: Order });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ orders: user.orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}*/

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  login,
  signUp,
  logout,
  getOrders,
};
