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
}

export const activityController = new ActivityController()