import { PrismaClient } from "@prisma/client";
import { ActivityDTO } from "types/ActivityDTO";
import validateRequiredField from "../utils/ValidateRequiredField";
import { taskService } from "./TaskService";

const prisma = new PrismaClient()

class ActivityService {
    async createActivity(data: ActivityDTO) {
        const activityRequest: ActivityDTO = {
            name: validateRequiredField('name', data.name).toString(),
            taskId: validateRequiredField('taskId', data.taskId).toString()
        } 

        const task = taskService.getTaskById(activityRequest.taskId)

        if(!task) {
            throw new Error('TaskID cannot be present')
        }
    
        return await prisma.activities.create({ data: {
            name: activityRequest.name,
            active: true,
            taskId: activityRequest.taskId
        }})
    }
}

export const activityService = new ActivityService()
