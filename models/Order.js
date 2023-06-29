const { Model, DataTypes } = require("sequelize");

class Order extends Model {
  static initModel(sequelize) {
    Order.init(
      {
        products: {
          type: DataTypes.JSON,
        },
        state: {
          type: DataTypes.ENUM("Sin pagar", "Pago", "Enviado", "Entregado"),
          allowNull: false,
          defaultValue: "Sin pagar",
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

  static associate(models) {
    Order.belongsTo(models.User, { foreignKey: "UserId" });
  }
}

module.exports = Order;
