const { Product, Category } = require("../models");

const productsData = [
  {
    name: "Mesa de comedor",
    description: "Mesa de comedor de madera",
    price: 199.99,
    stock: 10,
    salient: true,
    slug: "mesa-de-comedor",
  },
  {
    name: "Espejo rectangular",
    description: "Espejo rectangular con marco dorado",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "espejo-rectangular",
  },
  {
    name: "Cuadro abstracto",
    description: "Cuadro abstracto de colores vivos",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto",
  },
  {
    name: "Lámpara de techo",
    description: "Lámpara de techo moderna",
    price: 59.99,
    stock: 15,
    salient: true,
    slug: "lampara-de-techo",
  },
  {
    name: "Tapiz decorativo",
    description: "Tapiz decorativo con diseño floral",
    price: 129.99,
    stock: 8,
    salient: false,
    slug: "tapiz-decorativo",
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
