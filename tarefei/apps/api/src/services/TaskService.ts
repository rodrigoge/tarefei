import { PrismaClient } from "@prisma/client";
import { TaskDTO } from "types/TaskDTO";
import validateDate from "../utils/ValidateDate";
import validateRequiredField from "../utils/ValidateRequiredField";
import validateStatus from "../utils/ValidateStatus";

const prisma = new PrismaClient()

class TaskService {
    async createTask(task: TaskDTO) {
        return await prisma.tasks.create({ data: {
            name: validateRequiredField('name', task.name).toString(),
            due_date: validateDate(task.due_date),
            status: validateStatus(task.status)
        }})
    }

    async getTaskById(taskId: string) {
        return await prisma.tasks.findUnique( {
            where: {
                id : taskId
            },
            include: {
                activities: true
            }
        })
    }

    async getAllTasks() {
        return await prisma.tasks.findMany({
            include: {
                activities: true
            }
        })
    }

    async updateTask(taskId: string, task: TaskDTO) {
        const taskFounded = await this.getTaskById(taskId)
        if(!taskFounded) {
            throw new Error('TaskID cannot be present')
        }
        return prisma.tasks.update({
            data: {
                name: validateRequiredField('name', task.name).toString(),
                due_date: validateDate(task.due_date),
                status: validateStatus(task.status)
            },
            where: {id: taskFounded.id}
        })
    }

    async deleteTask(taskId: string) {
        return prisma.tasks.delete({
            where: {id: taskId}
        })
    }
}

export const taskService = new TaskService()
