const { Admin } = require("../models");

const admins = [
  {
    firstname: "Joaquin",
    lastname: "Brascesco",
    email: "joaquin.brascesco@gmail.com",
    address: "Av 18 de julio 1431",
    password: "123",
  },
  {
    firstname: "Martin",
    lastname: "Pintos",
    email: "martin.pintos@gmail.com",
    address: "Av 18 de julio 1432",
    password: "123",
  },
  {
    firstname: "Martin",
    lastname: "Grillo",
    email: "martin.grillo@gmail.com",
    address: "Av 18 de julio 1433",
    password: "123",
  },
  {
    firstname: "Alex",
    lastname: "Garcia",
    email: "alex.garcia@gmail.com",
    address: "Av 18 de julio 1434",
    password: "123",
  },
  {
    firstname: "Admin",
    lastname: "Admin",
    email: "Admin@admin.com",
    address: "Direccion de prueba admin",
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
