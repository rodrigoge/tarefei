import { PrismaClient, TaskStatus } from "@prisma/client";

const prisma = new PrismaClient()

class TaskService {
    async createTask(data: { name: string; due_date?: Date; status: TaskStatus}) {
        if(data.due_date && new Date(data.due_date) < new Date()) {
            throw new Error('Date cannot be in the past')
        }
        return await prisma.tasks.create({ data: {
            name: data.name,
            due_date: new Date(data.due_date),
            status: data.status
        }})
    }
}

export const taskService = new TaskService()
