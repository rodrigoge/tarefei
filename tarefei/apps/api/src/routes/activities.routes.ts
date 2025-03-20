import { Router } from "express";
import { activityController } from "../controllers/ActivityController";

const activitiesRouter = Router()
activitiesRouter.post('/', activityController.createActivity)
activitiesRouter.put('/:activityId', activityController.updateActivity)
activitiesRouter.delete('/:activityId', activityController.deleteActivity)

export { activitiesRouter };

