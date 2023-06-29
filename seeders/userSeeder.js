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
  {
    firstname: "Victoria",
    lastname: "Martinez",
    email: "victoriamartinez@gmail.com",
    address: "Av 18 de julio 1825",
    phone: 123654789,
    password: "123",
  },
  {
    firstname: "Pablo",
    lastname: "Pérez",
    email: "pabloperez@gmail.com",
    address: "Av 18 de julio 1923",
    phone: 789654123,
    password: "123",
  },
  {
    firstname: "User",
    lastname: "Name",
    email: "User@user.com",
    address: "Avenida Mesopotamia Esquina Valhalla",
    phone: 1122,
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
