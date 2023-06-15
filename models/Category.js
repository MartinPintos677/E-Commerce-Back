const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
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
          type: DataTypes.STRING,
        },
        image: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: "Category",
      },
    );

    return Category;
  }
}

module.exports = Category;
