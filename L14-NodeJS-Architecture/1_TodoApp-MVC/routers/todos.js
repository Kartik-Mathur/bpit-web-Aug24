const express = require('express');
const router = express.Router();

// const dbPath = path.join(__dirname,'..','db','tasks.json');
const todosController = require('../controllers/todos');

router.post('/addtask', todosController.postAddTask);
router.get('/gettasks', todosController.getGetTasks);
router.get('/getcompletedtasks', todosController.getGetCompletedTasks);
router.get('/markcomplete', todosController.getMarkComplete);
router.get('/markuncomplete', todosController.getMarkUncomplete);
router.get('/clearcompleted', todosController.getClearCompleted);
router.get('/getactivetasks', todosController.getGetActiveTasks);
router.get('/deletetask', todosController.getDeleteTask);
router.get('/updatetask', todosController.getUpdateTask);

module.exports=router;