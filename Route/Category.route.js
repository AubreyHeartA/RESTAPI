const express = require('express');
const router = express.Router();

const Category = require('../Model/Category.model');

// Add a new task
router.post('/', async (req, res) => {
    try {
      const { categoryName } = req.body;
      
      if (!categoryName) {
        return res.status(400).json({ message: "Name is required for creating a category." });
      }
  
      const category = new Category({ categoryName });
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// GET all tasks
router.get('/getCategory', async (req, res) => {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

module.exports = router;