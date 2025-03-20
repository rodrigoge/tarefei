import { Router } from "express";
import { taskController } from "../controllers/TaskController";

const tasksRouter = Router()
tasksRouter.post('/', taskController.createTask)
tasksRouter.get('/', taskController.getTasks)
tasksRouter.get('/by-id', taskController.getTaskById)
tasksRouter.put('/:taskId', taskController.updateTask)
tasksRouter.delete('/:taskId', taskController.deleteTask)

export { tasksRouter };

