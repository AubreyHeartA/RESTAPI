const express = require('express');
const router = express.Router();

const PersonalTask = require('../Model/PersonalTask.model');

// Add a new task
// router.post('/', async (req, res) => {
//     try {
//       const newTask = new PersonalTask(req.body);
//       const savedTask = await newTask.save();
//       res.json(savedTask);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
// });

router.post('/', async (req, res) => {
    try {
      // Extract task data from the request body
      const { title, description, status, deadline, createdAt, category } = req.body;
  
      // Create a new task document
      const newTask = new PersonalTask({
        title,
        description,
        status,
        deadline,
        createdAt,
        category
      });
  
      // Save the task to the database
      await newTask.save();
  
      res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (err) {
      console.error('Error saving task:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // Fetch all tasks
router.get('/tasks', async (req, res) => {
try {
    const tasks = await PersonalTask.find();
    res.json(tasks);
} catch (error) {
    res.status(500).json({ message: error.message });
}
});
  

module.exports = router;