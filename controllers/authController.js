const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Incorrect credentials" });
    }

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect credentials" });
      }

      if (isPasswordValid) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "10h",
        });
        user._doc.token = token;

        return res.status(201).json(user);
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Internal server error" });
  }
}

async function signUp(req, res) {
  try {
    const { firstname, lastname, email, password, address, phone } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }

    // Dejar el usuario logueado después de generar un User o que haga el logueo pos SignUp (por ahora no) ?

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
