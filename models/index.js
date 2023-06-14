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

/**
 * Luego de definir los modelos, se pueden establecer relaciones entre los
 * mismos (usando métodos como belongsTo, hasMany y belongsToMany)...
 */
// Relación 1 a N: Category tiene una relación 1 a N con Product
Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

// Relación N a N: Product tiene una relación N a N con Cart
Product.belongsToMany(Cart, {
  through: "CartProduct",
  foreignKey: "productId",
  otherKey: "cartId",
  onDelete: "CASCADE",
});
Cart.belongsToMany(Product, {
  through: "CartProduct",
  foreignKey: "cartId",
  otherKey: "productId",
  onDelete: "CASCADE",
});

// Relación N a 1: Cart tiene una relación N a 1 con User
Cart.belongsTo(User, { foreignKey: "compradorId" });
User.hasMany(Cart, { foreignKey: "compradorId" });

module.exports = {
  sequelize,
  User,
  Admin,
  Category,
  Product,
  Cart,
};
