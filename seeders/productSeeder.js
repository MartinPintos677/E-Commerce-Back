const { Product, Category } = require("../models");
const path = require("path");

const productsMueblesData = [
  {
    name: "Silla",
    description: "Silla de comedor",
    price: 199.99,
    stock: 10,
    salient: true,
    slug: "silla-de-comedor",
    image: path.join(__dirname, "..public/img/Mueble4"),
  },
  {
    name: "Sillón",
    description: "Sillón de living",
    price: 199.99,
    stock: 6,
    salient: false,
    slug: "silla-de-comedor",
    image: path.join(__dirname, "..public/img/Mueble5"),
  },
  {
    name: "Silla Alta",
    description: "Silla alta para bar",
    price: 199.99,
    stock: 10,
    salient: true,
    slug: "silla-alta",
    image: path.join(__dirname, "..public/img/Mueble2"),
  },
];

const productsEspejoData = [
  {
    name: "Espejo cuadrado",
    description: "Espejo cuadrado",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "espejo-cuadrado",
    image: path.join(__dirname, "..public/img/Espejo1"),
  },
  {
    name: "Espejo redondo",
    description: "Espejo redondo con marco dorado",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "espejo-redondo-marco-dorado",
    image: path.join(__dirname, "..public/img/Espejo4"),
  },
  {
    name: "Espejo grande",
    description: "Espejo grande con marco dorado",
    price: 59.99,
    stock: 5,
    salient: true,
    slug: "espejo-grande-marco-dorado",
    image: path.join(__dirname, "..public/img/Espejo5"),
  },
];

const productsCuadrosData = [
  {
    name: "Cuadro rectangular",
    description: "Cuadro rectangular",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "cuadro-rectangular",
    image: path.join(__dirname, "..public/img/Cuadro2"),
  },
  {
    name: "Cuadros",
    description: "Cuadros modernos",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "cuadros-modernos",
    image: path.join(__dirname, "..public/img/Cuadro3"),
  },
  {
    name: "Cuadro abstracto",
    description: "Cuadro abstracto de colores vivos",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto-colores-vivos",
    image: path.join(__dirname, "..public/img/Cuadro1"),
  },
];

const productsLuminariasData = [
  {
    name: "Lámpara de techo",
    description: "Lámpara de techo moderna",
    price: 129.99,
    stock: 15,
    salient: false,
    slug: "lampara-de-techo",
    image: path.join(__dirname, "..public/img/Luminaria2"),
  },
  {
    name: "Lámparas de techo",
    description: "Lámparas de techo chicas",
    price: 99.99,
    stock: 5,
    salient: false,
    slug: "lamparas-techo-chicas",
    image: path.join(__dirname, "..public/img/Luminaria5"),
  },
  {
    name: "Lámpara de techo",
    description: "Lámpara de techo moderna",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto-colores-vivos",
    image: path.join(__dirname, "..public/img/Cuadro1"),
  },
];

const productsTapicesData = [
  {
    name: "Tapiz decorativo",
    description: "Tapiz decorativo con diseño floral",
    price: 129.99,
    stock: 8,
    salient: false,
    slug: "tapiz-decorativo",
    image: path.join(__dirname, "..public/img/Tapiz5"),
  },
  {
    name: "Tapiz",
    description: "Tapiz blanco",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "tapiz-blanco",
    image: path.join(__dirname, "..public/img/Tapiz4"),
  },
  {
    name: "Tapiz moderno",
    description: "Tapiz moderno color blanco",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "tapiz-moderno-blanco",
    image: path.join(__dirname, "..public/img/Tapiz1"),
  },
];

const seedProducts = async () => {
  try {
    const categories = await Category.findAll();
    const categoryIdMap = categories.reduce((map, category) => {
      map[category.name] = category.id;
      return map;
    }, {});

    const products = productsData.map((product) => ({
      ...product,
      categoryId: categoryIdMap["Muebles"], // Asignar categoría "Muebles" a todos los productos
    }));

    await Product.bulkCreate(products);
    console.log("Productos creados con éxito");
  } catch (error) {
    console.error("Error al crear los productos:", error);
  }
};

module.exports = seedProducts();
