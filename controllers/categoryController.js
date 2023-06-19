const { Category, Product } = require("../models");
import("formidable")
  .then((formidable) => {})
  .catch((error) => {
    console.error(error);
  });

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categories = await Category.findAll();

    return res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id, {
      include: Product,
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Show the form for creating a new resource.
async function create(req, res) {
  // Poner la ruta para crear Categoría ?
  return res.render("category.create.ruta");
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
      const categoryCreate = {
        name: fields.name,
        description: fields.description,
        image: files.image.newFilename,
      };

      const category = await Category.create(categoryCreate);
      return res.status(200).json(category);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {
  // Ruta para update ?
  return res.render("category.edit.ruta");
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
      const categoryUpdate = {
        name: fields.name,
        description: fields.description,
        image: files.image.newFilename,
      };

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      await category.update(categoryUpdate);

      return res.status(200).json(category);
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
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Si elimino una categoría, debería eliminar todos sus productos vinculados ??? (por ahora no se eliminan los productos)
    await category.destroy();

    return res.status(204).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Products by category
async function getProductsByCategory(req, res) {
  try {
    const { categoryId } = req.params;

    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const products = await Product.findAll({
      where: { CategoryId: categoryId },
    });

    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
  getProductsByCategory,
};
