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
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "sin pagar",
          validate: {
            isIn: [["sin pagar", "pago", "enviado", "entregado"]],
          },
        },
        adress: {
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
