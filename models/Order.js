const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        products: {
          type: DataTypes.JSON,
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
        modelName: "Order",
      },
    );

    return Order;
  }
}

module.exports = Order;
