const Category = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
  try {
    const { name, type } = req.body;
    const newCategory = await Category.create({ name, type });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
