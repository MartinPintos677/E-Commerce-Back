const { Product, Category } = require("../models");

const productsMueblesData = [
  {
    name: "Silla Honguito",
    description:
      "Silla de comedor de diseño contemporáneo, con estructura robusta y acabado en mimbre, brindando comodidad y elegancia a tus reuniones familiares y cenas con amigos. Su respaldo ergonómico garantiza una experiencia confortable, mientras que su estilo versátil combina fácilmente con cualquier decoración de comedor. La silla perfecta para disfrutar de momentos inolvidables alrededor de la mesa.",
    price: 99.99,
    stock: 10,
    salient: false,
    slug: "silla-de-comedor",
    image: "MueblesFinal6.jpeg",
  },
  {
    name: "Sillón",
    description:
      "Sillón de living de diseño contemporáneo, con líneas elegantes y acabado de primera calidad. Su estructura robusta y acolchado ergonómico proporcionan un confort excepcional. Perfecto para relajarse, leer un libro o disfrutar de una película. El complemento ideal para tu sala de estar, aportando estilo y comodidad a tu hogar.",
    price: 199.99,
    stock: 6,
    salient: false,
    slug: "silla-de-comedor",
    image: "MueblesFinal7.jpeg",
  },
  {
    name: "Silla Alta",
    description:
      "Silla alta de bar con diseño contemporáneo y estructura robusta. Su asiento acolchado y respaldo ergonómico brindan comodidad durante largas estancias. Ideal para disfrutar de momentos animados en el bar o en tu propio hogar. Su altura ajustable y base estable garantizan seguridad y versatilidad. Una combinación perfecta de estilo y funcionalidad para tu espacio de entretenimiento.",
    price: 149.99,
    stock: 10,
    salient: true,
    slug: "silla-alta",
    image: "MueblesFinal4.jpeg",
  },
];

const productsEspejosData = [
  {
    name: "Espejo cuadrado",
    description:
      "Espejo cuadrado de estilo contemporáneo con marco minimalista. Su diseño geométrico y líneas limpias aportan sofisticación a cualquier habitación. Además de reflejar la belleza, amplía visualmente el espacio y refleja la luz, creando una sensación de amplitud y luminosidad. El complemento perfecto para añadir elegancia y funcionalidad a tu decoración interior.",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "espejo-cuadrado",
    image: "Espejo1.jpg",
  },
  {
    name: "Espejo redondo",
    description:
      "Espejo redondo de diseño contemporáneo con encanto atemporal. Su forma circular y marco estilizado aportan elegancia a cualquier espacio. Además de su función práctica, refleja la luz y amplía visualmente el entorno, creando una sensación de amplitud y luminosidad. Perfecto para resaltar la decoración y agregar un toque de sofisticación a tu hogar u oficina.",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "espejo-redondo-marco-dorado",
    image: "Espejo4.jpg",
  },
  {
    name: "Espejo grande",
    description:
      "Espejo grande de diseño moderno y versátil. Con su amplio tamaño y marco elegante, este espejo se convierte en un elemento central en cualquier ambiente. No solo refleja la belleza, sino que también amplía visualmente el espacio, aportando luminosidad y profundidad a la habitación. Perfecto para decorar y realzar la estética de tu hogar u oficina con estilo contemporáneo",
    price: 59.99,
    stock: 5,
    salient: true,
    slug: "espejo-grande-marco-dorado",
    image: "EspejosFinal4.jpeg",
  },
];

const productsCuadrosData = [
  {
    name: "Cuadro rectangular",
    description:
      "Cuadro rectangular de diseño contemporáneo que aporta arte y estilo a tus paredes. Sus formas y colores cautivan la mirada, creando un punto focal en cualquier habitación. Perfecto para decorar salas, dormitorios u oficinas, este cuadro añade personalidad y sofisticación a tus espacios, convirtiéndolos en lugares inspiradores y llenos de encanto.",
    price: 79.99,
    stock: 20,
    salient: false,
    slug: "cuadro-rectangular",
    image: "CuadrosFinal2.jpeg",
  },
  {
    name: "Cuadros",
    description:
      "Cuadro rectangular de diseño contemporáneo que aporta arte y estilo a tus paredes. Sus formas y colores cautivan la mirada, creando un punto focal en cualquier habitación. Perfecto para decorar salas, dormitorios u oficinas, este cuadro añade personalidad y sofisticación a tus espacios, convirtiéndolos en lugares inspiradores y llenos de encanto.",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "cuadros-modernos",
    image: "Cuadro3.png",
  },
  {
    name: "Cuadro abstracto",
    description:
      "Cuadro abstracto de diseño vanguardista que despierta la imaginación y provoca emociones. Sus formas y colores expresivos crean una experiencia visual única, agregando dinamismo y profundidad a tus espacios. Perfecto para decorar salas, estudios u oficinas, este cuadro captura la atención y despierta conversaciones, convirtiéndose en un punto focal que refleja tu estilo y creatividad.",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "cuadro-abstracto-colores-vivos",
    image: "CuadrosFinal1.jpeg",
  },
];

const productsLuminariasData = [
  {
    name: "Lámpara de techo",
    description:
      "Lámpara de techo moderna con diseño elegante y funcional. Su estilo minimalista y sofisticado añade un toque contemporáneo a cualquier ambiente. Con su iluminación cálida y eficiente, esta lámpara destaca la belleza de tu espacio y crea una atmósfera acogedora. Ideal para salas de estar, comedores o dormitorios, esta lámpara combina a la perfección estilo y funcionalidad en tu decoración.",
    price: 129.99,
    stock: 15,
    salient: false,
    slug: "lampara-de-techo",
    image: "LuminariaFinal1.jpeg",
  },
  {
    name: "Lámparas de techo",
    description:
      "Lámpara de techo pequeña y encantadora con diseño elegante y discreto. A pesar de su tamaño compacto, ofrece una iluminación suave y acogedora a cualquier habitación. Perfecta para espacios más reducidos, como pasillos o rincones, o como iluminación complementaria en combinación con otras lámparas, esta lámpara añade un toque de estilo y funcionalidad en cualquier entorno.",
    price: 99.99,
    stock: 5,
    salient: false,
    slug: "lamparas-techo-chicas",
    image: "LuminariaFinal2.jpeg",
  },
  {
    name: "Lámpara de techo",
    description:
      "Lámpara de techo moderna con diseño contemporáneo y elegante. Su estilo minimalista y sofisticado añade un toque vanguardista a cualquier ambiente. Con su iluminación eficiente y regulable, esta lámpara crea la atmósfera perfecta para diferentes ocasiones. Ideal para salas de estar, comedores o dormitorios, esta lámpara combina estilo y funcionalidad, convirtiéndose en un elemento destacado de tu decoración moderna.",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "lampara-techo-tejido",
    image: "LuminariasFinal3.jpeg",
  },
];

const productsTapicesData = [
  {
    name: "Tapiz decorativo",
    description:
      "Tapiz decorativo que combina arte y estilo para transformar tus paredes. Con su diseño detallado y textura suave, este tapiz agrega un toque único a cualquier habitación. Ideal para crear un ambiente acogedor y personalizado en tu hogar u oficina, este tapiz se convierte en una expresión artística que refleja tu estilo y buen gusto.",
    price: 129.99,
    stock: 8,
    salient: false,
    slug: "tapiz-decorativo",
    image: "TapizFinal1.jpeg",
  },
  {
    name: "Tapiz",
    description:
      "Tapiz blanco de diseño minimalista y sofisticado que transforma tus paredes en lienzos de serenidad. Con su color neutro y textura suave, este tapiz añade luminosidad y pureza a cualquier habitación. Perfecto para crear un ambiente fresco y versátil, este tapiz se adapta fácilmente a diferentes estilos de decoración, brindando una sensación de amplitud y calma en tu hogar u oficina.",
    price: 149.99,
    stock: 5,
    salient: true,
    slug: "tapiz-blanco",
    image: "TapizFinal2.jpeg",
  },
  {
    name: "Tapiz moderno",
    description:
      "Tapiz moderno de color blanco con diseño contemporáneo y textura suave. Su estética elegante y minimalista se integra perfectamente en cualquier ambiente. Ideal para crear un espacio moderno y sofisticado, este tapiz añade un toque de estilo a tus paredes, a la vez que aporta calidez y suavidad. Una elección perfecta para realzar la decoración y crear una atmósfera moderna en tu hogar u oficina.",
    price: 149.99,
    stock: 5,
    salient: false,
    slug: "tapiz-moderno-blanco",
    image: "TapizFinal3.jpeg",
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
