const { User } = require("../models");

const users = [
  {
    firstname: "Jorge",
    lastname: "Perez",
    email: "jorgeperez@gmail.com",
    address: "Av 18 de julio 1722",
    phone: 123456789,
    password: "123",
  },
  {
    firstname: "Maria",
    lastname: "López",
    email: "marialopez@gmail.com",
    address: "Av 18 de julio 1823",
    phone: 987654321,
    password: "123",
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(users);
    console.log("Usuarios creados con éxito");
  } catch (error) {
    console.error("Error al crear los usuarios:", error);
  }
};

module.exports = seedUsers();
