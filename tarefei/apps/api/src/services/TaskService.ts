import { PrismaClient } from "@prisma/client";
import { TaskType } from "types/TaskType";
import validateDate from "../utils/ValidateDate";
import validateRequiredField from "../utils/ValidateRequiredField";
import validateStatus from "../utils/ValidateStatus";

const prisma = new PrismaClient()

class TaskService {
    async createTask(data: TaskType) {
        return await prisma.tasks.create({ data: {
            name: validateRequiredField('name', data.name).toString(),
            due_date: validateDate(data.due_date),
            status: validateStatus(data.status)
        }})
    }
}

export const taskService = new TaskService()
