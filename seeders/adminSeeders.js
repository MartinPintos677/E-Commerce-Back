const { Admin } = require("../models");

const admins = [
  {
    firstname: "Joaquin",
    lastname: "Brascesco",
    email: "joaquin.brascesco@gmail.com",
    address: "Av 18 de julio 1431",
    password: "123",
  },
];

const seedAdmin = async () => {
  try {
    await Admin.bulkCreate(admins);
    console.log("Administradores creados con éxito");
  } catch (error) {
    console.error("Error al crear los administradores:", error);
  }
};

module.exports = seedAdmin();
