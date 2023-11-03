const Task = require('../models/task.model');


exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json({ success: true, message: 'Task created successfully' , task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to create task' });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ success: true, message: 'Tasks fetched successfully', tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch tasks' });
  }
};


exports.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id, { completed: req.body.completed }, { new: true });
    res.json({ success: true, message: 'Task updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to update task' });
  }
};


exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
   const task = await Task.findByIdAndRemove(id);
    res.json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to delete task' });
    
  }
};
