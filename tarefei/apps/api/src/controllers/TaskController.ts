import { Request, Response } from "express";
import { taskService } from "../services/TaskService";

class TaskController {
    async createTask(request: Request, response: Response) {
        try {
            const task = await taskService.createTask(request.body)
            response.status(201).json(task)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }

    async getTasks(request: Request, response: Response) {
        try {
            const tasks = await taskService.getAllTasks()
            response.status(200).json(tasks)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }

    async getTaskById(request: Request, response: Response) {
        try {
            const {taskId} = request.body
            const task = await taskService.getTaskById(taskId)
            response.status(200).json(task)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }
}

export const taskController = new TaskController()