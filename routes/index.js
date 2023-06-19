const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const categoryRoutes = require("./categoryRoutes");
const authRoutes = require("./authRoutes");
const orderRoutes = require("./orderRoutes");
const productRoutes = require("./productRoutes");

module.exports = (app) => {
  app.use("/", userRoutes);
  app.use("/", authRoutes);
  app.use("/", adminRoutes);
  app.use("/", categoryRoutes);
  app.use("/", orderRoutes);
  app.use("/", productRoutes);
};
