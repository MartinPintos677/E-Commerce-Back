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
          beforeBulkCreate: (admins) => {
            admins.forEach((admin) => {
              admin.password = bcrypt.hashSync(admin.password, 10);
            });
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
