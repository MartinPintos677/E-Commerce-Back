const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User");
const Admin = require("./Admin");
const Category = require("./Category");
const Product = require("./Product");
const Cart = require("./Cart");

User.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);
Cart.initModel(sequelize);

// Relación 1 a N: Category tiene una relación 1 a N con Product
Category.hasMany(Product);
Product.belongsTo(Category);

// Relación N a 1: Cart tiene una relación N a 1 con User
Cart.belongsTo(User);
User.hasMany(Cart);

module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  Product,
  Cart,
};
