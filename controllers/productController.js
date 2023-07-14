const { Product, Category } = require("../models");
const formidable = require("formidable");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll();

    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: Category,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const form = formidable({
      multiples: false,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const productCreate = {
        name: fields.name.toString(),
        description: fields.description.toString(),
        image: files.image.newFilename,
        price: fields.price,
        stock: fields.stock,
        salient: fields.salient.toString(),
        slug: fields.slug.toString(),
      };

      const categoryId = fields.categoryId;

      if (categoryId) {
        const category = await Category.findByPk(parseInt(categoryId));

        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }

        const product = await Product.create(productCreate);
        await product.setCategory(category);

        return res.status(200).json(product);
      }

      // Si no se proporcionó una categoría, crear solo el producto sin asignar una categoría
      const product = await Product.create(productCreate);

      return res.status(200).json(product);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const { id } = req.params;
    const form = formidable({
      multiples: false,
      uploadDir: __dirname + "/../public/img",
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const productUpdate = {
        name: fields.name,
        description: fields.description,
        price: fields.price,
        stock: fields.stock,
        salient: fields.salient,
        slug: fields.slug,
      };

      if (files.image) {
        productUpdate.image = files.image.newFilename;
      }

      const categoryId = fields.categoryId;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (categoryId) {
        const category = await Category.findByPk(categoryId);

        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }

        await product.update(productUpdate);
        await product.setCategory(category);

        return res.status(200).json(product);
      }

      // Si no se proporcionó una categoría, actualizar solo los campos del producto sin cambiar la categoría
      await product.update(productUpdate);

      return res.status(200).json(product);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();

    return res.status(204).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Featured products
async function getFeaturedProducts(req, res) {
  try {
    const featuredProducts = await Product.findAll({
      where: { salient: true },
    });

    return res.status(200).json(featuredProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  getFeaturedProducts,
};
