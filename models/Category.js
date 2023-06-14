const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static initModel(sequelize) {
    Category.init(
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
