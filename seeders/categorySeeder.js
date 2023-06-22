const { Category } = require("../models");

const categoriesData = [
  {
    name: "Muebles",
    description: "Categoría de muebles",
    image: "mueble5.jpg",
  },
  {
    name: "Espejos",
    description: "Categoría de espejos",
    image: "espejo5.jpg",
  },
  {
    name: "Cuadros",
    description: "Categoría de cuadros",
    image: "Cuadro1.png",
  },
  {
    name: "Luminarias",
    description: "Categoría de luminarias",
    image: "Luminaria2.jpg",
  },
  {
    name: "Tapices",
    description: "Categoría de tapices",
    image: "Tapiz4.jpg",
  },
];

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoriesData);
    console.log("Categorías creadas con éxito");
  } catch (error) {
    console.error("Error al crear las categorías:", error);
  }
};

module.exports = seedCategories();
