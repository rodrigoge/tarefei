import { Router } from "express";
import { activitiesRouter } from "./activities.routes";
import { tasksRouter } from "./tasks.routes";

const router = Router()

router.use('/tasks', tasksRouter)
router.use('/activities', activitiesRouter)

export { router };

