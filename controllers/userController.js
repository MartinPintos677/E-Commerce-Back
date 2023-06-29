const { User, Order } = require("../models");

async function getOrders(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId, { include: Order });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ orders: user.orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Display a listing of the resource.
async function index(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  index,
  getOrders,
  show,
};
