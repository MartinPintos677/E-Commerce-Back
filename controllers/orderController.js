const { Order, User } = require("../models");

async function show(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, { include: Order });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ orders: user.Orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function createOrder(req, res) {
  try {
    const { userId, products, state, address } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const order = await Order.create({
      products,
      state,
      address,
    });

    await order.setUser(user);

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { createOrder, show };
