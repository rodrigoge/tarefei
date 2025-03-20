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

    async getActivityById(activityId: string) {
        return await prisma.activities.findUnique( {
            where: {
                id : activityId
            }
        })
    }

    async updateActivity(activityId: string, activity: ActivityDTO) {
        const activityFounded = await this.getActivityById(activityId)
        if(!activityFounded) {
            throw new Error('ActivityID cannot be present')
        }
        return prisma.activities.update({
            data: {
                name: activity.name,
                active: activity.active,
                taskId: activity.taskId
            },
            where: {id: activityFounded.id}
        })
    }

    async deleteActivity(activityId: string) {
        return prisma.activities.delete({
            where: {id: activityId}
        })
    }
}

export const activityService = new ActivityService()
