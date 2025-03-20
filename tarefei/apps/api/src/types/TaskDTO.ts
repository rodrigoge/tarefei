import { TaskStatus } from "@prisma/client"

export type TaskDTO = {
    name: string
    due_date?: Date
    status?: TaskStatus
}