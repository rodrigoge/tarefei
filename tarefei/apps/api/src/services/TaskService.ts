import { PrismaClient } from "@prisma/client";
import { TaskDTO } from "types/TaskDTO";
import validateDate from "../utils/ValidateDate";
import validateRequiredField from "../utils/ValidateRequiredField";
import validateStatus from "../utils/ValidateStatus";

const prisma = new PrismaClient()

class TaskService {
    async createTask(data: TaskDTO) {
        return await prisma.tasks.create({ data: {
            name: validateRequiredField('name', data.name).toString(),
            due_date: validateDate(data.due_date),
            status: validateStatus(data.status)
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
}

export const taskService = new TaskService()
