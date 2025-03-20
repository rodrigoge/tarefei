import { Router } from "express";
import { activityController } from "../controllers/ActivityController";

const activitiesRouter = Router()
activitiesRouter.post('/', activityController.createActivity)

export { activitiesRouter };

