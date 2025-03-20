import { Router } from "express";
import { activityController } from "../controllers/ActivityController";

const activitiesRouter = Router()
activitiesRouter.post('/', activityController.createActivity)
activitiesRouter.put('/:activityId', activityController.updateActivity)

export { activitiesRouter };

