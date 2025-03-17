import { Request, Response } from "express";
import { taskService } from "../services/TaskService";

class TaskController {
    async createTask(request: Request, response: Response) {
        try {
            const data = request.body
            console.log(data)
            const task = await taskService.createTask(request.body)
            response.status(201).json(task)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }
}

export const taskController = new TaskController()