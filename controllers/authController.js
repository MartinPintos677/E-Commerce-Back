const { Admin } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Incorrect credentials" });
    }

    if (admin) {
      const isPasswordValid = await bcrypt.compare(password, admin.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect credentials" });
      }

      if (isPasswordValid) {
        const token = jwt.sign({ userId: admin.id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "10h",
        });
        admin._doc.token = token;

        return res.status(201).json(admin);
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Internal server error" });
  }
}

/* async function logout(req, res) {
  try {
    res.clearCookie("token");
    console.log("logged out successfully");
    return res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
} */

// SIGN UP
async function signup(req, res) {
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

module.exports = {
  signup,
  login,
  /*   logout, */
};
