const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const { email, password } = req.body;
  const token = (user) => {
    const token = jwt.sign({ sub: user.id }, process.env.SESSION_SECRET, { expiresIn: "1h" });
    return token;
  };

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(404).json({ error: "Password not found" });
    }
    const { firstname, lastname, id, address } = user;
    const accessToken = token(user);
    return res.json({
      accessToken,
      firstname,
      lastname,
      address,
      email,
      id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server not found" });
  }
}

async function signUp(req, res) {
  try {
    const { firstname, lastname, email, password, address, phone } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      address,
      phone,
    });

    return res.status(201).json(newUser);
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

module.exports = {
  login,
  signUp,
  logout,
};
