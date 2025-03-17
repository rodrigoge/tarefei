import { TaskStatus } from "@prisma/client"

export type TaskType = {
    name: string
    due_date?: Date
    status?: TaskStatus
}