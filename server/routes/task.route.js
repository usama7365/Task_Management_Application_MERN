const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const verifyTokken = require('../middlewares/verifyToken')


router.post('/tasks',verifyTokken, taskController.createTask);

router.get('/tasks', taskController.getTasks);

router.put('/tasks/:id',verifyTokken, taskController.updateTask);

router.delete('/tasks/:id',verifyTokken, taskController.deleteTask);

module.exports = router;
