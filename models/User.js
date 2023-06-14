const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
        },
        adress: {
          type: DataTypes.STRING,
        },
        phone: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "User",
        hooks: {
          beforeCreate: async (user) => {
            // Solo hashear la contraseña si ha sido modificada o es nueva
            if (user.changed("password")) {
              try {
                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(user.password, 10);
                // Reemplazar la contraseña en texto plano por la contraseña hasheada
                user.password = hashedPassword;
              } catch (error) {
                throw error;
              }
            }
          },
          beforeUpdate: async (user) => {
            // Solo hashear la contraseña si ha sido modificada
            if (user.changed("password")) {
              try {
                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(user.password, 10);
                // Reemplazar la contraseña en texto plano por la contraseña hasheada
                user.password = hashedPassword;
              } catch (error) {
                throw error;
              }
            }
          },
        },
      },
    );

    return User;
  }
}

module.exports = User;
