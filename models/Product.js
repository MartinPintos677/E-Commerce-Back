const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
          required: true,
        },
        name: {
          type: DataTypes.STRING,
          required: true,
        },
        description: {
          type: DataTypes.TEXT,
          required: true,
        },
        image: {
          type: DataTypes.TEXT,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        stock: {
          type: DataTypes.INTEGER,
        },
        salient: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        slug: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "Product",
      },
    );

    return Product;
  }
}

module.exports = Product;
