const { Product, Category } = require("../models");

const productsMueblesData = [
  {
    name: "Silla",
    description: "Silla de comedor",
    price: 99.99,
    stock: 10,
    salient: false,
    slug: "silla-de-comedor",
    image: "Mueble4",
  },
  {
    name: "Sillón",
    description: "Sillón de living",
    price: 199.99,
    stock: 6,
    salient: false,
    slug: "silla-de-comedor",
    image: "Mueble5",
  },
  {
    name: "Silla Alta",
    description: "Silla alta para bar",
    price: 149.99,
    stock: 10,
    salient: true,
    slug: "silla-alta",
    image: "Mueble2",
  },
];

const productsEspejosData = [
  {
    name: "Espejo cuadrado",
    description: "Espejo cuadrado",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "espejo-cuadrado",
    image: "Espejo1",
  },
  {
    name: "Espejo redondo",
    description: "Espejo redondo con marco dorado",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "espejo-redondo-marco-dorado",
    image: "Espejo4",
  },
  {
    name: "Espejo grande",
    description: "Espejo grande con marco dorado",
    price: 59.99,
    stock: 5,
    salient: true,
    slug: "espejo-grande-marco-dorado",
    image: "Espejo5",
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
    image: "Cuadro2",
  },
  {
    name: "Cuadros",
    description: "Cuadros modernos",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "cuadros-modernos",
    image: "Cuadro3",
  },
  {
    name: "Cuadro abstracto",
    description: "Cuadro abstracto de colores vivos",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto-colores-vivos",
    image: "Cuadro1",
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
    image: "Luminaria2",
  },
  {
    name: "Lámparas de techo",
    description: "Lámparas de techo chicas",
    price: 99.99,
    stock: 5,
    salient: false,
    slug: "lamparas-techo-chicas",
    image: "Luminaria5",
  },
  {
    name: "Lámpara de techo",
    description: "Lámpara de techo moderna",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto-colores-vivos",
    image: "Cuadro1",
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
    image: "Tapiz5",
  },
  {
    name: "Tapiz",
    description: "Tapiz blanco",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "tapiz-blanco",
    image: "Tapiz4",
  },
  {
    name: "Tapiz moderno",
    description: "Tapiz moderno color blanco",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "tapiz-moderno-blanco",
    image: "Tapiz1",
  },
];

const seedProducts = async () => {
  try {
    const mueblesCategory = await Category.findOne({ where: { name: "Muebles" } });
    const espejosCategory = await Category.findOne({ where: { name: "Espejos" } });
    const cuadrosCategory = await Category.findOne({ where: { name: "Cuadros" } });
    const luminariasCategory = await Category.findOne({ where: { name: "Luminarias" } });
    const tapicesCategory = await Category.findOne({ where: { name: "Tapices" } });

    // Crear productos y asignarlos a las categorías correspondientes
    await Product.bulkCreate(
      productsMueblesData.map((product) => ({ ...product, CategoryId: mueblesCategory.id })),
    );
    await Product.bulkCreate(
      productsEspejosData.map((product) => ({ ...product, CategoryId: espejosCategory.id })),
    );
    await Product.bulkCreate(
      productsCuadrosData.map((product) => ({ ...product, CategoryId: cuadrosCategory.id })),
    );
    await Product.bulkCreate(
      productsLuminariasData.map((product) => ({ ...product, CategoryId: luminariasCategory.id })),
    );
    await Product.bulkCreate(
      productsTapicesData.map((product) => ({ ...product, CategoryId: tapicesCategory.id })),
    );

    console.log("Productos creados con éxito");
  } catch (error) {
    console.error("Error al crear los productos:", error);
  }
};

module.exports = seedProducts();
