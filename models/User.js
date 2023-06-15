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
          required: true,
        },
        firstname: {
          type: DataTypes.STRING,
          required: true,
        },
        lastname: {
          type: DataTypes.STRING,
          required: true,
        },
        email: {
          type: DataTypes.STRING,
          unique: true,
          required: true,
        },
        password: {
          type: DataTypes.STRING,
          required: true,
        },
        address: {
          type: DataTypes.STRING,
          required: true,
        },
        phone: {
          type: DataTypes.STRING,
          required: true,
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
          beforeBulkCreate: (users) => {
            users.forEach((user) => {
              user.password = bcrypt.hashSync(user.password, 10);
            });
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
