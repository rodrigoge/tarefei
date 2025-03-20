import { Request, Response } from "express";
import { activityService } from "../services/ActivityService";

class ActivityController {
    async createActivity(request: Request, response: Response) {
        try {
            const activity = await activityService.createActivity(request.body)
            response.status(201).json(activity)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }

    async updateActivity(request: Request, response: Response) {
        try {
            const {activityId} = request.params
            const task = await activityService.updateActivity(activityId, request.body)
            response.status(200).json(task)
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }

    async deleteActivity(request: Request, response: Response) {
        try {
            const {activityId} = request.params
            await activityService.deleteActivity(activityId)
            response.status(204).json('Activity deleted successfully')
        } catch (error) {
            response.status(400).json({ error: error.message })
        }
    }
}

export const activityController = new ActivityController()