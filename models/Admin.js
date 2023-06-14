const bcrypt = require("bcryptjs");
const { Model, DataTypes } = require("sequelize");

class Admin extends Model {
  static initModel(sequelize) {
    Admin.init(
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
      },
      {
        sequelize,
        modelName: "Admin",
        hooks: {
          beforeCreate: async (admin) => {
            // Solo hashear la contraseña si ha sido modificada o es nueva
            if (admin.changed("password")) {
              try {
                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(admin.password, 10);
                // Reemplazar la contraseña en texto plano por la contraseña hasheada
                admin.password = hashedPassword;
              } catch (error) {
                throw error;
              }
            }
          },
          beforeUpdate: async (admin) => {
            // Solo hashear la contraseña si ha sido modificada
            if (admin.changed("password")) {
              try {
                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(admin.password, 10);
                // Reemplazar la contraseña en texto plano por la contraseña hasheada
                admin.password = hashedPassword;
              } catch (error) {
                throw error;
              }
            }
          },
        },
      },
    );

    return Admin;
  }
}

module.exports = Admin;
