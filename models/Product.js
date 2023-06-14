const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static initModel(sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        avatar: {
          type: DataTypes.TEXT("long"),
          get() {
            const rawValue = this.getDataValue("avatar");
            return rawValue ? JSON.parse(rawValue) : [];
          },
          set(value) {
            const serializedValue = value ? JSON.stringify(value) : "[]";
            this.setDataValue("avatar", serializedValue);
          },
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
