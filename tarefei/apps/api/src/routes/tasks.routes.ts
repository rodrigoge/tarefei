import { Router } from "express";
import { taskController } from "../controllers/TaskController";

const tasksRouter = Router()

tasksRouter.post('/', taskController.createTask)

export { tasksRouter };

