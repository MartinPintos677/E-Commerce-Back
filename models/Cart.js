const { Model, DataTypes } = require("sequelize");

class Cart extends Model {
  static initModel(sequelize) {
    Cart.init(
      {
        count: {
          type: DataTypes.INTEGER,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        state: {
          type: DataTypes.ENUM("sin pagar", "pago", "enviado", "entregado"),
          allowNull: false,
          defaultValue: "sin pagar",
        },
        address: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "Cart",
      },
    );

    return Cart;
  }
}

module.exports = Cart;
